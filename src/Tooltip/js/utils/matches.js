function defaultMatchSelector(s) {
  var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i = matches.length;
  while (--i >= 0 && matches.item(i) !== this) {}
  return i > -1;
}

export const matches =
  typeof window === 'undefined' ? defaultMatchSelector :
  Element.prototype.matches               ||
  Element.prototype.matchesSelector       ||
  Element.prototype.webkitMatchesSelector ||
  Element.prototype.mozMatchesSelector    ||
  Element.prototype.msMatchesSelector     ||
  defaultMatchSelector
