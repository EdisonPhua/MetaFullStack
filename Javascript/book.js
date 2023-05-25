function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.info = function(){
    return("This book is titled :"+ this.title)
}