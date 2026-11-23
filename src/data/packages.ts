// Data definitions for MasterHoster internet packages

export interface Package {
  /** Speed in megabits per second */
  speedMbps: number;
  /** Upload speed in megabits per second */
  uploadSpeedMbps: number;
  /** Monthly price in South African Rand */
  priceR: number;
  /** Optional badge label (e.g., "Popular", "Best Value", "Fast") */
  badge?: string;
  /** Indicates if the plan is uncapped */
  isUncapped: boolean;
  /** Line type: "Silver", "Gold", or "Platinum" */
  lineType: "Silver" | "Gold" | "Platinum";
}

// Silver line packages (consumer tier)
export const silverPackages: Package[] = [
  { speedMbps: 5, uploadSpeedMbps: 5, priceR: 450, isUncapped: true, lineType: "Silver" },
  { speedMbps: 10, uploadSpeedMbps: 10, priceR: 650, badge: "Popular", isUncapped: true, lineType: "Silver" },
  { speedMbps: 20, uploadSpeedMbps: 20, priceR: 850, badge: "Best Value", isUncapped: true, lineType: "Silver" },
  { speedMbps: 30, uploadSpeedMbps: 30, priceR: 1150, isUncapped: true, lineType: "Silver" },
  { speedMbps: 50, uploadSpeedMbps: 50, priceR: 1540, badge: "Fast", isUncapped: true, lineType: "Silver" },
];

// Gold line placeholder packages (business tier)
export const goldPackages: Package[] = [
  { speedMbps: 100, uploadSpeedMbps: 30, priceR: 2500, badge: "Popular", isUncapped: true, lineType: "Gold" },
  { speedMbps: 150, uploadSpeedMbps: 40, priceR: 3400, isUncapped: true, lineType: "Gold" },
];

// Platinum line placeholder packages (business tier)
export const platinumPackages: Package[] = [
  { speedMbps: 200, uploadSpeedMbps: 50, priceR: 4500, badge: "Best Value", isUncapped: true, lineType: "Platinum" },
  { speedMbps: 300, uploadSpeedMbps: 70, priceR: 6200, isUncapped: true, lineType: "Platinum" },
];

// Towns served by MasterHoster
export const townsServed: string[] = [
  "Balfour",
  "Greylingstad",
  "Grootvlei",
  "Vaal",
  "Nigel",
  "Heidelberg",
];