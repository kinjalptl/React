import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { React, Component } from "react";
// import ListItem from './compoents/ListItems/ListItems';
import Heading from './compoents/Heading/Heading';
import DataTableContainer from './compoents/DataTable/DataTableContainer/DataTableContainer';
import { Table } from '@mui/material';


class App extends Component {
  // class compnent aka stateful compnents aka smart compnents
  // lifecycle method (only class compnents have life cycle methods)

  constructor(props) {
    super(props);
    this.state = {
      greeting: "Kinjal",
      students: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  updateGreeting() {
    this.setState({
      greeting: "Nav",
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
  componentDidMount() { }

  render() {
    return (

      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Heading />} />
          <Route path="table" element={<Table />} />
        </Routes> */}

        <Heading></Heading>
         {/* <ListItem></ListItem> */}
         <DataTableContainer></DataTableContainer> 
      </div>
    );
  }

}
export default App;
