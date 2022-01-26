const js = {
    id : 123,
    product : {
        type : 'book',
        page : 200,
        title : 'javascript',
        tags : ['js', 'script']
    }
};

const json = JSON.stringify(js);

document.write(typeof js + '<br>');
document.write(json + '<br><br>');