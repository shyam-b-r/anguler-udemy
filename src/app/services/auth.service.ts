export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 1000)
        })
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}