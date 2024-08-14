import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { budgetOptions, tripDestinations } from "@/constants/options";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place, setPlace] = useState()
  const [formdata, setFormdata] = useState([])

  const handleInputChange = (name, value) => {
    setFormdata({
      ...formdata,
      [name]:value
    })
  }

  useEffect(() => {
    console.log("The form Data", formdata);
  },[formdata])


  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 mb-5">
      <h2 className="font-semibold text-3xl">Tell us your travel preferences 🏕️🌴</h2>
      <p className="text-gray-500">Let us know your travel preferences so we can tailor the perfect itinerary for your next adventure.</p>

      <div className="mt-10 flex flex-col gap-5">
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Destination?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API}
            selectProps={{
              place,
              onChange: (e) => { setPlace(e); handleInputChange("location", e)},
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning for your Trip?</h2>
          <Input placeholder={"Ex.3"} type="number" onChange={(e) => handleInputChange("Days",e.target.value)} />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
          <div className="grid grid-cols-3 gap-5">
            {budgetOptions.map((item, index) => (
              <div key={index}
              onClick={() => handleInputChange("Budget", item.title)}
               className={`border px-3 py-2 rounded-lg hover:shadow-lg cursor-pointer ${formdata?.Budget == item.title && "border-black shadow-lg"}`}>
                <h2 className="text-3xl py-2">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="line-clamp-2 text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">Who do you plan on travelling with on your next Adventure?</h2>
          <div className="grid grid-cols-3 gap-5">
            {tripDestinations.map((item, index) => (
              <div key={index} 
              onClick={() => handleInputChange("People", item.people)}
              className={`border px-3 py-2 rounded-lg hover:shadow-lg cursor-pointer ${formdata?.People == item.people && "border-black shadow-lg"}`}>
                <h2 className="text-3xl py-2">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="line-clamp-2 text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="mt-5 flex justify-end">
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;