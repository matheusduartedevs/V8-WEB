export const formatTransmission = (transmission: string) => {
  return transmission === 'manual' ? 'Manual' : 'Automático';
}

export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
