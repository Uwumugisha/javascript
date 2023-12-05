let books = [{
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    pages: 460,
},
{
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    pages: 254, 
},
{
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    pages: 352, 
}
 ];
 

 books.push({
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254, 
});
// console.log(books[3].title, books[3].author, books[3].pages);
let book = books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);