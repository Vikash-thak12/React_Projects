// import NumberSelector from './NumberSelector/NumberSelector';
import { useState } from 'react';
import './PlayGame.css'

const PlayGame = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6]
    const [selected, setSelected] = useState();
    // console.log(selected);
    return (
        // <div className="flex bg-red-200 p-10 gap-5">
        // PlayGame
        // <button onClick={toggle} className="bg-gray-400 p-5 rounded-lg">Click here for main page</button>
        // </div>
        <>
            <main className="min-h-screen">
                <div className="upper-content">
                    <div className="left-content">
                        <p className="text-center text-5xl">0</p>
                        <p className="text-2xl font-bold">Total Score</p>
                    </div>
                    {/* <div>
                        <NumberSelector />
                    </div> */}
                    <div className="right-content">
                        <div>
                            {
                                arrNumber.map((value, i) => (
                                    <div className= {`box ${value === selected ? 'select' : ""}`}
                                    onClick={() => setSelected(value)}
                                    key={i}>{value}</div>
                                ))
                            }
                        </div>
                        <p>Select Number</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PlayGame;