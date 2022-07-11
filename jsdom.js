// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);

// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//   console.log(book);
// });

// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent='suyash';
//     book.textContent+='suyash';
// })

// const bookList=document.querySelector('#book-list');
// console.log(bookList.innerHTML);
// bookList.innerHTML='<p>hdfhkeru</p>'
// bookList.innerHTML+='<p>added HTML</p>'

// const banner=document.querySelector("#page-banner");
// console.log(banner.nodeType);
// console.log(banner.nodeName);
// console.log(banner.hasChildNodes());

// const clonedBanner=banner.cloneNode(false);
// console.log(clonedBanner);
// const clonedBanner=banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList=document.querySelector("#book-list")

// console.log(bookList.parentNode);
// console.log(bookList.parentElement.parentElement);
// console.log(bookList.childNodes);
// console.log(bookList.children);
// console.log(bookList.nextSibling);
// console.log(bookList.nextElementSibling);
// console.log(bookList.previousSibling);
// console.log(bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector("p").innerHTML+='</br>next line!'

// var btns=document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const li=e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })
// //e.preventdefault to prevent default behaviour

//delete books

const list=document.querySelector('#book-list ul')

list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li=e.target.parentElement
        list.removeChild(li)
    }
})

//add books

const addForm= document.forms['add-book']

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value= addForm.querySelector('input[type="text"]').value;
   
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //append to the document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

})
//setattribute remove add etc.

//hide books
const hideBox= document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        list.style.display="none"
    }
    else{
        list.style.display="initial"
    }
})

// filter books 
const searchBar = document.forms['search-books'].querySelector('input')
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();
    const books= list.getElementsByTagName('li')
    Array.from(books).forEach(function(book){
const title=book.firstElementChild.textContent;
if(title.toLowerCase().indexOf(term)!=-1){
book.style.display='block';
}
else{
book.style.display='none'
}
    })
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});

//if we want script tag to work in the headerr then we put an 
//eventlistener
//document.addEventListener('DOMContentLoaded',function(){
//  (add here js code)  
//})



