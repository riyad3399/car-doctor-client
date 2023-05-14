import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false)

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Sign Up successful", { theme: "dark", autoClose: 2000 });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <p className="text-center text-red-500 my-4 ">{error}</p>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
                <p onClick={handleShowPassword} className="absolute bottom-4 right-4">
                  {showPass ? <FaEye/> : <FaEyeSlash/>}
                </p>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div>
                <p className="text-center text-lg my-4">Or Sign Up with</p>
                <div className="text-center">
                  <button className="btn btn-outline rounded-full border-none bg-base-200 mr-4">
                    {" "}
                    <FaFacebook />
                  </button>
                  <button className="btn btn-outline bg-base-200 border-none rounded-full">
                    <FaGoogle />
                  </button>
                </div>
              </div>
            </form>
            <p className="my-4 text-center">
              Have an Account?{" "}
              <Link to="/login" className="text-orange-500 font-bold">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
