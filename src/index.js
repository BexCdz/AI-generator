function displayActivity(response) {
  console.log("Acitivity generated");
  new Typewriter("#activity", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    pauseFor: 100000000,
  });
}

function generateActivity(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3";
  let prompt = `Generate a list of activites for a city when the user inputs ${instructionsInput.value}`;
  let context =
    "You are a well-traveled expert with deep knowledge of global destinations. You specialize in creating fun, unique, and culturally rich activity suggestions for tourists. Your mission is to generate a list of three engaging activity ideas for travelers visiting a given city and only this. The user will only provide the name of a city. Provide them in basic HTML and separate the different activities with <br /> dont include ```HTML. Please give every request the same format.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating ideas...");

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayActivity);
}

let activityFormElement = document.querySelector("#activity-generator-form");
activityFormElement.addEventListener("submit", generateActivity);
