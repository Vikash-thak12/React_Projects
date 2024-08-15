// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../ui/button";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate("/")
    }

    useEffect(() => {
        // console.log(user);
    }, [])


    return (
        <div className="flex justify-between items-center p-5 shadow-md">
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div>
                {
                    user ? (
                        <div className="flex items-center gap-5">
                            <Button varient="outline" className="rounded-full">My Trips</Button>
                            {/* <img src={user?.picture} alt="user-profile" className="rounded-full h-[40px] w-[40px] cursor-pointer" /> */}
                            <Popover>
                                <PopoverTrigger>
                                    <img  src={user?.picture} alt="user-profile" className="rounded-full h-[40px] w-[40px] cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Button onClick={handleLogout}>Logout</Button>
                                </PopoverContent>
                            </Popover>

                        </div>
                    ) :
                        <Button>
                            Sign In
                        </Button>
                }
            </div>
        </div>
    );
};

export default Header;