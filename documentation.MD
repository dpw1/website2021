## Pushing changes to Github

1. Make sure you're on the `dev` branch;

2. Commit to git:

   ```
   git add .
   git commit -m "[ADD]"
   git push origin dev
   ```

3. Push to Github Pages:

`npm run deploy`

## New blog posts

1. Write the blog post at `ezfy.club/wp-admin` and publish it;
2. build locally to auto generate blog pages & sitemap if you have new pages:

   `gatsby build && gatsby serve`

3. deploy.

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
