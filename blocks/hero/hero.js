export default function decorate(block) {
    console.log("Block is ", block);
    const h1 = document.createElement("h1");
    h1.textContent = "Headline about online pharmacy service";
    block.innerHTML = "";
    block.append(h1);
    const btn = document.createElement("button");
    var btntext = document.createTextNode("Primary");
    btn.appendChild(btntext);
    blocks.appendChild(btn);
  } 