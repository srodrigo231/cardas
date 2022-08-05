import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import image1 from './resources/img1.jpg'
import image2 from './resources/img2.jpg'
import image3 from './resources/img3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)



const data = [
    {
        title: 'Card 1',
        image : '',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        title: 'Card 2',
        image : '',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    }, 
    {
        title: 'Card 3',
        image : '',
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
]

function Card(){
    const imageBackground = {
        backgroundImage : `url(${image3})`
    }
    return(
        <div 
            className='mycard'
            style = {imageBackground}>
            <h1 className='cardTitle'>Card 1</h1>
            <div className='cardDescription'>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <p className='cardSign'>Card 1</p>
            </div>
            
            
        </div>
    )
}

function Body(){
    return(
        <div className="body">
            <Card/>
        </div>
    )
}

function Footer(){
    return(
        <footer className="footer">
            <div>Oktana Corp.</div>
        </footer>
    )
}

function Header() {
    return (
        <div className="header">
            <FontAwesomeIcon icon="fab fa-salesforce" size="5x"/>
            
        </div>
    );
}

function Topnav(){
    return(
        <div className='topnav'>
            <a href="#">Card 1</a>
            <a href="#">Card 2</a>
            <a href="#">Card 3</a>
        </div>
    );
}

function App() {
	return (
		<div>
            <Header/>
            <Topnav/>
			<Body/>
			<Footer/>
        </div>
	);
}

export default App;
