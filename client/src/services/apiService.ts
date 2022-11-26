type allPostcards = { text: string; _id: string }[];

export const addPostcard = async (
  text: string
): Promise<allPostcards | void> => {
  try {
    const response = await fetch(process.env.API_URL! + `postcards`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ text }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const deletePostcard = async (
  id: string
): Promise<allPostcards | void> => {
  try {
    const response = await fetch(process.env.API_URL + `postcards/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getAllPostcards = async (): Promise<allPostcards | void> => {
  try {
    const response = await fetch(process.env.API_URL + `postcards`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const updatePostcard = async (
  id: string,
  text: string
): Promise<allPostcards | void> => {
  try {
    const response = await fetch(process.env.API_URL + `postcards/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ text }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
