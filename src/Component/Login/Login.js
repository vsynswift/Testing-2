import { useState } from 'react';
import imglogin from '../../Asset/Images/imglogin.jpg'


function Login () {

  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');

  const handlesumbit = (e) => {
    e.preventDefault();
    setError('')
    setSuccess('');
  
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "rgb(216 216 216)" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={imglogin}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onsumbit={handlesumbit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        {/* <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        /> */}
                        <span className="h1 fw-bold mb-0">Synswift</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder='Email'
                          onKeyUp={(e)=> setEmail(e.target.preventDefault)}
                        />
                        {/* <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label> */}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder='Password'
                          onKeyUp={(e)=> setPass(e.target.preventDefault)}
                          
                        />
                        {/* <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label> */}
                      </div>
                      <div className="pt-1 mb-4">
                     <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
