let count = 0;
let decrease = document.querySelector(".btn-decrease");
let increase = document.querySelector(".btn-increase");
let reset = document.querySelector(".btn-reset");

decrease.addEventListener("click", () => {
    count--;
    document.querySelector("span").innerText = count;
    if (count < 0) {
        document.querySelector("span").style.color = "red"
    }
    else if(count === 0) {
        document.querySelector("span").style.color = "yellow"

    }
});
increase.addEventListener("click", () => {
    count++;
    document.querySelector("span").innerText = count;
    if (count > 0) {
        document.querySelector("span").style.color = "green"
    }
    else if(count === 0){
        document.querySelector("span").style.color = "yellow"

    }
});
reset.addEventListener("click", () => {
    count = null;
    document.querySelector("span").innerText = count;
});
