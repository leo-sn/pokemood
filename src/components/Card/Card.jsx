import img1 from '../../images/pokemon card.png'
import './Card.css'
const Card = () => {

    return (
        <div>
            <p>HERE IS THE CARD</p>
            <img src={img1}></img>
            <img className='card__pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif'></img>
        </div>
    )
}

export default Card;