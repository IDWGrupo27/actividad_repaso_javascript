const urlApi = 'https://fakestoreapi.com/products'

/*(1)*/
// async function obtenerProductos(){
//     try{
//         const response = await fetch(urlApi);
//         if(!response.ok){
//             throw new Error(`Error ${response.status}`);
//         }
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('Error ', error);
//     }
// }
// obtenerProductos();


/*(2)*/
// async function obtenerProductosLimitados(limit){
//     try{
//         const response = await fetch(`${urlApi}?limit=${limit}`);
//         if(!response.ok){
//             throw new Error(`Error ${response.status}`);
//         }
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('Error ', error);
//     }
// }
// obtenerProductosLimitados(5);


/*(3)*/
// async function agregarProducto(producto){
//     try{
//         const response = await fetch(urlApi, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(producto)
//         });
//         if(!response.ok){
//             throw new Error(`Error ${response.status}`);
//         }
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('Error ', error);
//     }
// }
// agregarProducto({
//     tite: 'new product',
//     price: 20.0,
//     description: 'new product add',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// });


/*(4)*/
// async function retornarProductoId(id){
//     try{
//         const response = await fetch(`${urlApi}/${id}`);
//         if(!response.ok){
//             throw new Error(`Error ${response.status}`);
//         }
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('Error ', error);
//     }
// }
// retornarProductoId(5);


/*(5)*/
// async function eliminarProducto(id){
//     try{
//         const response = await fetch(`${urlApi}/${id}`, {
//             method: "DELETE",
//         });
//         if(!response.ok){
//             throw new Error(`Error ${response.status}`);
//         }
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('Error ', error);
//     }
// }
// eliminarProducto(3);