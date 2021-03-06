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

const string = {
    x : undefined,
    y : Symbol(''),
    z : function(){
        alert('hi')
    },

    arr : [
        1,
        undefined,
        Symbol(''),
        function(){
            alert('hi')
        }
    ]
};

const json2 = JSON.stringify(string);
document.write(json2 + '<br><br>');

const json3 = `{
    "id" : 123,
    "product" :{
        "type" : "book",
        "page" : 200,
        "title" : "sky",
        "date" : "2022-01-27"
    }
}`;

const jsonobj = JSON.parse(json3);

document.write(jsonobj.id + '<br>');
document.write(jsonobj.product.date + '<br>');
document.write(jsonobj.product.title + '<br><br>');

function isEmpty(obj){
    if(obj.constructor === Object
        && Object.keys(obj).length === 0){
            return true;
        }
        return false;
}
const obj1 = {};
const obj2 = {name : 'js'};
const str = "javascript";

document.write(isEmpty(obj1) + '<br>');
document.write(isEmpty(obj2) + '<br>');
document.write(isEmpty(str) + '<br><br>');

function empty(obj2){
    if(obj2.constructor !== Object){
        return false;
    }

    for(let prop in obj2){
        if(obj2.hasOwnProperty(prop)){
            return false;
        }
    }
    return true;
}

document.write(empty(obj1) + '<br>');
document.write(empty(obj2) + '<br>');
document.write(empty(str) + '<br><br>');

const isme = {
    name : "sky",
    age : 29
};

const isme2 = {
    country : "suwon",
    age : 29
};

function sky(isme,isme2){
    const newSky = {};
    for(let att in isme){
        newSky[att] = isme[att];
    }

    for(let att in isme2){
        newSky[att] = isme2[att];
    }
    return newSky;
}

document.write(JSON.stringify(sky(isme,isme2))+'<br><br>');

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
let day = today.getDay();

document.write(today + '<br>');
document.write(year + '/' + month + '/' +  date +'<br>');
document.write(day + '<br><br>');

