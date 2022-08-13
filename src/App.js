import './App.css';
import Home from"./component/patient/Home";
import Bookappoinments from"./component/patient/Bookappoinments";
import Viewdoctor from"./component/patient/Viewdoctor";
import Help from"./component/Help";
import About from"./component/About";
import Header from"./component/layout/Header";
import Footer from"./component/layout/Footer";
import Doctor from"./Doctor";
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';

const redirect= () => {
  <Redirect to="/Doctor"></Redirect>

}
function App() {
  return (
    <div>
    <Router>
      <div >
        <Header />
        <br></br>
        <Switch>
        <div className="container-fluid"> 
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/bookappoinments" component={Bookappoinments} />
        <Route exact path="/viewdoctor" component={Viewdoctor} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Doctor" component={Doctor} />
        </div>
        </Switch>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
