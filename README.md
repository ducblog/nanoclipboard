# nanoclipboard

nanoclipboard is a JavaScript library for copy text to the clipboard. nanoclipboard has no dependencies.

## Usage
```js
var clipboard = new NanoClipboard("#btn");

clipboard.onSuccess = function(text) {
	alert("Copied: " + text);
};

clipboard.onError = function(text) {
	window.prompt("Ctrl+C: ", text);
};

```

## CDN
nanoclipboard's CDN provided by [jsDelivr CDN](https://www.jsdelivr.com)

> https://www.jsdelivr.com/projects/nanoclipboard

## Demo
- [basic-copy.html](http://htmlpreview.github.io/?https://github.com/bornbit/nanoclipboard/blob/master/demo/basic-copy.html)
- [input-copy.html](http://htmlpreview.github.io/?https://github.com/bornbit/nanoclipboard/blob/master/demo/input-copy.html)

## License

[MIT](https://github.com/bornbit/nanoclipboard/blob/master/LICENSE) License
http://www.cssscript.com/lightweight-copy-clipboard-library-nanoclipboard/
<p>nanoclipboard is a lightweight and dependency-free JavaScript library which allows to copy any text to your local clipboard by one click.</p>
<h2>How to use it:</h2>
<p>Insert the JavaScript file nanoclipboard.js into your html page.</p>
<pre class="brush:xml">&lt;script src="nanoclipboard.min.js"&gt;&lt;/script&gt;</pre>
<p>Create a button and define the content you want to copy using data-clipboard-text attribute:</p>
<pre class="brush:xml">&lt;button id="btn" data-clipboard-text="http://www.cssscript.com" title="Copy Me!"&gt;Copy&lt;/button&gt;</pre>
<p>Initialize the nanoclipboard and done.</p>
<pre class="brush:javascript">var clipboard = new NanoClipboard("#btn");</pre>
<p>You can also copy text from any text field like input:</p>
<pre class="brush:javascript">&lt;input class="url" value="https://www.cssscript.net"&gt;&lt;/input&gt;
&lt;button id="btn" data-clipboard-selector=".url" title="Copy Me!"&gt;Copy&lt;/button&gt;</pre>
<p>Callback events.</p>
<pre class="brush:javascript">clipboard.onSuccess = function(text) {
  alert("Copied: " + text)
  this.unselect();
};

clipboard.onError = function(text) {
  window.prompt("Ctrl+C: ", text);
  // this.unselect();
};</pre>
