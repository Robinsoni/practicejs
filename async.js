//alert('async')
// start something now and finish later
// let's add the eventlistener


const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState ===4){ // see MDN for finding out - why ?
        console.log(request.responseText) 
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.send()

// we can see the result in the networc section of the browser 
// but in the code we don't cnow when it is complete and how to get access to this data
// that we will do using the evenlistner
console.log('sent')