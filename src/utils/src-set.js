// Generate an image tag using srcset for Netlify Large Media urls with image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<picture>
            <source srcset="/images/${url}?nf_resize=fit&w=700" media="(min-width: 1200px)">
            <source srcset="/images/${url}?nf_resize=fit&w=600" media="(min-width: 740px)">
            <img src="/images/${url}?nf_resize=fit&w=500" ast="${alt}" />
          </picture>`;s
};


