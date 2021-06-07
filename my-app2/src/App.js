import React from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';



class App extends React.Component {
  render() {
    return (<
            div className='home' >
      <
        Header />
      <
        Main />
      <
        Footer />
      <
            /div>
        )
    }
}

export default App;