"use client";
import Augment from "@/components/Augment";
import NextButton from "@/components/NextButton";
import { useState } from "react";
import {
  PiAirplaneTiltLight,
  PiBowlFoodLight,
  PiCakeLight,
  PiDribbbleLogoLight,
  PiNoteLight,
  PiQuestionLight,
} from "react-icons/pi";

const Todo = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  return (
    <div>
      <div className="text-center text-3xl">What do you want to do?</div>

      <div className="flex gap-20 justify-center items-center mt-20">
        <div className="flex flex-col items-center gap-4">
          {show1 ? (
            <Augment
              nav={"/food"}
              icon={<PiBowlFoodLight size={200} />}
              title={"Hunger for Power"}
              description={
                "Consume the nearest food and gain 60% temporary health. Lose focus for the first round."
              }
              subDescription={"Good preparation fuels the body!"}
            />
          ) : (
            <Augment
              nav={"/travel"}
              icon={<PiAirplaneTiltLight size={200} />}
              title={"Call to Adventure"}
              description={
                "Spend 100+ gold for few games. Teleport to a new location."
              }
              subDescription={"Catch flights not feelings."}
            />
          )}

          <div className="" onClick={() => setShow1(false)}>
            <NextButton />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {show2 ? (
            <Augment
              nav={"/dessert"}
              icon={<PiCakeLight size={200} />}
              title={"Caramelized Comforts"}
              description={"Spend 20 gold for 20% attack speed for 2 rounds."}
              subDescription={"A sugar high is great—until it's not."}
            />
          ) : (
            <Augment
              nav={"/random"}
              icon={<PiQuestionLight size={200} />}
              title={"Pandora's Items"}
              description={"???"}
              subDescription={"Random bullshit go."}
            />
          )}
          <div className="" onClick={() => setShow2(false)}>
            <NextButton />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {show3 ? (
            <Augment
              nav={"/sport"}
              icon={<PiDribbbleLogoLight size={200} />}
              title={"Training Arc"}
              description={
                "Permanently gain 10 max health everytime you exercise."
              }
              subDescription={"No pain, no gain."}
            />
          ) : (
            <Augment
              nav={"/"}
              icon={<PiNoteLight size={200} />}
              title={"Forward Thinking"}
              description={"Todo list for the future."}
              subDescription={"Something in the back of your mind."}
            />
          )}

          <div className="" onClick={() => setShow3(false)}>
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
