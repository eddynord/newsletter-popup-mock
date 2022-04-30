const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const submit = document.getElementById('btn')




form.addEventListener('submit', emailAdded)

function emailAdded(e) {
    if(emailInput.value === ''){
        alert('Enter a valid email');
    } else{
        alert('Subscription Added')
    }
    
    e.preventDefault()
}




