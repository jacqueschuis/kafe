import Layout from "../components/HomeLayout";
import Link from "next/link";
import Trail from "../components/Trail";

const SourceList = () => {
  return (
    <Layout>
      <Trail>
        <div className="header text-center mb-24">
          <h1 className="text-5xl md:text-9xl font-bold text-red-700 dark:text-red-400">
            Source List
          </h1>
          <h2 className="text-orange-600 dark:text-orange-300 text-2xl">
            /sources
          </h2>
        </div>

        <p className="mb-5 text-orange-800 dark:text-orange-400">
          information on
          <Link href="/">
            <span className="font-bold"> kafe </span>
          </Link>
          taken from the following sources:
        </p>

        <ul className="flex flex-col gap-6 text-orange-800 dark:text-orange-400">
          <Trail>
            <li>
              <a
                href="https://www.baristahustle.com/knowledgebase-archive/"
                className="hover:underline underline-offset-4 transition-all"
              >
                Barista Hustle
              </a>
            </li>
            <li>
              <a
                href="https://pullandpourcoffee.com/category/learn/"
                className="hover:underline underline-offset-4 transition-all"
              >
                Pull & Pour
              </a>
            </li>
            <li>
              <a
                href="https://www.baristahustle.com/app-archive-main/the-coffee-compass/"
                className="hover:underline underline-offset-4 transition-all"
              >
                Barista Hustle - Coffee Compass
              </a>
            </li>
            <li>
              <a
                href="https://sprudge.com"
                className="hover:underline underline-offset-4 transition-all"
              >
                Sprudge
              </a>
            </li>
            <li>
              <a
                href="https://www.jameshoffmann.co.uk/"
                className="hover:underline underline-offset-4 transition-all"
              >
                James Hoffmann
              </a>
            </li>
          </Trail>
        </ul>
      </Trail>
    </Layout>
  );
};

export default SourceList;
