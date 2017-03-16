const togglelist = document.getElementById('toggle');
const listdiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const additem = document.querySelector('input.additem');
const additembutton = document.querySelector('button.additembutton');
const removeitembutton = document.querySelector('button.removeitembutton');
const listItems = document.querySelectorAll('li');

listdiv.addEventListener('mouseover', (event) =>{
  if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toUpperCase();
    }
});

 
listdiv.addEventListener('mouseout', (event) =>{
  if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});
  


toggle.addEventListener('click',() =>{
  if(listdiv.style.display == 'none'){
  togglelist.textcontent ='Hide list';
  listdiv.style.display = 'block';
}else{
  togglelist.textContent ='Show list';
  listdiv.style.display = 'none';
      }
});
  
button.addEventListener('click',() => {
 p.textContent = input.value + ':';
  input.value = '';
  
});

additembutton.addEventListener('click',() => {
 var ul = document.getElementsByTagName('ul')[0];
 var li = document.createElement ('li');
 li.textContent = additem.value;
 ul.appendChild(li);
 additem.value = '';
});

  removeitembutton.addEventListener('click', () => {
 var ul = document.getElementsByTagName('ul')[0];
 var li = document.querySelector ('li:last-child');
 
 ul.removeChild(li);
 
});
  
