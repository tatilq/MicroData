
$( document ).ready(function() {
	var datos ;
	var dat = [];

  	$( "#enviar" ).click(function() {
	 	var ocurrencia = $('#ocurrenciadesc').val();
	 	var salida = $('#fechaSalida').val();
	 	var retorno = $('#fechaRetorno').val();
	 	var motivo = $('#motivodesc').val();
	 	var compensacion = $('#compensaciondesc').val();

	 	var dats_form = {id: 1,fecha : salida , fecha_retorno : retorno, tipo : ocurrencia, estado : "Solicitado" , motivo: motivo , compensacion : compensacion };
	 	dat.push(dats_form);
	 	localStorage.setItem('ocurrenciaslist',JSON.stringify(dat));
	 	window.location='tabla-usuario.html';
	});
});
