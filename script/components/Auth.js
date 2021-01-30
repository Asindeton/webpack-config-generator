import * as storage from '../util/localStorage';

const tokenName = 'jwToken';
const userIdName = 'userId';
const nameValue = 'nameValue';

const login = (token, userId, name) => {
    storage.set(tokenName, token);
    storage.set(userIdName, userId);
    storage.set(nameValue, name);
};

const logout = () => {
    storage.del(tokenName);
    storage.del(userIdName);
    storage.del(nameValue);
};

const token = () => {
    return storage.get(tokenName);
};

const userId = () => {
    return storage.get(userIdName);
};

const userName = () => {
    return storage.get(nameValue);
};

export { login, logout, token, userId, userName };
