var config = {
    apiKey: "AIzaSyCrqK4vD6xCkkfEMqFBbdXVAYmm4Q6DMM0",
    authDomain: "form-7891d.firebaseapp.com",
    databaseURL: "https://form-7891d.firebaseio.com",
    projectId: "form-7891d",
    storageBucket: "form-7891d.appspot.com",
    messagingSenderId: "888416701447"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');

    // Save message
    saveMessage(name, email);
  

    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email
    });
  }