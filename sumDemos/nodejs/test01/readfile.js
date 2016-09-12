var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');/**
 * Created by Administrator on 2016/9/8.
 */
