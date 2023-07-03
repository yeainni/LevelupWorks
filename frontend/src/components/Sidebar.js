import { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  // FaCommentAlt,
  // FaShoppingBag,
  // FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../App.css";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem = [
    {
      path: "/StudentProjectBuilderDashboard/learningobjectives",
      name: "LEARNING OBJECTIVES",
      icon: <FaTh />
    },
    {
      path: "/StudentProjectBuilderDashboard/instructions",
      name: "INSTRUCTIONS",
      icon: <FaUserAlt />
    },
    {
      path: "/StudentProjectBuilderDashboard/videotutorial",
      name: "VIDEO TUTORIAL",
      icon: <FaRegChartBar />
    },
  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;



// {sideIcons.map((sideIcon, index) => (
//   <Link
//     to={sideIcon.routes}
//     key={index}
//     className={styles.btn}
//     style={{
//       backgroundColor: selectIcons === index ? "#B2E4FA" : "",
//     }}
//     onClick={() => {
//       // setDisplayIcons(!displayIcons);
//       setSelectIcons(index);
//     }}
//   >
//     <div className={styles.img}>
//       {selectIcons === index ? sideIcon.iconSelected : sideIcon.icon}
//     </div>
//     <p
//       className={styles.name}
//       style={{
//         display: displayIcons ? "" : "none",
//         color: selectIcons === index ? "grey" : "white",
//         // background: selectIcons === index ? "grey" : "white",
//       }}
//     >
//       {sideIcon.name}
//     </p>
//   </Link>
// ))}