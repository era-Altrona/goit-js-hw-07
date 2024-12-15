const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')
input.addEventListener('input', function () 
{
    const inputValue = input.value.trim();
    if (inputValue === '') {
        output.textContent = 'Anonymousпод';
    } else {
        output.textContent = inputValue;
    }
})
console.log(input)
