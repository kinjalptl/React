// function Home() {
//   //   return (
//   //     <div>
//   //       <h1>Welcome to React Application</h1>
//   //     </div>
//   //   );
//   // }
//   export default Home;

import { React, Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: "kinjal",
      students: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  updateGreeting() {
    this.setState({
      greeting: "Patel",
    });
  }

  setStudents(newValue) {
    this.setState({
      students: [...this.state.students, newValue],
      // students: this.state.students.concat(newValue)
    });
  }

  addStudents() {
    const newItem = document.getElementById("addItem").value;
    this.setStudents(newItem);
    document.getElementById("addItem").value = "";
  }

  handleDelete(index) {
    let newStudents = this.state.students;
    newStudents.splice(index, 1);
    this.setState({
      students: newStudents,
    });
  }

  componentDidMount() {}

  render() {
    return <h3> Welcome to React Application </h3>;
  }
}

export default Home;