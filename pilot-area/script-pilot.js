const inputEvent = document.getElementById('inputValue')
const sendEvent = document.getElementById('sendInfo')

sendEvent.addEventListener('click', () => {
    const input = document.querySelector('input').value.trim();
    const sendEvent = document.querySelector('button');

    if(input !== ''){
        alert('Informação enviada, comandante!')
        return sendEvent
    }
})

function backtoMenu() {
    window.location = '/default.aspx';
}