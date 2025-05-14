const card = document.querySelector("section");
let isClicked = true

card.addEventListener("click" , (e) => {
  e.preventDefault();
  if (isClicked){
    card.style.boxShadow = "5px 5px 10px 2px rgb(0 0 0 / 0.8)"
  } else {
    card.style.boxShadow = "none"
  }
  isClicked = !isClicked
 
})
