import React from 'react';
import { Link } from 'react-router-dom';

function HomeComponent() {
  return (
    <>
        <div style={{border: '3px solid red', padding: '5px 20px'}} className="temporary">
            <h1 style={{color: 'red'}}>ATTENTION</h1>
            <p>Hello, you're seeing this page as I am working on it! This means there's going to be WAY more stuff than the site actually uses. The only things that work on this specific site are listed below. If you need anything that this site doesn't offer, head over to the original site <a href="https://www.random.org" target="_blank">Random.org</a></p>
            <h3>WORKING ITEMS:</h3>
            <ol>
                <li><Link to="/list-randomizer">List Randomizer</Link></li>
                <li><Link to="/integer-generator" >Number Randomizer</Link></li>
                <li><Link to="/spotify" >*WIP* Spotify playlist shuffle with API</Link></li>
            </ol>
        </div>
        <section id="home-intro">
            <h2>What's this fuss about <em>true</em> randomness?</h2>
            <p>Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula. This is fine for many purposes, but it may not be random in the way you expect if you're used to dice rolls and lottery drawings.</p>
            <p>RANDOM.ORG offers true random numbers to anyone on the Internet. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs. People use RANDOM.ORG for holding drawings, lotteries and sweepstakes, to drive online games, for scientific applications and for art and music. The service has existed since 1998 and was built by Dr Mads Haahr of the School of Computer Science and Statistics at Trinity College, Dublin in Ireland. Today, RANDOM.ORG is operated by Randomness and Integrity Services Ltd.</p>
        </section>
        <hr/>
        <section id="games-lotteries-section">
            <h2 className="section-title">Games and Lotteries</h2>
            
            <div className="items">
                <div className="left">
                    <p className="free">FREE services</p>
                </div>
                <p>Lottery Quick Pick is perhaps the Internet's most popular with over 280 lotteries</p>
                <p>Keno Quick Pick for the popular game played in many countries</p>
                <p>Coin Flipper will give you heads or tails in many currencies</p>
                <p>Dice Roller does exactly what it says on the tin</p>
                <p>Playing Card Shuffler will draw cards from multiple shuffled decks</p>
                <p>Birdie Fund Generator will create birdie holes for golf courses</p>
            </div>
        </section>
        <hr />
        <section id="numbers-section">
            <h2 className="section-title">Numbers</h2>
            
            <div className="items">
                <div className="left">
                    <p className="free">FREE services</p>
                </div>
                <p>Integer Generator makes random numbers in configurable intervals</p>
                <p>Sequence Generator will randomize an integer sequence of your choice</p>
                <p>Integer Set Generator makes sets of non-repeating integers</p>
                <p>Gaussian Generator makes random numbers to fit a normal distribution</p>
                <p>Decimal Fraction Generator makes numbers in the [0,1] range with configurable decimal places</p>
                <p>Raw Random Bytes are useful for many cryptographic purposes</p>
            </div>
        </section>
    </>
  )
}

export default HomeComponent