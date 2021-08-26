// https://dog.ceo/api/breeds/image/random

const btn = document.querySelector(".btn");
const bored = "https://apis.scrimba.com/bored/api/activity";

function getActivity() {
  fetch(bored)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.querySelector(".random-idea").textContent = data.activity)
    );
}

btn.addEventListener("click", getActivity);
