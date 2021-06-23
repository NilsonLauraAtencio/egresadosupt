// registro
const formulario = document.querySelector('#lg_formR');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreusu = document.querySelector('#nombreusu').value;
    const apellidousu = document.querySelector('#apellidousu').value;
    const dniusu = document.querySelector('#dniusu').value;
    const telefonousu = document.querySelector('#telefonousu').value;
    const correo = document.querySelector('#correo').value;
    const clave = document.querySelector('#clave').value;
    const anioegresousu = document.querySelector('#anioegresousu').value;
    const gradoprofactualusu = document.getElementById('#gradoprofactualusu');
    const valorgradoprofactualusu = gradoprofactualusu.options[gradoprofactualusu.selectedIndex].value;
    const radicacionactualusu = document.querySelector('#radicacionactualusu').value;
    const areadesemvuelveusu = document.getElementById('#areadesemvuelveusu');
    const valorareadesemvuelveusu = areadesemvuelveusu.options[areadesemvuelveusu.selectedIndex].value;
    const laborandoactualusu = document.querySelector('#laborandoactualusu').value;



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
                valorgradoprofactualusu,
                radicacionactualusu,
                valorareadesemvuelveusu,
                laborandoactualusu,

            })

            console.log('usuario registrado')
            console.log( nombreusu,
                apellidousu,
                dniusu,
                telefonousu,
                correo,
                clave,
                anioegresousu,
                valorgradoprofactualusu,
                radicacionactualusu,
                valorareadesemvuelveusu,
                laborandoactualusu,)
            
        })


        
        // setTimeout(function() {
        //     window.location.href = "auth.html"
        // }, 2000);

    //console.log(correo, clave)
})
