const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};


let colorInterval;

const startChngColor = () => {
    if(!colorInterval){
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000)
}

}

const stopChngColor = () => {
    clearInterval(colorInterval);
    colorInterval = null
}

document.querySelector("#start").addEventListener("click", startChngColor)

document.querySelector("#stop").addEventListener("click",
    stopChngColor)
