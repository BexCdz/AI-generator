function generateActivity(event) {
  event.preventDefault();

  new Typewriter("#activity", {
    strings: [
      "Eiffel Tower at Sunset - Go to the top for sweeping views, or stay below with a picnic and watch the lights twinkle every hour after dark.",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let activityFormElement = document.querySelector("#activity-generator-form");
activityFormElement.addEventListener("submit", generateActivity);
