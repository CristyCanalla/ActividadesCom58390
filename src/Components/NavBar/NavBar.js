import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
  
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-COMMERCE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/celulares">Celulares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/televisores">Televisores</a>
        </li>
       
 
      </ul>
    </div>
    
  <a class="nav-link" href="/carrito">
    <CartWidget class="cart-icon" />
  </a>

  </div>
</nav>


    </div>
  )
}

export default NavBar