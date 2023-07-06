const ilkElement=document.querySelector("h1");
// ilkElement.remove();
const newElement= document.createElement("li");
newElement.innerHTML = "<li> TITAN RTX </li>";
const ul = document.querySelector("ul");
ul.append(newElement);

// task 3
const h1 = document.querySelector('h1');
h1.innerText = 'GeForce 20 Series';
const primary1 = document.querySelectorAll('.primary');
primary1.forEach( element => element.style.backgroundColor = '#ebebeb');

// task 4
const primary2 = document.querySelectorAll('.primary');
primary2.forEach(element => console.log(element.innerText));

// task 5
const list = document.querySelectorAll('li');
list.forEach((element) => {
  element.classList.add('item');
  if (!element.classList.contains('primary')) {
    element.classList.add('secondary');
  }
});
