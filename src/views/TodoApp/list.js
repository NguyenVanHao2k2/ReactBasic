import React from 'react';
import './style.scss';
import { toast } from 'react-toastify';
import Add from './add.js';
// import EditDelete from './editDelete.js';
import Color from '../HOC/color.js';

class ListToDo extends React.Component {

    // Tạo 1 cái state để lưu giá trị dữ liệu
    state = {
        listTodos: [
            { id: `201166`, name: 'Nguyễn Văn Hào' },
            { id: `201167`, name: 'Nguyễn Ngọc Diệp' },
        ],

        editListTD: {}
    }

    // Viết hàm thêm data
    addNewTodo = (todo) => {
        // let curListTodo = this.state.listTodos;
        // curListTodo.push(todo);
        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // listTodos: curListTodo,
        })
        toast("Đã thêm thành công!");
    }

    handleDelete = (todo) => {
        let curToDos = this.state.listTodos;
        curToDos = curToDos.filter(item => item.id !== todo.id)
        toast.info("Đã xóa thành công!");
        this.setState({
            listTodos: curToDos,
        })
    }

    handleEdit = (todo) => {
        let {editListTD, listTodos} = this.state;
        let isEmptyObj = Object.keys(editListTD).length === 0;
        if(isEmptyObj === false && editListTD.id === todo.id){

            let listTodosCopy = [...listTodos]

            let  objIndex =  listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].name = editListTD.name;

            this.setState({
                listTodos: listTodosCopy,
                editListTD: {}
            });
            toast.success("Đã sửa thành công!");
            return;
        }else{
            this.setState({
                editListTD: todo,
            })
        }
    }

    handleEditTodo = (event) => {
        let copyEditTD = {...this.state.editListTD};
        copyEditTD.name = event.target.value;
        this.setState({
            editListTD: copyEditTD
        })
    }

    render() {
        // Khai báo biến để lấy data
        let { listTodos, editListTD } = this.state;
        let isEmptyObj = Object.keys(editListTD).length === 0;
        return (
            <React.Fragment>
                <div className="todo-content">
                    <Add
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-toDo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-Child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span className="css-content">{item.id + 1} = {item.name}</span>
                                            :
                                            <React.Fragment>
                                                {editListTD.id === item.id ?
                                                    <span>
                                                        {item.id + 1} - <input value={editListTD.name}
                                                            onChange={((event) => this.handleEditTodo(event))}
                                                        />
                                                    </span>
                                                    :
                                                    <span className="css-content">{item.id + 1} = {item.name}</span>
                                                }
                                            </React.Fragment>
                                        }
                                        <button className="css-btn css-info edit-btn" onClick={() => this.handleEdit(item)} >
                                            { isEmptyObj === false && editListTD.id === item.id ? 'Lưu' : 'Sửa' }
                                        </button>
                                        <button className="css-btn css-danger delete-btn"
                                            onClick={() => this.handleDelete(item)}
                                        >Xóa</button>
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

export default Color(ListToDo);