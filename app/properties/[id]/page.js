'use client';

import { useParams, useSearchParams, usePathname } from 'next/navigation';

export const PropertyIdPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const name = searchParams.get('name');

  return (
    <div>
      <h1>Page {params.id}</h1>
      <p>Params name: {name}</p>
      <h2>{pathName}</h2>
    </div>
  );
};

export default PropertyIdPage;
