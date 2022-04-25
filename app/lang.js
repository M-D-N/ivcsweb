        // lang
        const navbarLangDef = document.querySelector('.navbar__menu-def-language-inner')
        const navbarLangDefVar = document.querySelector('.navbar__menu-def-language-var')
        const navbarLangDef1 = document.querySelector('.navbar__menu-def-language-1')
        const navbarLangDef2 = document.querySelector('.navbar__menu-def-language-2')
        const navbarLangDef3 = document.querySelector('.navbar__menu-def-language-3')

        navbarLangDef.addEventListener('click',function(){
            navbarLangDef.classList.toggle('active')
        })

        navbarLangDef1.addEventListener('click',function(){
            navbarLangDefVar.innerHTML = 'Ru'
            navbarLangDef1.style.display = 'none'
            navbarLangDef2.style.display = 'flex'
            navbarLangDef3.style.display = 'flex'
        })

        navbarLangDef2.addEventListener('click',function(){
            navbarLangDefVar.innerHTML = 'Uz'
            navbarLangDef1.style.display = 'flex'
            navbarLangDef2.style.display = 'none'
            navbarLangDef3.style.display = 'flex'
        })

        navbarLangDef3.addEventListener('click',function(){
            navbarLangDefVar.innerHTML = 'En'
            navbarLangDef1.style.display = 'flex'
            navbarLangDef2.style.display = 'flex'
            navbarLangDef3.style.display = 'none'
        })

        // lang end