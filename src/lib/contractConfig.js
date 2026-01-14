// Configuration des différents types de contrats

export const CONTRACT_TYPES = {
	default: {
		name: 'Standard',
		retainer: 12.5,
		monthlyCapPosts: 60,
		monthlyRetainerMax: 750, // 60 * 12.5
		cpm: 0.60,
		capPerVideo: 200,
		viewThreshold: 10000, // First 10k views not eligible
		crossPost: {
			enabled: true,
			platform: 'Instagram',
			cpm: 0.60,
			capPerVideo: 200,
			totalUploadsPerMonth: 120, // 60 TikTok + 60 Instagram
			viewThreshold: 0, // All views count on Instagram
		},
		paymentText: 'The Advertiser pays the Creator $12.5 per video, with a monthly cap of 60 posts, meaning the monthly retainer can go up to $750. There\'s a $0.60 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram and earn a $0.60 CPM capped at $200 per video, allowing up to 120 uploads per month. Every views under the $200 cap are eligible on Instagram. The $12.5 retainer applies only to TikTok.',
	},
	lite: {
		name: 'Lite',
		retainer: 5,
		monthlyCapPosts: 60,
		monthlyRetainerMax: 300, // 60 * 5
		cpm: 0.70,
		capPerVideo: 200,
		viewThreshold: 10000,
		crossPost: {
			enabled: true,
			platform: 'Instagram',
			cpm: 0.70,
			capPerVideo: 200,
			totalUploadsPerMonth: 120,
			viewThreshold: 0,
		},
		paymentText: 'The Advertiser pays the Creator $5 per video, with a monthly cap of 60 posts, meaning the monthly retainer can go up to $300. There\'s a $0.70 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram and earn a $0.70 CPM capped at $200 per video, allowing up to 120 uploads per month. Every views under the $200 cap are eligible on Instagram. The $5 retainer applies only to TikTok.',
	},
	pro: {
		name: 'Pro',
		retainer: 0, // No retainer
		monthlyCapPosts: null, // No cap on posts
		monthlyRetainerMax: 0,
		cpm: 1.00,
		capPerVideo: 150,
		viewThreshold: 0, // All views count
		crossPost: {
			enabled: true,
			platform: 'Instagram',
			cpm: 1.00,
			capPerVideo: 150,
			totalUploadsPerMonth: null, // No limit
			viewThreshold: 0,
		},
		paymentText: 'The Advertiser pays the Creator based on performance only (no retainer). There\'s a $1.00 CPM on every 1,000 views generated, capped at $150 per video. All views are eligible for the CPM from the first view. The creator may cross-post the same video on Instagram and earn a $1.00 CPM capped at $150 per video.',
	},
}

export function getContractConfig(type = 'default') {
	return CONTRACT_TYPES[type] || CONTRACT_TYPES.default
}
