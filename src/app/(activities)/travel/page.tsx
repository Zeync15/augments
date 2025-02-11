import ItemButton from "@/components/ItemButton";
import { countriesList } from "@/list/countries";
import Link from "next/link";
import React from "react";

const Travel = () => {
  return (
    <div className="">
      <div className="text-center text-3xl">Where do you want to go?</div>

      <div className="grid grid-cols-2 gap-4 mt-20 w-[700px] mx-auto">
        {countriesList.map((country, index) => (
          <Link
            href={`${`https://www.google.com/travel/flights?q=Flights%20to%20${country}%20from%20Kuala%20Lumpur/%202%20seats`}`}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <ItemButton text={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Travel;

// google flights url parameters
// https://stackoverflow.com/questions/68959917/how-can-i-decode-recreate-google-flights-search-urls