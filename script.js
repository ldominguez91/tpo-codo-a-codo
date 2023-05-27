document.addEventListener("DOMContentLoaded", function() {
    var bitcoinPriceElement = document.getElementById("bitcoin-price");
  
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var bitcoinPrice = data.bitcoin.usd;
        bitcoinPriceElement.textContent = "$" + bitcoinPrice.toLocaleString();
      })
      .catch(function(error) {
        console.log("Error al obtener el precio del Bitcoin:", error);
      });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var ethereumPriceElement = document.getElementById("ethereum-price");
  
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var ethereumPrice = data.ethereum.usd;
        ethereumPriceElement.textContent = "$" + ethereumPrice.toLocaleString();
      })
      .catch(function(error) {
        console.log("Error al obtener el precio del Ethereum:", error);
      });
  });
  