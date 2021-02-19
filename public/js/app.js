// const { validate } = require("validate");
// const loginform = document.querySelector('form')
// const search = document.querySelector('input')

// const { response } = require("express");


// loginform.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const login = search.value

    // fetch('http://localhost:3000/').then((response) => {
    // response.json().then((data) =>{
    //     // function validate() {
    //     //     var mobilenumber = document.getElementById("mobilenumber").value;
        
    //         if(mobilenumber == "9030055777")
    //         {
    //             // alert("login successful");
    //             document.location.href = "page2";
    //             return false;
    //         }
    //         else
    //         {
    //             alert("login failed");
    //         }
    //     }
    // )
    // }
    // )
// })

// })


// var database = [
//     {
//         username: "harsha",
//         password: "123"
//     },
// ];

// var newsfeed = [
//     {
//         username: "harsha",
//         timeline: "Harsha is a good boy!"
//     }
// ];

// function isUserValid(usrname, password) {
//     for (var i=0; i< database.length; i++) {
//         if(database[i].username === username && database[i].password) {
//             return true;
//         }
//     }
//     return false;
// }

// function signIn(username, password) {
//     if (isUserValid(username, password)) {
//         console.log(newsfeed);
//     } else {
//         alert("Sorry, wrong username and password");
//     }
// }

// var userNamePromt = prompt("what\'s your username?");
// var passwordPromt = prompt("what\'s your password");

// signIn(userNamePromt, passwordPromt);


fetch('/login'). then((response) => {
    
        // function validate() {
        // var mobilenumber = document.getElementById("mobilenumber").value;
    
        // if(mobilenumber == "9030055777")
        // {
        //     console.log("login successful")
        //     // document.location.href = "page2";
        //     return false;
        // }
        // else
        // {
        //     console.log("login failed")
        //     // alert("login failed");
        // }
    // }
}
)

    