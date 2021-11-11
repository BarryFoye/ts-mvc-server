import axios, { AxiosResponse } from 'axios';
import { Get, Route, Tags } from 'tsoa';
import { Coin } from '../@types/app';

const url = process.env.DB_HOST || 'localhost'; // TODO: this should be done at root through a config
@Route('market_data')
@Tags('MarketData')
export default class MarketDataController {
	@Get('/coin')
	public async getWeeklySnapshots(): Promise<Coin> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${url}:3100/v1/market_data/coin`);
		return result.data;
	}

	@Get('/tree_map')
	public async dataTree(): Promise<unknown> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${url}:3100/v1/market_data/tree_map`);
		return result.data;
	}
}
