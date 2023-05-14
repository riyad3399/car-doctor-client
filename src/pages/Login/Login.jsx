import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        toast.success("Login Successful", { theme: "dark", autoClose: 2000 });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful", { theme: "dark", autoClose: 2000 });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassword = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-14">
          <img src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <p className="text-center text-red-500 my-4">{error}</p>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />

              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <p onClick={handleShowPassword} className="absolute bottom-4 right-3">
                {showPass ? <p><FaEye/> </p> : <p><FaEyeSlash/> </p>}
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p className="text-center text-lg my-4">Or Sign In with</p>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline rounded-full bg-base-200 border-none mr-4"
                  >
                    {" "}
                    <FaFacebook />
                  </button>
                  <button
                    onClick={handleGoogleLogIn}
                    type="button"
                    className="btn btn-outline bg-base-200 border-none rounded-full"
                  >
                    <FaGoogle />
                  </button>
                </div>
              </div>
            </form>
            <p className="my-4 text-center">
              New to car doctor{" "}
              <Link to="/signup" className="text-orange-500 font-bold">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
