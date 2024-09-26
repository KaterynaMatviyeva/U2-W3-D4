//tsQ16iW9TbYplJCZ4Op6TOchvVRCYgvEgZ06eSziAxoLyNNkpXQxVKbC (apiKey)
//

const urlImg = "https://api.pexels.com/v1/search?query=";

const getImgs = function (qualebottonehopremuto) {
  const urlDaUsare = urlImg + qualebottonehopremuto;
  fetch(urlDaUsare, {
    headers: {
      Authorization: "tsQ16iW9TbYplJCZ4Op6TOchvVRCYgvEgZ06eSziAxoLyNNkpXQxVKbC",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella risposta");
      }
    })
    .then((datas) => {
      console.log(datas);
      const imgs = document.querySelectorAll(".card > img");
      imgs.forEach((img, i) => {
        img.src = datas.photos[i].src.medium;
      });

      fromMinToId(datas);
    })
    .catch((err) => {
      console.log("errore", err);
    });
};

const btns = document.querySelectorAll(".btn-group button:last-of-type");

btns.forEach((btn) => {
  btn.innerText = "Hide";

  btn.addEventListener("click", () => {
    btn.closest(".col-md-4").classList.add("d-none");
  });
});

const fromMinToId = function (datas) {
  const mins = document.querySelectorAll("small");
  mins.forEach((min, i) => {
    min.innerText = datas.photos[i].id;
  });
};

const form = document.getElementById("custom-search").addEventListener("submit", (e) => {
  e.preventDefault();
  const customQuery = document.getElementById("custom-search-input").value;
  getImgs(customQuery);
});

//barra searh fai la funzione e invoca ()=>getImgs("tigers")
