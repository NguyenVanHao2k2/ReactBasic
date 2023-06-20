import React from 'react';
import { toast } from 'react-toastify';

class Add extends React.Component {
    state = {
        id: '',
        name: ''
    }
    // Khai bào hàm thêm
    handleAddNew = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    // bắt sự kiện thêm
    handleListTodo = () => {
        if (!this.state.name) {
            toast.error("Bạn chưa nhập dữ liệu!");
        } else {

            let todo = {
                id: Math.floor(Math.random() * 1001),
                name: this.state.name
            }

            this.props.addNewTodo(todo)
            this.setState({
                name: '',
            })
        }
    }
    render() {
        let { name } = this.state;
        return (
            <React.Fragment>
                <div className="add-toDo">
                    <input className="css-input" placeholder="Nhập data vào..." value={name}
                        onChange={(event) => this.handleAddNew(event)}
                        type="text" />
                    <button className="css-send add-data" onClick={() => this.handleListTodo()} type="button">Gởi</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Add;