
let tareasGuardadas = [{
    Nombre: "Estudiar para la prueba",
    Completo: false ,
    FechaCreacion: new Date(),
    FechaTerminacion: null
}];

function agregarDuenio(){
  let ListaTareas = document.getElementById('agregar').value;
  if (ListaTareas == ""){
    swal
    ({
    title: 'Esta tarea esta vacia',
    icon: 'error'
    });
  }else{
  let fecha = new Date() 
  tareasGuardadas.push({
    Nombre: ListaTareas,
    Completo: false ,
    FechaCreacion: fecha,
    FechaTerminacion: null
  });
  }
  mostrarLista();
  document.getElementById('agregar').value = "";
  
}

function mostrarLista(){
  let listaTareas = document.getElementById("tareas");
  listaTareas.innerHTML="";
  
  for (let i = 0; i < tareasGuardadas.length; i++){
    let CheckBox = document.createElement("input");
    let br = document.createElement("br");
    let UnaTarea = document.createElement("label");
    UnaTarea.setAttribute("id", 'elemento' + i);


    CheckBox.class = "form-check-input position-static";
    CheckBox.type = "checkbox";
    CheckBox.name = 'CheckBox'+i;
    CheckBox.value = "value";
    CheckBox.id = 'id'+i;
    CheckBox.onclick = function() {
      TacharTarea(i);
    }
    //let checkBox = document.createElement('<input type="checkbox" id="cbox2" value="second_checkbox">')
    UnaTarea.innerText = tareasGuardadas[i].Nombre;


    if(tareasGuardadas[i].Completo == true) {
      CheckBox.checked = true;
      CheckBox.disabled = true;
      UnaTarea.style.color = "grey";
      UnaTarea.style.textDecoration = "line-through";
    }
    listaTareas.appendChild(CheckBox);
    listaTareas.appendChild(UnaTarea);
    listaTareas.appendChild(br);
  }
}

function TacharTarea(i) {
  let fecha = new Date()
  tareasGuardadas[i].Completo = true;
  tareasGuardadas[i].FechaTerminacion = fecha;
  mostrarLista();
}

let ComprobarTarea = (Longitud) => {
  let Comrpobado;
  if(Longitud == 0) 
  {
    swal
      ({
      title: 'todavia no hay tareas hechas!',
      icon: 'error'
      });
      Comprobado = false;
  } else {

    Comprobado = true;
  }
  return Comprobado;
}

let BuscarTarea = () => {
let TareasTerminadas = tareasGuardadas.filter (element => element.FechaTerminacion)
let Terminado = ComprobarTarea(TareasTerminadas.length);
if(Terminado){

  let TareaMasRapida = TareasTerminadas[0].Nombre;
  let FechaMasRapida = TareasTerminadas[0].FechaTerminacion - TareasTerminadas[0].FechaCreacion;

  for (let i = 0; i < TareasTerminadas.length; i++) {
    let FechaDuracion = TareasTerminadas[i].FechaTerminacion - TareasTerminadas[i].FechaCreacion ;
    if(FechaDuracion<FechaMasRapida){
      TareaMasRapida = TareasTerminadas[i].Nombre;
      FechaMasRapida = FechaDuracion;
    }
  }
  swal
    ({
    title: TareaMasRapida,
    icon: 'success'
    });

}
  
}

mostrarLista();