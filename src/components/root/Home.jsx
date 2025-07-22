import { useState } from "react";
import Accordion from "./components/Accordion";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="">
      <Accordion
        title="Para 1"
        isActive={activeIndex == 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        doloremque!
      </Accordion>
      <Accordion
        title="Para 2"
        isActive={activeIndex == 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Para2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis, doloremque!
      </Accordion>
    </div>
  );
}
