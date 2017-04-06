
$( document ).ready(function() {
    var datos ;
    
    datos = JSON.parse(localStorage.getItem('ocurrenciaslist'));
    llenar_tabla(datos);

    function llenar_tabla(datoss){
        
        $( ".conte" ).empty();
        var datos_t = "";
        for (var i = 0 ; i < datoss.length ; i++) {
            datos_t += "<tr><td>"+datoss[i].fecha+"</td><td>"+datoss[i].tipo+"</td><td>"+datoss[i].estado+"</td><td><button>Ver detalles</button></td></tr>";
        }
        $('.conte').append(datos_t);
        datos_t="";
    }

    var sort_by = function(field, reverse, primer){
       var key = primer ? 
           function(x) {return primer(x[field])} : 
           function(x) {return x[field]};

       reverse = !reverse ? 1 : -1;

       return function (a, b) {
           return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
         } 
    }
    $( ".ord_tipo" ).click(function() {
        var datose =JSON.parse(localStorage.getItem('ocurrenciaslist'));
        datose.sort(sort_by('tipo', false, function(a){return a.toUpperCase()}));
        llenar_tabla(datose);
        console.log(datose);
    });
    $( ".ord_fecha" ).click(function() {
        var datose =JSON.parse(localStorage.getItem('ocurrenciaslist'));
        datose.sort(sort_by('fecha', false, function(a){return a.toUpperCase()}));
        llenar_tabla(datose);
        console.log(datose);
    });

    $( ".ord_estado" ).click(function() {
        var datose =JSON.parse(localStorage.getItem('ocurrenciaslist'));
        datose.sort(sort_by('estado', false, function(a){return a.toUpperCase()}));
        llenar_tabla(datose);
        //console.log(datos);
    });
    
});
    