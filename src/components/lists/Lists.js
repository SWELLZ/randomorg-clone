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

        setList(shuffleList(newText.text.split('\n')));
        setText(prevState => ({...prevState, visible: true}))
    }

    function shuffleList(list){
        var len = list.length;
        var i = -1;
        var j, k;

        while (++i < len){
            j = Math.floor(Math.random() * len);
            k = Math.floor(Math.random() * len);
            var t = list[j];
            list[j] = list[k];
            list[k] = t;
        }
        return list;
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
                <ol>
                    {text.visible ? list.map(item => <li>{item}</li>) : null}
                </ol>
            </div>
        </div>
    )
}

export default Lists;