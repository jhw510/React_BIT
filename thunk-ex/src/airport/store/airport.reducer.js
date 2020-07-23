const getAirports = data => ({type: "FETCH_AIRPORT", payload: data})
//const initialState=[]


const airportReducer = (state = [], action) =>{
    switch (action.type) {
        case "FETCH_AIRPORT": return action.payload
        default: return state
    }
}
export default airportReducer