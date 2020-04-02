import React from "react";

const PuppyList = props => {
  return (
    <ul>
      {props.puppies.map(puppy => {
        return (
          <li key={puppy.name}>
            <p>{puppy.name}</p>
            <p>Cuteness: {puppy.cuteness}</p>

            {props.selectedPup === puppy.name && (
              <img src={puppy.img} alt={`${puppy.name} profile pic`} />
            )}

            <button onClick={() => props.updateSelectedPup(puppy.name)}>
              Make ME the selected pup!
            </button>
            <button onClick={() => props.removePup(puppy.name)}>
              Remove me :(
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PuppyList;
