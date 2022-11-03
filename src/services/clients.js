const BASE_URL = process.env.REACT_APP_WYER_SERVER;

export async function getClients() {
  try {
    const response = await fetch(`${BASE_URL}/api/clients`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
