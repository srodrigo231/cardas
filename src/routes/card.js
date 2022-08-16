import { useParams } from "react-router-dom"
import { getCard } from "../data";

export default function Card() {
    let params = useParams();
    let card = getCard(parseInt(params.cardId, 1));
    return (
        <div className='mycard'>
            <h1 className='cardTitle'>{ card.title }</h1>
            <div className='cardDescription'>
                <p> { card.description }</p>
                <p className='cardSign'>{ card.title }</p>
            </div>
        </div>
    )
}