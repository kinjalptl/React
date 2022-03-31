// import { React, Component } from 'react'

// class SingleUSer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <div>
//                 <h4>This is Single User page</h4>
//             </div>
//         );
//     }
// }

// export default SingleUSer;
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData"

const SingleUser = (props) => {
  const { id } = useParams();
  const urlForApi = `https://reqres.in/api/users/${id}`;
  const {response } = useFetchData(urlForApi);
  console.log(response);
  return (
    <div>
      <p>id : {response?.data?.id}</p>
      <p>First Name : {response?.data.first_name}</p>
      <p>Last Name : {response?.data.last_name}</p>
      <p>Email : {response?.data.email}</p>
    </div>
  );
};

export default SingleUser;
