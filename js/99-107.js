function createDiv(){
    const newdiv = document.createElement('div');
    const newtext = document.createTextNode('안녕하세요');

    newdiv.appendChild(newtext);
    
    document.body.appendChild(newdiv);
}

function deleteDiv(){
    const div = document.getElementById('my_div');
    div.remove();
}

function getDiv1() {
    const div1 = document.getElementById('div_1');
    alert(div1.innerText);
} 

function getMyClass() {
    const div_list = document.getElementsByClassName('my_class');
    
    const div_list_length = div_list.length;
    alert(div_list_length);
    
for(let i = 0; i < div_list_length; i++)  {
        alert(div_list[i].innerText);
    }
};

const my_btn = document.getElementById('my_button');

my_btn.addEventListener('click', () => {
    alert("안녕하세요!!!");
});

my_btn.addEventListener('click', () => {
    alert("만나서 반가워요!!");
});


const my_btn2 = document.getElementById('my_btn2');

my_btn2.addEventListener('click', () => {
    alert('안녕하세요!!');
}, { once : true});