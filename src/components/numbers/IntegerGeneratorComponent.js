import React, {useState} from "react";

const IntegerGenerator = () => {
    return (
        <>
            <section id="num-gen-desc">
                <h2>Random Integer Generator</h2>
                <p>This form allows you to generate random integers. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.</p>
            </section>
            <section id="num-inputs">
                <h3>Part 1: The Integers</h3>
                <p>Generate <input type="number" max="10000" /> random integers (maximum 10,000)</p>

                <p>Each integer should have a value between <input type="number" /> and <input type="number" /> (both inclusive; limits 1,000,000,000).</p>

                <p>format in <input type="number" /> column(s).</p>
            </section>
            <section id="submit-nums">
                <h3>Part 2: Go!</h3>
                <p>Be patient! It may take a little while to generate numbers...</p>

                <button>Get Numbers</button><button>Reset Form</button>
            </section>
        </>
    );
}

export default IntegerGenerator;