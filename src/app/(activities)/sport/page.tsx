import ItemButton from "@/components/ItemButton";
import { sportList } from "@/list/sports";
import Link from "next/link";
import React from "react";

const Sport = () => {
  return (
    <div className="">
      <div className="text-center text-3xl">What do you want to do?</div>

      <div className="grid grid-cols-2 gap-4 mt-20 w-[700px] mx-auto">
        {sportList.map((sport, index) => (
          <Link
            href={`${`https://www.google.com/search?q=${sport}+near+me`}`}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <ItemButton text={sport} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sport;
