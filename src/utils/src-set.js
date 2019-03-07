// Generate an image tag using srcset for Netlify Large Media urls with image transforms

module.exports = (url, alt = "Missing alt text") => {
  return `<img srcset="/images/${url}?nf_resize=fit&w=320 320w,
                       /images/${url}?nf_resize=fit&w=480 480w,
                       /images/${url}?nf_resize=fit&w=800 800w"
              sizes="(max-width: 320px) 280px,
                     (max-width: 480px) 440px,
                      800px"
              src="/images/${url}?nf_resize=fit&w=s800"
              alt="${alt}">`;
};
