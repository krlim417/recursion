// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const results = [];
  const getElementsMatchingClassName = function(element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element);
    }
    element.childNodes.forEach(childNode => {
      getElementsMatchingClassName(childNode);
    });
  };
  getElementsMatchingClassName(document.body, []);
  return results;
};
