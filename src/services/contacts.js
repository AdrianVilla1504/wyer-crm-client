const BASE_URL = process.env.REACT_APP_WYER_SERVER;

export async function getContacts() {
  try {
    const response = await fetch(`${BASE_URL}/api/contacts`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getContactById(id){
  try {
    const response = await fetch(`${BASE_URL}/api/contacts/${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function createContacts(contactForBody) {
  try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForBody),
      };
      const response = await fetch(`${BASE_URL}/api/contacts/`, options);
      return response.json();

  }  catch (error) {
    return new Error(error);
  }
}

export async function updateContact(contactForBody) {
  try {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForBody),
      };
      const response = await fetch(`${BASE_URL}/api/contacts/${contactForBody._id}`, options);
      return response.json({ response, message: 'Contact updated successfully' });

  }  catch (error) {
    return new Error(error);
  }
}

export async function deleteContact(id) {
  try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${BASE_URL}/api/contacts/${id}`, options);
      return response.json({ response, message: 'Contact deleted succesfully' });

  }  catch (error) {
    return new Error(error);
  }
}
