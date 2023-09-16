import Like from "@/components/Like";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface Props {
  link: string;
  url: string;
  id: string;
  title: string;
  subtitle: string;
  text: string;
}

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

const Card = (props: Props) => {
  const { url, link, title, subtitle, text, id } = props;
  return (
    <Link
      href={link}
      className="bg-indigo-200 min-h-[300px] w-[280px] p-6 rounded-xl text-indigo-900 border-indigo-300 relative z-0"
    >
      <p
        className={`${russo.className} absolute top-5 text-lg 
        font-bold italic opacity-70 tracking-[.4rem]`}
      >
        {id}
      </p>

      <Image
        src={url}
        alt="final space logo"
        width={180}
        height={180}
        placeholder="blur"
        quality={90}
        blurDataURL={url}
        className="pos shape rounded-lg mb-4 h-40 w-30 w-full object-cover"
      />
      <div className="flex flex-col gap-[0.4rem]">
        <h2
          className={`${russo.className} tracking-widest font-medium text-lg truncate`}
        >
          {title}
        </h2>
        <p className="font-normal truncate opacity-70">{subtitle}</p>
        {text && <p className="font-light opacity-70">{text}</p>}
      </div>

      <div className="z-20 absolute right-6 bottom-6">
        <Like />
      </div>
    </Link>
  );
};

export default Card;
