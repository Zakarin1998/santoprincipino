import { useQuery } from 'react-query';
import { apiClient } from '../api/client';
import type { ChiaraData } from '../types';

export function useChiaraData() {
  return useQuery<ChiaraData, Error>('chiara', () => 
    apiClient.get('/chiara').then(res => res.data)
  );
}