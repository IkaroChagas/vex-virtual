const inputEvent = document.getElementById('inputValue')
const sendEvent = document.getElementById('sendInfo')

sendEvent.addEventListener('click', () => {
    const input = document.querySelector('input').value.trim();
    const sendEvent = document.querySelector('button');

    if(input !== ''| input === '' ){
        Toastify({
            text: "Enviado, comandante!",
            duration: 4000,
            gravity: 'top',
            position: 'center',
            style: {
                    background: '#4bab4e'
            }
    }).showToast()
        return sendEvent
    }
})

function backtoMenu() {
    window.location = '/default.aspx';
}