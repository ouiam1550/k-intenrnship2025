import axios from "axios";

// Add a new notebook
export const addNotebook = async (name) => {
  try {
    const response = await axios.post('https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notebooks', {
      title: name
    });
    return response.data; // Optionally return the created notebook
  } catch (err) {
    console.error("An API error has occurred while adding a notebook:", err);
    throw err; // Propagate the error if needed
  }
};

// Get the list of all notebooks
export const getNotebooks = async () => {
  try {
    const response = await axios.get('https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notebooks');
    return response.data.sort((a,b) => a.title.localeCompare(b.title)); // Returns an array of notebooks
  } catch (err) {
    console.error("An API error has occurred while fetching notebooks:", err);
    return []; // Return an empty array as a fallback
  }
};

// Delete a notebook
export const deleteNotebook = async (id) => {
  try {
    axios.delete(`https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notebooks/${id}`);
    return getNotebooks()
  } catch (err) {
    console.error("An API error has occurred while deleting a notebook:", err);
  }
};

// Add a new note to a notebook
export const addNote = async (notebookId, title, content) => {
  try {
    const response = await axios.post(`https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notebooks/${notebookId}/notes`, {
      title: title,
      content: content
    });
    return response.data; // Optionally return the created note
  } catch (err) {
    console.error("An API error has occurred while adding a note:", err);
    throw err;
  }
};

// Get the list of notes for a specific notebook
export const getNotes = async (notebookId) => {
  try {
    const response = await axios.get(`https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notebooks/${notebookId}/notes`);
    return response.data; // Assumes notes are under the 'notes' field in response
  } catch (err) {
    console.error("An API error has occurred while fetching notes:", err);
    return []; // Return an empty array as a fallback
  }
};

// Update an existing note
export const updateNote = async (id, title, content) => {
  try {
    const response = await axios.put(`https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notes/${id}`, {
      title: title,
      content: content
    });
    return response.data; // Optionally return the updated note
  } catch (err) {
    console.error("An API error has occurred while updating a note:", err);
    throw err;
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    await axios.delete(`https://ouiamhendor.sandsculptor.keiken-digital.io:8080/api/notes/${id}`);
  } catch (err) {
    console.error("An API error has occurred while deleting a note:", err);
  }
};
