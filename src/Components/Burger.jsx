import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function Burger() {
    return (
        <Menu styles={{
            background: '#373a47'
}}>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/products">
                Products
            </a>
            <a className="menu-item" href="/about">
                About Us
            </a>
            <a className="menu-item" href="/contact">
                Contact Us
            </a>
        </Menu>
    );
}