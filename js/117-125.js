function checkCapsLock(event)  {
    if (event.getModifierState("CapsLock")) {
        document.getElementById("message").innerText 
        = "Caps Lock이 켜져 있습니다."
    }else {
        document.getElementById("message").innerText 
        = ""
    }
}

function getGender(event) {
    document.getElementById('result').innerText = event.target.value;
}

function getCheckboxValue(event)  {
    let result = '';
    if(event.target.checked)  {
        result = event.target.value;
    }else {
        result = '';
    }

    document.getElementById('result').innerText = result;
}

function checkSelectAll()  {
    const checkboxes = document.querySelectorAll('input[name="animal"]');
    const checked = document.querySelectorAll('input[name="animal"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');

    if(checkboxes.length === checked.length)  {
        selectAll.checked = true;
        }else {
            selectAll.checked = false;
        }
    }

    function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('animal');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

function checkOnlyOne(element) {
 
    const checkboxes = document.getElementsByName("animal");

    checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;
}