import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
   
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/*" component={About} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
