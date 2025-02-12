"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[6160],{9376:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"atlas/index","title":"\ud83d\udcd8 MongoDB Security Configuration","description":"This guide covers essential security configurations for MongoDB deployments. Learn how to secure your databases using best practices for both Atlas and On-premises installations.","source":"@site/docs/atlas/index.mdx","sourceDirName":"atlas","slug":"/atlas/","permalink":"/security-basics-lab/docs/atlas/","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-lab/blob/main/docs/atlas/index.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc50 Run: Initial Setup","permalink":"/security-basics-lab/docs/setup/"},"next":{"title":"\ud83d\udc50 Run: Setup Network Access","permalink":"/security-basics-lab/docs/challenge/network"}}');var s=r(4848),i=r(8453),a=r(1470),l=r(9365);const c={sidebar_position:2},o="\ud83d\udcd8 MongoDB Security Configuration",u={},d=[{value:"Network Security",id:"network-security",level:2},{value:"IP Access List",id:"ip-access-list",level:3},{value:"Private Endpoints",id:"private-endpoints",level:3},{value:"Network Peering",id:"network-peering",level:3},{value:"Firewall Configuration",id:"firewall-configuration",level:3},{value:"Network Binding",id:"network-binding",level:3},{value:"VPN Access",id:"vpn-access",level:3},{value:"Encryption Configuration",id:"encryption-configuration",level:2},{value:"Encryption at Rest",id:"encryption-at-rest",level:3},{value:"Encryption at Rest",id:"encryption-at-rest-1",level:3},{value:"Transport Encryption (TLS/SSL)",id:"transport-encryption-tlsssl",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-mongodb-security-configuration",children:"\ud83d\udcd8 MongoDB Security Configuration"})}),"\n",(0,s.jsx)(n.p,{children:"This guide covers essential security configurations for MongoDB deployments. Learn how to secure your databases using best practices for both Atlas and On-premises installations."}),"\n",(0,s.jsx)(n.h2,{id:"network-security",children:"Network Security"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,s.jsx)(n.h3,{id:"ip-access-list",children:"IP Access List"}),(0,s.jsx)(n.p,{children:"Control which IP addresses can connect to your cluster:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// Using Atlas CLI\natlas accessLists create --currentIp\natlas accessLists create --ip "203.0.113.0/24"\n'})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Restricting access to known IP addresses prevents unauthorized connections and reduces the risk of external attacks."]}),(0,s.jsx)(n.h3,{id:"private-endpoints",children:"Private Endpoints"}),(0,s.jsx)(n.p,{children:"Set up AWS PrivateLink:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Create private endpoint\natlas privateEndpoints aws create --region us-east-1 --projectId 5e2211c17a3e5a48f5497de3 --output json\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Private endpoints ensure that traffic between your application and MongoDB Atlas remains within your private network, enhancing security and reducing exposure to the public internet."]}),(0,s.jsx)(n.h3,{id:"network-peering",children:"Network Peering"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Set up VPC peering\natlas networking peering create aws --accountId 854333054055 --atlasCidrBlock 192.168.0.0/24 --region us-east-1 --routeTableCidrBlock 10.0.0.0/24 --vpcId vpc-078ac381aa90e1e63\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Network peering allows you to connect your VPC to MongoDB Atlas's VPC, providing a secure and private connection without traversing the public internet."]})]}),(0,s.jsxs)(l.A,{value:"onprem",label:"On-Premises",children:[(0,s.jsx)(n.h3,{id:"firewall-configuration",children:"Firewall Configuration"}),(0,s.jsx)(n.p,{children:"Configure iptables rules:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Allow MongoDB port\niptables -A INPUT -p tcp --dport 27017 -j ACCEPT\n\n# Allow specific IP ranges\niptables -A INPUT -s 203.0.113.0/24 -p tcp --dport 27017 -j ACCEPT\n"})}),(0,s.jsx)(n.h3,{id:"network-binding",children:"Network Binding"}),(0,s.jsx)(n.p,{children:"Configure mongod.conf:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"net:\n  bindIp: 127.0.0.1,192.168.1.7\n  port: 27017\n"})}),(0,s.jsx)(n.h3,{id:"vpn-access",children:"VPN Access"}),(0,s.jsx)(n.p,{children:"Set up OpenVPN server:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Install OpenVPN\napt-get install openvpn\n\n# Configure client certificates\n./easyrsa build-client-full mongodb-client\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"encryption-configuration",children:"Encryption Configuration"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,s.jsx)(n.h3,{id:"encryption-at-rest",children:"Encryption at Rest"}),(0,s.jsx)(n.p,{children:"Atlas automatically encrypts all data using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS: AWS KMS"}),"\n",(0,s.jsx)(n.li,{children:"Azure: Azure Key Vault"}),"\n",(0,s.jsx)(n.li,{children:"GCP: Cloud KMS"}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Encryption at rest protects your data from unauthorized access if the storage media is compromised."]})]}),(0,s.jsxs)(l.A,{value:"onprem",label:"On-Premises",children:[(0,s.jsx)(n.h3,{id:"encryption-at-rest-1",children:"Encryption at Rest"}),(0,s.jsx)(n.p,{children:"Configure mongod.conf:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"security:\n  enableEncryption: true\n  encryptionKeyFile: /path/to/key.txt\n"})}),(0,s.jsx)(n.p,{children:"Generate encryption key:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rand -base64 32 > /path/to/key.txt\nchmod 600 /path/to/key.txt\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Encryption at rest protects your data from unauthorized access if the storage media is compromised."]}),(0,s.jsx)(n.h3,{id:"transport-encryption-tlsssl",children:"Transport Encryption (TLS/SSL)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"net:\n  tls:\n    mode: requireTLS\n    certificateKeyFile: /path/to/mongodb.pem\n    CAFile: /path/to/ca.pem\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importance:"})," Transport encryption ensures that data transmitted between clients and the database server is encrypted, preventing eavesdropping and tampering."]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"atlas",label:"MongoDB Atlas",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Network Security"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use private endpoints where possible"}),"\n",(0,s.jsx)(n.li,{children:"Regularly review IP access lists"}),"\n",(0,s.jsx)(n.li,{children:"Implement VPC peering"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Access Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Follow principle of least privilege"}),"\n",(0,s.jsx)(n.li,{children:"Regular credential rotation"}),"\n",(0,s.jsx)(n.li,{children:"Use strong authentication methods"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Monitoring and Alerts"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set up alerts for security events"}),"\n",(0,s.jsx)(n.li,{children:"Monitor access patterns"}),"\n",(0,s.jsx)(n.li,{children:"Review audit logs regularly"}),"\n"]}),"\n"]}),"\n"]})}),(0,s.jsx)(l.A,{value:"onprem",label:"On-Premises",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"System Security"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular system updates"}),"\n",(0,s.jsx)(n.li,{children:"Security patch management"}),"\n",(0,s.jsx)(n.li,{children:"Resource limits configuration"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Network Security"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configure firewalls"}),"\n",(0,s.jsx)(n.li,{children:"Set up VPN access"}),"\n",(0,s.jsx)(n.li,{children:"Implement network segmentation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Monitoring"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regular security audits"}),"\n",(0,s.jsx)(n.li,{children:"Log monitoring and analysis"}),"\n",(0,s.jsx)(n.li,{children:"Performance monitoring"}),"\n"]}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["Let's start the network access control ",(0,s.jsx)(n.a,{href:"./challenge/network",children:"challenge"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(8215);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),s=r(8215),i=r(3104),a=r(6347),l=r(205),c=r(7485),o=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=p(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,d]=g({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=o??x;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(o(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);