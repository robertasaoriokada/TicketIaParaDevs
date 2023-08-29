let captura = document.getElementById("captura");
let valor;
let botao = document.getElementById("btn");
let frase = document.getElementById("frase");
let nome_do_usuario = document.getElementById("nome_do_usuario");
let fotoDePerfil = document.getElementById("fotoDePerfil");


btn.addEventListener('click', ()=>{
    if(captura != ""){
        valor = captura.value;
        getApi(valor);
    } else{
        console.log("Erro");
    }   
})

function getApi(username){
    let userFound = false;
    fetch('https://api.github.com/users').then(async res => {
        if(!res.ok){
            throw new Error(res.status);
        }
        let data = await res.json();
        console.log(data);
        
        data.forEach(element => {
            if(element.login == username){
                fotoDePerfil.src = element.avatar_url;
                nome_do_usuario.textContent = element.login; 
                userFound = true;
            }
        })
    
        if (!userFound) { 
            frase.style.display = "block";
        } else {
            frase.style.display = "none";
        }
    })
}