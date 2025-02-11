import ItemButton from "@/components/ItemButton";
import {randomList} from "@/list/random";
import Link from "next/link";
import React from "react";

const Random = () => {
  return (
    <div className="">
      <div className="text-center text-3xl">What do you want to do?</div>

      <div className="grid grid-cols-2 gap-4 mt-20 w-[700px] mx-auto">
        {randomList.map((random, index) => (
          <Link
            href={`${`https://www.google.com/search?q=${random}+near+me`}`}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <ItemButton text={random} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Random;
