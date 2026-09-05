interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const form = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const output = document.getElementById("output") as HTMLPreElement;
const SaveOutput = document.getElementById("SaveOutput") as HTMLPreElement;
const GetOutput = document.getElementById("GetOutput") as HTMLPreElement;

// ==================== COMMON FUNCTIONS ====================
function getUserData(): User {
  return {
    id: Date.now(),
    name: nameInput.value,
    email: emailInput.value,
    age: Number(ageInput.value)
  };
}
function display(data: unknown): void {
  output.textContent = JSON.stringify(data, null, 2);
}
form.addEventListener("submit", function(event: SubmitEvent): void {
  event.preventDefault();
  const user = getUserData();
  display({
    message: "User data is ready",
    user: user
  });
});

// ==================== LOCAL STORAGE ====================
function saveLocalStorage(): void {
  const user = getUserData();
  localStorage.setItem("user", JSON.stringify(user));
  SaveOutput.textContent = JSON.stringify({
    message: "Data saved in Local Storage",
    user: user
  }, null, 2);
}
function getLocalStorage(): void {
  const user = localStorage.getItem("user");
  if (!user) {
    GetOutput.textContent = "No data found in Local Storage";
    return;
  }
  const parseUser: User = JSON.parse(user);
  GetOutput.textContent = JSON.stringify({
    message: "Data retrieved from Local Storage",
    user: parseUser
  }, null, 2);
}
function removeLocalStorage(): void {
  localStorage.removeItem("user");
  SaveOutput.textContent = "Data removed from Local Storage";
  GetOutput.textContent = "";
}
function clearAllLocalStorage(): void {
  localStorage.clear();
  GetOutput.textContent = "";
  SaveOutput.textContent = "";
  output.textContent = "";
}

// ==================== SESSION STORAGE ====================
function saveSessionStorage(): void {
  const user = getUserData();
  sessionStorage.setItem("user", JSON.stringify(user));
  SaveOutput.textContent = JSON.stringify({
    message: "Data saved in Session Storage",
    user: user
  }, null, 2);
}
function getSessionStorage(): void {
  const user = sessionStorage.getItem("user");
  if (!user) {
    GetOutput.textContent = "No data found in Session Storage";
    return;
  }
  const parseUser: User = JSON.parse(user);
  GetOutput.textContent = JSON.stringify({
    message: "Data retrieved from Session Storage",
    user: parseUser
  }, null, 2);
}
function removeSessionStorage(): void {
  sessionStorage.removeItem("user");
  SaveOutput.textContent = "Data removed from Session Storage";
  GetOutput.textContent = "";
}

// ==================== COOKIE STORAGE ====================
function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}
function readCookie(name: string): string | null {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(cookieName)) {
      return decodeURIComponent(cookie.substring(cookieName.length));
    }
  }
  return null;
}
function saveCookie(): void {
  const user = getUserData();
  setCookie("user", JSON.stringify(user), 7);
  SaveOutput.textContent = JSON.stringify({
    message: "Data saved in Cookie for 7 days",
    user: user
  }, null, 2);
}
function getCookie(): void {
  const user = readCookie("user");
  if (!user) {
    GetOutput.textContent = "No data found in Cookie";
    return;
  }
  const parseUser: User = JSON.parse(user);
  GetOutput.textContent = JSON.stringify({
    message: "Data retrieved from Cookie",
    user: parseUser
  }, null, 2);
}
function removeCookie(): void {
  document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  SaveOutput.textContent = "Data removed from Cookie";
  GetOutput.textContent = "";
}

// ==================== INDEXEDDB ====================
let db: IDBDatabase;
const request: IDBOpenDBRequest = indexedDB.open("UserDatabase", 1);
request.onupgradeneeded = function(event: IDBVersionChangeEvent): void {
  db = (event.target as IDBOpenDBRequest).result;
  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", {
      keyPath: "id"
    });
  }
};
request.onsuccess = function(event: Event): void {
  db = (event.target as IDBOpenDBRequest).result;
  console.log("IndexedDB Connected Successfully");
};
request.onerror = function(event: Event): void {
  const request = event.target as IDBOpenDBRequest;
  console.error("IndexedDB Error:", request.error);
};
function saveIndexedDB(): void {
  if (!db) {
    SaveOutput.textContent = "Database is not ready";
    return;
  }
  const user = getUserData();
  const transaction: IDBTransaction = db.transaction(["users"], "readwrite");
  const store: IDBObjectStore = transaction.objectStore("users");
  const addRequest: IDBRequest<IDBValidKey> = store.add(user);
  addRequest.onsuccess = function(): void {
    SaveOutput.textContent = JSON.stringify({
      message: "User saved in IndexedDB",
      user: user
    }, null, 2);
  };
  addRequest.onerror = function(event: Event): void {
    const request = event.target as IDBRequest;
    SaveOutput.textContent = "Error saving user: " + request.error;
  };
}
function getIndexedDB(): void {
  if (!db) {
    GetOutput.textContent = "Database is not ready";
    return;
  }
  const transaction: IDBTransaction = db.transaction(["users"], "readonly");
  const store: IDBObjectStore = transaction.objectStore("users");
  const getRequest: IDBRequest<User[]> = store.getAll();
  getRequest.onsuccess = function(): void {
    const users: User[] = getRequest.result;
    if (users.length === 0) {
      GetOutput.textContent = "No users found in IndexedDB";
      return;
    }
    GetOutput.textContent = JSON.stringify({
      message: "All users retrieved from IndexedDB",
      users: users
    }, null, 2);
  };
  getRequest.onerror = function(event: Event): void {
    const request = event.target as IDBRequest;
    GetOutput.textContent = "Error getting users: " + request.error;
  };
}
function deleteIndexedDB(): void {
  if (!db) {
    GetOutput.textContent = "Database is not ready";
    return;
  }
  const id: number = Number(prompt("Enter User ID to delete:"));
  if (!id) {
    return;
  }
  const transaction: IDBTransaction = db.transaction(["users"], "readwrite");
  const store: IDBObjectStore = transaction.objectStore("users");
  const deleteRequest: IDBRequest<undefined> = store.delete(id);
  deleteRequest.onsuccess = function(): void {
    GetOutput.textContent = "User deleted successfully from IndexedDB";
  };
  deleteRequest.onerror = function(event: Event): void {
    const request = event.target as IDBRequest;
    GetOutput.textContent = "Error deleting user: " + request.error;
  };
}

// ==================== CACHE STORAGE ====================
const CACHE_NAME: string = "UserCache";
const CACHE_KEY: string = "/user-data";
async function saveCacheStorage(): Promise<void> {
  try {
    const user = getUserData();
    const cache: Cache = await caches.open(CACHE_NAME);
    const response = new Response(JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json"
      }
    });
    await cache.put(CACHE_KEY, response);
    SaveOutput.textContent = JSON.stringify({
      message: "User saved in Cache Storage",
      user: user
    }, null, 2);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    SaveOutput.textContent = "Error saving data in Cache Storage: " + message;
  }
}
async function getCacheStorage(): Promise<void> {
  try {
    const cache: Cache = await caches.open(CACHE_NAME);
    const response: Response | undefined = await cache.match(CACHE_KEY);
    if (!response) {
      GetOutput.textContent = "No user found in Cache Storage";
      return;
    }
    const user: User = await response.json();
    GetOutput.textContent = JSON.stringify({
      message: "User retrieved from Cache Storage",
      user: user
    }, null, 2);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    GetOutput.textContent = "Error getting data from Cache Storage: " + message;
  }
}
async function removeCacheStorage(): Promise<void> {
  try {
    const cache: Cache = await caches.open(CACHE_NAME);
    const deleted: boolean = await cache.delete(CACHE_KEY);
    if (deleted) {
      SaveOutput.textContent = "User removed from Cache Storage";
      GetOutput.textContent = "";
    } else {
      SaveOutput.textContent = "No user found to remove";
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    SaveOutput.textContent = "Error removing data: " + message;
  }
}