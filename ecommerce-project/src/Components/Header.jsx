import { Link } from "react-router-dom"


function Header() {
  return (
   <header className="p-3 mb-3 border-bottom bg-primary">
    <div className="container">
      <div className="headerInner d-flex align-items-center justify-content-between">
        <div className="logBox">
          {/* <img src="" alt="" /> */}
          <h3 className="fs-4 text-white">24Trainers - Pvt Ltd New</h3>
        </div>
        <ul className="nav">
        <li className="nav-item"> <Link className="nav-link text-white" to="/"> HOME </Link> </li>
        <li  className="nav-item"> <Link className="nav-link text-white" to="/shop"> SHOP </Link> </li>
        <li  className="nav-item"> <Link className="nav-link text-white" to="/women"> WOMEN </Link> </li>
        <li  className="nav-item"> <Link className="nav-link text-white" to="/contact"> CONTACT </Link> </li>
      </ul>
      </div>
    </div>
  </header>
  )
}

export default Header