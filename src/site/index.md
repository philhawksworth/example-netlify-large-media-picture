---
title: Netlify Large Media and the picture element
layout: default
---


## Image transformation

If you manage your source image asset files with [Netlify Large Media](https://www.netlify.com/features/large-media/?utm_source=github&utm_medium=nlm-example-pnh&utm_campaign=devex), you can take advantage of the ability to perform on-the-fly [image transformations](https://www.netlify.com/docs/image-transformation/?utm_source=github&utm_medium=nlm-example-pnh&utm_campaign=devex) to deliver resized and cropped versions of the images directly from [Netlify's ADN](https://www.netlify.com/features/adn/?utm_source=github&utm_medium=nlm-example-pnh&utm_campaign=devex).

Netlify transforms and caches your image assets if you add querystring parameters to your image src URLs.

For example, the image below in various sizes:

- [cupcake.jpg?nf_resize=fit&w=500](/images/cupcake.jpg?nf_resize=fit&w=500)
- [cupcake.jpg?nf_resize=fit&w=600](/images/cupcake.jpg?nf_resize=fit&w=600)
- [cupcake.jpg?nf_resize=fit&w=800](/images/cupcake.jpg?nf_resize=fit&w=800)


## Using the picture element

These images have been added to the page in various sizes, using the picture element with multiple image sources.

{% set somePhotos = [
  {url: "cupcake.jpg", credit: "Nathalie Jolie", creditURL: "https://unsplash.com/photos/2XK4UufbjdU"},
  {url: "tea-and-cake.jpg", credit: "Oleg Ivanov", creditURL: "https://unsplash.com/photos/QbNaVnyMmfw"},
  {url: "3-cupcakes.jpg", credit: "Clem Onojeghuo", creditURL: "https://unsplash.com/photos/hUGe-RCni3k"}
] %}

<section class="post-teaser">
{%- for photo in somePhotos %}
  <div class="credit">By <a href="{{ photo.creditURL }}" target="_BLANK" rel="noopener"> {{ photo.credit }}</a></div>
  {% picture photo.url, "Yummy cake" %}
{%- endfor -%}
</section >


## A picture helper

Whatever tool you use to generate your HTML, chances are that it includes a facility to make shortcodes or macros.

This example uses a static site generator called [11ty](https://www.11ty.io) which gives us the ability to make a [shortcode](https://www.11ty.io/docs/shortcodes/) to output picture tags with many image source attributes including  transformation parameters automatically added to the image urls.

This shortcode:

```html
{%- raw -%}
{% picture photo.jpg "Yummy cake" %}
{% endraw %}
```

outputs this html:

```html
<picture>
  <source srcset="/images/photo.jpg?nf_resize=fit&w=700" media="(min-width: 1200px)">
  <source srcset="/images/photo.jpg?nf_resize=fit&w=600" media="(min-width: 740px)">
  <img src="/images/photo.jpg?nf_resize=fit&w=500" alt="Yummy cake" />
</picture>
```


## Get started with Netlify Large Media

Need some reference code to get you going? You can clone [the code for this site]({{ pkg.repository.url }}) to use as an example.

Once cloned, you can find examples and documentation on how to configure [Netlify Large Media](https://www.netlify.com/features/large-media/), in [the docs](https://www.netlify.com/docs/large-media/?utm_source=github&utm_medium=nlm-example-pnh&utm_campaign=devex).

