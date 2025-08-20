export interface Token {
  name: string;
  symbol: string;
  logo: string;
  price?: number;
  change24h?: number;
  mcap?: string;
  volume24h?: string;
}
