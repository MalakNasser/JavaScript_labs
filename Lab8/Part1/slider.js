const imgAr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
const imgs = document.getElementsByTagName("img");
const nextBtn = document.getElementsByClassName("next")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
let currentIndex = 0,
  prevIndex,
  nextIndex,
  intervalId;

function showImage(index) {
  if (index > 5) {
    index = currentIndex = 0;
  } else if (index < 0) {
    index = currentIndex = 5;
  }

  prevIndex = index - 1;
  nextIndex = index + 1;
  if (prevIndex < 0) {
    prevIndex = 5;
  } else if (nextIndex > 5) {
    nextIndex = 0;
  }

  imgs[0].src = "imgs/" + imgAr[prevIndex];
  imgs[1].src = "imgs/" + imgAr[nextIndex];
  imgs[2].src = "imgs/" + imgAr[index];

  let divNum = document.getElementsByClassName("bar")[0];
  Array.from(divNum.children).forEach((child, i) => {
    if (i === currentIndex) {
      child.style.backgroundColor = "grey";
    } else {
      child.style.backgroundColor = "";
    }
  });
}

function showImageAuto() {
  intervalId = setInterval(function () {
    showImage(++currentIndex);
  }, 3000);
}

nextBtn.addEventListener("click", function () {
  currentIndex++;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
  currentIndex--;
  showImage(currentIndex);
});

showImageAuto();
