import { getTask } from "../../API EXERCICIO/controlers/taskController"

const url= 'http://localhost:3000'

async function getUsers(){
    let response = await axios.get(url+"/users")
    .then(response =>{
        const data = response.data
        usuarios_cadastrados.textContent = JSON.stringify(data)
    }).catch(error=> console.log(error))
    console.log(response)
}
async function getUsersSelect(){
    let response = await axios.get(url+"/users")
    .then(response =>{
        const data = response.data
        usuarios_cadastrados.textContent = JSON.stringify(data)
    }).catch(error=> console.log(error))

    const data = response.data.result
    let select = document.getElementById("users")
    for (let i=0; i < data.length;i++){
        let option = document.createElement("option")
        option.value = data[i].id
        option.textContent = data[i].nome
        select.appendChild(option)
    }
    console.log(response)
}

async function postUsers(){
    let response = await axios.post(url+"/users",{nome:document.getElementById("nome_usuario").value,email:document.getElementById("email_usuario").value});
}

async function getTask(){
    let response = await axios.get(url+"/tasks")

    let html = ""

    for (let i=0; i < response.data.result;i++){
        html += `<div>
        
        </div>`
    }
}



