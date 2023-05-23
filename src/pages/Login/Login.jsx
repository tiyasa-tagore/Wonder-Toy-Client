import { useContext} from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import img from '../../assets/img/login.jpeg'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn,googleSignIn, } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         const navigate = useNavigate();
    //         const location = useLocation();


    //         let from = location.state?.from?.pathname || "/";

    // // Redirecting to other page;
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
    //     if (!loading && user) {
    //         navigate(from, { replace: true })
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [user])
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} width={800} className='img-fluid' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New Here??<Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <button  className='mt-2 p-2 text-center'><FaGoogle style={{fontSize: '2rem'}}></FaGoogle><span onClick={googleSignIn }> Sign in with Google</span></button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;