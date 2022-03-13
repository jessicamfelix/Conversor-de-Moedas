 //Armazena as contas das conversões e os símbulos das moedas de saida em funções(métodos) e armazena o valor a ser convertido como 0
 const calcularConvercao = {
     valor: 0,
     realToDolar: function() {
         return [this.valor / 5, "$"];
     },
     dolarToReal: function() {
         return [this.valor * 5, "R$"];
     },
     realToEuro: function() {
         return [this.valor / 6, "€"];
     },
     euroToReal: function() {
         return [this.valor * 6, "R$"];
     },
     realToBitcoin: function() {
         return [this.valor / 198000, "₿"];
     },
     bitcoinToReal: function() {
         return [this.valor * 198000, "R$"];
     },
     dolarToEuro: function() {
         return [this.valor / 1.1, "€"];
     },
     euroToDolar: function() {
         return [this.valor * 1.1, "$"];
     },
     dolarToBitcoin: function() {
         return [this.valor / 39000, "₿"];
     },
     bitcoinToDolar: function() {
         return [this.valor * 39000, "$"];
     },
     euroToBitcoin: function() {
         return [this.valor / 35800, "₿"];
     },
     bitcoinToEuro: function() {
         retun[this.valor * 35800, "€"]
     }
 };

 function converterMoeda() {
     //Armazena os valores dos inputs em constantes
     const valorRecebido = document.getElementById("valorRecebido").value;
     calcularConvercao.valor = valorRecebido;
     const moedaEscolhida = document.getElementById("moedaEscolhida").value;
     const paraEssaMoeda = document.getElementById("paraEssaMoeda").value;

     //Tranforma as variaveis dos tipos de moedas para uma chave do objeto calcularConvercao
     const moedaToMoeda = moedaEscolhida + "To" + paraEssaMoeda;

     //Checa se os input está vazio ou se os tipos de moedas são iguais para retornar um texto de aviso ou o valor convertido na página
     if (valorRecebido == "") {
         document.getElementById("mostrarResultado").innerHTML =
             "Digite algum valor!";
     } else if (moedaToMoeda in calcularConvercao) {
         let [valorConvertido, simbuloMoeda] = calcularConvercao[moedaToMoeda]();
         valorConvertido = valorConvertido.toFixed(2);
         document.getElementById("mostrarResultado").innerHTML =
             "O valor convertido é: " + simbuloMoeda + valorConvertido;
     } else {
         document.getElementById("mostrarResultado").innerHTML =
             "Não converto com valores iguais!";
     }
 }
