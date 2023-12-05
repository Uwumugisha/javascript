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
let sum = books[0].pages + books[1].pages + books[2].pages + books[3].pages;
console.log(sum);