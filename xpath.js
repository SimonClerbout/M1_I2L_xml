const xml_in = document.querySelector("#xml_in");
const xpath_in = document.querySelector("#xpath_in");

const content = document.querySelector("#content");
const about = document.querySelector("#about");
const children = document.querySelector("#children");
const xpath_out = document.querySelector("#xpath_out");

const parser = new DOMParser();
let xmldoc;

xml_in.onkeyup = function(){
  //console.log(this.value);
  xmldoc = parser.parseFromString(this.value, 'text/xml');
  about.innerText  = xmldoc.documentElement.tagName;
  content.innerText = xmldoc.documentElement.childElementCount;
  children.innerText = xmldoc.documentElement.firstElementChild.tagName;
};

xpath_in.onkeyup = function(){
  //console.log(this.value);
  const nodes = xmldoc.evaluate(this.value, xmldoc, null, XPathResult.ANY_TYPE, null);
  let result = nodes.iterateNext();
  let str = '';
  while (result) {
    str += new XMLSerializer().serializeToString(result) + " ";
    result = nodes.iterateNext();
  }

  xpath_out.innerText = str;

};
