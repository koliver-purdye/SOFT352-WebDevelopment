src = 'userClass.js';
var signInSuc = false;
$(document).ready(function(){


    $('#indexADDBtn').click(function() {
    let userToAdd = new User("","","","",0,0,0);
    if($('#Username').val() == '' || $('#Firstname').val() == '' || $('#Lastname').val() == ''|| $('#Password').val() == '') {
        alert("Please make sure all fields are entered")
    }
    else {
        userToAdd.Username = $('#Username').val()  //Populate the userClass that will be posted
        userToAdd.Firstname = $('#Firstname').val()
        userToAdd.Lastname = $('#Lastname').val()
        userToAdd.Password = $('#Password').val()
        userToAdd.testRes1 = 0
        userToAdd.testRes2 = 0
        userToAdd.testRes3 = 0

        $.post('http://localhost:8080/AddUser', currentuser ,function (result) {

            alert("Your profile has been set up")
            populateUser(userToAdd,result);

        })
    }
    emptyInputs();
});

$('#indexGetBtn').click(function() {
    let currentUser = new User("","","","",0,0,0);
    var queryToPass = "";
    if ($('#UsernameIn').val() === '' || $('#PasswordIn').val() === ''){
        alert("Please make sure all fields are entered");
    }
    else {
        currentUser.Username = $('#UsernameIn').val();
        currentUser.Password = $('#PasswordIn').val();
        queryToPass = currentUser.Username;
        console.log(currentUser);
        $.get('http://localhost:8080/signIn', currentUser ,function (result) {
            if (result == null){
                alert("This login is incorrect try again");
            }else
            {
                signInSuc = true;
                console.log(result);
                populateUser(currentUser,result);
                console.log(currentUser);
                alert("sign in was successful");
                window.location.href='/Profile?Username='+queryToPass;
            }

        })
    }


});



function emptyInputs(){
    document.getElementById('Username').value="";
    document.getElementById('UsernameIn').value="";
    document.getElementById('Firstname').value="";
    document.getElementById('Lastname').value="";
    document.getElementById('Password').value="";
    document.getElementById('PasswordIn').value="";


}
});