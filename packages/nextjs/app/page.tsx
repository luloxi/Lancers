import Explore from "./explore/page";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "BasedShop",
  description: "Built with 🏗 Scaffold-ETH 2",
});

const Home: NextPage = () => {
  return (
    <>
      <Explore />
    </>
  );
};

export default Home;
