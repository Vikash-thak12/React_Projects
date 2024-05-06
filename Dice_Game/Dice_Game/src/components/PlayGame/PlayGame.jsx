import './PlayGame.css'

const PlayGame = ({ toggle }) => {
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
                    <div className="right-content">
                        <div>
                            <div className="box">1</div>
                            <div className="box">2</div>
                            <div className="box">3</div>
                            <div className="box">4</div>
                            <div className="box">5</div>
                            <div className="box">6</div>
                        </div>
                        <p>Select Number</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PlayGame;