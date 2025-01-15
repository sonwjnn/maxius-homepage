import { FeaturesSection } from "@/components/features-section";

export const Features = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center bg-blue-banner text-white">
      <div className="flex flex-col md:flex-row h-screen w-[70%] mx-auto pt-[150px] md:pt-0">
        <FeaturesSection title="Product" effectDirection="top">
          <>
            <p>
              <span className="text-orange-500">High-Performance Server</span>{" "}
              with an extensive selection of serviceable capabilities
            </p>
            <p>
              Building <span className="text-orange-500">IDC</span>,
              incorporating the latest{" "}
              <span className="text-orange-500">Storage</span> technology
              applicable to various I/O devices
            </p>
            <p>
              Various{" "}
              <span className="text-orange-500">Blockchain Solutions</span>,
              including IPFS.
            </p>
            <p className="mt-8">
              Maxius will continue to develop as a company in the global market
              by supplying a variety of products and solutions.
            </p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Technology" effectDirection="bottom">
          <>
            <p>Based on more than 20 years of research know-how</p>
            <p>and technology, we are the only company in Korea</p>
            <p>
              that makes HPC servers{" "}
              <span className="text-orange-500">
                using self-developed system
              </span>
            </p>
            <p>
              semiconductors and{" "}
              <span className="text-orange-500">
                provides solutions specialized
              </span>
            </p>
            <p>
              in{" "}
              <span className="text-orange-500">
                the intelligent data center
              </span>{" "}
              in the IT industry.
            </p>
            <p className="mt-8">
              With our services, Maxius strives to supply differentiated
              products and solutions.
            </p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Application" effectDirection="top">
          <>
            <p>Maxius&apos; miscellaneous products are used for</p>
            <p>
              <span className="text-orange-500">AI/genetic analysis</span>,
            </p>
            <p>
              <span className="text-orange-500">
                edge computing, IDC centers
              </span>
              , as well as various solutions
            </p>
            <p>
              used for vast{" "}
              <span className="text-orange-500">
                data analysis, distributed
              </span>
            </p>
            <p>
              <span className="text-orange-500">
                processing functions and IPFS IDC
              </span>
              , etc.
            </p>
            <p className="mt-8">
              Maxius will supply serviceable products and solutions to varying
              fields through R&D and communication.
            </p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Blockchain" effectDirection="bottom">
          <>
            <p>
              <span className="text-orange-500">storage and service</span>{" "}
              utilized in Metaverse
            </p>
            <p>
              <span className="text-orange-500">
                IPFS Storage and Application Services
              </span>{" "}
              in Web3.0
            </p>
            <p className="mt-8">
              Maxius provides both H/W and S/W, which are optimized for
              decentralized storage to match customer needs and create the best
              added value.
            </p>
          </>
        </FeaturesSection>
      </div>
    </div>
  );
};
