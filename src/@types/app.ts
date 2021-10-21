type Platform = {
	platformId: number;

	id: number;

	name: string;

	symbol: string;

	slug: string;

	tokenAddress: string;

	coins: Coin[];
};

type Coin = {
	coinId: number;

	id: number;

	name: string;

	symbol: string;

	slug: string;

	numMarketPairs: number | null;

	dateAdded: string;

	maxSupply: number | null;

	circulatingSupply: number;

	totalSupply: number;

	cmcRank: number;

	lastUpdated: string;

	rank: number;

	platform: Platform;

	coinTags: CoinTags[];

	quotes: Quotes[];
};

type CoinTags = {
	coinTagId: number;

	coin: Coin;

	tag: Tags;
};

type Quotes = {
	quotesId: number;

	currency: string;

	price: string;

	vol_24: string;

	pctChange_1h: string;

	pctChange_24h: string;

	pctChange_7d: string;

	marketCap: string;

	fullyDilutedMc: string | null;

	lastUpdated: string;

	coin: Coin;
};

type Tags = {
	tagId: number;

	tag: string;

	coinTags: CoinTags[];
};

export { Coin, Platform, CoinTags, Quotes, Tags };
