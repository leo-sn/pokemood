const Form = () => {

    const feelings = ['Happy','Sad','Excited','Angry','Glommy']

    return (
        <>
        <form>
            <label className="question">What is your name?</label>
            <input type="text" name='name'  required></input>

            <label className="question">How are you feeling?</label>
                <div className="feelings-container">
                    {
                        feelings.map((f) => {
                            return (
                                <>
                                    <label>{f}</label>
                                    <input type='radio'></input>
                                </>
                            )
                        })
                    }
                </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;