let url = "";
const input = document.querySelector("input");
const search = document.querySelector(".search");
const img = document.querySelector("img");
const another = document.querySelector(".another");

input.addEventListener("input", () => {
    search.classList.add("show");
});

const fetchGif = (url) => {
    const loadingImg = "https://bit.ly/3CZXt32";

    another.classList.remove("show");

    img.classList.add("show");
    img.src = loadingImg;
    img.alt = "Loading";

    fetch(url, {
        mode: "cors",
    })
        .then((res) => res.json())
        .then((json) => {
            img.src = json.data.images.original.url;
            img.alt = json.data.id;
            another.classList.add("show");
        })
        .catch((err) => {
            throw new Error(err);
        });
};

search.addEventListener("click", () => {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=key&s=${input.value}`;
    input.value = "";
    search.classList.remove("show");

    fetchGif(url);
});
another.addEventListener("click", () => fetchGif(url));
