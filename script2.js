const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    toggles = document.querySelectorAll('.toggles');



function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }
    storage.setItem('usuario', JSON.stringify(usuario));
}



function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}


function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}


function intercambiarClases(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}


function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!mailLogin.value || !passLogin.value) {
        alert('Todos los campos son requeridos');

    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
        
        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {
            
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }

            
            modal.hide();

            
            mostrarInfoMascota(mascotas);
            intercambiarClases(toggles, 'd-none');
        }
    }


})

btnLogout.addEventListener('click', () => {
    borrarDatos();
    intercambiarClases(toggles, 'd-none');
});

//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {
    if (usuario) {
        intercambiarClases(toggles, 'd-none');
    }
}

estaLogueado(recuperarUsuario(localStorage));




