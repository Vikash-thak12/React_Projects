// import NumberSelector from './NumberSelector/NumberSelector';
import { useState } from 'react';
import './PlayGame.css'

const PlayGame = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6]
    const [selected, setSelected] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [showrules, setShowrules] = useState(false)
    const [btn, setBtn] = useState("Show Rules")


    const randomNumbergenerator = (min, max) => {
        // console.log(Math.floor(Math.random() * (max-min) + min));
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roledice = () => {
        if (!selected) {
            setError("Please choose one of the Number");
            return
        }
        setError("")
        const randomNum = randomNumbergenerator(1, 7);
        setCurrentDice((prev) => randomNum)
        if (selected === randomNum) {
            setScore((prev) => prev + randomNum)
        } else {
            setScore((prev) => prev - 2)
        }

        setSelected(undefined)
    }

    const errorhandler = (value) => {
        setSelected(value)
        setError("")
    }

    const showResult = () => {
        setShowrules((prev) => !prev)
        setBtn((prev) => prev === "Show Rules" ? "Hide Rules" : "Show Rules");
    }

    const resetScore = () => {
        setScore(0)
    }


    return (
        // <div className="flex bg-red-200 p-10 gap-5">
        // PlayGame
        // <button onClick={toggle} className="bg-gray-400 p-5 rounded-lg">Click here for main page</button>
        // </div>
        <>
            <main className="min-h-screen">
                <div className="upper-content">
                    <div className="left-content">
                        <p className="text-center text-5xl">{score}</p>
                        <p className="text-2xl font-bold">Total Score</p>
                    </div>
                    {/* <div>
                        <NumberSelector />
                    </div> */}
                    <div className="right-content">
                        <p className="text-red-900">{error}</p>
                        <div>
                            {
                                arrNumber.map((value, i) => (
                                    <div className={`box ${value === selected ? 'select' : ""}`}
                                        onClick={() => errorhandler(value)}
                                        key={i}>{value}</div>
                                ))
                            }
                        </div>
                        <p>Select Number</p>
                    </div>
                </div>
                <div className="lower-content">
                    <div>
                        <img
                            className="cursor-pointer "
                            onClick={roledice}
                            // onClick={() => selected ? roledice : "Please selece the Number"}
                            src={`images/dice/dice_${currentDice}.png`} alt="" />
                    </div>
                    <p className="text-center font-bold text-2xl">Click on dice to roll</p>
                    <button onClick={resetScore}>Reset Score</button>
                    <button onClick={showResult} className="bg-black text-white hover:bg-white hover:text-black">{btn}</button>
                </div>
                {showrules ?
                    <div className="rules">
                        <h2 className="font-bold text-2xl">How to play the Dice Game</h2>
                        <p>Select any number</p>
                        <p>Click on the dice image</p>
                        <p>After click on dice if selected number is equal to dice number you will get same points as dice</p>
                        <p>If you get wrong dice then 2 points will be reduced from your score</p>
                    </div>
                    : ""}
            </main>
        </>
    );
};

export default PlayGame;