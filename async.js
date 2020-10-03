//alert('async')
// start something now and finish later

const request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.send()

// we can see the result in the networc section of the browser 
// but in the code we don't cnow when it is complete and how to get access to this data
// that we will do using the evenlistner
console.log('sent')