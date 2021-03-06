
class User {

    constructor() {
        this.init()
    }
    

    init() {
        this.name = localStorage.getItem('userName')
        this.email = localStorage.getItem('userEmail')
        this.loggedIn = localStorage.getItem('userLoggedIn')
        this.role=localStorage.getItem('role')
    }

    /**
     *
     * @param data object
     * @param data.name string
     * @param data.email string
     * @param callback function
     */
    authenticated(data, callback) {
        const secret = 'abcdefg';
       
        localStorage.setItem('userName', data.name)
        localStorage.setItem('userEmail', data.email)
        localStorage.setItem('userLoggedIn', true)
        localStorage.setItem('role',data.user_type)

        this.init();
        this.isLoggedIn();
       
        
        
        callback()
    }

    /**
     *
     * @return {boolean}
     */
   

    /**
     * Remove all user's data from local storage
     */
    destroy() {
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userLoggedIn')
        localStorage.removeItem('role')
    }

    /**
     *
     * @param callback function
     */
    logout(callback) {
        this.destroy()

        callback()
    }
    
    isLoggedIn() {
        return Boolean(this.loggedIn)===true
    }
}

export default new User()
