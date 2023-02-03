

// DROP ARROW 2
const btnDrop01 = document.querySelector('.Drop01')

btnDrop01.addEventListener('click', ()=>{
    document.querySelector('.subMenuDrop01').classList.toggle('active')

    const img = document.querySelector('.arrowDrop01')
    document.querySelector('.subMenuDrop01').classList.contains('active')?img.src = "./imgs/icon-arrow-down.svg":img.src = "./imgs/icon-arrow-up.svg"
})


// DROP ARROW 2
const btnDrop02 = document.querySelector('.Drop02')

btnDrop02.addEventListener('click', ()=>{
    document.querySelector('.subMenuDrop02').classList.toggle('active')

    const img = document.querySelector('.arrowDrop02')
    document.querySelector('.subMenuDrop02').classList.contains('active')?img.src = "./imgs/icon-arrow-down.svg":img.src = "./imgs/icon-arrow-up.svg"
})



//MENU
const btnMenu = document. querySelector('#menucheckd')
btnMenu.addEventListener('click', ()=>{
    document.querySelector('.menu').classList.toggle('ativado')
    
    const imgmenu = document.querySelector('.imgMenu')
    document.querySelector('.menu').classList.contains('ativado')?imgmenu.src = "./imgs/icon-close-menu.svg":imgmenu.src = "./imgs/icon-menu.svg"

    // mudar cor do body
    let bodyBackground =  document.querySelector('.desfoque')
    document.querySelector('.menu').classList.contains('ativado')?bodyBackground.style.display = "block":bodyBackground.style.display = "none"
})



