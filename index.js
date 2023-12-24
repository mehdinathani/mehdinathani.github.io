const likeBtn = document.querySelector('#like-it');
console.log(likeBtn);
// const heart = document.querySelector();

likeBtn.addEventListener('click', (e)=>{
    console.log(e)
    likeBtn.textContent = 'Liked !!';
    likeBtn.style.backgroundColor =  "white";
    likeBtn.style.color =  "#22dee1";

    let heart = document.createElement('img');
    heart.setAttribute('src','./icons/liked.png');
    likeBtn.append(heart);

})