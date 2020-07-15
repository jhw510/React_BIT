import '../data/initialState.json'

const userService ={
    loginService
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
            return data
        })
}
function loginService(userid,password) {
    alert('api 로그인서비스 진입')
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({userid,password})
    }
    return fetch('/users/login',requestOptions)
        .then(handleResponse)
        .then(user =>{
            alert(`json읽기성공`)
            localStorage.setItem('userid',JSON.stringify(user))

        })
}
export default userService;