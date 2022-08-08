import React, {useState} from "react";
import './Lists.css';

//Handles the list functionality
const Lists = () => {
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

    return (
        <div className="list-gen">
            <div className="input-area">
                <h1>Enter List Here</h1>
                <textarea
                    id="list-input"
                    rows="20"
                    cols="50"
                    value={text.text}
                    onChange={handleInput}
                ></textarea>
                <button className="shuffle-btn" onClick={handleSubmit}>Shuffle List</button>
                <ol>
                    {text.visible ? list.map(item => <li>{item}</li>) : null}
                </ol>
            </div>
        </div>
    )
}

export default Lists;