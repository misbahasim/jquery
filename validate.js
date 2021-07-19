$(function () {
    $("#fname_err_msg").hide();
    $("#sname_err_msg").hide();
    $("#email_err_msg").hide();
    $("#password_err_msg").hide();
    $("#retype_password_err_msg").hide();

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#fname").blur(function () {
        checkFname();
    });
    $("#sname").blur(function () {
        checkSname();
    });
    $("#mail").blur(function () {
        checkEmail();
    });
    $("#password").blur(function () {
        checkPassword();
    });
    $("#retype_password").blur(function () {
        checkRpassword();
    });

    function checkFname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#fname").val();
        if (pattern.test(fname) && fname !== '') {
            $("#fname_err_msg").hide();
            $("#fname").css("border", "2px solid #34F458");
        }
        else {
            $("#fname_err_msg").html("Should contain only letters");
            $("#fname_err_msg").show();
            $("#fname").css("border", "2px solid #F90A0A");
            error_fname = true;
        }
    }
    function checkSname() {
        var pattern = /^[a-zA-Z]*$/;
        var sname = $("#sname").val();
        if (pattern.test(sname) && sname !== '') {
            $("#sname_err_msg").hide();
            $("#sname").css("border", "2px solid #34F458");
        }
        else {
            $("#sname_err_msg").html("Should contain only letters");
            $("#sname_err_msg").show();
            $("#sname").css("border", "2px solid #F90A0A");
            error_sname = true;
        }
    }
    function checkPassword() {
        var password_lenght = $("#password").val().length;
        if (password_lenght < 8) {
            $("#password_err_msg").html("At least 8 character");
            $("#password_err_msg").show();
            $("#password").css("border", "2px solid #F90A0A");
            error_password = true;
        }
        else {
            $("#password_err_msg").hide();
            $("#password").css("border", "2px solid #34F458");
        }
    }
    function checkRpassword() {
        var password = $("#password").val();
        var rpassword = $("#retype_password").val();
        if (password !== rpassword) {
            $("#retype_password_err_msg").html("password did not match");
            $("#retype_password_err_msg").show();
            $("#retype_password").css("border", "2px solid #F90A0A");
            error_retype_password = true;
        } else {
            $("#retype_password_err_msg").hide();
            $("#retype_password").css("border", "2px solid #34F458");
        }
    }
    function checkEmail() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#mail").val();
        if (pattern.test(email) && email !== '') {
            $("#email_err_msg").hide();
            $("#mail").css("border", "2px solid #34F458");
        }
        else {
            $("#email_err_msg").html("Invalid email");
            $("#email_err_msg").show();
            $("#mail").css("border", "2px solid #F90A0A");
            error_email = true;
        }
    }

    $("#registration_form").submit(function () {
        error_fname = false;
        error_sname = false;
        error_email = false;
        error_password = false;
        error_retype_password = false;

        checkFname();
        checkSname();
        checkEmail();
        checkPassword();
        checkRpassword();

        if (error_fname === false && error_sname === false && error_email === false &&
            error_password === false && error_retype_password === false) {
            alert("Registration successful");
            return true;
        } else {
            alert("Fill the form correctly");
            return false;
        }
    });
});