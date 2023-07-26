"use client";

import { useState } from "react";
import { useSpring } from "@react-spring/web";

import Footnote from "../components/Footnote";
import Layout from "../components/HomeLayout";
import OriginMap from "../components/OriginMap";
import Trail from "../components/Trail";

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
            Lorem
            <sup className="cursor-pointer" onClick={sourceClick}>
              1
            </sup>{" "}
            ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            veritatis in optio aliquid voluptas minus molestiae provident itaque
            laborum voluptatem nesciunt beatae, numquam dicta vitae reiciendis
            deleniti eius et temporibus.
          </p>
        </div>
      </Trail>
      <Footnote sources={sources} expand={expand} sourceClick={sourceClick} />
    </Layout>
  );
};

export default DevPage;
