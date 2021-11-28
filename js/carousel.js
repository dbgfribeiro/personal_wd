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

item.forEach(function(i){

  i.addEventListener('click',function(){
    modal.style.display = 'block';

    if(itemCount == 0){
      content.getElementsByTagName('h3')[0].innerHTML = 'Ciclo de Conversas Design+Multimédia';
      content.getElementsByTagName('p')[0].innerHTML = '"Ciclo de Conversas Design+Multimédia" is a series of talks that will be held during the month of april, with invited professionals associated with Design and other adjacent creative areas. The cycle is divided into four sessions, each one of them is aimed at two different guests who can be individuals or groups. The intention is that differentprofessionals show different areas of work.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://student.dei.uc.pt/~dbribeiro/ciclo-conversas-dm/");
    }
    if(itemCount == -80){
      content.getElementsByTagName('h3')[0].innerHTML = 'BeatHit';
      content.getElementsByTagName('p')[0].innerHTML = '“BEAT HIT” is a music application that seeks to offer a better user experience to create a whole community and a platform where artists can easily and intuitively share musical content and podcasts.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://www.behance.net/gallery/99897103/BEAT-HIT-Music-App");
    }
    if(itemCount == -160){
      content.getElementsByTagName('h3')[0].innerHTML = 'Franz Kafka - "O Primeiro Sofrimento"';
      content.getElementsByTagName('p')[0].innerHTML = 'The starting point for this project was an excerpt of a  novel, then we had to build the story both in analogical and digital format. We chose Franz Kafkas tale "O Primeiro Sofrimento".  The main character of the story was a trapezist whose main goal in life was to be the best at his work, which he was ok with at first, but then, after a reflective trip he realised how lonely his life was. We divided the novel in three parts, each representing each one of his mental states throughout the narrative. These 3 sections helped us define the visual aesthetics for the project. ';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://student.dei.uc.pt/~joanasousa/projeto3_mult/");
    }
    if(itemCount == -240 || itemCount == 80){
      content.getElementsByTagName('h3')[0].innerHTML = 'Encrypted Messages';
      content.getElementsByTagName('p')[0].innerHTML = 'Our idea for this project focuses on creating a language that enables interaction between at least two individuals, using cryptology as a tool to translate words into forms. To help people understand better the language and use it, we also developed an app that works like a tool to decode messages.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://github.com/dbgfribeiro/encrypted-messages");
    }
  })
});

