import Link from "next/link";
import { ReactNode } from "react";

interface AugmentProps {
  nav: string;
  icon: ReactNode;
  title: string;
  description: string;
  subDescription: string;
}

const Augment = ({
  nav,
  icon,
  title,
  description,
  subDescription,
}: AugmentProps) => {
  return (
    <Link
      href={`${nav}`}
      className="border-4 rounded-2xl border-black w-[300px] h-[500px] relative"
    >
      <div className="mt-4 flex justify-center">{icon}</div>

      <div className="text-center text-2xl">{title}</div>

      <div className="flex justify-center items-center gap-2">
        <div className="h-0.5 bg-black w-full ml-4"></div>
        <div className="">&#9670;</div>
        <div className="h-0.5 bg-black w-full mr-4"></div>
      </div>

      <div className="text-center mt-4  mx-6 text-xl">{description}</div>

      <div className="text-center mx-4 mb-4 text-sm absolute bottom-0 left-0 right-0">
        {subDescription}
      </div>
    </Link>
  );
};

export default Augment;
