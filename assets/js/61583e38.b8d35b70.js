"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([[8994],{6472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"challenge/queryable-encryption","title":"\ud83d\udc50 RUN : Queryable Encryption challenge","description":"Remember to add the --projectId","source":"@site/docs/challenge/queryable-encryption.mdx","sourceDirName":"challenge","slug":"/challenge/queryable-encryption","permalink":"/docs/challenge/queryable-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/security-basics-labs/blob/main/docs/challenge/queryable-encryption.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Queryable Encryption","permalink":"/docs/queryable-encryption/"},"next":{"title":"Security Considerations and Summary","permalink":"/docs/considerations/"}}');var o=t(4848),i=t(8453);const c={sidebar_position:2},l="\ud83d\udc50 RUN : Queryable Encryption challenge",s={},a=[{value:"1. Install the necessary packages.",id:"1-install-the-necessary-packages",level:3},{value:"2. Set up the crypt_shared library.",id:"2-set-up-the-crypt_shared-library",level:3},{value:"3. Connect to your Atlas cluster.",id:"3-connect-to-your-atlas-cluster",level:3},{value:"4. Set up encryption key and providers, define the encrypted fields map, create an encrypted client, and set up the key vault.",id:"4-set-up-encryption-key-and-providers-define-the-encrypted-fields-map-create-an-encrypted-client-and-set-up-the-key-vault",level:3},{value:"5. Consider the following patient document:",id:"5-consider-the-following-patient-document",level:3},{value:"6. Create an encrypted collection based on the following requirements:",id:"6-create-an-encrypted-collection-based-on-the-following-requirements",level:3},{value:"7. Insert an encrypted document.",id:"7-insert-an-encrypted-document",level:3},{value:"6. Query the encrypted collection.",id:"6-query-the-encrypted-collection",level:3},{value:"7. Query the collection without encryption.",id:"7-query-the-collection-without-encryption",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-run--queryable-encryption-challenge",children:"\ud83d\udc50 RUN : Queryable Encryption challenge"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Remember to add the ",(0,o.jsx)(n.code,{children:"--projectId {project_id}"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Docs :  ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/app-services/data-api/csfle/",children:"CSFLE"})]}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"1-install-the-necessary-packages",children:"1. Install the necessary packages."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# CODE_BLOCK_16\n!pip install pymongo[encryption]\n!pip install pymongo\n!pip install requests\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-set-up-the-crypt_shared-library",children:"2. Set up the crypt_shared library."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# CODE_BLOCK_17\nimport os\nfrom pymongo import MongoClient\nfrom pymongo.encryption import Algorithm, ClientEncryption, QueryType\nfrom pymongo.encryption_options import AutoEncryptionOpts\nfrom bson.codec_options import CodecOptions\nfrom bson import json_util\nimport json\nimport requests\nimport platform\nimport tempfile\n\ndef setup_crypt_shared():\n    system = platform.system().lower()\n    if system == "linux":\n        url = "https://downloads.mongodb.com/linux/mongo_crypt_shared_v1-linux-x86_64-enterprise-ubuntu2004-6.0.6.tgz"\n        filename = "mongo_crypt_shared_v1-linux-x86_64-enterprise-ubuntu2004-6.0.6.tgz"\n    elif system == "darwin":\n        url = "https://downloads.mongodb.com/osx/mongo_crypt_shared_v1-macos-x86_64-enterprise-6.0.6.tgz"\n        filename = "mongo_crypt_shared_v1-macos-x86_64-enterprise-6.0.6.tgz"\n    elif system == "windows":\n        url = "https://downloads.mongodb.com/windows/mongo_crypt_shared_v1-windows-x86_64-enterprise-6.0.6.zip"\n        filename = "mongo_crypt_shared_v1-windows-x86_64-enterprise-6.0.6.zip"\n    else:\n        raise OSError("Unsupported operating system")\n\n    response = requests.get(url)\n    response.raise_for_status()\n\n    with tempfile.NamedTemporaryFile(delete=False, suffix=".tgz" if system != "windows" else ".zip") as tmp_file:\n        tmp_file.write(response.content)\n        tmp_file_path = tmp_file.name\n\n    extract_dir = tempfile.mkdtemp()\n\n    if system != "windows":\n        os.system(f"tar -xzf {tmp_file_path} -C {extract_dir}")\n        lib_path = os.path.join(extract_dir, "lib", "mongo_crypt_v1.so")\n    else:\n        os.system(f"powershell Expand-Archive -Path {tmp_file_path} -DestinationPath {extract_dir}")\n        lib_path = os.path.join(extract_dir, "bin", "mongo_crypt_v1.dll")\n\n    return lib_path\n\ncrypt_shared_lib_path = setup_crypt_shared()\nprint(f"Crypt shared library path: {crypt_shared_lib_path}")\n'})}),"\n",(0,o.jsx)(n.h3,{id:"3-connect-to-your-atlas-cluster",children:"3. Connect to your Atlas cluster."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# CODE_BLOCK_18\nconnection = !atlas clusters connectionStrings describe  MyNewCluster --projectId {project_id}\n\nusername = 'myUser'\npassword = 'mySecurePassword'\n\nnew_connection = connection[1].replace('mongodb+srv://', f'mongodb+srv://{username}:{password}@')\nprint(new_connection)\n\nfrom pymongo import MongoClient\nclient = MongoClient(new_connection)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-set-up-encryption-key-and-providers-define-the-encrypted-fields-map-create-an-encrypted-client-and-set-up-the-key-vault",children:"4. Set up encryption key and providers, define the encrypted fields map, create an encrypted client, and set up the key vault."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# CODE_BLOCK_19\n\nlocal_master_key = os.urandom(96)\nkms_providers = {"local": {"key": local_master_key}}\nkey_vault_namespace = "encryption.__keyVault"\nkms_provider_name="local"\nkey_vault_database_name = "encryption"\nkey_vault_collection_name = "__keyVault"\nkey_vault_namespace = f"{key_vault_database_name}.{key_vault_collection_name}"\nencrypted_database_name = "medicalRecords"\nencrypted_collection_name = "patients"\n\nauto_encryption_options = AutoEncryptionOpts(\n    kms_providers,\n    key_vault_namespace,\n    crypt_shared_lib_path=crypt_shared_lib_path\n)\n\nencrypted_client = MongoClient(\n    new_connection, auto_encryption_opts=auto_encryption_options)\n\nclient_encryption = ClientEncryption(\n    kms_providers=kms_providers,\n    key_vault_namespace=key_vault_namespace,\n    key_vault_client=encrypted_client,\n    codec_options=CodecOptions()\n)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"5-consider-the-following-patient-document",children:"5. Consider the following patient document:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'patient_document = {\n    "patientName": "Jon Doe",\n    "patientId": 12345678,\n    "patientRecord": {\n        "ssn": "987-65-4320",\n        "billing": {\n            "type": "Visa",\n            "number": "4111111111111111",\n        },\n    },\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"6-create-an-encrypted-collection-based-on-the-following-requirements",children:"6. Create an encrypted collection based on the following requirements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"'patientId' and 'billing' must be encrypted"}),"\n",(0,o.jsx)(n.li,{children:"patients will be queried by 'patientId'"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# TODO CODE_BLOCK_19\n\nencrypted_fields_map = <CODE_BLOCK_19>\n\n# TODO CODE_BLOCK_19\n\nclient_encryption.create_encrypted_collection(\n    encrypted_client[encrypted_database_name],\n    encrypted_collection_name,\n    <CODE_BLOCK_19>,\n    kms_provider_name,\n    {},\n)\n\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:" Answer "}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\nencrypted_fields_map = {\n"fields": [\n    {\n        "path": "patientRecord.ssn",\n        "bsonType": "string",\n        "queries": [{"queryType": "equality"}] # potentially \'range\'\n    },\n    {\n        "path": "patientRecord.billing",\n        "bsonType": "object",\n    }\n]\n}\nclient_encryption.create_encrypted_collection(\nencrypted_client[encrypted_database_name],\nencrypted_collection_name,\nencrypted_fields_map,\nkms_provider_name,\n{},\n)\n'})})]})}),"\n",(0,o.jsx)(n.h3,{id:"7-insert-an-encrypted-document",children:"7. Insert an encrypted document."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\n\n# TODO CODE_BLOCK_20\n\nencrypted_collection = encrypted_client[encrypted_database_name][encrypted_collection_name]\nresult = <CODE_BLOCK_20>\nprint(f"Inserted document ID: {result.inserted_id}")\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:" Answer "}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\nencrypted_collection = encrypted_client[encrypted_database_name][encrypted_collection_name]\nresult = encrypted_collection.insert_one(patient_document)\nprint(f"Inserted document ID: {result.inserted_id}")\n'})})]})}),"\n",(0,o.jsx)(n.h3,{id:"6-query-the-encrypted-collection",children:"6. Query the encrypted collection."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# TODO CODE_BLOCK_21\n\nfind_result = <CODE_BLOCK_21>\nprint(find_result)\n...\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:" Answer "}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'find_result = encrypted_collection.find_one({\n"patientRecord.ssn": "987-65-4320"\n})\nprint(find_result)\n'})})]})}),"\n",(0,o.jsx)(n.h3,{id:"7-query-the-collection-without-encryption",children:"7. Query the collection without encryption."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# CODE_BLOCK_22\n\nreg_mongoclient = MongoClient(new_connection)\n\n\n# TODO CODE_BLOCK_22\n\nfind_result = reg_mongoclient[encrypted_database_name][encrypted_collection_name].find_one(...)\nprint(find_result)\n\nall_docs = reg_mongoclient[encrypted_database_name][encrypted_collection_name].find()\nprint("\\nAll documents in the collection:")\nfor doc in all_docs:\n    print(doc)\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:" Answer "}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'print("\\nQuerying without encryption:")\n\nreg_mongoclient = MongoClient(new_connection)\n\nfind_result = reg_mongoclient[encrypted_database_name][encrypted_collection_name].find_one({\n"patientRecord.ssn": "987-65-4320"\n})\nprint(find_result)\n\nall_docs = reg_mongoclient[encrypted_database_name][encrypted_collection_name].find()\nprint("\\nAll documents in the collection:")\nfor doc in all_docs:\nprint(doc)\n'})})]})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(n.p,{children:["Start the chapter on ",(0,o.jsx)(n.a,{href:"./onprem",children:"On-Premises"})," for self-managed deployments."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);