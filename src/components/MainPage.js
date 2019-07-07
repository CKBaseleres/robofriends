import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import "./MainPage.css";

class MainPage extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     // searchField: ''
  //   }
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({robots: users}))
  }

  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value})
  // }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField);
    });
  };

  render() {
    // const { robots } = this.state; //DESTRUCTURING
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      console.log(isPending);
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={this.filterRobots()} />
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;

// export default App;
