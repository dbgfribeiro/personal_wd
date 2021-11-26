/*controls*/
var prev = document.getElementById("prev");
var next = document.getElementById("next");

/*carousel items*/
var item = document.querySelectorAll(".item");
var itemCount=0;
var itemWidth = 65;
var itemMax= item.length*itemWidth;


next.addEventListener("click", function(){
  itemCount-=itemWidth;
  if(itemCount>(-itemMax)){
    for(var i=0; i<item.length; i++){
      item[i].style.transform ="translateX(" + itemCount + "vw)";
    }
  }
  else{
    itemCount=itemWidth;
  }
  console.log(itemCount);
});

prev.addEventListener("click", function(){
  if(itemCount<0){
    itemCount+=itemWidth;
    for(var i=0; i<item.length; i++){
      item[i].style.transform ="translateX(" + itemCount + "vw)";
    }
  }
});