# Docusaurus Template Workshop

This is a template to __create new Lab documentation sites__. Contains info on how to use Docusaurus and is a good starting point. This workshop provides a hands-on experience with MongoDB security features, including network security, authentication, role-based access control (RBAC), and queryable encryption.

### Installation

```
npx create-docusaurus@latest name-of-my-new-awesome-workshop https://github.com/mongodb-developer/docusaurus-workshop
cd name-of-my-new-awesome-workshop
npm start
```

As you don't want to get the changes of these sample pages, just delete the `.git` folder and then `git init`.

Open `docusaurus.config.js` and change at least the `workshopName`

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To test a translation use `npm run start -- --locale es` for Spanish

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Use the provided Github Action, or deploy manually after building

## Contributing

As `main` is protected, submit a pull request to be reviewed.

## Workshop Logic

This workshop guides you through the following security concepts:

1.  **Initial Setup and Network Security**: Learn how to set up your environment and configure network access to your MongoDB Atlas cluster.
2.  **Authentication**: Explore different authentication methods, including username/password and X.509 certificate authentication.
3.  **Role-Based Access Control (RBAC)**: Implement fine-grained access control using RBAC to manage user permissions.
4.  **Queryable Encryption**: Discover how to encrypt data at rest and in transit while still being able to query it.

Each section includes a challenge where you can apply what you've learned. Follow the instructions in each challenge to complete the tasks.

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It's available on https://mongodb-developer.github.io/docusaurus-workshop/.

### Disclaimer

Use at your own risk; not a supported MongoDB product
