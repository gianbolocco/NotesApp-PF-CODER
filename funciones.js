function saveTask(e){

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let color = document.getElementById("color").value;

    

    let task = {
        title,
        description,
        color
    };

    if(localStorage.getItem("tasks") === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }else if(title != "" && description != "" && color != ""){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task)
        localStorage.setItem("tasks",JSON.stringify(tasks))

        $("#modal-gp").fadeIn("fast");
    }

    e.preventDefault();
}
function setColor(color){
    document.getElementById("color").value = color;
}
//IGUANA 5 TUCAN GATO PAPA LAUTI SERPIENTE

function deleteTask(title) {
    
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }    

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

function openModal(title){
    $("#modal-delete").fadeIn("fast")

    $("#aceptar").click(()=>{
        deleteTask(title);
        $("#modal-delete").fadeOut("fast")
    })

    $("#cancelar").click(()=>{
        $("#modal-delete").fadeOut("fast")
    })
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksView = document.getElementById('tasks')

    tasksView.innerHTML = '';

    
    for(let i = 0; i < tasks.length; i++){

        let title = tasks[i].title;
        let description = tasks[i].description;
        let color = tasks[i].color;

        $("#tasks").prepend(`
        <div class="container-card ${color}">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <img src="sources/remove.png" class="remove" onclick="openModal('${title}')">                 
        </div>`); 

    }
}

function deleteAll(){
    localStorage.removeItem("tasks")

    $(".container-card").fadeOut("slow")
    $("#modal-deleteAll").fadeOut("fast")
}


// filtro
$("#filtro-verde").click(()=>{
    $(".verde, .rojo, .amarillo, .azul").show();
    $(".container-card:not(.verde)").hide()
})
$("#filtro-amarillo").click(()=>{
    $(".verde, .rojo, .amarillo, .azul").show();
    $(".container-card:not(.amarillo)").hide()
})
$("#filtro-azul").click(()=>{
    $(".verde, .rojo, .amarillo, .azul").show();
    $(".container-card:not(.azul)").hide()
})
$("#filtro-rojo").click(()=>{
    $(".verde, .rojo, .amarillo, .azul").show();
    $(".container-card:not(.rojo)").hide()
})
$("#rueda-colores").click(()=>{
    $(".verde, .rojo, .amarillo, .azul").fadeIn();
})