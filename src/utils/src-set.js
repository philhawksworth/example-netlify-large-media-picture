// Generate an image tag using srcset for Netlify Large Media urls with image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<img srcset="/images/${url}?nf_resize=fit&w320 320w,
                       /images/${url}?nf_resize=fit&w480 480w,
                       /images/${url}?nf_resize=fit&w800 800w"
              sizes="(max-width: 320px) 280px,
                     (max-width: 480px) 440px,
                      800px"
              src="/images/${url}?nf_resize=fit&w800"
              alt="${alt}">`;
};
