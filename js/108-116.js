function count(type)  {
    const resultElement = document.getElementById('result');
    let number = resultElement.innerText;

        if(type === 'plus') {
        number = parseInt(number) + 1;
        }else if(type === 'minus')  {
        number = parseInt(number) - 1;
        }

    resultElement.innerText = number;
}

function btnActive()  {
    const target = document.getElementById('target_btn');
    target.disabled = false;
}

function btnDisabled()  {
    const target = document.getElementById('target_btn');
    target.disabled = true;
}

function newPage(){
    window.location.href = 'https://www.naver.com'
}

function addList()  {
    const addValue = document.getElementById('addValue').value;
    const li = document.createElement("li");
    
    li.setAttribute('id',addValue);
    
    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);
    
    document.getElementById('fruits').appendChild(li);
}

function addList2(){
    const addValue2 = document.getElementById('addValue2').value;
    const li = document.createElement('li');

    li.setAttribute('id',addValue2);

    const textNode = document.createTextNode(addValue2);
    li.appendChild(textNode);

    document.getElementById('fruits2').appendChild(li);
}

function removeItem()  {

    const ul = document.getElementById('fruits');
    const items = ul.getElementsByTagName('li');

    if(items.length > 0)  {
        items[0].remove();
    }
}

function printName()  {
    const name = document.getElementById('name').value;
    document.getElementById("result").innerText = name;
}