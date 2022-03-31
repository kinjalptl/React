// import { React, Component } from "react";
// import Useritem from './Useritem/Useritem';

// class UserData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             candidates: [],
            
//         };
//         this.handleDelete = this.handleDelete.bind(this);
//     }

//     componentDidMount() {
//         fetch("https://reqres.in/api/users")
//             .then((resp) => resp.json())
//             .then((resp) => {
//                 if (resp?.data) {
//                     this.updateCandidates(resp.data);
//                 }
//                 console.log(resp)

//             });
//     }

//     updateCandidates(newCandidates) {
//         this.setState({
//             candidates: newCandidates,
//         });
//     }

//     handleDelete(index) {
//         let newCandidates = this.state.candidates;
//         newCandidates.splice(index, 1);
//         this.updateCandidates(newCandidates);
//     }
//     render() {
//         return (
//             <div>
//                 <h2>User List</h2>
//                 <Useritem items={this.state.candidates}
//                     handleDeleteRow={this.handleDelete}></Useritem>
//             </div>
//         )
//     }
// }

// export default UserData;
import { React, Component } from "react";
import DataTableItems from "../Userdata/Useritem/Useritem";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      studetns: [
        {
          id: 200,
          first_name: "Heitinder",
          last_name: "Singh",
          email: "Heitinder.singh@gmail.com",
          avatar:
            "data:image/jpeg;base64,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",
        },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp?.data) {
          this.updateCandidates(resp.data);
        }
      });
  }

  updateCandidates(newCandidates) {
    this.setState({
      candidates: newCandidates,
    });
  }

  handleDelete(index) {
    let newCandidates = this.state.candidates;
    newCandidates.splice(index, 1);
    this.updateCandidates(newCandidates);
  }

  handleEdit(index) {
   
  }

  render() {
    return (
      <div>
        <DataTableItems
          items={this.state.candidates}
          handleDeleteRow={this.handleDelete}
          handleEditUser={this.handleEdit}
        ></DataTableItems>
      </div>
    );
  }
}

export default UserData;