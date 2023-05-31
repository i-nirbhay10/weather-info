const Nav = (props) => {
  let { value, hummi } = props;
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light bg-opacity-50">
        <div className="container-fluid  ms-5">
          <a className="navbar-brand  " href="/">
            <h2>
              <i
                class="bi bi-brightness-alt-high-fill "
                style={{ color: "blue" }}
              ></i>
              &nbsp; Weather- Info
            </h2>
          </a> */}
      {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-evenly">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link active" href="/">
                About
              </a>
            </div>
          </div> */}

      {/* <div>
            <h5 className="d-flex text-capitalize me-3">
              {value} Humidity-{hummi}
              <h4>
                <i class="bi bi-droplet-half text-danger ms-1"></i>
              </h4>
            </h5>
          </div>
        </div>
      </nav> */}

      <div className=" d-flex justify-content-between p-2 bg-dark text-light ">
        <a className="mx-4 text-decoration-none " href="/">
          <h2 className="text-light">
            <i
              className="bi bi-brightness-alt-high-fill"
              style={{ fontSize: "35px", color: "#f1e422ec" }}
            ></i>
            &nbsp; Weather- Info
          </h2>
        </a>

        <div className="text-capitalize me-4 pt-2 mt-1">
          <h4>{value}</h4>
        </div>

        <div className=" me-4  pt-3">
          <h5 className="d-flex text-capitalize me-2">
            <i class="bi bi-droplet-half text-danger me-1"></i>
            Humidity {hummi}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Nav;
