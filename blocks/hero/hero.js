export default function decorate(block) {
    // const btn = getElementsByClassName("button")
    // btn[0].textContent = "Primary";
    // block.append(btn);
    const customButton = document.createElement('button');
    customButton.textContent = "Primary";
    customButton.classList.add('custom-button');
    customButton.addEventListener('click',()=>{
      alert('click event');
    })

    block.appendChild(customButton);
  } 