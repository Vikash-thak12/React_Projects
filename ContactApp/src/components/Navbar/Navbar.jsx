import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="my-4 p-5 rounded-lg bg-white">
                <div className='flex justify-center items-center gap-5'>
                    <img src="logos_firebase.svg" alt="" />
                    <h1 className='font-bold text-2xl'>Firebase Contact App</h1>
                </div>
            </div>
            <div className='flex items-center justify-center w-full'>
                    <input type="text" placeholder='Search' className='flex-grow border border-white bg-transparent h-10 rounded-md' />
                </div>
        </>
    );
};

export default Navbar;