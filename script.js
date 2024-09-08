function login() {
    username = window.prompt("Type in your username:");
    password = window.prompt("Whats your password:");
    var logedIn;

    if (username == "SkilledApik" && password == "Mark") {
        alert("Login Accessed!")
        logedIn = true;
    } else {
        alert("Access Denied!")
    }

    if (logedIn) {
        loginButton = document.getElementById("loginButton");
    }
}