"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[1700],{6479:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"rbac/index","title":"Role-Based Access Control (RBAC)","description":"Role-Based Access Control (RBAC) in MongoDB provides fine-grained access control for your database. It allows you to grant users specific privileges on databases, collections, and operations.","source":"@site/docs/rbac/index.mdx","sourceDirName":"rbac","slug":"/rbac/","permalink":"/security-basics-labs/docs/rbac/","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-labs/blob/main/docs/rbac/index.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Run: Setup Authentication","permalink":"/security-basics-labs/docs/challenge/authentication"},"next":{"title":"Run: Setup RBAC","permalink":"/security-basics-labs/docs/challenge/rbac"}}');var l=s(4848),a=s(8453),i=s(1470),t=s(9365);const o={sidebar_position:4},c="Role-Based Access Control (RBAC)",d={},u=[{value:"Understanding RBAC Components",id:"understanding-rbac-components",level:2},{value:"Roles",id:"roles",level:3},{value:"Built-in Roles in Atlas",id:"built-in-roles-in-atlas",level:3},{value:"Managing Roles in Atlas",id:"managing-roles-in-atlas",level:3},{value:"Custom Roles Example",id:"custom-roles-example",level:3},{value:"Built-in Roles in MongoDB",id:"built-in-roles-in-mongodb",level:3},{value:"Managing Roles",id:"managing-roles",level:3},{value:"Role Management Best Practices",id:"role-management-best-practices",level:2},{value:"Practical Examples",id:"practical-examples",level:2},{value:"Application-Specific Roles",id:"application-specific-roles",level:3},{value:"Application-Specific Roles",id:"application-specific-roles-1",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"role-based-access-control-rbac",children:"Role-Based Access Control (RBAC)"})}),"\n",(0,l.jsx)(n.p,{children:"Role-Based Access Control (RBAC) in MongoDB provides fine-grained access control for your database. It allows you to grant users specific privileges on databases, collections, and operations."}),"\n",(0,l.jsx)(n.h2,{id:"understanding-rbac-components",children:"Understanding RBAC Components"}),"\n",(0,l.jsx)(n.h3,{id:"roles",children:"Roles"}),"\n",(0,l.jsx)(n.p,{children:"A role consists of:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Privileges (actions allowed on resources)"}),"\n",(0,l.jsx)(n.li,{children:"Roles (other roles from which this role inherits privileges)"}),"\n"]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(t.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,l.jsx)(n.h3,{id:"built-in-roles-in-atlas",children:"Built-in Roles in Atlas"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Organization Roles"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Organization Owner"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Organization Member"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Organization Read Only"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Project Roles"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Project Owner"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Project Data Access Admin"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Project Data Access Read/Write"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Project Read Only"})}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.h3,{id:"managing-roles-in-atlas",children:"Managing Roles in Atlas"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'## Using Atlas CLI to create a user with specific roles\natlas dbusers create \\\n  --username dataAdmin \\\n  --password "securePassword" \\\n  --role "readWrite@admin" \\\n  --projectId your-project-id\n\n## Add additional roles\natlas dbusers update dataAdmin \\\n  --role "readAnyDatabase@admin" \\\n  --projectId your-project-id\n'})}),(0,l.jsx)(n.h3,{id:"custom-roles-example",children:"Custom Roles Example"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"## Create a custom role for sales data access\natlas customDbRoles create <role-name> --inheritedRole read@salesDB --projectId {project_id}\n\n## Assign a custom role\natlas dbusers create --username readOnlyUser --password readOnlyPass --role <role-name> --projectId {project_id}\n"})})]}),(0,l.jsxs)(t.A,{value:"onprem",label:"On-Premises",children:[(0,l.jsx)(n.h3,{id:"built-in-roles-in-mongodb",children:"Built-in Roles in MongoDB"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Database User Roles"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"read"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"readWrite"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Database Administration Roles"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"dbAdmin"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"dbOwner"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"userAdmin"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Cluster Administration Roles"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"clusterAdmin"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"clusterManager"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"clusterMonitor"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hostManager"})}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.h3,{id:"managing-roles",children:"Managing Roles"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'// Create an admin user\nuse admin\ndb.createUser({\n  user: "dbAdmin",\n  pwd: "securePassword",\n  roles: [\n    { role: "userAdmin", db: "admin" },\n    { role: "dbAdmin", db: "admin" }\n  ]\n})\n\n// Create application-specific roles\ndb.createRole({\n  role: "applicationUser",\n  privileges: [\n    {\n      resource: { db: "appDB", collection: "" },\n      actions: [ "find", "insert", "update" ]\n    }\n  ],\n  roles: []\n})\n'})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"role-management-best-practices",children:"Role Management Best Practices"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(t.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Project-Level Access Control"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use Project roles for team-based access"}),"\n",(0,l.jsx)(n.li,{children:"Implement separate projects for development/production"}),"\n",(0,l.jsx)(n.li,{children:"Regular audit of project members"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"API Access"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use programmatic API keys with appropriate roles"}),"\n",(0,l.jsx)(n.li,{children:"Rotate API keys regularly"}),"\n",(0,l.jsx)(n.li,{children:"Monitor API key usage"}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Example:"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'// Create programmatic API key\natlas organizations apiKeys create \\\n  --desc "Application API Key" \\\n  --role ORG_MEMBER\n'})})]}),(0,l.jsxs)(t.A,{value:"onprem",label:"On-Premises",children:[(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Role Hierarchy"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Design role hierarchy based on job functions"}),"\n",(0,l.jsx)(n.li,{children:"Use role inheritance to maintain consistency"}),"\n",(0,l.jsx)(n.li,{children:"Document role relationships"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Monitoring and Auditing"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enable audit logging for role changes"}),"\n",(0,l.jsx)(n.li,{children:"Regular review of role assignments"}),"\n",(0,l.jsx)(n.li,{children:"Document all role modifications"}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Example:"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// Enable audit logging\ndb.setParameter({\n  auditAuthorizationSuccess: true\n})\n"})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"practical-examples",children:"Practical Examples"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(t.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,l.jsx)(n.h3,{id:"application-specific-roles",children:"Application-Specific Roles"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'// Create read-only analytics role\natlas customDBRoles create analyticsReader \\\n  --privilege \'{ resource: { db: "analytics", collection: "" }, actions: ["find"] }\' \\\n  --projectId your-project-id\n\n Custom role \'analyticsReader\' successfully created.\n\n// Assign role to user\natlas dbusers create \\\n  --username analyst \\\n  --password "securePassword" \\\n  --role analyticsReader \\\n  --projectId your-project-id\n\nDatabase user \'analyst\' successfully created.  \n'})})]}),(0,l.jsxs)(t.A,{value:"onprem",label:"On-Premises",children:[(0,l.jsx)(n.h3,{id:"application-specific-roles-1",children:"Application-Specific Roles"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'// Create a custom role for order processing\ndb.createRole({\n  role: "orderProcessor",\n  privileges: [\n    {\n      resource: { db: "sales", collection: "orders" },\n      actions: [ "find", "insert", "update" ]\n    },\n    {\n      resource: { db: "sales", collection: "customers" },\n      actions: [ "find" ]\n    }\n  ],\n  roles: []\n})\n\n// Assign role to user\ndb.createUser({\n  user: "orderApp",\n  pwd: "securePassword",\n  roles: [ "orderProcessor" ]\n})\n'})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,l.jsxs)(n.p,{children:["After understanding RBAC, lets do a ",(0,l.jsx)(n.a,{href:"./challenge/rbac",children:"challenge"})," to test our knowledge."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var r=s(8215);const l={tabItem:"tabItem_Ymn6"};var a=s(4848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>R});var r=s(6540),l=s(8215),a=s(3104),i=s(6347),t=s(205),o=s(7485),c=s(1682),d=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:l}}=e;return{value:n,label:s,attributes:r,default:l}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const l=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=j({queryString:s,groupId:l}),[x,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,d.Dv)(s);return[l,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:l}),b=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),l=t[s].value;l!==r&&(c(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function R(e){const n=(0,m.A)();return(0,g.jsx)(A,{...e,children:u(e.children)},String(n))}}}]);