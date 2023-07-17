import Layout from "../components/HomeLayout";
import Link from "next/link";

const HomePage = () => {
  return (
    <Layout>
      <h1 className=" text-brown-900 dark:text-brown-100 font-bold text-9xl">
        kafe
      </h1>
      <h2 className="text-orange-600 dark:text-orange-300 text-2xl">/home</h2>

      <ul>
        <li>
          <Link href="/ed">Education</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default HomePage;
