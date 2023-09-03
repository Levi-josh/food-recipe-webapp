import React from   'react'
import { FaHeart,FaBars,FaTimes} from 'react-icons/fa'

const Header = (props) => {
const [menubar, setmenubar]=React.useState(true)
  const [order, setorder] = React.useState(true)
  const[favicon, setfavicon] = React.useState(0)



     
function toggleMenubar(){
setmenubar(prevmenu=>!prevmenu)

}
function toggleOrder(){
  setorder(prevorder=>!prevorder)}


  return (
    <div className='header'>
     { !menubar &&  <div className='menu--header'><FaTimes className='exit-icon' onClick={toggleMenubar}></FaTimes>
    <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>
    </ul>
    
    </div>}
    
<div className='logo'><h1>FOOD & NUTRICTION<br></br>COMPANY</h1></div>
<ul className='laptop-ul'>
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>
    </ul>

    <FaHeart className='icon'/><span className='icon-span'>{props.favicon}</span>
      <p className='orders' onClick={toggleOrder}>Orders</p><span className='span-orders'>{props. objorder}</span><FaBars className='menu' onClick={toggleMenubar}/>

{!order&&<div className='order-list'>
       <div className='icon2-div'> <FaTimes className='exit-icon2 ' onClick={toggleOrder} /></div><br></br><br></br><br></br>
        {props.myorder}
        {props.ordercart < 1 && <h1 className='empty-order'>You've not placed<br></br>any order<br></br>yet!</h1>}
</div>}

    </div>
  )
}

export default Header