
window.onload = function() {
    document.getElementById('submit_button').addEventListener('click', function() {join_check()});
}

// check valid id
// check valid password
// check valid code
function join_check() {
    if (document.getElementsByName('id')[0].value === '') {
        alert('Please type User ID.');
        document.getElementsByName('id')[0].focus();
    } else if (document.getElementsByName('pass')[0].value == '') {
        alert('Please type Password.');
        document.getElementsByName('pass')[0].focus();
    } else if (document.getElementsByName('code')[0].value == '') {
        alert('Please Enter Serial Code.');
        document.getElementsByName('code')[0].focus();
    } else {
        formSend();
    }
}

function formSend(){

    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var a_form = document.getElementById("serial_form");
    var FD = new FormData(a_form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
        console.log('frmSend XHR load');
        alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        console.log('frmSend XHR error');
    });

    // Set up our request
    XHR.open("POST", "./php/setSerial.php"); //------------------save.php script URL

    // The data sent is what the user provided in the form
    XHR.send(FD);
}