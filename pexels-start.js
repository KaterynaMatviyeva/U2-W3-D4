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

// const btnHide = document.getElementById("btnHide");
// btnHide.forEach((btn) => {
//   btn.innerText = "Hide";
// });

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  if (btn.innerText === "Edit") {
    btn.innerText = "Hide";
  }
  //   btn.addEventListener("click", function (e) {
  //     e.target.closest(".col").classList.add("d-none");
  //   });
});

const fromMinToId = function (datas) {
  const mins = document.querySelectorAll("small");
  mins.forEach((min, i) => {
    min.innerText = datas.photos[i].id;
  });
};
