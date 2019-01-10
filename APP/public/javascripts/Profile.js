/* this function fails to provide the functionality I wanted it too */
src="userClass.js"
$(document).ready(function(){

    $(window).on("load",showProfileDetails());
    console.log(document.cookie)

// Getting the cookie value

        var getCookieValue = function(cookie){
            var cookieArray = cookie.split("=");
            return cookieArray[1].trim();
        };

        var cookie = document.cookie;
        var cookieValue = getCookieValue(cookie);
        var cookieValueString = cookieValue.toString(); //Now we have the username we can use this to extract all of the users details from the database
        console.log(cookieValueString);
        console.log(cookieValue);
//-------------------------------------------------
//Making show user a user object-------------------

    var showUser = {
        Username: "",
        Firstname: "",
        Lastname: "",
        Password: "",
        testRes1: "",
        testRes2: "",
        testRes3: ""
    }


//-------------------------------------------------
        function showProfileDetails(){

            $.get('http://localhost:8080/showProfile', cookieValueString, function(result) //cookieValueString does not pass through a variable. Where this get method is handled the data cannot be used. I could not resolve this
                {
                    if (result == null){
                        alert("We cannot display your profile details at this time");
                }
                    else {
                        populateUser(showUser,result); //result should come back as an object
                }
    })

//This section should have displayed the users data------------------------------------------
   //document.getElementById('FirstName').innerHTML = showUser.Username
   //document.getElementById('SecondName').innerHTML = showUser.Lastname;
   //document.getElementById('Basic Test Score').innerHTML = showUser.testRes1;
   //document.getElementById('Intermediate Test Score').innerHTML = showUser.testRes2;
   //document.getElementById('Advanced Test Score').innerHTML = showUser.testRes3
            //-------------------------------------------------------------------------------
}
}

)