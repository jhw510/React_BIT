import React from "react";
const Modal = () => {
    return (<div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4><span className="glyphicon glyphicon-lock"></span> Tickets</h4>
                </div>
                <div className="modal-body">
                    <form role="form">
                        <div className="form-group">
                            <label htmlFor="psw"><span
                                className="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per
                                person</label>
                            <input type="number" className="form-control" id="psw" placeholder="How many?"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usrname"><span className="glyphicon glyphicon-user"></span> Send
                                To</label>
                            <input type="text" className="form-control" id="usrname" placeholder="Enter email"/>
                        </div>
                        <button type="submit" className="btn btn-block">Pay
                            <span className="glyphicon glyphicon-ok"></span>
                        </button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                        <span className="glyphicon glyphicon-remove"></span> Cancel
                    </button>
                    <p>Need <a href="#">help?</a></p>
                </div>
            </div>
        </div>
    </div>)
}
export default Modal