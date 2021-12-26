let item = document.querySelectorAll('.item');
item.forEach(function(i){

  i.addEventListener('click',function(){
    modal.style.display = 'block';

    if(this.id === 'ccdm'){
      content.getElementsByTagName('h3')[0].innerHTML = 'Ciclo de Conversas Design+Multimédia';
      content.getElementsByTagName('p')[0].innerHTML = '"Ciclo de Conversas Design+Multimédia" is a series of talks that will be held during the month of april, with invited professionals associated with Design and other adjacent creative areas. The cycle is divided into four sessions, each one of them is aimed at two different guests who can be individuals or groups. The intention is that differentprofessionals show different areas of work.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://student.dei.uc.pt/~dbribeiro/ciclo-conversas-dm/");
    }
    else if(this.id === 'beathit'){
      content.getElementsByTagName('h3')[0].innerHTML = 'BeatHit';
      content.getElementsByTagName('p')[0].innerHTML = '“BEAT HIT” is a music application that seeks to offer a better user experience to create a whole community and a platform where artists can easily and intuitively share musical content and podcasts.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://www.behance.net/gallery/99897103/BEAT-HIT-Music-App");
    }
    else if(this.id === 'encmessages'){
      content.getElementsByTagName('h3')[0].innerHTML = 'Encrypted Messages';
      content.getElementsByTagName('p')[0].innerHTML = 'Our idea for this project focuses on creating a language that enables interaction between at least two individuals, using cryptology as a tool to translate words into forms. To help people understand better the language and use it, we also developed an app that works like a tool to decode messages.';
      content.getElementsByTagName('a')[0].setAttribute("href", "https://github.com/dbgfribeiro/encrypted-messages");
    }
  })
});