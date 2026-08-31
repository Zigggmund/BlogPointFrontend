import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Pokemon {
  name: string;
}

const PORTION_OF_ITEMS = 4;

export function InfiniteScroll() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const { isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ['pokemons', offset] as const,
    queryFn: async (): Promise<Pokemon[]> => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${PORTION_OF_ITEMS}&offset=${offset}`
      );
      const data = await res.json();
      return data.results as Pokemon[];
    },
    onSuccess: (fetchedPokemons: Pokemon[]) => {
      setPokemons((prev) => [...prev, ...fetchedPokemons]);
    },
    keepPreviousData: true,
  });
}
