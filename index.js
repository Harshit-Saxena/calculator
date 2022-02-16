const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let number = btn.getAttribute("data-num");
        screen.value += number;
    });
});

equalBtn.addEventListener("click", () => {
    if (screen.value === '') {
        alert("Input is empty");
    }
    else {
        let result = eval(screen.value);
        screen.value = result;
    }
});

clearBtn.addEventListener("click", () => {
    screen.value = '';
})