import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

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
    
    return(
        <div className='mycard'>
            
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
            Salesforce
        </div>
    );
}

function Topnav(){
    return(
        <div className='topnav'>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            
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
