// Generate an image tag using srcset for Netlify Large Media urls with image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<img srcset="/images/${url}?nf_resize=fit&w=400 400w,
                       /images/${url}?nf_resize=fit&w=600 600w,
                       /images/${url}?nf_resize=fit&w=700 700w"
              sizes="(max-width: 740px) 600px,
                     (max-width: 1200px) 700px,
                      1000px"
              src="/images/${url}?nf_resize=fit&w=1000"
              alt="${alt}">`;
};

