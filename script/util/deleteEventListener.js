export default function deleteEventListener(element) {
  const elementClone = element.cloneNode(true);
  element.parentNode.replaceChild(elementClone, element);
  return elementClone;
}
