function login() {
    let x = document.getElementById("forum-Holder");
    let y = document.getElementById("forum-Holder2")

if (x.style.display === "none") {
y.style.display = "none"
x.style.display = "block"
console.log("left")
}
else if (x.style.display === "block") {
x.style.display = "none"
y.style.display = "block"
console.log("right")
}

else {
    console.log("orange")
}

}