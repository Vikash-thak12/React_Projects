import './StartGame.css'

const StartGame = ({toggle}) => {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <div>
                <img src="images/dices.png" alt="" />
            </div>
            <div className="content w-auto p-5 rounded">
                <h1 className="text-8xl">Dice Game</h1>
                <button onClick={toggle} className="border bg-black text-white py-3 px-8 rounded-md">Play Now</button>
            </div>
        </main>
    );
};

export default StartGame;