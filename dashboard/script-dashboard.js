const form = document.getElementById('subs')
const ageData = document.getElementsByClassName('inputAge');
const codeData = document.getElementsByClassName('inputCode');
const usernameData = document.getElementsByClassName('inputName');
const cityData = document.getElementsByClassName('inputCity');
const emailData = document.getElementsByClassName('inputEmail')


form.addEventListener('submit', (e) => {
   e.preventDefault()

    checkInput()
    
})

function checkInput() {
    let userName = usernameData.value.trim()
    let age = ageData.value.trim()
    let city = cityData.value.trim()
    let code = codeData.value.trim()
    let email = emailData.value.trim()

    if(userName, age, city, code, email === ''){
            setError('Campo não pode está vazio')
    } else {
            setSuccess('Campo preenchido com sucesso!')
    }
}

setSuccess(input)