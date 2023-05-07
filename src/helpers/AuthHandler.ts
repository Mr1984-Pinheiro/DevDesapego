import Cookies from 'ts-cookies';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}

export const doLogin = (token:any, rememberPassword = false) => {
    if(rememberPassword) {
        Cookies.set('token', token);
    } else {
        Cookies.set('token', token);
    }
}

export const doLogout = () => {
    Cookies.remove('token');
}
