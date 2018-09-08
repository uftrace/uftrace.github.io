var slideshow = remark.create({
  // Set the slideshow display ratio
  // Default: '4:3'
  // Alternatives: '16:9', ...
  ratio: '4:3',

  // Syntax highlighting theme
  highlightStyle: 'ir-black',
  highlightLanguage: 'plain',
  highlightLines: true,
  highlightSpans: true,

  // Customize slide number label, either using a format string..
  slideNumberFormat: '%current% / %total%',
  //slideNumberFormat: '',

  //sourceUrl: 'extern.md',
  //sourceUrl: 'uftrace.master.md',
  //sourceUrl: 'tui.md',
  //sourceUrl: 'ttui.md',
}) ;

var comment = /(\/\*.*\*\/)/g;
var line_comment = /^\/\/(.*)/g;
var lines = document.getElementsByClassName('remark-code-line');
console.log(lines);
for (var i = 0; i < lines.length; i++) {
    lines[i].innerHTML = lines[i].innerHTML.replace(comment, '<x-grey>$1</x-grey>');
    lines[i].innerHTML = lines[i].innerHTML.replace(line_comment, '<x-grey>$1</x-grey>');
}

function rightPad(str, padch, padlen) {
    var pad = '';
    var tag = /<[a-z\-/]+>/g;
    padlen -= str.replace(tag, '').length;
    for (var j = 0; j < padlen; j++)
        pad += padch;
    return str + pad;
}

var tui_blue_lines = document.getElementsByTagName('x-tui-blue-line');
for (var i = 0; i < tui_blue_lines.length; i++) {
    var elem = tui_blue_lines[i];
    elem.innerHTML = rightPad(elem.innerHTML, ' ', 101);
}
var tui_white_lines = document.getElementsByTagName('x-tui-white-line');
for (var i = 0; i < tui_white_lines.length; i++) {
    var elem = tui_white_lines[i];
    elem.innerHTML = rightPad(elem.innerHTML, ' ', 101);
}
