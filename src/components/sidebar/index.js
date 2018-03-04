import React from 'react'

import { siteMetadata } from '../../../gatsby-config'

export default ({ location }) => (
  <div className="sidebar">
    <div className="sidebar-header">
      <button type="button" className="sidebar-toggle" data-toggle="collapse" data-target="#sidebar-nav-collapse">
        <div className="icon-bar" />
        <div className="icon-bar" />
        <div className="icon-bar" />
      </button>

      <img
        className="img-responsive hidden-sm hidden-xs"
        src={require('assets/img/logo.png')}
        alt={siteMetadata.title}
      />

      <h1 className="sidebar-brand visible-sm visible-xs">{siteMetadata.title}</h1>
    </div>

    <div className="collapse sidebar-collapse" id="sidebar-nav-collapse">
      <ul className="nav sidebar-nav">
        <li className={`nav-item sidebar-nav-item ${location.pathname === '/' ? 'active' : null}`}>
          <a href="/">Home</a>
        </li>
        <li className={`nav-item sidebar-nav-item ${location.pathname === '/menu/' ? 'active' : null}`}>
          <a href="/menu/">Menu</a>
        </li>
        <li className="nav-item sidebar-nav-item">
          <a href="#specials" data-toggle="modal">
            Specials
          </a>
        </li>
        <li className="nav-item sidebar-nav-item">
          <a href="#flavors" data-toggle="modal">
            Ice Cream
          </a>
        </li>
        <li className={`nav-item sidebar-nav-item ${location.pathname === '/photos/' ? 'active' : null}`}>
          <a href="/photos/">Photos</a>
        </li>
        <li className="nav-item sidebar-nav-item">
          <a href="#hours" data-toggle="modal">
            Hours
          </a>
        </li>
        <li className="nav-item sidebar-nav-item">
          <a href="#contact" data-toggle="modal">
            Contact
          </a>
        </li>
        <li className="nav-item sidebar-nav-item">
          <a href="#location" data-toggle="modal">
            Location
          </a>
        </li>
        <li className={`nav-item sidebar-nav-item ${location.pathname === '/special-events/' ? 'active' : null}`}>
          <a href="/special-events/">Special Events</a>
        </li>
      </ul>
    </div>
  </div>
)
