let ownerName = "Esmhan Awadh"; // update the part BETWEEN the "quotes"
let userName = "Esmhan Awadh"; // same here

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
