/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
    return (
        <div>
            <img src="/placeholder.jpg" alt="main" className="w-full h-[300px] object-cover rounded-lg " />
                <div>
                    <h1 className="font-bold py-2 text-2xl">{trip?.userSelection?.location?.label}</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-5 py-3">
                            <h2 className="py-2 px-5 bg-gray-200 rounded-full text-gray-500">🗓️ {trip?.userSelection?.Days} Days</h2>
                            <h2 className="py-2 px-5 bg-gray-200 rounded-full text-gray-500">💸 {trip?.userSelection?.Budget} Budget</h2>
                            <h2 className="py-2 px-5 bg-gray-200 rounded-full text-gray-500">👤 No of Traveller: {trip?.userSelection?.People}</h2>
                        </div>
                        <Button>
                            <IoIosSend />
                        </Button>
                    </div>
                </div>
        </div>
    );
};

export default InfoSection;
