const APIKEY = '78ebf190f1e57d5cf73fea9e';

const listaDesplegable = document.querySelectorAll('form select'),
    primeraMoneda = document.querySelector('#primeraMoneda'),
    segundaMoneda = document.querySelector('#segundaMoneda'),
    btnConvertir = document.querySelector('#btnConversion'),
    monto = document.querySelector('#monto'),
    conversionTxt = document.querySelector('#conversionTxt'),
    btnInvertirMoneda = document.querySelector('#icono'),
    btn = document.getElementById("btn"),
    clases = document.querySelectorAll(".arrayDeClases"),
    logemail = document.getElementById("logemail"),
    logpass = document.getElementById("logpass"),
    login = document.getElementById("login");

const usuarios = [{
    nombre: 'Belen',
    mail: 'belen@mail.com',
    pass: 'belen123'
},
{
    nombre: 'Franco',
    mail: 'franco@mail.com',
    pass: 'franco123'
}]



function guardarDatos(usuarioDB, storage) {

    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
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

function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

function intercambiarClases(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}


login.addEventListener("click", (e) => {
    Swal.fire("Bienvenido")
    e.preventDefault()
    if (!logemail.value || !logpass.value) {
        alert('Complete todos los campos');

    } else {
        let data = validarUsuario(usuarios, logemail.value, logpass.value);

        if (!data) {
            alert(`Usuario y/o contraseña invalido`);
        } else {

            guardarDatos(data, localStorage);

            intercambiarClases(clases, "noMostrar");
        }
    }

})



const crearSelectsMonedas = async () => {
    const respuesta = await fetch('api.json');
    const dataJson = await respuesta.json();

    listaDesplegable.forEach((element, index) => {
        for (const item of dataJson) {
            let predet = (index == 0) ? ((item.moneda == 'ARS') ? 'selected' : '') : ((item.moneda == 'USD') ? 'selected' : '');
            let optionHTML = `<option value="${item.moneda}" ${predet}>${item.moneda}</option>`;
            element.insertAdjacentHTML('beforeend', optionHTML);
        }


        element.addEventListener('change', e => {
            mostrarBandera(e.target);
        })
    })

}

crearSelectsMonedas();

const mostrarBandera = async (element) => {
    const respuesta = await fetch('api.json');
    const dataJson = await respuesta.json();

    for (const item of dataJson) {


        if (item.moneda == element.value) {
            let imagen = element.parentElement.querySelector('img');
            imagen.src = `https://www.countryflagsapi.com/png/${item.pais}`;
        }
    }


}

function obtenerTipoCambio() {
    let montoVal = monto.value;
    if (montoVal == '' || montoVal == '0') {
        monto.value = '1';
        montoVal = 1;
    }


    conversionTxt.innerText = 'Esperando resultado...';

    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${primeraMoneda.value}`

    fetch(URL)
        .then(response => response.json())
        .then(result => {
            console.log(result.conversion_rates);
            let tasaConversion = result.conversion_rates[primeraMoneda.value];
            let resultado = (montoVal * tasaConversion).toFixed(2);
            conversionTxt.innerText = `${montoVal} ${primeraMoneda.value} = ${resultado} ${segundaMoneda.value}`;
        }).catch(() => {
            conversionTxt.innerText = 'Error, intente  de nuevo';
        });

}


window.onload = () => {
    obtenerTipoCambio();
}

btnConvertir.addEventListener('click', (e) => {
    e.preventDefault();
    obtenerTipoCambio();
})

btnInvertirMoneda.addEventListener('click', () => {
    let temp = primeraMoneda.value;
    primeraMoneda.value = segundaMoneda.value;
    segundaMoneda.value = temp;
    mostrarBandera(primeraMoneda);
    mostrarBandera(segundaMoneda);
    obtenerTipoCambio();
})


async function cambiar() {
    let montoVal = monto.value;
    if (montoVal == '' || montoVal == '0') {
        monto.value = '1';
        montoVal = 1;
    }
    conversionTxt.innerText = 'Esperando resultado...';
    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${primeraMoneda.value}`;

    try {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        console.log(data.conversion_rates);
        let tasaConversion = data.conversion_rates[segundaMoneda.value];
        let resultado = (montoVal * tasaConversion).toFixed(2);
        conversionTxt.innerText = `${montoVal} ${primeraMoneda.value} = ${resultado} ${segundaMoneda.value}`;

    } catch (e) {
        conversionTxt.innerText = 'Error, intente de nuevo';
    }

}



