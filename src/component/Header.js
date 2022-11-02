import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




export default function Header(props) {
  // const [mystyle, setMystyle] = useState(null);
  let backremove=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
  

   }
  const tostyle=( cls)=>{
    backremove();
    document.body.classList.add('bg-'+cls);
    let element = document.getElementById('box')
   
    
    if(cls==='warning'){
     
      
      element.style.color = "black";
      element.style.backgroundColor = "#FFC107";
     
     
      
    }
    else if(cls==='danger'){
     
      element.style.color = "black";
      element.style.backgroundColor = "#DC3545";

    

    }
    else if(cls==='dark'){
     
      element.style.color = "white";
      element.style.backgroundColor = "#212529";

    

    }

  }
  return (
    <div >
   <nav className={'navbar navbar-expand-lg navbar-dark bg-primary'}>
  {/* <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} > */}
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">Fazi-react</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "  to="/news">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallary">{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            List
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link  className="dropdown-item" to="/">menu 1</Link></li>
            <li><Link  className="dropdown-item" to="/">menu 2</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link  className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
      <button type="button" className="btn btn-danger rounded "
      onClick={()=>{tostyle('danger')}} style={{height:'20px', width:'10px'}} ></button>
      <button type="button" className="btn btn-warning rounded mx-3 " 
      onClick={()=>{tostyle('warning')}} style={{height:'20px', width:'10px'}} ></button>
      <button type="button" className="btn btn-dark rounded "
      onClick={()=>{tostyle('dark')}} style={{height:'20px', width:'10px'}} ></button>

      </form>
    </div>
  </div>
</nav>
      
    </div>
  )



}
Header.proptype= {
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

Header.defaultProps = {
    home: 'must add',
    about:'must add'
  };
