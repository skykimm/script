const arr = ['apple', 'banana', 'orange'];

const reverse = [];
const reverse2 = arr.reverse();

for(let i = arr.length-1; i >= 0; i--){
    reverse.push(arr[i]);
}
document.write('arr : ' + arr);
document.write('<br>');
document.write('reverse : ' + reverse);
document.write('<br><br>');

document.write('reverse2 : ' + reverse2);
document.write('<br><br>');

const maxValue = Math.max(1,2,3,4,5);
const minValue = Math.min(1,2,3,4,5);

document.write('Max : ' + maxValue);
document.write('<br>');
document.write('Min : ' + minValue);
document.write('<br><br>');

const num = [1,2,3,4,5];
const maxValue2 = Math.max.apply(null, num);
const minValue2 = Math.min.apply(null, num);

document.write('Max : ' + maxValue2);
document.write('<br>');
document.write('Min : ' + minValue2);
document.write('<br><br>');

const value = [1,2,3,4,5];
const firstValue = value[0];
const lastValue = value[4];

document.write(firstValue+'<br>');
document.write(lastValue+'<br><br>');

const value2 = [1,2,3,4,5];
const last = value2[value2.length-1];

document.write(last+'<br><br>');

function mult(a,b){
    if(b === undefined){
        b= 1;
    }
    return a * b;
}
document.write(mult(3,2));
document.write('<br>');
document.write(mult(3) + '<br><br>');

const obj = {
    id : 123,
    product : {
        type : 'book',
        title : 'js start',
        page : 200
    }
};

document.write(obj.id + '<br>');
document.write(obj.product.type + '<br>');
document.write(obj.product.title + '<br>');
document.write(obj.product.page + '<br><br>');

const obj2 = {
    id : 123,
    product : {
        'product type' : 'book',
        title : 'js start',
        page : 200
    }
};

document.write(obj2['id'] + '<br>');
document.write(obj2.product['product type'] + '<br>');
document.write(obj2['product']['title'] + '<br>');
document.write(obj2['product'].page + '<br><br>');

const proty = {
    id : 123,
    product : {
        'product type' : 'book',
        title : 'js start',
        page : 200
    }
};

proty.stock = 100;
document.write(proty.stock+'<br>');

proty.id = 456;
document.write(proty.id+'<br><br>');

const com = {};

['red', 'green', 'blue'].forEach((color) => {
    com[color] = color.substring(0,1);
});

document.write(Object.keys(com).length + '<br>');
document.write(com.red +'<br>');
document.write(com.green +'<br>');
document.write(com.blue +'<br><br>');

const person = {
    name : 'sky',
    country : 'korea'
}

const haveName = person.hasOwnProperty('name');
const haveAge = person.hasOwnProperty('age');

document.write(haveName + '<br>');
document.write(haveAge + '<br><br>');

const person2  = {
    name : 'skykim',
    country : 'suwon'
}
const havename = 'name' in person2;
const havecon = 'country' in person2;

document.write(havename + '<br>');
document.write(havecon + '<br><br>');