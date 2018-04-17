let $ = require('../lib/minAjax.js');

let createDirectory = (dirName, s, e) => {
    $.ajax({
        url : '/filesystem/createDirectory',
        type : 'POST',
        data : {
          name : dirName
        },
        success : function(data){
            s(data);
        },
        errorCallback : () => {
            e();
        }
    
    });

};


module.exports = {
    createDirectory : createDirectory
}