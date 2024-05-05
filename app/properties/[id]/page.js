'use client';

import { useParams, useSearchParams } from 'next/navigation';

export const PropertyIdPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      <h1>Page {params.id}</h1>
      <p>Params name: {name}</p>
    </div>
  );
};

export default PropertyIdPage;
