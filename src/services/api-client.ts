import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ff356b1965dd4dd39db85438155dc019',
  },
});
