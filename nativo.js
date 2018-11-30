self.addEventListener('message', function(e) {
    var startTime = new Date();
    var array = [];
    var tamanho = e.data;
    for (var i = 0; i < tamanho; i++) {
        array[i] =  Math.floor(Math.random()*100000);
    }
    array.sort();
    var endTime = new Date();
    var retorno = {
        array: array,
        tempoDecorrido: Math.round((endTime - startTime)/1000)
    };
 	self.postMessage(retorno);
}, false);