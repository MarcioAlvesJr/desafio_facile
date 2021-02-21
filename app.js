
//Form wave effect
    const labels = document.querySelectorAll(".form-control label")
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    })
//Intro animation
    const  
        outsideLogo = document.querySelector('nav a img'),
        insideLogo = document.querySelector('.main.info .content-wrapper img.logo '),
        lefttitle = document.querySelector('h1.left-text'),
        leftText = document.querySelector('.main.info .content-wrapper p'),
        card = document.querySelector('.card'),
    items = [outsideLogo,insideLogo,leftText, lefttitle,card]

    items.forEach(item =>{
        item.style.opacity = "1"
        item.style.transform = "translate(0,0)"
    })
