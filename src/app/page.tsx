"use client";

import { Header } from "@/components/header";
import { Explain } from "./_components/explain";
import { Introduce } from "./_components/introduce";
import { Features } from "./_components/features";
import { Story } from "./_components/story";
import { Footer } from "./_components/footer";

import ReactFullpage from "@fullpage/react-fullpage";
export default function Home() {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      scrollingSpeed={1000} /* Tốc độ scroll */
      render={() => (
        <ReactFullpage.Wrapper>
          <Header />
          <div className="section">
            <Introduce />
          </div>
          <div className="section">
            <Explain />
          </div>
          <div className="section">
            <Features />
          </div>
          <div className="section">
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
