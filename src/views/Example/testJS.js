import React from 'react';

// phải có một thằng bao quanh các mã html trong return render 
class TestJS extends React.Component {
    state = {
        name: 'Nguyễn Văn Hào',
        age: '22',
    }
    handleE = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    alertTBN = () => {
        alert('Cam on ban da click!')
    }

    render() {
        // let name = "Nguyễn Ngọc Diệp";
        return (
            /**
             * Có 3 cách để bao quanh 
             * 1 là cho một thẻ bất kỳ để bao quanh các đối tượng html
             * 2 là use thẻ <React.Fragment></React.Fragment>
             * 3 là use <></>
             */
            <React.Fragment>
                <input type="text" onChange={(event) => this.handleE(event)} value={this.state.name} />
                <div>Tên của bạn là: {this.state.name}</div>
                <br />
                <button onClick={() => this.alertTBN()} className="c-l-me">Click me</button>
            </React.Fragment>
        )
    }
}

export default TestJS; // Xuất ra một file test
// export {} test; // Khi trong class này có nhiều đối tượng class cần xuất thì we sẽ use {}
