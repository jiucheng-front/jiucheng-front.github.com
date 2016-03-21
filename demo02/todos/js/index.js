/**
 * Created by jasonwang on 2016/2/18.
 */
//application.js
window.Todos=Ember.Application.create();
Todos.ApplicationAdapter=DS.FixtureAdapter.extend();
//Todos.ApplicationAdapter=DS.LSAdapter.extend({
//    namespace:"todos-emnerjs"
//});
//router.js
Todos.Router.map(function(){
    this.resource("todos",{path:"/"},function(){
        //add..
        this.route("active");//for active
        this.route("completed");//for completed
    });
});
Todos.TodosRoute=Ember.Route.extend({
    model:function(){
        return this.store.find("todo");
    }
});
Todos.TodosIndexRoute=Ember.Route.extend({
    model:function(){
        return this.modelFor("todos");
    }
});
//Active
Todos.TodosActiveRoute=Ember.Route.extend({
    model:function(){
        return this.store.filter("todo",function(todo){
            return !todo.get("isCompleted");
        });
    },
    renderTemplate:function(controller){
        this.render("todos/index",{controller:controller});
    }
});
//completed
Todos.TodosCompletedRoute=Ember.Route.extend({
    model:function(){
        return this.store.filter("todo",function(todo){
            return todo.get("isCompleted");
        })
    },
    renderTemplate:function(controller){
        this.render("todos/index",{controller:controller});
    }
});
//todo.js
Todos.Todo=DS.Model.extend({
    title:DS.attr("string"),
    isCompleted:DS.attr("boolean")
});
Todos.Todo.FIXTURES=[
    {
        id:1,
        title:"学习Html和CSS.",
        isCompleted:true
    },
    {
        id:2,
        title:"学习Javascript.",
        isCompleted:true
    },
    {
        id:3,
        title:"完成的任务。",
        isCompleted:true
    },
    {
        id:4,
        title:"学习Ember.js!",
        isCompleted:false
    },
    {
        id:5,
        title:"Profit",
        isCompleted:false
    }
];
//todos_controller.js,同步增加
Todos.TodosController=Ember.ArrayController.extend({
    //,同步增加
    actions:{
        createTodo:function(){
            var title=this.get("newTitle");
            if(!title.trim()){return;}
            var todo=this.store.createRecord("todo",{
                title:title,
                isCompleted:false
            });
            this.set("newTitle");
            todo.save();
        },
        //clear completed(1)-1..
        clearCompleted:function(){
            var completed=this.filterBy("isCompleted",true);
            completed.invoke("deleteRecord");
            completed.invoke("save");
        }
    },
    //clear completed(1)-2
    hasCompleted:function(){
        return this.get("completed")>0;
    }.property("completed"),
    completed:function(){
        return this.filterBy("isCompleted",true).get("length");
    }.property("@each.isCompleted"),
    //allAreDone 当全部任务都完成时候左上角会变化
    allAreDone:function(key,value){
        //切换
        if(value===undefined){
            return !!this.get("length")&&this.isEvery("isCompleted");
        }else{
            this.setEach("isCompleted",value);
            this.invoke("save");
            return value;
        }
    }.property("@each.isCompleted"),
    //左下角的未完成的数据时时更新
    remaining:function(){
        return this.filterBy("isCompleted",false).get("length");
    }.property("@each.isCompleted"),
    inflection:function(){
        var remaining=this.get("remaining");
        return remaining===1?"item":"items";
    }.property("remaining")
});
//todo_controller.js勾选当前是否已经完成的任务
Todos.TodoController=Ember.ObjectController.extend({
    //双击编辑效果
    actions:{
        editTodo:function(){
            this.set("isEditing",true);
        },
        //双击后的保存，失去光标或者按ENTER键时候就会触发
        acceptChanges:function(){
            this.set("isEditing",false);
            if(Ember.isEmpty(this.get("model.title"))){
                this.send("removeTodo");//如果更改后shi空自动删除
            }else{
                this.get("model").save();
            }
        },
        //Deleting a Model单项悬停删除
        removeTodo:function(){
            var todo=this.get("model");
            todo.deleteRecord();
            todo.save();
        }
    },
    isEditing:false,
    //勾选当前是否已经完成的任务  切换效果
    isCompleted:function(key,value){
        var model=this.get("model");
        if(value===undefined){
            return model.get("isCompleted");
        }else{
            model.set("isCompleted",value);
            model.save();
            return value;
        }
    }.property("model.isCompleted")
});
//edit_todo_view.js双击编辑后如何保存更改的内容
Todos.EditTodoView=Ember.TextField.extend({
    didInserElement:function(){
        this.$().focus();
    }
});
Ember.Handlebars.helper("edit-todo",Todos.EditTodoView);










