import axios from 'axios';
import * as config from '../config/servicesConfig';
import mock from '../mocks/coindata';

const COIN_ENDPOINT = '/v1/cryptocurrency/listings/latest';
const PARAMS = `?start=1&limit=200&convert=USD&sort=market_cap&aux=cmc_rank&CMC_PRO_API_KEY=${config.CMC_API_KEY}`;

export class CoinService {

  async fetchCoinData() {
    const url = `${config.CMC_DOMAIN}${COIN_ENDPOINT}${PARAMS}`;
    const response = await axios.get(url)

    return responseTrasformer(response.data)
  }

  fetchMock() {
    return responseTrasformer(mock.data)
  }
};

const responseTrasformer = (data) => {
  const coinData = new Map()

  for (const item of data) {
    coinData.set(item.symbol, item.quote.USD.price)
  }

  return coinData
}
