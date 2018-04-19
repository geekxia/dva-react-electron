import React from 'react';
import { connect } from 'dva';

import { Button } from 'antd';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    _loginHandle() {
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={this._loginHandle.bind(this)}>Primary</Button>
            </div>
        )        
    }
}

export default connect()(Login);
