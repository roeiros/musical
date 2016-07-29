var emailErr = document.getElementById('emailErr');
function signup(e){
    e.preventDefault();
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

$('#mail').keydown(function() {
    if (emailErr.style.display == 'block'){
        emailErr.style.display = 'none';
    }
});

