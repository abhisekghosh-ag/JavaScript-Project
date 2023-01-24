let target = document.body;


const randomColorGenerator = () => {
    let value = "0123456789ABCDEF";
    let hexaValue = "#"
    for (let i = 0; i < 6; i++) {
        hexaValue = hexaValue + value[Math.floor(Math.random() * 16)];
    }
    return hexaValue;
};
console.log(randomColorGenerator());

const applyChanges = (event) => {
    let circle = document.createElement("div");
    circle.className = "add"

    circle.style.left = `${event.pageX - 10}px` ;
    circle.style.top = `${event.pageY - 10}px`;
    
    circle.style.backgroundColor = randomColorGenerator();

    document.body.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 8000);
}

target.addEventListener('click', applyChanges)