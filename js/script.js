
const reveal = () => {
    // const button = document.querySelector("#movetop");

    window.addEventListener("scroll", function () {
        if (this.scrollY > 200) {
            document.querySelector("#movetop").style.display = "block"
        } else {
            document.querySelector("#movetop").style.display = "none"
        }
    })
}
reveal();

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});