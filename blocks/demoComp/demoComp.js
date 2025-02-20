// export default function decorate(block) {
//     // console.log('block is',block);
//     const h1 = document.createElement("h1");
//     h1.textContent = 'hello';
//     block.innerHTML = '';
//     block.append(h1);
// }
export default function decorate(block) {
    // console.log('block is', block);
  
    const h1 = document.createElement('h1');
    h1.textContent = 'hello';
  
    block.innerHTML = '';
    block.append(h1);
  }
  