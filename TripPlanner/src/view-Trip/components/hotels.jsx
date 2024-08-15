/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Hotels = ({ trip }) => {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-5">Hotels Recommendation</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-2">
                {
                    trip?.tripData?.hotel_options?.map((hotel, index) => (
                        <Link to={"https://www.google.com/maps/search/?api=1&query="+hotel?.name+","+hotel?.address} target="_blank">
                            <div key={index} className="hover:scale-105 transition-all cursor-pointer shadow-md shadow-slate-400 rounded-md">
                                <img src={"/placeholder.jpg"} alt="recommend" className="rounded-lg" />
                                <div className="flex flex-col gap-2 px-2 py-1">
                                    <h2 className="line-clamp-1 font-medium">{hotel?.name}</h2>
                                    {/* <h2 className="line-clamp-2">{hotel.description}</h2> */}
                                    <h2 className="line-clamp-1 text-xs text-gray-500">📍{hotel?.address}</h2>
                                    <h2 className="text-sm">💰 {hotel?.price}</h2>
                                    <h2 className="text-sm">⭐ {hotel?.rating}</h2>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Hotels;