(function(){var e={5787:function(){},3240:function(e,t,a){"use strict";var l=a(9963),s=a(6252),r=a(3577),n=a.p+"img/fluxxylogo.9d5307a1.png";const c={className:"container"},i={className:"navflex"},o=(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:n})],-1),u={className:"navlinks"},d=(0,s.Uk)("Home"),m=(0,s.Uk)("About"),_=(0,s.Uk)(" Contact us "),p={className:"container"},f=(0,s._)("div",{className:"navflex"},[(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:n})]),(0,s._)("div",{className:"navlinks"},[(0,s._)("i",{class:"fa-solid fa-bars fa-lg"})])],-1),v={class:"nav-menu"},h=(0,s.Uk)("Home"),g=(0,s.Uk)("Shop"),b=(0,s.Uk)("About"),N=(0,s.Uk)(" Contact us "),k=(0,s._)("br",null,null,-1),x=(0,s._)("hr",{className:"linebr"},null,-1),y={className:"cartf"},w=(0,s._)("hr",null,null,-1);function U(e,t,a,l,n,U){const C=(0,s.up)("router-link"),D=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s._)("div",i,[o,(0,s._)("div",u,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(C,{to:"/"},{default:(0,s.w5)((()=>[d])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/about"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/contactus"},{default:(0,s.w5)((()=>[_])),_:1})])])])])]),(0,s._)("div",p,[f,(0,s._)("div",v,[(0,s._)("li",null,[(0,s.Wm)(C,{to:"/"},{default:(0,s.w5)((()=>[h])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/about"},{default:(0,s.w5)((()=>[g])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/about"},{default:(0,s.w5)((()=>[b])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])]),(0,s._)("li",null,[(0,s.Wm)(C,{to:"/contactus"},{default:(0,s.w5)((()=>[N])),_:1})]),k,x,(0,s._)("li",y,[(0,s.Wm)(C,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])]),w])]),(0,s.Wm)(D,{users:n.users,addToCart:U.addToCart,mycart:n.cart,subtotal:U.getsubtotal,getprice:U.getprice,getdesc:U.getdesc,grandtotal:U.getgrandtotal},null,8,["users","addToCart","mycart","subtotal","getprice","getdesc","grandtotal"])],64)}var C=a(9669),D=a.n(C),O={data(){return{showsidebar:!0,cart:{},users:[]}},mounted(){D().get("http://localhost/Phplessons").then((e=>{this.users=e.data,console.log(e.data)})).catch((e=>{this.errors.push(e)}))},methods:{getprice(e){const t=this.users.find((t=>t.Name===e));return t.Price},getdesc(e){const t=this.users.find((t=>t.Name===e));return t.Description},getsubtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),0);return e.toFixed(2)},getgrandtotal(){const e=Object.entries(this.cart).reduce(((e,t)=>e+t[1]*this.getprice(t[0])),1e3);return e.toFixed(2)},addToCart(e,t){this.cart[e]=0,this.cart[e]+=t,console.log(this.cart)},Delete(e){this.cart.splice(this.cart.indexOf(e),1)}}},j=a(3744);const H=(0,j.Z)(O,[["render",U]]);var z=H,P=a(2201),T=a.p+"img/mockup.28971981.png",W=a.p+"img/orange.1818e077.png",A=a.p+"img/fluxkitchen.02e0f44c.png",F=a.p+"img/watermelon.06c22f75.png",S=a.p+"img/pineapple.c05125e7.png",E=a.p+"img/fruitbasket.2ba90720.png";const M=e=>((0,s.dD)("data-v-72ff0bdc"),e=e(),(0,s.Cn)(),e),Y={className:"herobg"},Z={className:"container"},I={className:"heroflex"},K={className:"heroflexh1"},Q=M((()=>(0,s._)("h1",null,[(0,s.Uk)(" Discover the industries "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," best tigernut "),(0,s.Uk)(" and "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," fruit juice ")],-1))),V=M((()=>(0,s._)("p",null,[(0,s.Uk)(" Get it Natural, get it delicious & "),(0,s._)("br"),(0,s.Uk)(" do it healthy. ")],-1))),G=M((()=>(0,s._)("div",{className:"herofleximg"},[(0,s._)("img",{src:T,className:"macbookimage"})],-1))),L=M((()=>(0,s._)("div",{className:"second"},[(0,s._)("div",{className:"firstsecondflex"},[(0,s._)("div",{className:"square"}),(0,s._)("div",{className:"orange"},[(0,s._)("img",{src:W,alt:"tigernut in abuja",className:"macbookimage"})])]),(0,s._)("div",{className:"secondcontainer"},[(0,s._)("div",{className:"secondflex"},[(0,s._)("div",{className:"secondfleximg"},[(0,s._)("img",{src:A,alt:"fluxxyfutties",className:"macbookimage"})]),(0,s._)("div",{className:"secondflextext"},[(0,s._)("h2",{className:"secondflexh2"},"Explore Varieties"),(0,s._)("p",{className:"secondflexp"},[(0,s.Uk)(" Different flavourzs and products for "),(0,s._)("br"),(0,s.Uk)(" different folks. Do you! ")])])])])],-1))),q=(0,s.Uk)(" // fresh shit "),R={className:"productlistbg"},B={className:"productlistalign"},J=M((()=>(0,s._)("div",{class:"products"},[(0,s._)("h1",null,"Our Products"),(0,s._)("p",null,"All our Tiger nut and fruit juice are 100% Natural")],-1))),X=M((()=>(0,s._)("div",{className:"productcategories"},[(0,s._)("div",null,[(0,s._)("button",null,"Tiger Nut")]),(0,s._)("div",null,[(0,s._)("button",null,"Fruit Juice")]),(0,s._)("div",null,[(0,s._)("button",null,"Snacks")])],-1))),$={className:"productlistgrid"},ee={className:"one_e"},te={className:"plname"},ae={className:"plprice"},le={className:"atcflex"},se={className:"atcone"},re=M((()=>(0,s._)("p",null," Qty: ",-1))),ne=["onUpdate:modelValue"],ce=["onClick"],ie=M((()=>(0,s._)("div",{className:"fourthbg"},[(0,s._)("div",{className:"fourthfirstflex"},[(0,s._)("div",{className:"fourthfirstfleximg"},[(0,s._)("img",{src:F,alt:"",className:"watermelon"}),(0,s._)("br"),(0,s._)("img",{src:S,alt:"",className:"macbookimage"})]),(0,s._)("div",{className:"square2"})]),(0,s._)("div",{clasName:"clr"}),(0,s._)("div",{className:"fourthcontainer"},[(0,s._)("div",{className:"fourthflex"},[(0,s._)("div",{className:"fourthflexdiv"},[(0,s._)("h3",{className:"fourthflexh3"},"All organic"),(0,s._)("p",{className:"fourthflexp"},[(0,s.Uk)(" All our drinks are made without any "),(0,s._)("br"),(0,s.Uk)(" synthetic chemicals for preservation. "),(0,s._)("br"),(0,s.Uk)(" Quality for us is a top priority. We want "),(0,s._)("br"),(0,s.Uk)(" you to have it delicious and healthy. ")])]),(0,s._)("div",{className:"fruitbasket"},[(0,s._)("img",{src:E,alt:"",className:"macbookimage"})])])])],-1)));function oe(e,t,a,n,c,i){const o=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Y,[(0,s._)("div",Z,[(0,s._)("div",I,[(0,s._)("div",K,[(0,s.Uk)((0,r.zw)(a.users)+" ",1),Q,V]),G])]),L]),q,(0,s._)("div",R,[(0,s._)("div",B,[J,X,(0,s._)("div",$,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.users,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{className:"productlistgrid",key:t},[(0,s._)("ul",ee,[(0,s._)("li",null,[(0,s._)("h1",te,(0,r.zw)(e.Name),1)]),(0,s._)("li",null,[(0,s._)("h3",ae,(0,r.zw)(e.Price),1)]),(0,s._)("div",le,[(0,s._)("div",se,[re,(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":t=>e.add=t,className:"atcinput"},null,8,ne),[[l.nr,e.add,void 0,{number:!0}]])]),(0,s._)("div",null,[(0,s._)("button",{onClick:t=>a.addToCart(e.Name,e.add),className:"atc"}," Add to cart ",8,ce)])])])])))),128))])])]),ie,(0,s.Wm)(o)],64)}var ue=a.p+"img/fluxxylogoyellow.af56e77b.png",de=a.p+"img/ig.9bc3897d.png",me=a.p+"img/twitter.b62e7c35.png",_e=a.p+"img/whatsapp.fabb640a.png";const pe=e=>((0,s.dD)("data-v-41b9ac30"),e=e(),(0,s.Cn)(),e),fe=pe((()=>(0,s._)("div",{class:"fflex"},[(0,s._)("div",{class:"firstaxis"},[(0,s._)("img",{src:ue,alt:"tigernut in abuja",className:"macbookimage"}),(0,s._)("p",null,[(0,s.Uk)(" we produce the industries best "),(0,s._)("br"),(0,s.Uk)(" tigernut and fruit juice with "),(0,s._)("br"),(0,s.Uk)(" no added sugar or preservatives ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Quick links "),(0,s._)("a",{href:"index.html"},[(0,s._)("p",null," Home ")]),(0,s._)("a",{href:"aboutus.html"},[(0,s._)("p",null," Contact us ")]),(0,s._)("a",{href:"properties.html"},[(0,s._)("p",null," About us ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Location "),(0,s._)("p",null,[(0,s.Uk)(" Manufacturing office: Number "),(0,s._)("br"),(0,s.Uk)(" *** Kubwa "),(0,s._)("br"),(0,s.Uk)(" Retail shop: Passion trust "),(0,s._)("br"),(0,s.Uk)(" supermarket, Access bank, Abuja "),(0,s._)("br"),(0,s.Uk)(" You can also find our drinks "),(0,s._)("br"),(0,s.Uk)(" at supermarkets close to you ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," CHECK OUR SOCIALS "),(0,s._)("div",{class:"socialicon"},[(0,s._)("div",null,[(0,s._)("img",{src:de,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:me,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:_e,alt:"tigernut in abuja"})])])])],-1))),ve=[fe];function he(e,t,a,l,r,n){return(0,s.wg)(),(0,s.iD)("footer",null,ve)}var ge=a(5787),be=a.n(ge);const Ne=(0,j.Z)(be(),[["render",he],["__scopeId","data-v-41b9ac30"]]);var ke=Ne,xe={components:{Footer:ke},props:["users","mycart","addToCart"],data(){return{add:0,moveit:{}}},methods:{mytotal(){var e=File.reduce(((e,t)=>{t.Price}),0);return e},addition(e,t){t=this.add++,this.moveit[e]=0,this.moveit[e]+=t,console.log(this.moveit)},subtract(){let e=this.add-=1;console.log(e)}}};const ye=(0,j.Z)(xe,[["render",oe],["__scopeId","data-v-72ff0bdc"]]);var we=ye;const Ue=(0,s._)("h2",null," price ",-1),Ce=["onClick"];function De(e,t,a,l,n,c){return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.cart,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a},[(0,s._)("h1",null,(0,r.zw)(t.Name),1),Ue,(0,s._)("button",{onClick:a=>e.Delete(t)}," Delete me",8,Ce)])))),128)}var Oe={data(){return{cart:[]}}};const je=(0,j.Z)(Oe,[["render",De]]);var He=je;const ze=e=>((0,s.dD)("data-v-60618780"),e=e(),(0,s.Cn)(),e),Pe={className:"cartcontainer"},Te=ze((()=>(0,s._)("div",{className:"cflex"},[(0,s._)("div",{className:"pimgc"},[(0,s._)("h4",null," Product img ")]),(0,s._)("div",{className:"dc"},[(0,s._)("h4",null," Description ")]),(0,s._)("div",{className:"pc"},[(0,s._)("h4",{className:"pcc"}," Price ")]),(0,s._)("div",{className:"dec"},[(0,s._)("h4",null," Delete ")])],-1))),We=ze((()=>(0,s._)("hr",null,null,-1))),Ae=ze((()=>(0,s._)("br",null,null,-1))),Fe=ze((()=>(0,s._)("br",{className:"secondspace"},null,-1))),Se={className:"pimgc"},Ee=["src"],Me={className:"dc"},Ye={className:"dcdescription"},Ze={className:"pc"},Ie={className:"dec mybtn"},Ke=["onClick"],Qe=ze((()=>(0,s._)("hr",null,null,-1))),Ve=ze((()=>(0,s._)("br",null,null,-1))),Ge=ze((()=>(0,s._)("br",null,null,-1))),Le=ze((()=>(0,s._)("br",{className:"secondspace"},null,-1))),qe=ze((()=>(0,s._)("div",{className:"pcdiv"},[(0,s._)("div",{className:"productcategoriess"},[(0,s._)("button",null," Clear Cart ")]),(0,s._)("div",{className:"productcategoriesss"},[(0,s._)("button",null," Update Cart ")])],-1))),Re=ze((()=>(0,s._)("hr",null,null,-1))),Be=ze((()=>(0,s._)("div",{class:"gt"},[(0,s._)("h2",null," Grand Total ")],-1))),Je=ze((()=>(0,s._)("hr",null,null,-1))),Xe={className:"gtflex"},$e=ze((()=>(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Subtotal: ")],-1))),et={className:"gttext"},tt=ze((()=>(0,s._)("div",{className:"gtflex"},[(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Delivery Fee: ")]),(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," N1,000.00")])],-1))),at={className:"gtflex"},lt=ze((()=>(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Grand Total: ")],-1))),st={className:"gttext"},rt=ze((()=>(0,s._)("div",{className:"checkout"},[(0,s._)("button",null," CHECKOUT ")],-1)));function nt(e,t,a,n,c,i){return(0,s.wg)(),(0,s.iD)("div",Pe,[Te,We,Ae,Fe,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.mycart,((t,l,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n,className:"cflex"},[(0,s._)("div",Se,[(0,s._)("img",{src:t.Img},null,8,Ee)]),(0,s._)("div",Me,[(0,s._)("h4",null,(0,r.zw)(l),1),(0,s._)("div",Ye,[(0,s._)("h3",null,(0,r.zw)(a.getdesc(l)),1),(0,s._)("h3",null," Quantity: "+(0,r.zw)(t),1),(0,s._)("h4",null," Price: N"+(0,r.zw)(a.getprice(l)),1)])]),(0,s._)("div",Ze,[(0,s._)("h4",null," N"+(0,r.zw)(t*a.getprice(l)),1)]),(0,s._)("div",Ie,[(0,s._)("button",{onClick:a=>e.Delete(t)}," X ",8,Ke)])])))),128)),Qe,Ve,Ge,Le,(0,s.wy)((0,s._)("input",{type:"button","onUpdate:modelValue":t[0]||(t[0]=e=>c.moveco=e),onClick:t[1]||(t[1]=e=>i.checkout(a.mycart))},null,512),[[l.nr,c.moveco]]),qe,Re,Be,Je,(0,s._)("div",Xe,[$e,(0,s._)("div",et,[(0,s._)("h3",null," N"+(0,r.zw)(a.subtotal()),1)])]),tt,(0,s._)("div",at,[lt,(0,s._)("div",st,[(0,s._)("h3",null," N"+(0,r.zw)(a.grandtotal()),1)])]),rt])}var ct={props:["mycart","inventory","getprice","calculateprice","getdesc","subtotal","grandtotal"],data(){return{moveco:[],fee:this.subtotal(),gi:1e3}},methods:{checkout(){var e=this.mycart,t=new FormData;t.append("checkout",e),D()({url:"http://localhost/Phplessons/checkout.php",method:"post",data:e}).then((e=>{console.log(e.data)}),(e=>{console.log(e)}))}}};const it=(0,j.Z)(ct,[["render",nt],["__scopeId","data-v-60618780"]]);var ot=it;const ut=e=>((0,s.dD)("data-v-ea9fe9d8"),e=e(),(0,s.Cn)(),e),dt=ut((()=>(0,s._)("div",{className:"cobg"},[(0,s._)("h2",null," Check out ")],-1))),mt=ut((()=>(0,s._)("div",{className:"cartcontainer"},[(0,s._)("div",{className:"mycoform"},[(0,s._)("form",null,[(0,s._)("div",{className:"coflex"},[(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," First name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})]),(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," Last name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})])]),(0,s._)("label",{for:"street address"}," Street address "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"streetaddress",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Street Name"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Nearest recognisable Bus-stop/ Area around"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"state"}," State "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"state",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"phone"}," Phone "),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"phone",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"email"}," Email "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"email",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"note"}," Note (Optional) "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"note",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br")])])],-1)));function _t(e,t){return(0,s.wg)(),(0,s.iD)(s.HY,null,[dt,mt],64)}const pt={},ft=(0,j.Z)(pt,[["render",_t],["__scopeId","data-v-ea9fe9d8"]]);var vt=ft;const ht=[{path:"/",name:"home",component:we},{path:"/about",name:"about",component:He},{path:"/mycart",name:"cart",component:ot},{path:"/contactus",name:"contact",component:vt}],gt=(0,P.p7)({history:(0,P.PO)(""),routes:ht});var bt=gt,Nt=a(2346);(0,l.ri)(z).use(bt,Nt.Z,D()).mount("#app")}},t={};function a(l){var s=t[l];if(void 0!==s)return s.exports;var r=t[l]={id:l,loaded:!1,exports:{}};return e[l](r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,l,s,r){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],r=e[u][2];for(var c=!0,i=0;i<l.length;i++)(!1&r||n>=r)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(c=!1,r<n&&(n=r));if(c){e.splice(u--,1);var o=s();void 0!==o&&(t=o)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,r,n=l[0],c=l[1],i=l[2],o=0;if(n.some((function(t){return 0!==e[t]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(i)var u=i(a)}for(t&&t(l);o<n.length;o++)r=n[o],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=self["webpackChunkffwvue"]=self["webpackChunkffwvue"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(3240)}));l=a.O(l)})();
//# sourceMappingURL=app.e0af1fd0.js.map