(function(){var e={5787:function(){},2656:function(e,a,t){"use strict";var l=t(9963),s=t(6252),n=t(3577),r=t.p+"img/fluxxylogo.9d5307a1.png";const o={className:"container"},i={className:"navflex"},c=(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:r})],-1),u={className:"navlinks"},m=(0,s.Uk)("Home"),d=(0,s.Uk)("About"),_=(0,s.Uk)(" Contact us "),p=(0,s._)("div",{className:"container"},[(0,s._)("div",{className:"navflex"},[(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:r})]),(0,s._)("div",{className:"navlinks"},[(0,s._)("i",{class:"fa-solid fa-bars fa-lg"})])])],-1);function f(e,a,t,l,r,f){const v=(0,s.up)("router-link"),h=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[(0,s._)("div",i,[c,(0,s._)("div",u,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(v,{to:"/"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:"/about"},{default:(0,s.w5)((()=>[d])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(v,{to:"/mycart",mycart:r.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,n.zw)(r.cart.length),1)])),_:1},8,["mycart"])]),(0,s._)("li",null,[(0,s.Wm)(v,{to:"/contactus"},{default:(0,s.w5)((()=>[_])),_:1})])])])])]),p,(0,s.Wm)(h,{users:r.users,addToCart:f.addToCart,mycart:r.cart},null,8,["users","addToCart","mycart"])],64)}var v=t(9669),h=t.n(v),b={data(){return{showsidebar:!0,cart:[],users:[]}},mounted(){h().get("http://localhost/Phplessons").then((e=>{this.users=e.data,console.log(e.data)})).catch((e=>{this.errors.push(e)}))},methods:{addToCart(e){this.cart.push(e),console.log(this.cart)},Delete(e){this.cart.splice(this.cart.indexOf(e),1)}}},g=t(3744);const N=(0,g.Z)(b,[["render",f]]);var k=N,x=t(2201),y=t.p+"img/mockup.28971981.png",w=t.p+"img/orange.1818e077.png",U=t.p+"img/fluxkitchen.02e0f44c.png",C=t.p+"img/watermelon.06c22f75.png",D=t.p+"img/pineapple.c05125e7.png",O=t.p+"img/fruitbasket.2ba90720.png";const j=e=>((0,s.dD)("data-v-6f551df2"),e=e(),(0,s.Cn)(),e),H={className:"herobg"},P={className:"container"},T={className:"heroflex"},S={className:"heroflexh1"},A=j((()=>(0,s._)("h1",null,[(0,s.Uk)(" Discover the industries "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," best tigernut "),(0,s.Uk)(" and "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," fruit juice ")],-1))),z=j((()=>(0,s._)("p",null,[(0,s.Uk)(" Get it Natural, get it delicious & "),(0,s._)("br"),(0,s.Uk)(" do it healthy. ")],-1))),E=j((()=>(0,s._)("div",{className:"herofleximg"},[(0,s._)("img",{src:y,className:"macbookimage"})],-1))),W=j((()=>(0,s._)("div",{className:"second"},[(0,s._)("div",{className:"firstsecondflex"},[(0,s._)("div",{className:"square"}),(0,s._)("div",{className:"orange"},[(0,s._)("img",{src:w,alt:"tigernut in abuja",className:"macbookimage"})])]),(0,s._)("div",{className:"secondcontainer"},[(0,s._)("div",{className:"secondflex"},[(0,s._)("div",{className:"secondfleximg"},[(0,s._)("img",{src:U,alt:"fluxxyfutties",className:"macbookimage"})]),(0,s._)("div",{className:"secondflextext"},[(0,s._)("h2",{className:"secondflexh2"},"Explore Varieties"),(0,s._)("p",{className:"secondflexp"},[(0,s.Uk)(" Different flavourzs and products for "),(0,s._)("br"),(0,s.Uk)(" different folks. Do you! ")])])])])],-1))),Y=(0,s.Uk)(" // fresh shit "),Z={className:"productlistbg"},F={className:"productlistalign"},I=j((()=>(0,s._)("div",{class:"products"},[(0,s._)("h1",null,"Our Products"),(0,s._)("p",null,"All our Tiger nut and fruit juice are 100% Natural")],-1))),K=j((()=>(0,s._)("div",{className:"productcategories"},[(0,s._)("div",null,[(0,s._)("button",null,"Tiger Nut")]),(0,s._)("div",null,[(0,s._)("button",null,"Fruit Juice")]),(0,s._)("div",null,[(0,s._)("button",null,"Snacks")])],-1))),M={className:"productlistgrid"},V={className:"one_e"},q={className:"plname"},G={className:"plprice"},L={className:"plprice"},Q=["onClick"],R=j((()=>(0,s._)("div",{className:"fourthbg"},[(0,s._)("div",{className:"fourthfirstflex"},[(0,s._)("div",{className:"fourthfirstfleximg"},[(0,s._)("img",{src:C,alt:"",className:"watermelon"}),(0,s._)("br"),(0,s._)("img",{src:D,alt:"",className:"macbookimage"})]),(0,s._)("div",{className:"square2"})]),(0,s._)("div",{clasName:"clr"}),(0,s._)("div",{className:"fourthcontainer"},[(0,s._)("div",{className:"fourthflex"},[(0,s._)("div",{className:"fourthflexdiv"},[(0,s._)("h3",{className:"fourthflexh3"},"All organic"),(0,s._)("p",{className:"fourthflexp"},[(0,s.Uk)(" All our drinks are made without any "),(0,s._)("br"),(0,s.Uk)(" synthetic chemicals for preservation. "),(0,s._)("br"),(0,s.Uk)(" Quality for us is a top priority. We want "),(0,s._)("br"),(0,s.Uk)(" you to have it delicious and healthy. ")])]),(0,s._)("div",{className:"fruitbasket"},[(0,s._)("img",{src:O,alt:"",className:"macbookimage"})])])])],-1)));function B(e,a,t,l,r,o){const i=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",H,[(0,s._)("div",P,[(0,s._)("div",T,[(0,s._)("div",S,[(0,s.Uk)((0,n.zw)(t.users)+" ",1),A,z]),E])]),W]),Y,(0,s._)("div",Z,[(0,s._)("div",F,[I,K,(0,s._)("div",M,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.users,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{className:"productlistgrid",key:a},[(0,s._)("ul",V,[(0,s._)("li",null,[(0,s._)("h1",q,(0,n.zw)(e.Name),1)]),(0,s._)("li",null,[(0,s._)("h3",G,(0,n.zw)(e.Description),1)]),(0,s._)("li",null,[(0,s._)("h3",L,(0,n.zw)(e.Price),1)]),(0,s._)("button",{onClick:a=>t.addToCart(e),class:"btn btn-light"}," Add to cart ",8,Q)])])))),128))])])]),R,(0,s.Wm)(i)],64)}var J=t.p+"img/fluxxylogoyellow.af56e77b.png",X=t.p+"img/ig.9bc3897d.png",$=t.p+"img/twitter.b62e7c35.png",ee=t.p+"img/whatsapp.fabb640a.png";const ae=e=>((0,s.dD)("data-v-41b9ac30"),e=e(),(0,s.Cn)(),e),te=ae((()=>(0,s._)("div",{class:"fflex"},[(0,s._)("div",{class:"firstaxis"},[(0,s._)("img",{src:J,alt:"tigernut in abuja",className:"macbookimage"}),(0,s._)("p",null,[(0,s.Uk)(" we produce the industries best "),(0,s._)("br"),(0,s.Uk)(" tigernut and fruit juice with "),(0,s._)("br"),(0,s.Uk)(" no added sugar or preservatives ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Quick links "),(0,s._)("a",{href:"index.html"},[(0,s._)("p",null," Home ")]),(0,s._)("a",{href:"aboutus.html"},[(0,s._)("p",null," Contact us ")]),(0,s._)("a",{href:"properties.html"},[(0,s._)("p",null," About us ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Location "),(0,s._)("p",null,[(0,s.Uk)(" Manufacturing office: Number "),(0,s._)("br"),(0,s.Uk)(" *** Kubwa "),(0,s._)("br"),(0,s.Uk)(" Retail shop: Passion trust "),(0,s._)("br"),(0,s.Uk)(" supermarket, Access bank, Abuja "),(0,s._)("br"),(0,s.Uk)(" You can also find our drinks "),(0,s._)("br"),(0,s.Uk)(" at supermarkets close to you ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," CHECK OUR SOCIALS "),(0,s._)("div",{class:"socialicon"},[(0,s._)("div",null,[(0,s._)("img",{src:X,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:$,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:ee,alt:"tigernut in abuja"})])])])],-1))),le=[te];function se(e,a,t,l,n,r){return(0,s.wg)(),(0,s.iD)("footer",null,le)}var ne=t(5787),re=t.n(ne);const oe=(0,g.Z)(re(),[["render",se],["__scopeId","data-v-41b9ac30"]]);var ie=oe,ce={components:{Footer:ie},props:["users","mycart","addToCart"]};const ue=(0,g.Z)(ce,[["render",B],["__scopeId","data-v-6f551df2"]]);var me=ue;const de=(0,s._)("h2",null," price ",-1),_e=["onClick"];function pe(e,a,t,l,r,o){return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.cart,((a,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("h1",null,(0,n.zw)(a.Name),1),de,(0,s._)("button",{onClick:t=>e.Delete(a)}," Delete me",8,_e)])))),128)}var fe={data(){return{cart:[]}}};const ve=(0,g.Z)(fe,[["render",pe]]);var he=ve;const be=e=>((0,s.dD)("data-v-cecce05a"),e=e(),(0,s.Cn)(),e),ge={className:"cartcontainer"},Ne=be((()=>(0,s._)("div",{className:"cflex"},[(0,s._)("div",{className:"pimgc"},[(0,s._)("h4",null," Product img ")]),(0,s._)("div",{className:"dc"},[(0,s._)("h4",null," Description ")]),(0,s._)("div",{className:"pc"},[(0,s._)("h4",{className:"pcc"}," Price ")]),(0,s._)("div",{className:"dec"},[(0,s._)("h4",null," Delete ")])],-1))),ke=be((()=>(0,s._)("hr",null,null,-1))),xe=be((()=>(0,s._)("br",null,null,-1))),ye=be((()=>(0,s._)("br",{className:"secondspace"},null,-1))),we={className:"pimgc"},Ue=["src"],Ce={className:"dc"},De={className:"dcdescription"},Oe={className:"pc"},je={className:"dec mybtn"},He=["onClick"],Pe=be((()=>(0,s._)("hr",null,null,-1))),Te=be((()=>(0,s._)("br",null,null,-1))),Se=be((()=>(0,s._)("br",null,null,-1))),Ae=be((()=>(0,s._)("br",{className:"secondspace"},null,-1))),ze={class:"form-group"},Ee=be((()=>(0,s._)("label",{for:""},"Name",-1))),We={class:"form-group"},Ye=be((()=>(0,s._)("label",{for:""},"Description",-1))),Ze={class:"form-group"},Fe=be((()=>(0,s._)("label",{for:""},"Price",-1))),Ie=be((()=>(0,s._)("div",{class:"form-group"},[(0,s._)("button",null," Submit ")],-1))),Ke=be((()=>(0,s._)("div",{className:"pcdiv"},[(0,s._)("div",{className:"productcategoriess"},[(0,s._)("button",null," Clear Cart ")]),(0,s._)("div",{className:"productcategoriesss"},[(0,s._)("button",null," Update Cart ")])],-1))),Me=be((()=>(0,s._)("hr",null,null,-1))),Ve=be((()=>(0,s._)("div",{class:"gt"},[(0,s._)("h2",null," Grand Total ")],-1))),qe=be((()=>(0,s._)("hr",null,null,-1))),Ge=be((()=>(0,s._)("div",{className:"gtflex"},[(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Subtotal ")]),(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," N1,000.00")])],-1))),Le=be((()=>(0,s._)("div",{className:"gtflex"},[(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Shipping ")]),(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," N1,000.00")])],-1))),Qe=be((()=>(0,s._)("div",{className:"gtflex"},[(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Grand Total ")]),(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," N1,000.00")])],-1))),Re=be((()=>(0,s._)("div",{className:"checkout"},[(0,s._)("button",null," CHECKOUT ")],-1)));function Be(e,a,t,r,o,i){return(0,s.wg)(),(0,s.iD)("div",ge,[Ne,ke,xe,ye,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mycart,((a,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,className:"cflex"},[(0,s._)("div",we,[(0,s._)("img",{src:a.Img},null,8,Ue)]),(0,s._)("div",Ce,[(0,s._)("h4",null,(0,n.zw)(a.Name),1),(0,s._)("div",De,[(0,s._)("h3",null,(0,n.zw)(a.Description),1)])]),(0,s._)("div",Oe,[(0,s._)("h4",null,(0,n.zw)(a.Price),1)]),(0,s._)("div",je,[(0,s._)("button",{onClick:t=>e.Delete(a)}," X ",8,He)])])))),128)),Pe,Te,Se,Ae,(0,s.wy)((0,s._)("input",{type:"button","onUpdate:modelValue":a[0]||(a[0]=e=>o.moveco=e),onClick:a[1]||(a[1]=e=>i.checkout(t.mycart))},null,512),[[l.nr,o.moveco]]),(0,s._)("form",{action:"",method:"post",onSubmit:a[5]||(a[5]=(0,l.iM)(((...a)=>e.tweet&&e.tweet(...a)),["prevent"]))},[(0,s._)("div",ze,[Ee,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=a=>e.name=a),class:"form-control"},null,512),[[l.nr,e.name]])]),(0,s._)("div",We,[Ye,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=a=>e.description=a),class:"form-control"},null,512),[[l.nr,e.description]])]),(0,s._)("div",Ze,[Fe,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=a=>e.price=a),class:"form-control"},null,512),[[l.nr,e.price]])]),Ie],32),Ke,Me,Ve,qe,Ge,Le,Qe,Re])}var Je={props:{mycart:{type:Array,required:!1}},data(){return{moveco:[]}},methods:{checkout(){var e=this.mycart,a=new FormData;a.append("checkout",e),h()({url:"http://localhost/Phplessons/checkout.php",method:"post",data:e}).then((e=>{console.log(e.data)}),(e=>{console.log(e)}))}}};const Xe=(0,g.Z)(Je,[["render",Be],["__scopeId","data-v-cecce05a"]]);var $e=Xe;const ea=e=>((0,s.dD)("data-v-ea9fe9d8"),e=e(),(0,s.Cn)(),e),aa=ea((()=>(0,s._)("div",{className:"cobg"},[(0,s._)("h2",null," Check out ")],-1))),ta=ea((()=>(0,s._)("div",{className:"cartcontainer"},[(0,s._)("div",{className:"mycoform"},[(0,s._)("form",null,[(0,s._)("div",{className:"coflex"},[(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," First name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})]),(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," Last name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})])]),(0,s._)("label",{for:"street address"}," Street address "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"streetaddress",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Street Name"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Nearest recognisable Bus-stop/ Area around"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"state"}," State "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"state",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"phone"}," Phone "),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"phone",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"email"}," Email "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"email",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"note"}," Note (Optional) "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"note",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br")])])],-1)));function la(e,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[aa,ta],64)}const sa={},na=(0,g.Z)(sa,[["render",la],["__scopeId","data-v-ea9fe9d8"]]);var ra=na;const oa=[{path:"/",name:"home",component:me},{path:"/about",name:"about",component:he},{path:"/mycart",name:"cart",component:$e},{path:"/contactus",name:"contact",component:ra}],ia=(0,x.p7)({history:(0,x.PO)(""),routes:oa});var ca=ia,ua=t(2346);(0,l.ri)(k).use(ca,ua.Z,h()).mount("#app")}},a={};function t(l){var s=a[l];if(void 0!==s)return s.exports;var n=a[l]={id:l,loaded:!1,exports:{}};return e[l](n,n.exports,t),n.loaded=!0,n.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(a,l,s,n){if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],n=e[u][2];for(var o=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(o=!1,n<r&&(r=n));if(o){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,s,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var s,n,r=l[0],o=l[1],i=l[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(i)var u=i(t)}for(a&&a(l);c<r.length;c++)n=r[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},l=self["webpackChunkffwvue"]=self["webpackChunkffwvue"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(2656)}));l=t.O(l)})();
//# sourceMappingURL=app.6fa9ab94.js.map