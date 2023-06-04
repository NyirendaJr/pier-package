(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{421:function(t,e,i){"use strict";i.r(e);var n=i(426),s={name:"ProfileCard",props:{values:Object},mounted:function(){this.bindValues()},data:function(){return{name:"Dewanda Raisif",image:"https://images.unsplash.com/photo-1553804194-fb1475b509b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",bio:"Experienced developer working on some cool stuff @Microsoft on Azure.",twitter:"https://twitter.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com",status:"verified"}},computed:{noImage:function(){return!this.image||!this.image.length},noName:function(){return!this.name||!this.name.length},noBio:function(){return!this.bio||!this.bio.length},noTwitter:function(){return!this.twitter||!this.twitter.length},noLinkedin:function(){return!this.linkedin||!this.linkedin.length},noInstagram:function(){return!this.instagram||!this.instagram.length},noSocials:function(){return this.noTwitter&&this.noLinkedin&&this.noInstagram},noStatus:function(){return!this.status||!this.status.length},noCard:function(){return this.noImage&&this.noName&&this.noBio&&this.noSocials&&this.noStatus}},watch:{values:{deep:!0,handler:function(){this.bindValues()}}},methods:{bindValues:function(){if(this.values){var t=this.values,e=t.name,i=t.image,n=t.bio,s=t.twitter,a=t.linkedin,r=t.instagram,o=t.status;n=n&&n.length?n.substring(0,55):"",this.image=i,this.name=e,this.bio=n.trim()+(n.length>50?"...":""),this.twitter=s,this.linkedin=a,this.instagram=r,this.status=o}}},components:{PierCardHeading:n.a}},a=(i(431),i(0)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.noCard?i("div",{staticClass:"PierCard ProfileCard shadow rounded-lg overflow-hidden bg-white text-black px-5 pt-5 pb-4"}):i("div",{staticClass:"PierCard ProfileCard shadow-md rounded-lg overflow-hidden bg-white text-black px-5 pt-5 pb-4"},[t.noImage&&t.noName&&t.noBio?t._e():i("div",{staticClass:"flex"},[t.noImage?t._e():i("div",{staticClass:"relative flex-shrink-0 w-16 h-16 bg-grey-500 rounded-full mr-3 mt-1"},[i("img",{staticClass:"absolute pin rounded-full object-cover w-full h-full",attrs:{src:t.image,alt:""}})]),t._v(" "),t.noName&&t.noBio?t._e():i("PierCardHeading",{attrs:{heading:t.name,"sub-heading":t.bio}})],1),t._v(" "),t.noSocials&&t.noStatus?t._e():i("div",{staticClass:"flex items-center border-t pt-2 -mx-5 mt-1 -mb-2 px-5"},[t.noSocials?t._e():i("div",{staticClass:"flex flex-1 items-center"},[t.noTwitter?t._e():i("a",{staticClass:"mr-5",attrs:{title:"twitter",target:"_blank",href:t.twitter}},[i("svg",{staticClass:"feather feather-twitter",attrs:{width:"18",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("path",{attrs:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}})])]),t._v(" "),t.noLinkedin?t._e():i("a",{staticClass:"mr-5",attrs:{title:"linkedin",target:"_blank",href:t.linkedin}},[i("svg",{staticClass:"feather feather-linkedin",attrs:{width:"18",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("path",{attrs:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}}),i("rect",{attrs:{x:"2",y:"9",width:"4",height:"12"}}),i("circle",{attrs:{cx:"4",cy:"4",r:"2"}})])]),t._v(" "),t.noInstagram?t._e():i("a",{attrs:{title:"instagram",target:"_blank",href:t.instagram}},[i("svg",{staticClass:"feather feather-instagram",attrs:{width:"18",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("rect",{attrs:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}}),i("path",{attrs:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}}),i("line",{attrs:{x1:"17.5",y1:"6.5",x2:"17.5",y2:"6.5"}})])])]),t._v(" "),t.noStatus?t._e():i("span",{staticClass:"rounded-full px-3 py-1 bg-blue-200 text-primary font-bold uppercase text-sm tracking-wider"},[t._v("\n          "+t._s(t.status)+"\n      ")])])])}),[],!1,null,null,null);e.default=r.exports},426:function(t,e,i){"use strict";var n={name:"PierCardHeading",props:{heading:{type:String,default:"The trouble with always withering onwards, part II"},subHeading:{type:String}}},s=i(0),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"text-2xl mb-1 font-bold leading-tight"},[t._v("\n    "+t._s(t.heading)+"\n  ")]),t._v(" "),t.subHeading&&t.subHeading.length?i("p",{staticClass:"mb-3 text-lg"},[t._v("\n    "+t._s(t.subHeading)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.a=a.exports},428:function(t,e,i){var n=i(432);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(9)(n,s);n.locals&&(t.exports=n.locals)},431:function(t,e,i){"use strict";i(428)},432:function(t,e,i){(t.exports=i(8)(!1)).push([t.i,"\n.ProjectCard h3.text-2xl{\n    line-height: 1.4;\n    font-size: 1.6rem;\n}\n",""])}}]);