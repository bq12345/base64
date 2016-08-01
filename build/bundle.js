(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * base64 encoding & decoding
 */

var Base64 = function () {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    function _btoa(s) {
        if (/([^\u0000-\u00ff])/.test(s)) {
            throw new Error('INVALID_CHARACTER_ERR');
        }
        var i = 0,
            prev,
            code,
            mod,
            res = [];

        while (i < s.length) {
            code = s.charCodeAt(i);
            mod = i % 3;

            switch (mod) {
                case 0:
                    res.push(chars.charAt(code >> 2));
                    break;
                case 1:
                    res.push(chars.charAt((prev & 3) << 4 | (code >> 4)));
                    break;
                case 2:
                    res.push(chars.charAt((prev & 0x0f) << 2 | (code >> 6)));
                    res.push(chars.charAt(code & 0x3f));
                    break;
            }

            prev = code;
            i++;
        }

        // 循环完成后补齐
        if (mod == 0) {
            res.push(chars.charAt((prev & 3) << 4));
            res.push('==');
        } else if (mod == 1) {
            res.push(chars.charAt((prev & 0x0f) << 2));
            res.push('=');
        }

        return res.join('');
    }

    function _atob(s) {
        s = s.replace(/\s|=/g, '');
        var cur,
            prev,
            mod,
            i = 0,
            result = [];

        while (i < s.length) {
            cur = chars.indexOf(s.charAt(i));
            mod = i % 4;

            switch (mod) {
                case 0:
                    // do nothing
                    break;
                case 1:
                    result.push(String.fromCharCode(prev << 2 | cur >> 4));
                    break;
                case 2:
                    result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                    break;
                case 3:
                    result.push(String.fromCharCode((prev & 3) << 6 | cur));
                    break;
            }

            prev = cur;
            i++;
        }

        return result.join('');
    }

    return {
        btoa: _btoa,
        atob: _atob,
        encode: _btoa,
        decode: _atob
    };
}();

module.exports = Base64;

},{}]},{},[1]);
