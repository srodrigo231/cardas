// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/styles.css'

// import image1 from './resources/img1.jpg'
// import image2 from './resources/img2.jpg'
// import image3 from './resources/img3.jpg'

import { Outlet, NavLink } from 'react-router-dom';

import Header from "./header"
import Footer from "./footer"

export default function App() {

    let styleHistory = {
        background : '#0F6205',
    }

    let styleTitle = {
        fontSize : '35px',
        padding : '30px 70px 30px 70px',
        fontFamily:'Quicksand',
        color: 'white'
    }

    let styleParagraph = {
        fontFamily:'Quicksand',
        color: 'white',
        fontSize : '20px',
        padding: '20px 50px 20px 50px',
    }

    let styleButton = {
        color: 'white',
        fontFamily:'Quicksand',
        background: '#0CBDE1',
        width: 'fit-content',
        padding:'10px',
        borderRadius:'10px',
    }

    let styleButtonPosition ={
        padding:'10px 10px 40px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    let paragraphs = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',

        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    ]

    let paragraphs_rendered = []
    paragraphs.forEach((item,index)=>{
        paragraphs_rendered.push( <div key={index} style={styleParagraph}>{item}</div>)
    })

	return (
		<div>
            <Header/>
            <div style={styleHistory}>
                {/* <a href="/cards">Go to the cards site</a> */}
                <div style={styleTitle}>
                    Meet the ordenary people looking climate changes in extraordinary ways.
                </div>

                {/* <img src={}></img> */}

                { paragraphs_rendered }
                
                {/* <NavLink 
                    to={`/cards/`}>
                        <button>Go to the cards </button>
                </NavLink> */}

                <div style={styleButtonPosition}>
                    <div style={styleButton}>Next history</div>
                </div>
                
            </div>
            {/* <Outlet /> */}
            <Footer/>
        </div>
	);
}
