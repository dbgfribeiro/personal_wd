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

let wrapper = document.querySelector('.outer-wrapper');
let work = document.querySelector('.work');
let intro = document.querySelector('.intro');

function goToProjects(){
  wrapper.scrollTo(0,document.body.scrollWidth);
  work.style.opacity = 1;
  intro.style.opacity = 0;
}
function goToIntro(){
  wrapper.scrollTo(0, 0);
  work.style.opacity = 0;
  intro.style.opacity = 1;
}