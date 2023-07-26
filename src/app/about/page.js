import Layout from "../components/HomeLayout";
import Trail from "../components/Trail";

const About = () => {
  return (
    <Layout>
      <Trail>
        <h1 className=" text-6xl md:text-9xl font-bold text-red-700 dark:text-red-400">
          About
        </h1>
        <h2 className="text-orange-600 dark:text-orange-300 text-2xl">
          /about
        </h2>
      </Trail>
    </Layout>
  );
};

export default About;
