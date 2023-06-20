import React from 'react';
import axios from 'axios';
import './style.scss';
import {withRouter} from 'react-router-dom';
class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount(){
        // C1
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('ádsasad', res);
        //     })

        // C2 phải có từ khóa async
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        });
    }

    // 
    displayDetailUser = (user) => {
        this.props.history.push(`detail-user/${user.id}`)
    }
     

    render(){
        let { listUsers } = this.state;
        return (
            <React.Fragment>
                <div className="list-user-container">
                    <div className="title">
                        Tất cả dánh sách người dùng
                    </div>
                    <div className="list-user-content">
                        { listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                onClick={() => this.displayDetailUser(item)}
                                >
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ListUser);