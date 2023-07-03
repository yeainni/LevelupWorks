import Students from "../assets/navLogin/students.png";
import Teachers from "../assets/navLogin/teachers.png";
import Esc from "../assets/navLogin/esc.png";
import "./Signup.css";

export default function Signup(props) {

    return (
        <div className="SignupBox">
            {props.isOpen && (
                <div className="Signup" onClick={props.onClick}>
                    <div className='loginSignup'>
                        <img src={Students} alt='Students' />
                        <h1>Students</h1>
                        <div className="loginSignupInput">
                            <h2>LOG IN</h2>
                            <h2>SIGN UP</h2>
                        </div>
                        <input type="email" placeholder="Email Address"></input>
                        <input type="password" placeholder="Password"></input>
                        <button className="pinkBtn">LOG IN</button>
                    </div>

                    <hr />

                    <div className='loginSignup'>
                        <img src={Teachers} alt='Teachers' />
                        <h1>Teachers</h1>
                        <div className="loginSignupInput">
                            <h2>LOG IN</h2>
                            <h2>SIGN UP</h2>
                        </div>
                        <input type="email" placeholder="Email Address"></input>
                        <input type="password" placeholder="Password"></input>
                        <button className="pinkBtn">LOG IN</button>
                    </div>

                    <button className="close" onClick={props.onClose}>
                        <img src={Esc} alt="close" />
                    </button>
                </div>
            )}
        </div >
    );
}
