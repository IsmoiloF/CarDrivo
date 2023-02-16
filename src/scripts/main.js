// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const mode = document.querySelector(".mode");
const modeIcon = document.querySelector("#mode-icon");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Iconsun.svg");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/oy.svg");
}

//  Whenever the user explicitly chooses light mode

//  Whenever the user explicitly chooses dark mode
mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/oy.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Iconsun.svg");
  }
});


// ! --------------------- Modal window ---------------------------------------

const modalWindow = document.querySelector(".modal-window"),
  signUpBtn = document.querySelector(".loginbtn"),
  modalContent = document.querySelector(".modal-content"),
  closeBtn = document.querySelector(".close-btn");

signUpBtn.addEventListener("click", (e) => {
  modalWindow.classList.remove("hidden");
});
closeBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    modalContent.classList.toggle("shaker");
  }
});








//------------------ swiper js------------------

// !--slider-------------------
const swiperWrap = document.querySelector(".swiper-wrapper");
const pagin = document.querySelector(".pagin");
let contents = [
  {
    id: 1,
    title: "Compact cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/1.png",
  },
  {
    id: 2,
    title: "Sports cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/2.png",
  },
  {
    id: 3,
    title: "Vans ",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/3.png",
  },
  {
    id: 4,
    title: "O'zimizda",  
    info: "GM ni mahsuloti",
    img: "./images/jentra.jpeg",
  },
];

contents.forEach((val) => {
  const element = createElement(
    "div",
    "swiper-slide w-full h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300",
    `
  
  <div class="bg_linear w-full h-full pt-[60px] text-center">
  <h1
    class="font-semibold text-[36px] leading-[44px] text-center text-white"
  >
    ${val.title}
  </h1>
  <p
    class="font-normal w-[416px] text-[16px] leading-[20px] text-center text-white mx-auto mt-[10px]"
  >
   ${val.info}
  </p>
</div>
  `
  );
  const paginElem = createElement("div", "swiper-pagination", "");
  element.style.backgroundImage = `url('${val.img}')`;
  swiperWrap.append(element);
  pagin.append(paginElem);
});



// Comments 


const comments = [
  {
    id: 1,
    avatar: "./images/Ava.svg",
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
    comment: `Sagittis sed tortor, elementum vitae varius sodales
    consectetur. Vitae arcu ut morbi bibendum ullamcorper
    feugiat. Venenatis hendrerit cursus egestas sit ornare nunc
    vulputate aliquam sapien. Pulvinar nunc consectetur nibh
    consectetur mollis mauris est mauris amet. Sed hac vehicula
    id et dui morbi quam pulvinar condimentum. Senectus sed
    varius interdum nunc, arcu vulputate massa.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 2,
    avatar: "./images/Ava (1).svg",
    name: "Ronald Richards",
    email: "ronaldrichards@gmail.com",
    comment: `Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. `,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 3,
    avatar: "./images/Ava.svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 3,
    avatar: "./images/Ava.svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 3,
    avatar: "./images/Ava (1).svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
];
const comment_list = document.querySelector(".comment_list");
const scrollbar = document.querySelector(".scrollbar");
comments.forEach((el) => {
  const element = createElement(
    "li",
    "comment__item w-[420px] h-[333px] rounded-2xl bg-white dark:bg-[#1C1C1C] p-6",
    `
  <div class="flex justify-between items-center">
                    <div class="flex">
                      <img src="${el.avatar}" alt="ava" />
                      <div class="ml-4">
                        <h1 class="font-semibold text-4 left-5">
                        ${el.name}
                        </h1>
                        <h2
                          class="font-normal text-[14px] left-[17px] text-[#555555] dark:text-white"
                        >
                        ${el.email}
                        </h2>
                      </div>
                    </div>
                    <img src="./images/Group 5google.svg" alt="google" class="" />
                  </div>
                  <p
                    class="w-[372px] h-[160px] font-normal text-[14px] left-[20px] mt-[14px]"
                  >
                  ${el.comment}
                  </p>
                  <div class="mt-[25px] h-[1.5px] bg-[#E5E7EA]"></div>
                  <div class="flex items-center mt-[14px]">
                    <h4
                      class="font-medium text-[14px] inline-block left-[17px]"
                    >
                      Star rating:
                    </h4>
                    <img
                      src="${el.rating}"
                      alt="stars"
                      class="ml-[17px]"
                    />
                  </div>
  `
  );
  comment_list.append(element);
  const scrbr = createElement(
    "div",
    `scrbr-item w-[${546 / comments.length}px] h-1 bg-white opacity-[0.4]`,
    ""
  );
  scrollbar.append(scrbr);
});
document.querySelector(".scrbr-item").classList.add("active-scroll");

count = 0;
const slider__right = document.querySelector(".slider__right");
const slider__left = document.querySelector(".slider__left");

slider__right.addEventListener("click", (e) => {
  document.querySelector(".active-scroll").classList.remove("active-scroll");
  if (count === comments.length - 1) {
    count = -1;
  }
  comment_list.style.transform = `translateX(-${++count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
});
slider__left.addEventListener("click", (e) => {
  document.querySelector(".active-scroll").classList.remove("active-scroll");

  if (count === 0) {
    count = comments.length;
  }
  comment_list.style.transform = `translateX(-${--count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
});