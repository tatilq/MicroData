
$( document ).ready(init);

function init()
{
	var datos ;
	var dat = [];

  	$( "#enviar" ).click(function() {
	 	var ocurrencia = $('#ocurrenciadesc').val();
	 	var salida = $('#fechaSalida').val();
	 	var retorno = $('#fechaRetorno').val();
	 	var motivo = $('#motivodesc').val();
	 	var compensacion = $('#compensaciondesc').val();
	 	var f = new Date();
	 	var fechaActual=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	 	var dats_form = {id: 1,fecha : fechaActual , fecha_retorno : retorno, tipo : ocurrencia, estado : "Solicitado" , motivo: motivo , compensacion : compensacion };
	 	dat.push(dats_form);
	 	localStorage.setItem('ocurrenciaslist',JSON.stringify(dat));
	 	validaFormulario();
	 	
	});
}

/***************************FUNCION QUE VALIDA QUE SELCCIONES UN CARRO Y UN DESTINO*******************/
function validarOcurrencia()
{
    var isValid=false;
    if ($('#ocurrenciadesc').val() != '') 
    {
    	isValid=true;
	}
	return isValid;	
}
function validaHoraSalida()
{
	var isvalid=false;
	var horaSalida = $('#horaSalida').val();
	var horaSa = horaSalida.split(":");//20,59 horas, minuts
	if(horaSa[0] >=0 && horaSa[0] <=23 && horaSa[1] >=0 && horaSa[1] <=59)
    {
   		isvalid=true;
    }
  	return isvalid;
}
function validaHoraRetorno()
{
    var isvalid=false;
	var horaRetorno = $('#horaRetorno').val();
	var horaRe = horaRetorno.split(":");//20,59 horas, minuts
	if(horaRe[0] >=0 && horaRe[0] <=23 && horaRe[1] >=0 && horaRe[1] <=59)
    {
   		isvalid=true;
    }
  	return isvalid;
}
function motivodesc()
{
	var isvalid=false;
	if(validaHoraRetorno() && validaHoraSalida() )
	{
		if($('#motivodesc').val() != "")
	    {
	   		isvalid=true;
	    }
	}
   	return  isvalid;
}

function validaFormulario()
{
	console.log(validarOcurrencia());
	console.log(validaHoraSalida());
	console.log(validaHoraRetorno());
	console.log(motivodesc());
	console.log(validarFechaMenorActual());

	if(validarOcurrencia() && validaHoraSalida() && validaHoraRetorno() &&  motivodesc() && validarFechaMenorActual())
	{
		swal({
	      title: "¡Correcto!",
	      text: "Fomulario correctamente lleno",
	      imageUrl: "img/goods.png"
	    },function(isConfirm){
	      	if (isConfirm)
	      	{
	        	setTimeout(function(){window.location="tabla-usuario.html";}, 50);
	        } 
	    });
	}
	else
	{
		swal({
		  title: "¡Invalido!",
		  text: "Llena el formulario correctamente",
		  imageUrl: "img/bads.png"
		});
	}
}

function validarFechaMenorActual()
{
	var salida = $('#fechaSalida').val();
	var retorno = $('#fechaRetorno').val();
  	var fechaSalida = salida.split("-");//año mes dia 2017,03,12
  	var fechaRetorno = retorno.split("-");//año mes dia
  	var isValid=false; 
  	
  	if(fechaSalida[0] <= fechaRetorno[0] && fechaSalida[1] <= fechaRetorno[1] && fechaSalida[2] <= fechaRetorno[2])
  	{
  		isValid=true;
  	}

	return isValid;
}

