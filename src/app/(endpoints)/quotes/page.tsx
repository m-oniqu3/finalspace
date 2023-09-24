import StaticLayout from "@/components/layouts/StaticLayout";
import { Quote } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

const Quotes = async () => {
  const quotes = await fetchData<Quote>("quote");

  // group quotes by the given property
  function groupQuotesBy<K extends keyof Quote>(property: K) {
    const map = new Map<Quote[K], Quote[]>();

    quotes.forEach((quote) => {
      const key = quote[property];

      if (!map.has(key)) {
        map.set(key, [quote]);
      } else map.get(key)?.push(quote);
    });

    return map;
  }

  const quotedsGroupedByCharacter = groupQuotesBy("by");
  const keys = Array.from(quotedsGroupedByCharacter.keys());

  const renderQuotes = keys.map((key) => {
    const data = quotedsGroupedByCharacter.get(key) || [];

    const imageSrc = data[0].image;
    const characterID = data[0].character.split("/").pop();
    const paddedCharacterID = String(characterID).padStart(3, "0");

    return (
      <article key={key} className=" flex flex-col gap-6 mb-8 pb-8">
        <Link href={`/characters/${characterID}`}>
          <div className="bg-indigo-200 min-h-[300px] w-[280px] mx-auto p-6 rounded-xl text-indigo-900 border-indigo-300 relative z-0">
            <p
              className={`${russo.className} absolute top-5 text-lg font-bold italic opacity-70 tracking-[.4rem]`}
            >
              C #{paddedCharacterID}
            </p>
            <Image
              src={imageSrc}
              width={180}
              height={180}
              alt={key}
              className="pos shape rounded-lg mb-4 h-40 w-30 w-full object-cover"
            />

            <div className="flex flex-col gap-[0.4rem]">
              <h2
                className={`${russo.className} tracking-widest font-medium text-lg truncate`}
              >
                {key}
              </h2>
              <p className="font-normal truncate opacity-70">
                Quotes: {data.length}
              </p>
            </div>
          </div>
        </Link>

        <ul className="grid grid-cols-1 gap-8 ">
          {data.map((quote) => (
            <li
              className="rounded-md p-3 w-[280px] mx-auto border-[1px] border-indigo-200 text-center"
              key={quote.quote}
            >
              {quote.quote}
            </li>
          ))}
        </ul>
      </article>
    );
  });

  return (
    <StaticLayout>
      <section className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-16 lg:justify-around">
        {renderQuotes}
      </section>
    </StaticLayout>
  );
};

export default Quotes;
