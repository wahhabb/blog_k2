const url = "https://icanhazdadjoke.com/";
export async function load() {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Learning exercise, wahhabb@gmail.com", // Use your email
    },
  });
  const joke = await response.json();
  if (joke) {
    return {
      joke,
    };
  }
  return {
    status: 404,
  };
}
