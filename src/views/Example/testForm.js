import React from 'react';

class FormT extends React.Component {
    // Code handle JS
    // Khai báo state để lưu giá trị cho hai ô input
    state = {
        info: [
            // {
            //     hoten: '',
            //     tuoi: '',
            //     lop: '',
            // }
        ]
    }
    // Hàm xử lý nhận giá trị vào
    Handle1From = (event) => {
        this.setState({
            hoten: event.target.value
        })
    }
    Handle2From = (event) => {
        this.setState({
            tuoi: event.target.value
        })
    }
    Handle3From = (event) => {
        this.setState({
            lop: event.target.value
        })
    }
    sendData = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    addInfo = (event) => {
        this.setState({
            info: this.state.info.push(event)
        })
    }

    // Code handel Display HTML
    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="fname">tên sinh viên:</label>
                    <br />
                    <input onChange={(event) => this.Handle1From(event)} type="text" value={this.state.hoten} placeholder="Nhập dữ liệu vào..." />
                    <br />
                    <label htmlFor="lname">Mã số sinh viên:</label>
                    <br />
                    <input onChange={(event) => this.Handle2From(event)} type="text" value={this.state.tuoi} placeholder="Nhập dữ liệu vào..." />
                    <br />
                    <label htmlFor="lname">Lớp:</label>
                    <br />
                    <input onChange={(event) => this.Handle3From(event)} type="text" value={this.state.lop} placeholder="Nhập dữ liệu vào..." />
                    <br />
                    <input type="submit" value="Gởi" onClick={(event) => this.addInfo(event)} />
                </form >
            </React.Fragment >
        )
    }
}

export default FormT;