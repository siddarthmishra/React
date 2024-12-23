/** Every custom component receives a prop even if you are not setting any attributes.
 * The React will automatically gives you such a prop object. It will just be an object that is empty.
 * But actually, the prop object will not be empty. There is one prop which you will always get.
 * It is the special built-in "children" prop. This is a prop set by React and not by using any attribute
 * like <TabButton children=>. Instead, this "children" prop simply refers to any content between your
 * component text like "<TabButton>Components</TabButton>".
 * It could also be some complex JSX (Javascript Syntax eXtension) like below.
 * "<TabButton> <div>  <h2></h2>  </div> </TabButton>".
 *
 * We can also use Destructuring concept to get "children" out from prop.
 */
function TabButton({ children, isSelected, ...additionalProps }) {
  console.log("TabButton Component is loaded");
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        {...additionalProps}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
