var km = parseFloat(prompt("Quanto è lungo il tuo viaggio? (In km)"))
var anni = parseFloat(prompt("Quanti anni hai?"))
var tariffaBase = km * 0.21
console.log(km + " km")
console.log(anni + " anni")
if ((anni > 17) && (anni < 65)) {
    console.log(tariffaBase.toFixed(2) + " euro");
}
else if(anni < 18) {
    var tariffaMinorenne = tariffaBase - ((tariffaBase / 100) * 20) ;
    console.log(tariffaMinorenne.toFixed(2) + " euro")
}
else if(anni > 64) {
    var tariffaPensionato = tariffaBase - ((tariffaBase / 100) * 40) ;
    console.log(tariffaPensionato.toFixed(2) + " euro")
}
