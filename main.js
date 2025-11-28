const submitBtn = document.getElementById("btn-submit");
const display = document.getElementById("display-container");
const myLibrary = [];
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formRead = document.getElementById("read");

function Book(formTitle, formAuthor, formPages, formRead) {
	this.formTitle = formTitle;
	this.formAuthor = formAuthor;
	this.formPages = formPages;
	this.formRead = formRead;
	this.uuid = crypto.randomUUID();
}

function addBookToLibrary() {
	formTitle.value;
	formAuthor.value;
	formPages.value;
	formRead.checked;
	const book = new Book(formTitle, formAuthor, formPages, formRead);
	myLibrary.push(book);
}

function displayBook() {
	const title = document.createElement('h3') 
	const author = document.createElement('p') 
	const pages = document.createElement('p') 
	const readStatus = document.createElement('p') 

	title.textContent = `Title: ${formTitle.value}`
	author.textContent = `Author: ${formAuthor.value}`
	pages.textContent = `Pages: ${formPages.value}`
	if(formRead.checked === true) {
		readStatus.textContent = "Did you read the Book: Yes"
	}
	else {
		readStatus.textContent = "Did you read the Book: No"
	}

	const card = document.createElement('div')
	card.append(title, author, pages, readStatus)

	display.appendChild(card)
}

submitBtn.addEventListener("click", () => {
	addBookToLibrary()
	displayBook()
})