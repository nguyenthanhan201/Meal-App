(this["webpackJsonpmeal-app"]=this["webpackJsonpmeal-app"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),r=c.n(a),i=c(6),j=(c(96),c(36)),l=(c(97),c(3)),o=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=50?n(!0):n(!1)})),Object(l.jsxs)("div",{className:c?"navbar active":"navbar",children:[Object(l.jsxs)("div",{className:"navbar-heading",children:[Object(l.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/926/926255.png",alt:"logo"}),Object(l.jsxs)(j.b,{to:"/",children:[" ",Object(l.jsxs)("h1",{children:["Meal ",Object(l.jsx)("span",{children:"App"})]})]})]}),Object(l.jsx)("div",{className:"navbar-links",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)(j.b,{to:"/",children:[" ",Object(l.jsx)("li",{children:"Home"})]}),Object(l.jsxs)(j.b,{to:"/categories",children:[" ",Object(l.jsx)("li",{children:"Categories"})]}),Object(l.jsxs)(j.b,{to:"/random",children:[" ",Object(l.jsx)("li",{children:"Random"})]})]})})]})},b=(c(103),function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("p",{children:["Meal ",Object(l.jsx)("span",{children:"App"})," 2021 \xa9"]})})}),d=(c(104),c(51)),h=c.n(d),u=Object(s.createContext)(),O=function(e){var t=e.children,c=Object(s.useState)([]),n=Object(i.a)(c,2),a=n[0],r=n[1],j=Object(s.useState)([]),o=Object(i.a)(j,2),b=o[0],d=o[1],O=Object(s.useState)([]),x=Object(i.a)(O,2),m=x[0],p=x[1],f=Object(s.useCallback)((function(e){h.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){r(e.data.meals)}))}),[]),g=Object(s.useCallback)((function(){h.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){d(e.data.categories)}))}),[]),v=Object(s.useCallback)((function(){h.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){p(e.data.meals)}))}),[]);return Object(l.jsx)(u.Provider,{value:{fetchHomePageMeals:f,meals:a,fetchCategories:g,categories:b,fetchRandomMeal:v,randoms:m},children:t})},x=function(){var e=Object(s.useContext)(u),t=e.fetchCategories,c=e.categories;return Object(s.useEffect)((function(){t()}),[t]),Object(l.jsx)("div",{className:"categories",children:c.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:e.strCategoryThumb,alt:"categories"}),Object(l.jsx)("h4",{children:e.strCategory})]},e.idCategory)}))})},m=(c(124),function(){var e=Object(s.useContext)(u),t=e.randoms,c=e.fetchRandomMeal;return Object(s.useEffect)((function(){c()}),[c]),Object(l.jsx)("div",{className:"random",children:t.map((function(e){return Object(l.jsxs)("div",{className:"random-grid",children:[Object(l.jsxs)("div",{className:"random-grid-controls",children:[Object(l.jsx)("img",{src:e.strMealThumb,alt:"hoa"}),Object(l.jsx)("button",{onClick:c,children:"Generate Another Meal"})]}),Object(l.jsxs)("div",{className:"random-grid-instructions",children:[Object(l.jsx)("h4",{children:"Instructions"}),Object(l.jsx)("p",{children:e.strInstructions})]})]},e.idMeal)}))})}),p=(c(125),c(126),function(){return Object(l.jsxs)("div",{class:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),f=(c(127),c(79)),g=c.n(f),v=c(80),N=c.n(v),C=c(184),M=c(182),w=c(181),k=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=n.a.useState(!1),j=Object(i.a)(r,2),o=j[0],b=j[1],d=n.a.useState(!1),h=Object(i.a)(d,2),O=h[0],x=h[1],m=Object(s.useState)(""),f=Object(i.a)(m,2),v=f[0],k=f[1],y=Object(s.useContext)(u),S=y.fetchHomePageMeals,I=y.meals,T=Object(s.useCallback)((function(){a(!0);setTimeout((function(){a(!1)}),2e3);return S(v)}),[v,S]),E=Object(s.useState)(!1),R=Object(i.a)(E,2),A=R[0],H=(R[1],Object(s.useState)(0)),P=Object(i.a)(H,2),Y=P[0],F=P[1];function L(e){var t=[e.strIngredient1,e.strIngredient2,e.strIngredient3,e.strIngredient4,e.strIngredient5];return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)("p",{children:e},t)}))})}function J(e){var t=[e.strMeasure1,e.strMeasure2,e.strMeasure3,e.strMeasure4,e.strMeasure5];return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)("p",{children:e},t)}))})}return A?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsxs)("div",{className:"home-search",children:[Object(l.jsx)("input",{type:"text",placeholder:"Type a meal...",value:v,onChange:function(e){return k(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&T()}}),Object(l.jsx)("button",{onClick:T,children:"Search Meal"})]}),Object(l.jsxs)("div",{className:"home-grid",children:[c&&Object(l.jsx)(p,{}),I?!c&&I.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g.a,{className:"Tilt",children:Object(l.jsxs)("div",{className:"home-meal",children:[Object(l.jsx)("img",{src:e.strMealThumb,alt:"meal"}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("h4",{children:e.strMeal}),Object(l.jsx)("button",{className:"btn-ingredient",onClick:function(){b(!0),F(t)},children:"Ingredients"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn-seemore",onClick:function(){x(!0),F(t)},children:"See Complete Recipe"})]})]})}),Object(l.jsx)(M.a,{open:o,children:Object(l.jsxs)(C.a,{children:[Object(l.jsx)(w.a,{children:Object(l.jsx)("button",{className:"btn recipe-close-btn",onClick:function(){return b(!1)},children:Object(l.jsx)("i",{className:"fas fa-times"})})}),Object(l.jsx)("h2",{className:"recipe-title",children:I[Y].strMeal}),Object(l.jsx)("p",{className:"recipe-category",children:I[Y].strCategory}),Object(l.jsxs)("div",{class:"recipe-instruct",children:[Object(l.jsx)("h3",{children:"Instructions:"}),Object(l.jsx)("p",{children:I[Y].strInstructions})]}),Object(l.jsx)("img",{src:I[Y].strMealThumb,alt:"meal"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Ingredients"}),Object(l.jsx)("th",{children:"Measure"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:L(I[Y])}),Object(l.jsx)("td",{children:J(I[Y])})]})})]}),Object(l.jsxs)("a",{className:"recipe-link",onClick:function(){return window.open(I[Y].strYoutube)},children:["See On ",Object(l.jsx)("i",{class:"fab fa-youtube"})]})]})}),Object(l.jsx)(M.a,{open:O,children:Object(l.jsxs)(C.a,{children:[Object(l.jsx)(w.a,{children:Object(l.jsx)("button",{className:"btn recipe-close-btn",onClick:function(){return x(!1)},children:Object(l.jsx)("i",{className:"fas fa-times"})})}),Object(l.jsx)(N.a,{url:I[Y].strYoutube})]})})]},t)})):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"no-search",children:[Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"DON'T CRY!"}),Object(l.jsx)("p",{children:"The page you're looking for isn't here. Hit up our homepage for some delicious recipe ideas. We'll clean up the spill."})]}),Object(l.jsx)("img",{src:"https://www.epicurious.com/static/img/error/404-1024.png",alt:"#"})]})})]})]})},y=c(10),S=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(s.useEffect)((function(){c(!0),setTimeout((function(){c(!1)}),200)}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{exact:!0,path:"/",component:k}),Object(l.jsx)(y.a,{exact:!0,path:"/categories",component:x}),Object(l.jsx)(y.a,{exact:!0,path:"/random",component:m})]}),Object(l.jsx)(b,{})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{children:Object(l.jsx)(S,{})})}),document.getElementById("root"))},96:function(e,t,c){},97:function(e,t,c){}},[[148,1,2]]]);
//# sourceMappingURL=main.2536e18d.chunk.js.map