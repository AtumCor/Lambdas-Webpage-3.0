"use client";

import React from "react";
import * as d3 from "d3"; // npm install d3 or yarn add d3
import * as f3 from "family-chart"; // npm install family-chart@0.8.0 or yarn add family-chart@0.8.0
import "@/styles/FamilyTree.css";

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;
    fetch(
      "./data/ujiData.json"
    )
      .then((res) => res.json())
      .then((data) => create(data))
      .catch((err) => console.error(err));

    function create(data) {
      const f3Chart = f3
        .createChart("#FamilyChart", data)
        .setTransitionTime(1000)
        .setCardXSpacing(150)
        .setCardYSpacing(150)
        .setSingleParentEmptyCard(false)
        

      f3Chart.setCardHtml().setOnCardUpdate(Card());

      f3Chart.updateTree({ initial: true, tree_position: 'main_to_middle' });

      function Card() {
        return function (d) {
          const card = this.querySelector(".card");
          card.outerHTML = `
          <div class="card" style="transform: translate(-50%, -50%);">
            ${d.data.data.avatar ? getCardInnerImage(d) : getCardInnerText(d)}
          </div>
          `;
          this.addEventListener("click", (e) => onCardClick(e, d));
        };

        function onCardClick(e, d) {
          f3Chart.updateMainId(d.data.id);
          f3Chart.updateTree({});
        }

        function getCardInnerImage(d) {
          return `
          <div class="card-image ${getClassList(d).join(" ")}">
            <img src="${d.data.data["avatar"]}">
            <div class="card-label">${d.data.data["label"]}</div>
          </div>
          `;
        }

        function getCardInnerText(d) {
          return `
          <div class="card-text ${getClassList(d).join(" ")}">
            ${d.data.data["label"]}
          </div>
          `;
        }
      }

      function getClassList(d) {
        const class_list = [];
        if (d.data.data.gender === "M") class_list.push("card-male");
        else if (d.data.data.gender === "F") class_list.push("card-female");
        else class_list.push("card-genderless");

        if (d.data.main) class_list.push("card-main");

        return class_list;
      }
    }
  }

  render() {
    return (
      <div
        id="FamilyChart"
        ref={this.cont}
        style={{
          width: "100%",
          height: "90%",
          padding: "20px",
          backgroundColor: "rgb(33,33,33)",
          color: "#fff",
        }}
      ></div>
    );
  }
}
