type Listing = {
  id: string;
  title: string;
  priceAED: number;
  buaSqft: number;
  plotSqft: number;
  beds: number;
  baths: number;
  image: string;
  location: string;
};

const DATA: Listing[] = [
  {
    id: "selvara-3-401",
    title: "Selvara 3 — Type A (4BR Villa)",
    priceAED: 6490000,
    buaSqft: 3805,
    plotSqft: 3718,
    beds: 4,
    baths: 5,
    location: "Grand Polo Club & Resort, Dubai South",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1880&auto=format&fit=crop"
  },
  {
    id: "selvara-3-402",
    title: "Selvara 3 — Type B Corner (4BR Villa)",
    priceAED: 6990000,
    buaSqft: 3920,
    plotSqft: 4100,
    beds: 4,
    baths: 5,
    location: "Grand Polo Club & Resort, Dubai South",
    image: "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1880&auto=format&fit=crop"
  },
  {
    id: "selvara-3-403",
    title: "Selvara 3 — Park Facing (4BR Villa)",
    priceAED: 7350000,
    buaSqft: 3890,
    plotSqft: 4300,
    beds: 4,
    baths: 5,
    location: "Grand Polo Club & Resort, Dubai South",
    image: "https://images.unsplash.com/photo-1551927411-95e412943b56?q=80&w=1880&auto=format&fit=crop"
  }
];

export async function getListings(): Promise<Listing[]> {
  return DATA;
}

export async function listListings(): Promise<Listing[]> {
  return DATA;
}
