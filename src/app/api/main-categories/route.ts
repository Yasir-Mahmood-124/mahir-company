import { NextResponse } from 'next/server';

const mainCategories = [
  {
    id: '1',
    slug: 'home-services',
    name: 'Home Services',
    image: '/images/handyman1.webp', // Ya phir CDN URL
    tag: null,
    chipLabel: null,
    order: 1,
  },
  {
    id: '2',
    slug: 'cleaning-services',
    name: 'Cleaning Services',
    image: '/images/cleaning1.webp',
    tag: null,
    chipLabel: null,
    order: 2,
  },
  {
    id: '3',
    slug: 'beautician',
    name: 'Personal Care',
    image: '/images/beautician1.png',
    tag: 'Females Only',
    chipLabel: null,
    order: 3,
  },
  {
    id: '4',
    slug: 'solar-services',
    name: 'Solar Installation Services',
    image: '/images/solar.webp',
    tag: null,
    chipLabel: null,
    order: 4,
  },
  {
    id: '5',
    slug: 'home-inspection',
    name: 'Home Inspection',
    image: '/images/home-inspection.webp',
    tag: null,
    chipLabel: 'New',
    order: 5,
  },
  {
    id: '6',
    slug: 'mbm',
    name: 'Maintained by UstadonCall',
    image: '/images/handyman1.webp',
    tag: null,
    chipLabel: 'New',
    order: 6,
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: mainCategories,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}