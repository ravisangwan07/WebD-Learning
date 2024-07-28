# project related to DOM

## project link
[click here] (https://abcd.com)

# solution code


## project 1
```javascript
console.log("Hello world);
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
    }
    );
}
);



```

## project 2 solution

```javscript
const forms = document.querySelectorAll('form');

forms.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = 'Please provide a valid height';
    }
    else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = 'Please provide a valid weight';
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
    }
}
);  



```
