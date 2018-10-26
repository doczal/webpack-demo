export default (text = "Webpack Demo") => {
  const element = document.createElement("div");
  element.innerHTML = text;

  return element;
};