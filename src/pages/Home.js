import React, { Component } from "react";
import Sidemenu from "../components/Sidemenu";


class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <Sidemenu />
                </div>

                <div className="col-md-9 mt-5">
                    
                          content...
                     
                </div>
            </div>
        );


    }
}

export default Home;