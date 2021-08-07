import React, {Component} from 'react'
import './navbar.css'

export default class navbar extends Component{
    render(){
        return(
            <div className='component'>
                <div className='navbar-input'>
                    <div className='navbar-border1'>
                        <div className='navbar-border-icons'>
                            <i className='fa fa-search '></i>
                             <input type='text' placeholder='Search for a race, car or racer' className='navbar-input-text1'/>
                        </div>
                    </div>
                    <div className='navbar-border2'>
                        <div className='navbar-border-icons'>
                            <input type='text' placeholder='Choose a car' className='navbar-input-text2'/>
                            <div className='navbar-icons'></div>
                        </div>
                    </div>
                </div>
                <div className='menu-icon-navbar'>
                    <div className='border-radius'></div>
                    <div className='phone'>
                        <i  class="fa fa-phone" ></i>
                    </div>
                    <div className='ucer'>
                        <i  class="fa fa-user"></i>
                    </div>
                </div>
                
            </div>
        )
    }
}
