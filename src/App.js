import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    clickedFriendsIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedFriendsIds = this.state.clickedFriendsIds;

    if(clickedFriendsIds.includes(id)){
      this.setState({ clickedFriendsIds: [], score: 0, status:  "You Guessed incorrectly!" });
      return;
    }else{
      clickedFriendsIds.push(id)

      if(clickedFriendsIds.length === 8){
        this.setState({score: 8, status: "You guessed correctly", clickedFriendsIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ friends, clickedFriendsIds, score: clickedFriendsIds.length, status: " " });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
          </p>
        </header>
        <Score total={this.state.score}
        goal={8}
        status={this.state.status}
        />
    <Wrapper>
            {this.state.friends.map(friend => (
    <Card
        shuffleScoreCard={this.shuffleScoreCard}
        id={friend.id}
        key={friend.id}
        image={friend.image}
        />
          ))}
    </Wrapper>
    </div>
    );
  }
}

export default App;
