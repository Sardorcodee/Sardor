window.addEventListener('load', function (e) {


    // Nav menu 

    const navMenu = document.querySelector("#navMenu")
    const menuList = document.querySelector(".navbar .navs")
    const navbar = document.querySelector(".navbar")
    navMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        menuList.classList.toggle('show')
        if (menuList.classList.contains('show')) {
            navbar.classList.add('navbar-theme')
        } else {
            navbar.classList.remove('navbar-theme')
        }
    })


    window.addEventListener('scroll', scroolTop)

    function scroolTop() {
        const scrool = Math.floor(window.scrollY)
        const navbar = document.querySelector("section .navbar")
        if (scrool > 250) {
            navbar.classList.add('fixedNavbar')
        } else {
            navbar.classList.remove('fixedNavbar')
        }
    };


    //  animate__delay-5s animate__slower  
    const p = document.querySelector(".portfolio")

    p.addEventListener('click', calc)
    function calc() {
        p.classList.add('animate__hinge')
        setTimeout(() => {
            p.classList.remove('animate__hinge')
        }, 6000)
    }

    const img = document.querySelector(".mainPage .img")

    img.addEventListener('click', () => {
        img.classList.add('animate__heartBeat')
        setTimeout(() => {
            img.classList.remove('animate__heartBeat')
        },1000)
    })

});

