function mostrar()
{
    let usdArs;
    let usdEur;
    let usdBrl;
    let arsUsd;
    let arsEur;
    let arsBrl;
    let eurUsd;
    let eurBrl;
    let eurArs;
    let brlUsd;
    let brlEur;
    let brlArs;
    let montoAConvertir;
    let convertirDe;
    let convertirA;
    let montoConvertido;
    let tasaDeCambio;
    let mensaje;

    usdArs = 130.89;
    usdEur = 0.98;
    usdBrl = 5.24;
    arsUsd = 0.0076;
    arsEur = 0.0075;
    arsBrl = 0.040;
    eurUsd = 1.02;
    eurBrl = 5.35;
    eurArs = 133.51;
    brlUsd = 0.19;
    brlEur = 0.19;
    brlArs = 24.96;

    montoAConvertir = prompt("Ingrese el monto a convertir: ");
    montoAConvertir = parseInt(montoAConvertir);

    convertirDe = prompt("Ingrese  a convertir: (dolar/peso/real/euro): ");
    while(convertirDe != "euro" && convertirDe != "peso" && convertirDe != "dolar" && convertirDe != "real")
    {
        convertirDe = prompt("Ingrese  a convertir: (dolar/peso/real/euro): ");
    }

    convertirA = prompt("Ingrese  que desea a cambio: (dolar/peso/real/euro): ");
    while(convertirA != "euro" && convertirA != "peso" && convertirA != "dolar" && convertirA != "real")
    {
        convertirA = prompt("Ingrese la moneda que desea a cambio: (dolar/peso/real/euro): ");
    }

    switch(convertirDe)
    {
        case "euro":
            switch(convertirA)
            {
                case "dolar":
                    tasaDeCambio = eurUsd;
                    break;
                case "peso":
                    tasaDeCambio = eurArs;
                    break;
                case "real":
                    tasaDeCambio = eurBrl;
                    break;
            }
            break;
        case "dolar":
            switch(convertirA)
            {
                case "euro":
                    tasaDeCambio = usdEur;
                    break;
                case "peso":
                    tasaDeCambio = usdArs;
                    break;
                case "real":
                    tasaDeCambio = usdBrl;
                    break;
            }
            break;
        case "peso":
            switch(convertirA)
            {
                case "euro":
                    tasaDeCambio = arsEur;
                    break;
                case "dolar":
                    tasaDeCambio = arsUsd;
                    break;
                case "real":
                    tasaDeCambio = arsBrl;
                    break;
            }
            break;
        case "real":
            switch(convertirA)
            {
                case "euro":
                    tasaDeCambio = brlEur;
                    break;
                case "dolar":
                    tasaDeCambio = brlUsd;
                    break;
                case "peso":
                    tasaDeCambio = brlArs;
                    break;
            }
            break;
    }

    montoConvertido = montoAConvertir * tasaDeCambio;
    mensaje = "El monto a convertir de " + montoAConvertir + " " + convertirDe + ", son " + montoConvertido + " " + convertirA;

    alert(mensaje);
    
}