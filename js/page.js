let amount = 20;

for (let i = 0; i < amount; i++) {
  let elem = document.createElement("div");
  elem.style.animationDelay = (Math.random() * 10.0).toFixed(1) + "s";
  document.getElementById("visualizer").appendChild(elem);
}
