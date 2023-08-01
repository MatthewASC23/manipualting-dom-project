let paraBtn = document.getElementById('p-button');
let pLocation = document.getElementById('p-div');

let imgBtn = document.getElementById('img-button');
let imgLocation = document.getElementById('img-div');

paraBtn.onclick = function(){
    imgLocation.style.display = 'none';
    pLocation.style.display = 'block';
    
    const newP = document.createElement('p');
    newP.innerText = 'My honest reaction to that information';
    newP.style.backgroundColor = 'black';
    newP.style.padding = '10px';
    newP.style.color = 'white';

    const insert = pLocation;
    insert.appendChild(newP);
}


imgBtn.onclick = function(){
    const newImg = document.createElement('img');
    newImg.src = '/images/pika.png';
    
    pLocation.style.display = 'none';
    imgLocation.style.display = 'block';

    const insertImg = document.getElementById('img-div');
    insertImg.appendChild(newImg);
}
