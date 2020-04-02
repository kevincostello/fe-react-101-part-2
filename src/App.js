import React from "react";
import "./App.css";
import Header from "./components/Header";
import PuppyList from "./components/PuppyList";

// state - storing data that might change.

class App extends React.Component {
  state = {
    selectedPup: "Betty",
    puppies: [
      {
        name: "Betty",
        img:
          "https://cdn1-www.dogtime.com/assets/uploads/2020/01/golden-retriever-corgi-mixed-dog-breed-pictures-1.jpg",
        cuteness: 1
      },
      {
        name: "Rebel",
        img:
          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232417/Greyhound-MP.jpg",
        cuteness: 3
      },
      {
        name: "Poppy",
        img:
          "https://i.pinimg.com/originals/45/9d/7b/459d7b249bd4c478c365569ebb5e92ab.jpg",
        cuteness: 2
      }
    ],
    isSorted: false
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p>Puppy of the week is: {this.state.selectedPup}</p>
        <button onClick={this.sortPupsByCuteness}>Sort pups by cuteness</button>
        <PuppyList
          puppies={this.state.puppies}
          selectedPup={this.state.selectedPup}
          updateSelectedPup={this.updateSelectedPup}
          removePup={this.removePup}
        />
      </div>
    );
  }

  updateSelectedPup = newPup => {
    this.setState({ selectedPup: newPup });
  };

  sortPupsByCuteness = () => {
    this.setState(currentState => {
      const pups = [...currentState.puppies];
      pups.sort(function(a, b) {
        return currentState.isSorted
          ? a.cuteness - b.cuteness
          : b.cuteness - a.cuteness;
      });
      return { puppies: pups, isSorted: !currentState.isSorted };
    });
  };

  removePup = pupToRemove => {
    this.setState(currentState => {
      const filteredPups = currentState.puppies.filter(pup => {
        return pup.name !== pupToRemove;
      });
      return { puppies: filteredPups };
    });
  };
}

export default App;

/*
  handleClick = () => {
    this.setState(currentState => {
      return { showImages: !currentState.showImages };
    });
  };
*/
