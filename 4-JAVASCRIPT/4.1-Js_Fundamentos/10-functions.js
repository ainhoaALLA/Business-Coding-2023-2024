function getPriceByCity(city) {
  var price = 0;

  if (city === "Madrid") {
    price = 15;
  } else if (city === "Barcelona") {
    price = 20;
  } else if (city === "Valencia") {
    price = 10;
  } else {
    price = 5;
  }
  return price;
}

var priceInBarcelona = getPriceByCity("Barcelona");
var priceInMadrid = getPriceByCity("Madrid");
var priceInValencia = getPriceByCity("Valencia");
var priceInBilbao = getPriceByCity("Bilbao");

console.log(`El precio del metro en Barcelona es ${priceInBarcelona}`);
console.log(`El precio del metro en Madrid es ${priceInMadrid}`);
console.log(`El precio del metro en Valencia es ${priceInValencia}`);
console.log(`El precio del metro en Bilbao es ${priceInBilbao}`);
