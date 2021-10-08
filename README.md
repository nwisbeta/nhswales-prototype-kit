# NHS Wales Prototype Kit (Static Site Generator Version)

> **NOTE: This is a work in progress**

The NHS Wales Prototype Kit is a fork of the NHS UK Prototype Kit.

That kit uses Express with Nunjucks to do dynamic templating. 

This fork is an experiment in using Eleventy to generate the site as static content,

The content to be publish is in the `/app` folder

`npm run build` will 
 - run eleventy to process any nunjucks and markdown
 - run gulp (to transpile css and javascript and copy assets)

 The generated static site will be output to the `_site` directory

 If hostin in Azure Storage using the static website feature, use [scripts/PublishTo-AzureStorage.ps1](scripts/PublishTo-AzureStorage.ps1)