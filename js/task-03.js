const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const elemGallery = document.querySelector("ul");
console.log(elemGallery);
console.log(images);

const elementsImg = images
  .map(({ url, alt }) => {
    return `<li><img src = '${url}' alt = '${alt}' width="320" height="240"></li>`;
  })
  .join("");
console.log(elementsImg);

elemGallery.insertAdjacentHTML("afterbegin", elementsImg);

elemGallery.style.cssText = `display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  `;
