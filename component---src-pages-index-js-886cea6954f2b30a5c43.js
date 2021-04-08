/*! For license information please see component---src-pages-index-js-886cea6954f2b30a5c43.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world =
  self.webpackChunkgatsby_starter_hello_world || []).push([
  [678],
  {
    5706: function (e, t, r) {
      "use strict";
      var n = r(8812),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var o = d(r);
            o && o !== h && e(t, o, n);
          }
          var a = u(r);
          f && (a = a.concat(f(r)));
          for (var s = c(t), m = c(r), g = 0; g < a.length; ++g) {
            var y = a[g];
            if (!(i[y] || (n && n[y]) || (m && m[y]) || (s && s[y]))) {
              var b = p(r, y);
              try {
                l(t, y, b);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    2993: function (e) {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, c, l, u;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (c = s; 0 != c--; ) if (!i(e[c], a[c])) return !1;
            return !0;
          }
          if (r && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (u = e.entries(); !(c = u.next()).done; )
              if (!a.has(c.value[0])) return !1;
            for (u = e.entries(); !(c = u.next()).done; )
              if (!i(c.value[1], a.get(c.value[0]))) return !1;
            return !0;
          }
          if (n && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (u = e.entries(); !(c = u.next()).done; )
              if (!a.has(c.value[0])) return !1;
            return !0;
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1;
            for (c = s; 0 != c--; ) if (e[c] !== a[c]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === a.toString();
          if ((s = (l = Object.keys(e)).length) !== Object.keys(a).length)
            return !1;
          for (c = s; 0 != c--; )
            if (!Object.prototype.hasOwnProperty.call(a, l[c])) return !1;
          if (t && e instanceof Element) return !1;
          for (c = s; 0 != c--; )
            if (
              (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c]) ||
                !e.$$typeof) &&
              !i(e[l[c]], a[l[c]])
            )
              return !1;
          return !0;
        }
        return e != e && a != a;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (r) {
          if ((r.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw r;
        }
      };
    },
    165: function (e, t) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case f:
                case i:
                case s:
                case a:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case p:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function C(e) {
        return x(e) === f;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return C(e) || x(e) === u;
        }),
        (t.isConcurrentMode = C),
        (t.isContextConsumer = function (e) {
          return x(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return x(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return x(e) === p;
        }),
        (t.isFragment = function (e) {
          return x(e) === i;
        }),
        (t.isLazy = function (e) {
          return x(e) === g;
        }),
        (t.isMemo = function (e) {
          return x(e) === m;
        }),
        (t.isPortal = function (e) {
          return x(e) === o;
        }),
        (t.isProfiler = function (e) {
          return x(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return x(e) === a;
        }),
        (t.isSuspense = function (e) {
          return x(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === d ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === p ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = x);
    },
    8812: function (e, t, r) {
      "use strict";
      e.exports = r(165);
    },
    4839: function (e, t, r) {
      "use strict";
      var n,
        o = r(7294),
        i = (n = o) && "object" == typeof n && "default" in n ? n.default : n;
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var s = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, r) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== r && "function" != typeof r)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (n) {
          if ("function" != typeof n)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var c,
            l = [];
          function u() {
            (c = e(
              l.map(function (e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(c) : r && (c = r(c));
          }
          var f = (function (e) {
            var t, r;
            function o() {
              return e.apply(this, arguments) || this;
            }
            (r = e),
              ((t = o).prototype = Object.create(r.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = r),
              (o.peek = function () {
                return c;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = c;
                return (c = void 0), (l = []), e;
              });
            var a = o.prototype;
            return (
              (a.UNSAFE_componentWillMount = function () {
                l.push(this), u();
              }),
              (a.componentDidUpdate = function () {
                u();
              }),
              (a.componentWillUnmount = function () {
                var e = l.indexOf(this);
                l.splice(e, 1), u();
              }),
              (a.render = function () {
                return i.createElement(n, this.props);
              }),
              o
            );
          })(o.PureComponent);
          return (
            a(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(n) +
                ")"
            ),
            a(f, "canUseDOM", s),
            f
          );
        };
      };
    },
    6872: function (e) {
      e.exports = function (e, t, r, n) {
        var o = r ? r.call(n, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var l = i[c];
          if (!s(l)) return !1;
          var u = e[l],
            f = t[l];
          if (
            !1 === (o = r ? r.call(n, u, f, l) : void 0) ||
            (void 0 === o && u !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    2582: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return jr;
          },
        });
      var n = r(7294),
        o = r(8812),
        i = r(6872),
        a = r.n(i);
      var s = function (e) {
          function t(e, n, c, l, p) {
            for (
              var d,
                h,
                m,
                g,
                w,
                C = 0,
                S = 0,
                k = 0,
                E = 0,
                A = 0,
                _ = 0,
                R = (m = d = 0),
                L = 0,
                M = 0,
                D = 0,
                $ = 0,
                F = c.length,
                B = F - 1,
                H = "",
                q = "",
                Y = "",
                U = "";
              L < F;

            ) {
              if (
                ((h = c.charCodeAt(L)),
                L === B &&
                  0 !== S + E + k + C &&
                  (0 !== S && (h = 47 === S ? 10 : 47),
                  (E = k = C = 0),
                  F++,
                  B++),
                0 === S + E + k + C)
              ) {
                if (
                  L === B &&
                  (0 < M && (H = H.replace(f, "")), 0 < H.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      H += c.charAt(L);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      d = (H = H.trim()).charCodeAt(0), m = 1, $ = ++L;
                      L < F;

                    ) {
                      switch ((h = c.charCodeAt(L))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((h = c.charCodeAt(L + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (R = L + 1; R < B; ++R)
                                  switch (c.charCodeAt(R)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === c.charCodeAt(R - 1) &&
                                        L + 2 !== R
                                      ) {
                                        L = R + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        L = R + 1;
                                        break e;
                                      }
                                  }
                                L = R;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; L++ < B && c.charCodeAt(L) !== h; );
                      }
                      if (0 === m) break;
                      L++;
                    }
                    switch (
                      ((m = c.substring($, L)),
                      0 === d &&
                        (d = (H = H.replace(u, "").trim()).charCodeAt(0)),
                      d)
                    ) {
                      case 64:
                        switch (
                          (0 < M && (H = H.replace(f, "")),
                          (h = H.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            M = n;
                            break;
                          default:
                            M = j;
                        }
                        if (
                          (($ = (m = t(n, M, m, h, p + 1)).length),
                          0 < N &&
                            ((w = s(
                              3,
                              m,
                              (M = r(j, H, D)),
                              n,
                              O,
                              T,
                              $,
                              h,
                              p,
                              l
                            )),
                            (H = M.join("")),
                            void 0 !== w &&
                              0 === ($ = (m = w.trim()).length) &&
                              ((h = 0), (m = ""))),
                          0 < $)
                        )
                          switch (h) {
                            case 115:
                              H = H.replace(x, a);
                            case 100:
                            case 109:
                            case 45:
                              m = H + "{" + m + "}";
                              break;
                            case 107:
                              (m = (H = H.replace(y, "$1 $2")) + "{" + m + "}"),
                                (m =
                                  1 === P || (2 === P && i("@" + m, 3))
                                    ? "@-webkit-" + m + "@" + m
                                    : "@" + m);
                              break;
                            default:
                              (m = H + m), 112 === l && ((q += m), (m = ""));
                          }
                        else m = "";
                        break;
                      default:
                        m = t(n, r(n, H, D), m, l, p + 1);
                    }
                    (Y += m),
                      (m = D = M = R = d = 0),
                      (H = ""),
                      (h = c.charCodeAt(++L));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      ($ = (H = (0 < M ? H.replace(f, "") : H).trim()).length)
                    )
                      switch (
                        (0 === R &&
                          ((d = H.charCodeAt(0)),
                          45 === d || (96 < d && 123 > d)) &&
                          ($ = (H = H.replace(" ", ":")).length),
                        0 < N &&
                          void 0 !==
                            (w = s(1, H, n, e, O, T, q.length, l, p, l)) &&
                          0 === ($ = (H = w.trim()).length) &&
                          (H = "\0\0"),
                        (d = H.charCodeAt(0)),
                        (h = H.charCodeAt(1)),
                        d)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            U += H + c.charAt(L);
                            break;
                          }
                        default:
                          58 !== H.charCodeAt($ - 1) &&
                            (q += o(H, d, h, H.charCodeAt(2)));
                      }
                    (D = M = R = d = 0), (H = ""), (h = c.charCodeAt(++L));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === S
                    ? (S = 0)
                    : 0 === 1 + d &&
                      107 !== l &&
                      0 < H.length &&
                      ((M = 1), (H += "\0")),
                    0 < N * z && s(0, H, n, e, O, T, q.length, l, p, l),
                    (T = 1),
                    O++;
                  break;
                case 59:
                case 125:
                  if (0 === S + E + k + C) {
                    T++;
                    break;
                  }
                default:
                  switch ((T++, (g = c.charAt(L)), h)) {
                    case 9:
                    case 32:
                      if (0 === E + C + S)
                        switch (A) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            g = "";
                            break;
                          default:
                            32 !== h && (g = " ");
                        }
                      break;
                    case 0:
                      g = "\\0";
                      break;
                    case 12:
                      g = "\\f";
                      break;
                    case 11:
                      g = "\\v";
                      break;
                    case 38:
                      0 === E + S + C && ((M = D = 1), (g = "\f" + g));
                      break;
                    case 108:
                      if (0 === E + S + C + I && 0 < R)
                        switch (L - R) {
                          case 2:
                            112 === A && 58 === c.charCodeAt(L - 3) && (I = A);
                          case 8:
                            111 === _ && (I = _);
                        }
                      break;
                    case 58:
                      0 === E + S + C && (R = L);
                      break;
                    case 44:
                      0 === S + k + E + C && ((M = 1), (g += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === S && (E = E === h ? 0 : 0 === E ? h : E);
                      break;
                    case 91:
                      0 === E + S + k && C++;
                      break;
                    case 93:
                      0 === E + S + k && C--;
                      break;
                    case 41:
                      0 === E + S + C && k--;
                      break;
                    case 40:
                      if (0 === E + S + C) {
                        if (0 === d)
                          switch (2 * A + 3 * _) {
                            case 533:
                              break;
                            default:
                              d = 1;
                          }
                        k++;
                      }
                      break;
                    case 64:
                      0 === S + k + E + C + R + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + C + k))
                        switch (S) {
                          case 0:
                            switch (2 * h + 3 * c.charCodeAt(L + 1)) {
                              case 235:
                                S = 47;
                                break;
                              case 220:
                                ($ = L), (S = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === A &&
                              $ + 2 !== L &&
                              (33 === c.charCodeAt($ + 2) &&
                                (q += c.substring($, L + 1)),
                              (g = ""),
                              (S = 0));
                        }
                  }
                  0 === S && (H += g);
              }
              (_ = A), (A = h), L++;
            }
            if (0 < ($ = q.length)) {
              if (
                ((M = n),
                0 < N &&
                  void 0 !== (w = s(2, q, M, e, O, T, $, l, p, l)) &&
                  0 === (q = w).length)
              )
                return U + q + Y;
              if (((q = M.join(",") + "{" + q + "}"), 0 != P * I)) {
                switch ((2 !== P || i(q, 2) || (I = 0), I)) {
                  case 111:
                    q = q.replace(v, ":-moz-$1") + q;
                    break;
                  case 112:
                    q =
                      q.replace(b, "::-webkit-input-$1") +
                      q.replace(b, "::-moz-$1") +
                      q.replace(b, ":-ms-input-$1") +
                      q;
                }
                I = 0;
              }
            }
            return U + q + Y;
          }
          function r(e, t, r) {
            var o = t.trim().split(m);
            t = o;
            var i = o.length,
              a = e.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === a ? "" : e[0] + " "; s < i; ++s)
                  t[s] = n(e, t[s], r).trim();
                break;
              default:
                var c = (s = 0);
                for (t = []; s < i; ++s)
                  for (var l = 0; l < a; ++l)
                    t[c++] = n(e[l] + " ", o[s], r).trim();
            }
            return t;
          }
          function n(e, t, r) {
            var n = t.charCodeAt(0);
            switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
              case 38:
                return t.replace(g, "$1" + e.trim());
              case 58:
                return e.trim() + t.replace(g, "$1" + e.trim());
              default:
                if (0 < 1 * r && 0 < t.indexOf("\f"))
                  return t.replace(
                    g,
                    (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                  );
            }
            return e + t;
          }
          function o(e, t, r, n) {
            var a = e + ";",
              s = 2 * t + 3 * r + 4 * n;
            if (944 === s) {
              e = a.indexOf(":", 9) + 1;
              var c = a.substring(e, a.length - 1).trim();
              return (
                (c = a.substring(0, e).trim() + c + ";"),
                1 === P || (2 === P && i(c, 1)) ? "-webkit-" + c + c : c
              );
            }
            if (0 === P || (2 === P && !i(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(A, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (c = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  c +
                  a
                );
              case 1005:
                return d.test(a)
                  ? a.replace(p, ":-webkit-") + a.replace(p, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((t = (c = a.substring(13).trim()).indexOf("-") + 1),
                  c.charCodeAt(0) + c.charCodeAt(t))
                ) {
                  case 226:
                    c = a.replace(w, "tb");
                    break;
                  case 232:
                    c = a.replace(w, "tb-rl");
                    break;
                  case 220:
                    c = a.replace(w, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + c + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((t = (a = e).length - 10),
                  (s =
                    (c = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                      .substring(e.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | c.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > c.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(c, "-webkit-" + c) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        c,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      a.replace(c, "-webkit-" + c) +
                      ";" +
                      a.replace(c, "-ms-" + c + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (c = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          c +
                          "-ms-flex-" +
                          c +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(S, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(S, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === E.test(e))
                  return 115 ===
                    (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? o(
                        e.replace("stretch", "fill-available"),
                        t,
                        r,
                        n
                      ).replace(":fill-available", ":stretch")
                    : a.replace(c, "-webkit-" + c) +
                        a.replace(c, "-moz-" + c.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === r + n &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(h, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function i(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
              n = e.substring(0, 3 !== t ? r : 10);
            return (
              (r = e.substring(r + 1, e.length - 1)),
              R(2 !== t ? n : n.replace(k, "$1"), r, t)
            );
          }
          function a(e, t) {
            var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";"
              ? r.replace(C, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function s(e, t, r, n, o, i, a, s, c, u) {
            for (var f, p = 0, d = t; p < N; ++p)
              switch ((f = _[p].call(l, e, d, r, n, o, i, a, s, c, u))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  d = f;
              }
            if (d !== t) return d;
          }
          function c(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((R = null),
                e
                  ? "function" != typeof e
                    ? (P = 1)
                    : ((P = 2), (R = e))
                  : (P = 0)),
              c
            );
          }
          function l(e, r) {
            var n = e;
            if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < N)) {
              var o = s(-1, r, n, n, O, T, 0, 0, 0, 0);
              void 0 !== o && "string" == typeof o && (r = o);
            }
            var i = t(j, n, r, 0, 0);
            return (
              0 < N &&
                void 0 !== (o = s(-2, i, n, n, O, T, i.length, 0, 0, 0)) &&
                (i = o),
              "",
              (I = 0),
              (T = O = 1),
              i
            );
          }
          var u = /^\0+/g,
            f = /[\0\r\f]/g,
            p = /: */g,
            d = /zoo|gra/,
            h = /([,: ])(transform)/g,
            m = /,\r+?/g,
            g = /([\t\r\n ])*\f?&/g,
            y = /@(k\w+)\s*(\S*)\s*/,
            b = /::(place)/g,
            v = /:(read-only)/g,
            w = /[svh]\w+-[tblr]{2}/,
            x = /\(\s*(.*)\s*\)/g,
            C = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            E = /stretch|:\s*\w+\-(?:conte|avail)/,
            A = /([^-])(image-set\()/,
            T = 1,
            O = 1,
            I = 0,
            P = 1,
            j = [],
            _ = [],
            N = 0,
            R = null,
            z = 0;
          return (
            (l.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  N = _.length = 0;
                  break;
                default:
                  if ("function" == typeof t) _[N++] = t;
                  else if ("object" == typeof t)
                    for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                  else z = 0 | !!t;
              }
              return e;
            }),
            (l.set = c),
            void 0 !== e && c(e),
            l
          );
        },
        c = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var l = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        u = (function (e) {
          var t = {};
          return function (r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r];
          };
        })(function (e) {
          return (
            l.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        f = r(5706),
        p = r.n(f);
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var h = function (e, t) {
          for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
            r.push(t[n], e[n + 1]);
          return r;
        },
        m = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, o.typeOf)(e)
          );
        },
        g = Object.freeze([]),
        y = Object.freeze({});
      function b(e) {
        return "function" == typeof e;
      }
      function v(e) {
        return e.displayName || e.name || "Component";
      }
      function w(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var x =
          ("undefined" != typeof process &&
            ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
          "data-styled",
        C = "undefined" != typeof window && "HTMLElement" in window,
        S = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !== {}.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY &&
              {}.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !== {}.SC_DISABLE_SPEEDY &&
              "" !== {}.SC_DISABLE_SPEEDY &&
              "false" !== {}.SC_DISABLE_SPEEDY &&
              {}.SC_DISABLE_SPEEDY
        );
      function k(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" +
            e +
            " for more information." +
            (r.length > 0 ? " Args: " + r.join(", ") : "")
        );
      }
      var E = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, n = r.length, o = n; e >= o; )
                  (o <<= 1) < 0 && k(16, "" + e);
                (this.groupSizes = new Uint32Array(o)),
                  this.groupSizes.set(r),
                  (this.length = o);
                for (var i = n; i < o; i++) this.groupSizes[i] = 0;
              }
              for (
                var a = this.indexOfGroup(e + 1), s = 0, c = t.length;
                s < c;
                s++
              )
                this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++, a++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  n = r + t;
                this.groupSizes[e] = 0;
                for (var o = r; o < n; o++) this.tag.deleteRule(r);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  o = n + r,
                  i = n;
                i < o;
                i++
              )
                t += this.tag.getRule(i) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        A = new Map(),
        T = new Map(),
        O = 1,
        I = function (e) {
          if (A.has(e)) return A.get(e);
          for (; T.has(O); ) O++;
          var t = O++;
          return A.set(e, t), T.set(t, e), t;
        },
        P = function (e) {
          return T.get(e);
        },
        j = function (e, t) {
          A.set(e, t), T.set(t, e);
        },
        _ = "style[" + x + '][data-styled-version="5.2.3"]',
        N = new RegExp(
          "^" + x + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        R = function (e, t, r) {
          for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
            (n = o[i]) && e.registerName(t, n);
        },
        z = function (e, t) {
          for (
            var r = t.innerHTML.split("/*!sc*/\n"), n = [], o = 0, i = r.length;
            o < i;
            o++
          ) {
            var a = r[o].trim();
            if (a) {
              var s = a.match(N);
              if (s) {
                var c = 0 | parseInt(s[1], 10),
                  l = s[2];
                0 !== c &&
                  (j(l, c), R(e, l, s[3]), e.getTag().insertRules(c, n)),
                  (n.length = 0);
              } else n.push(a);
            }
          }
        },
        L = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        M = function (e) {
          var t = document.head,
            r = e || t,
            n = document.createElement("style"),
            o = (function (e) {
              for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                var n = t[r];
                if (n && 1 === n.nodeType && n.hasAttribute(x)) return n;
              }
            })(r),
            i = void 0 !== o ? o.nextSibling : null;
          n.setAttribute(x, "active"),
            n.setAttribute("data-styled-version", "5.2.3");
          var a = L();
          return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
        },
        D = (function () {
          function e(e) {
            var t = (this.element = M(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, n = t.length;
                  r < n;
                  r++
                ) {
                  var o = t[r];
                  if (o.ownerNode === e) return o;
                }
                k(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && "string" == typeof t.cssText
                ? t.cssText
                : "";
            }),
            e
          );
        })(),
        $ = (function () {
          function e(e) {
            var t = (this.element = M(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var r = document.createTextNode(t),
                  n = this.nodes[e];
                return (
                  this.element.insertBefore(r, n || null), this.length++, !0
                );
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        F = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        B = C,
        H = { isServer: !C, useCSSOMInjection: !S },
        q = (function () {
          function e(e, t, r) {
            void 0 === e && (e = y),
              void 0 === t && (t = {}),
              (this.options = d({}, H, {}, e)),
              (this.gs = t),
              (this.names = new Map(r)),
              !this.options.isServer &&
                C &&
                B &&
                ((B = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(_), r = 0, n = t.length;
                    r < n;
                    r++
                  ) {
                    var o = t[r];
                    o &&
                      "active" !== o.getAttribute(x) &&
                      (z(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return I(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  d({}, this.options, {}, t),
                  this.gs,
                  (r && this.names) || void 0
                )
              );
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((r = (t = this.options).isServer),
                  (n = t.useCSSOMInjection),
                  (o = t.target),
                  (e = r ? new F(o) : n ? new D(o) : new $(o)),
                  new E(e)))
              );
              var e, t, r, n, o;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((I(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (t.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(I(e), r);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(I(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.getTag(), r = t.length, n = "", o = 0;
                  o < r;
                  o++
                ) {
                  var i = P(o);
                  if (void 0 !== i) {
                    var a = e.names.get(i),
                      s = t.getGroup(o);
                    if (void 0 !== a && 0 !== s.length) {
                      var c = x + ".g" + o + '[id="' + i + '"]',
                        l = "";
                      void 0 !== a &&
                        a.forEach(function (e) {
                          e.length > 0 && (l += e + ",");
                        }),
                        (n += "" + s + c + '{content:"' + l + '"}/*!sc*/\n');
                    }
                  }
                }
                return n;
              })(this);
            }),
            e
          );
        })(),
        Y = /(a)(d)/gi,
        U = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function G(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = U(t % 52) + r;
        return (U(t % 52) + r).replace(Y, "$1-$2");
      }
      var W = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        V = function (e) {
          return W(5381, e);
        };
      function X(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (b(r) && !w(r)) return !1;
        }
        return !0;
      }
      var K = V("5.2.3"),
        Z = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && X(e)),
              (this.componentId = t),
              (this.baseHash = W(K, t)),
              (this.baseStyle = r),
              q.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var n = this.componentId,
                o = [];
              if (
                (this.baseStyle &&
                  o.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                this.isStatic && !r.hash)
              )
                if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
                  o.push(this.staticRulesId);
                else {
                  var i = me(this.rules, e, t, r).join(""),
                    a = G(W(this.baseHash, i.length) >>> 0);
                  if (!t.hasNameForId(n, a)) {
                    var s = r(i, "." + a, void 0, n);
                    t.insertRules(n, a, s);
                  }
                  o.push(a), (this.staticRulesId = a);
                }
              else {
                for (
                  var c = this.rules.length,
                    l = W(this.baseHash, r.hash),
                    u = "",
                    f = 0;
                  f < c;
                  f++
                ) {
                  var p = this.rules[f];
                  if ("string" == typeof p) u += p;
                  else if (p) {
                    var d = me(p, e, t, r),
                      h = Array.isArray(d) ? d.join("") : d;
                    (l = W(l, h + f)), (u += h);
                  }
                }
                if (u) {
                  var m = G(l >>> 0);
                  if (!t.hasNameForId(n, m)) {
                    var g = r(u, "." + m, void 0, n);
                    t.insertRules(n, m, g);
                  }
                  o.push(m);
                }
              }
              return o.join(" ");
            }),
            e
          );
        })(),
        J = /^\s*\/\/.*$/gm,
        Q = [":", "[", ".", "#"];
      function ee(e) {
        var t,
          r,
          n,
          o,
          i = void 0 === e ? y : e,
          a = i.options,
          c = void 0 === a ? y : a,
          l = i.plugins,
          u = void 0 === l ? g : l,
          f = new s(c),
          p = [],
          d = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (r, n, o, i, a, s, c, l, u, f) {
              switch (r) {
                case 1:
                  if (0 === u && 64 === n.charCodeAt(0)) return e(n + ";"), "";
                  break;
                case 2:
                  if (0 === l) return n + "/*|*/";
                  break;
                case 3:
                  switch (l) {
                    case 102:
                    case 112:
                      return e(o[0] + n), "";
                    default:
                      return n + (0 === f ? "/*|*/" : "");
                  }
                case -2:
                  n.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            p.push(e);
          }),
          h = function (e, n, i) {
            return (0 === n && -1 !== Q.indexOf(i[r.length])) || i.match(o)
              ? e
              : "." + t;
          };
        function m(e, i, a, s) {
          void 0 === s && (s = "&");
          var c = e.replace(J, ""),
            l = i && a ? a + " " + i + " { " + c + " }" : c;
          return (
            (t = s),
            (r = i),
            (n = new RegExp("\\" + r + "\\b", "g")),
            (o = new RegExp("(\\" + r + "\\b){2,}")),
            f(a || !i ? "" : i, l)
          );
        }
        return (
          f.use(
            [].concat(u, [
              function (e, t, o) {
                2 === e &&
                  o.length &&
                  o[0].lastIndexOf(r) > 0 &&
                  (o[0] = o[0].replace(n, h));
              },
              d,
              function (e) {
                if (-2 === e) {
                  var t = p;
                  return (p = []), t;
                }
              },
            ])
          ),
          (m.hash = u.length
            ? u
                .reduce(function (e, t) {
                  return t.name || k(15), W(e, t.name);
                }, 5381)
                .toString()
            : ""),
          m
        );
      }
      var te = n.createContext(),
        re = (te.Consumer, n.createContext()),
        ne = (re.Consumer, new q()),
        oe = ee();
      function ie() {
        return (0, n.useContext)(te) || ne;
      }
      function ae() {
        return (0, n.useContext)(re) || oe;
      }
      function se(e) {
        var t = (0, n.useState)(e.stylisPlugins),
          r = t[0],
          o = t[1],
          i = ie(),
          s = (0, n.useMemo)(
            function () {
              var t = i;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target]
          ),
          c = (0, n.useMemo)(
            function () {
              return ee({
                options: { prefix: !e.disableVendorPrefixes },
                plugins: r,
              });
            },
            [e.disableVendorPrefixes, r]
          );
        return (
          (0, n.useEffect)(
            function () {
              a()(r, e.stylisPlugins) || o(e.stylisPlugins);
            },
            [e.stylisPlugins]
          ),
          n.createElement(
            te.Provider,
            { value: s },
            n.createElement(re.Provider, { value: c }, e.children)
          )
        );
      }
      var ce = (function () {
          function e(e, t) {
            var r = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = oe);
              var n = r.name + t.hash;
              e.hasNameForId(r.id, n) ||
                e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
            }),
              (this.toString = function () {
                return k(12, String(r.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = oe), this.name + e.hash;
            }),
            e
          );
        })(),
        le = /([A-Z])/,
        ue = /([A-Z])/g,
        fe = /^ms-/,
        pe = function (e) {
          return "-" + e.toLowerCase();
        };
      function de(e) {
        return le.test(e) ? e.replace(ue, pe).replace(fe, "-ms-") : e;
      }
      var he = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function me(e, t, r, n) {
        if (Array.isArray(e)) {
          for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
            "" !== (o = me(e[a], t, r, n)) &&
              (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
          return i;
        }
        return he(e)
          ? ""
          : w(e)
          ? "." + e.styledComponentId
          : b(e)
          ? "function" != typeof (l = e) ||
            (l.prototype && l.prototype.isReactComponent) ||
            !t
            ? e
            : me(e(t), t, r, n)
          : e instanceof ce
          ? r
            ? (e.inject(r, n), e.getName(n))
            : e
          : m(e)
          ? (function e(t, r) {
              var n,
                o,
                i = [];
              for (var a in t)
                t.hasOwnProperty(a) &&
                  !he(t[a]) &&
                  (m(t[a])
                    ? i.push.apply(i, e(t[a], a))
                    : b(t[a])
                    ? i.push(de(a) + ":", t[a], ";")
                    : i.push(
                        de(a) +
                          ": " +
                          ((n = a),
                          (null == (o = t[a]) ||
                          "boolean" == typeof o ||
                          "" === o
                            ? ""
                            : "number" != typeof o || 0 === o || n in c
                            ? String(o).trim()
                            : o + "px") + ";")
                      ));
              return r ? [r + " {"].concat(i, ["}"]) : i;
            })(e)
          : e.toString();
        var l;
      }
      function ge(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return b(e) || m(e)
          ? me(h(g, [e].concat(r)))
          : 0 === r.length && 1 === e.length && "string" == typeof e[0]
          ? e
          : me(h(e, r));
      }
      new Set();
      var ye = function (e, t, r) {
          return (
            void 0 === r && (r = y),
            (e.theme !== r.theme && e.theme) || t || r.theme
          );
        },
        be = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        ve = /(^-|-$)/g;
      function we(e) {
        return e.replace(be, "-").replace(ve, "");
      }
      var xe = function (e) {
        return G(V(e) >>> 0);
      };
      function Ce(e) {
        return "string" == typeof e && !0;
      }
      var Se = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        ke = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function Ee(e, t, r) {
        var n = e[r];
        Se(t) && Se(n) ? Ae(n, t) : (e[r] = t);
      }
      function Ae(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (var o = 0, i = r; o < i.length; o++) {
          var a = i[o];
          if (Se(a)) for (var s in a) ke(s) && Ee(e, a[s], s);
        }
        return e;
      }
      var Te = n.createContext();
      Te.Consumer;
      function Oe(e) {
        var t = (0, n.useContext)(Te),
          r = (0, n.useMemo)(
            function () {
              return (function (e, t) {
                return e
                  ? b(e)
                    ? e(t)
                    : Array.isArray(e) || "object" != typeof e
                    ? k(8)
                    : t
                    ? d({}, t, {}, e)
                    : e
                  : k(14);
              })(e.theme, t);
            },
            [e.theme, t]
          );
        return e.children
          ? n.createElement(Te.Provider, { value: r }, e.children)
          : null;
      }
      var Ie = {};
      function Pe(e, t, r) {
        var o = w(e),
          i = !Ce(e),
          a = t.attrs,
          s = void 0 === a ? g : a,
          c = t.componentId,
          l =
            void 0 === c
              ? (function (e, t) {
                  var r = "string" != typeof e ? "sc" : we(e);
                  Ie[r] = (Ie[r] || 0) + 1;
                  var n = r + "-" + xe("5.2.3" + r + Ie[r]);
                  return t ? t + "-" + n : n;
                })(t.displayName, t.parentComponentId)
              : c,
          f = t.displayName,
          h =
            void 0 === f
              ? (function (e) {
                  return Ce(e) ? "styled." + e : "Styled(" + v(e) + ")";
                })(e)
              : f,
          m =
            t.displayName && t.componentId
              ? we(t.displayName) + "-" + t.componentId
              : t.componentId || l,
          x =
            o && e.attrs
              ? Array.prototype.concat(e.attrs, s).filter(Boolean)
              : s,
          C = t.shouldForwardProp;
        o &&
          e.shouldForwardProp &&
          (C = t.shouldForwardProp
            ? function (r, n) {
                return e.shouldForwardProp(r, n) && t.shouldForwardProp(r, n);
              }
            : e.shouldForwardProp);
        var S,
          k = new Z(r, m, o ? e.componentStyle : void 0),
          E = k.isStatic && 0 === s.length,
          A = function (e, t) {
            return (function (e, t, r, o) {
              var i = e.attrs,
                a = e.componentStyle,
                s = e.defaultProps,
                c = e.foldedComponentIds,
                l = e.shouldForwardProp,
                f = e.styledComponentId,
                p = e.target,
                h = (function (e, t, r) {
                  void 0 === e && (e = y);
                  var n = d({}, t, { theme: e }),
                    o = {};
                  return (
                    r.forEach(function (e) {
                      var t,
                        r,
                        i,
                        a = e;
                      for (t in (b(a) && (a = a(n)), a))
                        n[t] = o[t] =
                          "className" === t
                            ? ((r = o[t]),
                              (i = a[t]),
                              r && i ? r + " " + i : r || i)
                            : a[t];
                    }),
                    [n, o]
                  );
                })(ye(t, (0, n.useContext)(Te), s) || y, t, i),
                m = h[0],
                g = h[1],
                v = (function (e, t, r, n) {
                  var o = ie(),
                    i = ae();
                  return t
                    ? e.generateAndInjectStyles(y, o, i)
                    : e.generateAndInjectStyles(r, o, i);
                })(a, o, m),
                w = r,
                x = g.$as || t.$as || g.as || t.as || p,
                C = Ce(x),
                S = g !== t ? d({}, t, {}, g) : t,
                k = {};
              for (var E in S)
                "$" !== E[0] &&
                  "as" !== E &&
                  ("forwardedAs" === E
                    ? (k.as = S[E])
                    : (l ? l(E, u) : !C || u(E)) && (k[E] = S[E]));
              return (
                t.style &&
                  g.style !== t.style &&
                  (k.style = d({}, t.style, {}, g.style)),
                (k.className = Array.prototype
                  .concat(c, f, v !== f ? v : null, t.className, g.className)
                  .filter(Boolean)
                  .join(" ")),
                (k.ref = w),
                (0, n.createElement)(x, k)
              );
            })(S, e, t, E);
          };
        return (
          (A.displayName = h),
          ((S = n.forwardRef(A)).attrs = x),
          (S.componentStyle = k),
          (S.displayName = h),
          (S.shouldForwardProp = C),
          (S.foldedComponentIds = o
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : g),
          (S.styledComponentId = m),
          (S.target = o ? e.target : e),
          (S.withComponent = function (e) {
            var n = t.componentId,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(t, ["componentId"]),
              i = n && n + "-" + (Ce(e) ? e : we(v(e)));
            return Pe(e, d({}, o, { attrs: x, componentId: i }), r);
          }),
          Object.defineProperty(S, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = o ? Ae({}, e.defaultProps, t) : t;
            },
          }),
          (S.toString = function () {
            return "." + S.styledComponentId;
          }),
          i &&
            p()(S, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          S
        );
      }
      var je = function (e) {
        return (function e(t, r, n) {
          if ((void 0 === n && (n = y), !(0, o.isValidElementType)(r)))
            return k(1, String(r));
          var i = function () {
            return t(r, n, ge.apply(void 0, arguments));
          };
          return (
            (i.withConfig = function (o) {
              return e(t, r, d({}, n, {}, o));
            }),
            (i.attrs = function (o) {
              return e(
                t,
                r,
                d({}, n, {
                  attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
                })
              );
            }),
            i
          );
        })(Pe, e);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        je[e] = je(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = X(e)),
            q.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        (t.createStyles = function (e, t, r, n) {
          var o = n(me(this.rules, t, r, n).join(""), ""),
            i = this.componentId + e;
          r.insertRules(i, i, o);
        }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, r, n) {
            e > 2 && q.registerId(this.componentId + e),
              this.removeStyles(e, r),
              this.createStyles(e, t, r, n);
          });
      })();
      !(function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString(),
              r = L();
            return (
              "<style " +
              [
                r && 'nonce="' + r + '"',
                x + '="true"',
                'data-styled-version="5.2.3"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              t +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return e.sealed ? k(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var t;
              if (e.sealed) return k(2);
              var r =
                  (((t = {})[x] = ""),
                  (t["data-styled-version"] = "5.2.3"),
                  (t.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  t),
                o = L();
              return (
                o && (r.nonce = o),
                [n.createElement("style", d({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new q({ isServer: !0 })),
            (this.sealed = !1);
        }
        var t = e.prototype;
        (t.collectStyles = function (e) {
          return this.sealed
            ? k(2)
            : n.createElement(se, { sheet: this.instance }, e);
        }),
          (t.interleaveWithNodeStream = function (e) {
            return k(3);
          });
      })();
      var _e = je,
        Ne = _e.div.withConfig({
          displayName: "banner__Container",
          componentId: "sc-1tm8xqf-0",
        })(
          [
            'width:100%;background:url("/',
            '-banner.png") center center / cover fixed;height:300px;display:flex;align-items:flex-end;@media only screen and (max-width:480px){height:220px;}',
          ],
          function (e) {
            return e.theme.name;
          }
        ),
        Re = _e.img.withConfig({
          displayName: "banner__Mugshot",
          componentId: "sc-1tm8xqf-1",
        })([
          "height:250px;@media only screen and (max-width:480px){height:110px;}@media only screen and (max-width:375px){height:100px;}",
        ]),
        ze = _e.div.withConfig({
          displayName: "banner__Text",
          componentId: "sc-1tm8xqf-2",
        })(
          [
            "color:",
            ';font-size:35px;font-weight:bold;font-family:"Bebas Neue";@media only screen and (max-width:480px){font-size:20px;}@media only screen and (max-width:375px){font-size:17.5px;}',
          ],
          function (e) {
            return e.theme.bannerText;
          }
        ),
        Le = _e.div.withConfig({
          displayName: "banner__Wrapper",
          componentId: "sc-1tm8xqf-3",
        })([
          "margin:0 auto;max-width:800px;display:grid;grid-template-columns:1fr 2fr;-webkit-box-align:center;align-items:center;gap:40px;@media only screen and (max-width:480px){max-width:95%;gap:20px;margin-bottom:20px;}",
        ]),
        Me = function (e) {
          var t = e.theme;
          return n.createElement(
            Ne,
            null,
            n.createElement(
              Le,
              null,
              n.createElement(Re, { src: "/" + t + "-mugshot.png" }),
              n.createElement(
                ze,
                null,
                "Hey, I'm Ashish Ajimal.",
                n.createElement("br", null),
                "I work with startups to hit the ground running on their digital journey."
              )
            )
          );
        },
        De = r(4694),
        $e = r(5697),
        Fe = r.n($e);
      function Be(e) {
        return (Be =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function He(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                He(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Ue(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function Ge(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function We(e) {
        return (
          (t = e),
          (t -= 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      function Ve(e) {
        return e
          .split(";")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, t) {
            var r,
              n = t.indexOf(":"),
              o = We(t.slice(0, n)),
              i = t.slice(n + 1).trim();
            return (
              o.startsWith("webkit")
                ? (e[((r = o), r.charAt(0).toUpperCase() + r.slice(1))] = i)
                : (e[o] = i),
              e
            );
          }, {});
      }
      var Xe = !1;
      try {
        Xe = !0;
      } catch (_r) {}
      function Ke(e) {
        return De.parse.icon
          ? De.parse.icon(e)
          : null === e
          ? null
          : "object" === Be(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" == typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function Ze(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? He({}, e, t)
          : {};
      }
      function Je(e) {
        var t = e.forwardedRef,
          r = Ue(e, ["forwardedRef"]),
          n = r.icon,
          o = r.mask,
          i = r.symbol,
          a = r.className,
          s = r.title,
          c = r.titleId,
          l = Ke(n),
          u = Ze(
            "classes",
            [].concat(
              Ge(
                (function (e) {
                  var t,
                    r = e.spin,
                    n = e.pulse,
                    o = e.fixedWidth,
                    i = e.inverse,
                    a = e.border,
                    s = e.listItem,
                    c = e.flip,
                    l = e.size,
                    u = e.rotation,
                    f = e.pull,
                    p =
                      (He(
                        (t = {
                          "fa-spin": r,
                          "fa-pulse": n,
                          "fa-fw": o,
                          "fa-inverse": i,
                          "fa-border": a,
                          "fa-li": s,
                          "fa-flip-horizontal":
                            "horizontal" === c || "both" === c,
                          "fa-flip-vertical": "vertical" === c || "both" === c,
                        }),
                        "fa-".concat(l),
                        null != l
                      ),
                      He(t, "fa-rotate-".concat(u), null != u && 0 !== u),
                      He(t, "fa-pull-".concat(f), null != f),
                      He(t, "fa-swap-opacity", e.swapOpacity),
                      t);
                  return Object.keys(p)
                    .map(function (e) {
                      return p[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(r)
              ),
              Ge(a.split(" "))
            )
          ),
          f = Ze(
            "transform",
            "string" == typeof r.transform
              ? De.parse.transform(r.transform)
              : r.transform
          ),
          p = Ze("mask", Ke(o)),
          d = (0, De.icon)(
            l,
            Ye({}, u, {}, f, {}, p, { symbol: i, title: s, titleId: c })
          );
        if (!d)
          return (
            (function () {
              var e;
              !Xe &&
                console &&
                "function" == typeof console.error &&
                (e = console).error.apply(e, arguments);
            })("Could not find icon", l),
            null
          );
        var h = d.abstract,
          m = { ref: t };
        return (
          Object.keys(r).forEach(function (e) {
            Je.defaultProps.hasOwnProperty(e) || (m[e] = r[e]);
          }),
          nt(h[0], m)
        );
      }
      (Je.displayName = "FontAwesomeIcon"),
        (Je.propTypes = {
          border: Fe().bool,
          className: Fe().string,
          mask: Fe().oneOfType([Fe().object, Fe().array, Fe().string]),
          fixedWidth: Fe().bool,
          inverse: Fe().bool,
          flip: Fe().oneOf(["horizontal", "vertical", "both"]),
          icon: Fe().oneOfType([Fe().object, Fe().array, Fe().string]),
          listItem: Fe().bool,
          pull: Fe().oneOf(["right", "left"]),
          pulse: Fe().bool,
          rotation: Fe().oneOf([0, 90, 180, 270]),
          size: Fe().oneOf([
            "lg",
            "xs",
            "sm",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Fe().bool,
          symbol: Fe().oneOfType([Fe().bool, Fe().string]),
          title: Fe().string,
          transform: Fe().oneOfType([Fe().string, Fe().object]),
          swapOpacity: Fe().bool,
        }),
        (Je.defaultProps = {
          border: !1,
          className: "",
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: "",
          transform: null,
          swapOpacity: !1,
        });
      var Qe,
        et,
        tt,
        rt,
        nt = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" == typeof r) return r;
          var o = (r.children || []).map(function (r) {
              return e(t, r);
            }),
            i = Object.keys(r.attributes || {}).reduce(
              function (e, t) {
                var n = r.attributes[t];
                switch (t) {
                  case "class":
                    (e.attrs.className = n), delete r.attributes.class;
                    break;
                  case "style":
                    e.attrs.style = Ve(n);
                    break;
                  default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                      ? (e.attrs[t.toLowerCase()] = n)
                      : (e.attrs[We(t)] = n);
                }
                return e;
              },
              { attrs: {} }
            ),
            a = n.style,
            s = void 0 === a ? {} : a,
            c = Ue(n, ["style"]);
          return (
            (i.attrs.style = Ye({}, i.attrs.style, {}, s)),
            t.apply(void 0, [r.tag, Ye({}, i.attrs, {}, c)].concat(Ge(o)))
          );
        }.bind(null, n.createElement),
        ot = r(7190),
        it = r(8014),
        at = _e.div.withConfig({
          displayName: "content__Container",
          componentId: "sc-1piyzg0-0",
        })(
          [
            "max-width:900px;min-height:500px;position:relative;display:flex;margin:0 auto;hr{border:1px dotted ",
            ";background:",
            ";height:2px;width:25px;margin:15px 0;border-radius:50px;}@media only screen and (max-width:480px){max-width:95%;min-height:200px;}",
          ],
          function (e) {
            return e.theme.headingColor;
          },
          function (e) {
            return e.theme.contentDropColor;
          }
        ),
        st = _e.div.withConfig({
          displayName: "content__MiddleContent",
          componentId: "sc-1piyzg0-1",
        })(
          [
            "background:",
            ";border-radius:10px;transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1) 0s;padding:20px;width:100%;margin-top:-30px;border:2px solid;border-color:",
            ";color:",
            ";font-weight:bold;@media only screen and (max-width:480px){margin-top:-20px;}",
          ],
          function (e) {
            return e.theme.contentDropColor;
          },
          function (e) {
            return e.theme.borderColor;
          },
          function (e) {
            return e.theme.textColor;
          }
        ),
        ct = _e.div.withConfig({
          displayName: "content__Heading",
          componentId: "sc-1piyzg0-2",
        })(
          [
            "color:",
            ';font-family:"Bebas Neue";font-size:35px;display:flex;justify-content:space-between;margin-bottom:10px;@media only screen and (max-width:480px){font-size:25px;margin-bottom:5px;}',
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        lt = _e.div.withConfig({
          displayName: "content__Icons",
          componentId: "sc-1piyzg0-3",
        })(
          [
            "display:flex;svg{font-size:35px;margin-right:10px;color:",
            ";}@media only screen and (max-width:480px){svg{font-size:20px;margin-right:5px;color:",
            ";}}",
          ],
          function (e) {
            return e.theme.headingColor;
          },
          function (e) {
            return e.theme.headingColor;
          }
        ),
        ut = _e.div.withConfig({
          displayName: "content__Text",
          componentId: "sc-1piyzg0-4",
        })(
          [
            'font-size:16px;line-height:1.5;font-family:"Raleway";padding:10px;svg{margin:0px 5px;color:',
            ";}@media only screen and (max-width:480px){font-size:12px;}",
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        ft = _e.div.withConfig({
          displayName: "content__Spacer",
          componentId: "sc-1piyzg0-5",
        })(["margin-top:40px;"]),
        pt = _e.div.withConfig({
          displayName: "content__SubHeading",
          componentId: "sc-1piyzg0-6",
        })(
          [
            "color:",
            ';font-family:"Poppins";font-size:16px;margin:10px auto;font-weight:bold;@media only screen and (max-width:480px){font-size:12px;margin:5px auto;}',
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        dt = _e.div.withConfig({
          displayName: "content__TimelineText",
          componentId: "sc-1piyzg0-7",
        })([
          "font-size:14px;margin-left:10px;@media only screen and (max-width:480px){font-size:9px;margin-left:5px;}",
        ]),
        ht = function (e) {
          e.theme;
          return n.createElement(
            at,
            null,
            n.createElement(
              st,
              null,
              n.createElement(
                ct,
                null,
                n.createElement("div", null, "Full Stack Dev."),
                n.createElement(
                  lt,
                  null,
                  n.createElement(Je, { icon: ot.wn1 }),
                  n.createElement(Je, { icon: ot.DTC }),
                  n.createElement(Je, { icon: ot.TV_ }),
                  n.createElement(Je, { icon: ot.GJX }),
                  n.createElement(Je, { icon: ot.Gu1 }),
                  n.createElement(Je, { icon: it.Z__ })
                )
              ),
              n.createElement(
                ut,
                null,
                "I have more than 3 Years of experience in Frontend Development with React Ecosystem.",
                n.createElement("br", null),
                "I write Full Stack Applications and sometimes Mobile Apps with React Native.",
                n.createElement("hr", null),
                "I have good expertise working with organisations and early-stage startups varying from Security, Logistics, E-Commerce, and Fantasy Sports."
              ),
              n.createElement(ft, null),
              n.createElement(ct, null, "Timeline"),
              n.createElement(
                ut,
                null,
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    " ",
                    n.createElement(Je, { icon: it.een }),
                    " Fantasy"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "A Promising Fantasy Sports startup disrupted the space with Advanced Fantasy sports experience.",
                    n.createElement("br", null),
                    "As the fantasy space grew in India we launched multiple sports with exciting features.",
                    n.createElement("br", null),
                    "Unluckily, our startup ran out of funds too soon."
                  )
                ),
                n.createElement("hr", null),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    n.createElement(Je, { icon: it.Hi6 }),
                    " Laundry"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "Early Laundry startup with pick and drop services for Gurgaon.",
                    n.createElement("br", null),
                    "We suspended operations after few months due to a lack of storage and logistic power."
                  )
                ),
                n.createElement("hr", null),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    n.createElement(Je, { icon: it.qD8 }),
                    " E-Commerce"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "A midsized e-commerce company, producing and selling health supplements in India.",
                    n.createElement("br", null),
                    "India's biggest online marketplace supplements and health goods."
                  )
                ),
                n.createElement("hr", null),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    n.createElement(Je, { icon: it.een }),
                    " Fantasy 2.0"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "Designed and developed a fantasy platform from scratch with plug and playable fantasy model.",
                    n.createElement("br", null)
                  )
                ),
                n.createElement("hr", null),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    n.createElement(Je, { icon: it.QRb }),
                    " Education"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "Ed-tech company with the largest catalog of specialization courses in the government and banking sector."
                  )
                ),
                n.createElement("hr", null),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    pt,
                    null,
                    n.createElement(Je, { icon: it.BC0 }),
                    " Security"
                  ),
                  n.createElement(
                    dt,
                    null,
                    "Currently working in a Cyber Security Company with solutions ranging from communication endpoint security, encryption, network security, cloud security, email security, mobile security and unified threat management."
                  )
                )
              ),
              n.createElement(ft, null),
              n.createElement(ct, null, "Four-Four-Two."),
              n.createElement(
                ut,
                null,
                n.createElement(Je, { icon: it.bgy }),
                "I love to watch football on weekends worsening my sleeping pattern with a pint of wheat beer and a cold slice of pizza in my hand.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Je, { icon: it.m6i }),
                " I support Paris Saint Germain.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Je, { icon: it.O_4 }),
                " I've played football in the past for Local Clubs in Delhi and 9-aside National Tournament.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Je, { icon: it.l9D }),
                " I enjoy playing FIFA in my spare time."
              )
            )
          );
        },
        mt = _e.div.withConfig({
          displayName: "toggle__Container",
          componentId: "sc-1fb2kyy-0",
        })(
          [
            ".toggle-container{width:70px;background-color:#c4c4c4;cursor:pointer;user-select:none;border-radius:20px;padding:2px;height:30px;position:relative;.material-icons{font-size:15px;}}.dialog-button{font-size:14px;line-height:16px;font-weight:bold;cursor:pointer;background-color:",
            ";color:white;padding:8px 12px;display:flex;justify-content:center;align-items:center;width:38px;height:30px;min-width:unset;border-radius:30px;box-sizing:border-box;box-shadow:0px 2px 4px rgba(0,0,0,0.25);position:absolute;left:34px;transition:all 0.3s ease;}.disabled{background-color:#002b49;left:2px;.material-icons{color:#ffc40c;}}@media only screen and (max-width:480px){.toggle-container{width:50px;padding:2px;height:20px;position:relative;.material-icons{font-size:15px;}}.dialog-button{padding:0;width:20px;height:20px;left:30px;}.disabled{left:2px;}}",
          ],
          function (e) {
            return e.theme.primaryColor;
          }
        ),
        gt = function (e) {
          var t = e.theme,
            r = e.changeTheme;
          return n.createElement(
            mt,
            null,
            n.createElement(
              "div",
              {
                className: "toggle-container",
                onClick: function () {
                  r("light" === t ? "dark" : "light");
                },
              },
              n.createElement(
                "div",
                {
                  className:
                    "dialog-button " + ("light" === t ? "" : "disabled"),
                },
                "light" === t
                  ? n.createElement(
                      "span",
                      { className: "material-icons" },
                      "brightness_5"
                    )
                  : n.createElement(
                      "span",
                      { className: "material-icons" },
                      "nights_stay"
                    )
              )
            )
          );
        },
        yt = _e.header.withConfig({
          displayName: "header__Container",
          componentId: "sc-11yw5o5-0",
        })(
          [
            "position:sticky;top:0;left:0;background:",
            ";display:flex;padding:20px 50px;justify-content:space-between;z-index:100000;@media only screen and (max-width:480px){height:0px;padding:10px 25px;}",
          ],
          function (e) {
            return e.theme.primaryColor;
          }
        ),
        bt = _e.img.withConfig({
          displayName: "header__Logo",
          componentId: "sc-11yw5o5-1",
        })([
          "position:absolute;overflow:hidden;display:inline-block;width:100px;height:100px;top:10px;z-index:100000;box-shadow:rgb(0 0 0 / 16%) 0px 3px 6px,rgb(0 0 0 / 23%) 0px 3px 6px;@media only screen and (max-width:480px){width:60px;height:60px;}",
        ]),
        vt = _e.div.withConfig({
          displayName: "header__Links",
          componentId: "sc-11yw5o5-2",
        })([
          "display:grid;grid-auto-flow:column;gap:25px;align-items:center;*{color:#fff;}",
        ]),
        wt = function (e) {
          var t = e.theme,
            r = e.changeTheme;
          return n.createElement(
            yt,
            null,
            n.createElement(
              "div",
              null,
              n.createElement(bt, { src: "/" + t + "-logo.png" })
            ),
            n.createElement(
              vt,
              { className: "navlinks" },
              n.createElement(gt, { theme: t, changeTheme: r })
            )
          );
        },
        xt = r(4839),
        Ct = r.n(xt),
        St = r(2993),
        kt = r.n(St),
        Et = r(6494),
        At = r.n(Et),
        Tt = "bodyAttributes",
        Ot = "htmlAttributes",
        It = "titleAttributes",
        Pt = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        jt =
          (Object.keys(Pt).map(function (e) {
            return Pt[e];
          }),
          "charset"),
        _t = "cssText",
        Nt = "href",
        Rt = "http-equiv",
        zt = "innerHTML",
        Lt = "itemprop",
        Mt = "name",
        Dt = "property",
        $t = "rel",
        Ft = "src",
        Bt = "target",
        Ht = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        qt = "defaultTitle",
        Yt = "defer",
        Ut = "encodeSpecialCharacters",
        Gt = "onChangeClientState",
        Wt = "titleTemplate",
        Vt = Object.keys(Ht).reduce(function (e, t) {
          return (e[Ht[t]] = t), e;
        }, {}),
        Xt = [Pt.NOSCRIPT, Pt.SCRIPT, Pt.STYLE],
        Kt = "data-react-helmet",
        Zt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        Jt = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        Qt = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        er =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        tr = function (e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        },
        rr = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        nr = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        or = function (e) {
          var t = lr(e, Pt.TITLE),
            r = lr(e, Wt);
          if (r && t)
            return r.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var n = lr(e, qt);
          return t || n || void 0;
        },
        ir = function (e) {
          return lr(e, Gt) || function () {};
        },
        ar = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return er({}, e, t);
            }, {});
        },
        sr = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[Pt.BASE];
            })
            .map(function (e) {
              return e[Pt.BASE];
            })
            .reverse()
            .reduce(function (t, r) {
              if (!t.length)
                for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                  var i = n[o].toLowerCase();
                  if (-1 !== e.indexOf(i) && r[i]) return t.concat(r);
                }
              return t;
            }, []);
        },
        cr = function (e, t, r) {
          var n = {};
          return r
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  hr(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      Zt(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, r) {
              var o = {};
              r.filter(function (e) {
                for (
                  var r = void 0, i = Object.keys(e), a = 0;
                  a < i.length;
                  a++
                ) {
                  var s = i[a],
                    c = s.toLowerCase();
                  -1 === t.indexOf(c) ||
                    (r === $t && "canonical" === e[r].toLowerCase()) ||
                    (c === $t && "stylesheet" === e[c].toLowerCase()) ||
                    (r = c),
                    -1 === t.indexOf(s) ||
                      (s !== zt && s !== _t && s !== Lt) ||
                      (r = s);
                }
                if (!r || !e[r]) return !1;
                var l = e[r].toLowerCase();
                return (
                  n[r] || (n[r] = {}),
                  o[r] || (o[r] = {}),
                  !n[r][l] && ((o[r][l] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                var s = i[a],
                  c = At()({}, n[s], o[s]);
                n[s] = c;
              }
              return e;
            }, [])
            .reverse();
        },
        lr = function (e, t) {
          for (var r = e.length - 1; r >= 0; r--) {
            var n = e[r];
            if (n.hasOwnProperty(t)) return n[t];
          }
          return null;
        },
        ur =
          ((Qe = Date.now()),
          function (e) {
            var t = Date.now();
            t - Qe > 16
              ? ((Qe = t), e(t))
              : setTimeout(function () {
                  ur(e);
                }, 0);
          }),
        fr = function (e) {
          return clearTimeout(e);
        },
        pr =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              ur
            : r.g.requestAnimationFrame || ur,
        dr =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              fr
            : r.g.cancelAnimationFrame || fr,
        hr = function (e) {
          return (
            console && "function" == typeof console.warn && console.warn(e)
          );
        },
        mr = null,
        gr = function (e, t) {
          var r = e.baseTag,
            n = e.bodyAttributes,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            s = e.noscriptTags,
            c = e.onChangeClientState,
            l = e.scriptTags,
            u = e.styleTags,
            f = e.title,
            p = e.titleAttributes;
          vr(Pt.BODY, n), vr(Pt.HTML, o), br(f, p);
          var d = {
              baseTag: wr(Pt.BASE, r),
              linkTags: wr(Pt.LINK, i),
              metaTags: wr(Pt.META, a),
              noscriptTags: wr(Pt.NOSCRIPT, s),
              scriptTags: wr(Pt.SCRIPT, l),
              styleTags: wr(Pt.STYLE, u),
            },
            h = {},
            m = {};
          Object.keys(d).forEach(function (e) {
            var t = d[e],
              r = t.newTags,
              n = t.oldTags;
            r.length && (h[e] = r), n.length && (m[e] = d[e].oldTags);
          }),
            t && t(),
            c(e, h, m);
        },
        yr = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        br = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = yr(e)),
            vr(Pt.TITLE, t);
        },
        vr = function (e, t) {
          var r = document.getElementsByTagName(e)[0];
          if (r) {
            for (
              var n = r.getAttribute(Kt),
                o = n ? n.split(",") : [],
                i = [].concat(o),
                a = Object.keys(t),
                s = 0;
              s < a.length;
              s++
            ) {
              var c = a[s],
                l = t[c] || "";
              r.getAttribute(c) !== l && r.setAttribute(c, l),
                -1 === o.indexOf(c) && o.push(c);
              var u = i.indexOf(c);
              -1 !== u && i.splice(u, 1);
            }
            for (var f = i.length - 1; f >= 0; f--) r.removeAttribute(i[f]);
            o.length === i.length
              ? r.removeAttribute(Kt)
              : r.getAttribute(Kt) !== a.join(",") &&
                r.setAttribute(Kt, a.join(","));
          }
        },
        wr = function (e, t) {
          var r = document.head || document.querySelector(Pt.HEAD),
            n = r.querySelectorAll(e + "[" + "data-react-helmet]"),
            o = Array.prototype.slice.call(n),
            i = [],
            a = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var n in t)
                  if (t.hasOwnProperty(n))
                    if (n === zt) r.innerHTML = t.innerHTML;
                    else if (n === _t)
                      r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText));
                    else {
                      var s = void 0 === t[n] ? "" : t[n];
                      r.setAttribute(n, s);
                    }
                r.setAttribute(Kt, "true"),
                  o.some(function (e, t) {
                    return (a = t), r.isEqualNode(e);
                  })
                    ? o.splice(a, 1)
                    : i.push(r);
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: o, newTags: i }
          );
        },
        xr = function (e) {
          return Object.keys(e).reduce(function (t, r) {
            var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
            return t ? t + " " + n : n;
          }, "");
        },
        Cr = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, r) {
            return (t[Ht[r] || r] = e[r]), t;
          }, t);
        },
        Sr = function (e, t, r) {
          switch (e) {
            case Pt.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (r = t.titleAttributes),
                    ((o = { key: e })[Kt] = !0),
                    (i = Cr(r, o)),
                    [n.createElement(Pt.TITLE, i, e)]
                  );
                  var e, r, o, i;
                },
                toString: function () {
                  return (function (e, t, r, n) {
                    var o = xr(r),
                      i = yr(t);
                    return o
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          o +
                          ">" +
                          nr(i, n) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          nr(i, n) +
                          "</" +
                          e +
                          ">";
                  })(e, t.title, t.titleAttributes, r);
                },
              };
            case Tt:
            case Ot:
              return {
                toComponent: function () {
                  return Cr(t);
                },
                toString: function () {
                  return xr(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, r) {
                      var o,
                        i = (((o = { key: r })[Kt] = !0), o);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var r = Ht[e] || e;
                          if (r === zt || r === _t) {
                            var n = t.innerHTML || t.cssText;
                            i.dangerouslySetInnerHTML = { __html: n };
                          } else i[r] = t[e];
                        }),
                        n.createElement(e, i)
                      );
                    });
                  })(e, t);
                },
                toString: function () {
                  return (function (e, t, r) {
                    return t.reduce(function (t, n) {
                      var o = Object.keys(n)
                          .filter(function (e) {
                            return !(e === zt || e === _t);
                          })
                          .reduce(function (e, t) {
                            var o =
                              void 0 === n[t]
                                ? t
                                : t + '="' + nr(n[t], r) + '"';
                            return e ? e + " " + o : o;
                          }, ""),
                        i = n.innerHTML || n.cssText || "",
                        a = -1 === Xt.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        o +
                        (a ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, r);
                },
              };
          }
        },
        kr = function (e) {
          var t = e.baseTag,
            r = e.bodyAttributes,
            n = e.encode,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            s = e.noscriptTags,
            c = e.scriptTags,
            l = e.styleTags,
            u = e.title,
            f = void 0 === u ? "" : u,
            p = e.titleAttributes;
          return {
            base: Sr(Pt.BASE, t, n),
            bodyAttributes: Sr(Tt, r, n),
            htmlAttributes: Sr(Ot, o, n),
            link: Sr(Pt.LINK, i, n),
            meta: Sr(Pt.META, a, n),
            noscript: Sr(Pt.NOSCRIPT, s, n),
            script: Sr(Pt.SCRIPT, c, n),
            style: Sr(Pt.STYLE, l, n),
            title: Sr(Pt.TITLE, { title: f, titleAttributes: p }, n),
          };
        },
        Er = Ct()(
          function (e) {
            return {
              baseTag: sr([Nt, Bt], e),
              bodyAttributes: ar(Tt, e),
              defer: lr(e, Yt),
              encode: lr(e, Ut),
              htmlAttributes: ar(Ot, e),
              linkTags: cr(Pt.LINK, [$t, Nt], e),
              metaTags: cr(Pt.META, [Mt, jt, Rt, Dt, Lt], e),
              noscriptTags: cr(Pt.NOSCRIPT, [zt], e),
              onChangeClientState: ir(e),
              scriptTags: cr(Pt.SCRIPT, [Ft, zt], e),
              styleTags: cr(Pt.STYLE, [_t], e),
              title: or(e),
              titleAttributes: ar(It, e),
            };
          },
          function (e) {
            mr && dr(mr),
              e.defer
                ? (mr = pr(function () {
                    gr(e, function () {
                      mr = null;
                    });
                  }))
                : (gr(e), (mr = null));
          },
          kr
        )(function () {
          return null;
        }),
        Ar =
          ((et = Er),
          (rt = tt = (function (e) {
            function t() {
              return Jt(this, t), rr(this, e.apply(this, arguments));
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.prototype.shouldComponentUpdate = function (e) {
                return !kt()(this.props, e);
              }),
              (t.prototype.mapNestedChildrenToProps = function (e, t) {
                if (!t) return null;
                switch (e.type) {
                  case Pt.SCRIPT:
                  case Pt.NOSCRIPT:
                    return { innerHTML: t };
                  case Pt.STYLE:
                    return { cssText: t };
                }
                throw new Error(
                  "<" +
                    e.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (t.prototype.flattenArrayTypeChildren = function (e) {
                var t,
                  r = e.child,
                  n = e.arrayTypeChildren,
                  o = e.newChildProps,
                  i = e.nestedChildren;
                return er(
                  {},
                  n,
                  (((t = {})[r.type] = [].concat(n[r.type] || [], [
                    er({}, o, this.mapNestedChildrenToProps(r, i)),
                  ])),
                  t)
                );
              }),
              (t.prototype.mapObjectTypeChildren = function (e) {
                var t,
                  r,
                  n = e.child,
                  o = e.newProps,
                  i = e.newChildProps,
                  a = e.nestedChildren;
                switch (n.type) {
                  case Pt.TITLE:
                    return er(
                      {},
                      o,
                      (((t = {})[n.type] = a),
                      (t.titleAttributes = er({}, i)),
                      t)
                    );
                  case Pt.BODY:
                    return er({}, o, { bodyAttributes: er({}, i) });
                  case Pt.HTML:
                    return er({}, o, { htmlAttributes: er({}, i) });
                }
                return er({}, o, (((r = {})[n.type] = er({}, i)), r));
              }),
              (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                var r = er({}, t);
                return (
                  Object.keys(e).forEach(function (t) {
                    var n;
                    r = er({}, r, (((n = {})[t] = e[t]), n));
                  }),
                  r
                );
              }),
              (t.prototype.warnOnInvalidChildren = function (e, t) {
                return !0;
              }),
              (t.prototype.mapChildrenToProps = function (e, t) {
                var r = this,
                  o = {};
                return (
                  n.Children.forEach(e, function (e) {
                    if (e && e.props) {
                      var n = e.props,
                        i = n.children,
                        a = (function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          return Object.keys(e).reduce(function (t, r) {
                            return (t[Vt[r] || r] = e[r]), t;
                          }, t);
                        })(tr(n, ["children"]));
                      switch ((r.warnOnInvalidChildren(e, i), e.type)) {
                        case Pt.LINK:
                        case Pt.META:
                        case Pt.NOSCRIPT:
                        case Pt.SCRIPT:
                        case Pt.STYLE:
                          o = r.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: o,
                            newChildProps: a,
                            nestedChildren: i,
                          });
                          break;
                        default:
                          t = r.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: a,
                            nestedChildren: i,
                          });
                      }
                    }
                  }),
                  (t = this.mapArrayTypeChildrenToProps(o, t))
                );
              }),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.children,
                  r = tr(e, ["children"]),
                  o = er({}, r);
                return (
                  t && (o = this.mapChildrenToProps(t, o)),
                  n.createElement(et, o)
                );
              }),
              Qt(t, null, [
                {
                  key: "canUseDOM",
                  set: function (e) {
                    et.canUseDOM = e;
                  },
                },
              ]),
              t
            );
          })(n.Component)),
          (tt.propTypes = {
            base: Fe().object,
            bodyAttributes: Fe().object,
            children: Fe().oneOfType([Fe().arrayOf(Fe().node), Fe().node]),
            defaultTitle: Fe().string,
            defer: Fe().bool,
            encodeSpecialCharacters: Fe().bool,
            htmlAttributes: Fe().object,
            link: Fe().arrayOf(Fe().object),
            meta: Fe().arrayOf(Fe().object),
            noscript: Fe().arrayOf(Fe().object),
            onChangeClientState: Fe().func,
            script: Fe().arrayOf(Fe().object),
            style: Fe().arrayOf(Fe().object),
            title: Fe().string,
            titleAttributes: Fe().object,
            titleTemplate: Fe().string,
          }),
          (tt.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (tt.peek = et.peek),
          (tt.rewind = function () {
            var e = et.rewind();
            return (
              e ||
                (e = kr({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            );
          }),
          rt);
      Ar.renderStatic = Ar.rewind;
      var Tr = {
          light: {
            name: "light",
            primaryColor: "#d61a3c",
            contentDropColor: "#fff",
            headingColor: "#d61a3c",
            borderColor: "#fff",
            textColor: "#191717",
            bannerText: "#e3e3e3",
          },
          dark: {
            name: "dark",
            primaryColor: "#001c42",
            contentDropColor: "#001c42",
            headingColor: "#cb3b52",
            borderColor: "#cb3b52",
            textColor: "#9e9e9e",
            bannerText: "#cb3b52",
          },
        },
        Or = _e.div.withConfig({
          displayName: "footer__Container",
          componentId: "sc-1aict1p-0",
        })(
          [
            "height:100px;background:",
            ";margin-top:-50px;@media only screen and (max-width:480px){height:70px;margin-top:-20px;}",
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        Ir = function () {
          return n.createElement(Or, null);
        },
        Pr = _e.div.withConfig({
          displayName: "pages__Container",
          componentId: "ifild7-0",
        })(
          ['font-family:"Poppins","Material Icons";background:', ";"],
          function (e) {
            return "light" === e.theme.name ? "#e3e3e3" : "#282c35";
          }
        );
      function jr() {
        var e = (0, n.useState)("light"),
          t = e[0],
          r = e[1];
        return n.createElement(
          Oe,
          { theme: Tr[t] },
          n.createElement(
            Ar,
            null,
            n.createElement("meta", { charSet: "utf-8" }),
            n.createElement("title", null, "Ashish Ajimal"),
            n.createElement("link", {
              rel: "canonical",
              href: "https://ajima14.github.io",
            })
          ),
          n.createElement(
            Pr,
            null,
            n.createElement(wt, { theme: t, changeTheme: r }),
            n.createElement(Me, { theme: t }),
            n.createElement(ht, { theme: t }),
            n.createElement(Ir, null)
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-886cea6954f2b30a5c43.js.map
