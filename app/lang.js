        // lang def
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

        // lang def end

        // lang full
        const navbarLangFull = document.querySelector('.navbar__menu-full-language-inner')
        const navbarLangFullVar = document.querySelector('.navbar__menu-full-language-var')
        const navbarLangFull1 = document.querySelector('.navbar__menu-full-language-1')
        const navbarLangFull2 = document.querySelector('.navbar__menu-full-language-2')
        const navbarLangFull3 = document.querySelector('.navbar__menu-full-language-3')

        navbarLangFull.addEventListener('click',function(){
            navbarLangFull.classList.toggle('active')
        })

        navbarLangFull1.addEventListener('click',function(){
            navbarLangFullVar.innerHTML = 'Русский'
            navbarLangFull1.style.display = 'none'
            navbarLangFull2.style.display = 'flex'
            navbarLangFull3.style.display = 'flex'
        })

        navbarLangFull2.addEventListener('click',function(){
            navbarLangFullVar.innerHTML = 'Узбекский'
            navbarLangFull1.style.display = 'flex'
            navbarLangFull2.style.display = 'none'
            navbarLangFull3.style.display = 'flex'
        })

        navbarLangFull3.addEventListener('click',function(){
            navbarLangFullVar.innerHTML = 'Английский'
            navbarLangFull1.style.display = 'flex'
            navbarLangFull2.style.display = 'flex'
            navbarLangFull3.style.display = 'none'
        })

        // lang full end

        // lang mobile
        const navbarLangMobile = document.querySelector('.navbar__menu-mobile-language-inner')
        const navbarLangMobileVar = document.querySelector('.navbar__menu-mobile-language-var')
        const navbarLangMobile1 = document.querySelector('.navbar__menu-mobile-language-1')
        const navbarLangMobile2 = document.querySelector('.navbar__menu-mobile-language-2')
        const navbarLangMobile3 = document.querySelector('.navbar__menu-mobile-language-3')

        navbarLangMobile.addEventListener('click',function(){
            navbarLangMobile.classList.toggle('active')
        })

        navbarLangMobile1.addEventListener('click',function(){
            navbarLangMobileVar.innerHTML = 'Русский'
            navbarLangMobile1.style.display = 'none'
            navbarLangMobile2.style.display = 'flex'
            navbarLangMobile3.style.display = 'flex'
        })

        navbarLangMobile2.addEventListener('click',function(){
            navbarLangMobileVar.innerHTML = 'Узбекский'
            navbarLangMobile1.style.display = 'flex'
            navbarLangMobile2.style.display = 'none'
            navbarLangMobile3.style.display = 'flex'
        })

        navbarLangMobile3.addEventListener('click',function(){
            navbarLangMobileVar.innerHTML = 'Английский'
            navbarLangMobile1.style.display = 'flex'
            navbarLangMobile2.style.display = 'flex'
            navbarLangMobile3.style.display = 'none'
        })

        // lang full end