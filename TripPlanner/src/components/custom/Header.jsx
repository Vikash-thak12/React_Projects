// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import DialogBtn from "@/create_trips/Dialog";
import axios from "axios";


const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [openDialog, setOpenDialog] = useState(false)


    const handleLogout = () => {
        googleLogout()
        localStorage.removeItem('user')
        navigate("/")
    }

    const login = useGoogleLogin({
        onSuccess: (coreRes) => getUserProfile(coreRes),
        onError: (error) => console.log(error)
      })

      const getUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'Application/json'
          }
        }).then((res) => {
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res.data))
          setOpenDialog(false)
        })
      }

    useEffect(() => {
        // console.log(user);
    }, [])


    return (
        <div className="flex justify-between items-center p-5 shadow-md">
            <div>
                <img onClick={()=> navigate("/")} src="/logo.svg" alt="logo" className="cursor-pointer" />
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
                        <Button onClick={() => setOpenDialog(true)}>
                            Sign In
                        </Button>
                }
            </div>
            <DialogBtn open={openDialog} login={login} />

        </div>
    );
};

export default Header;