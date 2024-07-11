import {destinations} from "../Data";
import { Link } from 'react-scroll';
import Tilt from 'react-parallax-tilt';


function Destinations(){

   
    return(
        <div className="destinations">
            <h1>Popular Destinations</h1>
            <div className="destination-list">
                {destinations.map(destination => (
                    <Link to={`/destination/${destination.id}`} key={destination.id}>
                    <Tilt>
                        <div className="destination-card">
                            <img src={destination.image} alt={destination.name} />
                            <h2>{destination.name}</h2>
                            <p>{destination.description}</p>
                        </div>
                    </Tilt>    
                    </Link>
            ))}
            </div>
        </div>
    )
}

export default Destinations