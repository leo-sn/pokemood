import img1 from '../../images/pokemon card.png'
import './Card.css'
const Card = (props) => {

    return (
        <div className='card-container'>
            <h2>You are the...</h2>
            <img src={img1}></img>
            <p>{props.pokeName}</p>
            <img className='card__pokemon' src={props.url}></img>
        </div>
    )
}

export default Card;