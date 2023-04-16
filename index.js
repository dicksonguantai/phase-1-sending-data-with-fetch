// Add your code here
let name = "Dickson"
let email = "dicksonguantai@gmail.com"


function submitData(name,email){
// const userDetails = {name,email};

const postUserDetails = {
    method:'POST',
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body:JSON.stringify({
        name:`${name}`,
        email:`${email}`
    }),
};
return( fetch("http://localhost:3000/users",postUserDetails)
    .then(res =>res.json())
    .then(data => {
        
    document.body.textContent= data.id

})
    .catch(error =>{
    document.body.textContent= error.message
}))
}
