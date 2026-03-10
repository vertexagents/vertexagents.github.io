export function normalizePathname(pathname = "/") {
  return pathname.replace(/\/+$/, "") || "/";
}

export function isGalleryPath(pathname = "/") {
  return normalizePathname(pathname) === "/gallery";
}

export function mapNavHref(href, isGalleryPage) {
  if (!isGalleryPage) {
    return href;
  }

  if (href === "/gallery") {
    return href;
  }

  return href.startsWith("#") ? `/${href}` : href;
}

export function mapSectionHref(hash, isGalleryPage) {
  if (!hash.startsWith("#")) {
    return hash;
  }

  return isGalleryPage ? `/${hash}` : hash;
}
