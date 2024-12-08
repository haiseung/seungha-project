(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6321:(e,r,a)=>{Promise.resolve().then(a.bind(a,234))},234:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>T});var t=a(5155),s=a(2115);let n=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:"rounded-lg border bg-card text-card-foreground shadow-sm ".concat(a),...s})});n.displayName="Card",s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:"flex flex-col space-y-1.5 p-6 ".concat(a),...s})}).displayName="CardHeader",s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("h3",{ref:r,className:"text-lg font-semibold leading-none tracking-tight ".concat(a),...s})}).displayName="CardTitle";let l=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:"p-6 pt-0 ".concat(a),...s})});l.displayName="CardContent";var o=s.forwardRef((e,r)=>{let{children:a,...n}=e,l=s.Children.toArray(a),o=l.find(d);if(o){let e=o.props.children,a=l.map(r=>r!==o?r:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,t.jsx)(i,{...n,ref:r,children:s.isValidElement(e)?s.cloneElement(e,void 0,a):null})}return(0,t.jsx)(i,{...n,ref:r,children:a})});o.displayName="Slot";var i=s.forwardRef((e,r)=>{let{children:a,...t}=e;if(s.isValidElement(a)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=r&&"isReactWarning"in r&&r.isReactWarning;return a?e.ref:(a=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a);return s.cloneElement(a,{...function(e,r){let a={...r};for(let t in r){let s=e[t],n=r[t];/^on[A-Z]/.test(t)?s&&n?a[t]=(...e)=>{n(...e),s(...e)}:s&&(a[t]=s):"style"===t?a[t]={...s,...n}:"className"===t&&(a[t]=[s,n].filter(Boolean).join(" "))}return{...e,...a}}(t,a.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,e):e})}return s.Children.count(a)>1?s.Children.only(null):null});i.displayName="SlotClone";var c=({children:e})=>(0,t.jsx)(t.Fragment,{children:e});function d(e){return s.isValidElement(e)&&e.type===c}function m(){for(var e,r,a=0,t="",s=arguments.length;a<s;a++)(e=arguments[a])&&(r=function e(r){var a,t,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r){if(Array.isArray(r)){var n=r.length;for(a=0;a<n;a++)r[a]&&(t=e(r[a]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(t&&(t+=" "),t+=r);return t}let u=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,p=((e,r)=>a=>{var t;if((null==r?void 0:r.variants)==null)return m(e,null==a?void 0:a.class,null==a?void 0:a.className);let{variants:s,defaultVariants:n}=r,l=Object.keys(s).map(e=>{let r=null==a?void 0:a[e],t=null==n?void 0:n[e];if(null===r)return null;let l=u(r)||u(t);return s[e][l]}),o=a&&Object.entries(a).reduce((e,r)=>{let[a,t]=r;return void 0===t||(e[a]=t),e},{});return m(e,l,null==r?void 0:null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce((e,r)=>{let{class:a,className:t,...s}=r;return Object.entries(s).every(e=>{let[r,a]=e;return Array.isArray(a)?a.includes({...n,...o}[r]):({...n,...o})[r]===a})?[...e,a,t]:e},[]),null==a?void 0:a.class,null==a?void 0:a.className)})("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),h=s.forwardRef((e,r)=>{let{className:a,variant:s,size:n,asChild:l=!1,...i}=e,c=l?o:"button";return(0,t.jsx)(c,{className:m(p({variant:s,size:n,className:a})),ref:r,...i})});h.displayName="Button";let x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return r.filter((e,r,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===r).join(" ").trim()};var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let g=(0,s.forwardRef)((e,r)=>{let{color:a="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:o="",children:i,iconNode:c,...d}=e;return(0,s.createElement)("svg",{ref:r,...y,width:t,height:t,stroke:a,strokeWidth:l?24*Number(n)/Number(t):n,className:f("lucide",o),...d},[...c.map(e=>{let[r,a]=e;return(0,s.createElement)(r,a)}),...Array.isArray(i)?i:[i]])}),b=(e,r)=>{let a=(0,s.forwardRef)((a,t)=>{let{className:n,...l}=a;return(0,s.createElement)(g,{ref:t,iconNode:r,className:f("lucide-".concat(x(e)),n),...l})});return a.displayName="".concat(e),a},N=b("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),v=b("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),j=()=>{let[e,r]=(0,s.useState)({typeName:"TY_TABLE",tableName:"LT_TABLE",structName:"LS_TABLE",fields:[{name:"MATNR",type:"MATNR",text:"Material",key:"X"},{name:"MAKTX",type:"MAKTX",text:"Description",key:""}]}),a=a=>{let t=e.fields.filter((e,r)=>r!==a);r({...e,fields:t})},o=(a,t)=>{let s=[...e.fields];s[a]=t,r({...e,fields:s})},i=(a,t)=>{r({...e,[a]:t})};return(0,t.jsx)(n,{className:"w-full max-w-3xl",children:(0,t.jsx)(l,{className:"p-6",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-1",children:"TYPE 이름"}),(0,t.jsx)("input",{className:"w-full p-2 border rounded",value:e.typeName,onChange:e=>i("typeName",e.target.value.toUpperCase()),placeholder:"TY_TABLE"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-1",children:"테이블 변수명"}),(0,t.jsx)("input",{className:"w-full p-2 border rounded",value:e.tableName,onChange:e=>i("tableName",e.target.value.toUpperCase()),placeholder:"LT_TABLE"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-1",children:"구조체 변수명"}),(0,t.jsx)("input",{className:"w-full p-2 border rounded",value:e.structName,onChange:e=>i("structName",e.target.value.toUpperCase()),placeholder:"LS_TABLE"})]})]}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"min-w-full border-collapse border border-gray-300",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"bg-gray-100",children:[(0,t.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"필드명"}),(0,t.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"TYPE"}),(0,t.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"텍스트"}),(0,t.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"키필드"}),(0,t.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"작업"})]})}),(0,t.jsx)("tbody",{children:e.fields.map((e,r)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,t.jsx)("input",{className:"w-full p-1 border rounded",value:e.name,onChange:a=>o(r,{...e,name:a.target.value.toUpperCase()}),placeholder:"MATNR"})}),(0,t.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,t.jsx)("input",{className:"w-full p-1 border rounded",value:e.type,onChange:a=>o(r,{...e,type:a.target.value.toUpperCase()}),placeholder:"MATNR"})}),(0,t.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,t.jsx)("input",{className:"w-full p-1 border rounded",value:e.text,onChange:a=>o(r,{...e,text:a.target.value}),placeholder:"Material"})}),(0,t.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,t.jsx)("input",{className:"w-full p-1 border rounded",value:e.key,onChange:a=>o(r,{...e,key:a.target.value.toUpperCase()}),placeholder:"X"})}),(0,t.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,t.jsx)("button",{onClick:()=>a(r),className:"p-1 text-red-600 hover:bg-red-100 rounded",children:(0,t.jsx)(N,{className:"w-4 h-4"})})})]},r))})]})}),(0,t.jsx)("div",{className:"flex gap-4",children:(0,t.jsxs)(h,{onClick:()=>{r({...e,fields:[...e.fields,{name:"",type:"",text:"",key:""}]})},className:"flex items-center gap-2",children:[(0,t.jsx)(v,{className:"w-4 h-4"})," 필드 추가"]})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"ABAP 코드"}),(0,t.jsx)("pre",{className:"text-sm whitespace-pre-wrap overflow-x-auto",children:(()=>{let r=e.fields.map(e=>"        ".concat(e.name.toLowerCase()," TYPE ").concat(e.type)).join(",\n");return"TYPES: BEGIN OF ".concat(e.typeName.toLowerCase(),",\n").concat(r,"\n      END OF ").concat(e.typeName.toLowerCase(),".\n\nDATA: ").concat(e.tableName.toLowerCase()," TYPE TABLE OF ").concat(e.typeName.toLowerCase(),",\n      ").concat(e.structName.toLowerCase()," TYPE ").concat(e.typeName.toLowerCase(),".")})()})]}),(0,t.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"Field Catalog"}),(0,t.jsx)("pre",{className:"text-sm whitespace-pre-wrap overflow-x-auto",children:(()=>{let r=e.fields.map(e=>"         ( fieldname = '".concat(e.name,"' ref_field = '").concat(e.name,"' key = '").concat(e.key,"' seltext_m = '").concat(e.text,"' )")).join("\n");return"DATA(lt_fcat) = VALUE slis_t_fieldcat_alv(\n".concat(r,"\n       ).")})()})]})]})]})})})},w=b("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),k=b("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),C=b("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]),A=b("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),E=()=>{let[e,r]=(0,s.useState)({type:"",text:"",pronunciation:""}),a=e=>{if(!e)return;let r=new SpeechSynthesisUtterance(e);r.lang="en-US",window.speechSynthesis.speak(r)},o=[{name:"일상 회화",icon:(0,t.jsx)(w,{className:"w-8 h-8"}),content:{type:"english",text:"A: How was your weekend?\nB: Great! I went to the movies.\nA: What did you watch?\nB: The new action movie. It was amazing!",pronunciation:"하우 워즈 유어 위켄드?\n그레잇! 아이 웬트 투 더 무비스.\n왓 디드 유 왓치?\n더 뉴 액션 무비. 잇 워즈 어메이징!"}},{name:"여행 영어",icon:(0,t.jsx)(k,{className:"w-8 h-8"}),content:{type:"english",text:"A: Excuse me, where's the check-in counter?\nB: It's right over there, next to Gate 3.\nA: Thank you! What time is boarding?\nB: Boarding starts in 30 minutes.",pronunciation:"익스큐즈 미, 웨어즈 더 체크인 카운터?\n잇츠 라잇 오버 데어, 넥스트 투 게잇 쓰리.\n땡큐! 왓 타임 이즈 보딩?\n보딩 스타츠 인 써티 미닛스."}},{name:"카페 영어",icon:(0,t.jsx)(C,{className:"w-8 h-8"}),content:{type:"english",text:"A: Hi, what can I get for you?\nB: I'd like an iced americano, please.\nA: What size would you like?\nB: Medium size, please.",pronunciation:"하이, 왓 캔 아이 겟 포 유?\n아이드 라이크 언 아이스드 아메리카노, 플리즈.\n왓 사이즈 우드 유 라이크?\n미디엄 사이즈, 플리즈."}}];return(0,t.jsx)(n,{className:"w-full max-w-2xl",children:(0,t.jsxs)(l,{className:"p-6",children:[(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 mb-6",children:o.map(e=>(0,t.jsxs)("button",{onClick:()=>r(e.content),className:"flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors",children:[e.icon,(0,t.jsx)("span",{className:"mt-2 text-sm text-center",children:e.name})]},e.name))}),e.text&&(0,t.jsx)("div",{className:"space-y-4",children:(0,t.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,t.jsx)("h3",{className:"font-semibold",children:"English"}),(0,t.jsx)("button",{onClick:()=>a(e.text),className:"p-2 hover:bg-gray-200 rounded-full","aria-label":"Speak",children:(0,t.jsx)(A,{className:"w-4 h-4"})})]}),(0,t.jsx)("pre",{className:"text-sm whitespace-pre-wrap",children:e.text}),(0,t.jsx)("h3",{className:"font-semibold mt-4 mb-2",children:"발음"}),(0,t.jsx)("pre",{className:"text-sm whitespace-pre-wrap",children:e.pronunciation})]})})]})})};function T(){return(0,t.jsxs)("main",{className:"container mx-auto p-4",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-8 text-center",children:"ABAP & English Learning Tools"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"ABAP Table Generator"}),(0,t.jsx)(j,{})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"English Conversation Practice"}),(0,t.jsx)(E,{})]})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[441,517,358],()=>r(6321)),_N_E=e.O()}]);