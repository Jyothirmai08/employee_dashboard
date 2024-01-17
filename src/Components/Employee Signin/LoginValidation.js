

function Validation(values) {
    let error ={}
    const email_pattern = /^[^\s@]+@egradtutor\.in$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.ed_mailid === "") {
        error.ed_mailid = "Name should not be empty"
    }
    else if(!email_pattern.test(values.ed_mailid)) {
        error.ed_mailid = "Email didn't match"
    }
    else {
        error.ed_mailid = ""
    }

    if(values.ed_password === "") {
        error.ed_password = "Password should not be empty"
    } else if(!password_pattern.test(values.ed_password)) {
        error.ed_password = "Password didn't match"
    }
    else {
        error.ed_password = ""
    }
    return error;
}

export default Validation;