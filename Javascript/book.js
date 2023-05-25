function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.info = function(){
    return("This book is titled: "+ this.title + " by " + this.author)
}

const Bible = new book("Bible", "God", 100000 , "No")

console.log(Bible.info())