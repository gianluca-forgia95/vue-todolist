/*
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

var root = new Vue({
el: '#root',
data: {
  list: [
  'Studiare VueJs',
  'Aprire Atom',
  'Includere la cdn di vue',
  'Scrivere Html + CSS',
  'Far Funzionare la TodoList',
  'Curare lo stile'
  ],
  newItem: '',


   },
   methods: {
     removeItem: function(index) {
       this.list.splice(index, 1);
     },
     addItem: function() {
       if ( this.newItem !== '' ) {
         this.list.push(this.newItem);
         this.newItem = '';
       }

     }


   }

});
