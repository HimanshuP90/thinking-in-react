// var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item) {
	// console.log(item);
// })

// $('#wrapper')

const wrap = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wrap);
// var books = document.querySelector('#book-list li .name');
// console.log(books);

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book) {
	// console.log(book.textContent);
	// book.textContent += ' (book title)';
})
	
const bookList = document.querySelector('#book-list');
// bookList.innerHTML += '<h2> Books and more Books...</h2>'; 


var btn = document.querySelector('#add-book');
// console.log(btn);
// btn.textContent = 'Add Books';

// for(i=0;i< btn.length;i++){
// 	if(btn[i].type == 'text'){
// 	  btn[i].placeholder = 'Add more books ...'
// 	} else {
// 		btn[i].textContent = '+ Books'
// 	}
// }


const banner = document.querySelector('#page-banner');
// console.log(banner.nodeType);
// console.log(banner.nodeName);
// console.log(banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// console.log('The parent node is: ', bookList.parentNode);
// console.log('The parent element is: ', bookList.parentElement.parentElement);
// console.log('The child node is: ', bookList.childNo des);

// console.log('book-list next sibling: ', bookList.nextSibling);
// console.log('book-list next element sibling: ', bookList.nextElementSibling);

// console.log('book-list previous sibling: ', bookList.previousSibling);
// console.log('book-list previous element sibling: ', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML = '<br/> To cool for everyone!';

var btns = document.querySelectorAll('#book-list .delete');
// console.log(btns)

// Array.from(btns).forEach(function(btn){
// 	btn.addEventListener('click', function(e){
// 		const li = e.target.parentElement;
// 		li.parentNode.removeChild(li);
// 	});
// });

const list = document.querySelector('#book-list ul');
// console.log(list)
list.addEventListener('click', function(e){
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
})


//Add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;

	//create elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deletebtn = document.createElement('span');

	//add content
	deletebtn.innerHTML = 'delete';
	deletebtn.className = 'delete';
	bookName.textContent = value;

	//append tp document
	li.appendChild(bookName);
	li.appendChild(deletebtn);
	list.appendChild(li);

})


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
	if (hideBox.checked) {
		list.style.display = "none";
	} else {
		list.style.display = "inline";
	}
});

//custom search
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	})
});


//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
console.log(tabs);
console.log(panels);
tabs.addEventListener('click', function(e){
	if (e.target.tagName == "LI") {
		const targetPanel = document.querySelector(e.target.dataset.anything)
		panels.forEach(function(panel){
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		})
	}
})








