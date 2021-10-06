let btn = document.getElementById('cta-btn')
let overlay = document.getElementById('overlay')

btn.addEventListener('click', async () => {
    overlay.style.display = 'grid'
    overlay.classList.add('animate-overlay')

    await new Promise(resolve => setTimeout(resolve, 3000));
    overlay.classList.remove('animate-overlay')
    overlay.style.display = 'none'
})


