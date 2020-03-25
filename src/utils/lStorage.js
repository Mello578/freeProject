export const lStorage = {
    set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
    get: key => JSON.parse(window.localStorage.getItem(key)),
    del: key => window.localStorage.removeItem(key)
};
