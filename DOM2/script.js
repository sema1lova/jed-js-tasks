
const btnList = document.querySelectorAll(".btn__div button");

btnList.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        btnList.forEach(item => {
            item.classList.remove("active");
        })
        e.target.classList.add("active")
    })
})


// task 2
const colorButtons = document.querySelectorAll(".btn__div2 .color-btn");

colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.dataset.color;
    document.body.style.backgroundColor = color;
  });
});

