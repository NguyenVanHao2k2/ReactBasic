import React from 'react';

class Display extends React.Component {
    state = {
        show: false,
    }

    // Hàm show phần tử
    showHide = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        let { show } = this.state;
        let check = show === true ? 'show = true' : 'show = false';
        return (
            <React.Fragment>
                {show === false ? <div onClick={() => this.showHide()}>Hiện</div>
                    :
                    <React.Fragment>
                        <ul>
                            <li>Nguyễn Văn Hào</li>
                            <li>201166</li>
                            <li>DH20TIN02</li>
                        </ul>
                        <div onClick={() => this.showHide()}>Ẩn</div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default Display;