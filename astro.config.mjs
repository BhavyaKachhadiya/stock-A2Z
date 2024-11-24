import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
					  { label: 'What is Stock Market?', link: '/introduction/what-is-stock-market' },
					  { label: 'How It Works?', link: '/introduction/how-it-works' },
					  { label: 'Why Invest in the Stock Market?', link: '/introduction/why-invest' },
					  { label: 'Common Terminologies', link: '/introduction/common-terminologies' },
					  { label: 'Risks and Rewards', link: '/introduction/risks-and-rewards' },
					],
				  },
				  {
					label: 'Stock',
					items: [
					  { label: 'What is Stock?', link: '/stock/what-is-stock' },
					  { label: 'Fundamental Analysis', link: '/stock/fundamental-analysis' },
					  { label: 'Technical Analysis', link: '/stock/technical-analysis' },
					  { label: 'How to Buy and Sell Stocks', link: '/stock/how-to-buy-sell' },
					  { label: 'Common Mistakes to Avoid', link: '/stock/common-mistakes' },
					],
				  },
				  {
					label: 'Mutual Funds (MF)',
					items: [
					  { label: 'What is a Mutual Fund?', link: '/mf/what-is-mutual-fund' },
					  { label: 'Types of Mutual Funds', link: '/mf/types-of-mutual-funds' },
					  { label: 'How to Invest in Mutual Funds?', link: '/mf/how-to-invest' },
					  { label: 'Benefits and Risks', link: '/mf/benefits-and-risks' },
					],
				  },
				  {
					label: 'Exchange-Traded Funds (ETFs)',
					items: [
					  { label: 'What is an ETF?', link: '/etf/what-is-etf' },
					  { label: 'Difference Between ETFs and Mutual Funds', link: '/etf/difference-etf-mf' },
					  { label: 'How to Trade ETFs?', link: '/etf/how-to-trade' },
					  { label: 'Popular ETFs to Consider', link: '/etf/popular-etfs' },
					],
				  },
				  {
					label: 'Initial Public Offerings (IPOs)',
					items: [
					  { label: 'What is an IPO?', link: '/ipo/what-is-ipo' },
					  { label: 'How to Apply for an IPO?', link: '/ipo/how-to-apply' },
					  { label: 'IPO Success Stories', link: '/ipo/success-stories' },
					  { label: 'Risks in IPO Investing', link: '/ipo/risks-in-ipo' },
					],
				  },
				  {
					label: 'Advanced Topics',
					items: [
					  { label: 'Derivatives and Options', link: '/advanced/derivatives-options' },
					  { label: 'Short Selling Explained', link: '/advanced/short-selling' },
					  { label: 'Portfolio Diversification', link: '/advanced/portfolio-diversification' },
					  { label: 'Behavioral Finance', link: '/advanced/behavioral-finance' },
					],
				  },
				  {
					label: 'Resources',
					items: [
					  { label: 'Stock Market Tools', link: '/resources/tools' },
					  { label: 'Books and Courses', link: '/resources/books-courses' },
					  { label: 'News and Updates', link: '/resources/news-updates' },
					],
				  },
			],
		}),
	],
});
