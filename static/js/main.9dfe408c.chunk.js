(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(17),i=n.n(a),r=(n(34),n(4)),o=n(11),l=n(3),d=n(7),u=n.n(d),j=n(15),m=n(14),h=(n(36),n(26)),b=n.n(h),g=n(1),p=function(e){var t=e.inventory,n=e.setInventory,s=Object(c.useState)(!0),a=Object(r.a)(s,2),i=a[0],l=a[1];return Object(g.jsxs)("header",{className:"header flex white",children:[Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)(o.b,{className:"white big",to:"/",children:"PAYSTORE"}),Object(g.jsx)("nav",{className:"flex",children:Object(g.jsx)(o.b,{className:"nav white",to:"/store",children:"Store"})})]}),Object(g.jsxs)("div",{className:"icon",children:[Object(g.jsxs)("div",{className:"flex cart",onClick:function(){return l(!i)},onKeyPress:function(){return l(!i)},role:"menuitem",tabIndex:0,children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("h4",{children:t.length})]}),Object(g.jsxs)("div",{className:i?"history hide":"history",onMouseLeave:function(){return setTimeout((function(){l(!0)}),1e3)},children:[Object(g.jsxs)("div",{className:"checkout-summary flex",children:[Object(g.jsx)("div",{className:"summary-left",children:Object(g.jsxs)("h3",{children:[t.length," items added"]})}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsxs)("h3",{className:"summary-right",children:["$",t.reduce((function(e,t){return e+t.price}),0).toFixed(2)]}),t.length>0&&Object(g.jsx)("button",{type:"button",className:"checkout-button",children:"Check Out"})]})]}),t.map((function(e,c){return Object(g.jsxs)(o.b,{to:"/store/".concat(e.URL),className:"flex list white",children:[Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_cover_big/".concat(e.imageURL,".jpg"),alt:"Cover",className:"checkout-image"}),Object(g.jsx)("div",{children:Object(g.jsx)("h3",{className:"checkout-name",children:e.name})}),Object(g.jsxs)("h4",{children:["$",e.price.toFixed(2)]}),Object(g.jsxs)("h4",{className:"checkout-price",children:["\xd7",e.quantity]}),Object(g.jsx)("div",{className:"remove",onKeyPress:function(e){if("Enter"===e.key){e.preventDefault();var s=Object(m.a)(t);s.splice(c,1),n(s)}},role:"menuitem",tabIndex:-1,onClick:function(e){e.preventDefault();var s=Object(m.a)(t);s.splice(c,1),n(s)},children:Object(g.jsx)("p",{children:"Remove from cart"})})]},e.name)}))]})]})]})},O="7nyuo66bv5rgh251uw77xmstqk8g4g",f="Bearer lji16boycwnbyfww1t1goykar30yb1",x="https://cors.bridged.cc/https://api.igdb.com/v4/games";function v(){return(v=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x,{method:"POST",headers:{"Client-ID":O,Authorization:f},body:t});case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return v.apply(this,arguments)},N=(n(47),function(e){var t,n,s=e.inventory,a=e.setInventory,i=Object(c.useState)([]),l=Object(r.a)(i,2),d=l[0],m=l[1],h=Object(c.useState)(0),b=Object(r.a)(h,2),O=b[0],f=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fields cover.image_id,name,id,artworks.image_id,slug; where rating >= 80 & rating_count >= 5 & first_release_date > 1609426800; limit 6; sort first_release_date desc;",e.next=3,y("fields cover.image_id,name,id,artworks.image_id,slug; where rating >= 80 & rating_count >= 5 & first_release_date > 1609426800; limit 6; sort first_release_date desc;");case 3:t=e.sent,m(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){f((function(e){return e+1})),O>=d.length-1&&f(0)}),7500);return function(){clearInterval(e)}}),[O,d.length,d]),Object(c.useEffect)((function(){d.forEach((function(e){var t=e.artworks;(new Image).src="https://images.igdb.com/igdb/image/upload/t_screenshot_huge/".concat(t[0].image_id,".jpg")}))}),[d]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{inventory:s,setInventory:a}),Object(g.jsxs)("main",{children:[Object(g.jsx)("h3",{children:"Newest Popular Releases"}),Object(g.jsxs)("div",{className:"new-games-container",children:[d.length>0&&Object(g.jsx)("div",{className:"show",style:{backgroundImage:'url("https://images.igdb.com/igdb/image/upload/t_screenshot_huge/'.concat(null===(t=d[O])||void 0===t?void 0:t.artworks[0].image_id,'.jpg")')},children:Object(g.jsx)(o.b,{className:"link",to:"/store/".concat(null===(n=d[O])||void 0===n?void 0:n.slug),children:"Browse"})}),Object(g.jsx)("div",{className:"side",children:d.map((function(e,t){return Object(g.jsxs)("div",{className:t===O?"focus":"",onClick:function(){return f(t)},onKeyPress:function(){return f(t)},role:"menuitem",tabIndex:t,children:[Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_cover_small/".concat(e.cover.image_id,".jpg"),alt:"Game Cover"}),Object(g.jsx)("p",{children:e.name})]},e.id)}))})]})]})]})}),_=n(27),w=n.n(_),k=(n(48),function(e){var t=e.inventory,n=e.setInventory,s=Object(c.useState)([]),a=Object(r.a)(s,2),i=a[0],l=a[1],d=Object(c.useState)(""),m=Object(r.a)(d,2),h=m[0],b=m[1],O=Object(c.useState)(!0),f=Object(r.a)(O,2),x=f[0],v=f[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===h?"fields cover.image_id,name,id,slug,genres.name; where rating >= 80 & rating_count >= 100; limit 30; sort rating_count desc;":'fields cover.image_id,name,id,slug,genres.name; limit 30; where rating >= 70 & rating_count >= 60; search "'.concat(h,'";'),e.next=3,y(t);case 3:n=e.sent,l(n),v(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{inventory:t,setInventory:n}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"flex search-container",children:[Object(g.jsx)(w.a,{className:"search-icon"}),Object(g.jsx)("input",{placeholder:"Enter a title...",type:"text",className:"search",onKeyUp:function(e){"Enter"===e.key&&b(e.currentTarget.value)}})]}),i.length>0?Object(g.jsx)("div",{className:"itemsContainer",children:i.map((function(e,t){var n,c,s;return Object(g.jsxs)(o.b,{to:"/store/".concat(null===(n=i[t])||void 0===n?void 0:n.slug),className:"items",children:[Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_720p/".concat(null===e||void 0===e||null===(c=e.cover)||void 0===c?void 0:c.image_id,".jpg"),alt:"Game",className:"items-image"}),Object(g.jsxs)("div",{className:"description",children:[Object(g.jsx)("h4",{className:"name",children:e.name}),Object(g.jsx)("p",{className:"genres",children:null===e||void 0===e||null===(s=e.genres)||void 0===s?void 0:s.map((function(e,t){return 0===t?" ".concat(e.name):" | ".concat(e.name," ")}))}),Object(g.jsx)("h2",{className:"price",children:"$ 49.99"})]})]},e.id)}))}):0!==i.length||x?null:Object(g.jsx)("h1",{className:"not-found",children:"No search results found"})]})]})}),I=n(28),S=(n(49),function(e){var t,n=e.match,s=e.inventory,a=e.setInventory,i=Object(c.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],h=Object(c.useState)(!0),b=Object(r.a)(h,2),O=b[0],f=b[1],x=Object(c.useState)(0),v=Object(r.a)(x,2),N=v[0],_=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t='fields cover.image_id,name,slug,genres.name,screenshots.*,release_dates.human,storyline,summary,platforms.abbreviation,aggregated_rating; where slug = "'.concat(n.params.id,'"; limit 1;'),e.next=3,y(t);case 3:c=e.sent,d(c),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n.params.id]),Object(c.useEffect)((function(){var e=setInterval((function(){_((function(e){return e+1})),console.log(N),N>=l[0].screenshots.length-1&&_(0)}),4e3);return function(){clearInterval(e)}}),[N,l]),Object(c.useEffect)((function(){var e;null===(e=l[0])||void 0===e||e.screenshots.forEach((function(e){(new Image).src="https://images.igdb.com/igdb/image/upload/t_720p/".concat(e.image_id,".jpg")}))}),[l]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{inventory:s,setInventory:a}),l.length>0?Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"main-container top",children:[Object(g.jsx)("h1",{className:"title",children:l[0].name}),Object(g.jsxs)("div",{className:"screenshots-container",children:[Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_720p/".concat(null===(t=l[0].screenshots[N])||void 0===t?void 0:t.image_id,".jpg"),alt:"Screenshot",className:"screenshot"}),Object(g.jsx)("div",{className:"screenshots-rotation",children:l[0].screenshots.map((function(e,t){return Object(g.jsx)("div",{onClick:function(){return _(t)},onKeyPress:function(){return _(t)},role:"menuitem",tabIndex:t,children:Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_screenshot_med/".concat(e.image_id,".jpg"),alt:"Screenshot",className:t===N?"screenshot-small now":"screenshot-small",style:t===l[0].screenshots.length-1?{margin:"0"}:{}})},e.id)}))})]}),Object(g.jsxs)("div",{className:"side-container",children:[Object(g.jsx)("img",{src:"https://images.igdb.com/igdb/image/upload/t_1080p/".concat(l[0].cover.image_id,".jpg"),alt:"Cover",className:"side-image"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{paddingRight:"60px"},children:"Genres:"}),l[0].genres.map((function(e,t){return 0===t?" ".concat(e.name):" | ".concat(e.name," ")}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{paddingRight:"38px"},children:"Platforms:"}),l[0].platforms.map((function(e,t){return 0===t?" ".concat(e.abbreviation):" | ".concat(e.abbreviation," ")}))]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{paddingRight:"15px"},children:"Release Date:"}),l[0].release_dates[0].human]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{style:{paddingRight:"72px"},children:"Rating:"}),l[0].aggregated_rating.toString().length>5?l[0].aggregated_rating.toFixed(2):l[0].aggregated_rating,"%"]}),Object(g.jsx)("h2",{className:"link button",children:"$49.99"}),Object(g.jsx)("button",{className:"link button",type:"button",onClick:function(){if(s.some((function(e){return e.name===l[0].name}))){var e=Object(I.a)(s,(function(e){var t=s.findIndex((function(e){return e.name===l[0].name})),n=e;n[t].quantity+=1;n[t].price=49.99*n[t].quantity}));a(e)}else a((function(e){return[].concat(Object(m.a)(e),[{name:l[0].name,price:49.99,imageURL:l[0].cover.image_id,quantity:1,URL:l[0].slug}])}))},children:"Add to cart"})]})]}),Object(g.jsxs)("div",{className:"main-container storyline",children:[Object(g.jsx)("h3",{children:"About this game:"}),Object(g.jsx)("p",{children:l[0].storyline||l[0].summary})]})]}):0!==l.length||O?null:Object(g.jsx)("h1",{className:"not-found",children:"404 Not Found"})]})}),E=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(g.jsx)(o.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",exact:!0,children:Object(g.jsx)(N,{inventory:n,setInventory:s})}),Object(g.jsx)(l.a,{path:"/store",exact:!0,children:Object(g.jsx)(k,{inventory:n,setInventory:s})}),Object(g.jsx)(l.a,{path:"/store/:id",exact:!0,render:function(e){var t=e.match;return Object(g.jsx)(S,{match:t,inventory:n,setInventory:s})}})]})})};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9dfe408c.chunk.js.map