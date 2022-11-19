import React from 'react'
import logo from '../../images/logo.png'
import './navbar.css'

const Navbar = (props) => {

  const handleAddBtn = () => {
    props.setShowForm(true)
    props.setIsFormSubmitted(false)
  }

  return (
    <header className='app-header'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src={logo} alt="app-logo" width="50px"/>
          <a className="navbar-brand" href="#"><span className='text-primary'> UP'N</span> <span className='text-warning'>DOWN</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbanpm startrNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button 
                  className="btn btn-info text-white py-2" 
                  aria-current="page" href="#"
                  onClick={handleAddBtn}
                >+ Add Activity</button>
              </li>
              <li className="nav-item dropdown px-5">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar