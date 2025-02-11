import ItemButton from "@/components/ItemButton";
import { foodList } from "@/list/food";
import Link from "next/link";
import React from "react";

const Food = () => {
  return (
    <div className="">
      <div className="text-center text-3xl">What do you want to eat?</div>

      <div className="grid grid-cols-2 gap-4 mt-20 w-[700px] mx-auto">
        {foodList.map((food, index) => (
          <Link
            href={`${`https://www.google.com/search?q=${food}+food+near+me`}`}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <ItemButton text={food} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Food;
