"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[6933],{7728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"queryable-encryption/index","title":"\ud83d\udcd8  Queryable Encryption","description":"Introduction","source":"@site/docs/queryable-encryption/index.mdx","sourceDirName":"queryable-encryption","slug":"/queryable-encryption/","permalink":"/docs/queryable-encryption/","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-labs/blob/main/docs/queryable-encryption/index.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Run: Setup RBAC","permalink":"/docs/challenge/rbac"},"next":{"title":"Run: Setup Queryable Encryption","permalink":"/docs/challenge/queryable-encryption"}}');var i=t(4848),s=t(8453),l=t(1470),a=t(9365);const o={sidebar_position:6},c="\ud83d\udcd8  Queryable Encryption",d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why is Queryable Encryption Important in MongoDB?",id:"why-is-queryable-encryption-important-in-mongodb",level:2},{value:"Overview",id:"overview",level:2},{value:"Key Concepts in Queryable Encryption:",id:"key-concepts-in-queryable-encryption",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Setting Up Queryable Encryption",id:"setting-up-queryable-encryption",level:3},{value:"Using Encrypted Fields",id:"using-encrypted-fields",level:2},{value:"Creating &amp; Querying Documents with Encrypted Fields",id:"creating--querying-documents-with-encrypted-fields",level:3},{value:"Supported Query Types",id:"supported-query-types",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Challenges and Exercises",id:"challenges-and-exercises",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"--queryable-encryption",children:"\ud83d\udcd8  Queryable Encryption"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Queryable Encryption is a groundbreaking technology that allows you to run specific queries on encrypted data without the need to decrypt it on the server. In MongoDB, this means sensitive data can remain encrypted throughout its lifecycle \u2013 at rest, in transit, and even during query processing. By enabling Queryable Encryption, you significantly reduce the attack surface by minimizing the exposure of plaintext data, even to authorized database administrators. This strengthens your security posture and helps meet stringent compliance requirements."}),"\n",(0,i.jsx)(n.h2,{id:"why-is-queryable-encryption-important-in-mongodb",children:"Why is Queryable Encryption Important in MongoDB?"}),"\n",(0,i.jsx)(n.p,{children:"MongoDB, while offering various security features, can benefit significantly from Queryable Encryption for scenarios involving highly sensitive data. By implementing it, you ensure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Data Protection"}),": Sensitive data remains encrypted even when it is being processed on the database side, minimizing the risk of exposure in case of a security breach or unauthorized access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compliance with Regulations"}),": Helps meet stringent data privacy regulations like GDPR, HIPAA, and others that mandate strong encryption and control over sensitive information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reduced Insider Threat"}),": Even database administrators or authorized personnel with access to the database infrastructure cannot see the plaintext data without the appropriate decryption keys managed outside of the database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Maintain Functionality"}),": Unlike traditional encryption where data needs to be decrypted for querying, Queryable Encryption allows you to perform specific types of queries directly on the encrypted data, preserving application functionality."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(a.A,{value:"atlas",label:"MongoDB Atlas",children:[(0,i.jsx)(n.p,{children:"In MongoDB Atlas, Queryable Encryption is available for:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"M10 or larger clusters"}),"\n",(0,i.jsx)(n.li,{children:"MongoDB 7.0 or later"}),"\n",(0,i.jsx)(n.li,{children:"Enterprise or Atlas deployments"}),"\n"]}),(0,i.jsx)(n.p,{children:"To enable Queryable Encryption:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create an encryption key in your preferred Key Management System (local, AWS KMS, Azure Key Vault, GCP KMS)"}),"\n",(0,i.jsx)(n.li,{children:"Configure your Atlas cluster to use the KMS provider"}),"\n",(0,i.jsx)(n.li,{children:"Use the MongoDB driver with Queryable Encryption support"}),"\n"]})]}),(0,i.jsxs)(a.A,{value:"onprem",label:"On-Premises",children:[(0,i.jsx)(n.p,{children:"For self-hosted MongoDB deployments:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Requires Enterprise Edition for Client Side Level Encryption (community versions support Queryable Encryption only)"}),"\n",(0,i.jsx)(n.li,{children:"MongoDB 7.0 or later"}),"\n",(0,i.jsx)(n.li,{children:"A supported Key Management System"}),"\n"]}),(0,i.jsx)(n.p,{children:"Configuration steps:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set up a Key Management System"}),"\n",(0,i.jsx)(n.li,{children:"Configure mongod with encryption settings"}),"\n",(0,i.jsx)(n.li,{children:"Use the MongoDB driver with Queryable Encryption support"}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"key-concepts-in-queryable-encryption",children:"Key Concepts in Queryable Encryption:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Management System (KMS)"}),": A secure system for managing encryption keys. MongoDB Queryable Encryption relies on either local keys/on-premises vaults like Hasicorp, or external KMS providers like AWS KMS, Azure Key Vault, Google Cloud KMS to store and manage the cryptographic keys."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Encryption on Field Level Basis"}),": Encryption and decryption operations are performed on the client-side application before data is sent to or retrieved from the MongoDB server. This ensures that the server only handles encrypted data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Encryption Schema"}),": Defines which fields in your documents need to be encrypted and specifies the type of encryption to be used for each field, influencing the types of queries that can be performed on that field."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-queryable-encryption",children:"Setting Up Queryable Encryption"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Configure KMS Provider:\nThis step configures the Key Management System (KMS) provider. In this example, it shows how to configure AWS KMS by providing access key ID and secret access key. It also shows how to configure a master key with its key, region, and endpoint."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'const kmsProviders = {\n  aws: {\n    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n  }\n};\n\nconst masterKey = {\n  key: process.env.MASTER_KEY,\n  region: "us-east-1",\n  endpoint: "kms.us-east-1.amazonaws.com"\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"Or local key:\nThis shows how to configure a local key for testing purposes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'local_master_key = os.urandom(96)\nkms_providers = {"local": {"key": local_master_key}}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create Client Encryption:\nThis step creates a client with auto encryption options."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"encrypted_client = MongoClient(\n    new_connection, auto_encryption_opts=auto_encryption_options)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:'Define Encryption Schema:\nThis step defines the encryption schema for the fields that need to be encrypted. In this example, the "accountNumber" field is configured for equality queries.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'encrypted_fields_map = {\n    "fields": [\n        {\n            "path": "accountNumber",\n            "bsonType": "string",\n            "queries": [{"queryType": "equality"}] # potentially \'range\'\n        }\n    ]\n}\n;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"using-encrypted-fields",children:"Using Encrypted Fields"}),"\n",(0,i.jsx)(n.h3,{id:"creating--querying-documents-with-encrypted-fields",children:"Creating & Querying Documents with Encrypted Fields"}),"\n",(0,i.jsx)(n.p,{children:"The following example demonstrates the complete workflow for creating and querying documents with encrypted fields:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Step 1: Initialize the encrypted client with auto-encryption options\n# This client automatically handles encryption/decryption of specified fields\nencrypted_client = MongoClient(\n    new_connection, auto_encryption_opts=auto_encryption_options)\n\n# Step 2: Set up the client encryption object\n# This object manages the encryption keys and handles the encryption operations\nclient_encryption = ClientEncryption(\n    kms_providers=kms_providers,\n    key_vault_namespace=key_vault_namespace,\n    key_vault_client=encrypted_client,\n    codec_options=CodecOptions()\n)\n\n# Step 3: Create an encrypted collection with the specified encryption schema\n# This sets up the collection with automatic field-level encryption\nclient_encryption.create_encrypted_collection(\n    encrypted_client[encrypted_database_name],\n    encrypted_collection_name,\n    encrypted_fields_map,\n    kms_provider_name,\n    {},\n)\n\n# Step 4: Prepare a document with sensitive information\n# Note: The \'accountNumber\' field will be automatically encrypted based on the schema\ndoc = {\n    "owner": "Jon Doe",\n    "accountNumber": "987-65-4320",  # This field will be encrypted\n    "billing": {\n            "type": "Visa",\n            "number": "4111111111111111",  # Consider encrypting this field too\n        }\n}\n\n# Step 5: Get a reference to the encrypted collection\nencrypted_collection = encrypted_client[encrypted_database_name][encrypted_collection_name]\n\n# Step 6: Insert the document\n# The encryption happens automatically for the specified fields\nresult = encrypted_collection.insert_one(doc)\nprint(f"Inserted document ID: {result.inserted_id}")\n\n# Step 7: Query the encrypted collection\n# You can query encrypted fields normally - the encryption/decryption is handled automatically\nfind_result = encrypted_collection.find_one({\n    "accountNumber": "987-65-4320"  # The query value is automatically encrypted\n})\nprint(find_result)  # The result is automatically decrypted when retrieved\n'})}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates the power of Queryable Encryption - you can work with encrypted data as if it were normal data, while the encryption and decryption happen automatically in the background based on your schema configuration."}),"\n",(0,i.jsx)(n.h2,{id:"supported-query-types",children:"Supported Query Types"}),"\n",(0,i.jsx)(n.p,{children:"Queryable Encryption supports various query types depending on the encryption algorithm:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Equality Queries"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Exact matches on encrypted fields"}),"\n",(0,i.jsx)(n.li,{children:"Supported with deterministic encryption"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:'{"encryptedField": "exactValue"}'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Range Queries"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Comparison operators ($gt, $gte, $lt, $lte)"}),"\n",(0,i.jsx)(n.li,{children:"Available for range-queryable encrypted fields"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:'{"encryptedField": {"$gt": "value"}}'})]}),"\n",(0,i.jsx)(n.li,{children:"Requires RangePreview algorithm"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Management"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Securely Manage KMS Credentials: Protect your KMS access keys and credentials diligently. Use best practices for secret management."}),"\n",(0,i.jsx)(n.li,{children:"Regularly rotate encryption keys"}),"\n",(0,i.jsx)(n.li,{children:"Securely store and backup keys"}),"\n",(0,i.jsx)(n.li,{children:"Use separate keys for different environments"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Performance Considerations"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Understand Performance Implications: Queryable Encryption involves additional resources for indexing and storage on the server side. Test and optimize your application accordingly. Tune the relevant parameters and document design for best performance."}),"\n",(0,i.jsx)(n.li,{children:"Index encrypted fields when needed"}),"\n",(0,i.jsx)(n.li,{children:"Monitor query performance on encrypted fields"}),"\n",(0,i.jsx)(n.li,{children:"Use appropriate encryption algorithms"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Security Guidelines"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Principle of Least Privilege: Grant only the necessary permissions to access encryption keys."}),"\n",(0,i.jsx)(n.li,{children:"Follow the principle of least privilege"}),"\n",(0,i.jsx)(n.li,{children:"Encrypt only necessary fields"}),"\n",(0,i.jsx)(n.li,{children:"Regularly audit encryption configurations"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"challenges-and-exercises",children:"Challenges and Exercises"}),"\n",(0,i.jsxs)(n.p,{children:["For hands-on practice with Queryable Encryption concepts, check out our ",(0,i.jsx)(n.a,{href:"./challenge/queryable-encryption",children:"practical challenges"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"After implementing Queryable Encryption, you can reach the final closing phase of Additional Security Considerations and Summary."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8215);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),i=t(8215),s=t(3104),l=t(6347),a=t(205),o=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=y({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=a[t].value;i!==r&&(c(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}}}]);