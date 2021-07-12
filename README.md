# Static Site with Contentful

## Requirements
- NodeJS >= 10.16.3
- Contentful space (create an account and project [here](https://www.contentful.com/sign-up/))

## Installation
Run this command to install the project:
```bash
npm install
```
## Credentials
In order to run the project correctly you need to create an `.env` file with the contenful API keys. You can based on the `.env.example` file. Just replace the values of these two variables with your Contentful space credentials
```bash
CF_SPACE="YOUR_CONTENTFUL_SPACE_ID"
CF_ACCESS_TOKEN="YOUR_CONTENTFUL_SPACE_API_KEY"
```
To see instructions on how to get these values go to these links:

[Find Contentful space ID](https://www.contentful.com/help/find-space-id/)

[Create Contentful API keys](https://www.contentful.com/developers/docs/references/authentication/#:~:text=You%20can%20also%20create%20API,and%20create%20your%20first%20token.)

## Dev server
Run the dev server:
```bash
npm run dev
```
Open http://localhost:8080 using your browser to see the site.

## Build the site
Run this command to build the static site:
```bash
npm run build
```

This will output the site in a folder called `build/site`. Serve the `index.html` to see the site.
