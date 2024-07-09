const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

//.then is connected to resolve 
promiseOne.then(function(){
    console.log("Promise consumed");
})






//second promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 resolved');
})






//third promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Panny", email : "Pranav@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})




//fourth fromise
promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Panny", password : "1234 "})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
 
//chaining
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected "))





//fifth promise
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Javascript", password : "1234 "})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()








//fetch a json object
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ",error);
//     }
// }

// getAllUsers()
//hello world

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    
    console.log(response.json());
    // return response.json()
})
// .then((data)=>{
//     console.log(data);
// })
.catch((error)=>{
    console.log(error);
})