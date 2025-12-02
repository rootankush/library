const submitBtn = document.getElementById("btn-submit");
const display = document.getElementById("display-container");
const myLibrary = [];
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formRead = document.getElementById("readStatus");
let popup = document.getElementById("popup");

function Book(formTitle, formAuthor, formPages, formRead) {
	this.formTitle = formTitle;
	this.formAuthor = formAuthor;
	this.formPages = formPages;
	this.formRead = formRead;
	this.formuuid = crypto.randomUUID();
}

function addBookToLibrary() {
	formTitle.value;
	formAuthor.value;
	formPages.value;
	formRead.checked;
	const book = new Book(formTitle, formAuthor, formPages, formRead);
	myLibrary.push(book);
}

function openPopup() {
	popup.classList.add("open-popup");
}

function closePopup() {
	popup.classList.remove("open-popup");
}

function displayBook(book) {
	const title = document.createElement("h3");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const readStatus = document.createElement("p");
	const buttonDiv = document.createElement("div");
	const toggleRead = document.createElement("button");
	const removeBook = document.createElement("button");

	let text = document.createTextNode("Toggle Read");
	let remove = document.createTextNode("Remove");

	title.textContent = `${formTitle.value}`;
	author.textContent = `Author: ${formAuthor.value}`;
	pages.textContent = `Pages: ${formPages.value}`;
	if (formRead.checked === true) {
		readStatus.textContent = "Already read";
	} else {
		readStatus.textContent = "Haven't read yet";
	}

	toggleRead.append(text);
	removeBook.append(remove);

	buttonDiv.append(toggleRead, removeBook);

	const card = document.createElement("div");
	card.append(title, author, pages, readStatus, buttonDiv);

	removeBook.addEventListener("click", () => {
		card.remove();
	});

	toggleRead.addEventListener("click", () => {
		if (readStatus.textContent === "Already read") {
			readStatus.textContent = "Haven't read yet";
		} else {
			readStatus.textContent = "Already read";
		}
	});

	//styling dom elements

	buttonDiv.style.justifyContent = "space-between";

	// style toggle Button
	toggleRead.style.background = "#262d38ff";
	toggleRead.style.color = "#ffffff";
	toggleRead.style.padding = "0.5rem";
	toggleRead.style.borderRadius = "0.7rem";
	toggleRead.style.margin = "1rem 0.5rem";
	toggleRead.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";

	// style remove button
	removeBook.style.background = "red";
	removeBook.style.color = "#fff";
	removeBook.style.padding = "0.5rem";
	removeBook.style.borderRadius = "0.7rem";
	removeBook.style.margin = "1rem 0.5rem";

	// style card
	title.style.fontSize = "1.5rem";
	card.style.background = "#393E46";
	card.style.color = "#fff";
	card.style.margin = "0.8rem";
	card.style.border = "1px solid #ffffff";
	card.style.borderRadius = "1rem";
	card.style.padding = "1rem";
	card.style.fontSize = "1rem";
	card.style.textAlign = "start";
	card.style.lineHeight = "2.5rem";

	display.appendChild(card);
}

const form = document.getElementById("form");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
	displayBook();
	closePopup();
	form.reset();
});
