const usuario = document.getElementById("usuario");
const Contraseña = document.getElementById("contraseña");
const form1 = document.querySelector(".btnInicio");


let usuarioBD = "10446";
let contraseñaBD = "64401";
let extraerU = usuarioBD.slice(0, 1);
let extraerC = contraseñaBD.slice(0, 1);

form1.addEventListener("click", (e)=>  {
  e.preventDefault();
  //console.log(usuario.value);
  //console.log(Contraseña.value);

  if (usuario.value !== usuarioBD || contraseña.value !== contraseñaBD) {
    alert("Usuario o Contraseña incorrecta")
    return
}
 alert ("Por favor realice el capchat para poder ingresar al sistema")
 mostrarCapchat(extraerU, extraerC);

})

const mostrarCapchat = (extraerU, extraerC) =>{
  // Pintar el formulario

  const capchat = document.querySelector(".login2"); 

  capchat.innerHTML = `
                          <form class="contenedor2" id="contenedor2">
                              <h1 >Validacion del capchat</h1>

                              <div class="form-suma">
                              <div id="sumas"></div>
                              <input type="number" placeholder="Respuesta" id="suma">
                              </div>

                              <button class="btn2">Guardar</button>
                          </form>
                        `
  // Fin

  sumas.textContent = (`${extraerU}+${extraerC}`);
  
  const form2 = document.querySelector(".btn2");

  form2.addEventListener("click", function (e) {
      e.preventDefault();

      const suma = document.getElementById("suma").value;
      const resultado = Number(extraerU) + Number(extraerC)
      if (suma != resultado) {
          alert("respuesta incorrecta")
          return
      }
      alert('BIENVENIDO AL SISTEMA')

  })
}



