//console.log(window);

//alert(1);

//single element

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//multiple element
//console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items =document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul= document.querySelector('.items');
//  //ul.remove();
//   //ul.lastElementChild.remove();
//   ul.firstElementChild.textContent='hello';
//   ul.children[1].textContent='good';
//   ul.lastElementChild.innerHTML='<h4>hello</h4>';

//   const btn=document.querySelector('.btn');
// //   btn.style.background = 'red';

// btn.addEventListener('click' , (e) => {
//     e.preventDefault();
//    // console.log(e.target.className);
//    document.querySelector('#my-form').style.background ='#333';
//    document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h4>hello</h4>';

// });

const form=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameinput.value === '' || emailinput.value ===''){
       msg.classList.add('error');
        msg.innerHTML='please fill the fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode( `${nameinput.value} :${emailinput.value}`));
       userlist.appendChild(li);

       //clearfields
       nameinput.value = '';
       emailinput.value= '';
    }
}








