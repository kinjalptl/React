import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { React, Component } from "react";
// import ListItem from './compoents/ListItems/ListItems';
import Heading from './compoents/Heading/Heading';
import DataTableContainer from './compoents/DataTable/DataTableContainer/DataTableContainer';
import SingleUser from './compoents/SingleUser/SingleUser';


class App extends Component {

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
  componentDidMount() { }

  render() {
    return (
      < BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Heading</Link>
            </li>
            <li>
              <Link to="/DataTableContainer">Tabels</Link>
            </li>
            <li>
              <Link to="/SingleUser">SingleUser</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Heading />} />
            <Route path='DataTableContainer'  element={<DataTableContainer/>}  />
            <Route path='SingleUser'  element={<SingleUser/>}  />

          </Routes>

          {/* <Heading></Heading>
        <DataTableContainer></DataTableContainer> */}
        </div>
      </BrowserRouter>
    );
  }

}
export default App;
