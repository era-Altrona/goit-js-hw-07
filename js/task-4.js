const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
     const formElements = loginForm.elements; 
      const formData = {
        password: formElements.password.value.trim(),  
        email: formElements.email.value.trim()
      };
     if (formData.password === '' || formData.email === '') {
        alert('All form fields must be filled in')
        return;
     }
    console.log(formData)
    loginForm.reset()
})
    
   