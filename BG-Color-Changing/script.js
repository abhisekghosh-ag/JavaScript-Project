let btn = document.querySelector(".bg-btn");
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = colorGenerator();
    document.querySelector(".color-value").innerText = colorGenerator();
    console.log(colorGenerator())
});

const colorGenerator = () => {
    let colorsValue = "0123456789ABCDEF";
    let hexaValue = "#";
    for (let i = 0; i < 6; i++) {
        hexaValue = hexaValue + colorsValue[Math.floor(Math.random()* 16)];
    }
    return hexaValue;
    
}