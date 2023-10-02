
export const localStoreData = (key, data) => {
    let value = typeof data === "object" ? JSON.stringify(data) : data;
    localStorage.setItem(key, value);
}

// Retrieve the object from the storage
export const getLocalStoreData = (key) => {
    const data = localStorage.getItem(key);
    return typeof data === "object" ? JSON.parse(data) : data;
}

export const sessionStoreData = (key, data) => {
    let value = typeof data === "object" ? JSON.stringify(data) : data;
    sessionStorage.setItem(key, value);
}

// Retrieve the object from the storage
export const getSessionStoreData = (key) => {
    const data = sessionStorage.getItem(key);
    return typeof data === "object" ? JSON.parse(data) : data;
}
