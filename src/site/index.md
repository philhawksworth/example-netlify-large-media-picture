---
title: Netlify Large Media & SrcSet
layout: default
---


## Image transformation

If you manage your source image asset files with [Netlify Large Media](https://www.netlify.com/features/large-media/), you can take advantage of the ability to perform on-the-fly [image transformations](https://www.netlify.com/docs/image-transformation/) to deliver resized and cropped versions of the images directly from Netlify's ADN.

Netlify transforms your image assets if add querystring parameters to your image src URLs.

For example, the image below in various sizes:

- [cupcake.jpg?nf_resize=fit&w=320](/images/cupcake.jpg?nf_resize=fit&w=380)
- [cupcake.jpg?nf_resize=fit&w=480](/images/cupcake.jpg?nf_resize=fit&w=480)
- [cupcake.jpg?nf_resize=fit&w=800](/images/cupcake.jpg?nf_resize=fit&w=800)


## Using srcset

These images have been added to the page in various sizes, using the image srcset attribute.

{% set somePhotos = [
  {url: "cupcake.jpg", credit: "Nathalie Jolie", creditURL: "https://unsplash.com/photos/2XK4UufbjdU"},
  {url: "tea-and-cake.jpg", credit: "Oleg Ivanov", creditURL: "https://unsplash.com/photos/QbNaVnyMmfw"},
  {url: "3-cupcakes.jpg", credit: "Clem Onojeghuo", creditURL: "https://unsplash.com/photos/hUGe-RCni3k"}
] %}

<section class="post-teaser">
{%- for photo in somePhotos %}
  <div class="credit">By <a href="{{ photo.creditURL }}" target="_BLANK" rel="noopener"> {{ photo.credit }}</a></div>
  {% imageSet photo.url, "Yummy cake" %}
{%- endfor -%}
</section >


## A srcset helper

Whatever tool you use to generate your HTML, chances are that it includes a facility to make shortcodes or macros.

This example uses a static site generator called [11ty](https://www.11ty.io) which gives us the ability to make a [shortcode](https://www.11ty.io/docs/shortcodes/) to output img tags and srcset attributes with image transformation parameters automatically added to the urls.

This shortcode:

```html
{%- raw -%}
{% imageSet photo.jpg %}
{% endraw %}
```

outputs this html:

```html
<img srcset="/images/photo.jpg?nf_resize=fit&w=320 320w,
             /images/photo.jpg?nf_resize=fit&w=480 480w,
             /images/photo.jpg?nf_resize=fit&w=800 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="/images/photo.jpg?nf_resize=fit&w=800">
```


## Get started with Netlify Large Media

For examples and documentation about how to start using [Netlify Large Media](https://www.netlify.com/features/large-media/), you should [visit the docs](https://www.netlify.com/docs/large-media/).

Need some reference code to get you going? You can use this site as an example, by [cloning it and creating a Netlify site automatically](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit) which you can then configure.

