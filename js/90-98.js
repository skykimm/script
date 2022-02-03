const rand1 = Math.random();
const rand2 = Math.random();
const rand3 = Math.random();

document.write(rand1 + '<br>');
document.write(rand2 + '<br>');
document.write(rand3 + '<br><br>');


const url = new URL("https://dic.daum.net/word/view.do?wordid=ekw000033653&q=coffee");
const urlParams = url.searchParams;

document.write(urlParams.get('wordid') + '<br>'); 
document.write(urlParams.get('q') + '<br>'); 

document.write(urlParams.getAll('q') + '<br><br>'); 

function handleOnClick()  {
    alert('Hello!!');
}

function handleOnClick2()  {
    let like = confirm("좋아요 눌러주실거죠?");
    document.getElementById('result').innerText = like;
}

function handleOnClick3()  {
    alert(document.getElementById('ex').className);
}

function getInnerText(){
    const element = document.getElementById('content');
    alert(element.innerText);
}

function getInnerHTML()  {
    const element = document.getElementById('content');
    alert(element.innerHTML);
}

function setInnerText()  {
    const element = document.getElementById('content');
    element.innerText = "<div style='color:red'>A</div>";
}

function setInnerHTML()  {
    const element = document.getElementById('content');
    element.innerHTML = "<div style='color:red'>A</div>";
}