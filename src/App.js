import React from 'react';
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div className='app-container'>
        <Sidebar />
        <div className='app-main'>
          <Navbar />
        </div>
      </div>
    )
  }
}
export default App;  