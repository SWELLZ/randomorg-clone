import React, {useState} from "react";

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

        setList(newText.text.split('\n'));
        setText(prevState => ({...prevState, visible: true}))
    }

    //TEMPORARY
    function hideList(){
        setText(prevState => ({...prevState, visible: false}))
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
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={hideList}>Set to false</button>
                <div>
                    {text.visible ? list.map(item => <p>{item}</p>) : <p></p>}
                </div>
            </div>
        </div>
    )
}

export default Lists;