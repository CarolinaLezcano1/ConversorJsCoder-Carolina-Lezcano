
let btn = document.getElementById("btn");

btn.addEventListener("click", mostrar)

function mostrar() {
    let montoConvertido
    let tasaDeCambio;
    let mensaje;
    let montoTipoCambio;
    let tipoDeCambio;
    let transacciones = [];


    montoTipoCambio = {
        usdArs: 130.89,
        usdEur: 0.98,
        usdBrl: 5.24,
        arsUsd: 0.0076,
        arsEur: 0.0075,
        arsBrl: 0.04,
        eurUsd: 1.02,
        eurBrl: 5.35,
        eurArs: 133.51,
        brlUsd: 0.19,
        brlEur: 0.19,
        brlArs: 24.96,
    };

    let montoAConvertir = document.querySelector("#montoAConvertir").value;
    montoAConvertir = parseInt(montoAConvertir);
    let convertirDe = document.querySelector("#convertirDe").value;
    let convertirA = document.querySelector("#convertirA").value;
    // let montoConvertido = document.querySelector("#montoConvertido").value;

    usdArs = 130.89;
    usdEur = 0.98;
    usdBrl = 5.24;
    arsUsd = 0.0076;
    arsEur = 0.0075;
    arsBrl = 0.04;
    eurUsd = 1.02;
    eurBrl = 5.35;
    eurArs = 133.51;
    brlUsd = 0.19;
    brlEur = 0.19;
    brlArs = 24.96;


    switch (convertirDe) {
        case "euro":
            switch (convertirA) {
                case "dolar":
                    tasaDeCambio = montoTipoCambio.eurUsd;
                    break;
                case "peso":
                    tasaDeCambio = montoTipoCambio.eurArs;
                    break;
                case "real":
                    tasaDeCambio = montoTipoCambio.eurBrl;
                    break;
            }
            break;
        case "dolar":
            switch (convertirA) {
                case "euro":
                    tasaDeCambio = montoTipoCambio.usdEur;
                    break;
                case "peso":
                    tasaDeCambio = montoTipoCambio.usdArs;
                    break;
                case "real":
                    tasaDeCambio = montoTipoCambio.usdBrl;
                    break;
            }
            break;
        case "peso":
            switch (convertirA) {
                case "euro":
                    tasaDeCambio = montoTipoCambio.arsEur;
                    break;
                case "dolar":
                    tasaDeCambio = montoTipoCambio.arsUsd;
                    break;
                case "real":
                    tasaDeCambio = montoTipoCambio.arsBrl;
                    break;
            }
            break;
        case "real":
            switch (convertirA) {
                case "euro":
                    tasaDeCambio = montoTipoCambio.brlEur;
                    break;
                case "dolar":
                    tasaDeCambio = montoTipoCambio.brlUsd;
                    break;
                case "peso":
                    tasaDeCambio = montoTipoCambio.brlArs;
                    break;
            }
            break;
    }

    montoConvertido = convertirMonto(montoAConvertir, tasaDeCambio);
    mensaje =
        "El monto a convertir de " +
        montoAConvertir.toFixed(2) +
        " " +
        convertirDe +
        ", son " +
        montoConvertido.toFixed(2) +
        " " +
        convertirA

    alert(mensaje);

    resumenTransacciones = "Resumen Transacciones: " + "<br>" + transacciones.forEach(transaccion => resumenTransacciones + "<br>");

    document.write(transacciones);

    sessionStorage.setItem("conversion1", montoConvertido);
}


function convertirMonto(montoAConvertir, tasaDeCambio) {
    let montoConvertido = montoAConvertir * tasaDeCambio;

    return montoConvertido;

    conversion1 = sessionStorage.getItem("conversion1", montoConvertido);
    alert(conversion1);
}

