export default async function translate(text) {
  try {
    const response = await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-rapidapi-key":
            "74be8927b9mshfcd464b86b6d2e7p19f38ajsn6118920bca48",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "pt-br",
        }),
      }
    );
    const responseJson = await response.json();
  } catch (error) {
    console.error(error);
  }
}
