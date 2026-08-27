const form = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const output = document.getElementById("output");
const SaveOutput = document.getElementById("SaveOutput");
const GetOutput = document.getElementById("GetOutput");


// ========================================
// GET USER DATA
// ========================================

function getUserData() {
  const user = {
    id: Date.now(),
    name: nameInput.value,
    email: emailInput.value,
    age: Number(ageInput.value)
  };

  return user;
}


// ========================================
// DISPLAY FORM DATA
// ========================================

function display(data) {
  output.textContent = JSON.stringify(
    data,
    null,
    2
  );
}


// ========================================
// FORM SUBMIT
// ========================================

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = getUserData();

  display({
    message: "User data is ready",
    user: user
  });
});


// ========================================
// 1. LOCAL STORAGE
// ========================================

// SAVE
function saveLocalStorage() {
  const user = getUserData();

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  SaveOutput.textContent = JSON.stringify(
    {
      message: "Data saved in Local Storage",
      user: user
    },
    null,
    2
  );
}


// GET
function getLocalStorage() {
  const user = localStorage.getItem("user");

  if (!user) {
    GetOutput.textContent =
      "No data found in Local Storage";

    return;
  }

  const parseUser = JSON.parse(user);

  GetOutput.textContent = JSON.stringify(
    {
      message: "Data retrieved from Local Storage",
      user: parseUser
    },
    null,
    2
  );
}


// REMOVE
function removeLocalStorage() {
  localStorage.removeItem("user");

  SaveOutput.textContent =
    "Data removed from Local Storage";

  GetOutput.textContent = "";
}


// CLEAR ALL
function clearAllLocalStorage() {
  localStorage.clear();

  GetOutput.textContent = "";
  SaveOutput.textContent = "";
  output.textContent = "";
}


// ========================================
// 2. SESSION STORAGE
// ========================================

// SAVE
function saveSessionStorage() {
  const user = getUserData();

  sessionStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  SaveOutput.textContent = JSON.stringify(
    {
      message: "Data saved in Session Storage",
      user: user
    },
    null,
    2
  );
}


// GET
function getSessionStorage() {
  const user = sessionStorage.getItem("user");

  if (!user) {
    GetOutput.textContent =
      "No data found in Session Storage";

    return;
  }

  const parseUser = JSON.parse(user);

  GetOutput.textContent = JSON.stringify(
    {
      message: "Data retrieved from Session Storage",
      user: parseUser
    },
    null,
    2
  );
}


// REMOVE
function removeSessionStorage() {
  sessionStorage.removeItem("user");

  SaveOutput.textContent =
    "Data removed from Session Storage";

  GetOutput.textContent = "";
}


// ========================================
// 3. COOKIES
// ========================================

// SET COOKIE
function setCookie(name, value, days) {
  const date = new Date();

  date.setTime(
    date.getTime() +
    days * 24 * 60 * 60 * 1000
  );

  const expires =
    "expires=" + date.toUTCString();

  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    ";" +
    expires +
    ";path=/";
}


// READ COOKIE
function readCookie(name) {
  const cookieName = name + "=";

  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(cookieName)) {
      return decodeURIComponent(
        cookie.substring(cookieName.length)
      );
    }
  }

  return null;
}


// SAVE USER IN COOKIE
function saveCookie() {
  const user = getUserData();

  setCookie(
    "user",
    JSON.stringify(user),
    7
  );

  // Check whether cookie was actually saved
  console.log("All Cookies:", document.cookie);

  SaveOutput.textContent = JSON.stringify(
    {
      message: "Data saved in Cookie for 7 days",
      user: user
    },
    null,
    2
  );
}


// GET USER FROM COOKIE
function getCookie() {
  const user = readCookie("user");

  console.log("Cookie value:", user);

  if (!user) {
    GetOutput.textContent =
      "No data found in Cookie";

    return;
  }

  const parseUser = JSON.parse(user);

  GetOutput.textContent = JSON.stringify(
    {
      message: "Data retrieved from Cookie",
      user: parseUser
    },
    null,
    2
  );
}


// REMOVE COOKIE
function removeCookie() {
  document.cookie =
    "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";

  console.log("Cookie after removal:", document.cookie);

  SaveOutput.textContent =
    "Data removed from Cookie";

  GetOutput.textContent = "";
}

// ========================================
// 4. INDEXED DB
// ========================================

let db;

const request = indexedDB.open(
  "UserDatabase",
  1
);

request.onupgradeneeded = function(event){
  db = event.target.result;

  if(!db.objectStoreNames.contains("users")){
    db.createObjectStore(
      "users",
      {
        keyPath: "id"
      }
    );
  }
}

request.onsuccess = function(event){
  db = event.target.result;
  console.log("IndexedDB Connected Successfully");
}

request.onerror = function (event) {
  console.error(
    "IndexedDB Error:",
    event.target.error
  );
};

function saveIndexedDB(){
  if(!db){
    SaveOutput.textContent = "Database is not ready";
    return;
  }
  const user = getUserData();
  const transaction = db.transaction(
    ["users"],
    "readwrite"
  );

  const store = transaction.objectStore(
    "users"
  );

  const addRequest = store.add(user);

  addRequest.onsuccess = function () {

    SaveOutput.textContent = JSON.stringify(
      {
        message: "User saved in IndexedDB",
        user: user
      },
      null,
      2
    );

  };

  addRequest.onerror = function (event) {
    SaveOutput.textContent =
      "Error saving user: " +
      event.target.error;

  };

}

// ----------------------------------------
// GET ALL USERS
// ----------------------------------------

function getIndexedDB() {

  if (!db) {
    GetOutput.textContent =
      "Database is not ready";

    return;
  }

  const transaction = db.transaction(
    ["users"],
    "readonly"
  );

  const store = transaction.objectStore(
    "users"
  );

  const getRequest = store.getAll();


  getRequest.onsuccess = function () {

    const users = getRequest.result;

    if (users.length === 0) {
      GetOutput.textContent =
        "No users found in IndexedDB";

      return;
    }

    GetOutput.textContent = JSON.stringify(
      {
        message: "All users retrieved from IndexedDB",
        users: users
      },
      null,
      2
    );

  };


  getRequest.onerror = function (event) {

    GetOutput.textContent =
      "Error getting users: " +
      event.target.error;

  };

}


// ----------------------------------------
// DELETE USER
// ----------------------------------------

function deleteIndexedDB() {

  if (!db) {
    GetOutput.textContent =
      "Database is not ready";

    return;
  }

  const id = Number(
    prompt("Enter User ID to delete:")
  );


  if (!id) {
    return;
  }


  const transaction = db.transaction(
    ["users"],
    "readwrite"
  );

  const store = transaction.objectStore(
    "users"
  );

  const deleteRequest = store.delete(id);


  deleteRequest.onsuccess = function () {

    GetOutput.textContent =
      "User deleted successfully from IndexedDB";

  };


  deleteRequest.onerror = function (event) {

    GetOutput.textContent =
      "Error deleting user: " +
      event.target.error;

  };

}

// ========================================
// 5. CACHE STORAGE
// ========================================

const CACHE_NAME = "UserCache";

const CACHE_KEY = "/user-data";

// ----------------------------------------
// SAVE USER
// ----------------------------------------

async function saveCacheStorage() {

  try {

    const user = getUserData();


    // Open/Create Cache
    const cache = await caches.open(
      CACHE_NAME
    );


    // Convert user object to Response
    const response = new Response(
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );


    // Save data in Cache
    await cache.put(
      CACHE_KEY,
      response
    );


    SaveOutput.textContent = JSON.stringify(
      {
        message: "User saved in Cache Storage",
        user: user
      },
      null,
      2
    );

  } catch (error) {

    SaveOutput.textContent =
      "Error saving data in Cache Storage: " +
      error.message;

  }

}


// ----------------------------------------
// GET USER
// ----------------------------------------

async function getCacheStorage() {

  try {

    const cache = await caches.open(
      CACHE_NAME
    );


    const response = await cache.match(
      CACHE_KEY
    );


    if (!response) {

      GetOutput.textContent =
        "No user found in Cache Storage";

      return;

    }


    // Convert Response to JavaScript object
    const user = await response.json();


    GetOutput.textContent = JSON.stringify(
      {
        message: "User retrieved from Cache Storage",
        user: user
      },
      null,
      2
    );

  } catch (error) {

    GetOutput.textContent =
      "Error getting data from Cache Storage: " +
      error.message;

  }

}


// ----------------------------------------
// REMOVE USER
// ----------------------------------------

async function removeCacheStorage() {

  try {

    const cache = await caches.open(
      CACHE_NAME
    );


    const deleted = await cache.delete(
      CACHE_KEY
    );


    if (deleted) {

      SaveOutput.textContent =
        "User removed from Cache Storage";

      GetOutput.textContent = "";

    } else {

      SaveOutput.textContent =
        "No user found to remove";

    }

  } catch (error) {

    SaveOutput.textContent =
      "Error removing data: " +
      error.message;

  }

}