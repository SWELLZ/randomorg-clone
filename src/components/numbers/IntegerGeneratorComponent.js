import React, {useState} from "react";

const IntegerGenerator = () => {
    return (
        <>
            <div style={{border: '3px solid red', padding: '5px 20px'}} className="temporary">
                <h1 style={{color: 'red'}}>ATTENTION</h1>
                <p>Hello again, this page currently has no functionality, the reason it's here is to show the idea of the page. Since there is no functionality, you can click <a href="https://www.random.org/integers/" target="_blank" >here</a> to go to the real random.org random integer generator!</p>
             </div>
            <section id="num-gen-desc">
                <h2>Random Integer Generator</h2>
                <p>This form allows you to generate random integers. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.</p>
            </section>
            <section id="num-gen-form">
                <h3>Part 1: The Integers</h3>
                <p>Generate <input type="number" max="10000" /> random integers (maximum 10,000)</p>

                <p>Each integer should have a value between <input type="number" /> and <input type="number" /> (both inclusive; limits 1,000,000,000).</p>

                <p>format in <input type="number" /> column(s).</p>
                <h3>Part 2: Go!</h3>
                <p>Be patient! It may take a little while to generate numbers...</p>

                <input type="submit" value="Generate Numbers" /><button>Reset Form</button>
            </section>
        </>
    );
}

export default IntegerGenerator;