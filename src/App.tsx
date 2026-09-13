import { Suspense } from "react";
import Technologies from "./Components/ Technologies/ Technologies";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import type { TechnologiesType } from "./Type/Type";
import Footer from "./Components/Footer/Footer";

const technologiesData = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = technologiesData();

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
