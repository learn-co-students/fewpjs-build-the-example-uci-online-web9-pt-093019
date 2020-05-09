// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorDiv = document.getElementById('modal')
const errorTextArea = document.getElementById('modal-message')
const comments = document.getElementsByClassName('media-post')

for (const commentElement of comments) {
  const likeElement = commentElement.getElementsByClassName('like-glyph')[0]
  likeElement.addEventListener('click', likeEvent)
}

function likeEvent(event) {
  const heartElement = event.target
  mimicServerCall()
  .then (resp => like(heartElement))
  .catch ((error) => {
    errorDiv.classList.remove('hidden')
    errorTextArea.innerText = error
    setTimeout(timeOut, 5000)
  })
}

function like(heartElement) {
  
  if (heartElement.className == 'like-glyph activated-heart') {
    heartElement.innerText = EMPTY_HEART
    heartElement.className = 'like-glyph'
  }
  else {
    heartElement.innerText = FULL_HEART
    heartElement.className = 'like-glyph activated-heart'
  }
}

function timeOut() {
  errorDiv.classList.add('hidden')
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
