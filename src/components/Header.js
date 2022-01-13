import Searchbox from './Searchbox';
import Unb from './Unb';
import { Link } from 'react-router-dom';

import '../style/Header.scss';

import logo from './../cw_logo.svg';


export default function Header(){


return (
  <header id="headBox">
    <div className="container">
      <h1><Link to="/"><img src={logo} alt="" />
      <span className="blind">청우식품</span></Link></h1>
      <Searchbox/>
      <Unb/>
    </div> 
  </header>
  )
}