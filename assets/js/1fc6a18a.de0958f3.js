"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[4198],{5245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"challenge/network","title":"\ud83d\udc50 RUN : Network challenge","description":"1. Add \'My current IP\' temporary into the atlas project","source":"@site/docs/challenge/network.mdx","sourceDirName":"challenge","slug":"/challenge/network","permalink":"/security-basics-labs/docs/challenge/network","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-labs/blob/main/docs/challenge/network.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"MongoDB Network Security","permalink":"/security-basics-labs/docs/atlas/"},"next":{"title":"Authentication","permalink":"/security-basics-labs/docs/authentication/"}}');var n=a(4848),r=a(8453);const o={sidebar_position:1},c="\ud83d\udc50 RUN : Network challenge",i={},l=[{value:"1. Add &#39;My current IP&#39; temporary into the atlas project",id:"1-add-my-current-ip-temporary-into-the-atlas-project",level:3},{value:"2. Check that &#39;My current IP&#39; was added:",id:"2-check-that-my-current-ip-was-added",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-run--network-challenge",children:"\ud83d\udc50 RUN : Network challenge"})}),"\n",(0,n.jsx)(t.h3,{id:"1-add-my-current-ip-temporary-into-the-atlas-project",children:"1. Add 'My current IP' temporary into the atlas project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# CODE_BLOCK_5\nfrom datetime import datetime, timedelta\n\n# Calculate the date and time 24 hours from now\ndelete_after = (datetime.utcnow() + timedelta(hours=24)).isoformat() + 'Z'\n\n!atlas accessLists <CODE_BLOCK_5>\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Docs : atlas ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/cli/current/command/atlas-accessLists/#std-label-atlas-accessLists",children:"accessList"})]}),"\n"]}),(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:" Answer "}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from datetime import datetime, timedelta\n\n# Calculate the date and time 24 hours from now\ndelete_after = (datetime.utcnow() + timedelta(hours=24)).isoformat() + 'Z'\n\n\n\n!atlas accessLists create --currentIp --projectId {project_id} --deleteAfter \"{delete_after}\"\n"})})]})]}),"\n",(0,n.jsx)(t.h3,{id:"2-check-that-my-current-ip-was-added",children:"2. Check that 'My current IP' was added:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# CODE_BLOCK_6\n!atlas accessLists list --output json --projectId {project_id}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsxs)(t.p,{children:["Start the chapter on ",(0,n.jsx)(t.a,{href:"./authentication",children:"Authentication"})," for database user management."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);