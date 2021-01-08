# project-logos

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Add logos

1. Add logos (png or svg) to the `public/logos` directory.

1. Push to github.

    ```
    git push
    ```

## Build the site

1. Update indexes data.

    ```
    yarn index
    ```

1. Update the version in `package.json` file.

1. Build the site.

    ```
    yarn build
    ```
   
1. Push to Github.

   ```
   git push
   ```

1. Add a new tag named with the version.

   ```
   git tag [version]
   ```

1. Deploy the site.

   ```
   git push --tags
   ```
   