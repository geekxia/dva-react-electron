import React from 'react';
import {connect} from 'dva';

import Header from './Header/header';
import Sider from './Sider/sider';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(styles)
  }
  render() {
    return (<div className={styles.app}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.sider}>
        <Sider/>
      </div>

      <div className={styles.content}>
        {this.props.children}
      </div>
    </div>)
  }
}
