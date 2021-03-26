/*
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

var root = new Vue({
el: '#root',
data: {
  list: [
  'Chiamare amici',
  'Fare il prepartita',
  'Cantare fino al 90esimo',
  'Parcheggiare vicino lo stadio'
  ],
  newItem: '',


   },
   methods: {
     removeItem: function(index) {
       this.list.splice(index, 1);
     },
     addItem: function() {
       this.list.push(this.newItem);
     }


   }

});
