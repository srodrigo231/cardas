// import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css'

// import image1 from './resources/img1.jpg'
// import image2 from './resources/img2.jpg'
// import image3 from './resources/img3.jpg'

import { Outlet, NavLink } from 'react-router-dom';

import Header from "./header"

export default function App() {
	return (
		<div>
            <Header/>
            <div>

                <a href="/cards">Go to the cards site</a>
                {/* <NavLink 
                    to={`/cards/`}>
                        <button>Go to the cards </button>
                </NavLink> */}
            </div>
            <Outlet />
        </div>
	);
}
