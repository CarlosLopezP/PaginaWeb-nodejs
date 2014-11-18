function menu($scope){
	var clickMenu = true;
  	var clickUsuario = true;
  	var header = document.getElementsByTagName('header')[0];
  	var menu = document.getElementById("menu");
  	var sesion = document.getElementById("sesion");	
  	
	(function(){
		tamMenu();
	})();
	window.addEventListener("resize", function(){
		tamMenu();
	});
	function tamMenu(){
		if(window.innerWidth <= 800){
			menu.style.display = "none";
			sesion.style.display = "none";
		}//fin if 
		else{
			menu.style.display = "inline-block";
		}//fin else
	}//fin tamMenu
	$scope.menuClick = function(){
		if(clickMenu){
			menu.style.display = "block";
			clickMenu = false;
		}//fin if
		else{
			menu.style.display = "none";
			clickMenu = true;
		}//fin else
	};//fin menuClick
	$scope.sesionClick = function(){
		if(clickMenu){
			sesion.style.display = "block";
			clickMenu = false;
		}//fin if
		else{
			sesion.style.display = "none";
			clickMenu = true;
		}//fin else
	};
}
