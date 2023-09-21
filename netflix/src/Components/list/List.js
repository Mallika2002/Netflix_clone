import React from 'react'
import './list.css' 
import ListItem from '../listItem/ListItem'
import { ArrowBackIosOutlined, ArrowForward, ArrowForwardIosOutlined } from '@material-ui/icons'
import {useRef} from 'react';
function List(){
    const [isMoved, setIsMoved] = React.useState(false);
    const [slideNumber, setSlideNumber] = React.useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x -50;
         if(direction === 'left' && slideNumber>0){
           setSlideNumber(slideNumber-1);
           listRef.current.style.transform = `translateX(${230 + distance}px)`;
         }
         if(direction === 'right' && slideNumber<5){
          setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
          }
    }
    return(
        <div className='list'>
          <span className='listTitle'>Continue to watch</span> 
          <div className='wrapper'>
            <ArrowBackIosOutlined className='sliderArrowLeft' onClick={()=>handleClick("left")}
            style={{display : !isMoved && "none"}}/>
            <div className='container' ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined 
            className='sliderArrowRight'
             onClick={()=>handleClick("right")}/>
          </div>
        </div>
    )
}

export default List