export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";

export const logout = () => ({ type: LOGOUT });
export const login = (user, token) => ({ type: LOGIN, user, token });
