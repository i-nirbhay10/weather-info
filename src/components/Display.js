import "./Disp.css";
import Nav from "./Nav";
import Wicon from "./Wicon";
import Social from "./Social";
import { useEffect, useState } from "react";

const Display = () => {
  const [text, settext] = useState("");
  const [search, setsearch] = useState("Delhi");
  const [data, setdata] = useState("");
  const [wtype, setwtype] = useState("");
  const [code, setcode] = useState("");

  const fetchApi = async () => {
    try {
      if (!search) {
        alert("please enter the data");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_KEY}`;
      const response = await fetch(url);
      const res = await response.json();
      const alldata = await res;
      const type = await res.weather[0];

      setwtype(type.main);
      setdata(alldata.main);
      setcode(alldata.cod);

      //   console.log(res);
      //   console.log(res.cod);
    } catch (error) {
      console.log(`the error is ${error}`);
      setcode(404);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [search]);

  const clicked = () => {
    setsearch(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //  Get input value
      setsearch(text);
    }
  };

  const tap = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <Nav value={search} hummi={data.humidity} />
      <div className="d-flex justify-content-evenly ">
        <div className="lpart d-none d-sm-block rounded text-dark mx-2 my-2 ">
          <div className="mx-4 my-4 py-3 ">
            <h2 className="text-capitalize">Abou the web app</h2>
            <h5>Devloper :- Nirbhay verma</h5>
            <p className="text-justify  py-2 px-2 bg-info bg-opacity-10 rounded ms-2 ">
              I’m a passionate MERN stack developer with a strong focus on
              crafting seamless web and mobile applications that make a real
              impact. Specializing in React.js and React Native, I deliver
              high-quality, cross-platform solutions that provide consistent
              user experiences across devices. Leveraging Node.js, Express.js,
              and MongoDB on the back end, I build scalable and feature-rich
              applications tailored to client needs. In my work as a full-stack
              developer, I’ve led the development of a range of projects, from
              full-featured web applications like Wiregram (an
              Instagram-inspired app with secure Google OAuth and JWT
              integration) to mobile portfolio apps showcasing skills and
              projects with React Native’s responsive, performance-focused
              architecture. My experience extends to real-time applications for
              news and weather, API integration, and deployment across Netlify
              and Render, ensuring optimal functionality and performance.
            </p>
          </div>
        </div>

        <div className="rpart rounded shadow-lg m-2 ">
          <div className="p-3">
            <div className=" ">
              <div className="d-flex mt-4" role="search">
                <input
                  className="form-control text-capitalize me-2"
                  type="search"
                  placeholder="City Name"
                  aria-label="Search"
                  onChange={tap}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="btn btn-outline-info d-flex"
                  type="submit"
                  onClick={clicked}
                >
                  <i class="bi bi-search"></i> &nbsp;Search
                </button>
              </div>
            </div>

            {code === 200 ? (
              <>
                <div>
                  <h2 className="text-center text-capitalize text-dark mt-3">
                    <i
                      className="bi bi-geo-alt-fill text-dark"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    {search}
                  </h2>
                </div>
                <div className="d-flex mt-4 justify-content-evenly text-dark">
                  <h3>
                    <i class="bi bi-thermometer-half text-danger"></i>
                    <heading className="text-dark">{data.temp} &deg;C</heading>
                  </h3>
                  <h3>{wtype}</h3>
                </div>
                <Wicon para={wtype} />
                <div className="d-flex my-3 justify-content-evenly text-dark">
                  <h4>
                    Max {data.temp_max} &deg;C | Min{data.temp_min} &deg;C
                  </h4>
                </div>
              </>
            ) : code === 404 ? (
              <h4 className="text-center text-capitalize text-dark mt-3">
                {search} is not a city
              </h4>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <Social className="fixed-bottom" />
    </>
  );
};

export default Display;
