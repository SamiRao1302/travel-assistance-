document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('form').addEventListener('submit', (e) => {
    let valid = true;
    document.querySelectorAll('input').forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });
    if (!valid) {
        e.preventDefault();
        alert("Please fill out all fields.");
    }
});
