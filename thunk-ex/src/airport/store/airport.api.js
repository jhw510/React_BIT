import axios from 'axios'
import airportReducer from './airport.reducer'

const airportSearch = next => dispatch => {
    axios.get(``)
        .then(response => {
            dispatch(airportReducer(response.data))
        })
        .catch(error => {throw (error)})
}

export { airportSearch }