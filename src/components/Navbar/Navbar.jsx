import "./Navbar.scss";
import { Link , useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate()
  const state = useSelector((state) => state);

  const LogoutFunc = () => {
    localStorage.clear()

    navigate('/login')
    window.location.reload()


  }
  return (
    <div className="navbar ">
      <div className="container">
        <div className="logo">
          <Link to="/">MyBlog</Link>
        </div>
        <div className="regist">
          {state.auth.username ? (
            <div className="profile">
              <Link to={`/newpost/${state.auth.id}`} className="mr-12 text-md">
                Create New Post
              </Link>
              <h2>Hello {state.auth.username}</h2>{" "}
              <img src={state.auth.avatar? state.auth.avatar :  'https://th.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?w=142&h=180&c=7&r=0&o=5&pid=1.7'} alt="" />
              <Link  style={{width:'fit-content'}} onClick={LogoutFunc}>Logout</Link>
            </div>
          ) : (
            <>
              {" "}
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="regist">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
