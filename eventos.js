$("#amarillo").click(() =>{
    
    $("#amarillo").animate({
        height: '70px',
        width: '70px'
    },"fast")
    $("#rojo").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#verde").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#azul").animate({
        height: '40px',
        width: '40px'
    },"fast")
})
$("#rojo").click(() =>{
        
    $("#rojo").animate({
        height: '70px',
        width: '70px'
    },"fast")
    $("#verde").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#azul").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#amarillo").animate({
        height: '40px',
        width: '40px'
    },"fast")
})
$("#verde").click(() =>{
    
    $("#verde").animate({
        height: '70px',
        width: '70px'
    },"fast")
    $("#rojo").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#azul").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#amarillo").animate({
        height: '40px',
        width: '40px'
    },"fast")
})
$("#azul").click(() =>{
    
    $("#azul").animate({
        height: '70px',
        width: '70px'
    },"fast")
    $("#rojo").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#verde").animate({
        height: '40px',
        width: '40px'
    },"fast")
    $("#amarillo").animate({
        height: '40px',
        width: '40px'
    },"fast")
})

$("#toggle").click(() => {
    $(".card-description").toggle("fast");
})

$("#cancelar-crear").click(()=>{
    $("#container").fadeOut("fast")
})

$("#cancelar-borrar").click(()=>{
    $("#modal-delete").fadeOut("fast")
})

$("#nuevaNota").click(()=>{
    $("#container").fadeIn("fast")
})
$("#cancelar-crear").click(()=>{
    $("#container").fadeOut("fast")
})

$("#menuFunciones").click(()=>{
    console.log("hola mundo")
})

$("#deleteAll").click(()=>{
    $("#modal-deleteAll").fadeIn("fast")
})

$("#cancelar-deleteAll").click(()=>{
    $("#modal-deleteAll").fadeOut("fast")
})

$("#aceptar-deleteAll").click(()=>{
    deleteAll();
})

$("#filtros").click(()=>{
    $(".slide").slideToggle("fast")
})