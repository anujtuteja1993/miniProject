function saveData() {
    let email, psw;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
    if (
        user_records.some((v) => {
            return v.email == email && v.psw == psw;
        })
    ) {
        alert("Login Pass");
        let current_user = user_records.filter((v) => {
            return v.email == email && v.psw == psw;
        })[0];
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
        window.location.href = "index.html";
    } else {
        alert("Unable to login. Please check your email and password");
    }
}

let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
if (name != "") {
    alert("Already logged in. Redirecting to the homepage");
    window.location.href = "index.html";
}

$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});