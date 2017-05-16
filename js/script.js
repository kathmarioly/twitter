function agregar(){

	//1.Recuperamos texto ingresado en Textarea y limpiamos textarea.
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	if (tareas == null || tareas.length == 0){
		alert("¡ERROR! Debe ingresar tarea");
		return false;
	}

	//2.Indicamos dónde van a estar las tareas que recuperé de textarea
	var cont = document.getElementById("contenedor");

	// 3.Creamos nuestros nuevos nodos elementos.
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

	// 4.Asignamos padres a nodos creados.
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//5 Creamos checkbox e iconos, les damos atributos y clases.
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//6.Asignamos padfes a nodos creados.
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	/*7.Agregamos un evento al hacer clic, para que elimine o 
	agegue la clase "tachado" al ELEMENTO CONTENEDOR */
	chck.addEventlistener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})

	//8.Removemos el icono basura al hacerle click sobre él.
	basura.addEventlistener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	/*9.Creamos una función click para el corazón
	y le asignamos la clase red de CSS*/
	cora.addEventlistener("click", function(){
		cora.classList.toggle("red");
	})

}	








