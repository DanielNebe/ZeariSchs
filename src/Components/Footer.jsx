import React from "react";
import { Link } from 'react-router-dom';
import "./ComponentsA.css"


const links = [
    { path: '/About', name: 'About Us' },
    { path: '/Adnission', name: 'Admission' },
    { path: '#', name: 'Gallery' },
];

export default function Footer() {
  return (
    <div id="Footer">
        <section>
            <div id="FContactUs">
                <h3> Contact Us  </h3>                
            </div>
            <div id="FLinks">
                <h3> Useful Links</h3>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                 </ul>
            </div>
            <div id="FSubscription">
                <h3>Subscribe to our newsletter</h3>
                <form>
                    <label>
                        <input type="email"  name="email" placeholder="iNPUT YOUR EMAIL"/>
                        <button>Subscribe</button>
                    </label>
                </form>
            </div>
        </section>
    </div>
  )
}
