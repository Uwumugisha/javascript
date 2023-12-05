// const firstPerson = 'Maxwell Wright';
// const phoneOfFirstPerson = '(0191)7196495';
// const emailOfFirstPerson = 'Curabitur.egestas.nunc@nonummyac.co.uk';
// const secondPerson = 'Raja Villarreal';
// const phoneOfSecondPerson = '0866 398 2895';
// const emailOfSecondPerson = 'posuere.vulputate@sed.com';
// const thirdPerson = 'Helen Richards';
// const phoneOfThirdPerson = '0800 1111';
// const emailOfThirdPerson = 'libero@convallis.edu';
// console.log(firstPerson,'/',phoneOfFirstPerson,'/',emailOfFirstPerson);
// console.log(secondPerson,'/',phoneOfSecondPerson,'/',emailOfSecondPerson);
// console.log(thirdPerson,'/',phoneOfThirdPerson,'/',emailOfThirdPerson);
let contactList = [
    {
        names: 'Maxwell Wright',
        phone: '(0191)7196495',
        email: 'Curabitur.egestas.nunc@nonummyac.co.uk'
    },
    {
        names: 'Raja Villarreal',
        phone: '0866 398 2895',
        email: 'posuere.vulputate@sed.com'
    },
    {
        names: 'Helen Richards',
        phone: '0800 1111',
        email: 'libero@convallis.edu'
    }
];
contactList[3] = {
    names: 'Maisie Haley ',
    phone: '0913 531 3030',
    email: 'risus.Quisque@urna.ca.'
};
console.log(contactList[0].names, '/', contactList[0].phone, '/', contactList[0].email);
console.log(contactList[3].names,'/', contactList[3].phone,'/', contactList[3].email);
console.log(contactList.length)
