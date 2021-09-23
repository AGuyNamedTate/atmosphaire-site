import './App.css';
import Header from './Header';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Gallery from './Gallery';
import Partners from './Partners';
import Team from './Team';
import NoMatch from './NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
