import imglogin from '../../Asset/Images/synswift.svg'

function SignUp() {
  return (
    <section className="vh-100" style={{ backgroundColor: "rgb(216 216 216)" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-6">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-5 pt-5 ps-5">
                    <img
                      src={imglogin}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="card-body p-2 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0">Welcome, To Team</span>
                    </div>
                    <h5
                      className="fw-normal mb-2 pb-2"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign Up Now
                    </h5>
                    <form>
                      <div className="d-flex justify-content-sm-between mb-1">
                        <div className="form-outline ">
                          <input
                            type="Text"
                            id="name"
                            className="form-control form-control-lg"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="form-outline ">
                          <input
                            type="Text"
                            id="name"
                            className="form-control form-control-lg"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-sm-between mb-1">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="phone"
                            className="form-control form-control-lg"
                            placeholder="Contact No."
                          />
                        </div>
                        <div className="form-outline">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-sm-between mb-1">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-sm-between my-3">
                        <div className="form-outline me-4">
                          <select class="select form-control-lg" placeholder="Position">
                            <option value="1">
                              Choose Option
                            </option>
                            <option value="2">Sr. Developer</option>
                            <option value="3">Jr. Developer</option>
                            <option value="4">Developer</option>
                            <option value="5">Hr</option>
                            <option value="6">Intern</option>
                            <option value="7">Designer</option>
                          </select>
                        </div>
                        <div className="form-outline me-4">
                          <select class="select form-control-lg">
                            <option value="1">
                              Gender
                            </option>
                            <option value="2">Female</option>
                            <option value="3">Male</option>
                            <option value="4">Other</option>
                          </select>
                        </div>
                        <div className="form-outline">
                          <input
                            type="Date"
                            id="DOJ"
                            className="form-control form-control-lg"
                            placeholder="Date of Joining"
                          />
                        </div>
                      </div>
                      <div className="pt-1 me-4 d-flex justify-content-center">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Save
                        </button>
                      </div>
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

export default SignUp;
