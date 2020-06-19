import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Forside from '../Pages/Forside/Forside';
import Nyheder from '../Pages/Nyheder/Nyheder';
import { ReactComponent as LogoIcon } from '../images/biohazard.svg';
import LogoLogo from '../images/mediehuset-logo.png';

// What is showed in the navbar

function Navibar() {
    return (
        <Router>
            <Navbar>
                <NavLogo />
                <button class="menu-button">KØB BILLET</button>
                <NavItem>
                    {/* Dropdown goes here  */}
                    <DropdownMenu />
                </NavItem>

                <NavItemTwo>
                    <DropdownMenuTwo />
                </NavItemTwo>

                <NavItemThree>
                    <DropdownMenuThree />
                </NavItemThree>

                <NavItemFour>
                    <DropdownMenuFour />
                </NavItemFour>

                <NavItemFive>
                    <DropdownMenuFive />
                </NavItemFive>
            </Navbar>
            <Switch>
                <Route path="/nyheder" component={Nyheder} />
                <Route path="/" component={Forside} />
            </Switch>
        </Router>
    );
}

// Drop down menu with height toggle 

// Drop down menu for item #1 in Navbar:
function DropdownMenu() {


    // Drop down menu for item #1

    return (
        <div>
        </div>
    );
};

// Drop down menu for item #2 in Navbar:
function DropdownMenuTwo() {

    // activemenu is the state / name of menu. setactivemenu is how it is changed
    const [activeMenu, setActiveMenu] = useState('main');
    // State for height of dropdown menu 
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            // Looks for prop passed down from parent component 
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }


    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            {/* if activemenu = main it will show active children inside it. unmountonexit removes them when they are not active. CSSTransitions adds and removes classes based on animation state */}
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>Program</DropdownItem>
                    <DropdownItem>Line-up</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

// Drop down menu for item #3 in Navbar:
function DropdownMenuThree() {

    return (
        <div>
        </div>
    );
};

function Navbar(props) {
    return (
        <nav className="navbar">
            {/* props - pass data or UI elements to each other. You need to add props as an argument to your function. has build in property - children. It projects or reference any UI elements you pass inside the components tag. Anything put into the navbar tag above in App function is then used down here*/}
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    )
}



// Drop down menu for item #3 in Navbar:
function DropdownMenuFour() {


    return (
        <div>
        </div>
    );
};




function DropdownMenuFive() {

    return (
        <div>
        </div>
    );
};













// Rendering of logo in navbar 
function NavLogo(props) {

    return (
        <li><a href="/"><LogoIcon className='icons' /></a></li>
    );
}




function NavItem(props) {

    // First value is StaticRange, a Boolean. second is a function which can change the state 
    const [open, setOpen] = useState();
    return (

        <li className="nav-item" onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} >
            <a href="/" onClick={() => setOpen(!open)}>NYHEDER
        {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function NavItemTwo(props) {

    // First value is StaticRange, a Boolean. second is a function which can change the state 
    const [open, setOpen] = useState();
    return (
        <li className="nav-item" onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} >
            <a href="/" onClick={() => setOpen(!open)}>EVENTS
        {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}


function NavItemThree(props) {

    // First value is StaticRange, a Boolean. second is a function which can change the state 
    const [open, setOpen] = useState();
    return (
        <li className="nav-item" onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} >
            <a href="/nyheder" onClick={() => setOpen(!open)}>CAMPS
        {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function NavItemFour(props) {

    // First value is StaticRange, a Boolean. second is a function which can change the state 
    const [open, setOpen] = useState();
    return (
        <li className="nav-item" onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} >
            <a href="/nyheder" onClick={() => setOpen(!open)}>PRAKTISK INFO
        {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function NavItemFive(props) {

    // First value is StaticRange, a Boolean. second is a function which can change the state 
    const [open, setOpen] = useState();
    return (
        <li className="nav-item" onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} >
            <a href="/nyheder" onClick={() => setOpen(!open)}>LOGIN
        {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default Navibar;
