export const roomOptions = {
  standard: { label: 'Standard room', rate: 3500, capacity: 2 },
  garden: { label: 'Garden room', rate: 4000, capacity: 4 },
  family: { label: 'Family room', rate: 6000, capacity: 4 },
  villa: { label: 'Two-bedroom villa', rate: 6000, capacity: 8 },
};

export function calculateEstimate({ checkIn, checkOut, guests, room }) {
  const start = new Date(`${checkIn}T12:00:00`);
  const end = new Date(`${checkOut}T12:00:00`);
  const nights = Math.round((end - start) / 86400000);
  const option = roomOptions[room];

  if (!option || !Number.isFinite(nights) || nights < 1) return null;

  const extraGuests = Math.max(0, Number(guests) - option.capacity);
  return { nights, extraGuests, total: nights * option.rate + extraGuests * 1000 };
}

