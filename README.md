# Deploy React + Vite to GitHub Pages

Follow these steps to deploy your React + Vite application to GitHub Pages.

1. **Create a New GitHub Repository**

   - Create a new GitHub repository, making it public, and submit it.
   - Copy the link of the repository.

2. **Connect Your Local Project to GitHub**

   - Open your React program folder in Visual Studio Code.
   - Open a terminal and check the current remote repository link history:
     ```bash
     git remote -v
     ```
   - If the list is empty, that's okay. If not, remove the existing origin:
     ```bash
     git remote remove origin
     ```
   - Add your GitHub repository as the new origin:
     ```bash
     git remote add origin https://github.com/YourUsername/YourRepositoryName.git
     ```
   - Verify the new remote connection:
     ```bash
     git remote -v
     ```

3. **Build Your Application**

   - Make sure you are in the 'part1' directory:
     ```bash
     cd part1
     ```
   - Build your project:
     ```bash
     npm run build
     ```

4. **Create a 'gh-pages' Branch**

   - Install the 'gh-pages' package:
     ```bash
     npm install -DE gh-pages
     ```
   - In your 'package.json' file, add the following lines:
     ```json
     "homepage": "https://YourUsername.github.io/YourRepositoryName",
     "deploy": "npm run build && gh-pages -d dist"
     ```
   - Your 'package.json' should look like this:
     ```json
     {
       "name": "part1",
       "private": true,
       "version": "0.0.0",
       "homepage": "https://Pimila.github.io/react-perusteet2",
       "type": "module",
       "scripts": {
         "dev": "vite",
         "build": "vite build",
         "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
         "preview": "vite preview",
         "deploy": "npm run build && gh-pages -d dist"
       },
       "dependencies": {
         "react": "^18.2.0",
         "react-dom": "^18.2.0"
       },
       "devDependencies": {
         "@types/react": "^18.2.15",
         "@types/react-dom": "^18.2.7",
         "@vitejs/plugin-react": "^4.0.3",
         "eslint": "^8.45.0",
         "eslint-plugin-react": "^7.32.2",
         "eslint-plugin-react-hooks": "^4.6.0",
         "eslint-plugin-react-refresh": "^0.4.3",
         "gh-pages": "6.0.0",
         "vite": "^4.4.5"
       }
     }
     ```

5. **Deploy Your Application**

   - Run the deploy command in the 'part1' directory:
     ```bash
     npm run deploy
     ```
   - Check your GitHub repository to ensure the 'gh-pages' branch has been created, and all files from the 'dist' folder are there.

6. **Configure GitHub Pages**

   - Go to your GitHub repository's 'Settings' > 'Pages' section.
   - In the 'Branch' dropdown, select 'gh-pages/(root)'.
   - Your site should be available at:
     ```
     https://YourUsername.github.io/YourRepositoryName/
     ```
   - You can click the "Visit site" button to see your site.

7. **Update 'vite.config.ts' and Re-Deploy**

   - Open the 'vite.config.ts' file and add the following line:
     ```javascript
     base: '/YourRepositoryName',
     ```
   - Save the file.
    import { defineConfig } from 'vite'
	import react from '@vitejs/plugin-react'

	// https://vitejs.dev/config/
	export default defineConfig({
  	plugins: [react()],
 	 base: '/react-perusteet2',
	})
   - Run the deploy command again:
     ```bash
    npm run deploy
     ```
   - Go to your GitHub repository's 'Settings' > 'Pages' section.
   - Click the "Visit Site" button to ensure everything is working correctly.

8. **Fix 404 Errors (If Any)**

   If you encounter 404 errors, create a custom '404.html' file.

   - In the 'part1/public' directory, create a '404.html' file with the provided content.
   <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Single Page Apps for GitHub Pages</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current url and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new url with only a query string and hash fragment,
      // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
      // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
      // Note: this 404.html file must be at least 512 bytes for it to work
      // with Internet Explorer (it is currently > 512 bytes)

      // If you're creating a Project Pages site and NOT using a custom domain,
      // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
      // This way the code will only replace the route part of the path, and not
      // the real directory in which the app resides, for example:
      // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
      // https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
      // Otherwise, leave pathSegmentsToKeep as 0.
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );

    </script>
  </head>
  <body>
  </body>
</html>

   - Run the deploy command again:
     ```bash
     npm run deploy
     ```

9. **Verify Your Deployed Site**

   - Go to your GitHub repository's 'Settings' > 'Pages' section.
   - Click the "Visit Site" button to ensure everything is working correctly.

10. **Share Your Application**

    You can now share the link to your deployed application for its intended purpose.

Enjoy your React + Vite application on GitHub Pages!
