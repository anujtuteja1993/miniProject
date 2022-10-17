function saveData() {
    let name, email, psw;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
    if (
        user_records.some((v) => {
            return v.email == email;
        })
    ) {
        alert("The account already exists. Please use another email address");
    } else {
        user_records.push({
            name: name,
            email: email,
            psw: psw,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Account created successfully! Login to Continue")
    }
}