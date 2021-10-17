import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import { MarketData } from '../@types/app';

interface MktData {
	data: MarketData;
}

const getWeeklySnapshots = async (req: Request, res: Response, next: NextFunction) => {
	// get all weekly snapshots
	let result: AxiosResponse = await axios.get(`http://localhost:3100/market_data`);
	let snapshots: [MktData] = result.data['message'];
	return res.status(200).json({
		message: snapshots
	});
};

export default { getWeeklySnapshots };
