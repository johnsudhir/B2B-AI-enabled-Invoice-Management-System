import axios from "axios";

export const getData = async () => {
  let response = await axios.get(
    "http://localhost:8080/highRadiusFinal/RecieveData" //?page=1
  );

  console.log(response.data);
  return response.data;
};

export const deleteData = async (ids) => {
  let response = await axios.get(
    "http://localhost:8080/highRadiusFinal/DeleteData?ids"
  );
};
