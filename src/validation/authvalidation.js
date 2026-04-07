exports.validname1 = (name) => {
    const nameregex = /^[a-zA-Z]+$/;
    return nameregex.test(name);
}
exports.validemail1 = (email) => {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailregex.test(email);
}

exports.validpassword1 = (password) => {
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordregex.test(password);
}
