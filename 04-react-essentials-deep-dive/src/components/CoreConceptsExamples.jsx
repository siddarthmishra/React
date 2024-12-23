import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function CoreConceptsExmples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  function handleSelectComponents() {
    handleSelect("components");
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Example" id="examples">
      <Tabs
        // ButtonsContainer="menu" // default is menu
        // ButtonsContainer="div"
        // ButtonsContainer="ul"
        // ButtonsContainer="li"
        // ButtonsContainer={Section}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={handleSelectComponents}
            >
              Components
            </TabButton>
            {/** Convert  to arrow function for the rest*/}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              States
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
