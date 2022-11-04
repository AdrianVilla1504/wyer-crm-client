const BASE_URL = process.env.REACT_APP_WYER_SERVER;

export async function getClients() {
  try {
    const response = await fetch(`${BASE_URL}/api/clients`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function createClients(clientForBody) {
  try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientForBody),
      };
      console.log("This is the body to send")
      console.table(clientForBody)
      const response = await fetch(`${BASE_URL}/api/clients/`, options);
      return response.json();

  }  catch (error) {
    return new Error(error);
  }
}
