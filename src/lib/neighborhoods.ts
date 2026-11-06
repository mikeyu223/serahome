export type Neighborhood = {
  slug: string;
  name: string;
  region: string;
  headline: string;
  blurb: string;
  focus: string[];
  searchPhrase: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "berkeley-hills",
    name: "Berkeley Hills",
    region: "Berkeley",
    headline: "Plant-based estate cleaning for Berkeley Hills homes.",
    blurb:
      "From hillside mid-centuries to glass-walled renovations—SeraHome brings the same cleaner, nothing missed, and a re-clean guarantee to Berkeley Hills.",
    focus: [
      "Dust-prone hillside interiors & large windows",
      "Hardwood, tile, and soft-surface care",
      "Quiet, respectful visits for work-from-home households",
    ],
    searchPhrase: "house cleaning Berkeley Hills",
  },
  {
    slug: "piedmont",
    name: "Piedmont",
    region: "Piedmont",
    headline: "Discreet, high-touch cleaning for Piedmont estates.",
    blurb:
      "Piedmont homes deserve curation, not a rushed crew. We tailor flat quotes after a short assessment—then hold your date with a card on file.",
    focus: [
      "Larger floor plans & formal living spaces",
      "Consistent specialist for recurring maintenance",
      "48-hour flexible skip/reschedule policy",
    ],
    searchPhrase: "Piedmont house cleaning service",
  },
  {
    slug: "rockridge",
    name: "Rockridge",
    region: "Oakland",
    headline: "Calm, reliable cleans for Rockridge Craftsman homes.",
    blurb:
      "Rockridge’s bungalows and brown-shingles need careful product choices. We default to plant-based formulas and a clear checklist every visit.",
    focus: [
      "Built-ins, wood trim, and lived-in kitchens",
      "Biweekly or weekly maintenance plans",
      "Same cleaner whenever staffing allows",
    ],
    searchPhrase: "Rockridge Oakland house cleaning",
  },
  {
    slug: "oakland-hills",
    name: "Oakland Hills",
    region: "Oakland",
    headline: "Estate resets for Oakland Hills views and volume.",
    blurb:
      "More rooms, more glass, more dust from open windows—Oakland Hills homes benefit from a specialist who already knows the layout.",
    focus: [
      "Multi-level homes & open-plan living",
      "Deep cleans before hosting or travel",
      "Founding client rates while spots remain",
    ],
    searchPhrase: "Oakland Hills house cleaning",
  },
  {
    slug: "north-berkeley",
    name: "North Berkeley",
    region: "Berkeley",
    headline: "North Berkeley cleaning that respects a calm home.",
    blurb:
      "Whether you’re near the Gourmet Ghetto or farther into residential blocks, we keep visits predictable: consult first, flat quote, charge after the clean.",
    focus: [
      "Apartments, flats, and single-family homes",
      "Pet-friendly, plant-based product defaults",
      "Text-first coordination for busy schedules",
    ],
    searchPhrase: "North Berkeley house cleaning",
  },
  {
    slug: "alameda",
    name: "Alameda",
    region: "Alameda",
    headline: "Island-side home cleaning with boutique standards.",
    blurb:
      "Alameda Victorians and newer builds get the same high-touch process: assessment, card on file, 48-hour cancellation clarity, and a re-clean guarantee.",
    focus: [
      "Historic trim and modern finishes alike",
      "Move-in / move-out turnovers",
      "Recurring maintenance with easy skips",
    ],
    searchPhrase: "Alameda house cleaning",
  },
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
