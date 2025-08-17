export interface CategoryItem {
  id: string;
  name: string;
  description: string;
}

export interface CategoryApiResponse {
  metadata: {
    count: number;
    source: string;
  };
  data: CategoryItem[];
}

export async function fetchCategories(): Promise<CategoryApiResponse> {
  // Giả lập category NFT
  const categories: CategoryItem[] = [
    {
      id: "solana",
      name: "Solana",
      description: "Digital and generative artworks",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      description: "NFTs for audio and tracks",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      description: "Rare items and memes",
    },
    {
      id: "monero",
      name: "Monero",
      description: "Sports moments and trading cards",
    },
    {
      id: "fantom",
      name: "Fantom",
      description: "Sports moments and trading cards",
    },
    {
      id: "ripple",
      name: "Ripple",
      description: "Sports moments and trading cards",
    },
    {
      id: "tether",
      name: "Tether",
      description: "Sports moments and trading cards",
    },
    {
      id: "polygon",
      name: "Polygon",
      description: "Sports moments and trading cards",
    },
  ];

  return {
    metadata: {
      count: categories.length,
      source: "mock-nft-api",
    },
    data: categories,
  };
}

export interface CollectionItem {
  id: string;
  name: string;
  image: string;
  floorPrice: number;
  volume: number;
  categoryId: string; // mapping về category
  // Các trường bổ sung từ data
  rank: number;
  topOffer: string;
  change: number;
  sales: number;
  listed: string;
  listedDetail: string;
  chart: "green" | "red"; // nếu chỉ có 2 trạng thái
}

export interface CollectionApiResponse {
  metadata: {
    count: number;
    source: string;
    categoryId: string;
  };
  data: CollectionItem[];
}

export async function fetchCollectionsByCategory(
  categoryId: string
): Promise<CollectionApiResponse> {
  // Mock data giả lập
  const allCollections: CollectionItem[] = [
    {
      id: "cpunks",
      name: "CryptoPunks",
      image: "/assets/images/avatars/avatar_1.avif",
      floorPrice: 45.2,
      volume: 8500,
      categoryId: "solana",
      rank: 1,
      topOffer: "17K MON",
      change: 66.7,
      sales: 21,
      listed: "1%",
      listedDetail: "10 / 1,000",
      chart: "green",
    },
    {
      id: "soundxyz",
      name: "SoundXYZ",
      image: "/assets/images/avatars/avatar_2.avif",
      floorPrice: 0.12,
      volume: 230,
      categoryId: "bitcoin",
      rank: 2,
      topOffer: "723 MON",
      change: 35.9,
      sales: 326,
      listed: "0%",
      listedDetail: "0 / 3,333",
      chart: "green",
    },
    {
      id: "axie",
      name: "Axie Infinity",
      image: "/assets/images/avatars/avatar_3.avif",
      floorPrice: 3.2,
      volume: 4200,
      categoryId: "gaming",
      rank: 3,
      topOffer: "12K MON",
      change: 100,
      sales: 6,
      listed: "0%",
      listedDetail: "0 / 333",
      chart: "green",
    },
    {
      id: "sorare",
      name: "Sorare",
      image: "/assets/images/avatars/avatar_4.avif",
      floorPrice: 0.8,
      volume: 1900,
      categoryId: "monero",
      rank: 4,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
    {
      id: "rarepepe",
      name: "Rare Pepe",
      image: "/assets/images/avatars/avatar_5.webp",
      floorPrice: 2.1,
      volume: 750,
      categoryId: "ethereum",
      rank: 5,
      topOffer: "3.7K MON",
      change: -10,
      sales: 29,
      listed: "0%",
      listedDetail: "0 / 555",
      chart: "red",
    },
    {
      id: "boredapes",
      name: "Bored Apes",
      image: "/assets/images/avatars/avatar_6.webp",
      floorPrice: 80,
      volume: 12000,
      categoryId: "fantom",
      rank: 6,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
    {
      id: "hashmask",
      name: "Hashmask",
      image: "/assets/images/avatars/avatar_7.avif",
      floorPrice: 5.5,
      volume: 2100,
      categoryId: "ripple",
      rank: 7,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
    {
      id: "decentraland",
      name: "Decentraland",
      image: "/assets/images/avatars/avatar_8.avif",
      floorPrice: 1.3,
      volume: 900,
      categoryId: "tether",
      rank: 8,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
    {
      id: "sandbox",
      name: "Sandbox",
      image: "/assets/images/avatars/avatar_9.avif",
      floorPrice: 2.8,
      volume: 1600,
      categoryId: "polygon",
      rank: 9,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
    {
      id: "musicnfts",
      name: "MusicNFTs",
      image: "/assets/images/avatars/avatar_10.avif",
      floorPrice: 0.05,
      volume: 500,
      categoryId: "bitcoin",
      rank: 10,
      topOffer: "N/A",
      change: 0,
      sales: 0,
      listed: "0%",
      listedDetail: "0 / 0",
      chart: "green",
    },
  ];

  const filtered =
    categoryId === "all"
      ? allCollections
      : allCollections.filter((c) => c.categoryId === categoryId);

  return {
    metadata: {
      count: filtered.length,
      source: "mock-nft-api",
      categoryId,
    },
    data: filtered,
  };
}
