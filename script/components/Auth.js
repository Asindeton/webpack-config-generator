import * as storage from '../util/localStorage';

const tokenName = 'jwt-token';
const userIdName = 'userId';

const login = (token, userId) => {
    storage.set(tokenName, token);
    storage.set(userIdName, userId);
};

const logout = () => {
    storage.del(tokenName);
};

const token = () => {
    return storage.get(tokenName);
};

const userId = () => {
    return storage.get(userIdName);
};

export { login, logout, token, userId };
