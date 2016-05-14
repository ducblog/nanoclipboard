(function() {
    "use strict";

var NanoClipboard = function(btnSelector) {
    this.init(btnSelector);
};

NanoClipboard.prototype = {
    constructor: NanoClipboard,

    init: function(btnSelector) {
        this.clear();

        var el = document.querySelector(btnSelector),
            text = el.getAttribute("data-clipboard-text"),
            selector = el.getAttribute("data-clipboard-selector");

        if (!text && !selector) {
            throw new Error("text and selector are undefined");
        }

        this._el = el;
        this._text = text;
        this._selector = selector;
        
        var self = this;
        this._el.addEventListener("click", this._onClick = function(e) {
            self._copy();
        });
    },

    clear: function() {
        if (this._el) {
            this._el.removeEventListener("click", this._onClick);
            this._onClick = null;
        }

        if (this._outsideEl) {
            document.body.removeChild(this._outsideEl);
            this._outsideEl = null;
        }
    },

    select: function() {
        var el = null;
        if (this._selector) {
            el = document.querySelector(this._selector);
        } else {
            el = this._attachedOutsideEl();
        }

        el.select();

        return el.value;
    },

    unselect: function() {
        if (this._outsideEl) {
            this._outsideEl.blur();
        }
        
        window.getSelection().removeAllRanges();
    },

    onSuccess: function(text) {
        // override
    },

    onError: function(text) {
        // override
    },

    _copy: function() {
        var result = this.select(),
            copied = false;

        try {
            copied = document.execCommand("copy");
        } catch (err) {
            copied = false;
        }

        if (copied) {
            this.onSuccess(result);
        } else {
            this.onError(result);
        }
    },

    _attachedOutsideEl: function() {
        if (!this._outsideEl) {
            var el = document.createElement("textarea");
            el.style.cssText = "position:absolute;left:-9999px;top:-9999px;";
            el.value = this._text;
            document.body.appendChild(el);

            this._outsideEl = el;
        }

        return this._outsideEl;
    }
};

window.NanoClipboard = NanoClipboard;

})();
