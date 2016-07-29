var emailErr = document.getElementById('emailErr');
function signup(e){
    e.preventDefault();
    var emailVal = document.getElementById("mail").value;
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(pattern.test(emailVal)===true)
    {
        $.ajax({
            type: "POST",
            url: '/user/signup',
            data: {
                name  : frmSignup.user_name.value,
                email : frmSignup.user_email.value
            },
            success: function(){
                alert('user added');
            },
            error : function(){
                emailErr.style.display = 'block';
            }
        });
    }
    else
    {
        $("#emailErr").text( emailVal + " is not a valid email");
        emailErr.style.display = 'block';
    }
}

$('#mail').keydown(function() {
    if (emailErr.style.display == 'block'){
        emailErr.style.display = 'none';
    }
});

