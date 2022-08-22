const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
     const userName = document.getElementById('name').value.trim()
     const userAge = document.getElementById('age').value.trim()
     const userCity = document.getElementById('city').value.trim()
     const userCode = document.getElementById('code').value.trim()
     const userEmail = document.getElementById('email').value.trim()
    
    const errors = []

    if(userName === '') 
        errors.push('Usuário não pode ficar em branco')
    
    if(userAge === '')
        errors.push('Idade não pode ficar em branco')
    
    if(userCity === '')
        errors.push('O campo cidade não pode ficar em branco')
    
    if(userCode === '')
        errors.push('Insira o seu código da rede de voo')
    
    if(userEmail === '')
        errors.push('Campo e-mail não pode ficar em branco')

    if(errors.length > 0) {

        for(let i = 0; i < errors.length; i++){
                Toastify ({
                        text: errors[i],
                        duration: 4000,
                        gravity: "top",
                        position: 'center',
                        style: {
                         background: "#DF1C24"
                        }
                }).showToast()
        }
    } else {
        Toastify({
                text: "Enviado com sucesso!",
                duration: 4000,
                gravity: 'top',
                position: 'center',
                style: {
                        background: '#4bab4e'
                }
        }).showToast()
    }
})

function backtoMenu() {
        window.location = '/default.aspx';
}

       