import searchIcon from '../../icons/search.svg';
export default function decorate(block) {

    const header = document.createElement('div');
    header.classList.add('header');


    const headerFirstButton = document.createElement('button');
    headerFirstButton.textContent = "Lilly Medicine";
    headerFirstButton.classList.add('header-button');
    headerFirstButton.addEventListener('click',()=>{
      alert('click event');
    })
    header.appendChild(headerFirstButton);

   

    const headerSecondButton = document.createElement('button');
    headerSecondButton.textContent = "icons";
    headerSecondButton.classList.add('header-button');
    headerSecondButton.addEventListener('click',()=>{
      alert('click event');
    })
    const svgElement = document.createElement('img');
    svgElement.src = searchIcon;
    svgElement.alt = 'icon';
    headerSecondButton.appendChild(svgElement);

    header.appendChild(headerSecondButton);

    block.appendChild(header);

    const heading = document.createElement('h1');
    heading.textContent = "Headline about online pharmacy service";
    block.appendChild(heading);
    // heading.classList.add('custom-button');

    const subHeading = document.createElement('p');
    subHeading.textContent = "LilyDirect makes it simple to get authentic Lilly medicines directly to you, if prescribed.";
    // subHeading.classList.add('custom-button');
    block.appendChild(subHeading);

    const customButton = document.createElement('button');
    customButton.textContent = "Primary";
    customButton.classList.add('custom-button');
    customButton.addEventListener('click',()=>{
      alert('click event');
    })
    block.appendChild(customButton);
  } 