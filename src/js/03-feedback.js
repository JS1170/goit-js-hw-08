"use strick";
import throttle from "lodash.throttle";
import storageApi from "./storage.js";

const STORAGE_KEY = "feedback-form-state";

const formRef = document.querySelector(".feedback-form");

initPage();

const handleInput = (event) => {
  let savedValue = storageApi.load(STORAGE_KEY);

  if (savedValue === undefined) {
    savedValue = {};
  }
  const { name, value } = event.target;
  savedValue[name] = value;
  storageApi.save(STORAGE_KEY, savedValue);
  // console.log(userData);
};

formRef.addEventListener("input", throttle(handleInput, 500));

function initPage() {
  const savedValue = storageApi.load(STORAGE_KEY);

  if (savedValue === undefined) {
    return;
  }
  Object.entries(savedValue).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}


const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    // console.log(event.target.message);
    localStorage.removeItem(STORAGE_KEY);
   

}

formRef.addEventListener('submit', handleSubmit);


