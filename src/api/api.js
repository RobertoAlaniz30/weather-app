import axios from "axios";

function getData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  return axios.get(url);
}

export { getData };
