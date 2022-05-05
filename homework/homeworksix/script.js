const setBg = () => {
  const randomColor = Math.floor(Math.random()*15237411).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();