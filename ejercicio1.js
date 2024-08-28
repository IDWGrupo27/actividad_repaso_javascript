const urlApi = 'https://thronesapi.com/api/v2/Characters'
const fs = require('fs')

/*(1)*/
// async function infoPersonaje(){
//     let personajes = [];
//     try{
//         const response = await fetch(urlApi);
//         if(!response.ok){
//             throw new Error(`Error! ${response.status}`);
//         }
//         personajes = await response.json();
//         let data = personajes.find(personaje => personaje.fullName == "Ned Stark");
//         if(data){
//             console.log("INFORMACIÓN PERSONAJE NED STARK:")
//             console.log(data);
//         }else{
//             console.log('No se encontró el personaje!');
//         }      
//     }catch(error){
//         console.log(`Error! ${error}`);
//     }
// }
// infoPersonaje();


/*((2) y (3)*/
// async function personajesDisponibles(){
//     try{
//         const response = await fetch(urlApi);
//         if(!response.ok){
//             throw new Error(`Error! ${response.status}`);
//         }
//         const personajes = await response.json();
//         fs.writeFile("./personajes.json", JSON.stringify(personajes), error => {
//             if(error){
//                 console.log("Error al crear el archivo!");
//                 return;
//             }
//             console.log("\nARCHIVO CREADO CON ÉXITO!");
//         });
//     }catch(error){
//         console.log(`Error! ${error}`);
//     }
// }
// personajesDisponibles();


/*(4.a)*/
// fs.readFile('./personajes.json', 'utf-8', (error, datos) => {
//     if(error){
//         console.log(error);
//         return;
//     }
//     const listadoPersonajes = JSON.parse(datos);
//     const familia = listadoPersonajes
//         .filter(personaje => personaje.family == "House Stark")
//     console.log("FAMILIA HOUSE STARK:")
//     console.log(familia);
// });


/*(4.b)*/
// const archivoPersonajes = fs.readFileSync('./personajes.json', 'utf-8');
// const listaPersonajes = JSON.parse(archivoPersonajes);
// const nuevoPersonaje = {
//     id: 53,
//     firstName: 'Martin',
//     lastName: 'Forissi',
//     fullName: 'Martin Forissi',
//     title: 'Lord of Concordia',
//     family: 'House Forissi',
// };
// listaPersonajes.push(nuevoPersonaje)
// const cadenaPersonaje =JSON.stringify(listaPersonajes);
// fs.writeFile('./personajes.json', cadenaPersonaje,  error => {
//     if(error){
//         console.log("Error al sobrescribir el archivo!");
//     }else{
//         console.log("PERSONAJE CREADO CON ÉXITO!")
//     }
// });
// console.log(listaPersonajes);


/*(4.c)*/
// const archivoPersonaje = fs.readFileSync('./personajes.json', 'utf-8');
// const listaPersonaje = JSON.parse(archivoPersonaje);
// let personajesIdMenor = listaPersonaje  
//     .filter(personaje => personaje.id <= 25)
//     .map(personaje => personaje)
// const nuevoArchivo = JSON.stringify(personajesIdMenor);
// fs.writeFile('./personajes.json', nuevoArchivo, error => {
//     if(error){
//         console.log("Error al sobrescribir el archivo!");
//     }else{
//         console.log("PERSONAJES ID MENOR A 25 GUARDADOS CON ÉXITO!");
//     }
// });
// console.log(personajesIdMenor);