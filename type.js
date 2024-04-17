const button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
  const item = button[i];
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    const itemDescription = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");
    const colorch = this.querySelector(".descripton");

    if (itemDescription.style.maxHeight) {
      itemDescription.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
      this.querySelector(".btn p").style.color = "black";
    } else {
      itemDescription.style.maxHeight = itemDescription.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
      this.querySelector(".btn p").style.color = "hsl(290, 13%, 36%)";
    }
  });
}
