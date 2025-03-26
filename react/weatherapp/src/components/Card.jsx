import React, { useEffect, useState } from "react";

const Card = () => {
  let [search, setSearch] = useState("Chennai");

  let [city, setCity] = useState(null);

  let getData = async () => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=765ede317af00990bdae38b9d2b18c42`);

    let data = await res.json();

    setCity(data.main);
    console.log(data.main)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main">
        <div className="top">
          <input
            type="text"
            placeholder="enter city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getData}>search</button>
        </div>
        {city === null ? (
          <p className="para">not found!</p>
        ) : (
          <div className="info">
            <h2>{search}</h2>
            <h1>{city.temp}&deg;C</h1>
            <h3>Min: {city.temp_min}&deg;C | Max: {city.temp_max}&deg;C</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
