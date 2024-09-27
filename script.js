fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network error");
    }
    return res.json();
  })
  .then((json) => {
    console.log(json); 
    createGadgets(json);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

let box = document.querySelector(".boxes");

function createGadgets(devices) {
  devices.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("card");

    let img = document.createElement("img");
    img.src = element.image; 
    img.alt = element.name; 

    img.onerror = () => {
      console.error("Failed to load image:", img.src);
    };

    let h1 = document.createElement("h1");
    h1.textContent = element.name;

    let h2 = document.createElement("h2");
    h2.textContent = `Price: ${element.price}`;

    let desc = document.createElement("p");
    desc.textContent = `Full Description: ${element.description}`;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(desc);

    box.appendChild(div);
  });
}
