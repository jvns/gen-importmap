# gen-importmap

Automatically generates an import map for a script, from your `node_modules`
directory.

# How to use it


**step 1**: install your dependencies

```
npm install whatever
```

**step 2**: generate the import map

Assuming the main entrypoint for your JS code is `script.js`:

```
npm install @jvns/gen-importmap
npm exec gen-importmap script.js
```

or 

```
npx @jvns/gen-importmap script.js
```

**step 3**: Copy the results into your HTML file

It'll print out something like this for you to manually copy into your `index.html`. You only have to do this once, unless you update your dependencies.

```
<script type="importmap">
{
  "imports": {
    "@atcute/client": "./node_modules/@atcute/client/dist/index.js",
    "@atcute/client/utils/did": "./node_modules/@atcute/client/dist/utils/did.js",
    "@atcute/oauth-browser-client": "./node_modules/@atcute/oauth-browser-client/dist/index.js",
    "nanoid/non-secure": "./node_modules/nanoid/non-secure/index.js"
  }
}
</script>
```

The idea here is that you include your `node_modules` directory in your build artifact which is a little weird but it does make the build tooling extremely simple.
