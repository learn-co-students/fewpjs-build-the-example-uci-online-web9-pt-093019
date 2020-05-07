// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById('modal')
const likeButtons = document.getElementsByClassName('like')
let listItem 

initialize()

function initialize() {
  errorModal.setAttribute('class', 'hidden')
  addEventListenerToLikeButtons()
}

function addEventListenerToLikeButtons() {
  for(let i=0; i < likeButtons.length; i++) {
    const current = likeButtons[i]
    current.addEventListener('click', function(event){ 
      listItem = event.target.getElementsByClassName('like-glyph')[0];
      mimicServerCall().then(displayHeart).catch(handleError) 
    })
  }
}

function displayHeart(obj) {
  console.log("success")
  if (listItem.innerText == FULL_HEART) {
    listItem.innerText = EMPTY_HEART
  } else {
    listItem.innerText = FULL_HEART 
  }         
}

function handleError() {
  console.log("error")
  errorModal.setAttribute('class', "")        
  setTimeout(function() {errorModal.setAttribute('class', 'hidden')}, 5000);
}







//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
/*
Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads - DONE 

When a user clicks on an empty heart ("Recognizing events")
Invoke mimicServerCall to simulate making a server request
mimicServerCall randomly fails to simulate faulty network conditions
When the server returns a failure status
Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
Display the error modal by removing the .hidden class
Display the server error message in the modal
Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
When the server returns a success status
Change the heart to a full heart
Add the .activated-heart class to make the heart appear red
When a user clicks on a full heart
Change the heart back to an empty heart
Remove the .activated-heart class
*/