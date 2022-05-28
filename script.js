const divs = [...document.querySelectorAll('.contact form div')]

divs.forEach(div =>{
    div.addEventListener('click', (e) =>{
        let label = div.firstElementChild
        const input = label.nextElementSibling
        input.addEventListener('input',(e) =>{
            if(!e.target.value == ''){
                label.classList.add('up')
            }else{
                label.classList.remove('up')
            }
        })
    })
})