(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports={Home:"Home_Home__Hrybx",HomeSelectContainer:"Home_HomeSelectContainer__oe8S-",HomeSelect:"Home_HomeSelect__28zx0",HomeContenedorCards:"Home_HomeContenedorCards__1zOof",CardStylesText:"Home_CardStylesText__1x7b-",HomeDogh1:"Home_HomeDogh1__2OdRj",DivMensajeBusquedaVacia:"Home_DivMensajeBusquedaVacia__2GDla",CreatedSelect:"Home_CreatedSelect__2R2D9"}},15:function(e,a,t){e.exports={Detail:"Detail_Detail__32b7B",DivContainer:"Detail_DivContainer__3tmVw",DetailImg:"Detail_DetailImg__1KRBZ",DivTemperaments:"Detail_DivTemperaments__2QlYp",DivLifeExpectancy:"Detail_DivLifeExpectancy__1Ddem",DivHeight:"Detail_DivHeight__29q7U",DivWeight:"Detail_DivWeight__1nKEc",ButtonEliminar:"Detail_ButtonEliminar__3Qp4u",ButtonEditar:"Detail_ButtonEditar__Deg6v",DetailDivContainer:"Detail_DetailDivContainer__2F9Wc",DivContainerResto:"Detail_DivContainerResto__2Eegq"}},16:function(e,a,t){e.exports={Header:"Header_Header__2C_Ub",HeaderContainerH1a:"Header_HeaderContainerH1a__sleHm",HeaderContainerH1b:"Header_HeaderContainerH1b__2QthQ",HeaderContainerH1c:"Header_HeaderContainerH1c__27DoM",HeaderContainerH1:"Header_HeaderContainerH1__1H1Qb",HeaderLink:"Header_HeaderLink__3CeYh",HeaderH1:"Header_HeaderH1__15N4N"}},21:function(e,a,t){e.exports={Card:"Card_Card__2v91Y",Cardh:"Card_Cardh__3mTOc",Cardspan:"Card_Cardspan__2tRuT",CardH5:"Card_CardH5__1FdXu",CardNombre:"Card_CardNombre__PLjQK",CardH5Weight:"Card_CardH5Weight__wps5r",CardTemp:"Card_CardTemp__2-r_s"}},24:function(e,a,t){e.exports={Paginado:"Paginado_Paginado__CqX-F",Paginadoul:"Paginado_Paginadoul__10n8d",Paginadoli:"Paginado_Paginadoli__6eUsE",PaginadoButton:"Paginado_PaginadoButton__2Rz-Z",PaginadoButtonOff:"Paginado_PaginadoButtonOff__2qQFx"}},27:function(e,a,t){e.exports={SearchBar:"SearchBar_SearchBar__2Pbl1",SearchBarButton:"SearchBar_SearchBarButton__3pnPx",SearchBarInput:"SearchBar_SearchBarInput__1K70m"}},37:function(e,a,t){e.exports={NotFound:"NotFound_NotFound__yF7tF",buttonVolver:"NotFound_buttonVolver__2tqUZ"}},38:function(e,a,t){e.exports={AboutDiv:"About_AboutDiv__1p6Sf",DivContainerAbout:"About_DivContainerAbout__3jbsn"}},4:function(e,a,t){e.exports={CreateDog:"CreateDog_CreateDog__2qAZY",ButtonTemperaments:"CreateDog_ButtonTemperaments__1Zrdt",ButtonCreateOn:"CreateDog_ButtonCreateOn__1aPKk",ButtonCreateOff:"CreateDog_ButtonCreateOff__z-FxK",danger:"CreateDog_danger__24j9X",divContainerForm:"CreateDog_divContainerForm__1Dgh0",CreatoDogSpan:"CreateDog_CreatoDogSpan__16MaC",DivNombre:"CreateDog_DivNombre__3_Spv",DivAltura:"CreateDog_DivAltura__qjy_E",DivPeso:"CreateDog_DivPeso__1cSQ2",LabelAltura:"CreateDog_LabelAltura__3atM7",InputAltura:"CreateDog_InputAltura__3A5YB",LabelPeso:"CreateDog_LabelPeso__uoNfX",InputPeso:"CreateDog_InputPeso__GCHAp",LabelDiv:"CreateDog_LabelDiv__1vahU",LabelGrupoDeRaza:"CreateDog_LabelGrupoDeRaza__2IP_-",divButtonTemps:"CreateDog_divButtonTemps__23maB",DivEsperanzaVida:"CreateDog_DivEsperanzaVida__gtCrH",DivImagen:"CreateDog_DivImagen__7Tgrf",DivTemperamentos1:"CreateDog_DivTemperamentos1__1URsB",DivSelectGrupoDeRaza:"CreateDog_DivSelectGrupoDeRaza__2MMpM"}},49:function(e,a,t){e.exports={Landing:"LandingPage_Landing__AU0xR"}},58:function(e,a,t){},59:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(29),c=t.n(o),s=(t(58),t(59),t(5)),i=t(9),l=t(49),u=t.n(l),d=t(0);function p(){return Object(d.jsx)("div",{className:u.a.Landing,children:Object(d.jsx)(i.b,{to:"/home",children:Object(d.jsx)("button",{children:"Ingresar"})})})}var m=t(17),j=t(6),b=t(32),h=t(8),O=t(18),A=t(19),g=t.n(A),v="GET_DOGS",x="GET_TEMPERAMENTS",f="GET_BREEDS",D="GET_NAME_DOGS",C="GET_DETAILS",N="DETAILS_CLEAN",M="FILTER_BY_BREEDS",_="FILTER_BY_TEMPERAMENTS",E="FILTER_DB_API",z="ORDER_BY_NAME",y="ORDER_BY_WEIGHT",H="POST_DOG",B="DELETE_DOG_DB",S=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3001/dogs");case 2:return t=e.sent,e.abrupt("return",a({type:v,payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var t,n,r;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3001/dogs");case 2:return t=e.sent,n=t.data.map((function(e){return e.grupo_raza})),r=Object(b.a)(new Set(n)),e.abrupt("return",a({type:f,payload:r}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3001/temperaments");case 2:return t=e.sent,e.abrupt("return",a({type:x,payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},w=function(){return{type:N,payload:{}}},q="data:image/jpeg;base64,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",L=t(21),F=t.n(L);function T(e){var a=e.imagen,t=e.nombre,n=e.grupo_raza,r=e.temperamentos,o=e.peso;return Object(d.jsxs)("div",{className:F.a.Card,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:a||q,alt:"img not found",width:"250px",height:"250px"})}),Object(d.jsx)("h3",{className:F.a.CardNombre,children:t}),Object(d.jsx)("h5",{className:F.a.Cardh,children:n}),Object(d.jsx)("span",{className:F.a.Cardspan,children:"Temperament: "}),Object(d.jsx)("h5",{className:F.a.CardTemp,children:r}),Object(d.jsx)("span",{className:F.a.Cardspan,children:"Weight: "}),Object(d.jsx)("h5",{className:F.a.CardH5Weight,children:o})]})}var U=t(24),V=t.n(U);function Y(e){for(var a=e.dogsPerPage,t=e.allDogs,n=e.paginado,r=e.currentPage,o=[],c=1;c<=Math.ceil(t/a);c++)o.push(c);return Object(d.jsx)("nav",{className:V.a.Paginado,children:Object(d.jsx)("ul",{className:V.a.Paginadoul,children:o&&o.map((function(e){return Object(d.jsx)("li",{className:V.a.Paginadoli,children:Object(d.jsx)("button",{className:r===e?V.a.PaginadoButton:V.a.PaginadoButtonOff,onClick:function(){return n(e)},children:e})},e)}))})})}var P=t(16),K=t.n(P);function Q(){var e=Object(j.b)(),a=Object(s.f)(),t=Object(j.c)((function(e){return e.dogDetail}));return Object(d.jsxs)("div",{className:K.a.Header,children:[Object(d.jsx)("div",{className:K.a.HeaderContainerH1a,children:Object(d.jsx)("h1",{className:K.a.HeaderH1,onClick:function(n){return Object.entries(t).length&&(e(w()),a.push("/home")),void a.push("/home")},children:"Home"})}),Object(d.jsx)("div",{className:K.a.HeaderContainerH1b,children:Object(d.jsx)(i.b,{className:K.a.HeaderLink,to:"/create",children:Object(d.jsx)("h1",{className:K.a.HeaderH1,children:"Create"})})}),Object(d.jsx)("div",{className:K.a.HeaderContainerH1c,children:Object(d.jsx)(i.b,{className:K.a.HeaderLink,to:"/about",children:Object(d.jsx)("h1",{className:K.a.HeaderH1,children:"About"})})})]})}var G=t(27),J=t.n(G);function k(){var e=Object(j.b)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],o=t[1],c=function(a){var t;a.preventDefault(),e((t=r,function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("http://localhost:3001/dogs?name=".concat(t));case 3:return n=e.sent,e.abrupt("return",a({type:D,payload:n.data}));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",a({type:D,payload:""}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()))};return Object(d.jsxs)("div",{className:J.a.SearchBar,children:[Object(d.jsx)("button",{className:J.a.SearchBarButton,onClick:function(a){return function(a){a.preventDefault(),o(""),e(S())}(a)},children:"Refresh"}),Object(d.jsx)("input",{className:J.a.SearchBarInput,type:"text",placeholder:"Search...",name:"buscador",value:r,onChange:function(e){return function(e){e.preventDefault(),o(e.target.value),console.log(r)}(e)}}),Object(d.jsx)("button",{className:J.a.SearchBarButton,type:"submit",onClick:function(e){return c(e)},children:"Search"})]})}var X=t(14),W=t.n(X);function Z(){var e=Object(j.b)(),a=Object(j.c)((function(e){return e.dogs})),t=Object(j.c)((function(e){return e.temperaments})),r=Object(j.c)((function(e){return e.breeds})),o=Object(n.useState)(""),c=Object(m.a)(o,2),s=(c[0],c[1]),l=Object(n.useState)(1),u=Object(m.a)(l,2),p=u[0],b=u[1],A=Object(n.useState)(8),v=Object(m.a)(A,2),x=v[0],f=(v[1],p*x),D=f-x,C=a.slice(D,f),N=Object(n.useRef)();Object(n.useEffect)((function(){e(R()),e(I()),e(S())}),[e]);var H=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:M,payload:t})),b(1)},B=function(a){var t;a.preventDefault(),e((t=a.target.value,function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("AllTemperaments"!==t){e.next=4;break}return e.abrupt("return",a({type:_,payload:t}));case 4:return e.prev=4,e.next=7,g.a.get("http://localhost:3001/dogs/temperaments?tem=".concat(t));case 7:return n=e.sent,e.abrupt("return",a({type:_,payload:n.data}));case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}())),b(1)},w=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:z,payload:t})),s(a.target.value),b(1)},q=function(a){var t;a.preventDefault(),e((t=a.target.value,{type:y,payload:t})),s(a.target.value),b(1)},L=function(a){var t;console.log(a.target.value),a.preventDefault(),e((t=a.target.value,{type:E,payload:t})),b(1)};return Object(d.jsxs)("div",{className:W.a.Home,children:[Object(d.jsx)(Q,{}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:W.a.HomeSelectContainer,children:[Object(d.jsxs)("select",{className:W.a.HomeSelect,name:"nombres",id:"alphabetical",onChange:function(e){return w(e)},children:[Object(d.jsx)("option",{value:"asc",children:"A - Z"},"asc"),Object(d.jsx)("option",{value:"desc",children:"Z - A"},"desc")]}),Object(d.jsxs)("select",{className:W.a.HomeSelect,name:"peso",id:"weight",ref:N,onChange:function(e){return q(e)},children:[Object(d.jsx)("option",{value:"AllPeso",children:"All"},"AllPeso"),Object(d.jsx)("option",{value:"pesoMayor",children:"Greater weight"},"pesoMayor"),Object(d.jsx)("option",{value:"pesoMenor",children:"Lower weight"},"pesoMenor")]}),Object(d.jsxs)("select",{className:W.a.HomeSelect,name:"temperamentos",id:"temperaments",ref:N,onChange:function(e){return B(e)},children:[Object(d.jsx)("option",{value:"AllTemperaments",children:"All"},"AllTemperaments"),t&&t.map((function(e){return Object(d.jsx)("option",{value:e.nombre,children:e.nombre},e.nombre)}))]}),Object(d.jsxs)("select",{className:W.a.HomeSelect,name:"razas",id:"breeds",ref:N,onChange:function(e){return H(e)},children:[Object(d.jsx)("option",{value:"allRazas",children:"All breeds"},"allRazas"),r&&r.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]}),Object(d.jsxs)("select",{className:W.a.CreatedSelect,onChange:function(e){return L(e)},children:[Object(d.jsx)("option",{name:"All",value:"All",children:"All"},"AllCreate"),Object(d.jsx)("option",{name:"InApi",value:"InApi",children:"Api"},"InApi"),Object(d.jsx)("option",{name:"Created",value:"Created",children:"Created"},"Created")]})]}),Object(d.jsx)("h1",{className:W.a.HomeDogh1,children:"Dogs breeds"}),Object(d.jsx)("div",{className:W.a.HomeContenedorCards,children:C&&C.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{className:W.a.CardStylesText,to:"/home/".concat(e.id),children:Object(d.jsx)(T,{imagen:e.imagen,nombre:e.nombre,grupo_raza:e.grupo_raza,temperamentos:e.creadoEnDb?e.temperamentos.map((function(e){return" "+e.nombre})).toString().slice(1):e.temperamento,peso:e.peso})})},e.id)}))}),Object(d.jsx)(Y,{dogsPerPage:x,allDogs:a.length,paginado:function(e){b(e)},currentPage:p}),!a&&Object(d.jsx)("div",{className:W.a.DivMensajeBusquedaVacia,children:Object(d.jsx)("h2",{children:"Lo sentimos, no hemos encontrado ese dog!"})})]})]})}var $=t.p+"static/media/NotFound_404.ceb312b6.jpg",ee=t(37),ae=t.n(ee);function te(){return Object(d.jsxs)("div",{className:ae.a.NotFound,children:[Object(d.jsx)("img",{src:$,alt:"img"}),Object(d.jsx)(i.b,{to:"/home",children:Object(d.jsx)("button",{className:ae.a.buttonVolver,children:"Home"})})]})}var ne=t(20),re=t(2),oe=t(4),ce=t.n(oe);function se(){var e=Object(j.b)(),a=Object(s.f)(),t=Object(j.c)((function(e){return e.temperaments})),r=Object(j.c)((function(e){return e.breeds})),o=Object(n.useState)({}),c=Object(m.a)(o,2),i=c[0],l=c[1];Object(n.useEffect)((function(){t.length&&r.length||(e(R()),e(I()))}),[e,t,r]);var u=Object(n.useState)({nombre:"",altura:"",alturaMin:"",alturaMax:"",peso:"",pesoMin:"",pesoMax:"",grupo_raza:"","a\xf1osDeVida":"","a\xf1os_de_vida":"",imagen:"",creadoEnDb:!0,temperamento:[]}),p=Object(m.a)(u,2),A=p[0],v=p[1],x=function(e){e.preventDefault(),v((function(a){var t;return Object(re.a)(Object(re.a)({},a),{},(t={},Object(ne.a)(t,e.target.name,e.target.value),Object(ne.a)(t,"altura","".concat("alturaMin"===e.target.name?e.target.value:A.alturaMin," - ").concat("alturaMax"===e.target.name?e.target.value:A.alturaMax," CM")),Object(ne.a)(t,"peso","".concat("pesoMin"===e.target.name?e.target.value:A.pesoMin," - ").concat("pesoMax"===e.target.name?e.target.value:A.pesoMax," KG")),Object(ne.a)(t,"a\xf1os_de_vida","".concat("a\xf1osDeVida"===e.target.name?e.target.value:A.a\u00f1osDeVida," - YEARS")),t))})),l((function(){return function(e){var a={};return e.nombre?e.nombre&&!/^[A-Z]+$/i.test(e.nombre)?a.nombre="el campo *Nombre no admite n\xfameros o simbolos":e.nombre.length>25&&(a.nombre="el campo *nombre no puede ser mayor a 25 caracteres"):a.nombre="Se requiere un nombre",e.alturaMax&&e.alturaMin?e.alturaMin&&!/^[0-9]+$/i.test(e.alturaMin)?a.altura="El campo *Altura *Min solo admite n\xfameros":e.alturaMax&&!/^[0-9]+$/i.test(e.alturaMax)?a.altura="El campo *Altura *Max solo admite n\xfameros":parseInt(e.alturaMin)<0||parseInt(e.alturaMax)>120?a.altura="La altura no puede ser menor a 0 ni mayor a 120 cms":parseInt(e.alturaMin)>=parseInt(e.alturaMax)?a.altura="La altura m\xe1xima tiene que ser mayor a la altura minima":e.pesoMax&&e.pesoMin?e.pesoMax&&!/^[0-9]+$/i.test(e.pesoMax)?a.peso="El campo *Peso *Max solo admite n\xfameros":e.pesoMin&&!/^[0-9]+$/i.test(e.pesoMin)?a.peso="El campo *Peso *Min solo admite n\xfameros":parseInt(e.pesoMin)<0||parseInt(e.pesoMax)>120?a.peso="El peso no puede ser menor a 0 Kg ni mayor a 120 Kg":parseInt(e.pesoMin)>=parseInt(e.pesoMax)?a.peso="El peso m\xe1ximo tiene que ser mayor al peso minimo":e.a\u00f1osDeVida?/^[0-9]+$/i.test(e.a\u00f1osDeVida)?parseInt(e.a\u00f1osDeVida)<=0||parseInt(e.a\u00f1osDeVida)>30?a.a\u00f1os_de_vida="La esperanza de vida tiene que ser mayor a 0 y como m\xe1ximo 30 a\xf1os":e.imagen&&!/^(ftp|http|https):\/\/[^ "]+$/.test(e.imagen)?a.imagen="La URL ingresada en el campo *Imagen es incorrecta":e.imagen.length>250&&(a.imagen="La URL ingresada debe ser menor a 250 caracteres"):a.a\u00f1os_de_vida="El campo *Esperanza de vida solo admite n\xfameros":a.a\u00f1os_de_vida="El campo *Esperanza de vida es requerido":a.peso="Los campos de *Peso min y max son requeridos":a.altura="Los campos de *Altura min y max son requeridos",a}(Object(re.a)(Object(re.a)({},A),{},Object(ne.a)({},e.target.name,e.target.value)))}))},f=function(t){var n;t.preventDefault(),Object.entries(i).length>0||""===A.pesoMin?alert("Falta completar los campos obligatorios *. Intenta de nuevo."):(e((n=A,function(){var e=Object(O.a)(Object(h.a)().mark((function e(a){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("http://localhost:3001/dogs",n);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}())),alert("El dog ha sido creado exitosamente"),v((function(){return{nombre:"",altura:"",alturaMin:0,alturaMax:0,peso:"",pesoMin:0,pesoMax:0,grupo_raza:"","a\xf1osDeVida":0,"a\xf1os_de_vida":"",imagen:"",creadoEnDb:!0,temperamento:[]}})),a.push("/home"))};return Object(d.jsxs)("div",{className:ce.a.CreateDog,children:[Object(d.jsx)(Q,{}),Object(d.jsx)("h1",{children:"Crea un Dog!"}),Object(d.jsxs)("div",{className:ce.a.divContainerForm,children:[Object(d.jsx)("span",{className:ce.a.CreatoDogSpan,children:"Los campos con * son obligatorios"}),Object(d.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(d.jsxs)("div",{className:ce.a.DivNombre,children:[Object(d.jsx)("label",{children:"*Nombre:"}),Object(d.jsx)("input",{type:"text",value:A.nombre,name:"nombre",onChange:function(e){return x(e)}}),i.nombre&&Object(d.jsx)("p",{className:ce.a.danger,children:i.nombre})]}),Object(d.jsxs)("div",{className:ce.a.DivAltura,children:[Object(d.jsx)("label",{className:ce.a.LabelAltura,children:"*Altura (centimetros):"}),Object(d.jsx)("label",{children:"*Min "}),Object(d.jsx)("input",{className:ce.a.InputAltura,type:"text",value:A.alturaMin,name:"alturaMin",onChange:function(e){return x(e)}}),Object(d.jsx)("label",{children:"*Max "}),Object(d.jsx)("input",{className:ce.a.InputAltura,type:"text",value:A.alturaMax,name:"alturaMax",onChange:function(e){return x(e)}}),i.altura&&Object(d.jsx)("p",{className:ce.a.danger,children:i.altura})]}),Object(d.jsxs)("div",{className:ce.a.DivPeso,children:[Object(d.jsx)("label",{className:ce.a.LabelPeso,children:"*Peso (KG):"}),Object(d.jsx)("label",{children:"*Min "}),Object(d.jsx)("input",{className:ce.a.InputPeso,type:"text",value:A.pesoMin,name:"pesoMin",onChange:function(e){return x(e)}}),Object(d.jsx)("label",{children:"*Max "}),Object(d.jsx)("input",{className:ce.a.InputPeso,type:"text",value:A.pesoMax,name:"pesoMax",onChange:function(e){return x(e)}}),i.peso&&Object(d.jsx)("p",{className:ce.a.danger,children:i.peso})]}),Object(d.jsxs)("div",{className:ce.a.DivSelectGrupoDeRaza,children:[Object(d.jsx)("label",{children:"Grupo de Raza: "}),Object(d.jsxs)("select",{onChange:function(e){return function(e){e.preventDefault(),v((function(a){return Object(re.a)(Object(re.a)({},a),{},{grupo_raza:e.target.value})}))}(e)},children:[Object(d.jsx)("option",{value:"",children:"Select"}),r&&r.map((function(e){return Object(d.jsx)("option",{name:e,value:e,children:e},e)}))]})]}),Object(d.jsxs)("div",{className:ce.a.DivEsperanzaVida,children:[Object(d.jsx)("label",{children:"*Esperanza de vida: "}),Object(d.jsx)("input",{type:"text",value:A.a\u00f1osDeVida,name:"a\xf1osDeVida",onChange:function(e){return x(e)}}),Object(d.jsx)("span",{children:" (A\xf1os)"}),i.a\u00f1os_de_vida&&Object(d.jsx)("p",{className:ce.a.danger,children:i.a\u00f1os_de_vida})]}),Object(d.jsxs)("div",{className:ce.a.DivImagen,children:[Object(d.jsx)("label",{children:"Imagen:"}),Object(d.jsx)("input",{type:"text",value:A.imagen,name:"imagen",onChange:function(e){return x(e)}}),i.imagen&&Object(d.jsx)("p",{className:ce.a.danger,children:i.imagen})]}),Object(d.jsxs)("div",{className:ce.a.DivTemperamentos1,children:[Object(d.jsx)("label",{children:"Temperamentos:"}),Object(d.jsx)("select",{multiple:!0,onChange:function(e){return function(e){A.temperamento.includes(e.target.value)||A.temperamento.length>=10?v((function(e){return Object(re.a)({},e)})):v((function(a){return Object(re.a)(Object(re.a)({},a),{},{temperamento:[].concat(Object(b.a)(A.temperamento),[e.target.value])})}))}(e)},children:t&&t.map((function(e){return Object(d.jsx)("option",{name:e.nombre,value:e.nombre,children:e.nombre},e.nombre)}))})]}),Object(d.jsx)("button",{className:Object.entries(i).length>0?ce.a.ButtonCreateOff:ce.a.ButtonCreateOn,type:"submit",children:"Crear Dog"})]}),A.temperamento.length>0&&Object(d.jsx)("p",{children:"(Recuerda que puedes agregar hasta 10 temperamentos)"}),A.temperamento&&A.temperamento.map((function(e){return Object(d.jsx)("div",{className:ce.a.divButtonTemps,children:Object(d.jsxs)("button",{className:ce.a.ButtonTemperaments,onClick:function(){return function(e){v((function(a){return Object(re.a)(Object(re.a)({},a),{},{temperamento:A.temperamento.filter((function(a){return a!==e}))})}))}(e)},children:[e," "]})},"".concat(e," a"))}))]})]})}var ie=t(15),le=t.n(ie);function ue(){var e=Object(j.b)(),a=Object(j.c)((function(e){return e.dogDetail})),t=Object(s.g)().id,r=Object(s.f)(),o=function(a){e(function(e){return function(){var a=Object(O.a)(Object(h.a)().mark((function a(t){return Object(h.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.a.delete("http://localhost:3001/dogs/".concat(e));case 3:return a.abrupt("return",t({type:B,payload:""}));case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}(a)),e(w()),alert("Dog eliminado exitosamente"),r.push("/home")};return Object(n.useEffect)((function(){e(function(e){return function(){var a=Object(O.a)(Object(h.a)().mark((function a(t){var n;return Object(h.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.a.get("http://localhost:3001/dogs/".concat(e));case 3:return n=a.sent,a.abrupt("return",t({type:C,payload:n.data}));case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(t))}),[e,t]),Object(d.jsxs)("div",{className:le.a.Detail,children:[Object(d.jsx)(Q,{}),Object(d.jsxs)("div",{className:le.a.DivContainer,children:[a.length>0?Object(d.jsxs)("div",{className:le.a.DetailDivContainer,children:[Object(d.jsx)("h1",{children:a[0].nombre}),Object(d.jsx)("img",{className:le.a.DetailImg,src:a[0].imagen?a[0].imagen:q,alt:"img",width:"500px",height:"300px"}),Object(d.jsxs)("div",{className:le.a.DivContainerResto,children:[Object(d.jsxs)("div",{className:le.a.DivWeight,children:[Object(d.jsx)("h2",{children:"Weight:"}),Object(d.jsx)("h3",{children:a[0].peso})]}),Object(d.jsxs)("div",{className:le.a.DivHeight,children:[Object(d.jsx)("h2",{children:"Height:"}),Object(d.jsx)("h3",{children:a[0].altura})]}),Object(d.jsxs)("div",{className:le.a.DivLifeExpectancy,children:[Object(d.jsx)("h2",{children:"Life expectancy:"}),Object(d.jsx)("h3",{children:a[0].a\u00f1os_de_vida})]}),Object(d.jsxs)("div",{className:le.a.DivTemperaments,children:[Object(d.jsx)("h2",{children:"Temperaments:"}),Object(d.jsx)("h3",{children:a[0].creadoEnDb?a[0].temperamentos.map((function(e){return" "+e.nombre})).toString().slice(1):a[0].temperamento})]})]})]}):Object(d.jsx)("p",{children:"Loading..."}),a.length>0&&a[0].creadoEnDb&&Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:le.a.ButtonEliminar,onClick:function(){return o(t)},children:"Eliminar"}),Object(d.jsx)("button",{className:le.a.ButtonEditar,children:"Editar"})]})]})]})}var de=t(38),pe=t.n(de);function me(){return Object(d.jsxs)("div",{className:pe.a.DivContainerAbout,children:[Object(d.jsx)(Q,{}),Object(d.jsx)("div",{className:pe.a.AboutDiv,children:Object(d.jsx)("p",{children:"blablablablablablablablablablablabla"})})]})}var je=function(){return Object(d.jsx)(i.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(s.a,{exact:!0,path:"/home",component:Z}),Object(d.jsx)(s.a,{path:"/create",component:se}),Object(d.jsx)(s.a,{path:"/home/:id",component:ue}),Object(d.jsx)(s.a,{path:"/about",component:me}),Object(d.jsx)(s.a,{path:"/",component:te})]})})})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),o(e),c(e)}))},he=t(31),Oe=t(52),Ae=t(53),ge={dogs:[],allDogs:[],temperaments:[],breeds:[],dogDetail:{}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(re.a)(Object(re.a)({},e),{},{dogs:a.payload,allDogs:a.payload});case x:var t=a.payload.filter((function(e){return null!==e.nombre&&void 0!==e.nombre&&""!==e.nombre&&37!==e.id&&40!==e.id&&20!==e.id}));return t=t.sort((function(e,a){return e.nombre>a.nombre?1:a.nombre>e.nombre?-1:0})),Object(re.a)(Object(re.a)({},e),{},{temperaments:t});case f:var n=a.payload.filter((function(e){return null!==e&&void 0!==e&&""!==e}));return n=n.sort((function(e,a){return e>a?1:a>e?-1:0})),Object(re.a)(Object(re.a)({},e),{},{breeds:n});case D:return Object(re.a)(Object(re.a)({},e),{},{dogs:a.payload});case C:case N:return Object(re.a)(Object(re.a)({},e),{},{dogDetail:a.payload});case H:return Object(re.a)({},e);case M:var r=e.allDogs,o="allRazas"===a.payload?r:r.filter((function(e){return e.grupo_raza===a.payload}));return Object(re.a)(Object(re.a)({},e),{},{dogs:o});case _:var c=e.allDogs,s="AllTemperaments"===a.payload?c:a.payload;return Object(re.a)(Object(re.a)({},e),{},{dogs:s});case E:var i="Created"===a.payload?e.allDogs.filter((function(e){return e.creadoEnDb})):e.allDogs.filter((function(e){return!e.creadoEnDb}));return Object(re.a)(Object(re.a)({},e),{},{dogs:"All"===a.payload?e.allDogs:i});case y:var l,u=JSON.parse(JSON.stringify(e.allDogs));return u=u.filter((function(e){return""!==e.peso})),l="AllPeso"===a.payload?JSON.parse(JSON.stringify(e.allDogs)):"pesoMenor"===a.payload?u.sort((function(e,a){return parseInt(e.peso)-parseInt(a.peso)})):u.sort((function(e,a){return parseInt(a.peso)-parseInt(e.peso)})),Object(re.a)(Object(re.a)({},e),{},{dogs:l});case z:var d="asc"===a.payload?e.dogs.sort((function(e,a){return e.nombre>a.nombre?1:a.nombre>e.nombre?-1:0})):e.dogs.sort((function(e,a){return e.nombre>a.nombre?-1:a.nombre>e.nombre?1:0}));return Object(re.a)(Object(re.a)({},e),{},{dogs:d});case B:return Object(re.a)({},e);default:return e}},xe=Object(he.createStore)(ve,Object(Oe.composeWithDevTools)(Object(he.applyMiddleware)(Ae.a)));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j.a,{store:xe,children:Object(d.jsx)(je,{})})}),document.getElementById("root")),be()}},[[92,1,2]]]);
//# sourceMappingURL=main.af8fd6b4.chunk.js.map