import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { RightLine, LeftLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
          <img
            src={smallSphere}
            className="relative z-1 pointer-events-none"
            width={255}
            height={255}
            alt="smallSphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          title="Pay once, use forever"
          tag="GET STARTED WITH BRAINWAVE"
        />

        <div className="relative ">
          <PricingList />
          <RightLine />
          <LeftLine />
        </div>

        <div className=" flex justify-center mt-10 ">
          <a
            href="#pricing"
            className="font-code text-xs font-bold tracking-wider border-b"
          >
            SEE THE FULL DETAILS
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
