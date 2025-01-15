"use client";

import { Explain } from "./_components/explain";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Story } from "./_components/story";
import { Footer } from "./_components/footer";
import ReactFullpage from "@fullpage/react-fullpage";
import { useFullpageIndex } from "@/store/use-fullpage-index";

export default function Home() {
  const [index, setIndex] = useFullpageIndex();

  return (
    <ReactFullpage
      credits={{ enabled: false }}
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      scrollingSpeed={500}
      scrollOverflow={true}
      paddingTop="0"
      paddingBottom="0"
      fixedElements=".scrollArea"
      normalScrollElements=".ScrollAreaViewport"
      afterLoad={(_origin, destination) => {
        setIndex(destination.index);
      }}
      render={({}) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <Explain />
          </div>
          <div className="section">
            <Features />
          </div>
          <div className="section fp-auto-height">
            <Story />
          </div>
          <div className="section">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
