function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


self.addEventListener('message', function(e) {
    var startTime = new Date();
    var array = [];
    var tamanho = e.data;
    for (var i = 0; i < tamanho; i++) {
        array[i] =  Math.floor(Math.random()*10000);
    }
    bubbleSort(array);
    var endTime = new Date();
    var retorno = {
        array: array,
        tempoDecorrido: Math.round((endTime - startTime)/1000)
    };
  self.postMessage(retorno);
}, false);