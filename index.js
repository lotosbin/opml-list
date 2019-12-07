#!/usr/bin/env node
console.log(`test`);
var request = require('request');
var fs = require('fs');
var files = [
    { url: 'https://raw.githubusercontent.com/timqian/chinese-independent-blogs/master/feed.opml', filename: 'data/feed.opml' },
    { url: 'https://raw.githubusercontent.com/RSS-Renaissance/awesome-blogCN-feeds/master/feedlist.opml', filename: 'data/feedlist.opml' }
];
function downloadFile(uri, filename, callback) {
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback);
}
files.forEach(file=>{
    downloadFile(file.url,file.filename,function(){
        console.log(file.filename+'下载完毕');
    })
})

