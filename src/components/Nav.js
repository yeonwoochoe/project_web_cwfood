import Gnb from './Gnb';
import '../style/Nav.scss';
import { Fragment } from 'react';

export default function Nav (){


  return (
    <Fragment>
    <nav className="navigation">
      <h2 className="blind">global navigation</h2>
      <Gnb/>
    </nav>
    </Fragment>
  )
}