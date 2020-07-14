const userService ={
    login
}
function handleResponse(response) {
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
        })
}
function login(userid,password) {
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({userid,password})
    }
    return fetch('/users/login',requestOptions)
        .then()
        .then(user =>{
            sessionStorage.setItem('userid',JSON.stringify(user))
            return user
        })
}
export default userService;