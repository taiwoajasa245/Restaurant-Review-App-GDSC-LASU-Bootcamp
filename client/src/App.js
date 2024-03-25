import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./components/Home";
import Fetchdata from './components/fetchdata';
import Error from './components/errorPage';
import Comingsoon from './components/comingsoon';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import BodyFunction from './components/Body';
import Place from './components/Place';
import NavX from './components/NavX'
import Signup from './components/Signup';
import Login from './components/Login'; 

function App() {
  return (
    <Router>
      <div className="App">
        <div className='page-content'>
          <Switch>


            <Route exact path='/'>
              <Navbar />
              <BodyFunction />
              <Place />
              <Footer />
            </Route>


            <Route path='/signup'>
              <NavX />
              <Signup />
              <Footer />
            </Route>

            <Route path='/login'>
              <NavX />
              <Login />
              <Footer />
            </Route>

            <Route path='/comming'>
              <Comingsoon />
            </Route>

            <Route component={Error} />

          </Switch>

        </div>
      </div >
    </Router>
  );
}

export default App;
