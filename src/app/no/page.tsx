import Image from "next/image";
import Link from "next/link";

const no = () => {
  return (
    <div
    className="flex justify-center items-center h-screen flex-col"
    >
      <Image src="/bonk-doge.gif" alt="bonk doge" width={800} height={0} />
      
      <Link href='/' className="mt-8 text-3xl underline underline-offset-[10px] border-red-400">Pick Again</Link>
    </div>
  );
};

export default no;
