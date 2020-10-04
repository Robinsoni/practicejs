var resource1 = 'https://jsonplaceholder.typicode.com/todos/';
var resource2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
var resource3 = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(resource1).then((response) => {

    console.log('network request using the fetch API')
    return response.json() // this again gives returns the promise
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log('This is fired when there is network error, not even when 400+ status code return')
});