const submitBtn = document.getElementById("submitBtn");
const display = document.getElementById("display-container");
const myLibrary = [];

function Book(formTitle, formAuthor, formPages, formRead) {
	this.formTitle = formTitle;
	this.formAuthor = formAuthor;
	this.formPages = formPages;
	this.formRead = formRead;
	this.uuid = crypto.randomUUID();
}

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const formTitle = document.getElementById("title").value;
	const formAuthor = document.getElementById("author").value;
	const formPages = document.getElementById("pages").value;
	const formRead = document.getElementById("read").checked;
	const book = new Book(formTitle, formAuthor, formPages, formRead);
	myLibrary.push(book);
});

const createBookCard = (book) => {
	const bookCard = document.createElement('div')
	const title = document.createElement('p')
	const author = document.createElement('p')
	const pages = document.createElement('p')
	const buttonGrp = document.createElement('div')
	const readBtn = document.createElement('button')
	const removeBtn = document.createElement('button')
}
