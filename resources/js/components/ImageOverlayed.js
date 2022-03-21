import React from 'react'
import '../../css/app.css';
import {Button} from 'react-bootstrap'
import {BsFillCartPlusFill,BsFillCartCheckFill} from 'react-icons/bs'
export default function imageOverlay({width,src,caption,name,alt,height,small,medium,large,desc}){
    
    return (
        <div className="hover hover-1 text-white rounded " style={{backgroundColor:'transparent',height:height}}>
             <img
                    className="d-block "
                    style={{display:'block',margin:'auto',maxWidth:'100%'}}
                   
                    height="300px"
                    src={src}
                    alt={alt}/>
            <div className="hover-overlay">          
            </div>
            <div className="hover-1-content px-2 ">    
                <p className="hover-1-description0  mb-0"><b>{name}</b></p><br/>
                <p className="hover-1-description font-weight-light mb-0">&#8358;{caption}</p><br/>
                <p className="hover-1-description font-weight-light mb-0">{desc}</p>
                
            </div>
        
        </div>
    )

}