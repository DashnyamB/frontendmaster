import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import "lazysizes";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";

// Энд React тай холбоотой кодууд байна
import React from "react";
import ReactDOM from "react-dom";

//Өөрсдийн бичиж өгсөн React Component - ыг импорт хийх
import MyReactComponent from "./modules/MyReactComponent";

ReactDOM.render(
  <MyReactComponent />,
  document.querySelector("#my-react-example")
);

new ClientArea();
let stickHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
let mobileMenu = new MobileMenu();

let modal;
document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal === "undefined") {
      import(/* webpackChunkName : "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Файлыг дуудахад алдаа гарлаа"));
    } else {
      modal.openModal();
    }
  });
});

// webpack - ыг watch хийж байгаа
if (module.hot) {
  module.hot.accept();
}
