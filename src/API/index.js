import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';

export const fetchDailyData = async () => {
    try {
      const response  = await axios.get(url);
      return response.data.statewise;
     } catch (error) {
      return error;
    }
  };