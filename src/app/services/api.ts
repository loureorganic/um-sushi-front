import { Product } from '@/app/models/product'

const BASE_URL = 'https://backend-ftbh.onrender.com';

export async function fetchMenu(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/menu`);
  if (!response.ok) {
    throw new Error('Erro ao buscar o menu');
  }
  return response.json();
}
