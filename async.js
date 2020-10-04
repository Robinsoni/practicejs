//alert('async')
// start something now and finish later
// let's add the eventlistener

const getToDo = (resource,callback) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState ===4 && request.status === 200){ // see MDN for finding out - why ?
            data = JSON.parse(request.responseText)
            callback(undefined,data); 
        }else if(request.readyState===4){
            callback('unsuccessful request',request.responseText);
        }
    })

    request.open('GET',resource)
    request.send()
}
console.log('1')
console.log(2)
var resource1 = 'https://jsonplaceholder.typicode.com/todos/';
var resource2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
var resource3 = 'https://jsonplaceholder.typicode.com/posts/1'
getToDo(resource1,(err,data) => {
    console.log('callback fired')
    console.log(data)
    getToDo(resource2,(err,data) => {
        console.log('2nd time fired')
        console.log(data)
        getToDo(resource3,(err,data) => {
            console.log('3rd time fired')
            console.log(data)
        }
        ) // there is a better of way of calling these functions instead and that will be handled 
        /// using the promises
    }
    )
    
})
console.log(3)
console.log(4)
// we can see the result in the networc section of the browser 
// but in the code we don't cnow when it is complete and how to get access to this data
// that we will do using the evenlistner
console.log('sent')

// Asynchronous behaviourf