let strMunicipios='[{"municipio":"Adeje","poblacion":47869,"isla":"Tenerife"},{"municipio":"Agulo","poblacion":1096,"isla":"La Gomera"},{"municipio":"Alajeró","poblacion":2017,"isla":"La Gomera"},{"municipio":"Arafo","poblacion":5551,"isla":"Tenerife"},{"municipio":"Arico","poblacion":7988,"isla":"Tenerife"},{"municipio":"Arona","poblacion":81216,"isla":"Tenerife"},{"municipio":"Barlovento","poblacion":1876,"isla":"La Palma"},{"municipio":"Breña Alta","poblacion":7204,"isla":"La Palma"},{"municipio":"Breña Baja","poblacion":5690,"isla":"La Palma"},{"municipio":"Buenavista del Norte","poblacion":4778,"isla":"Tenerife"},{"municipio":"Candelaria","poblacion":27985,"isla":"Tenerife"},{"municipio":"Fasnia","poblacion":2786,"isla":"Tenerife"},{"municipio":"Frontera","poblacion":4093,"isla":"El Hierro"},{"municipio":"Fuencaliente de la Palma","poblacion":1722,"isla":"La Palma"},{"municipio":"Garachico","poblacion":4871,"isla":"Tenerife"},{"municipio":"Garafía","poblacion":1667,"isla":"La Palma"},{"municipio":"Granadilla de Abona","poblacion":50146,"isla":"Tenerife"},{"municipio":"La Guancha","poblacion":5520,"isla":"Tenerife"},{"municipio":"Guía de Isora","poblacion":21368,"isla":"Tenerife"},{"municipio":"Güímar","poblacion":20190,"isla":"Tenerife"},{"municipio":"Hermigua","poblacion":1832,"isla":"La Gomera"},{"municipio":"Icod de los Vinos","poblacion":23254,"isla":"Tenerife"},{"municipio":"Los Llanos de Aridane","poblacion":20462,"isla":"La Palma"},{"municipio":"La Matanza de Acentejo","poblacion":9061,"isla":"Tenerife"},{"municipio":"La Orotava","poblacion":42029,"isla":"Tenerife"},{"municipio":"El Paso","poblacion":7622,"isla":"La Palma"},{"municipio":"El Pinar de El Hierro","poblacion":1870,"isla":"El Hierro"},{"municipio":"Puerto de la Cruz","poblacion":30468,"isla":"Tenerife"},{"municipio":"Puntagorda","poblacion":2110,"isla":"La Palma"},{"municipio":"Puntallana","poblacion":2506,"isla":"La Palma"},{"municipio":"Los Realejos","poblacion":36402,"isla":"Tenerife"},{"municipio":"El Rosario","poblacion":17370,"isla":"Tenerife"},{"municipio":"San Andrés y Sauces","poblacion":4141,"isla":"La Palma"},{"municipio":"San Cristóbal de La Laguna","poblacion":157503,"isla":"Tenerife"},{"municipio":"San Juan de la Rambla","poblacion":4828,"isla":"Tenerife"},{"municipio":"San Miguel de Abona","poblacion":20886,"isla":"Tenerife"},{"municipio":"San Sebastián de la Gomera","poblacion":9093,"isla":"La Gomera"},{"municipio":"Santa Cruz de La Palma","poblacion":15716,"isla":"La Palma"},{"municipio":"Santa Cruz de Tenerife","poblacion":207312,"isla":"Tenerife"},{"municipio":"Santa Úrsula","poblacion":14679,"isla":"Tenerife"},{"municipio":"Santiago del Teide","poblacion":11111,"isla":"Tenerife"},{"municipio":"El Sauzal","poblacion":8934,"isla":"Tenerife"},{"municipio":"Los Silos","poblacion":4693,"isla":"Tenerife"},{"municipio":"Tacoronte","poblacion":24134,"isla":"Tenerife"},{"municipio":"El Tanque","poblacion":2763,"isla":"Tenerife"},{"municipio":"Tazacorte","poblacion":4575,"isla":"La Palma"},{"municipio":"Tegueste","poblacion":11294,"isla":"Tenerife"},{"municipio":"Tijarafe","poblacion":2532,"isla":"La Palma"},{"municipio":"Valle Gran Rey","poblacion":4564,"isla":"La Gomera"},{"municipio":"Vallehermoso","poblacion":2901,"isla":"La Gomera"},{"municipio":"Valverde","poblacion":5005,"isla":"El Hierro"},{"municipio":"La Victoria de Acentejo","poblacion":9185,"isla":"Tenerife"},{"municipio":"Vilaflor de Chasna","poblacion":1667,"isla":"Tenerife"},{"municipio":"Villa de Mazo","poblacion":4843,"isla":"La Palma"}]'
let pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Francisco Javier González Pérez",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
  /*function ejercicio1(){
    // este es el ejercicio
      // tabulación
                 // y espacios
    return "salida";
  }
  (function(){
    let codigoEjercicio1=document.getElementById("codigo-ejercicio1");
    let salidaEjercicio1=document.getElementById("return-ejercicio1");
    let retorno;
    retorno=ejercicio1();
    // Mostrar en HTML
    codigoEjercicio1.innerHTML=ejercicio1.toString();
    salidaEjercicio1.innerHTML=`<p>${retorno}</p>`
  })()*/
  //Funcion Ejercicio_1
  function ejer1(){ 
    let pilot1=pilots.map((e)=>{
      return `${e.name} experiencia: ${e.years}`})
      return pilot1
  }
  //Mostrar Ejercicio_1
  function mostrarejercicio1(){
    let datos = ejer1().split(",");
    return datos
  }
  let codigoEjercicio1=document.getElementById("codigo-ejercicio1");
  let salidaEjercicio1=document.getElementById("return-ejercicio1");
  let retorno=ejer1();
    // Mostrar en HTML
    codigoEjercicio1.innerHTML= ejer1.toString();
    salidaEjercicio1.innerHTML= retorno;

//Funcion Ejercicio_2
function ejer2(){
  let pilot2=pilots.map((e)=>{
    return {Nombre: e.name, Experiencia:  e.years}})
    return pilot2;
}
//Mostrar Ejercicio_2
function mostrarejercicio2(){
  let cabecera=`<tr>
    <th>Nombre</th>
    <th>Experiencia</th>
  </tr>`
  let datos = ejer2();
  datos=datos.map((e)=>{
    return `<tr>
    <td>${e.Nombre}</td>
    <td>${e.Experiencia}</td>
    </tr>`
  }).join("")
  return `<table>
  ${cabecera}
  ${datos}
  </table>`
}
let codigoEjercicio2=document.getElementById("codigo-ejercicio2");
let salidaEjercicio2=document.getElementById("return-ejercicio2");
let retorno2=ejer2();
  // Mostrar en HTML
  codigoEjercicio2.innerHTML= ejer2.toString();
  salidaEjercicio2.innerHTML=  mostrarejercicio2();

//Funcion Ejercicio_2
function ejer3(){
  pilot3=pilots.filter((e)=> {
    return (e.years>=16)})
  return pilot3;
}
//Mostrar Ejercicio_3
function mostrarejercicio3(){
  let cabecera=`<tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>`
  let datos = ejer3();
  datos=datos.map((e)=>{
    return `<tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.years}</td>
    </tr>`
  }).join("")
  return `<table>
  ${cabecera}
  ${datos}
  </table>`
}
let codigoEjercicio3=document.getElementById("codigo-ejercicio3");
let salidaEjercicio3=document.getElementById("return-ejercicio3");
let retorno3=ejer3();
  // Mostrar en HTML
  codigoEjercicio3.innerHTML= ejer3.toString();
  salidaEjercicio3.innerHTML= mostrarejercicio3();

//Funcion Ejercicio_4
function ejer4(){
  pilot4=pilots.map((e)=>{
    return e.years}).reduce((ac,years)=>{return (ac+years)})
  return pilot4;
}
let codigoEjercicio4=document.getElementById("codigo-ejercicio4");
let salidaEjercicio4=document.getElementById("return-ejercicio4");
let retorno4=ejer4();
  // Mostrar en HTML
  codigoEjercicio4.innerHTML= ejer4.toString();
  salidaEjercicio4.innerHTML= retorno4;




  
