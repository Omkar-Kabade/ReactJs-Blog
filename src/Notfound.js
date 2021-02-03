import { Link } from "react-router-dom"

const Notfound = () => {
    return ( <div className="not-found">
               <h2>
                    Oops! Sorry
                </h2>  
                <p>Page Not Found</p>
                <br/>   
                <Link to="/" id='link'>Go To Home Page</Link>
            </div> );
}
 
export default Notfound;