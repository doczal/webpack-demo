export default (text = "Webpack.1 Demo") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};