
import { getCards } from '../data'
// import '../style/styles.css'

import { Outlet, NavLink } from 'react-router-dom'

export default function Cards() {
    
    let cards = getCards()
    return (
        <div className="body">
            
            <div className='nav'>
                {cards.map((card) =>( 
                    <NavLink
                        to={`/cards/${card.id}`}
                        key={card.id}
                    >
                        { card.title }
                    </NavLink>))
                }
            </div>
            <Outlet />
        </div>
    )
}