const pass = document.getElementById(usuario),
      icon = document.querySelector(".bx");

icon.addEventListener("click", e => {
    if (usuario.type === "password")
    
         {
        usuario.type = "text"
        contrasena.type = "text"
        confirmar.type = "text";
        icon.classList.remove('bx-show-alt')
        icon.classList.add('bx-hide')
    } else {
        usuario.type = "password"
        contrasena.type = "password"
        confirmar.type = "password";
        icon.classList.add('bx-show-alt')
        icon.classList.remove('bx-hide')
    }
})      

  