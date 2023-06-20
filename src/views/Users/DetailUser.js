import React from 'react'; 
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

class DetailUser extends React.Component {
    state = {
        users: {}
    }
    // Hàm nằm trong LifeCycle của React 
    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                users: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    returnList = () => {
        this.props.history.push('/user');
    }

    render(){
        let {users} = this.state;
        let isObjEmpty = Object.keys(users).length === 0;
        return (
            <React.Fragment>
                Người dùng {this.props.match.params.id}
                <br/>

                { isObjEmpty === false && 
                <>
                    <div>Email: {users.first_name}{users.last_name}</div>
                    <div>Người dùng: {users.email}</div>
                    <div>
                        <img src={users.avatar} alt="text"/>
                    </div>
                </>  
                }
                <button onClick={() => this.returnList()}>Quay lại danh sách</button>
            </React.Fragment>
        );
    }
}

export default withRouter(DetailUser);