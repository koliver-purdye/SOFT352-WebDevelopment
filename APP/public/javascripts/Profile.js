src="userClass.js"
$(document).ready(function(){

    $(window).on("load",showProfileDetails());
        function showProfileDetails(){
            var showUser = {
                Username: document.cookie,
                Firstname: "",
                Lastname: "",
                Password: "",
                testRes1: "",
                testRes2: "",
                testRes3: ""
            }
            console.log(showUser)
            $.get('http://localhost:8080/showProfile', showUser, function(result)
                {
                    if (result == null){
                        alert("We cannot display your profile details at this time");
                }
                    else {
                        populateUser(currentUser,result);
                }
    })

            console.log(showUser);
    document.getElementById('FirstName').innerHTML(showUser.Username)
    document.getElementById('SecondName').innerHTML(showUser.Lastname);
    document.getElementById('Basic Test Score').innerHTML(showUser.testRes1);
    document.getElementById('Intermediate Test Score').innerHTML(showUser.testRes2);
    document.getElementById('Advanced Test Score').innerHTML(showUser.testRes3);

}
}

)