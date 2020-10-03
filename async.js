//alert('async')
// start something now and finish later
// let's add the eventlistener

const getToDo = (callback) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState ===4 && request.status === 200){ // see MDN for finding out - why ?
            callback(undefined,request.responseText); 
        }else if(request.readyState===4){
            callback('unsuccessful request',request.responseText);
        }
    })

    request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.send()
}
console.log('1')
console.log(2)

getToDo((err,data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log(3)
console.log(4)
// we can see the result in the networc section of the browser 
// but in the code we don't cnow when it is complete and how to get access to this data
// that we will do using the evenlistner
console.log('sent')

// Asynchronous behaviourf