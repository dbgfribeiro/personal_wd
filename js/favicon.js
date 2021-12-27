var link = document.querySelector("link[rel~='icon']");
link = document.createElement('link');
link.rel = 'icon';
document.getElementsByTagName('head')[0].appendChild(link);

setInterval(function(){
  link.href = './assets/d.ico';
  setTimeout(function(){
    link.href = './assets/r.ico';
  }, 2000);
},4000)