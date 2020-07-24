import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import './airport.css'

export const getAirports = data => ({type: "FETCH_AIRPORT", payload: data})

export const airportReducer = (state = [], action) =>{
    switch (action.type) {
        case "FETCH_AIRPORT": return action.payload
        default: return state
    }
}
export const airportSearch = () => dispatch => {
    axios.get(`https://argodeep.github.io/React-Redux-Hooks-with-axios-redux-thunk/airport.json`)
        .then(response => {
            dispatch(getAirports(response.data))
        })
        .catch(error => {throw (error)})
}


const Airport = () => {
    const [loading , setLoading] = useState(false)
    const [resultAvailable, setResult] = useState(false)
    const [selected, setSelected] = useState(false)
    const [airport, setAirport] = useState({})
    const [airports, setAirports] = useState([])
    const handleInput = e =>{ searchAirports(e.target.value.trim().toLowerCase())}
    const selectAirport = payload => {
        setSelected(true)
        setResult(false)
        setAirport({airport: payload.airport, city: payload.city, iata: payload.iata})
    }
    const results = useSelector(state => state.airportReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!results.data) fetch()
        else
        if(results.data.length > 0) changeTitle()
        if(airport.city !== undefined) changeTitle()
    })
    let fetch = () => dispatch(airportSearch())
    let fetched = () => setLoading(false)
    let changeTitle = () => document.title = `공항 검색 결과: ${airport.airport}`
    let searchAirports = debounce(500, input => {
        let data = results.data
        if(input.length < 0) alert(` Error `)
        switch (input.length) {
            case 0:
                setAirports([])
                setResult(false)
                setSelected(false)
                break
            case 1:
                setAirports(data.filter(
                    e => e.airport.charAt(0).toLowerCase()=== input.toLowerCase()
                        || e.city.toLowerCase().includes(input.toLowerCase())
                        || e.iata.toLowerCase().includes(input.toLowerCase())))
                setResult(true)
                break
            default:
                setAirports(data.filter(
                    e => e.airport.toLowerCase().includes(input.toLowerCase())
                        || e.city.toLowerCase().includes(input.toLowerCase())
                        || e.iata.toLowerCase().includes(input.toLowerCase())))
                setResult(true)
                break
        }

    })

    return <>
        <div style={{ outline: 'none', border: 0 }}>
            {loading === false &&
            <div style={{ outline: 'none', border: 0 }}>
                <div style={{ width: '100%', display: 'block' }}>
                    <input
                        type="text"
                        placeholder="Enter Airport Name, Code or City Name"
                        className="Search"
                        // value={keyword}
                        onChange={e => handleInput(e)} />
                </div>
                <div className="Gap"></div>

                <h5 style={{ marginTop: 10, marginBottom: 10, fontSize: 15, color: '#f0ad4e', textAlign: 'center' }}>
                    {resultAvailable === true && "Search Results"}
                    {selected === true && "Selected Airport"}
                </h5>
                {selected === true &&
                <div className="Results">
                    <div style={{ marginTop: 0, padding: 10 }} onClick={() => setSelected(true)}>
                        <div style={{ width: '100%', display: 'block' }}>
                            <span style={{ fontWeight: 'bold' }}>{airport.city}</span>
                            <span style={{ float: 'right' }}>{airport.iata}</span>
                        </div>
                        <p style={{ marginTop: 5, marginBottom: 0, paddingBottom: 5, color: '#777', borderBottom: '0.5px solid #9997' }}>{airport.airport}</p>
                    </div>
                </div>
                }
                {selected === false && resultAvailable === true && airports.map((item, i) => (
                    <div className="Results" key={i}>
                        <div style={{ marginTop: 0, padding: 10 }} id="Select" onClick={() => selectAirport(item)}>
                            <div style={{ width: '100%', display: 'block' }}>
                                <span style={{ fontWeight: 'bold' }}>{item.city}</span>
                                <span style={{ float: 'right' }}>{item.iata}</span>
                            </div>
                            <p style={{ marginTop: 5, marginBottom: 0, paddingBottom: 5, color: '#777', borderBottom: '0.5px solid #9997' }}>{item.airport}</p>
                        </div>
                    </div>
                ))
                }
            </div>
            }
        </div>
    </>
}
export default Airport
