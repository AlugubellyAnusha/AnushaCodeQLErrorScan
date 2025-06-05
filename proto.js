oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
}, oe.fx.interval = 13, oe.fx.start = function() {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
        e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function(t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e = Z.createElement("input"),
            t = Z.createElement("select"),
            n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
var ut, lt = oe.expr.attrHandle;
oe.fn.extend({
    attr: function(e, t) {
        return ke(this, oe.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
        return this.each(function() {
            oe.removeAttr(this, e)
        })
    }
}), oe.extend({
    attr: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
    },
    attrHooks: {
        type: {
            set: function(e, t) {
                if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t
                }
            }
        }
    },
    removeAttr: function(e, t) {
        var n, r, i = 0,
            o = t && t.match(we);
        if (o && 1 === e.nodeType)
            for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    }
}), ut = {
    set: function(e, t, n) {
        return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
    }
}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = lt[t] || oe.find.attr;
    lt[t] = function(e, t, r) {
        var i, o;
        return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
    }
});
var ct = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
oe.fn.extend({
    prop: function(e, t) {
        return ke(this, oe.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
        return this.each(function() {
            delete this[oe.propFix[e] || e]
        })
    }
}), oe.extend({
    prop: function(e, t, n) {
        var r, i, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
        tabIndex: {
            get: function(e) {
                var t = oe.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
            }
        }
    },
    propFix: {
        "for": "htmlFor",
        "class": "className"
    }
}), re.optSelected || (oe.propHooks.selected = {
    get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    oe.propFix[this.toLowerCase()] = this
});
var pt = /[\t\r\n\f]/g;
oe.fn.extend({
    addClass: function(e) {
        var t, n, r, i, o, a, s, u = 0;
        if (oe.isFunction(e)) return this.each(function(t) {
            oe(this).addClass(e.call(this, t, R(this)))
        });
        if ("string" == typeof e && e)
            for (t = e.match(we) || []; n = this[u++];)
                if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = oe.trim(r), i !== s && n.setAttribute("class", s)
                } return this
    },
    removeClass: function(e) {
        var t, n, r, i, o, a, s, u = 0;
        if (oe.isFunction(e)) return this.each(function(t) {
            oe(this).removeClass(e.call(this, t, R(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
            for (t = e.match(we) || []; n = this[u++];)
                if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                    for (a = 0; o = t[a++];)
                        for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    s = oe.trim(r), i !== s && n.setAttribute("class", s)
                } return this
    },
    toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
            oe(this).toggleClass(e.call(this, n, R(this), t), t)
        }) : this.each(function() {
            var t, r, i, o;
            if ("string" === n)
                for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else void 0 !== e && "boolean" !== n || (t = R(this), t && _e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : _e.get(this, "__className__") || ""))
        })
    },
    hasClass: function(e) {
        var t, n, r = 0;
        for (t = " " + e + " "; n = this[r++];)
            if (1 === n.nodeType && (" " + R(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
        return !1
    }
});
var dt = /\r/g,
    ht = /[\x20\t\r\n\f]+/g;
oe.fn.extend({
    val: function(e) {
        var t, n, r, i = this[0];
        {
            if (arguments.length) return r = oe.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
        }
    }
}), oe.extend({
    valHooks: {
        option: {
            get: function(e) {
                var t = oe.find.attr(e, "value");
                return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
            }
        },
        select: {
            get: function(e) {
                for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                    if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = oe(n).val(), o) return t;
                        a.push(t)
                    } return a
            },
            set: function(e, t) {
                for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o
            }
        }
    }
}), oe.each(["radio", "checkbox"], function() {
    oe.valHooks[this] = {
        set: function(e, t) {
            if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
        }
    }, re.checkOn || (oe.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
    })
});
var gt = /^(?:focusinfocus|focusoutblur)$/;
oe.extend(oe.event, {
    trigger: function(t, n, r, i) {
        var o, a, s, u, l, c, f, p = [r || Z],
            d = ne.call(t, "type") ? t.type : t,
            h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
        if (a = s = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
            if (!i && !f.noBubble && !oe.isWindow(r)) {
                for (u = f.delegateType || d, gt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                s === (r.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || e)
            }
            for (o = 0;
                (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (_e.get(a, "events") || {})[t.type] && _e.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Ce(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
            return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Ce(r) || l && oe.isFunction(r[d]) && !oe.isWindow(r) && (s = r[l], s && (r[l] = null), oe.event.triggered = d, r[d](), oe.event.triggered = void 0, s && (r[l] = s)), t.result
        }
    },
    simulate: function(e, t, n) {
        var r = oe.extend(new oe.Event, n, {
            type: e,
            isSimulated: !0
        });
        oe.event.trigger(r, null, t)
    }
}), oe.fn.extend({
    trigger: function(e, t) {
        return this.each(function() {
            oe.event.trigger(e, t, this)
        })
    },
    triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return oe.event.trigger(e, t, n, !0)
    }
}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    oe.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
}), oe.fn.extend({
    hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }
}), re.focusin = "onfocusin" in e, re.focusin || oe.each({
    focus: "focusin",
    blur: "focusout"
}, function(e, t) {
    var n = function(e) {
        oe.event.simulate(t, e.target, oe.event.fix(e))
    };
    oe.event.special[t] = {
        setup: function() {
            var r = this.ownerDocument || this,
                i = _e.access(r, t);
            i || r.addEventListener(e, n, !0), _e.access(r, t, (i || 0) + 1)
        },
        teardown: function() {
            var r = this.ownerDocument || this,
                i = _e.access(r, t) - 1;
            i ? _e.access(r, t, i) : (r.removeEventListener(e, n, !0), _e.remove(r, t))
        }
    }
});
var mt = e.location,
    vt = oe.now(),
    $t = /\?/;
oe.parseJSON = function(e) {
    return JSON.parse(e + "")
}, oe.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (r) {
        n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
};
var yt = /#.*$/,
    bt = /([?&])_=[^&]*/,
    wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    kt = /^(?:GET|HEAD)$/,
    Ct = /^\/\//,
    _t = {},
    St = {},
    Dt = "*/".concat("*"),
    Et = Z.createElement("a");
Et.href = mt.href, oe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: mt.href,
        type: "GET",
        isLocal: xt.test(mt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": Dt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": oe.parseJSON,
            "text xml": oe.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(e, t) {
        return t ? V(V(e, oe.ajaxSettings), t) : V(oe.ajaxSettings, e)
    },
    ajaxPrefilter: H(_t),
    ajaxTransport: H(St),
    ajax: function(t, n) {
        function r(t, n, r, s) {
            var l, f, $, y, w, k = n;
            2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (y = W(p, x, r)), y = B(p, y, x, l), l ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, f = y.data, $ = y.error, l = !$)) : ($ = k, !t && k || (k = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || k) + "", l ? g.resolveWith(d, [f, k, x]) : g.rejectWith(d, [x, k, $]), x.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? f : $]), m.fireWith(d, [x, k]), c && (h.trigger("ajaxComplete", [x, p]), --oe.active || oe.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var i, o, a, s, u, l, c, f, p = oe.ajaxSetup({}, n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
            g = oe.Deferred(),
            m = oe.Callbacks("once memory"),
            v = p.statusCode || {},
            $ = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!s)
                            for (s = {}; t = wt.exec(a);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, $[e] = t), this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (b < 2)
                            for (t in e) v[t] = [v[t], e[t]];
                        else x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t), r(0, t), this
                }
            };
        if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || mt.href) + "").replace(yt, "").replace(Ct, mt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
            l = Z.createElement("a");
            try {
                l.href = p.url, l.href = l.href, p.crossDomain = Et.protocol + "//" + Et.host != l.protocol + "//" + l.host
            } catch (k) {
                p.crossDomain = !0
            }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), L(_t, p, n, x), 2 === b) return x;
        c = oe.event && p.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !kt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += ($t.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = bt.test(o) ? o.replace(bt, "$1_=" + vt++) : o + ($t.test(o) ? "&" : "?") + "_=" + vt++)), p.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : p.accepts["*"]);
        for (f in p.headers) x.setRequestHeader(f, p.headers[f]);
        if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === b)) return x.abort();
        w = "abort";
        for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) x[f](p[f]);
        if (i = L(St, p, n, x)) {
            if (x.readyState = 1, c && h.trigger("ajaxSend", [x, p]), 2 === b) return x;
            p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                x.abort("timeout")
            }, p.timeout));
            try {
                b = 1, i.send($, r)
            } catch (k) {
                if (!(b < 2)) throw k;
                r(-1, k)
            }
        } else r(-1, "No Transport");
        return x
    },
    getJSON: function(e, t, n) {
        return oe.get(e, t, n, "json")
    },
    getScript: function(e, t) {
        return oe.get(e, void 0, t, "script")
    }
}), oe.each(["get", "post"], function(e, t) {
    oe[t] = function(e, n, r, i) {
        return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
        }, oe.isPlainObject(e) && e))
    }
}), oe._evalUrl = function(e) {
    return oe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
    })
}, oe.fn.extend({
    wrapAll: function(e) {
        var t;
        return oe.isFunction(e) ? this.each(function(t) {
            oe(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
        }).append(this)), this)
    },
    wrapInner: function(e) {
        return oe.isFunction(e) ? this.each(function(t) {
            oe(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
            var t = oe(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    },
    wrap: function(e) {
        var t = oe.isFunction(e);
        return this.each(function(n) {
            oe(this).wrapAll(t ? e.call(this, n) : e)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
        }).end()
    }
}), oe.expr.filters.hidden = function(e) {
    return !oe.expr.filters.visible(e)
}, oe.expr.filters.visible = function(e) {
    return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
};
var Tt = /%20/g,
    Mt = /\[\]$/,
    Ot = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
oe.param = function(e, t) {
    var n, r = [],
        i = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
    if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
        i(this.name, this.value)
    });
    else
        for (n in e) Y(n, e[n], t, i);
    return r.join("&").replace(Tt, "+")
}, oe.fn.extend({
    serialize: function() {
        return oe.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var e = oe.prop(this, "elements");
            return e ? oe.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !oe(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !je.test(e))
        }).map(function(e, t) {
            var n = oe(this).val();
            return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                return {
                    name: t.name,
                    value: e.replace(Ot, "\r\n")
                }
            }) : {
                name: t.name,
                value: n.replace(Ot, "\r\n")
            }
        }).get()
    }
}), oe.ajaxSettings.xhr = function() {
    try {
        return new e.XMLHttpRequest
    } catch (t) {}
};
var Pt = {
        0: 200,
        1223: 204
    },
    Nt = oe.ajaxSettings.xhr();
re.cors = !!Nt && "withCredentials" in Nt, re.ajax = Nt = !!Nt, oe.ajaxTransport(function(t) {
    var n, r;
    if (re.cors || Nt && !t.crossDomain) return {
        send: function(i, o) {
            var a, s = t.xhr();
            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            n = function(e) {
                return function() {
                    n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Pt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                        binary: s.response
                    } : {
                        text: s.responseText
                    }, s.getAllResponseHeaders()))
                }
            }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                4 === s.readyState && e.setTimeout(function() {
                    n && r()
                })
            }, n = n("abort");
            try {
                s.send(t.hasContent && t.data || null)
            } catch (u) {
                if (n) throw u
            }
        },
        abort: function() {
            n && n()
        }
    }
}), oe.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function(e) {
            return oe.globalEval(e), e
        }
    }
}), oe.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
}), oe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
        var t, n;
        return {
            send: function(r, i) {
                t = oe("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), Z.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }
});
var It = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var e = It.pop() || oe.expando + "_" + vt++;
        return this[e] = !0, e
    }
}), oe.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + i) : t.jsonp !== !1 && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
        return a || oe.error(i + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
        a = arguments
    }, r.always(function() {
        void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, It.push(i)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
    }), "script"
}), oe.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || Z;
    var r = he.exec(e),
        i = !n && [];
    return r ? [t.createElement(r[1])] : (r = p([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
};
var qt = oe.fn.load;
oe.fn.load = function(e, t, n) {
    if ("string" != typeof e && qt) return qt.apply(this, arguments);
    var r, i, o, a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && oe.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
    }).done(function(e) {
        o = arguments, a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
        a.each(function() {
            n.apply(this, o || [e.responseText, t, e])
        })
    }), this
}, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    oe.fn[t] = function(e) {
        return this.on(t, e)
    }
}), oe.expr.filters.animated = function(e) {
    return oe.grep(oe.timers, function(t) {
        return e === t.elem
    }).length
}, oe.offset = {
    setOffset: function(e, t, n) {
        var r, i, o, a, s, u, l, c = oe.css(e, "position"),
            f = oe(e),
            p = {};
        "static" === c && (e.style.position = "relative"), s = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
    }
}, oe.fn.extend({
    offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
            oe.offset.setOffset(this, e, t)
        });
        var t, n, r = this[0],
            i = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
        if (o) return t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = z(o), {
            top: i.top + n.pageYOffset - t.clientTop,
            left: i.left + n.pageXOffset - t.clientLeft
        }) : i
    },
    position: function() {
        if (this[0]) {
            var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
            return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - r.top - oe.css(n, "marginTop", !0),
                left: t.left - r.left - oe.css(n, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
            return e || Xe
        })
    }
}), oe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(e, t) {
    var n = "pageYOffset" === t;
    oe.fn[e] = function(r) {
        return ke(this, function(e, r, i) {
            var o = z(e);
            return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
        }, e, r, arguments.length)
    }
}), oe.each(["top", "left"], function(e, t) {
    oe.cssHooks[t] = D(re.pixelPosition, function(e, n) {
        if (n) return n = S(e, t), Ze.test(n) ? oe(e).position()[t] + "px" : n
    })
}), oe.each({
    Height: "height",
    Width: "width"
}, function(e, t) {
    oe.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
    }, function(n, r) {
        oe.fn[r] = function(r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || i === !0 ? "margin" : "border");
            return ke(this, function(t, n, r) {
                var i;
                return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
            }, t, o ? r : void 0, o, null)
        }
    })
}), oe.fn.extend({
    bind: function(e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
        return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    size: function() {
        return this.length
    }
}), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return oe
});
var Ft = e.jQuery,
    Rt = e.$;
return oe.noConflict = function(t) {
return e.$ === oe && (e.$ = Rt), t && e.jQuery === oe && (e.jQuery = Ft), oe
}, t || (e.jQuery = e.$ = oe), oe
}),
function(e) {
    "use strict";

    function t(e, t) {
        return t = t || Error,
            function() {
                var n, r, i = 2,
                    o = arguments,
                    a = o[0],
                    s = "[" + (e ? e + ":" : "") + a + "] ",
                    u = o[1];
                for (s += u.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1),
                            n = t + i;
                        return n < o.length ? $e(o[n]) : e
                    }), s += "\nhttp://errors.angularjs.org/1.5.7/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent($e(o[r]));
                return new t(s)
            }
    }

    function n(e) {
        if (null == e || S(e)) return !1;
        if (Zr(e) || w(e) || qr && e instanceof qr) return !0;
        var t = "length" in Object(e) && e.length;
        return x(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
    }

    function r(e, t, i) {
        var o, a;
        if (e)
            if (C(e))
                for (o in e) "prototype" == o || "length" == o || "name" == o || e.hasOwnProperty && !e.hasOwnProperty(o) || t.call(i, e[o], o, e);
            else if (Zr(e) || n(e)) {
            var s = "object" != typeof e;
            for (o = 0, a = e.length; o < a; o++)(s || o in e) && t.call(i, e[o], o, e)
        } else if (e.forEach && e.forEach !== r) e.forEach(t, i, e);
        else if (b(e))
            for (o in e) t.call(i, e[o], o, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e);
        else
            for (o in e) Ar.call(e, o) && t.call(i, e[o], o, e);
        return e
    }

    function i(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function o(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function a() {
        return ++Gr
    }

    function s(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function u(e, t, n) {
        for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
            var a = t[i];
            if (y(a) || C(a))
                for (var l = Object.keys(a), c = 0, f = l.length; c < f; c++) {
                    var p = l[c],
                        d = a[p];
                    n && y(d) ? k(d) ? e[p] = new Date(d.valueOf()) : _(d) ? e[p] = new RegExp(d) : d.nodeName ? e[p] = d.cloneNode(!0) : N(d) ? e[p] = d.clone() : (y(e[p]) || (e[p] = Zr(d) ? [] : {}), u(e[p], [d], !0)) : e[p] = d
                }
        }
        return s(e, r), e
    }

    function l(e) {
        return u(e, Hr.call(arguments, 1), !1)
    }

    function c(e) {
        return u(e, Hr.call(arguments, 1), !0)
    }

    function f(e) {
        return parseInt(e, 10)
    }

    function p(e, t) {
        return l(Object.create(e), t)
    }

    function d() {}

    function h(e) {
        return e
    }

    function g(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return C(e.toString) && e.toString !== Wr
    }

    function v(e) {
        return "undefined" == typeof e
    }

    function $(e) {
        return "undefined" != typeof e
    }

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function b(e) {
        return null !== e && "object" == typeof e && !Br(e)
    }

    function w(e) {
        return "string" == typeof e
    }

    function x(e) {
        return "number" == typeof e
    }

    function k(e) {
        return "[object Date]" === Wr.call(e)
    }

    function C(e) {
        return "function" == typeof e
    }

    function _(e) {
        return "[object RegExp]" === Wr.call(e)
    }

    function S(e) {
        return e && e.window === e
    }

    function D(e) {
        return e && e.$evalAsync && e.$watch
    }

    function E(e) {
        return "[object File]" === Wr.call(e)
    }

    function T(e) {
        return "[object FormData]" === Wr.call(e)
    }

    function M(e) {
        return "[object Blob]" === Wr.call(e)
    }

    function O(e) {
        return "boolean" == typeof e
    }

    function A(e) {
        return e && C(e.then)
    }

    function j(e) {
        return e && x(e.length) && Jr.test(Wr.call(e))
    }

    function P(e) {
        return "[object ArrayBuffer]" === Wr.call(e)
    }

    function N(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function I(e) {
        var t, n = {},
            r = e.split(",");
        for (t = 0; t < r.length; t++) n[r[t]] = !0;
        return n
    }

    function U(e) {
        return jr(e.nodeName || e[0] && e[0].nodeName)
    }

    function q(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function F(e, t) {
        function n(e, t) {
            var n, r = t.$$hashKey;
            if (Zr(e))
                for (var o = 0, a = e.length; o < a; o++) t.push(i(e[o]));
            else if (b(e))
                for (n in e) t[n] = i(e[n]);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (n in e) e.hasOwnProperty(n) && (t[n] = i(e[n]));
            else
                for (n in e) Ar.call(e, n) && (t[n] = i(e[n]));
            return s(t, r), t
        }

        function i(e) {
            if (!y(e)) return e;
            var t = a.indexOf(e);
            if (t !== -1) return u[t];
            if (S(e) || D(e)) throw Yr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var r = !1,
                i = o(e);
            return void 0 === i && (i = Zr(e) ? [] : Object.create(Br(e)), r = !0), a.push(e), u.push(i), r ? n(e, i) : i
        }

        function o(e) {
            switch (Wr.call(e)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new e.constructor(i(e.buffer));
                case "[object ArrayBuffer]":
                    if (!e.slice) {
                        var t = new ArrayBuffer(e.byteLength);
                        return new Uint8Array(t).set(new Uint8Array(e)), t
                    }
                    return e.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new e.constructor(e.valueOf());
                case "[object RegExp]":
                    var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
                    return n.lastIndex = e.lastIndex, n;
                case "[object Blob]":
                    return new e.constructor([e], {
                        type: e.type
                    })
            }
            if (C(e.cloneNode)) return e.cloneNode(!0)
        }
        var a = [],
            u = [];
        if (t) {
            if (j(t) || P(t)) throw Yr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e === t) throw Yr("cpi", "Can't copy! Source and destination are identical.");
            return Zr(t) ? t.length = 0 : r(t, function(e, n) {
                "$$hashKey" !== n && delete t[n]
            }), a.push(e), u.push(t), n(e, t)
        }
        return i(e)
    }

    function R(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var n, r, i, o = typeof e,
            a = typeof t;
        if (o == a && "object" == o) {
            if (!Zr(e)) {
                if (k(e)) return !!k(t) && R(e.getTime(), t.getTime());
                if (_(e)) return !!_(t) && e.toString() == t.toString();
                if (D(e) || D(t) || S(e) || S(t) || Zr(t) || k(t) || _(t)) return !1;
                i = he();
                for (r in e)
                    if ("$" !== r.charAt(0) && !C(e[r])) {
                        if (!R(e[r], t[r])) return !1;
                        i[r] = !0
                    } for (r in t)
                    if (!(r in i) && "$" !== r.charAt(0) && $(t[r]) && !C(t[r])) return !1;
                return !0
            }
            if (!Zr(t)) return !1;
            if ((n = e.length) == t.length) {
                for (r = 0; r < n; r++)
                    if (!R(e[r], t[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function H(e, t, n) {
        return e.concat(Hr.call(t, n))
    }

    function L(e, t) {
        return Hr.call(e, t || 0)
    }

    function V(e, t) {
        var n = arguments.length > 2 ? L(arguments, 2) : [];
        return !C(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, H(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function W(t, n) {
        var r = n;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : S(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : D(n) && (r = "$SCOPE"), r
    }

    function B(e, t) {
        if (!v(e)) return x(t) || (t = t ? 2 : null), JSON.stringify(e, W, t)
    }

    function Y(e) {
        return w(e) ? JSON.parse(e) : e
    }

    function z(e, t) {
        e = e.replace(ti, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function G(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function Z(e, t, n) {
        n = n ? -1 : 1;
        var r = e.getTimezoneOffset(),
            i = z(t, r);
        return G(e, n * (i - r))
    }

    function J(e) {
        e = qr(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = qr("<div>").append(e).html();
        try {
            return e[0].nodeType === si ? jr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + jr(t)
            })
        } catch (t) {
            return jr(n)
        }
    }

    function K(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function X(e) {
        var t = {};
        return r((e || "").split("&"), function(e) {
            var n, r, i;
            e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), n !== -1 && (r = e.substring(0, n), i = e.substring(n + 1)), r = K(r), $(r) && (i = !$(i) || K(i), Ar.call(t, r) ? Zr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
        }), t
    }

    function Q(e) {
        var t = [];
        return r(e, function(e, n) {
            Zr(e) ? r(e, function(e) {
                t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
            }) : t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function ee(e) {
        return te(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function te(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function ne(e, t) {
        var n, r, i = ni.length;
        for (r = 0; r < i; ++r)
            if (n = ni[r] + t, w(n = e.getAttribute(n))) return n;
        return null
    }

    function re(e, t) {
        var n, i, o = {};
        r(ni, function(t) {
            var r = t + "app";
            !n && e.hasAttribute && e.hasAttribute(r) && (n = e, i = e.getAttribute(r))
        }), r(ni, function(t) {
            var r, o = t + "app";
            !n && (r = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = r, i = r.getAttribute(o))
        }), n && (o.strictDi = null !== ne(n, "strict-di"), t(n, i ? [i] : [], o))
    }

    function ie(t, n, i) {
        y(i) || (i = {});
        var o = {
            strictDi: !1
        };
        i = l(o, i);
        var a = function() {
                if (t = qr(t), t.injector()) {
                    var r = t[0] === e.document ? "document" : J(t);
                    throw Yr("btstrpd", "App already bootstrapped with this element '{0}'", r.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
                }
                n = n || [], n.unshift(["$provide", function(e) {
                    e.value("$rootElement", t)
                }]), i.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), n.unshift("ng");
                var o = rt(n, i.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), o
            },
            s = /^NG_ENABLE_DEBUG_INFO!/,
            u = /^NG_DEFER_BOOTSTRAP!/;
        return e && s.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !u.test(e.name) ? a() : (e.name = e.name.replace(u, ""), zr.resumeBootstrap = function(e) {
            return r(e, function(e) {
                n.push(e)
            }), a()
        }, void(C(zr.resumeDeferredBootstrap) && zr.resumeDeferredBootstrap()))
    }

    function oe() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function ae(e) {
        var t = zr.element(e).injector();
        if (!t) throw Yr("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function se(e, t) {
        return t = t || "_", e.replace(ri, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function ue() {
        var t;
        if (!ii) {
            var n = ei();
            Fr = v(n) ? e.jQuery : n ? e[n] : void 0, Fr && Fr.fn.on ? (qr = Fr, l(Fr.fn, {
                scope: Si.scope,
                isolateScope: Si.isolateScope,
                controller: Si.controller,
                injector: Si.injector,
                inheritedData: Si.inheritedData
            }), t = Fr.cleanData, Fr.cleanData = function(e) {
                for (var n, r, i = 0; null != (r = e[i]); i++) n = Fr._data(r, "events"), n && n.$destroy && Fr(r).triggerHandler("$destroy");
                t(e)
            }) : qr = Te, zr.element = qr, ii = !0
        }
    }

    function le(e, t, n) {
        if (!e) throw Yr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ce(e, t, n) {
        return n && Zr(e) && (e = e[e.length - 1]), le(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function fe(e, t) {
        if ("hasOwnProperty" === e) throw Yr("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function pe(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++) r = i[s], e && (e = (o = e)[r]);
        return !n && C(e) ? V(o, e) : e
    }

    function de(e) {
        for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = qr(Hr.call(e, 0, i))), t.push(n));
        return t || e
    }

    function he() {
        return Object.create(null)
    }

    function ge(e) {
        function n(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var r = t("$injector"),
            i = t("ng"),
            o = n(e, "angular", Object);
        return o.$$minErr = o.$$minErr || t,
