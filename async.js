//alert('async')
// start something now and finish later
// let's add the eventlistener

const getToDo = (resource) =>{

    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState ===4 && request.status === 200){ // see MDN for finding out - why ?
                data = JSON.parse(request.responseText)
                resolve(data); 
            }else if(request.readyState===4){
                reject('unsuccessful request');
            }
        })

        request.open('GET',resource)
        request.send()
    })
    
}
console.log('1')
console.log(2)
var resource1 = 'https://jsonplaceholder.typicode.com/todos/';
var resource2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
var resource3 = 'https://jsonplaceholder.typicode.com/posts/1'
/*const getSomething = () => {
    
    // Let's see the promises so here 
    // either the promises is resolved (we get the data) or it is rejected
    return new Promise((resolve,reject) =>{
        //reject('Error')
        //resolve('Some data')
        
    }) 
    
}*/

// this is one way
/*getSomething().then( (data) => {
    console.log(data)
},(error) =>{
    console.log(error)
})*/

// The other way to catch the error
getToDo(resource1).then( (data) => {
    console.log(data)
}).catch((error) =>{
    console.log(error)
})

console.log(3)
console.log(4)
// we can see the result in the networc section of the browser 
// but in the code we don't cnow when it is complete and how to get access to this data
// that we will do using the evenlistner
console.log('sent')

// Asynchronous behaviourf