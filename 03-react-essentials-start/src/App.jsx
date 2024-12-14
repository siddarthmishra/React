import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";

function App() {
  return (
    <div>
      {/** The tag name should be same as the name of the function */}
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} /> {/** Using Spread Operator */}
            <CoreConcept {...CORE_CONCEPTS[2]} /> {/** Using Spread Operator */}
            <CoreConcept {...CORE_CONCEPTS[3]} /> {/** Using Spread Operator */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
