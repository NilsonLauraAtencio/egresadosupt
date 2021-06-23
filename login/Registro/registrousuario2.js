// registro
const formulario2 = document.querySelector('#lg_formR2');

formulario2.addEventListener('submit', (e) => {
    e.preventDefault();

    const descempresa = document.querySelector('#descempresa').value;
    const nombempresa = document.querySelector('#nombempresa').value;
    const arealaboraempresa = document.querySelector('#arealaboraempresa').value;
    const correoempresa = document.querySelector('#correoempresa').value;
    const telempresa = document.querySelector('#telempresa').value;



    // auth
    //     .signInWithEmailAndPassword(correo, clave)
    //     .then(userCredential => {
            
    //         firest.collection('usuarios').doc().set({
    //             nombreusu,
    //             apellidousu,
    //             dniusu,
    //             telefonousu,
    //             correo,
    //             clave,
    //             anioegresousu,
    //             valorgradoprofactualusu,
    //             radicacionactualusu,
    //             valorareadesemvuelveusu,
    //             laborandoactualusu,

    //         })

    //         console.log('usuario registrado')
    //         console.log( nombreusu,
    //             apellidousu,
    //             dniusu,
    //             telefonousu,
    //             correo,
    //             clave,
    //             anioegresousu,
    //             valorgradoprofactualusu,
    //             radicacionactualusu,
    //             valorareadesemvuelveusu,
    //             laborandoactualusu,)
            
    //     })


        console.log('usuario registrado')
            console.log( descempresa,
                nombempresa,
                arealaboraempresa,
                correoempresa,
                telempresa)
        
        setTimeout(function() {
            window.location.href = "SignUp3.html"
        }, 2000);

    //console.log(correo, clave)
})

