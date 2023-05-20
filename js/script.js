
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