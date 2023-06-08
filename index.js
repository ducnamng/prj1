const titleJs = document.querySelector("h1");
const containerJs = document.querySelector(".container");
const textTitle = titleJs.textContent;
const findNumber = textTitle.match(/\d+/g)[0];

const randomColorNumberTitle = () => {
  let replacedText = textTitle.replace(
    findNumber,
    "<span>" + findNumber + "</span>"
  );
  titleJs.innerHTML = replacedText;

  const numberTitle = document.querySelector("span");

  numberTitle.style.fontSize = "60px";

  setInterval(() => {
    let random = Math.floor(Math.random() * 16777215).toString(16);

    numberTitle.style.color = `#${random}`;
  }, 1000);
};
randomColorNumberTitle();

// handle time

let dateElement = document.createElement("div");

const dateAndTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const nowDate = `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
  dateElement.textContent = nowDate;
  containerJs.appendChild(dateElement);

  //handle random background color
  let random = Math.floor(Math.random() * 16777215).toString(16);
  dateElement.style.background = `#${random}`;
  dateElement.style.width = "fit-content";
  dateElement.style.margin = "auto";
  dateElement.style.marginTop = "15px";
  dateElement.style.padding = "5px 15px";
  dateElement.style.textAlign = "center";
};

setInterval(() => {
  dateAndTime();
}, 1000);

dateAndTime();

// todolist
const ulElement = document.createElement("ul");
ulElement.style.maxWidth = "920px";
ulElement.style.margin = "auto";
ulElement.style.paddingTop = "50px";
const arrJobs = [
  {
    title: "30 Days Of Python",
    name: "Python",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "Done",
  },
  {
    title: "30 Days Of Javascript",
    name: "Javascript",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "onGoing",
  },
  {
    title: "30 Days Of HTML & CSS",
    name: "HTML & CSS",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "Coming",
  },
  {
    title: "30 Days Of React",
    name: "React",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "Coming",
  },
  {
    title: "30 Days Of ReactNative",
    name: "ReactNative",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "Coming",
  },
  {
    title: "30 Days Of Fullstack",
    name: "Fullstack",
    checkList: ["aaa", "bbb", "ccc", "ddd", "eee"],
    status: "Coming",
  },
];

const workList = () => {
  document.body.appendChild(ulElement);

  arrJobs.map((item) => {
    const liElement = document.createElement("li");
    const spanElementTitle = document.createElement("span");
    const detailsElementName = document.createElement("details");
    const spanElementStatus = document.createElement("span");
    const summaryElement = document.createElement("summary");

    //css card li
    liElement.style.padding = "20px";
    liElement.style.margin = "2px 0";
    liElement.style.display = "flex";
    liElement.style.justifyContent = "space-between";

    spanElementTitle.textContent = item.title;
    summaryElement.textContent = item.name;
    spanElementStatus.textContent = item.status;

    item.checkList.map((list) => {
      const contentOfDetails = document.createElement("p");
      contentOfDetails.textContent = list;

      detailsElementName.appendChild(contentOfDetails);
    });

    ulElement.appendChild(liElement);
    liElement.appendChild(spanElementTitle);
    liElement.appendChild(detailsElementName);
    liElement.appendChild(spanElementStatus);
    detailsElementName.appendChild(summaryElement);

    //handel background color of li card

    if (item.status === "Done") {
      liElement.style.background = "#21bf73";
    }
    if (item.status === "onGoing") {
      liElement.style.background = "#fddb3a";
    }
    if (item.status === "Coming") {
      liElement.style.background = "#fd5e53";
    }
  });
};
workList();
