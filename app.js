var i = 9;
var load = () => {
//   var content = `<div class="card" style="width: 18rem;" id="card${i}"><img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
// <div class="card-body"><h5 class="card-title">Card ${i}</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div><div class="card" style="width: 18rem;" id="card${i+1}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+1}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//           <div class="card" style="width: 18rem;" id="card${i+2}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+2}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//           <div class="card" style="width: 18rem;" id="card${i+3}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+3}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//           <div class="card" style="width: 18rem;" id="card${i+4}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+4}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//           <div class="card" style="width: 18rem;" id="card${i+5}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+5}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//           <div class="card" style="width: 18rem;" id="card${i+6}">
//             <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card ${i+6}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div><div class="card" style="width: 18rem;" id="card${i+7}"><img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
//           <div class="card-body">
//           <h5 class="card-title">Card ${i+7}</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//           </div>
//           </div>`;
  var div = document.getElementById('content');
  var j = i+8;
  for(; i<j;i++){
    var content = `<div class="card" style="width: 18rem;" id="card${i}"><img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
      <div class="card-body"><h5 class="card-title">Card ${i}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;  
    div.innerHTML += content;
  }
  // i += 8;
}
var addToCart = ()=>{

}
var login = () => {
  window.location.href = "./login.html";
}
var signIn = () => {
  var email = document.getElementById('staticEmail2').value;
  var password = document.getElementById('inputPassword2').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((data) => {
    console.log(data)
    // ...
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}
var signUp = () => {
  var email1 = document.getElementById('staticEmail1').value;
  var password1 = document.getElementById('inputPassword1').value;
  firebase.auth().createUserWithEmailAndPassword(email1, password1)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}