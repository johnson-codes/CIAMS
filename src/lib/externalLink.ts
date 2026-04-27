export function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function externalLinkProps(href: string) {
  return isExternalHref(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};
}
