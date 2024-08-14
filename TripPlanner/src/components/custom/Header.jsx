// import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-5 shadow-md">
                <div>
                    <img src="/logo.svg" alt="logo" />
                </div>
            <div>
                <Button>
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default Header;