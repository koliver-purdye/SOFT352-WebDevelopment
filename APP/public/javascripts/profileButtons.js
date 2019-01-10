src = 'userClass.js';
var signInSuc = false;
$(document).ready(function(){


    $('#indexADDBtn').click(function() {
    let userToAdd = new User("","","","",0,0,0);
    if($('#Username').val() == '' || $('#Firstname').val() == '' || $('#Lastname').val() == ''|| $('#Password').val() == '') { //Checks all the input box values
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

        $.post('http://localhost:8080/AddUser', userToAdd ,function (result) {

            alert("Your profile has been set up")
            populateUser(userToAdd,result); //populates the user class with the information. This was planned to be used further in the program but was not

        })
    }
    emptyInputs(); //Clears all input boxes
});

$('#indexGetBtn').click(function() { //This is the login button
    let currentUser = new User("","","","",0,0,0);
    var queryToPass = "";
    if ($('#UsernameIn').val() === '' || $('#PasswordIn').val() === ''){
        alert("Please make sure all fields are entered");
    }
    else {
        currentUser.Username = $('#UsernameIn').val();
        currentUser.Password = $('#PasswordIn').val();
        //queryToPass = currentUser.Username;
        console.log(currentUser);
        $.get('http://localhost:8080/signIn', currentUser ,function (result) { //Gets the details of the user who has just logged in
            if (result == null){
                alert("This login is incorrect try again"); //If the result is empty(No user with those details)
            }else
            {
                signInSuc = true;
                console.log(result);
                populateUser(currentUser,result); //Again populate the object to use later but never did
                console.log(currentUser);
                alert("sign in was successful");
                window.location.href='/Profile?Username='+currentUser.Username + '?Firstname=' + currentUser.Firstname + '?Lastname=' + currentUser.Lastname+'?testRes1='+ currentUser.testRes1+'?testRes2='+ currentUser.testRes2+'?testRes3='+ currentUser.testRes3; //*No longer need to pass this as a variable if we use local storage to hold the users details

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