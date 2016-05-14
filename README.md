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
## License

MIT License