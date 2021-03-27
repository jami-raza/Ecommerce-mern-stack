import React,{useState,useEffect} from 'react'
import "../Style/Header.css";
const HeaderTop = () => {
    const [show, handleShow] = useState(false);
 useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
    return (
        <header className={`header-top ${show && "header-top-scroll"}`}>
            <div style={{width:"100%",backgroundColor:'black',color:'#f4f4f4',textAlign:"left",padding:'10px',paddingLeft:'30px'}}>
                <p style={{marginBottom:"0rem",fontFamily:'Roboto'}}>23% Discount avail till 25th March</p>
            </div>
        </header>
    )
}

export default HeaderTop
