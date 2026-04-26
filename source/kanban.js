//=====
//New Storage Format
//=====

// db setup


const DB_NAME = "n0t3B0ard";
const DB_VERSION = 1;
const STORE_NAME = "notes";
let db;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onerror = (event) => {
      reject("IndexedDB error: " + event.target.errorCode);
    };
  });
}

// load db
initDB().then(() => {
  loadSaved();
});

function clearCork(){
    document.getElementById("cork").innerHTML = '<div id="noteBoard"></div>'
}


function clear() {
    document.getElementById("cork").innerHTML = "";
    const transaction = db.transaction([STORE_NAME], "readwrite");
    transaction.objectStore(STORE_NAME).delete("noteBoard");
  }


function saveBrowser() {
  return new Promise((resolve, reject) => {
    const content = document.getElementById("cork").innerHTML;
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put({ id: "noteBoard", content });

    request.onsuccess = () => resolve();
    request.onerror = (event) => reject("Save error: " + event.target.errorCode);
  });
}

function loadSaved() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get("noteBoard");

    request.onsuccess = (event) => {
      const result = event.target.result;
      document.getElementById("cork").innerHTML = result ? result.content : "";
      resolve();
    };
    request.onerror = (event) => reject("Load error: " + event.target.errorCode);
  });
}


//=====
//Orginal Storage
//=====
/*
document.getElementById("noteBoard").innerHTML =
   localStorage["noteBoard"] || ""; // default text


   setInterval(function () {
    localStorage["noteBoard"] = document.getElementById("noteBoard").innerHTML + ' '; // heading div
}, 1000);

function clear() {
    localStorage.clear();
    localStorage["noteBoard"] = '';
    document.getElementById('cork').innerHTML='<div id="noteBoard"></div>'
 }

 function saveBrowser(){
    localStorage["noteBoard"] = document.getElementById("noteBoard").innerHTML
 }

 function loadSaved(){
    document.getElementById("noteBoard").innerHTML = localStorage["noteBoard"]
 }
 */



 //=====
 //Base Functions
 //=====

function addNote(){
    var noteTitle = '<h3 class="card-heading" style="margin-top: 0px;" contentEditable="true">'+document.getElementById("noteTitle").value+'</h3>'
    var nc = document.getElementById("noteText").value
    var noteText = '<p class="card-body" contentEditable="true">'+nc+'</p>'
    var noteBody = noteTitle + noteText
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = noteBody;
    document.getElementById("noteBoard").appendChild(div);

}

function clearInputs(){
    document.getElementById("noteTitle").value =''
    document.getElementById("noteText").value = ''
}
