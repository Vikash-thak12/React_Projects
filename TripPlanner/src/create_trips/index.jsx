import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";  

const CreateTrip = () => {
  const [place, setPlace] = useState()
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-semibold text-3xl">Tell us your travel preferences</h2>
      <p>Just provide some of the basic information..</p>

      <div className="mt-10">
        <div>
            <h2 className="text-xl my-3 font-medium">What is Your Destination?</h2>
            <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API}
            selectProps={{
              place, 
              onChange: (e) => {setPlace(e); console.log(e);
              }
            }}
             />
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;