import React from 'react';
import { connect } from 'dva';

class Second extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h1 style={{textAlign:'center', fontSize:'44px'}}>第二页</h1>
            </div>
        )
    }
}
export default connect()(Second);
