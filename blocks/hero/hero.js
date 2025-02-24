export default function decorate(block) {
    // const btn = getElementsByClassName("button")
    // btn[0].textContent = "Primary";
    // block.append(btn);

    const headerButton = document.createElement('button');
    headerButton.textContent = "Lilly Medicine";
    headerButton.classList.add('header-button');
    headerButton.addEventListener('click',()=>{
      alert('click event');
    })
    block.appendChild(headerButton);

    const heading = document.createElement('h1');
    heading.textContent = "Headline about online pharmacy service";
    block.appendChild(heading);
    // heading.classList.add('custom-button');

    const subHeading = document.createElement('p');
    subHeading.textContent = "LilyDirect makes it simple to get authentic Lilly medicines directly to you, if prescribed.";
    // heading.classList.add('custom-button');
    block.appendChild(subHeading);

    const customButton = document.createElement('button');
    customButton.textContent = "Primary";
    customButton.classList.add('custom-button');
    customButton.addEventListener('click',()=>{
      alert('click event');
    })

    block.appendChild(customButton);
  } 