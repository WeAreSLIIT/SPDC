export default class AuthService {
    
    setUserDetails(loggedIn,username,admin) {
        if(loggedIn === "success") {
            localStorage.setItem('loggedIn',true);
            localStorage.setItem('username', username);
            localStorage.setItem('admin',admin);
        } else {
            localStorage.setItem('loggedIn',false);
        }
        window.location.href = '/';
    }

    get isLoggedIn() {
        return (localStorage.getItem('loggedIn')  === 'true') ? true : false;
    }

    get username() {
        
        if (this.isLoggedIn) {
            return localStorage.getItem('username');
        }
        else {
            return 'Unknown';
        }
    }

    get isAdmin() {
        
        if(this.isLoggedIn) {
            return (localStorage.getItem('admin')  === 'true') ? true : false;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('admin');       
        window.location.href = '/';
    }
}