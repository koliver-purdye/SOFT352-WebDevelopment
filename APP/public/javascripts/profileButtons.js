src = 'userClass.js';
$(document).ready(function(){
    var signInSuc = "false";

    $('#indexADDBtn').click(function() {
    let currentuser = new userClass("","","","",0,0,0);
    if($('#Username').val() == '' || $('#Firstname').val() == '' || $('#Lastname').val() == ''|| $('#Password').val() == '') {
        alert("Please make sure all fields are entered")
    }
    else {
        currentuser.Username = $('#Username').val()  //Populate the userClass that will be posted
        currentuser.Firstname = $('#Firstname').val()
        currentuser.Lastname = $('#Lastname').val()
        currentuser.Password = $('#Password').val()
        currentuser.testRes1 = 0
        currentuser.testRes2 = 0
        currentuser.testRes3 = 0

        $.post('http://localhost:8080/AddUser', currentuser ,function (result) {

            alert("Your profile has been set up")

        })
    }
    emptyInputs();
});

$('#indexGetBtn').click(function() {
    var currentUser = new userClass("","","","",0,0,0);
    if ($('#UsernameIn').val() == '' || $('#PasswordIn').val() == ''){
        alert("Please make sure all fields are entered");
    }
    else {
        currentUser.Username = $('#UsernameIn').val();
        currentUser.Password = $('#PasswordIn').val();
        console.log(currentUser);
        $.get('http://localhost:8080/signIn', currentUser ,function (result) {
            if (result == null){
                alert("This login is incorrect try again");
            }else
            {
                signInSuc = "true";
                console.log(result);
                currentUser.populateUser(result);
                console.log(currentUser);
                alert("sign in was successful");
            }

        })
    }
    signInSuccess();
    emptyInputs();

});


function signInSuccess(){
    console.log('function runs')
    if (signInSuc = 'true'){
        console.log('it gets here');
       $.get('http://localhost:8080/Basic', function (result) {
        console.log(result);
        })

    }
}

function emptyInputs(){
    document.getElementById('Username').value="";
    document.getElementById('UsernameIn').value="";
    document.getElementById('Firstname').value="";
    document.getElementById('Lastname').value="";
    document.getElementById('Password').value="";
    document.getElementById('PasswordIn').value="";

}
});