export function parseSearchParams(searchParams: URLSearchParams): {
  priceRange: [number, number],
  rooms: string[],
  landArea: string[],
  residentialArea: string[],
  paymentForm: string[],
} {
  function parsePriceRange(val: string | null): [number, number] {
    if (!val) return [0, 80750000];
    if (val.endsWith('+')) {
      const from = Number(val.replace(/[^0-9]/g, '')) * 1000;
      return [from, 80750000];
    }
    if (val.includes('-')) {
      const [min, max] = val.split('-').map(v => Number(v.replace(/[^0-9]/g, '')) * 100000);
      return [min, max];
    }
    const num = Number(val.replace(/[^0-9]/g, '')) * 1000;
    return [num, num];
  }

  return {
    priceRange: parsePriceRange(searchParams.get('priceRange')),
    rooms: searchParams.getAll('rooms'),
    landArea: searchParams.getAll('landArea'),
    residentialArea: searchParams.getAll('residentialArea'),
    paymentForm: searchParams.getAll('paymentForm'),
  };
}