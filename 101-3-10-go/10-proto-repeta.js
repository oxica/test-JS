const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
}

const mango = new User({email:'mango@gmail.com', password: 111111});

mango.changeEmail("my-new-mail@gmail.com");

console.log(mango);