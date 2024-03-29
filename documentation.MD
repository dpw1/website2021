## Pushing changes to Github

1. Make sure you're on the `dev` branch;

2. Commit to git:

   ```
   git add .
   git commit -m "[ADD]"
   git push origin HEAD:dev
   ```

3. Push to Github Pages:

`npm run deploy`

## Adding new libraries via NPM

Always use --force to add new libraries. npm add test --force

## Ecwid Products

Always rebuild and deploy after updating Ecwid products.

There are two things to notice:

- Product pages are generated via the GraphQL interface wired up with Ecwid's API and Wordpress. If you update something at Ecwid, it will not update immediately on the website. You will need to rebuild & deploy to see the changes.

- Product showcases and the page /shop are wired up with the REST API. They will change immediately.

## Ecwid Bundle within website

The discount is hard coded. Currently it is %15 OFF for orders over \$45, if it changes please update the code.

## New blog posts

1. Write the blog post at `ezfy.club/wp-admin` and publish it;

After that you have two options:

- Send a post request via PostMan to http://localhost:8000/\_\_refresh
- Deploy

or...

- build locally to auto generate blog pages & sitemap if you have new pages:

  `gatsby build && gatsby serve`

- deploy.

  `npm run deploy`

## Updating content of already existing blog post

1. Edit the blog post at `ezfy.club/wp-admin`;
1. Clean cache:

   `gatsby clean`

1. Deploy

   `npm run deploy`

## Updating API for Ejunkie/Gumroad products

Every time you add or update data within e-junkie or gumroad you must update the API.

1. Go to the `permalinks` settings:

   https://www.ezfy.club/wp-admin/options-permalink.php

2. Click on the `Save Changes` button.
3. Return to your project and clean cache:

   `gatsby clean`

4. Deploy

   `npm run deploy`

Note: You may need to run `gatsby develop` to ensure the changes were effected.

## Developing

1. Run this:

   `gatsby develop --host localhost --port 8000`

## Adding a popup modal for promotions

Under the Popup.js file you can configure a popup modal.

## Adding GISTS to blog posts

1. Inside your blog post, add \[gist\]codehere\[gist\]. It automatically detects the dpw1 before the code.
2. It will be rendered by the function "renderGistsDynamically" within utils.js

## Hiding a product from the online page while developing

1. From the Ecwid admin, go to the product page that you are currently making
2. Go to "attributes" and, on the "development" textbox, add "true". You can use any value.
