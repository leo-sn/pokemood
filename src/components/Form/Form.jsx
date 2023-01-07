import './Form.css'
import Card from '../Card/Card'
import axios from 'axios';
import { useState, useEffect } from  'react';


const Form = () => {


const [pokeInfo, setPokeInfo] = useState()

const [cardInfo, setCardInfo] = useState()

const feelings = ['Happy','Sad','Excited','Angry','Gloomy'];
const pokemonType = {
    happy: 'electric',
    sad: 'poison',
    excited: 'fire',
    angry: 'fighting',
    gloomy: 'dark',
}

let nameLetter = '';
let feeling = '';
let pokeGif = '';

useEffect(() => {
    if(pokeInfo){
        axios.get(pokeInfo.url)
    .then(r => {
         const pokeNumber = r.data.id
         console.log(pokeNumber)
         const pokeGif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeNumber}.gif`
         setCardInfo({
            name: pokeInfo.name,
            pokeGif: pokeGif
         })
    })}
},[pokeInfo])

const getRandom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex];

    return item;
}

const submitHandler = (e) => {
    e.preventDefault();

    nameLetter = e.target.name.value[0].toLowerCase();
    feeling = e.target.mood.value;
    const type = pokemonType[feeling.toLowerCase()];
    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then(r => {
        const pokemonNames = r.data.pokemon;
        let pokemon = pokemonNames.find(o => o.pokemon.name[0] === nameLetter)
        console.log(pokemon)
        if(!pokemon) {
            pokemon = getRandom(pokemonNames)
        }
        const url = pokemon.pokemon.url;
        const name = pokemon.pokemon.name;
        setPokeInfo({
            url: url,
            name: name,
        })
        console.log(url, name)
    })
    .then(
        document.getElementById("form").reset()
    )
}





    return (
        <div className='form__container'>
            <h1>What pokemon are you today?</h1>
            <form onSubmit={submitHandler} id='form'>
                <label className="question">What is your name?</label>
                <input type="text" name='name'  required></input>
                <label className="question">How are you feeling?</label>
                    <div className="feelings-container">
                        {
                            feelings.map((f) => {
                                return (
                                    <>
                                        <input type='radio' name='mood' value={f}></input>
                                        <label>{f}</label>
                                    </>
                                )
                            })
                        }
                    </div>
                <button type="submit">Submit</button>
            </form>
            {cardInfo && <Card url={cardInfo.pokeGif} pokeName={cardInfo.name}/>}
        </div>
    )
}

export default Form;