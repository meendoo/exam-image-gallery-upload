import React, { Component } from 'react';
import styles from './App.module.scss';
import Gallery from './modules/gallery'
import MediaUploadBox from "./modules/mediaUploadBox";


class App extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <h1>Gallery App</h1>
        </header>
        <main>
          <Gallery />
        </main>
        <MediaUploadBox />
      </>
    );
  }
}

export default App;
