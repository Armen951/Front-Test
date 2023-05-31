export const getAccessToken = () => localStorage.getItem('token');
export const removeAccessToken = () => localStorage.removeItem('token');
export const setAccessToken = (token: 'string') => localStorage.setItem('token', token);
