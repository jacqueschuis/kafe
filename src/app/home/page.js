import Layout from "../components/HomeLayout";
import Link from "next/link";

const HomePage = () => {
  return (
    <Layout>
      <div className="header mb-24 text-center">
        <h1 className=" text-9xl font-bold text-red-700 dark:text-red-400">
          Welcome
        </h1>
        <h2 className="text-orange-600 dark:text-orange-300 text-2xl">/home</h2>
      </div>

      <ul className="list-none text-xl my-10 gap-5 text-center text-orange-800">
        <li className="hover:underline underline-offset-4 transition-all mb-3">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition-all mb-3">
          <Link href="/ed">Education</Link>
        </li>
        <li className="hover:underline underline-offset-4 transition-all mb-3">
          <Link href="/sources">Sources</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default HomePage;
