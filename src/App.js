import React from 'react';
import './App.css';
import Header from './header.js';
import Section from './section.js';
import {FaCheck, FaGoodreads, FaHeart, FaRegCheckCircle, FaTimes} from 'react-icons/fa';
import Main from './main.js';
import Footer from './footer';
import blooming from './blooming quesadilla.jpeg'
import chicken from './chicken image.jpg';
import chickenwing from './chicken wing.avif';
import hamburger from './hamburger image.avif';
import fruitsalad from './fruit-salad-10.jpg';
import hotdog from './hotdog image.jpg';
import italianpasta from './intalian recipe pasta.jpg';
import nigerianfried from './Nigerian-fried-rice-recipe-main-photo-3.jpg';
import pepperoni from './pepperoni.jpg';

function App() {
  const [data,setdata] =React.useState( [{
    name: 'pepperoni',
    id: 1,
    price: 50,
    favorite: "FaHeart",
    coverimg: pepperoni,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },
  {
    name: 'fried rice',
    id: 2,
    price: 30,
    favorite: "FaHeart",
    coverimg: nigerianfried,
    rating: "4.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },
  {
    name: 'italian pasta',
    id: 3,
    price: 60,
    favorite: "FaHeart",
    coverimg: italianpasta,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },
  {
    name: 'hotdogs',
    id: 4,
    price: 20,
    favorite: "FaHeart",
    coverimg: hotdog,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },

  {
    name: 'fruit salad',
    id: 5,
    price: 20,
    favorite: "FaHeart",
    coverimg: fruitsalad,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
     exitorder: false,
changeorder: false
  },
  {
    name: 'hamburger',
    id: 6,
    price: 25,
    favorite: "FaHeart",
    coverimg: hamburger,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },
  {
    name: 'chicken wings sauce',
    id: 7,
    price: 45,
    favorite: "FaHeart",
    coverimg: chickenwing,
    rating: "7.0",
    isfav: false,
    iconisfav: false,
     exitorder: false,
changeorder: false
  },
  {
    name: 'blooming quesadilla ring',
    id: 8,
    price: 35,
    favorite: "FaHeart",
    coverimg: blooming,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
     changeorder: false
  },
  {
    name: 'Rotisserie chicken', id: 9,
    price: 40,
    favorite: 'FaHeart',
    coverimg: chicken,
    rating: "5.0",
    isfav: false,
    iconisfav: false,
    exitorder: false,
changeorder: false,
  }]);
  
  const [favicon, setfavicon] = React.useState(0);
  
  const [ordercart, setordercart] = React.useState([]);
  
  const [ordercart3, setordercart3] = React.useState([]);
  const [objorder, setobjorder] = React.useState(0)
  

  

  function addorder(listid, isfavicon) {


    const setorder2 = isfavicon ? objorder - 1 : objorder + 1;
    setobjorder(setorder2)

    const neworder = data.filter(item => item.id === listid)
    setordercart3(prev => isfavicon ? prev.filter(item => item.id !== listid) : [...prev, ...neworder])

    
    
    setordercart(prev => isfavicon ? [...prev, ...neworder] :  [...prev, ...neworder])
    
    
    
    const newfav2 =  data.map(item => item.id=== listid ?{...item,isfav:!item.isfav}:item) 
    setdata(newfav2)
    setTimeout(() => { setordercart(prev=>prev.map(item=>(item.id===listid ? { ...item, changeorder: !item.changeorder }:item ))) }, 5000)
    setTimeout(() => { setordercart(prev=>prev.filter(item=>(item.id !==listid  ))) }, 6000)
  
  }

  
    function deleteOrder2(del2) {
const removeorder2= ordercart.filter(item => item.id !==del2)
setordercart(removeorder2)
  }

  const myorder = ordercart3.map(items => { return (<div key={items.id} className='border-div'><img src={items.coverimg} alt='my images' style={{ width: 200, height: 170 }} /> <br></br> <label className='price'><span >Price:</span>${items.price}</label></div>) })
  const placeorder = ordercart.map(item => { return (<div className={item.changeorder ? "setplace-order" : 'place-order'} key={item.id}><FaTimes className='exit-fa' onClick={() => deleteOrder2(item.id)}></FaTimes ><br></br><div className='flex-order'><FaRegCheckCircle className={item.isfav?"circle-check2": 'circle-check'}></FaRegCheckCircle><p className='p-order'>{item.isfav?"canceling order":"Placing order"}</p> </div><hr className={item.isfav?"hr2":'hr'}></hr></div>) })
  console.log(ordercart3);
   

  function addfav(fav,isicon) {
    const seticon = isicon ? favicon -1: favicon + 1;
    setfavicon(seticon)
    const newfav =  data.map(item => item.id===fav ?{...item,iconisfav:!item.iconisfav}:item) 
    setdata(newfav)
    
  }

  const sectionElement=data.map(item=>{return(
  <div key={item.id} className='section-div'><div className='second-div'><img src={item.coverimg}className='image' style={{width:200,height:170}}/><div className='fav-icon'> <FaHeart className={item.iconisfav?"red-icon":"black-icon"} onClick={()=>addfav(item.id,item.iconisfav)}/></div>
  <h2>{item.name}</h2>
  <label className='price'><span >Price:</span>${item.price}</label><br/>
      <label className='rating'><span >Rating:</span>{item.rating}</label><br></br><button className={!item.isfav ? 'order-btn' : "order-btn2"} onClick={() => addorder(item.id, item.isfav)} >{item.isfav ? "Cancel order" : "Place order"}</button></div>
  
  
  
  
  
  
  </div>)})


   
     
    
  

  return (
    <div className="App">
    
    
      <Header
      myorder={myorder}
        favicon={favicon}
       objorder={objorder} 
        ordercart={ordercart3.length}
      
      /> 
   <Main/>
      <h2 className='our-recipe'>Our recipe</h2>
      <div className='order'>
        <div className='main-order'>
          {placeorder}
         
        </div>
        
      <div className="div-container">
        
    {sectionElement}
        </div>
        
    </div>
    
     <Footer/>       
    </div>
  );
}

export default App;
