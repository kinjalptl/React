import {useParams} from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';

const EditUser = (props) => {
    const {id} = useParams();
    const urlForApi = `https://reqres.in/api/users/${id}`;
    const {response } = useFetchData(urlForApi);
    return <div>
        <form>
            <div>
                id: <input type='text' value ={response.data.id}></input>
            </div>
            <div>
                First Name: <input type='text' value ={response.data.first_name}></input>
            </div>
            <div>
                Last Name: <input type='text' value ={response.data.last_name}></input>
            </div>
            <div>
                Email: <input type='text' value ={response.data.email}></input>
            </div>
        </form>
    </div>
}
export default EditUser;