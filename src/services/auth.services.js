import apiClient from "../api/http-common";

// create an account 
export const register = async (  email, firstName, lastName, username, phoneNumber, password ) => {
    return await apiClient.post("signup", {
        email, firstName, lastName, username, phoneNumber, password,
    });
}

// account activation
export const activation = async(token) => {
    return  await apiClient.get("account-activation", {token})
}

// account login
export const login = async ( email, password ) => {
    return await apiClient.post("login", {
        email, password,
    });
}

const logout = () => {
    return apiClient.post("logout");
}

export default {
    register,
    activation,
    login,
    logout,
}
