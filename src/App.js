import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import CreateBlog from './createBlog'
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';
import Sliderr from './Slider';
function App() {
  
  return(
  <Router>
          <div className="App">
            <Navbar/>
            <Route exact path = "/">
                  <Sliderr/>
                </Route>
            <div className="content">
              <Switch>
                <Route exact path = "/">
                  <Home/> 
                </Route>
                <Route path = "/create">
                  <CreateBlog/>
                </Route>
                <Route path = "/blogs/:id"> 
                {/* dynamic values in route are given using :name */}
                   <BlogDetails/>
                </Route>
                <Route path="*">
                  <Notfound/>
                </Route>

              </Switch>
            
            </div>
          </div>
  </Router>
  );
}

export default App;
