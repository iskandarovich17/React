import React, {Component} from 'react'
import './sidebar.css'
import account from './img-input.png'
import logo from './logo.png'

export default class sidebar extends Component{
    render(){
        return(
            <div className='container '>
                <div className='app-logo'>
                    <img src={logo} alt ='logo'></img>
                    <p className='text'>iffee</p>
                </div>
                <div className='app-menu'>
                    <div className='menu'>Menu</div>
                    <div className='menu-item'>
                        <i className='fa fa-home'></i>
                        <p className='menu-text'>Home</p>
                    </div>
                    <div className='menu-item'>
                        <i className='fa fa-bars'></i>
                        <p className='menu-text'>Garage</p></div>
                    <div className='menu-item'>
                        <i className='fa fa-address-card'></i>
                        <p className='menu-text'>Service Menu</p></div>
                    <div className='menu-item'>
                        <i className='fa fa-user'></i>
                        <p className='menu-text'>Racers</p></div>
                    <div className='menu-item'>
                        <i className='fa fa-calculator'></i>
                        <p className='menu-text'>Calculator</p></div>
                      <div className='menu-item'>
                        <i className='fa fa-cog'></i>
                        <p className='menu-text'>Settings</p></div>
                </div>
                <div className='app-checkbox'>
                    <div className='checkbox-menu'>Scheduled Races</div>
                    <div className='checkbox-item'>
                        <div className='border border1'></div>
                        <p className='menu-text'>MotoGP 2022</p>
                    </div>
                    <div className='checkbox-item'>
                        <div className='border border2'></div>
                        <p className='menu-text'>Dynamics 22</p>
                    </div>
                    <div className='checkbox-item'>
                        <div className='border border3'></div>
                        <p className='menu-text'>Olympics</p>
                    </div>
                    
                </div>
                <div className='app-input'>
                    <div className='menu-input'>
                        <img src={account} alt='account' className='account'></img>
                        <input  type='img' placeholder='Killua' className='input-search' />
                    </div>
                </div>
            </div>
        )
    }
}