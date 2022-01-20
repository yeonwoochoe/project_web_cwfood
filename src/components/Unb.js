import {BiUser,BiCartAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
export default function Unb (){

  const navList = [
    {icon:<BiUser size="26"/>, href:"Login"},
    {icon:<BiCartAlt size="26"/>, href:"Cart"}
  ];

  return (
    <div className="unb">
      <h2 className="blind">user navigation</h2>
    <ul className="blind_wrap">
    { navList.map( (nav, idx)=>{
      return (
        <li key={idx}>
          <NavLink to={nav.href}>{nav.icon}<span>user</span></NavLink>
        </li>
        )
    }) 
    }
    </ul>
  </div>

  )
}