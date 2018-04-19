import React from 'react';
import { connect } from 'dva';
import styles from './welcome.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>欢迎进入ERP工厂端</h1>
      <div className={styles.welcome} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
