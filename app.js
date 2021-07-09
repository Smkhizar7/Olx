var i = 9;
var load = () => {
    var content = `<div class="card" style="width: 18rem;"><img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
<div class="card-body"><h5 class="card-title">Card ${i}</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+1}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+2}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+3}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+4}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+5}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card ${i+6}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><div class="card" style="width: 18rem;"><img src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card ${i+7}</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`;
    var div = document.getElementById('content');
    div.innerHTML += content;
}
function valid(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass');
    if(email === "" || email === null){
      alert("please enter email");
      return false;
    }
    else if(email.indexOf(" ") !== -1){
        alert("Email doesn't contain spaces!");
        return false;
    }
    else if(email.lastIndexOf("@") > (email.length-4)){
        alert("@ character should be placed before last four characters");
        return false;
    }
    else if(email.lastIndexOf("@") > email.lastIndexOf(".")-2){
        alert("One character is placed between @ and . character");
        return false;
    }
    else if(email.lastIndexOf(".") > (email.length-2)){
        alert(". character should be placed before last two characters");
        return false;
    }
    else if(pass.value === "" || pass.value === null){
        alert("please enter password");
        return false;
    }
    else if(pass.value.length<8){
        alert("please enter 8 digits password");
        return false;
    }
}
var add = (a) => {
  var win1 = window.open();
  var source = document.getElementById(a);
  win1.document.write(source.innerHTML);
}