// if() {}
// if() {} else {}
// if() {} else if () {} else {}

// Precio de la tarjeta de metro en cada ciudad dependiendo de lo que se ponga en ciudad. Switch se usa para casos sencillos, no complejos.
var price;
var city = "Bilbao";

if (city === "Valencia") {
  price = 10;
} else if (city === "Barcelona") {
  price = 15;
} else if (city === "Madrid") {
  price = 12;
} else {
  price = 20;
}
console.log(`El precio del metro en ${city} es ${price} euros.`);

// Arriba el código queda más complicado, sería mejor usar switch de esta forma:

switch (city) {
  case "Valencia":
    price = 10;
    break;
  case "Barcelona":
    price = 15;
    break;
  case "Madrid":
    price = 12;
    break;
  default:
    price = 20;
    break;
}
console.log(`Con switch, el precio del metro en ${city} es de ${price} euros también.`)

// El break sirve para que el codigo no siga recorriendo los casos de abajo.