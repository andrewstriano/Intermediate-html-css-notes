const byeButton = document.querySelector('.bye');
const text = document.querySelector(".text");
text.style.opacity = "1";

byeButton.addEventListener("click", () => {

    let opacity = text.style.opacity

    let newOpacity = opacity - 0.1;

   return text.style.opacity = newOpacity;
})