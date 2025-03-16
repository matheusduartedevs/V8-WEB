import mockData from "@/data.json";

const apiUrl = import.meta.env.VITE_CONNECTION_STRING;
const isDevMode = import.meta.env.VITE_MODE;

export default class CarsService {
  async getCars() {
    try {
      if (isDevMode === 'development') {
        return mockData;
      } else {
        const response = await fetch(`${apiUrl}/cars`);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição HTTP! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Erro ao obter os carros:', error);
      throw error;
    }
  }

  async getCarById(id: number) {
    try {
      if (isDevMode) {
        return mockData.find(car => car.car_id === id);
      } else {
        const response = await fetch(`${apiUrl}/car/${id}`);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição HTTP! Status: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Erro ao obter informações sobre o carro:', error);
      throw error;
    }
  }
}