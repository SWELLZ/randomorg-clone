import React, {useState} from "react";

const Lists = () => {
    const [list, setList] = useState([]);
    
    function handleInput(e){
        setList(e.target.value.split(','))
        console.log(list)
        console.log(typeof(list))
    }

    return (
        <div className="list-gen">
            <div className="input-area">
                <h1>Enter List Here</h1>
                <textarea
                    id="list-input"
                    rows="30"
                    cols="50"
                    value={list}
                    onChange={handleInput}
                ></textarea>
                <p>{list}</p>
            </div>
        </div>
    )
}

export default Lists;