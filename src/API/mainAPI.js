import axios from 'axios';


//https://cors-anywhere.herokuapp.com/
export async function getListData(serviceKey, cityId) {
  try {
    const response = await axios({
      method: 'get',
      url: `http://apis.data.go.kr/1360000/TourStnInfoService/getCityTourClmIdx?serviceKey=${serviceKey}&pageNo=1&numOfRows=100&CURRENT_DATE=20220711&DAY=7&CITY_AREA_ID=${cityId}&dataType=json`,
    });
    return response.data.response.body;
  } catch (error) {
    console.log('error', error.response.data);
    return error.response;
  }
}