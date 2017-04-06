
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
	if($('#horaSalida').val()>9 && $('#horaSalida').val()<19)
   {
   		isvalid=true;
   }
   return  isvalid;
}
function validaHoraRetorno()
{
	var isvalid=false;
	if($('#horaRetorno').val()>9 && $('#horaRetorno').val()<19)
   {
   		isvalid=true;
   }
   return  isvalid;
}

function validaHoras()
{
	var isvalid=false;
	if(validaHoraRetorno() && validaHoraSalida() )
	{
		if($('#horaSalida').val() < $('#horaRetorno').val())
	    {
	   		isvalid=true;
	    }
	}
   	return  isvalid;
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
	console.log(validarOcurrencia(),validaHoraSalida(),validaHoraRetorno(),validaHoras(),motivodesc());
	if(validarOcurrencia() && validaHoraSalida() && validaHoraRetorno() && validaHoras() &&  motivodesc())
	{
		window.location='tabla-usuario.html';
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


