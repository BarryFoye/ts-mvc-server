import { AxiosResponse } from 'axios';
import MarketDataController from './market_data';

describe('market_data', () => {
	describe('coin', () => {
		test('data service response is 200 OK', async () => {
			const controller = new MarketDataController();
			const response: AxiosResponse = await controller.getWeeklySnapshots();
			expect(response.status).toBe(200);
		});
	});
	describe('tree_map', () => {
		test('data service response is 200 OK', async () => {
			const controller = new MarketDataController();
			const response: AxiosResponse = await controller.dataTree();
			expect(response.status).toBe(200);
		});
	});
});
