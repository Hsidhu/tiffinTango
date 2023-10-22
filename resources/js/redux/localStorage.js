
export const setLocalStoreData = (key, data) => {
    try {
        let value = typeof data === "object" ? JSON.stringify(data) : data;
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

// Retrieve the object from the storage
export const getLocalStoreData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return typeof data === "object" ? JSON.parse(data) : data;
    } catch (e) {
        console.warn(e);
    }
}

export const setSessionStoreData = (key, data) => {
    try {
        let value = typeof data === "object" ? JSON.stringify(data) : data;
        sessionStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

// Retrieve the object from the storage
export const getSessionStoreData = (key) => {
    try {
        const data = sessionStorage.getItem(key);
        return typeof data === "object" ? JSON.parse(data) : data;
    } catch (e) {
        console.warn(e);
    }
}
