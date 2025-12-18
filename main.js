let btn_menu,menu_con,close_icon,open_icon

    btn_menu = document.getElementById("btn_menu")
    menu_con =  document.getElementById("menu_con")


    close_icon = `<span class="material-symbols-outlined">close</span>`
    open_icon = ` <span class="material-symbols-outlined">menu</span>`

    btn_menu.addEventListener('click', () => 
    {

        if (menu_con.style.display === "block") 
        {
            menu_con.style.display = "none"
            btn_menu.innerHTML = open_icon
        } else 
        {
            menu_con.style.display = "block"
            btn_menu.innerHTML = close_icon
        }
    })

// cand userul da scroll ascundem menu_con
window.addEventListener('scroll', () => {
    menu_con.style.display = "none"
    btn_menu.innerHTML = open_icon

    //pentru css
    // todo : cand dai scroll sa apara un header custom ce afiseaza numele 
    //        pagini in care esti.
    document.body.classList.toggle('scrolled', window.scrollY > 50);
})

let menu_list,menu_content 

    menu_content = `
        <a href="index.html">Home</a>
        <a href="about_me.html">About me</a>
        <a href="index.html#books">Books</a>
        <a href="contact.html">Contact me</a>
    `

    menu_list = document.getElementById("menu_list")

    menu_list.innerHTML = menu_content

let footer_links ,footer_content 

    footer_content = `
        <div class="logo-name">Dollz-Books</div>
        <div class="pipe">|</div>
        <a href="index.html">Home</a>
        <a href="about_me.html">About me</a>
        <a href="contact.html">Contact</a>
    `

    footer_links = document.getElementById("footer_links")

    footer_links.innerHTML = footer_content