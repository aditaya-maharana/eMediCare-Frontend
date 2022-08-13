import React, { Component } from 'react'
import App from'./App.js';
import Doctorhome from'./component/Doctor/Doctorhome';
import Editdetail from"./component/Doctor/Editdetails";
import Viewappoinment from"./component/Doctor/Viewappoinment";
import Help from"./component/Help";
import About from"./component/About";
import Header from"./component/layout/Doctorheader";
import Footer from"./component/layout/Footer";
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

export default class Doctor extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div >
                        <Header />
                        <br></br>
                        <Switch>
                        <div className="container-fluid">
                        <Route exact path="/Doctor" >
                        <Doctorhome />
                        </Route>
                        <Route exact path="/home" component={Doctorhome} />
                        <Route exact path="/viewappoinment" component={Viewappoinment} />
                        <Route exact path="/editdetail" component={Editdetail} />
                        <Route exact path="/help" component={Help} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/" component={App} />
                        </div>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}
