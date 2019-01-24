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

let result;

xpath_in.onkeyup = function(){
  //console.log(this.value);
  xmldoc = parser.parseFromString(this.value, 'text/xml');
  nodes = xmldoc.evaluate(xpath, xmldoc, null, XPathResult.ANY_TYPE, null);
   result = nodes.iterateNext();
   while (result) {
     // do something with result...
    result = nodes.iterateNext();
  }
  str = new XMLSerializer().serializeToString(xmldoc);

};
