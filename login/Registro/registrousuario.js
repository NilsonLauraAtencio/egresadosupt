// registro
const formulario = document.querySelector('#lg_formR');

const obtenerdatos = () => firest.collection('usuarios').get();

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreusu = document.querySelector('#nombreusu').value;
    const apellidousu = document.querySelector('#apellidousu').value;
    const dniusu = document.querySelector('#dniusu').value;
    const telefonousu = document.querySelector('#telefonousu').value;
    const correo = document.querySelector('#correo').value;
    const clave = document.querySelector('#clave').value;
    const anioegresousu = document.querySelector('#anioegresousu').value;
    const gradoprofactualusu = document.querySelector('input[name="gradoprofactualusu"]:checked').value;
    const radicacionactualusu = document.querySelector('#radicacionactualusu').value;
    const areadesemvuelveusu = document.querySelector('input[name="areadesemvuelveusu"]:checked').value;
    const laborandoactualusu = document.querySelector('input[name="laborandoactualusu"]:checked').value;


    

    auth
        .createUserWithEmailAndPassword(correo, clave)
        .then(userCredential => {
            
            firest.collection('usuarios').doc().set({
                nombreusu,
                apellidousu,
                dniusu,
                telefonousu,
                correo,
                clave,
                anioegresousu,
                gradoprofactualusu,
                radicacionactualusu,
                areadesemvuelveusu,
                laborandoactualusu,

            });


            console.log('usuario registrado');
            limpiarFormulario();
            

               
        })

        

    //console.log(correo, clave)
})

function limpiarFormulario() {
    document.getElementById("lg_formR").reset();
  }

  function verificaciondeestado() {
    
    auth
        .SignIn
    
    
    if(valores == "SI")
    {
        window.location.href = "SignUp3.html"
    }
    else
    {
        window.location.href = "SignUp2.html" 
    }
    
  }
