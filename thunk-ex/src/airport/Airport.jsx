import React,{useState,useEffect} from "react";
import './airport.css'
import {MDBInput} from 'mdbreact'
import {useSelector,useDispatch} from "react-redux";
import * as API from './store/airport.api'
import {debounce} from 'throttle-debounce'
const Airport = () => {
    const [loading , setLoading] = useState(false)
    const [resultAvailable, setResultAvailable] = useState(false)
    const [selected, setSelected] = useState(false)
    const [airport, setAirport] = useState({})
    const [airports, setAirports] = useState([])
    const handleInput = e =>{}
    const selectAirport = item => {}
    const result = useSelector(state=>state.fetchAPI)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(!result.data) fetch()
        else
            if(result.data.length>0)changeTitle()
        if(airport.city !== undefined) changeTitle()

    })
    let fetch = () => dispatch(API.airportSearch())
    let fatched = ()=> setLoading(false)
    let changeTitle=()=> document.title=`공항 검색 결과 :${airport.airport}`
    let searchAirports = debounce()
    return <>
        <div style={{ outline: 'none', border: 0 }}>
            {loading === false &&
            <div style={{ outline: 'none', border: 0 }}>
                <div style={{ width: '100%', display: 'block' }}>
                    <MDBInput
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