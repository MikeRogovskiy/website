var Deploy = require('ftp-deploy');
var ftpDeploy = new Deploy();
require('dotenv').config()
 
var config = {
    host : process.env.FTP_HOST,
    user : process.env.FTP_USER,
    password : process.env.FTP_PASSWORD,
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/client',
    include: ['*'],
    deleteRemote: true 
}
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});
ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; 
    data.transferredFileCount;
    data.filename; 
});
ftpDeploy.on("uploaded", function(data) {
    console.log(data); 
});
ftpDeploy.on("log", function(data) {
    console.log(data);
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err);
});