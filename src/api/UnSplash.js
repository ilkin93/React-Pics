import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID pjzMzr8kPcLDXXsTuFlkYwawZZKT0QS8y-eMtOnP_Sg",
      },
})