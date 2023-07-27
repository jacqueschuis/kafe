"use client";

import { useState } from "react";
import { useSpring } from "@react-spring/web";

import Footnote from "../components/Footnote";
import Layout from "../components/HomeLayout";
import OriginMap from "../components/OriginMap";
import Trail from "../components/Trail";
import Calculator from "../components/Calculator";

const DevPage = () => {
  const [showSources, setShowSources] = useState(false);

  const sources = [
    {
      number: 1,
      author: "Jack Goode",
      title: "How to Code",
      link: "https://j-par.com",
    },
    {
      number: 2,
      author: "Jack Goode",
      title: "Test Source",
      link: "https://j-par.com",
    },
  ];

  const brewInfo = {
    method: "V60",
    materials: ["Beans", "V60 Brewer", "Grinder", "Scale", "Gooseneck Kettle"],
  };

  const [expand, expandApi] = useSpring(() => ({
    y: showSources ? 0 : 150,
    overflow: "hidden",
  }));

  const sourceClick = () => {
    expandApi.start({
      y: showSources ? 150 : 0,
    });
    setShowSources(!showSources);
  };

  return (
    <Layout>
      <Trail>
        <div className="header mb-24 text-center">
          <h1 className=" text-6xl md:text-9xl font-bold text-red-700 dark:text-red-400">
            Dev Test
          </h1>
          <h2 className="text-orange-600 dark:text-orange-300 text-2xl">
            /dev
          </h2>
        </div>

        <div className="w-full max-w-[700px] flex justify-center items-center mb-10 px-10">
          <OriginMap />
        </div>

        <div className="w-full mb-10 px-10">
          <h2 className="font-bold text-5xl text-orange-600 dark:text-orange-300 text-center">
            Footnote Test
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <sup
              className="cursor-pointer font-bold text-red-500 dark:text-red-300"
              onClick={sourceClick}
            >
              1
            </sup>{" "}
            Adipisci veritatis in optio aliquid voluptas minus molestiae
            provident itaque laborum voluptatem nesciunt beatae, numquam dicta
            vitae reiciendis deleniti eius et temporibus.
            <sup
              className="cursor-pointer font-bold text-red-500 dark:text-red-300"
              onClick={sourceClick}
            >
              2
            </sup>
          </p>
        </div>
        <div className="w-full mb-10 px-10">
          <Calculator {...brewInfo} />
        </div>
      </Trail>
      <Footnote sources={sources} expand={expand} sourceClick={sourceClick} />
    </Layout>
  );
};

export default DevPage;
