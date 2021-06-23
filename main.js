
//login
const ingresando = document.querySelector('#lg_form');

ingresando.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = document.querySelector('#correo').value;
    const clave = document.querySelector('#clave').value;


    auth
        .signInWithEmailAndPassword(correo, clave)
        .then(userCredential => {
            console.log('Ingresado .....');
            window.location.href = "index.html"
        })



    //console.log(correo, clave)
})

//log out 

// const logout = document.querySelector('#lg_form_saliendo');

// logout.addEventListener('click' , e => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log('saliendo....')
//     })
// })





