export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^(https?:|mailto:|tel:)/
export const darkThemeKey = 'ui-dark-theme'
export const darkTheme = {
  'background': '#282c35',
  'code--background': '#373c49',
  'text': '#fff',
  'text--code': '#fff',
  'text--mask': 'rgba(255, 255, 255, 0.84)',
  'text--mask2': 'rgba(255, 255, 255, 0.54)',
  'text--link': '#ffa7c4',
  'text--link--lighten': '#d23669',
  'title': '#8a278c'
}

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function initTheme() {
  const isDark = window.localStorage.getItem(darkThemeKey) === 'true' || false
  const style = window.document.body.style
  Object.keys(darkTheme).forEach(key => {
    isDark && style.setProperty(`--${key}`, darkTheme[key])
    !isDark && style.removeProperty(`--${key}`)
  })
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

/*
 * find parent vm by ref
 * @param {String} ref
 * @param {Vue} vm
 * @param {any} def default value
 * @returns {Element}
 */
export function findContainerInVm(ref, vm, def) {
  if (!ref) return def;
  let container;
  let parent = vm;
  while ((parent = parent.$parent) && !container) {
    container = parent.$refs[ref];
  }
  // Ensure it's html element (ref could be component)
  if (container && container.$el) {
    container = container.$el;
  }
  return container || def;
}
