import React from 'react';
import './style.scss';
import {
    // Link, 
    NavLink
  } from "react-router-dom";
class Nav extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div class="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>Trang chủ</NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/info" activeClassName="active">Thông tin</NavLink>
                    <NavLink to="/form" activeClassName="active">Form</NavLink>
                    <NavLink to="/user" activeClassName="active">User</NavLink>

                    {/* <Link  className="active" to="/">Trang chủ</Link>
                    <Link to="/todo">Ứng dụng Todo</Link>
                    <Link to="/info">Thông tin</Link>
                    <Link to="/form">Form</Link> */}

                    {/* <a class="active" href="/">Trang chủ</a>
                    <a href="/todo">Todos</a>
                    <a href="#about">About</a> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Nav;