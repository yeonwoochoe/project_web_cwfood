import React from 'react'
import '../style/Main.scss';



export default function MainTitle(props) {

  return (
  
    <div className="main_title">
    <h3><span>{props.heading.mdPick}</span>
    {props.heading}<strong>{props.heading.mdPick}</strong>
    </h3>
    </div>
  )
}
