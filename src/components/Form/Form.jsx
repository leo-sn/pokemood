import './Form.css'
import Card from '../Card/Card'
const Form = () => {

    const feelings = ['Happy','Sad','Excited','Angry','Glommy']

    return (
        <div className='form__container'>
            <form>
                <label className="question">What is your name?</label>
                <input type="text" name='name'  required></input>

                <label className="question">How are you feeling?</label>
                    <div className="feelings-container">
                        {
                            feelings.map((f) => {
                                return (
                                    <>
                                        
                                        <input type='radio' name='mo'></input>
                                        <label>{f}</label>
                                    </>
                                )
                            })
                        }
                    </div>
                <button type="submit">Submit</button>
            </form>
            <Card></Card>
        </div>
    )
}

export default Form;