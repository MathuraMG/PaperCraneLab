import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from '../../assets/logo.png'
import HamburgerMenu from 'react-hamburger-menu';

require('./nav.scss');

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerMenuOpen: false,
      selectedMenuItem: ''
    }
  }

  closeHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuOpen: false
    });
  }

  selectMenuItem = (link) => {
    this.setState({
      selectedMenuItem: link
    })
  }

  toggleMenu=()=> {
    this.setState({
      isHamburgerMenuOpen: !this.state.isHamburgerMenuOpen
    })
  }

  renderList(display, link) {
    return (
      <li className="nav__item">
        <a
          className={`nav__item-link
            ${(link===this.state.selectedMenuItem)? " nav__item-link--selected" : ""}`}
          href={link}
          onMouseDown={()=>this.selectMenuItem(link)}
          onKeyDown={()=>this.selectMenuItem(link)}
        >
          {display}
        </a>
      </li>
    )
  }

  render() {
    return (
      <div className="nav__container">
        <div className="nav__left">
          <img
            className="nav__logo"
            src={logo}
          />
          <h1 className="heading nav__heading">
            Paper Crane Lab
          </h1>
        </div>
        <div className="nav__right">
          <div className="nav__small-menu">
            <HamburgerMenu
              isOpen={this.state.isHamburgerMenuOpen}
              menuClicked={this.toggleMenu}
              width={40}
              height={20}
              strokeWidth={3}
              rotate={0}
              color='white'
              borderRadius={1}
              animationDuration={0.5}
            />
          </div>
          {this.state.isHamburgerMenuOpen &&
            <ul
              className="nav__list"
            >
              {this.renderList('Events', '#events')}
              {this.renderList('About', '#about')}
              {this.renderList('Offerings', '#offerings')}
              {this.renderList('Contact Us', '#contact')}
            </ul>
          }
          <div className="nav__big-menu">
            <ul
              className="nav__list"
            >
              {this.renderList('Events', '#events')}
              {this.renderList('About', '#about')}
              {this.renderList('Offerings', '#offerings')}
              {this.renderList('Contact Us', '#contact')}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
