const Wicon = (props) => {
  let { para } = props;

  return (
    <>
      <div className="text-center p-1 text-dark" style={{ fontSize: "3rem" }}>
        {para === "Clouds" ? (
          <i className="bi bi-clouds-fill text-light"></i>
        ) : para === "Haze" ? (
          <i className=" bi bi-cloud-haze text-light"></i>
        ) : para === "Thunderstorm" ? (
          <i className="bi bi-cloud-lightning-rain-fill"></i>
        ) : para === "Rain" ? (
          <i class="bi bi-cloud-rain-fill text-light"></i>
        ) : para === "Smoke" ? (
          <i class="bi bi-cloud-fog2-fill text-light "></i>
        ) : para === "Snow" ? (
          <i className="bi bi-snow2" style={{ color: "#fffafa" }}></i>
        ) : para === "Drizzle" ? (
          <i className="bi bi-cloud-rain"></i>
        ) : para === "Clear" ? (
          <i className="bi bi-brightness-high-fill text-warning "></i>
        ) : (
          <i className="bi bi-cloud-sun-fill"></i>
        )}
      </div>
    </>
  );
};

export default Wicon;
