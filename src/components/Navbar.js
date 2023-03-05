import React, { useState } from 'react'

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>

      <button type="button" style={{backgroundColor:props.mode==='light'?'#0000CD':'grey', color:props.mode==='light'?'dark':'white'}} class={`btn btn-${props.toggle1} mx-1`} onClick={props.toggle1}>Blue</button>
      <button type="button" style={{backgroundColor:props.mode==='light'?'#800000':'grey', color:props.mode==='light'?'dark':'white'}} class={`btn btn-${props.toggle2} mx-1`} onClick={props.toggle2}>Maroon</button>
      <button type="button" style={{backgroundColor:props.mode==='light'?'#8B4513':'grey', color:props.mode==='light'?'dark':'white'}} class={`btn btn-${props.toggle3} mx-1`} onClick={props.toggle3}>Brown</button>

      <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        light scheme
    </button>
    <ul className="dropdown-menu">
        <li className="dropdown-item" onClick={props.toggle}>Dark Mode</li>
    </ul>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}
