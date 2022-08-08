import React, {useState} from "react";

//Handles the list functionality
const ListRandomizer = () => {
    //initialize the final list and textarea text variables
    const [list, setList] = useState([]);
    const [text, setText] = useState({
        visible: false, //This is the list doesn't show until you press shuffle
        text: ''
    });
    
    function handleInput(e){
        setText(prevState => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    //sets visibility to true and sets the list breaking it up by new lines
    function handleSubmit(){
        var newText = Object.assign({}, text); //makes copy of text object

        if (newText.text == false){
            throw new Error('Empty list');
        } else {
            setList(shuffleList(newText.text.split('\n')));
            setText(prevState => ({...prevState, visible: true}))
        }
    }

    //randomizes list in a function
    function shuffleList(list){
        var len = list.length;
        var i = -1;
        var j, k;

        while (++i < len){ //loops over list until completely shuffled
            j = Math.floor(Math.random() * len);
            k = Math.floor(Math.random() * len);
            var t = list[j];
            list[j] = list[k];
            list[k] = t;
        }
        return list;
    }

    //resets form value and hides shuffled list
    function resetForm(){
        setText(prevState => ({
            ...prevState,
            text: '',
            visible: false
        }))
    }

    return (
        <>
            <section id="list-gen-desc">

                <h2>List Randomizer</h2>
                <p>This form allows you to arrange the items of a list in random order. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.</p>

            </section>
            <section id="list-gen">

                <h2>Part 1: Enter List Items</h2>
                <p>Enter your items in the field below, each on a separate line. Items can be numbers, names, email addresses, etc. A maximum of 10,000 items are allowed. Please don't enter anything you would consider confidential</p>

                <div className="input-area">
                    <textarea
                        id="list-input"
                        rows="20"
                        cols="50"
                        value={text.text}
                        onChange={handleInput}
                    ></textarea>
                    <p>(you're viewing this form securely)</p>
                    
                </div>

                <h2>Part 2: Go!</h2>
                <button onClick={handleSubmit}>Randomize</button>
                <button onClick={resetForm}>Reset Form</button>
            </section>
            <ol>
                {text.visible ? list.map(item => <li>{item}</li>) : null}
            </ol>
        </>
    )
}

export default ListRandomizer;