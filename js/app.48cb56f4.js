(function(){var e={5787:function(){},9438:function(e,a,t){"use strict";var l=t(9963),s=t(6252),r=t(3577),n=t.p+"img/fluxxylogo.9d5307a1.png",i=t.p+"img/shopbag.f0a28cbc.png";const o={className:"container"},c={className:"navflex"},u=(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:n})],-1),m={className:"navlinks"},d=(0,s.Uk)(" Home "),_=(0,s.Uk)("About"),p=(0,s.Uk)(" Contact us "),f={className:"fixit"},b={className:"navflexx"},g=(0,s._)("div",{className:"flogow"},[(0,s._)("img",{src:n})],-1),v=(0,s._)("div",{className:"cartimg"},[(0,s._)("span",{class:"dot"}," 0 "),(0,s._)("img",{src:i})],-1),h={className:"navlinks"},N={key:0,class:"fa-solid fa-bars fa-lg"},k={key:0,class:"fa-solid fa-xmark fa-lg"},y={key:0,className:"nav-menu"},x=(0,s.Uk)("Home"),U=(0,s.Uk)("Shop"),w=(0,s.Uk)("About"),C=(0,s.Uk)(" Contact us "),D=(0,s._)("br",null,null,-1),O=(0,s._)("hr",{className:"linebr"},null,-1),H={className:"cartf"},j=(0,s._)("hr",null,null,-1);function P(e,a,t,l,n,i){const P=(0,s.up)("router-link"),T=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[(0,s._)("div",c,[u,(0,s._)("div",m,[(0,s._)("ul",null,[(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/"},{default:(0,s.w5)((()=>[d])),_:1})])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/about"},{default:(0,s.w5)((()=>[_])),_:1})])]),(0,s._)("li",null,[(0,s.Wm)(P,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/contactus"},{default:(0,s.w5)((()=>[p])),_:1})])])])])])]),(0,s._)("div",f,[(0,s._)("div",b,[g,v,(0,s._)("div",h,[(0,s._)("div",{onClick:a[0]||(a[0]=(...e)=>i.togglenav&&i.togglenav(...e))},[n.isvisible?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("i",N))]),(0,s._)("div",{onClick:a[1]||(a[1]=(...e)=>i.togglenav&&i.togglenav(...e))},[n.isvisible?((0,s.wg)(),(0,s.iD)("i",k)):(0,s.kq)("",!0)])])]),n.isvisible?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/"},{default:(0,s.w5)((()=>[x])),_:1})])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/about"},{default:(0,s.w5)((()=>[U])),_:1})])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/about"},{default:(0,s.w5)((()=>[w])),_:1})])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)(" My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])])]),(0,s._)("a",null,[(0,s._)("li",null,[(0,s.Wm)(P,{to:"/contactus"},{default:(0,s.w5)((()=>[C])),_:1})])]),D,O,(0,s._)("li",H,[(0,s.Wm)(P,{to:"/mycart",mycart:n.cart},{default:(0,s.w5)((()=>[(0,s.Uk)("My cart "+(0,r.zw)(n.cart.length),1)])),_:1},8,["mycart"])]),j])):(0,s.kq)("",!0)]),(0,s.Wm)(T,{users:n.users,addToCart:i.addToCart,mycart:n.cart,subtotal:i.getsubtotal,getprice:i.getprice,getdesc:i.getdesc,grandtotal:i.getgrandtotal,getimage:i.getimage,mylist:n.list},null,8,["users","addToCart","mycart","subtotal","getprice","getdesc","grandtotal","getimage","mylist"])],64)}var T=t(9669),W=t.n(T),F={data(){return{showsidebar:!0,isvisible:!1,cart:{},users:[],list:[]}},mounted(){window.addEventListener("scroll",this.fixit),W().get("/omo.php").then((e=>{this.users=e.data,console.log(e.data)})).catch((e=>{this.errors.push(e)}))},methods:{getimage(e){const a=this.users.find((a=>a.Name===e));return a.images},getprice(e){const a=this.users.find((a=>a.Name===e));return a.Price},getdesc(e){const a=this.users.find((a=>a.Name===e));return a.Description},getsubtotal(){const e=Object.entries(this.cart).reduce(((e,a)=>e+a[1]*this.getprice(a[0])),0);return e.toFixed(2)},getgrandtotal(){const e=Object.entries(this.cart).reduce(((e,a)=>e+a[1]*this.getprice(a[0])),1e3);return e.toFixed(2)},addToCart(e,a){this.cart[e]=0,this.cart[e]+=a,console.log(this.cart),this.list.push({Name:e,Quantity:a}),console.log(this.list)},Delete(e){this.cart.splice(this.cart.indexOf(e),1)},togglenav(){this.isvisible=!this.isvisible}}},S=t(3744);const A=(0,S.Z)(F,[["render",P]]);var E=A,z=t(2201),q=t.p+"img/mockup.28971981.png",Y=t.p+"img/orange.1818e077.png",I=t.p+"img/fluxkitchen.02e0f44c.png",M=t.p+"img/watermelon.06c22f75.png",Z=t.p+"img/pineapple.c05125e7.png",K=t.p+"img/fruitbasket.2ba90720.png";const L=e=>((0,s.dD)("data-v-1bc1986f"),e=e(),(0,s.Cn)(),e),Q=L((()=>(0,s._)("div",{className:"herobg"},[(0,s._)("div",{className:"container"},[(0,s._)("div",{className:"heroflex"},[(0,s._)("div",{className:"heroflexh1"},[(0,s._)("h1",null,[(0,s.Uk)(" Discover the Industries "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," Best Tigernut "),(0,s.Uk)(" and "),(0,s._)("br"),(0,s._)("span",{className:"pinktext"}," Fruit Juice ")]),(0,s._)("p",null,[(0,s.Uk)(" Get it Natural, get it delicious & "),(0,s._)("br"),(0,s.Uk)(" do it healthy. ")])]),(0,s._)("div",{className:"herofleximg"},[(0,s._)("img",{src:q})])])]),(0,s._)("div",{className:"second"},[(0,s._)("div",{className:"firstsecondflex"},[(0,s._)("div",{className:"square"}),(0,s._)("div",{className:"orange"},[(0,s._)("img",{src:Y,alt:"tigernut in abuja",className:"macbookimage"})])]),(0,s._)("div",{className:"secondcontainer"},[(0,s._)("div",{className:"secondflex"},[(0,s._)("div",{className:"secondfleximg"},[(0,s._)("img",{src:I,alt:"fluxxyfutties",className:"macbookimage"})]),(0,s._)("div",{className:"secondflextext"},[(0,s._)("h2",{className:"secondflexh2"},"Explore Varieties"),(0,s._)("p",{className:"secondflexp"},[(0,s.Uk)(" Different flavours and products for "),(0,s._)("br"),(0,s.Uk)(" different folks. Do you! ")]),(0,s._)("button",null," View Our Products")])])])])],-1))),V=L((()=>(0,s._)("br",null,null,-1))),B={className:"productlistbg"},G={className:"productlistalign"},J=L((()=>(0,s._)("div",{class:"products"},[(0,s._)("h1",null,"Our Products"),(0,s._)("p",null,"All our Tiger nut and fruit juice are 100% Natural")],-1))),R=L((()=>(0,s._)("div",{className:"productcategories"},[(0,s._)("div",null,[(0,s._)("button",null,"Tiger Nut")]),(0,s._)("div",null,[(0,s._)("button",null,"Fruit Juice")]),(0,s._)("div",null,[(0,s._)("button",null,"Snacks")])],-1))),X={className:"productlistgrid"},$={className:"one_e"},ee={className:"plimg"},ae={className:"plname"},te={className:"plprice"},le={className:"atcflex"},se={className:"atcone"},re=L((()=>(0,s._)("p",null," Qty: ",-1))),ne=["onUpdate:modelValue"],ie=["onClick"],oe=L((()=>(0,s._)("div",{className:"fourthbg"},[(0,s._)("div",{className:"fourthfirstflex"},[(0,s._)("div",{className:"fourthfirstfleximg"},[(0,s._)("img",{src:M,alt:"",className:"watermelon"}),(0,s._)("br"),(0,s._)("img",{src:Z,alt:"",className:"macbookimage"})]),(0,s._)("div",{className:"square2"})]),(0,s._)("div",{clasName:"clr"}),(0,s._)("div",{className:"fourthcontainer"},[(0,s._)("div",{className:"fourthflex"},[(0,s._)("div",{className:"fourthflexdiv"},[(0,s._)("h3",{className:"fourthflexh3"},"All organic"),(0,s._)("p",{className:"fourthflexp"},[(0,s.Uk)(" All our drinks are made without any "),(0,s._)("br"),(0,s.Uk)(" synthetic chemicals for preservation. "),(0,s._)("br"),(0,s.Uk)(" Quality for us is a top priority. We want "),(0,s._)("br"),(0,s.Uk)(" you to have it delicious and healthy. ")])]),(0,s._)("div",{className:"fruitbasket"},[(0,s._)("img",{src:K,alt:"",className:"macbookimage"})])])])],-1)));function ce(e,a,t,n,i,o){const c=(0,s.up)("Img"),u=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[Q,V,(0,s._)("div",B,[(0,s._)("div",G,[J,R,(0,s._)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.users,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{className:"productlistgrid",key:a},[(0,s._)("ul",$,[(0,s._)("li",ee,[(0,s.Wm)(c,{src:e.images},null,8,["src"])]),(0,s._)("li",null,[(0,s._)("h1",ae,(0,r.zw)(e.Name),1)]),(0,s._)("li",null,[(0,s._)("h3",te,(0,r.zw)(e.Price),1)]),(0,s._)("div",le,[(0,s._)("div",se,[re,(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":a=>e.add=a,className:"atcinput"},null,8,ne),[[l.nr,e.add,void 0,{number:!0}]])]),(0,s._)("div",null,[(0,s._)("button",{onClick:a=>t.addToCart(e.Name,e.add),className:"atc"}," Add to cart ",8,ie)])])])])))),128))])])]),oe,(0,s.Wm)(u)],64)}var ue=t.p+"img/fluxxylogoyellow.af56e77b.png",me=t.p+"img/ig.9bc3897d.png",de=t.p+"img/twitter.b62e7c35.png",_e=t.p+"img/whatsapp.fabb640a.png";const pe=e=>((0,s.dD)("data-v-7741a5a8"),e=e(),(0,s.Cn)(),e),fe=pe((()=>(0,s._)("div",{class:"fflex"},[(0,s._)("div",{class:"firstaxis"},[(0,s._)("img",{src:ue,alt:"tigernut in abuja",className:"macbookimage"}),(0,s._)("p",null,[(0,s.Uk)(" We produce the industries best "),(0,s._)("br"),(0,s.Uk)(" Tigernut and Fruit Juice with "),(0,s._)("br"),(0,s.Uk)(" no added sugar or preservatives ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Quick links "),(0,s._)("a",{href:"index.html"},[(0,s._)("p",null," Home ")]),(0,s._)("a",{href:"aboutus.html"},[(0,s._)("p",null," Contact us ")]),(0,s._)("a",{href:"properties.html"},[(0,s._)("p",null," About us ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," Location "),(0,s._)("p",null,[(0,s.Uk)(" Manufacturing office: Number "),(0,s._)("br"),(0,s.Uk)(" *** Kubwa "),(0,s._)("br"),(0,s.Uk)(" Retail shop: Passion trust "),(0,s._)("br"),(0,s.Uk)(" supermarket, Access bank, Abuja "),(0,s._)("br"),(0,s.Uk)(" You can also find our drinks "),(0,s._)("br"),(0,s.Uk)(" at supermarkets close to you ")])]),(0,s._)("div",{class:"secondaxis"},[(0,s._)("h3",null," CHECK OUR SOCIALS "),(0,s._)("div",{class:"socialicon"},[(0,s._)("div",null,[(0,s._)("img",{src:me,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:de,alt:"tigernut in abuja"})]),(0,s._)("div",null,[(0,s._)("img",{src:_e,alt:"tigernut in abuja"})])])])],-1))),be=[fe];function ge(e,a,t,l,r,n){return(0,s.wg)(),(0,s.iD)("footer",null,be)}var ve=t(5787),he=t.n(ve);const Ne=(0,S.Z)(he(),[["render",ge],["__scopeId","data-v-7741a5a8"]]);var ke=Ne,ye={components:{Footer:ke},props:["users","mycart","addToCart"],data(){return{add:0,moveit:{}}},methods:{mytotal(){var e=File.reduce(((e,a)=>{a.Price}),0);return e},addition(e,a){a=this.add++,this.moveit[e]=0,this.moveit[e]+=a,console.log(this.moveit)},subtract(){let e=this.add-=1;console.log(e)}}};const xe=(0,S.Z)(ye,[["render",ce],["__scopeId","data-v-1bc1986f"]]);var Ue=xe,we=t.p+"img/fluxkitchencontact.23ef0dc0.jpg";const Ce=e=>((0,s.dD)("data-v-7126d3f3"),e=e(),(0,s.Cn)(),e),De=Ce((()=>(0,s._)("div",{className:"cobg"},[(0,s._)("h2",null," About us ")],-1))),Oe=Ce((()=>(0,s._)("div",{className:"container"},[(0,s._)("div",{className:"contactflex"},[(0,s._)("div",{className:"mycoform"},[(0,s._)("form",null,[(0,s._)("label",{for:"street address"},[(0,s.Uk)(" You have questions, suggestions or you simply want to give us a a thumbs up? "),(0,s._)("br"),(0,s.Uk)(" You can quicky reach out to us. ")]),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"streetaddress",Name:"firstname",type:"text",placeholder:" Enter your name"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Phone number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Email address"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Enter message"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("button",{className:"formbutton"}," Send ")])]),(0,s._)("div",{className:"contactimg"},[(0,s._)("img",{src:we,alt:"food delivery"})])])],-1)));function He(e,a,t,l,r,n){const i=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[De,Oe,(0,s.Wm)(i)],64)}var je={components:{Footer:ke},data(){return{cart:[]}}};const Pe=(0,S.Z)(je,[["render",He],["__scopeId","data-v-7126d3f3"]]);var Te=Pe;const We=e=>((0,s.dD)("data-v-9a9324e4"),e=e(),(0,s.Cn)(),e),Fe={className:"cartcontainer"},Se={key:0},Ae=We((()=>(0,s._)("h3",null," There are no items in your cart ",-1))),Ee=[Ae],ze=We((()=>(0,s._)("br",{className:"secondspace"},null,-1))),qe=We((()=>(0,s._)("hr",null,null,-1))),Ye=We((()=>(0,s._)("br",null,null,-1))),Ie={key:1},Me=We((()=>(0,s._)("div",{className:"cflex"},[(0,s._)("div",{className:"pimgc"},[(0,s._)("h4",null," Product img ")]),(0,s._)("div",{className:"dc"},[(0,s._)("h4",null," Description ")]),(0,s._)("div",{className:"pc"},[(0,s._)("h4",{className:"pcc"}," Price ")]),(0,s._)("div",{className:"dec"},[(0,s._)("h4",null," Delete ")])],-1))),Ze={className:"pimgc"},Ke=["src"],Le={className:"dc"},Qe={className:"dcdescription"},Ve={className:"pc"},Be={className:"dec mybtn"},Ge=["onClick"],Je=We((()=>(0,s._)("hr",null,null,-1))),Re=We((()=>(0,s._)("br",null,null,-1))),Xe=We((()=>(0,s._)("br",null,null,-1))),$e=We((()=>(0,s._)("div",{className:"pcdiv"},[(0,s._)("div",{className:"productcategoriess"},[(0,s._)("button",null," Clear Cart ")]),(0,s._)("div",{className:"productcategoriesss"},[(0,s._)("button",null," Update Cart ")])],-1))),ea=We((()=>(0,s._)("hr",null,null,-1))),aa=We((()=>(0,s._)("div",{class:"gt"},[(0,s._)("h2",null," Grand Total ")],-1))),ta=We((()=>(0,s._)("hr",null,null,-1))),la={className:"gtflex"},sa=We((()=>(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Subtotal: ")],-1))),ra={className:"gttext"},na=We((()=>(0,s._)("div",{className:"gtflex"},[(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Delivery Fee: ")]),(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," N1,000.00")])],-1))),ia={className:"gtflex"},oa=We((()=>(0,s._)("div",{className:"gttext"},[(0,s._)("h3",null," Grand Total: ")],-1))),ca={className:"gttext"},ua=We((()=>(0,s._)("div",{className:"checkout"},[(0,s._)("button",null," CHECKOUT ")],-1))),ma=We((()=>(0,s._)("div",{className:"mycoform"},[(0,s._)("form",null,[(0,s._)("div",{className:"coflex"},[(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," First name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})]),(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," Last name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})])]),(0,s._)("label",{for:"street address"}," Street address "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"streetaddress",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Street Name"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Nearest recognisable Bus-stop/ Area around"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"state"}," State "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"state",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"phone"}," Phone "),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"phone",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"email"}," Email "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"email",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"note"}," Note (Optional) "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"note",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br")])],-1)));function da(e,a,t,n,i,o){return(0,s.wg)(),(0,s.iD)("div",Fe,[Object.keys(t.mycart).length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",Se,Ee)),ze,qe,Ye,Object.keys(t.mycart).length?((0,s.wg)(),(0,s.iD)("div",Ie,[Me,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.mycart,((a,l,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n,className:"cflex"},[(0,s._)("div",Ze,[(0,s._)("img",{src:t.getimage(l)},null,8,Ke)]),(0,s._)("div",Le,[(0,s._)("h4",null,(0,r.zw)(l),1),(0,s._)("div",Qe,[(0,s._)("h3",null,(0,r.zw)(t.getdesc(l)),1),(0,s._)("h3",null," Quantity: "+(0,r.zw)(a),1),(0,s._)("h4",null," Price: N"+(0,r.zw)(t.getprice(l)),1)])]),(0,s._)("div",Ve,[(0,s._)("h4",null," N"+(0,r.zw)(a*t.getprice(l)),1)]),(0,s._)("div",Be,[(0,s._)("button",{onClick:t=>e.Delete(a)}," X ",8,Ge)])])))),128)),Je,Re,Xe,$e,ea,aa,ta,(0,s._)("div",la,[sa,(0,s._)("div",ra,[(0,s._)("h3",null," N"+(0,r.zw)(t.subtotal()),1)])]),na,(0,s._)("div",ia,[oa,(0,s._)("div",ca,[(0,s._)("h3",null," N"+(0,r.zw)(t.grandtotal()),1)])]),ua,ma])):(0,s.kq)("",!0),(0,s.wy)((0,s._)("input",{type:"button","onUpdate:modelValue":a[0]||(a[0]=e=>i.moveco=e),onClick:a[1]||(a[1]=e=>o.checkout(t.mycart))},null,512),[[l.nr,i.moveco]])])}var _a={props:["mycart","mylist","inventory","getprice","calculateprice","getdesc","subtotal","grandtotal","getimage"],data(){return{moveco:[],fee:this.subtotal(),gi:1e3,iscart:!0}},methods:{checkout(){var e=this.mycart,a=new FormData;a.append("checkout",e),W()({url:"http://localhost/Phplessons/checkout.php",method:"post",data:e}).then((e=>{console.log(e.data)}),(e=>{console.log(e)}))}}};const pa=(0,S.Z)(_a,[["render",da],["__scopeId","data-v-9a9324e4"]]);var fa=pa;const ba=e=>((0,s.dD)("data-v-ea9fe9d8"),e=e(),(0,s.Cn)(),e),ga=ba((()=>(0,s._)("div",{className:"cobg"},[(0,s._)("h2",null," Check out ")],-1))),va=ba((()=>(0,s._)("div",{className:"cartcontainer"},[(0,s._)("div",{className:"mycoform"},[(0,s._)("form",null,[(0,s._)("div",{className:"coflex"},[(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," First name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})]),(0,s._)("div",null,[(0,s._)("label",{for:"street address"}," Last name "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text"})])]),(0,s._)("label",{for:"street address"}," Street address "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"streetaddress",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Street Name"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",Name:"firstname",type:"text",placeholder:"Nearest recognisable Bus-stop/ Area around"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"state"}," State "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"state",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"phone"}," Phone "),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"phone",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"email"}," Email "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"email",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br"),(0,s._)("label",{for:"note"}," Note (Optional) "),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(),(0,s._)("br"),(0,s._)("input",{className:"formname",id:"note",Name:"firstname",type:"text",placeholder:" House number"}),(0,s.Uk)(),(0,s._)("br")])])],-1)));function ha(e,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[ga,va],64)}const Na={},ka=(0,S.Z)(Na,[["render",ha],["__scopeId","data-v-ea9fe9d8"]]);var ya=ka;const xa=[{path:"/",name:"home",component:Ue},{path:"/about",name:"about",component:Te},{path:"/mycart",name:"cart",component:fa},{path:"/contactus",name:"contact",component:ya}],Ua=(0,z.p7)({history:(0,z.PO)(""),routes:xa});var wa=Ua,Ca=t(2346);(0,l.ri)(E).use(wa,Ca.Z,W()).mount("#app")}},a={};function t(l){var s=a[l];if(void 0!==s)return s.exports;var r=a[l]={id:l,loaded:!1,exports:{}};return e[l](r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(a,l,s,r){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,o=0;o<l.length;o++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](l[o])}))?l.splice(o--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,s,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var s,r,n=l[0],i=l[1],o=l[2],c=0;if(n.some((function(a){return 0!==e[a]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(o)var u=o(t)}for(a&&a(l);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},l=self["webpackChunkffwvue"]=self["webpackChunkffwvue"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(9438)}));l=t.O(l)})();
//# sourceMappingURL=app.48cb56f4.js.map