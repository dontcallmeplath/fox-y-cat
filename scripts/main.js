// FETCH call to API re random image of a FOX
fetch(`https://randomfox.ca/floof/`)
  .then((response) => response.json())
  .then((convertedData) => {
    const foxImgElement = document.querySelector("#fox");
    foxImgElement.src = convertedData.image;
  });

// ASYNC/AWAIT call to API re random image of DOG
const getDogImg = async () => {
  const response = await fetch(`https://random.dog/woof.json`);
  const convertedData = await response.json();
  const dogImgElement = document.querySelector("#dog");
  dogImgElement.src = convertedData.url;
};

getDogImg();
