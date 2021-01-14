import React, { useEffect } from "react"
import { Navbar, NavItem } from "reactstrap"
import classnames from "classnames"
import NavbarUser from "./NavbarUser"
import * as Icon from "react-feather"
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import { NavLink } from "react-router-dom"
import Logo from '../../../myAssets/images/online_go_logo.png'


const ThemeNavbar = props => {
  const colorsArr = [ "primary", "danger", "success", "info", "warning", "dark"]
  const navbarTypes = ["floating" , "static" , "sticky" , "hidden"]



  return (
    <React.Fragment>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
          {
            "navbar-light": props.navbarColor === "default" || !colorsArr.includes(props.navbarColor),
            "navbar-dark": colorsArr.includes(props.navbarColor),
            "bg-primary":
              props.navbarColor === "primary" && props.navbarType !== "static",
            "bg-danger":
              props.navbarColor === "danger" && props.navbarType !== "static",
            "bg-success":
              props.navbarColor === "success" && props.navbarType !== "static",
            "bg-info":
              props.navbarColor === "info" && props.navbarType !== "static",
            "bg-warning":
              props.navbarColor === "warning" && props.navbarType !== "static",
            "bg-dark":
              props.navbarColor === "dark" && props.navbarType !== "static",
            "d-none": props.navbarType === "hidden" && !props.horizontal,
            "floating-nav":
              (props.navbarType === "floating" && !props.horizontal) || (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            "navbar-static-top":
              props.navbarType === "static" && !props.horizontal,
            "fixed-top": props.navbarType === "sticky" || props.horizontal,
            "scrolling": props.horizontal && props.scrolling

          }
        )}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              <div>
          
        <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu mr-auto">
            <NavLink to="#"
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={props.sidebarVisibility}>
              <Icon.Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>

        <ul className="nav navbar-nav d-none d-xl-flex">
         <NavItem >
            <NavLink 
            className="nav-link "
             to="/ghj" >
              <Icon.CheckSquare className="ficon" />
            </NavLink>
          </NavItem>

     

          <NavItem>
            <NavLink 
             className="nav-link "
              to="/ghj" >
              <Icon.MessageSquare className="ficon" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
             className="nav-link "
              to="/gh" >
              <Icon.User className="ficon" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
             className="nav-link "
               to="/dgh" >
              <Icon.Calendar className="ficon" />
            </NavLink>
          </NavItem>
        </ul>

              </div>
             
              {props.horizontal ? (
                <div className="logo d-flex align-items-center">
                  <img src={Logo} className="w-100" style={{maxWidth:'190px'}} />
                </div>
              ) : null}

              <NavbarUser
                handleAppOverlay={props.handleAppOverlay}
                changeCurrentLang={props.changeCurrentLang}
                userName="John Doe"
                userImg={ userImg }
              />
            </div>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  )
}


export default ThemeNavbar
