document.getElementById('one').id;
document.getElementById('one').class;
document.getElementById('one').className;
document.getElementById('one').innerHTML;
document.getElementById('one').innerText;
document.getElementById('one').textContent;
document.getElementById('one').style;
document.getElementById('one').getAttribute('id');
document.getElementById('one').getAttribute('class');
document.getElementById('one').setAttribute('id', 'newItem');

title.style.backgroundColor = 'red';

document.querySelector('h1'); // for tag
document.querySelector('.item'); // for class
document.querySelector('#one'); // for id
document.querySelector('input[type="submit"]'); // for attribute

document.querySelectorAll('li'); // this will return a nodelist which is similar to an array but doesnt follow array methods

const tempclasslist = document.getElementsByClassName('item');
Array.from(tempclasslist); // this will convert the nodelist to an array