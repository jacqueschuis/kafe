import Layout from "../components/HomeLayout";
import Trail from "../components/Trail";

const EducationHome = () => {
  return (
    <Layout>
      <Trail>
        <div className="header mb-24 text-center">
          <h1 className=" text-6xl md:text-9xl font-bold text-red-700 dark:text-red-400">
            Education
          </h1>
          <h2 className="text-orange-600 dark:text-orange-300 text-2xl">/ed</h2>
        </div>
      </Trail>
    </Layout>
  );
};

export default EducationHome;
