import React from "react";
const Tour:React.FC = () => {
    return (<div id="tour" className="bg-1">
        <div className="container">
            <h3 className="text-center">TOUR DATES</h3>
            <p className="text-center">Lorem ipsum we'll play you some music.<br/> Remember to book your tickets!</p>
            <ul className="list-group">
                <li className="list-group-item">September <span className="label label-danger">Sold Out!</span></li>
                <li className="list-group-item">October <span className="label label-danger">Sold Out!</span></li>
                <li className="list-group-item">November <span className="badge">3</span></li>
            </ul>

            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/paris.jpg" alt="Paris" width="400" height="300"/>
                        <p><strong>Paris</strong></p>
                        <p>Friday 27 November 2015</p>
                        <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/newyork.jpg" alt="New York" width="400" height="300"/>
                        <p><strong>New York</strong></p>
                        <p>Saturday 28 November 2015</p>
                        <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco" width="400" height="300"/>
                        <p><strong>San Francisco</strong></p>
                        <p>Sunday 29 November 2015</p>
                        <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Tour