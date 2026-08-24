export const useFetch = () => {
    const BASE_URL = 'http://localhost:8080/api/v1';
    
    const dataApi = async (endpoint, method = 'GET') => {
        try {
            if(method === 'GET'){
                const response = await fetch(`${BASE_URL}/${endpoint}`);
                const result = await response.json();
                return result;
            }

            if(method.toUpperCase() === 'DELETE'){
                const response = await fetch(`${BASE_URL}/${endpoint}`, {
                    method
                });
                const result = await response.json();
                return result;
            }

        } catch (error) {
            console.log(`Se presento un error inesperado: ${error}`);
        }
    }

    return [dataApi];
}