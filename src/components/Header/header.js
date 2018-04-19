import React from 'react';
import { connect } from 'dva';
import styles from './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    _exitHandle() {
        alert('退出登录');
    }

    render() {
        return(
            <div className={styles.header}>
                <div className={styles.exit} onClick={this._exitHandle.bind(this)}>退出</div>
            </div>
        )
    }
}

export default connect()(Header);
