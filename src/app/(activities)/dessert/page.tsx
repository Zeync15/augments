import ItemButton from "@/components/ItemButton";
import { dessertList } from "@/list/desserts";
import Link from "next/link";
import React from "react";

const Dessert = () => {
  return (
    <div className="">
      <div className="text-center text-3xl">What are you craving?</div>

      <div className="grid grid-cols-2 gap-4 mt-20 w-[700px] mx-auto">
        {dessertList.map((dessert, index) => (
          <Link
            href={`${`https://www.google.com/search?q=${dessert}+food+near+me`}`}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <ItemButton text={dessert} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dessert;
