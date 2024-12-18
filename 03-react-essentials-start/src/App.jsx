import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
  console.log("App Component is loaded");
  /** must be called directly from the component only (any component's main function i.e. "App" in this case)
   * and should be at top level (like not inside if block and nested function).
   * useState() returns an array with exactly two elements.
   * (1) => selectedTopic (can be any name) - 1st is always variable to stores the initial value i.e.
   * "components" or undefined is not passed anything to useState().
   * (2) = > setSelectedTopic (can be any name) - 2nd is always a function provided by react that can be
   * executed to update this stored value (here selectedTopic). When this function is called,
   * the component (and any other child components if present) is re-loaded. And only after re-load,
   * the new state (i.e. selectedTopic) will be available.
   *
   * Here, the point to note is that the child components like "Header", in this case, is also re-loaded
   * which is not required. This re-load of Header can be identified by changing of description on UI on
   * selecting each button. So, we should narrow down the use of useState() to specific components where
   * re-load is really required. This can be achieved by further spliting the main component into various
   * smaller independent component. This will be done in next topic "04-react-essentials-deep-dive".
   * */
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton = "components", "jsx", "props", "state"
    setSelectedTopic(selectedButton);
    /** The below console log still logs the old value because the new value will be returned by
     * setSelectedTopic only after the App component is reloaded.
     * */
    // console.log("Inside handleSelect - " + selectedTopic);
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
    <div>
      {/** The tag name should be same as the name of the function */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/**
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            */}
            {/** Using Spread Operator */}
            {/**
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            */}
            {/** Using map to iterate each array, transform the data to JSX and return the Component.
             * The page works well but the below warning will be logged in the console.
             * "Each child in a list should have a unique "key" prop".
             * To get rid off this error, we need to add "key" prop to our custom component. We will not
             * be using this key prop inside our component. Still, we need to add it because it will be
             * used by the React. The value for key prop should be a value that uniquely identifies a
             * list item. Under the hood, it is used by React to efficiently render and update this list.
             *
             */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/**This way of building components where your components can wrap other components
             * or other content is called Component Composition.
             *
             * We can also follow "Attribute Props" approach used in component <CoreConcept/> to lable the button.
             */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={handleSelectComponents}
            >
              Components
            </TabButton>
            {/** Convert  to arrow function for the rest*/}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          {/**{selectedTopic}*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
