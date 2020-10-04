var resource1 = 'https://jsonplaceholder.typicode.com/todos/';
var resource2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
var resource3 = 'https://jsonplaceholder.typicode.com/posts/1';

// async returns the promise itself
const getTodo = async() => {

    const response = await fetch(resource1);// This will stall the scrip right here 
    // untill the resource is resolved and then it goes to the next line of code
    // but that is not true outside of this async, 

    const data = await response.json() 
    return data
}
// Disclaimer: the async and await are not supported in the older browsers but only in the
// Modern browsers
console.log(1)
console.log(2)
getTodo()
.then(response => {
    console.log(response)
})

console.log(3)
console.log(4)
/*fetch(resource1).then((response) => {

    console.log('network request using the fetch API')
    return response.json() // this again gives returns the promise
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log('This is fired when there is network error, not even when 400+ status code return')
});*/