(this["webpackJsonpopen-diag-front"]=this["webpackJsonpopen-diag-front"]||[]).push([[0],{62:function(n,t,e){},73:function(n,t,e){"use strict";e.r(t);var a=e(1),o=e(0),r=e(24),c=e.n(r),i=e(25),s=e(15),u=e(5),d=e(26),b=e.n(d),l=(e(62),e(2)),p=e(3),j=e(27),h=e.n(j);function x(){var n=Object(l.a)(["\n    font-size: 13px;\n    float: right;\n"]);return x=function(){return n},n}function f(){var n=Object(l.a)(["\n    margin: auto;\n"]);return f=function(){return n},n}function O(){var n=Object(l.a)(["\n    & {\n        width: auto;\n        position: relative;\n        div {\n            position: absolute;\n            left: 29%;\n            right: 0;\n        }\n    }\n"]);return O=function(){return n},n}function m(){var n=Object(l.a)(["\n    margin-bottom: 25px;\n"]);return m=function(){return n},n}function g(){var n=Object(l.a)(["\n    width: 70%;\n    margin: 0 auto;\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n    display: block;\n    margin: 35px auto;\n    background: #446df6;\n    border: none;\n    padding: 15px 45px;\n    border-radius: 7px;\n    color: white;\n    font-size: 14px;\n    transition: background 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        background: #ec9a29;\n    }\n"]);return v=function(){return n},n}function w(){var n=Object(l.a)(["\n    min-height: 120px;\n    display: block;\n    margin: auto;\n    width: 70%;\n    border-radius: 5px;\n    border-color: transparent;\n    webkit-box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);\n    -moz-box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);\n    box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);\n    padding: 15px 10px;\n    font-weight: bold;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n    border-bottom: 3px solid #e7bb41;\n"]);return k=function(){return n},n}function y(){var n=Object(l.a)(["\n    max-width: 1024px;\n    margin: 0 auto;\n"]);return y=function(){return n},n}var T=p.a.div(y()),C=p.a.span(k()),S=p.a.textarea(w()),z=p.a.button(v()),P=p.a.div(g()),F=p.a.p(m()),q=p.a.div(O()),D=Object(p.a)(h.a)(f()),E=p.a.span(x()),I={animator:"accordion-animator",content:"accordion-content",panel:"accordion-panel",label:"accordion-title"},J=function(){var n=Object(o.useState)(""),t=Object(s.a)(n,2),e=t[0],r=t[1],c=Object(o.useState)(),d=Object(s.a)(c,2),l=d[0],p=d[1],j=Object(o.useState)(!1),h=Object(s.a)(j,2),x=h[0],f=h[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)(P,{children:[Object(a.jsx)("h1",{children:"Demonstra\xe7\xe3o - Open Medical Screening"}),Object(a.jsx)(F,{children:"Neste exemplo doen\xe7as ser\xe3o listadas de acordo com os sintomas informados. As doen\xe7as ter\xe3o ordem de quantidade de matches ( quantidade de palavras chaves encontradas )."})]}),Object(a.jsx)(S,{placeholder:"Descreva os seus sintomas...",onChange:function(n){return r(n.target.value)}}),!x&&Object(a.jsx)(z,{onClick:function(){e.length>0?(f(!0),fetch("".concat("http://openconsultas-com-br.umbler.net","/diseases"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({question:e})}).then((function(n){return n.json()})).then((function(n){p(n),f(!1)})).catch((function(n){f(!1),console.log(n)}))):alert("O campo de sintomas n\xe3o pode estar vazio")},children:"Procurar doen\xe7as associadas"}),function(n){return n?Object(a.jsx)(T,{children:Object(a.jsx)(u.Tabbordion,{blockElements:I,className:"tabs",name:"tabs",children:n.map((function(n,t){return Object(a.jsxs)(u.TabPanel,{children:[Object(a.jsxs)(u.TabLabel,{children:[n.disease_name,Object(a.jsxs)(E,{children:["Itens semelhantes: ",n.match_count]})]}),Object(a.jsx)(u.TabContent,{children:Object(a.jsx)("ul",{children:n.symptoms.map((function(t,e){return function(n,t,e){var o,r=t,c=Object(i.a)(e);try{for(c.s();!(o=c.n()).done;){var s=o.value;r=b()(r,new RegExp("\\b(".concat(s,")\\b"),"ig"),(function(n,t){return Object(a.jsx)(C,{children:n},t)}))}}catch(u){c.e(u)}finally{c.f()}return Object(a.jsx)("li",{children:r},n)}(e,t,n.match_words)}))})})]},t)}))})}):Object(a.jsx)("p",{})}(l),Object(a.jsx)(q,{children:Object(a.jsx)(D,{size:20,color:"#446df6",loading:x})})]})},L=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,74)).then((function(t){var e=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;e(n),a(n),o(n),r(n),c(n)}))};e(69).config(),c.a.render(Object(a.jsx)(J,{}),document.getElementById("root")),L()}},[[73,1,2]]]);
//# sourceMappingURL=main.b9da104b.chunk.js.map