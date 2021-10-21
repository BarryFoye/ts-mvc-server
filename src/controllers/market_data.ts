import axios, { AxiosResponse } from 'axios';
import { Get, Route, Tags } from 'tsoa';
import { Coin } from '../@types/app';

@Route('market_data')
@Tags('MarketData')
export default class MarketDataController {
	@Get('/')
	public async getWeeklySnapshots(): Promise<Coin> {
		// get all weekly snapshots
		let result: AxiosResponse = await axios.get(`http://localhost:3100/market_data`);
		return result.data;
	}
}
