src = 'userClass.js';
$(document).ready(function(){
    $('#BasicBtn').click(function() {
        $.get('http://localhost:8080/BasicQuiz', function(result){
            /* This is where to add the code to add the data to the class */
            console.log('I got here aswell')
        })

    });

    $('#IntermediateBtn').click(function() {
        $.get('http://localhost:8080/IntermediateQuiz', function(result){
            console.log(result)
            console.log('I got here aswell')
        })
    });

    $('#AdvancedBtn').click(function() {
        $.get('http://localhost:8080/AdvancedQuiz', function(result){
            console.log(result)
            console.log('I got here aswell')
        })
    });

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
    });


    $('#indexGetBtn').click(function() {
        var currentUser = new userClass("","","","",0,0,0);
        if ($('#UsernameIn').val() == '' || $('#PasswordIn').val() == ''){
            alert("Please make sure all fields are entered")
        }
        else {
            currentUser.Username = $('#UsernameIn').val()
            currentUser.Password = $('#PasswordIn').val()
            console.log(currentUser)
            $.get('http://localhost:8080/signIn', currentUser ,function (result) {
            if (result == ''){
                alert("This login is incorrect try again")
            }else
            {
                console.log(result);
                currentUser.populateUser(result);
                console.log(currentUser);
            }

            })
        }
    });

});