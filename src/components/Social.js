const Social = () => {
  return (
    <>
      <div
        className="d-flex fixed-bottom bg-dark opacity- justify-content-evenly "
        style={{ fontSize: "40px" }}
      >
        <a
          className="nav-link active"
          href="https://www.linkedin.com/in/nirbhay-verma-441695217"
          target="blank"
        >
          <i className="bi bi-linkedin text-primary"></i>
        </a>
        <a
          className="nav-link active"
          href="https://github.com/i-nirbhay10"
          target="blank"
        >
          <i className="bi bi-github text-light "></i>
        </a>
        <a
          className=" active"
          href="https://nirbhayverma10@gmail.com"
          target="blank"
        >
          <i className="bi bi-envelope-at text-danger "></i>
        </a>
      </div>
    </>
  );
};

export default Social;
