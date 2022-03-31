import './App.css';
import { React, Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/home';
import UserData from './Component/Userdata/UserData';
import Singleuser from './Component/Userdata/Singleuser/Singleuser'
import EditUser from './Component/Userdata/EditUser/EditUser';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to='/UserData'> User Data </Link>
              </li>
              <li>
                <Link to='/Singleuser'> Single User </Link>
              </li>
              <li>
                <Link to='/EditUser'> Edit User </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/UserData' element={< UserData />} />
            <Route path='/Singleuser/:id' element={<Singleuser/>}/>
            <Route path='/EditUser' element={<EditUser/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
