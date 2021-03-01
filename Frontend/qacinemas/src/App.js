
import Home from './Components/Home/Home';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About/About' 
import Navigation from './Components/Navigation' 
import ListingsGallery from './Components/Gallery/ListingsGallery';
import NewReleases from './Components/Gallery/NewReleases';
import Classifications from './Components/Classifications/Classifications';
import Screens from './Components/Screens/Screens';
import TicketBookings from './Components/TicketBookings/TicketBookings';
import PlacesToGo from './Components/PlacesToGo/PlacesToGo';
import GettingThere from './Components/GettingThere/GettingThere';
import Search from './Components/Search/Search';
import Contact from './Components/Contact/Contact';
import OpeningTimes from './Components/OpeningTimes/OpeningTimes';

function App() {
  return (
    <div className="App">
     {/* <p>Hello world!</p> */}

     <Router>
     <Navigation/>
     <Switch>
     <Route path="/" exact>
      <Home/>
     </Route>
     <Route path="/about">
      <About/>
     </Route>
     <Route path="/listingsgallery">
      <ListingsGallery/>
     </Route>
     <Route path="/newreleases">
      <NewReleases/>
     </Route>
     <Route path="/classifications">
      <Classifications/>
     </Route>
     <Route path="/screens">
      <Screens/>
     </Route>
     <Route path="/ticketbookings">
      <TicketBookings/>
     </Route>
     <Route path="/placestogo">
      <PlacesToGo/>
     </Route>
     <Route path="/gettingthere">
      <GettingThere/>
     </Route>
     <Route path="/search">
      <Search/>
     </Route>
     <Route path="/contact">
      <Contact/>
     </Route>
     <Route path="/openingtimes">
      <OpeningTimes/>
     </Route>
     
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
