   let url_atual = window.location.pathname
   window.onload = () => {
       if (url_atual == '/') {
           console.log("Home")
           document.querySelector("#menuHome").classList.add("active")
       } else if (url_atual == '/noticias') {
           console.log("Noticia")
           document.querySelector("#menuNoticias").classList.add("active")
       } else if (url_atual == '/admin') {
           console.log("Admin")
           document.querySelector("#menuAdmin").classList.add("active")
       }
   }