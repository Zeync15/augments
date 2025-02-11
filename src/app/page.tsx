import MessageAudioButton from "@/components/MessageAudioButton";
import clsx from "clsx";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div
        className={clsx(
          dancingScript.className,
          "bg-letter w-[500px] h-[600px] items-center p-8 text-3xl text-center"
        )}
      >
        <div className="mt-8">Hello my beloved girl friend.</div>
        <div className="mt-8">Happy Birthday</div>
        <div className="mt-8">and</div>
        <div className="mt-8">Happy 5 Year Anniversary</div>
        <div className="mt-8">Will you be my Valentine?</div>

        <div className="mt-8 flex gap-20 justify-center">
          <Link href="/yes" className="">
            Yes
          </Link>
          <Link href="/no" className="">
            No
          </Link>
        </div>

        <div className="mt-8">- Ze Yen</div>
      </div>

      <div className="mt-8">
        <MessageAudioButton />
      </div>
    </div>
  );
};

export default page;
