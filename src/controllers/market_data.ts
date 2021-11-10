import axios, { AxiosResponse } from 'axios';
import { Get, Route, Tags } from 'tsoa';
import { Coin } from '../@types/app';

@Route('market_data')
@Tags('MarketData')
export default class MarketDataController {
	@Get('/coin')
	public async getWeeklySnapshots(): Promise<Coin> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${process.env.DB_HOST}:3100/v1/market_data/coin`);
		return result.data;
	}

	@Get('/tree_map')
	public async dataTree(): Promise<Coin> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${process.env.DB_HOST}/v1/market_data/tree_map`);
		return result.data;
	}
}
