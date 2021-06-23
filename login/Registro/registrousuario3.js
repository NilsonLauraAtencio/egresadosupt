// registro
const formulario3 = document.querySelector('#lg_formR3');

formulario3.addEventListener('submit', (e) => {
    e.preventDefault();

    const mejoras1 = document.querySelector('#mejoras1').value;
    const mejoras2 = document.querySelector('#mejoras2').value;
    const mejoras3 = document.querySelector('#mejoras3').value;
    const mejoras4 = document.querySelector('#mejoras4').value;



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
            console.log( mejoras1,
                mejoras2,
                mejoras3,
                mejoras4)
        
        setTimeout(function() {
            window.location.href = "auth.html"
        }, 2000);

    //console.log(correo, clave)
})
