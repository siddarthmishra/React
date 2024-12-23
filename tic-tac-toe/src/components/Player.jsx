import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let playerNameSpan = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameSpan = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  /** The event (can be any name) is an object emitted by the onChange event. We get this event automatically.
   * Here, the event is every key stroke.
   * */
  function handleChange(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }
  function handleEditClick() {
    /** In React, if your new state depends on your previous state value, you should NOT update
     * the state like this "setIsEditing(!isEditing);"
     *
     * Instead, pass a function to your state updating function. This function will be automatically
     * called by React and it will automatically get the current state value.
     * Here, the parameter could be anything. This value is set dynamically and passed as a value
     * by React when it calls the function.
     * Once the function is passed to setIsEditing, then setIsEditing returns the new state as per
     * the logic provided in the passed function.
     *
     * The problem with this "setIsEditing(!isEditing);" approach is that, the state update are not
     * performed instantly but at some point in the future (when React has time for it). Now, the future
     * will probably be in one or two milliseconds. It is fast but not instant. This is important.
     * It is important to understand that React behaves this way. Let us see below behaviour.
     * Line 1 - setIsEditing(!isEditing); // true (to be scheduled. Hence, no instant change in value)
     * Line 2 - setIsEditing(!isEditing); // false (to be scheduled. Hence, no instant change in value)
     * Let's assume initial value is false. Then on Line 1, we expect it to set the new state to "true"
     * and again Line 2, we expect to set it back to "false". So, based on this logical assumption,
     * we expect to have NO reaction on click of the button. But, this does not happen. The behaviour
     * will be same even without Line 2 i.e. just keeping Line 1.
     *
     * Now, if we replace Line 1 and Line 2 with this "setIsEditing((editing) => !editing);" function
     * approach, then on click of button, no reaction is observed. So, in function approach, the React
     * gets the latest value. After Line 1, the state is updated and in Line 2, the React again gets
     * the new state. Hence, it nullifies the effect.
     *
     * So, it is best practice to use the function approach.
     */
    setIsEditing((editing) => !editing);
    console.log("isEditing - " + isEditing);
    if (isEditing) {
      // This condition will be satisfied on click of save
      console.log("Inside handleEditClick - Invoking onChangeName");
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
