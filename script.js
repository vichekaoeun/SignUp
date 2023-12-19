p1 = document.querySelector("#Password");
p2 = document.querySelector("#Confirm");
btn = document.querySelector(".create_btn");
form = document.querySelector(".field");

btn.addEventListener("click", () => {
    if (p1.value !== p2.value) {
        alert("Password do not match.");
        event.preventDefault();
    }
})