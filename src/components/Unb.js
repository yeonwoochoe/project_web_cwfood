import {BiUser,BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function Unb (){

  const navList = [
    {icon:<BiUser size="26"/>, href:"main"},
    {icon:<BiCartAlt size="26"/>, href:"/"}
  ];

  return (
    <div className="unb">
      <h2 className="blind">user navigation</h2>
    <ul className="blind_wrap">
    { navList.map( (nav, idx)=>{
      return (
        <li key={idx}>
          <Link to="/">{nav.icon}<span>user</span></Link>
        </li>
        )
    }) 
    }
    </ul>
  </div>

  )
}