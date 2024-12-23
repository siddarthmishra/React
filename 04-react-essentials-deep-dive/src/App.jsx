import Header from "./components/Header/Header.jsx";
import { Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import CoreConceptsExmples from "./components/CoreConceptsExamples.jsx";

function App() {
  console.log("App Component is loaded");

  /** In the below return statement, a <div> tag is returned which includes a <Header> tag and
   * a <main> tag. Here, we are returning an additional tag <div>. But if we delete this tag, we will
   * get error. This error is because, we can not return multiple values from a function (in any
   * language as well). If we remove the <div> tag then we are returning two tags i.e. <Header> and <main>.
   *
   * So, to return a single value from a function, the <div> tag or any other tag can used as a wrapper.
   * But sometimes, this additional wrapper tag may not be required and when we use this wrapper, we end up
   * with an extra <div> in the DOM structure. We can find this by dev tools on the browser. This may NOT be
   * a huge problem but extra tag in the DOM is unnecessary.
   *
   * To avoid this, React gives you a special component called "Fragment" from "react".
   * Instead of using a wrapper, we can use this "Fragment" and there will be no unnecessary tag in the DOM.
   *
   * Alternatively, we can simply use empty opening "<>" and closing tag "</>". This is in the modern React.*/
  return (
    // Empty opening tag
    <>
      {/** <Fragment> */}
      {/** <div> */}
      <Header />
      <main>
        <CoreConcepts />
        <CoreConceptsExmples />
      </main>
      {/** </div> */}
      {/** </Fragment> */}
    </> // Empty closing tag
  );
}

export default App;
