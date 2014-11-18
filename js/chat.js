function chat($scope){
	var click = true;
	var contMsn = document.getElementById("contMsn");
	var footer = document.getElementsByTagName('footer')[0];
	var header = document.getElementsByTagName('header')[0];
	var listaUsuarios = document.getElementById("listaUsuarios");
	var mensaje = document.getElementById("mensaje");
	var mensajesChat = document.getElementById("mensajesChat");	
	var socket = io.connect(location.origin);
	
	(function(){
		mensaje.focus();
		tamChat();
	})();
	
	window.addEventListener("resize", tamChat);
	
	function tamChat(){
		if(window.innerWidth <= 800){
			var tam = window.innerHeight - (header.offsetHeight+45);
			listaUsuarios.style.height = tam+"px";
		}
		else{
			var tam = window.innerHeight - (header.offsetHeight+footer.offsetHeight);
		}
		mensajesChat.style.height = tam+"px";
		contMsn.style.height =  (mensajesChat.offsetHeight-mensaje.offsetHeight)+"px";
	}
	
	if (window.innerWidth <=800){
		$scope.listaClick = function(){
			if(click){
				listaUsuarios.style.display = "block";
				listaUsuarios.setAttribute("class", "animated fadeInLeftBig");
				click = false;
			}//fin if
			else{
				listaUsuarios.style.display = "none";
				click = true;
			}//fin else
		};//fin listaClick
	}//fin if
	(function(){
		var cont= 0;
		var mens="*****************************************";
		for(cont=0; cont<=100;cont++){
			mens = mens+"*";
			contMsn.innerHTML += "<div class='contMsnD'><div class='espMsnD'><div class='tmMsn'><p class='Msn'>" + mens + "</p></div><img class='user' src='../imagenes/iconos/account.png'>";
			contMsn.innerHTML += "<div class='contMsnI'><div class='espMsnI'><img class='user' src='../imagenes/iconos/account.png'><div class='tmMsn'><p class='Msn'>" + mens;
			//pone el scroll al final si hay un voreflow en y
		}
		contenedor.scrollTop = contenedor.scrollHeight;
	})();
	
	mensaje.addEventListener("keydown", function(tecla) {
		if (tecla.keyCode === 13) {
			if (mensaje.value.length > 0) {
				socket.emit("mensajeUsuario", {
					Mensaje : mensaje.value,
					Usuario : "Usuario"
				});
			}//fin if
			mensaje.value = "";
			mensaje.focus();
		}//fin if
	});//fin mensaje listener keydown
	
	
	socket.on("nuevoMensaje", function(datos) {
		contMsn.innerHTML += "<div class='contMsnD'><div class='espMsnD'><div class='tmMsn'><p class='Msn'>" + datos.Mensaje + "</p></div><img class='user' src='../imagenes/User.png'>";
		//pone el scroll al final si hay un voreflow en y
		contMsn.scrollTop = contenedor.scrollHeight;
	});
}//fin chat
