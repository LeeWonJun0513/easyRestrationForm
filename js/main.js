function Validation(isValid, message) {
  this.isValid = isValid;
  this.message = message;
}


function hasLowerCase(str) {
  return (/[a-z]/.test(str));
}

function validateId(id) {
  var mock_ids = ["abc", "cde", "mock", "hungry", "thisisid", "hello", "world"];

  var isValid = true;
  var id  = document.getElementById("id").value;
  
  // var id = document.getElementById('id');
  
  /* add code to check id must be of length 5 to 20 */
  /* if id is out of length constraint, isValid = false and append meesage - "id must be of length 5 to 20" */
  // implement :


  if(id.length<5 || id.length >20) {
    isValid = false;
    message = "id must be of length 5 to 20";
 
    return new Validation(false, message);
    
  }

  /* add code to check id must be lowercase */
  /* if id is not lowercase, isValid = false and append message - id must be lowercase" */
  // implement :
  var chars = "abcdefghijklmnopqrstuvwxyz";
  
  if(!hasLowerCase(id)) {
    isValid = false;
    message = "id must be lowercase";

    return new Validation(false, message);
    
  }



  /* add code to check whether id is duplicated with a item of mock_ids array */
  /* if duplicated, isValid = false and append message - id is duplicated" */
  // implement :

  for(var i=0; i<mock_ids.length; i++) {
    //
    if(id == mock_ids[i]) {
      console.log(mock_ids[i]);
      isValid = false;
      message = "id is duplicated";
    
      return new Validation(false, message);
    }
  
  }

  // if id is valid, return new Validation(true, "id is valid")
  // else, return new Validation(false, message)
  // -> about id is not valid , i implemented it before 'return new Validation .. '
    return new Validation(true, "id is valid");
    
 
}

function validatePassword(password) {
  /* check constraints here and return Validation object appropriately*/
  var password = document.getElementById("password").value;

  // if password is valid, return new Validation(true, "password is valid")
  // else return new Validation(false, message)
  // var password = document.getElementById("password").value;
  
  if(password.length <8 || password.length >20) {
    return new Validation(false, message)
  }else {
    return new Validation(true, "password is valid");
  }
}

function validateEmail(email) {
  /* check constraints here and return Validation object appropriately*/
  // if password is valid, return new Validation(true, "email is valid")
  // else return new Validation(false, message)
  var email = document.getElementById("email").value;
  var email_pattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  if(email.match(email_pattern)) 
    return new Validation(true, "email is valid");
  else{
    return new Validation(false, message);
  }
    
}

function validateMessage(message) {
  /* check constraints here and return Validation object appropriately*/
  // Check 140-character limit
  // if password is valid, return new Validation(true, "message is valid")
  // else return new Validation(false, message)

  if(message.value.length <= 140)
    return new Validation(true, "message is valid");
  else
    return new Validation(false, message);
  
}

function keyUpId() {
  /* get ID from the HTML tag - Hint (id = getElementById...) */
  
  var id = document.getElementById("id");
  var id_check = document.getElementById("id-check");
  /* add or remove a "hidden" class value*/
  id_check.classList.remove("hidden");
  /* var result = validateId(id); */
  var result = validateId(id);

  /* set text of <p> tag which have "id-check" id value as result.message */
  // if(result.isValid == true) {
  //   /* add class value (green) */
  //   /* remove class value (red) */
  // } else {
  //   /* remove class value (green) */
  //   /* add class value (red) */
  // }

  if(result.isValid == true) {
  
    id_check.innerHTML = "is valid";
    id_check.classList.add("green");
    id_check.classList.remove("red");
  }
  else {
    id_check.innerHTML = "is not valid";
    id_check.classList.add("red");
    id_check.classList.remove("green");
  }
}

function keyUpPassword() {
  /* add code here */
  /* similar implementation wtih keyUpID function */
  var password = document.getElementById("password");
  var password_check = document.getElementById("password-check");
  /* add or remove a "hidden" class value*/
  password_check.classList.remove("hidden");
  /* var result = validateId(id); */
  var result = validatePassword(password);

  /* set text of <p> tag which have "id-check" id value as result.message */
  // if(result.isValid == true) {
  //   /* add class value (green) */
  //   /* remove class value (red) */
  // } else {
  //   /* remove class value (green) */
  //   /* add class value (red) */
  // }

  if(result.isValid == true) {
  
    password_check.innerHTML = "is valid";
    password_check.classList.add("green");
    password_check.classList.remove("red");
  }
  else {
    password_check.innerHTML = "is not valid";
    password_check.classList.add("red");
    password_check.classList.remove("green");
  }
}



function keyUpEmail() {
  /* add code here */
  /* similar implementation wtih keyUpID function */

  
  var email = document.getElementById("email");
  var email_check = document.getElementById("email-check");
  /* add or remove a "hidden" class value*/
  email_check.classList.remove("hidden");
  /* var result = validateId(id); */
  var result = validateEmail(email);

  /* set text of <p> tag which have "id-check" id value as result.message */
  // if(result.isValid == true) {
  //   /* add class value (green) */
  //   /* remove class value (red) */
  // } else {
  //   /* remove class value (green) */
  //   /* add class value (red) */
  // }

  if(result.isValid == true) {
  
    email_check.innerHTML = "is valid";
    email_check.classList.add("green");
    email_check.classList.remove("red");
  }
  else {
    email_check.innerHTML = "is not valid";
    email_check.classList.add("red");
    email_check.classList.remove("green");
  }
}


function keyUpMessage() {
  /* add code here */
  var characterLeft= document.getElementById("characterLeft");

  /* 140-character limit : You have reached the limit */
  /* you should show how many characters left dynamically if text is under the limit*/
  var text = document.getElementById("message").value;
  
  var max = 140;
  var len = text.length;
  if( len >=max) {
      characterLeft.innerHTML = "end";
      
  }
  else {
      characterLeft.innerHTML = (max - len) + " characters left";
      
  }
  
}

function performSubmit() {
  /* check id, password, email */
  /* Hint : utilize validateId, validatePassword, validateEmail functions */

  var check_id = validateId(document.getElementById(id)).isValid;
  var check_password = validatePassword(document.getElementById(password)).isValid;
  var check_email= validateEmail(document.getElementById(email)).isValid;

  if(check_id == true && check_password == true && check_email == true)
   alert("registration succeed!");
  else
   alert("registration failed..TT");

}

