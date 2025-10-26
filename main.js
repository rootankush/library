const submitBtn = document.getElementById("submitBtn");
const myLibrary = [];

function Book(formTitle, formAuthor, formPages, formRead) {
    this.formTitle = formTitle;
    this.formAuthor = formAuthor;
    this.formPages = formPages;
    this.formRead = formRead;
    this.uuid = crypto.randomUUID();
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const formTitle = document.getElementById("title").value;
    const formAuthor = document.getElementById("author").value;
    const formPages = document.getElementById("pages").value;
    const formRead = document.getElementById("read").value;
    const book = new Book(formTitle, formAuthor, formPages, formRead);
    myLibrary.push(book);
});
