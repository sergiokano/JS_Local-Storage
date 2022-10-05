console.log("Hello")

// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)

// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

const inputName = document.getElementById('Name');
const inputEmail = document.getElementById('Email');
const inputMessage = document.getElementById('Message');

// function saveUser(e) {
//     const User = {
//         Name: inputName.value,
//         Email: inputEmail.value,
//         Message: inputMessage.value,
//     }
//     e.preventDefault()
//     localStorage.setItem("User",JSON.stringify(User));
//     const retrievedUser = localStorage.getItem("User")
// }
// submitInfo.addEventListener('click',saveUser)

// Muestra el usuario que has guardado en el DOM
// const userDOM = JSON.parse(localStorage.getItem("User"));
// console.log(userDOM);

// function saveUser(e) {
//     e.preventDefault()
//     const User = {
//         Name: inputName.value,
//         Email: inputEmail.value,
//         Message: inputMessage.value,
//     }
//     localStorage.setItem("User",JSON.stringify(User));

//     const screenUser = JSON.parse(localStorage.getItem("User"));
//     document.getElementById("newText").innerHTML= (screenUser.Name) + "<br>" + (screenUser.Email) + "<br>" + (screenUser.Message) + "<br>";    
// }
// submitInfo.addEventListener('click',saveUser)

// **************
//  Como dato me ha faltado hacer una lista, tendría que haberlo resuelto insertando los datos en una lista con li 
// **************

// 2. Extra ------------------
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage
const userDOM = JSON.parse(localStorage.getItem("User"));
const users = userDOM || [];
console.log(userDOM);

function saveUser(e) {
    e.preventDefault()
    const user = {
        Name: inputName.value,
        Email: inputEmail.value,
        Message: inputMessage.value,
    }
    users.push(user)
    // console.log(users)
    
    localStorage.setItem("User",JSON.stringify(users));

    const screenUsersDOM = JSON.parse(localStorage.getItem("User"));
    // con el innerHTML+ voy sumando al anterior.
    for (const user of screenUsersDOM) {
        document.getElementById("newText").innerHTML+= "<p> Name: " + (user.Name) + "<br>" + "Email: " + (user.Email) + "<br>" + "Message: " + (user.Message) + "</p>";
        console.log (user)
    }

}
submitInfo.addEventListener('click',saveUser)

