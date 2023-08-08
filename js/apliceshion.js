const firebaseConfig = {
  apiKey: "AIzaSyBDVnvKpz6wZrCiUpX1duM_ekEvbe5ITdo",
  authDomain: "server-e189f.firebaseapp.com",
  databaseURL: "https://server-e189f-default-rtdb.firebaseio.com",
  projectId: "server-e189f",
  storageBucket: "server-e189f.appspot.com",
  messagingSenderId: "772527644818",
  appId: "1:772527644818:web:885419b89082b58b78c64b",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("server");

document.getElementById("server").addEventListener("submit", submitForm);
//

var time = new Date();

//
function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");
  var URL = getElementVal("URL");
  var malum = navigator.userAgent;
  var lang = navigator.language;
  var timer = `${time}`;

  saveMessages(name, emailid, msgContent, timer, malum, lang, URL);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("server").reset();
}

const saveMessages = (name, emailid, msgContent, timer, malum, lang, URL) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Ismi: name,
    email: emailid,
    Fikri: msgContent,
    Vaqt: timer,
    Qurilma: malum,
    Tili: lang,
    URL: URL,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
