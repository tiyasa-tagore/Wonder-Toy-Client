import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo0.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // if (loading && !user) {
    //     return <></>
    // }

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }


    const navItems = <>
     <a className="btn btn-ghost normal-case text-3xl"><Link to="/">WONDER TOYS</Link></a>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/alltoys">ALL Toys</Link> </li>
        <li><Link to="/blog">Blog</Link> </li>
        
        <li> <Link to="/about">About</Link> </li>
        { user?.email ?  <>
            <li><Link to="/mytoys">My Toys</Link></li>
            <li><Link to="/addatoy">Add A Toy</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <Link to="/login">Login</Link> </li>
       }
    </>
    return (
        <div className="navbar bg-white-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}

      </ul>
    </div>
    <Link to="/"  className="btn btn-ghost normal-case text-xl">
       <img className='ml-10' src={logo} width={130} alt=""  />
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-danger p-4"><Link to="/signup"> Sign Up</Link></button>
  </div>
  {/* {
                                        user ?
                                            <>

                                                <div>
                                                    <Link to="/profile">
                                                        <img src={user.photoURL} alt="User" height={40}  title='Go to Profile' />
                                                    </Link>
                                                    <button className='btn btn-warning ms-3 my-2 my-md-0' onClick={signOutGoogle}>Logout</button>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div>
                                                    <button className='bg-success text-danger' >
                                                        <Link to="/login">
                                                            Login</Link></button>
                                                </div>
                                            </>
                                    } */}
</div>
    );
};

export default Navbar;