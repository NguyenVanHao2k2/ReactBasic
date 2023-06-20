import React from 'react';
import logo from './logo.svg';
import './App.scss'; // Ngang cấp thì như vậy để link
import Color from './HOC/color.js';
// import { withRouter } from 'react-router'; 
import imgTest from '../assets/images/gai01.jpg';
import { connect } from 'react-redux';
class Home extends React.Component {

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.history.push('/todo');
        // }, 2000)
    }

    deleteUser = (user) => {
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    addUser = () => {
        this.props.addUserRedux();
    }

    render (){
        let listUsers = this.props.dataRedux;

        return(
            <React.Fragment>
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                Nguyễn Văn Hào
                <br/>
                <img src={imgTest} className="App-logo css-logo-gai" alt="imgTest" />
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={() => this.deleteUser(item)}>x</span>
                                </div>
                            )
                        })                    
                    }
                    <br/>
                    <button onClick={() => this.addUser()}>Thêm người dùng</button>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({  type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));