export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "New Cruise Ship Sets Sail with Innovative Features",
    excerpt: "The latest vessel from Ocean Cruises introduces groundbreaking technology and amenities for passenger experiences. This new ship boasts eco-friendly propulsion, expanded suite options, and interactive entertainment systems, setting a new standard in the industry.",
    category: "OCEAN CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxO62XEy_mZfPIclFzOOheqCT0gUSAuJvyaU34hV_2qv10w_9PgOj07mDTvo-mUv3KzgNf8rp9_xPTVba3WYDANg1rb5oLExDrcLZp9EMXBTodvWR3YBHU79e0mFjKCosZbmP8dmL97Yj2IfJIa03_G_tSPJ1N5rIIZz8xlodSr-SMTFgbyrc-A5__2kxlPETtQsn2yEXYIWpX1Y-SCFmjzYr8RTai14z5t8x-S-H5FxFqaW5KP3fhb1MG-BMJ2twJkIJ_cfwak4",
    alt: "Large white cruise ship on the water",
    featured: true,
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Ocean Cruises Expands Itineraries",
    excerpt: "New itineraries for the upcoming season, featuring exotic destinations and extended stays in port.",
    category: "OCEAN CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_E6-I8uS2EHnXChyaqotwpvPx5TMniNvPwUhogqCLvYgZxQtjIJKWHkcKwn80Rw25BujHTbfeQ6oin4wzCyrF1Oflg7ysmND6coGYWVl85WzM-Fl2d4llJLF1yvt9veBR6oMxoCehG6VNr2bjtzvaVu6O4bsFz1Q0xiV6zzFackLBAYq0K5jv4SruKto12HSGkYT3KZ677K9NRz17B1c6PQxV1EU0NssRwOcXK2Bo_M52Zk3tmSEA-i4tbR04kfKZYVjHPViV30",
    alt: "Cruise ship sailing on turquoise water",
    date: "2024-01-14"
  },
  {
    id: 3,
    title: "Luxury Riverboats Debut",
    excerpt: "A new fleet of luxury riverboats, offering enhanced amenities and personalized service on European waterways.",
    category: "RIVER CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZLqOJxbGYcV0-po-aDkGQmOGVxlHtfTnq1E1tTIHwG9LWeRPglleOulvhpniO90pm0aIO8GnK6rx-4NNCBfZx6FkrWj5CGa9maEMcj1w4D1QJOudNS-Ut73BJBfHmimlds5DrSj__GmT5wDfWNOzJkSdYiW8IztQyJW_i8cDNr3TZ1iyMwVOrquh6dEze_TSswDbN6XuT1NoqMbTCHlXGvE0CVXO01T3qWmoCU2xJodvRZ1XuV7KU2ul4XcvdeCsffj6vxMekZs",
    alt: "Long river cruise boat on a calm river",
    date: "2024-01-13"
  },
  {
    id: 4,
    title: "Expedition Cruises Focus on Education",
    excerpt: "Partnerships with leading scientists to offer immersive educational experiences in remote regions.",
    category: "EXPEDITION CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR0TcVgMafUQUuFHeBOH1eefZXQhLwRIGgfbK6FXfH9EoVCModtJ17rb6FBu6G3SfVUG_IyDyZhUOnJQd4vIQXqYOO0xkiQEzSSS7SdsJ_bWvOG2MdGb5n1Iu7GUwKe84TjdyGd9_OyMLbRedFZeLyvIfK0rdBADKVvahvFRlOasVuqIKzhxGgP5Twef7hFPbjd5cshvEixklk7OylwUki1ROIwtf-9CeUDDKvfAHc8OwU3Mm01I5ox5VVoBDszHfObm6VtSg8FFc",
    alt: "White cruise ship against a blue sky with clouds",
    date: "2024-01-12"
  },
  {
    id: 5,
    title: "Culinary Innovations at Sea",
    excerpt: "Celebrity chefs are bringing new dining concepts to cruise ships, offering passengers a taste of world-class cuisine.",
    category: "ONBOARD EXPERIENCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp1QJfE12N9e3N3MkK6Fc9jM2OxwRaK62iHE5C-rOj7vDwY_PqqEodw0Rfxw1Xa-dj1zD0xsyAx_MEQltNwwA2h5nls5dIQ_hl-brp2sUZWAOs6reD94ybe7O_ftSrHh9-Ko0IOw20GZ9xCe8AFbmjAOS7chJAu-LxiNoyJv7b7xehNOcKoUxFOzzoUOL7lDirsXCtooJuJaUid0REZ_P3UvkxE4JPP60_xZmBUGpXvFox2NW9zpZ8n1WxAT6-VWqrMcbGk41cnT4",
    alt: "Elegant dining room on a cruise ship",
    date: "2024-01-11"
  },
  {
    id: 6,
    title: "Historic Ports of Call",
    excerpt: "Discover the charm of ancient European cities with new itineraries focused on cultural heritage sites.",
    category: "DESTINATIONS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbiIL2Ssji_MG343viLK4xdJ3UB4ohahtYU13HKdyNIjoPQHPjQ_E4pBWb8gjYq6z-LRCnyUbxmw4cX2WAoV-lhqkxovvXom1aa5uQizEDvUUXhBr5LyCKLe8_1_vb5NVGNJ9OZBmQRyj33ogxca1Vz7UV9oouJYrW5St_MCoGamAWstqgJsgn0tgh7-sxReQizWn-FcG0PINZHNDSU2L1u31VwUn8FTkst_A0aMf6Eexjpx8n9CyadQ2kORIXlLb2oU3M-LUjhHw",
    alt: "A castle on a cliff overlooking a river",
    date: "2024-01-10"
  },
  {
    id: 7,
    title: "Antarctic Adventures Await",
    excerpt: "New polar-class vessels are making it safer and more comfortable to explore the pristine landscapes of Antarctica.",
    category: "EXPEDITION CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApGGNZzpXyabt2Dt96irKtzHou0dQDBJ9-tFKuwro_4wk_y10gBLledHJyiFgEMd7JwOlXIBoKa9nrGRzEOrT55FDzwHPr3E4PWjEAvcZ1vYrI5UTNcKpG9pqLiDqwh_La02ilzyvQwEzTcP1PxbYrC7qJ6SKCkICdshdjdEwBHKsPIWnzm_k3g10dLYAPKE35KdqDLn7Q5SPKNQAuALZ4yybtmeYadq9d5KlLKY4Ca2PoWdB1Cdd_XwSKNbOj9CwtL01J-NFdHco",
    alt: "An expedition cruise ship in a polar region with icebergs",
    date: "2024-01-09"
  },
  {
    id: 8,
    title: "Sustainable Cruise Technology Advances",
    excerpt: "Major cruise lines are investing in cutting-edge green technology to reduce environmental impact and meet new regulations.",
    category: "OCEAN CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxO62XEy_mZfPIclFzOOheqCT0gUSAuJvyaU34hV_2qv10w_9PgOj07mDTvo-mUv3KzgNf8rp9_xPTVba3WYDANg1rb5oLExDrcLZp9EMXBTodvWR3YBHU79e0mFjKCosZbmP8dmL97Yj2IfJIa03_G_tSPJ1N5rIIZz8xlodSr-SMTFgbyrc-A5__2kxlPETtQsn2yEXYIWpX1Y-SCFmjzYr8RTai14z5t8x-S-H5FxFqaW5KP3fhb1MG-BMJ2twJkIJ_cfwak4",
    alt: "Modern eco-friendly cruise ship",
    date: "2024-01-08"
  },
  {
    id: 9,
    title: "Mediterranean Cruise Season Opens",
    excerpt: "The Mediterranean cruise season kicks off with new ports of call and extended shore excursions in historic cities.",
    category: "DESTINATIONS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_E6-I8uS2EHnXChyaqotwpvPx5TMniNvPwUhogqCLvYgZxQtjIJKWHkcKwn80Rw25BujHTbfeQ6oin4wzCyrF1Oflg7ysmND6coGYWVl85WzM-Fl2d4llJLF1yvt9veBR6oMxoCehG6VNr2bjtzvaVu6O4bsFz1Q0xiV6zzFackLBAYq0K5jv4SruKto12HSGkYT3KZ677K9NRz17B1c6PQxV1EU0NssRwOcXK2Bo_M52Zk3tmSEA-i4tbR04kfKZYVjHPViV30",
    alt: "Cruise ship in Mediterranean waters",
    date: "2024-01-07"
  },
  {
    id: 10,
    title: "River Cruise Wellness Programs",
    excerpt: "New wellness-focused river cruises offer yoga, meditation, and spa treatments while sailing through scenic waterways.",
    category: "RIVER CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZLqOJxbGYcV0-po-aDkGQmOGVxlHtfTnq1E1tTIHwG9LWeRPglleOulvhpniO90pm0aIO8GnK6rx-4NNCBfZx6FkrWj5CGa9maEMcj1w4D1QJOudNS-Ut73BJBfHmimlds5DrSj__GmT5wDfWNOzJkSdYiW8IztQyJW_i8cDNr3TZ1iyMwVOrquh6dEze_TSswDbN6XuT1NoqMbTCHlXGvE0CVXO01T3qWmoCU2xJodvRZ1XuV7KU2ul4XcvdeCsffj6vxMekZs",
    alt: "Peaceful river cruise with wellness activities",
    date: "2024-01-06"
  },
  {
    id: 11,
    title: "Arctic Expedition Routes Expand",
    excerpt: "New Arctic expedition routes offer passengers the chance to witness polar bears, northern lights, and pristine wilderness.",
    category: "EXPEDITION CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApGGNZzpXyabt2Dt96irKtzHou0dQDBJ9-tFKuwro_4wk_y10gBLledHJyiFgEMd7JwOlXIBoKa9nrGRzEOrT55FDzwHPr3E4PWjEAvcZ1vYrI5UTNcKpG9pqLiDqwh_La02ilzyvQwEzTcP1PxbYrC7qJ6SKCkICdshdjdEwBHKsPIWnzm_k3g10dLYAPKE35KdqDLn7Q5SPKNQAuALZ4yybtmeYadq9d5KlLKY4Ca2PoWdB1Cdd_XwSKNbOj9CwtL01J-NFdHco",
    alt: "Arctic expedition ship in icy waters",
    date: "2024-01-05"
  },
  {
    id: 12,
    title: "Family-Friendly Cruise Activities",
    excerpt: "Cruise lines are introducing more family-oriented activities and entertainment options for passengers of all ages.",
    category: "ONBOARD EXPERIENCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp1QJfE12N9e3N3MkK6Fc9jM2OxwRaK62iHE5C-rOj7vDwY_PqqEodw0Rfxw1Xa-dj1zD0xsyAx_MEQltNwwA2h5nls5dIQ_hl-brp2sUZWAOs6reD94ybe7O_ftSrHh9-Ko0IOw20GZ9xCe8AFbmjAOS7chJAu-LxiNoyJv7b7xehNOcKoUxFOzzoUOL7lDirsXCtooJuJaUid0REZ_P3UvkxE4JPP60_xZmBUGpXvFox2NW9zpZ8n1WxAT6-VWqrMcbGk41cnT4",
    alt: "Family enjoying activities on cruise ship",
    date: "2024-01-04"
  },
  {
    id: 13,
    title: "Caribbean Cruise Destinations",
    excerpt: "Explore the best Caribbean destinations with new cruise itineraries featuring pristine beaches and vibrant cultures.",
    category: "DESTINATIONS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_E6-I8uS2EHnXChyaqotwpvPx5TMniNvPwUhogqCLvYgZxQtjIJKWHkcKwn80Rw25BujHTbfeQ6oin4wzCyrF1Oflg7ysmND6coGYWVl85WzM-Fl2d4llJLF1yvt9veBR6oMxoCehG6VNr2bjtzvaVu6O4bsFz1Q0xiV6zzFackLBAYq0K5jv4SruKto12HSGkYT3KZ677K9NRz17B1c6PQxV1EU0NssRwOcXK2Bo_M52Zk3tmSEA-i4tbR04kfKZYVjHPViV30",
    alt: "Caribbean cruise ship at tropical port",
    date: "2024-01-03"
  },
  {
    id: 14,
    title: "Luxury Suite Upgrades",
    excerpt: "Premium cruise lines are enhancing their suite accommodations with private balconies, butler service, and exclusive amenities.",
    category: "OCEAN CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxO62XEy_mZfPIclFzOOheqCT0gUSAuJvyaU34hV_2qv10w_9PgOj07mDTvo-mUv3KzgNf8rp9_xPTVba3WYDANg1rb5oLExDrcLZp9EMXBTodvWR3YBHU79e0mFjKCosZbmP8dmL97Yj2IfJIa03_G_tSPJ1N5rIIZz8xlodSr-SMTFgbyrc-A5__2kxlPETtQsn2yEXYIWpX1Y-SCFmjzYr8RTai14z5t8x-S-H5FxFqaW5KP3fhb1MG-BMJ2twJkIJ_cfwak4",
    alt: "Luxury cruise ship suite",
    date: "2024-01-02"
  },
  {
    id: 15,
    title: "Danube River Cultural Tours",
    excerpt: "Experience the rich history and culture of Central Europe with guided tours along the beautiful Danube River.",
    category: "RIVER CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZLqOJxbGYcV0-po-aDkGQmOGVxlHtfTnq1E1tTIHwG9LWeRPglleOulvhpniO90pm0aIO8GnK6rx-4NNCBfZx6FkrWj5CGa9maEMcj1w4D1QJOudNS-Ut73BJBfHmimlds5DrSj__GmT5wDfWNOzJkSdYiW8IztQyJW_i8cDNr3TZ1iyMwVOrquh6dEze_TSswDbN6XuT1NoqMbTCHlXGvE0CVXO01T3qWmoCU2xJodvRZ1XuV7KU2ul4XcvdeCsffj6vxMekZs",
    alt: "Danube River cruise with historic cities",
    date: "2024-01-01"
  },
  {
    id: 16,
    title: "Alaska Wildlife Expeditions",
    excerpt: "Get up close with Alaska's incredible wildlife including whales, bears, and eagles on specialized expedition cruises.",
    category: "EXPEDITION CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApGGNZzpXyabt2Dt96irKtzHou0dQDBJ9-tFKuwro_4wk_y10gBLledHJyiFgEMd7JwOlXIBoKa9nrGRzEOrT55FDzwHPr3E4PWjEAvcZ1vYrI5UTNcKpG9pqLiDqwh_La02ilzyvQwEzTcP1PxbYrC7qJ6SKCkICdshdjdEwBHKsPIWnzm_k3g10dLYAPKE35KdqDLn7Q5SPKNQAuALZ4yybtmeYadq9d5KlLKY4Ca2PoWdB1Cdd_XwSKNbOj9CwtL01J-NFdHco",
    alt: "Alaska expedition cruise with wildlife",
    date: "2023-12-31"
  },
  {
    id: 17,
    title: "Entertainment Shows at Sea",
    excerpt: "Broadway-style productions and world-class entertainment are becoming standard features on modern cruise ships.",
    category: "ONBOARD EXPERIENCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp1QJfE12N9e3N3MkK6Fc9jM2OxwRaK62iHE5C-rOj7vDwY_PqqEodw0Rfxw1Xa-dj1zD0xsyAx_MEQltNwwA2h5nls5dIQ_hl-brp2sUZWAOs6reD94ybe7O_ftSrHh9-Ko0IOw20GZ9xCe8AFbmjAOS7chJAu-LxiNoyJv7b7xehNOcKoUxFOzzoUOL7lDirsXCtooJuJaUid0REZ_P3UvkxE4JPP60_xZmBUGpXvFox2NW9zpZ8n1WxAT6-VWqrMcbGk41cnT4",
    alt: "Cruise ship theater and entertainment",
    date: "2023-12-30"
  },
  {
    id: 18,
    title: "Norwegian Fjord Adventures",
    excerpt: "Discover the breathtaking beauty of Norwegian fjords with new cruise routes offering spectacular mountain and waterfall views.",
    category: "DESTINATIONS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbiIL2Ssji_MG343viLK4xdJ3UB4ohahtYU13HKdyNIjoPQHPjQ_E4pBWb8gjYq6z-LRCnyUbxmw4cX2WAoV-lhqkxovvXom1aa5uQizEDvUUXhBr5LyCKLe8_1_vb5NVGNJ9OZBmQRyj33ogxca1Vz7UV9oouJYrW5St_MCoGamAWstqgJsgn0tgh7-sxReQizWn-FcG0PINZHNDSU2L1u31VwUn8FTkst_A0aMf6Eexjpx8n9CyadQ2kORIXlLb2oU3M-LUjhHw",
    alt: "Cruise ship in Norwegian fjord",
    date: "2023-12-29"
  },
  {
    id: 19,
    title: "Technology Integration on Ships",
    excerpt: "Smart ship technology is revolutionizing the cruise experience with mobile apps, digital concierge services, and IoT connectivity.",
    category: "OCEAN CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxO62XEy_mZfPIclFzOOheqCT0gUSAuJvyaU34hV_2qv10w_9PgOj07mDTvo-mUv3KzgNf8rp9_xPTVba3WYDANg1rb5oLExDrcLZp9EMXBTodvWR3YBHU79e0mFjKCosZbmP8dmL97Yj2IfJIa03_G_tSPJ1N5rIIZz8xlodSr-SMTFgbyrc-A5__2kxlPETtQsn2yEXYIWpX1Y-SCFmjzYr8RTai14z5t8x-S-H5FxFqaW5KP3fhb1MG-BMJ2twJkIJ_cfwak4",
    alt: "Modern cruise ship with advanced technology",
    date: "2023-12-28"
  },
  {
    id: 20,
    title: "Rhine River Wine Tours",
    excerpt: "Sip your way through Europe's most famous wine regions on specialized Rhine River cruises featuring tastings and vineyard visits.",
    category: "RIVER CRUISES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZLqOJxbGYcV0-po-aDkGQmOGVxlHtfTnq1E1tTIHwG9LWeRPglleOulvhpniO90pm0aIO8GnK6rx-4NNCBfZx6FkrWj5CGa9maEMcj1w4D1QJOudNS-Ut73BJBfHmimlds5DrSj__GmT5wDfWNOzJkSdYiW8IztQyJW_i8cDNr3TZ1iyMwVOrquh6dEze_TSswDbN6XuT1NoqMbTCHlXGvE0CVXO01T3qWmoCU2xJodvRZ1XuV7KU2ul4XcvdeCsffj6vxMekZs",
    alt: "Rhine River cruise through wine country",
    date: "2023-12-27"
  }
];

export const categories = [
  "All",
  "OCEAN CRUISES", 
  "RIVER CRUISES",
  "EXPEDITION CRUISES",
  "ONBOARD EXPERIENCE",
  "DESTINATIONS"
];
