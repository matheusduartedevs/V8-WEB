const apiUrl = import.meta.env.VITE_CONNECTION_STRING;

export default class CarsService {
  async getCars() {
    try {
      const response = await fetch(`${apiUrl}/cars`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter os carros:', error);
      throw error;
    }
  }

  async getCarById(id: number) {
    try {
      const response = await fetch(`${apiUrl}/car/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter informações sobre o carro:', error);
      throw error;
    }
  }
} 
