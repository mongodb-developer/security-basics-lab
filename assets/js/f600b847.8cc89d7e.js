"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[4238],{7860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"setup/index","title":"Initial Setup and access for Atlas CLI","description":"Run this section in your notebook","source":"@site/docs/setup/index.mdx","sourceDirName":"setup","slug":"/setup/","permalink":"/security-basics-labs/docs/setup/","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-labs/blob/main/docs/setup/index.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/security-basics-labs/docs/intro"},"next":{"title":"MongoDB Network Security","permalink":"/security-basics-labs/docs/atlas/"}}');var s=t(4848),i=t(8453);const r={sidebar_position:2},a="Initial Setup and access for Atlas CLI",c={},l=[{value:"1. Install atlas CLI on the notebook environment.",id:"1-install-atlas-cli-on-the-notebook-environment",level:3},{value:"2. Authenticate the CLI against your Atlas organization.**",id:"2-authenticate-the-cli-against-your-atlas-organization",level:3},{value:"3. Create a new project called &quot;MySecureProj&quot;",id:"3-create-a-new-project-called-mysecureproj",level:3},{value:"4. Create your challenge cluster",id:"4-create-your-challenge-cluster",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"initial-setup-and-access-for-atlas-cli",children:"Initial Setup and access for Atlas CLI"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Run this section in your notebook"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["You can clone our template or use it in one of the online environments: ",(0,s.jsx)(n.a,{href:"https://github.com/mongodb-developer/security-lab-notebooks/blob/main/template_notebook.ipynb",children:"https://github.com/mongodb-developer/security-lab-notebooks/blob/main/template_notebook.ipynb"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Important! Each code block is marked with a number associated to the tutorial here."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This section will cover the required notebook operations that must be fulfilled to run the Challenges."}),"\n",(0,s.jsx)(n.h3,{id:"1-install-atlas-cli-on-the-notebook-environment",children:"1. Install atlas CLI on the notebook environment."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# CODE_BLOCK_1\n# prompt: Install Atlas CLI using this link https://fastdl.mongodb.org/mongocli/mongodb-atlas-cli_1.31.0_linux_x86_64.deb\n\n!wget https://fastdl.mongodb.org/mongocli/mongodb-atlas-cli_1.31.0_linux_x86_64.deb\n!dpkg -i mongodb-atlas-cli_1.31.0_linux_x86_64.deb\n\n## Might require:\n## !sudo dpkg -i mongodb-atlas-cli_1.31.0_linux_x86_64.deb\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-authenticate-the-cli-against-your-atlas-organization",children:"2. Authenticate the CLI against your Atlas organization.**"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# CODE_BLOCK_2\n# Authenticate with Atlas CLI\n!atlas auth login\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important!"})," This task will need to be canceled after you click the connect link ",(0,s.jsx)(n.a,{href:"https://account.mongodb.com/account/connect",children:"https://account.mongodb.com/account/connect"})," and input the 8 digit code prompted."]}),"\n",(0,s.jsx)(n.p,{children:'Once logged in press the "stop" button on that notebook cell.'}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Example "}),(0,s.jsx)(n.p,{children:"Run the cell and get the verification code as well as the authentication link and open it in a new tab:"}),(0,s.jsx)("img",{src:"../img/Init_CLI.png"}),(0,s.jsxs)(n.p,{children:["Proceed to login into ",(0,s.jsx)(n.a,{href:"https://account.mongodb.com/account/connect",children:"https://account.mongodb.com/account/connect"}),"  and provide the code in the opened authentication tab:"]}),(0,s.jsx)("img",{src:"../img/InputKey.png"}),(0,s.jsx)(n.p,{children:"Confirm the CLI access and go back to the notebook:"}),(0,s.jsx)("img",{src:"../img/AuthCLI.png"}),(0,s.jsx)(n.p,{children:"You should see an output in the notebook cell similar to:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"To verify your account, copy your one-time verification code:\nF7JK-PTRT\n\nPaste the code in the browser when prompted to activate your Atlas CLI. Your code will expire after 10 minutes.\n\nTo continue, go to https://account.mongodb.com/account/connect\n/usr/bin/xdg-open: 882: www-browser: not found\n/usr/bin/xdg-open: 882: links2: not found\n/usr/bin/xdg-open: 882: elinks: not found\n/usr/bin/xdg-open: 882: links: not found\n/usr/bin/xdg-open: 882: lynx: not found\n/usr/bin/xdg-open: 882: w3m: not found\nxdg-open: no method available for opening 'https://account.mongodb.com/account/connect'\nThere was an issue opening your browser\nSuccessfully logged in as <youruser>@mongodb.com.\nSelect one default organization and one default project.\n...\n"})}),(0,s.jsx)(n.p,{children:'Take a note of the relevant Organization ID for next steps and "STOP" the cell.'}),(0,s.jsx)("img",{src:"../img/SuccessPhase.png"})]}),"\n",(0,s.jsx)(n.h3,{id:"3-create-a-new-project-called-mysecureproj",children:'3. Create a new project called "MySecureProj"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# CODE_BLOCK_3\nimport getpass\n\norg_id = getpass.getpass('Enter your org ID: ')\n!atlas projects create MySecureProj --orgId {org_id}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hint!"})," :  Some notebook environments will need the getpass installation command ",(0,s.jsx)(n.code,{children:"!pip install getpass"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-create-your-challenge-cluster",children:"4. Create your challenge cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# CODE_BLOCK_4\nproject_id = getpass.getpass('Enter your project ID: ')\n!atlas clusters create MyNewCluster --provider AWS --region US_EAST_1 --tier M0 --projectId {project_id}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["Progress to ",(0,s.jsx)(n.a,{href:"./atlas",children:"Network Setup"})," for authorising access to your Atlas deployment."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);