const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', par => {
    const value = par.currentTarget.value.length;
    const dataValue = par.currentTarget.dataset.length;
    
    
    // dataValue == value ?
    //     par.currentTarget.classList.add('valid') : par.currentTarget.classList.add('invalid');
    
    if (dataValue == value) {
        par.currentTarget.classList.add('valid')
       par.currentTarget.classList.remove('invalid') 
    }
    else {
        par.currentTarget.classList.add('invalid')
        par.currentTarget.classList.remove('valid')
    }
})
