import axios, { AxiosResponse } from 'axios';
import { Get, Route, Tags } from 'tsoa';
import { Coin } from '../@types/app';

/** TODO: this should be done at root through a config */
const url = process.env.DATA_SERVICE_HOST || 'localhost';
@Route('market_data/')
@Tags('MarketData')
export default class MarketDataController {
	@Get('/coin')
	public async getWeeklySnapshots(): Promise<AxiosResponse> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${url}:3100/v1/market_data/coin`);
		return result;
	}

	@Get('/tree_map')
	public async dataTree(): Promise<AxiosResponse> {
		// get last 2 weekly snapshots
		let result: AxiosResponse = await axios.get(`http://${url}:3100/v1/market_data/tree_map`);
		return result;
	}
}
