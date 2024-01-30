function toggleMode(){
 const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar.png')
  //se tiver sem light mode, manter a normal
  }else{
  img.setAttribute("src", "./assets/avatar-light.png")
  }
 

 

}