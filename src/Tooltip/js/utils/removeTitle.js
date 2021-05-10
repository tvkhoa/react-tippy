/**
* Removes the title from the tooltipped element, setting `data-original-title`
* appropriately
* @param {Element} el
*/
export default function removeTitle(el) {
  const title = el.getAttribute('rt-title')

  // Only set `data-original-rt-title` attr if there is a title
  if (title) {
    el.setAttribute('data-original-rt-title', title)
  }

  el.removeAttribute('rt-title')
}
