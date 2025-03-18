let amigos = [];

//Funcion para añadir el nombre de un amigo a la lista
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo!=''){
        if(amigos.includes(nombreAmigo)){
            limpiarCaja();
        } else{
            amigos.push(nombreAmigo);
            mostrarListaAmigos();
            console.log(nombreAmigo);
            limpiarCaja();
            console.log(amigos);     
        }            
    } else{
        alert('Por favor, inserte un nombre');
        return;
    }
}

//Funcion para actualizar la lista de amigos
function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML=''; 

    for(let i=0; i<amigos.length;i++){
        let fila=document.createElement('li');
        fila.textContent=amigos[i];
        lista.appendChild(fila);
    }      
}

//función para sortear los amigos 
function sortearAmigo(){
    if(amigos.length!=0){
        let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'El amigo secreto es ' + amigoSecreto;
        limpiarLista();
    } else{
        alert('No hay lista de amigos para sortear');
        return;
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){
    let limpiarListaAmigos = document.getElementById('listaAmigos');
    limpiarListaAmigos.innerHTML ='';
}
