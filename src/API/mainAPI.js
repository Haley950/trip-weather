import axios from 'axios';

export async function getListData(serviceKey) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/TourStnInfoService/getCityTourClmIdx?serviceKey=${serviceKey}&pageNo=1&numOfRows=20&CURRENT_DATE=20220701&DAY=7&CITY_AREA_ID=5013000000&dataType=json`,
    });
    return response.data.response.body;
  } catch (error) {
    console.log('error', error.response.data);
    return error.response;
  }
}