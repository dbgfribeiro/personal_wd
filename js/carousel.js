/*controls*/
let prev = document.getElementById('prev');
let next = document.getElementById('next');

/*carousel items*/
let item = document.querySelectorAll('.item');
let itemCount = 0;
let itemWidth = 80;
let itemMax = item.length*itemWidth;


next.addEventListener('click', function(){
  itemCount-=itemWidth;
  if(itemCount>(-itemMax)){
    for(var i=0; i<item.length; i++){
      item[i].style.transform ='translateX(' + itemCount + 'vw)';
    }
  }
  else{
    itemCount=itemWidth;
  }
  console.log(itemCount);
});

prev.addEventListener('click', function(){
  if(itemCount<0){
    itemCount+=itemWidth;
    for(var i=0; i<item.length; i++){
      item[i].style.transform ='translateX(' + itemCount + 'vw)';
    }
  }
});


/*modal control*/
let modal = document.querySelector('.project-modal');
let overlay = modal.querySelector('.modal-overlay');
let content = modal.querySelector('.inner-container');

window.onload = function(){
  document.onclick = function(e){
    if(e.target == overlay){
      modal.style.display = 'none';
    }
  };
};

