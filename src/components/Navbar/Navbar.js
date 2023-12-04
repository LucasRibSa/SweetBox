import React from 'react';
import './Navbar.css';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src="/assets/logo.png" alt="Logo da Empresa" className="logo" />
        <ul>
          <li className='portfolio'>Portfolio</li>
          <li className='produtos'>Produtos</li>
          <li className='contato'>Contato</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
