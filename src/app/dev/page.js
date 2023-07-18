import Layout from "../components/HomeLayout";
import OriginMap from "../components/OriginMap";

const DevPage = () => {
  return (
    <Layout>
      <div className="header mb-24 text-center">
        <h1 className=" text-6xl md:text-9xl font-bold text-red-700 dark:text-red-400">
          Dev Test
        </h1>
        <h2 className="text-orange-600 dark:text-orange-300 text-2xl">/dev</h2>
      </div>

      <div className="md:w-[500px] h-[250px] md:h-[500px] mb-24">
        <OriginMap />
      </div>
    </Layout>
  );
};

export default DevPage;
