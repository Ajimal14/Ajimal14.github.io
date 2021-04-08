/*! For license information please see component---src-pages-index-js-1e593a11ead1bb9a95d5.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world =
  self.webpackChunkgatsby_starter_hello_world || []).push([
  [678],
  {
    5706: function (e, t, r) {
      "use strict";
      var n = r(8812),
        i = {
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
        o = {
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
        return n.isMemo(e) ? a : s[e.$$typeof] || i;
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
        p = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var i = f(r);
            i && i !== h && e(t, i, n);
          }
          var a = u(r);
          p && (a = a.concat(p(r)));
          for (var s = c(t), m = c(r), g = 0; g < a.length; ++g) {
            var y = a[g];
            if (!(o[y] || (n && n[y]) || (m && m[y]) || (s && s[y]))) {
              var b = d(r, y);
              try {
                l(t, y, b);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    165: function (e, t) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case p:
                case o:
                case s:
                case a:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case d:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function k(e) {
        return w(e) === p;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = f),
        (t.isAsyncMode = function (e) {
          return k(e) || w(e) === u;
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return w(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === d;
        }),
        (t.isFragment = function (e) {
          return w(e) === o;
        }),
        (t.isLazy = function (e) {
          return w(e) === g;
        }),
        (t.isMemo = function (e) {
          return w(e) === m;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === p ||
            e === s ||
            e === a ||
            e === f ||
            e === h ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === d ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = w);
    },
    8812: function (e, t, r) {
      "use strict";
      e.exports = r(165);
    },
    6872: function (e) {
      e.exports = function (e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < o.length;
          c++
        ) {
          var l = o[c];
          if (!s(l)) return !1;
          var u = e[l],
            p = t[l];
          if (
            !1 === (i = r ? r.call(n, u, p, l) : void 0) ||
            (void 0 === i && u !== p)
          )
            return !1;
        }
        return !0;
      };
    },
    1841: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return xt;
          },
        });
      var n = r(7294),
        i = r(8812),
        o = r(6872),
        a = r.n(o);
      var s = function (e) {
          function t(e, n, c, l, d) {
            for (
              var f,
                h,
                m,
                g,
                x,
                k = 0,
                C = 0,
                S = 0,
                A = 0,
                E = 0,
                N = 0,
                R = (m = f = 0),
                $ = 0,
                D = 0,
                M = 0,
                F = 0,
                L = c.length,
                B = L - 1,
                G = "",
                H = "",
                W = "",
                U = "";
              $ < L;

            ) {
              if (
                ((h = c.charCodeAt($)),
                $ === B &&
                  0 !== C + A + S + k &&
                  (0 !== C && (h = 47 === C ? 10 : 47),
                  (A = S = k = 0),
                  L++,
                  B++),
                0 === C + A + S + k)
              ) {
                if (
                  $ === B &&
                  (0 < D && (G = G.replace(p, "")), 0 < G.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      G += c.charAt($);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      f = (G = G.trim()).charCodeAt(0), m = 1, F = ++$;
                      $ < L;

                    ) {
                      switch ((h = c.charCodeAt($))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((h = c.charCodeAt($ + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (R = $ + 1; R < B; ++R)
                                  switch (c.charCodeAt(R)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === c.charCodeAt(R - 1) &&
                                        $ + 2 !== R
                                      ) {
                                        $ = R + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        $ = R + 1;
                                        break e;
                                      }
                                  }
                                $ = R;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; $++ < B && c.charCodeAt($) !== h; );
                      }
                      if (0 === m) break;
                      $++;
                    }
                    switch (
                      ((m = c.substring(F, $)),
                      0 === f &&
                        (f = (G = G.replace(u, "").trim()).charCodeAt(0)),
                      f)
                    ) {
                      case 64:
                        switch (
                          (0 < D && (G = G.replace(p, "")),
                          (h = G.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            D = n;
                            break;
                          default:
                            D = j;
                        }
                        if (
                          ((F = (m = t(n, D, m, h, d + 1)).length),
                          0 < T &&
                            ((x = s(
                              3,
                              m,
                              (D = r(j, G, M)),
                              n,
                              I,
                              O,
                              F,
                              h,
                              d,
                              l
                            )),
                            (G = D.join("")),
                            void 0 !== x &&
                              0 === (F = (m = x.trim()).length) &&
                              ((h = 0), (m = ""))),
                          0 < F)
                        )
                          switch (h) {
                            case 115:
                              G = G.replace(w, a);
                            case 100:
                            case 109:
                            case 45:
                              m = G + "{" + m + "}";
                              break;
                            case 107:
                              (m = (G = G.replace(y, "$1 $2")) + "{" + m + "}"),
                                (m =
                                  1 === P || (2 === P && o("@" + m, 3))
                                    ? "@-webkit-" + m + "@" + m
                                    : "@" + m);
                              break;
                            default:
                              (m = G + m), 112 === l && ((H += m), (m = ""));
                          }
                        else m = "";
                        break;
                      default:
                        m = t(n, r(n, G, M), m, l, d + 1);
                    }
                    (W += m),
                      (m = M = D = R = f = 0),
                      (G = ""),
                      (h = c.charCodeAt(++$));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (F = (G = (0 < D ? G.replace(p, "") : G).trim()).length)
                    )
                      switch (
                        (0 === R &&
                          ((f = G.charCodeAt(0)),
                          45 === f || (96 < f && 123 > f)) &&
                          (F = (G = G.replace(" ", ":")).length),
                        0 < T &&
                          void 0 !==
                            (x = s(1, G, n, e, I, O, H.length, l, d, l)) &&
                          0 === (F = (G = x.trim()).length) &&
                          (G = "\0\0"),
                        (f = G.charCodeAt(0)),
                        (h = G.charCodeAt(1)),
                        f)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            U += G + c.charAt($);
                            break;
                          }
                        default:
                          58 !== G.charCodeAt(F - 1) &&
                            (H += i(G, f, h, G.charCodeAt(2)));
                      }
                    (M = D = R = f = 0), (G = ""), (h = c.charCodeAt(++$));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === C
                    ? (C = 0)
                    : 0 === 1 + f &&
                      107 !== l &&
                      0 < G.length &&
                      ((D = 1), (G += "\0")),
                    0 < T * z && s(0, G, n, e, I, O, H.length, l, d, l),
                    (O = 1),
                    I++;
                  break;
                case 59:
                case 125:
                  if (0 === C + A + S + k) {
                    O++;
                    break;
                  }
                default:
                  switch ((O++, (g = c.charAt($)), h)) {
                    case 9:
                    case 32:
                      if (0 === A + k + C)
                        switch (E) {
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
                      0 === A + C + k && ((D = M = 1), (g = "\f" + g));
                      break;
                    case 108:
                      if (0 === A + C + k + _ && 0 < R)
                        switch ($ - R) {
                          case 2:
                            112 === E && 58 === c.charCodeAt($ - 3) && (_ = E);
                          case 8:
                            111 === N && (_ = N);
                        }
                      break;
                    case 58:
                      0 === A + C + k && (R = $);
                      break;
                    case 44:
                      0 === C + S + A + k && ((D = 1), (g += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === C && (A = A === h ? 0 : 0 === A ? h : A);
                      break;
                    case 91:
                      0 === A + C + S && k++;
                      break;
                    case 93:
                      0 === A + C + S && k--;
                      break;
                    case 41:
                      0 === A + C + k && S--;
                      break;
                    case 40:
                      if (0 === A + C + k) {
                        if (0 === f)
                          switch (2 * E + 3 * N) {
                            case 533:
                              break;
                            default:
                              f = 1;
                          }
                        S++;
                      }
                      break;
                    case 64:
                      0 === C + S + A + k + R + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < A + k + S))
                        switch (C) {
                          case 0:
                            switch (2 * h + 3 * c.charCodeAt($ + 1)) {
                              case 235:
                                C = 47;
                                break;
                              case 220:
                                (F = $), (C = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === E &&
                              F + 2 !== $ &&
                              (33 === c.charCodeAt(F + 2) &&
                                (H += c.substring(F, $ + 1)),
                              (g = ""),
                              (C = 0));
                        }
                  }
                  0 === C && (G += g);
              }
              (N = E), (E = h), $++;
            }
            if (0 < (F = H.length)) {
              if (
                ((D = n),
                0 < T &&
                  void 0 !== (x = s(2, H, D, e, I, O, F, l, d, l)) &&
                  0 === (H = x).length)
              )
                return U + H + W;
              if (((H = D.join(",") + "{" + H + "}"), 0 != P * _)) {
                switch ((2 !== P || o(H, 2) || (_ = 0), _)) {
                  case 111:
                    H = H.replace(v, ":-moz-$1") + H;
                    break;
                  case 112:
                    H =
                      H.replace(b, "::-webkit-input-$1") +
                      H.replace(b, "::-moz-$1") +
                      H.replace(b, ":-ms-input-$1") +
                      H;
                }
                _ = 0;
              }
            }
            return U + H + W;
          }
          function r(e, t, r) {
            var i = t.trim().split(m);
            t = i;
            var o = i.length,
              a = e.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === a ? "" : e[0] + " "; s < o; ++s)
                  t[s] = n(e, t[s], r).trim();
                break;
              default:
                var c = (s = 0);
                for (t = []; s < o; ++s)
                  for (var l = 0; l < a; ++l)
                    t[c++] = n(e[l] + " ", i[s], r).trim();
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
          function i(e, t, r, n) {
            var a = e + ";",
              s = 2 * t + 3 * r + 4 * n;
            if (944 === s) {
              e = a.indexOf(":", 9) + 1;
              var c = a.substring(e, a.length - 1).trim();
              return (
                (c = a.substring(0, e).trim() + c + ";"),
                1 === P || (2 === P && o(c, 1)) ? "-webkit-" + c + c : c
              );
            }
            if (0 === P || (2 === P && !o(a, 1))) return a;
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
                  return a.replace(E, "$1-webkit-$2") + a;
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
                return f.test(a)
                  ? a.replace(d, ":-webkit-") + a.replace(d, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((t = (c = a.substring(13).trim()).indexOf("-") + 1),
                  c.charCodeAt(0) + c.charCodeAt(t))
                ) {
                  case 226:
                    c = a.replace(x, "tb");
                    break;
                  case 232:
                    c = a.replace(x, "tb-rl");
                    break;
                  case 220:
                    c = a.replace(x, "lr");
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
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(C, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(C, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === A.test(e))
                  return 115 ===
                    (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? i(
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
          function o(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
              n = e.substring(0, 3 !== t ? r : 10);
            return (
              (r = e.substring(r + 1, e.length - 1)),
              R(2 !== t ? n : n.replace(S, "$1"), r, t)
            );
          }
          function a(e, t) {
            var r = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";"
              ? r.replace(k, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function s(e, t, r, n, i, o, a, s, c, u) {
            for (var p, d = 0, f = t; d < T; ++d)
              switch ((p = N[d].call(l, e, f, r, n, i, o, a, s, c, u))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  f = p;
              }
            if (f !== t) return f;
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
            if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < T)) {
              var i = s(-1, r, n, n, I, O, 0, 0, 0, 0);
              void 0 !== i && "string" == typeof i && (r = i);
            }
            var o = t(j, n, r, 0, 0);
            return (
              0 < T &&
                void 0 !== (i = s(-2, o, n, n, I, O, o.length, 0, 0, 0)) &&
                (o = i),
              "",
              (_ = 0),
              (O = I = 1),
              o
            );
          }
          var u = /^\0+/g,
            p = /[\0\r\f]/g,
            d = /: */g,
            f = /zoo|gra/,
            h = /([,: ])(transform)/g,
            m = /,\r+?/g,
            g = /([\t\r\n ])*\f?&/g,
            y = /@(k\w+)\s*(\S*)\s*/,
            b = /::(place)/g,
            v = /:(read-only)/g,
            x = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            k = /([\s\S]*?);/g,
            C = /-self|flex-/g,
            S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            A = /stretch|:\s*\w+\-(?:conte|avail)/,
            E = /([^-])(image-set\()/,
            O = 1,
            I = 1,
            _ = 0,
            P = 1,
            j = [],
            N = [],
            T = 0,
            R = null,
            z = 0;
          return (
            (l.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  T = N.length = 0;
                  break;
                default:
                  if ("function" == typeof t) N[T++] = t;
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
        p = r(5706),
        d = r.n(p);
      function f() {
        return (f =
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
          for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
            r.push(t[n], e[n + 1]);
          return r;
        },
        m = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, i.typeOf)(e)
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
      function x(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var w =
          ("undefined" != typeof process &&
            ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
          "data-styled",
        k = "undefined" != typeof window && "HTMLElement" in window,
        C = Boolean(
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
      function S(e) {
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
      var A = (function () {
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
                for (var r = this.groupSizes, n = r.length, i = n; e >= i; )
                  (i <<= 1) < 0 && S(16, "" + e);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(r),
                  (this.length = i);
                for (var o = n; o < i; o++) this.groupSizes[o] = 0;
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
                for (var i = r; i < n; i++) this.tag.deleteRule(r);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  i = n + r,
                  o = n;
                o < i;
                o++
              )
                t += this.tag.getRule(o) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        E = new Map(),
        O = new Map(),
        I = 1,
        _ = function (e) {
          if (E.has(e)) return E.get(e);
          for (; O.has(I); ) I++;
          var t = I++;
          return E.set(e, t), O.set(t, e), t;
        },
        P = function (e) {
          return O.get(e);
        },
        j = function (e, t) {
          E.set(e, t), O.set(t, e);
        },
        N = "style[" + w + '][data-styled-version="5.2.3"]',
        T = new RegExp(
          "^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        R = function (e, t, r) {
          for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
            (n = i[o]) && e.registerName(t, n);
        },
        z = function (e, t) {
          for (
            var r = t.innerHTML.split("/*!sc*/\n"), n = [], i = 0, o = r.length;
            i < o;
            i++
          ) {
            var a = r[i].trim();
            if (a) {
              var s = a.match(T);
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
        $ = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        D = function (e) {
          var t = document.head,
            r = e || t,
            n = document.createElement("style"),
            i = (function (e) {
              for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                var n = t[r];
                if (n && 1 === n.nodeType && n.hasAttribute(w)) return n;
              }
            })(r),
            o = void 0 !== i ? i.nextSibling : null;
          n.setAttribute(w, "active"),
            n.setAttribute("data-styled-version", "5.2.3");
          var a = $();
          return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
        },
        M = (function () {
          function e(e) {
            var t = (this.element = D(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, n = t.length;
                  r < n;
                  r++
                ) {
                  var i = t[r];
                  if (i.ownerNode === e) return i;
                }
                S(17);
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
        F = (function () {
          function e(e) {
            var t = (this.element = D(e));
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
        L = (function () {
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
        B = k,
        G = { isServer: !k, useCSSOMInjection: !C },
        H = (function () {
          function e(e, t, r) {
            void 0 === e && (e = y),
              void 0 === t && (t = {}),
              (this.options = f({}, G, {}, e)),
              (this.gs = t),
              (this.names = new Map(r)),
              !this.options.isServer &&
                k &&
                B &&
                ((B = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(N), r = 0, n = t.length;
                    r < n;
                    r++
                  ) {
                    var i = t[r];
                    i &&
                      "active" !== i.getAttribute(w) &&
                      (z(e, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return _(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  f({}, this.options, {}, t),
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
                  (i = t.target),
                  (e = r ? new L(i) : n ? new M(i) : new F(i)),
                  new A(e)))
              );
              var e, t, r, n, i;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((_(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (t.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(_(e), r);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(_(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.getTag(), r = t.length, n = "", i = 0;
                  i < r;
                  i++
                ) {
                  var o = P(i);
                  if (void 0 !== o) {
                    var a = e.names.get(o),
                      s = t.getGroup(i);
                    if (void 0 !== a && 0 !== s.length) {
                      var c = w + ".g" + i + '[id="' + o + '"]',
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
        W = /(a)(d)/gi,
        U = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Y(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = U(t % 52) + r;
        return (U(t % 52) + r).replace(W, "$1-$2");
      }
      var q = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        V = function (e) {
          return q(5381, e);
        };
      function X(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (b(r) && !x(r)) return !1;
        }
        return !0;
      }
      var Z = V("5.2.3"),
        J = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && X(e)),
              (this.componentId = t),
              (this.baseHash = q(Z, t)),
              (this.baseStyle = r),
              H.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var n = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                this.isStatic && !r.hash)
              )
                if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = me(this.rules, e, t, r).join(""),
                    a = Y(q(this.baseHash, o.length) >>> 0);
                  if (!t.hasNameForId(n, a)) {
                    var s = r(o, "." + a, void 0, n);
                    t.insertRules(n, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              else {
                for (
                  var c = this.rules.length,
                    l = q(this.baseHash, r.hash),
                    u = "",
                    p = 0;
                  p < c;
                  p++
                ) {
                  var d = this.rules[p];
                  if ("string" == typeof d) u += d;
                  else if (d) {
                    var f = me(d, e, t, r),
                      h = Array.isArray(f) ? f.join("") : f;
                    (l = q(l, h + p)), (u += h);
                  }
                }
                if (u) {
                  var m = Y(l >>> 0);
                  if (!t.hasNameForId(n, m)) {
                    var g = r(u, "." + m, void 0, n);
                    t.insertRules(n, m, g);
                  }
                  i.push(m);
                }
              }
              return i.join(" ");
            }),
            e
          );
        })(),
        K = /^\s*\/\/.*$/gm,
        Q = [":", "[", ".", "#"];
      function ee(e) {
        var t,
          r,
          n,
          i,
          o = void 0 === e ? y : e,
          a = o.options,
          c = void 0 === a ? y : a,
          l = o.plugins,
          u = void 0 === l ? g : l,
          p = new s(c),
          d = [],
          f = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (r, n, i, o, a, s, c, l, u, p) {
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
                      return e(i[0] + n), "";
                    default:
                      return n + (0 === p ? "/*|*/" : "");
                  }
                case -2:
                  n.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            d.push(e);
          }),
          h = function (e, n, o) {
            return (0 === n && -1 !== Q.indexOf(o[r.length])) || o.match(i)
              ? e
              : "." + t;
          };
        function m(e, o, a, s) {
          void 0 === s && (s = "&");
          var c = e.replace(K, ""),
            l = o && a ? a + " " + o + " { " + c + " }" : c;
          return (
            (t = s),
            (r = o),
            (n = new RegExp("\\" + r + "\\b", "g")),
            (i = new RegExp("(\\" + r + "\\b){2,}")),
            p(a || !o ? "" : o, l)
          );
        }
        return (
          p.use(
            [].concat(u, [
              function (e, t, i) {
                2 === e &&
                  i.length &&
                  i[0].lastIndexOf(r) > 0 &&
                  (i[0] = i[0].replace(n, h));
              },
              f,
              function (e) {
                if (-2 === e) {
                  var t = d;
                  return (d = []), t;
                }
              },
            ])
          ),
          (m.hash = u.length
            ? u
                .reduce(function (e, t) {
                  return t.name || S(15), q(e, t.name);
                }, 5381)
                .toString()
            : ""),
          m
        );
      }
      var te = n.createContext(),
        re = (te.Consumer, n.createContext()),
        ne = (re.Consumer, new H()),
        ie = ee();
      function oe() {
        return (0, n.useContext)(te) || ne;
      }
      function ae() {
        return (0, n.useContext)(re) || ie;
      }
      function se(e) {
        var t = (0, n.useState)(e.stylisPlugins),
          r = t[0],
          i = t[1],
          o = oe(),
          s = (0, n.useMemo)(
            function () {
              var t = o;
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
              a()(r, e.stylisPlugins) || i(e.stylisPlugins);
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
              void 0 === t && (t = ie);
              var n = r.name + t.hash;
              e.hasNameForId(r.id, n) ||
                e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
            }),
              (this.toString = function () {
                return S(12, String(r.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = ie), this.name + e.hash;
            }),
            e
          );
        })(),
        le = /([A-Z])/,
        ue = /([A-Z])/g,
        pe = /^ms-/,
        de = function (e) {
          return "-" + e.toLowerCase();
        };
      function fe(e) {
        return le.test(e) ? e.replace(ue, de).replace(pe, "-ms-") : e;
      }
      var he = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function me(e, t, r, n) {
        if (Array.isArray(e)) {
          for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
            "" !== (i = me(e[a], t, r, n)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return he(e)
          ? ""
          : x(e)
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
                i,
                o = [];
              for (var a in t)
                t.hasOwnProperty(a) &&
                  !he(t[a]) &&
                  (m(t[a])
                    ? o.push.apply(o, e(t[a], a))
                    : b(t[a])
                    ? o.push(fe(a) + ":", t[a], ";")
                    : o.push(
                        fe(a) +
                          ": " +
                          ((n = a),
                          (null == (i = t[a]) ||
                          "boolean" == typeof i ||
                          "" === i
                            ? ""
                            : "number" != typeof i || 0 === i || n in c
                            ? String(i).trim()
                            : i + "px") + ";")
                      ));
              return r ? [r + " {"].concat(o, ["}"]) : o;
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
      function xe(e) {
        return e.replace(be, "-").replace(ve, "");
      }
      var we = function (e) {
        return Y(V(e) >>> 0);
      };
      function ke(e) {
        return "string" == typeof e && !0;
      }
      var Ce = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        Se = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function Ae(e, t, r) {
        var n = e[r];
        Ce(t) && Ce(n) ? Ee(n, t) : (e[r] = t);
      }
      function Ee(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (var i = 0, o = r; i < o.length; i++) {
          var a = o[i];
          if (Ce(a)) for (var s in a) Se(s) && Ae(e, a[s], s);
        }
        return e;
      }
      var Oe = n.createContext();
      Oe.Consumer;
      function Ie(e) {
        var t = (0, n.useContext)(Oe),
          r = (0, n.useMemo)(
            function () {
              return (function (e, t) {
                return e
                  ? b(e)
                    ? e(t)
                    : Array.isArray(e) || "object" != typeof e
                    ? S(8)
                    : t
                    ? f({}, t, {}, e)
                    : e
                  : S(14);
              })(e.theme, t);
            },
            [e.theme, t]
          );
        return e.children
          ? n.createElement(Oe.Provider, { value: r }, e.children)
          : null;
      }
      var _e = {};
      function Pe(e, t, r) {
        var i = x(e),
          o = !ke(e),
          a = t.attrs,
          s = void 0 === a ? g : a,
          c = t.componentId,
          l =
            void 0 === c
              ? (function (e, t) {
                  var r = "string" != typeof e ? "sc" : xe(e);
                  _e[r] = (_e[r] || 0) + 1;
                  var n = r + "-" + we("5.2.3" + r + _e[r]);
                  return t ? t + "-" + n : n;
                })(t.displayName, t.parentComponentId)
              : c,
          p = t.displayName,
          h =
            void 0 === p
              ? (function (e) {
                  return ke(e) ? "styled." + e : "Styled(" + v(e) + ")";
                })(e)
              : p,
          m =
            t.displayName && t.componentId
              ? xe(t.displayName) + "-" + t.componentId
              : t.componentId || l,
          w =
            i && e.attrs
              ? Array.prototype.concat(e.attrs, s).filter(Boolean)
              : s,
          k = t.shouldForwardProp;
        i &&
          e.shouldForwardProp &&
          (k = t.shouldForwardProp
            ? function (r, n) {
                return e.shouldForwardProp(r, n) && t.shouldForwardProp(r, n);
              }
            : e.shouldForwardProp);
        var C,
          S = new J(r, m, i ? e.componentStyle : void 0),
          A = S.isStatic && 0 === s.length,
          E = function (e, t) {
            return (function (e, t, r, i) {
              var o = e.attrs,
                a = e.componentStyle,
                s = e.defaultProps,
                c = e.foldedComponentIds,
                l = e.shouldForwardProp,
                p = e.styledComponentId,
                d = e.target,
                h = (function (e, t, r) {
                  void 0 === e && (e = y);
                  var n = f({}, t, { theme: e }),
                    i = {};
                  return (
                    r.forEach(function (e) {
                      var t,
                        r,
                        o,
                        a = e;
                      for (t in (b(a) && (a = a(n)), a))
                        n[t] = i[t] =
                          "className" === t
                            ? ((r = i[t]),
                              (o = a[t]),
                              r && o ? r + " " + o : r || o)
                            : a[t];
                    }),
                    [n, i]
                  );
                })(ye(t, (0, n.useContext)(Oe), s) || y, t, o),
                m = h[0],
                g = h[1],
                v = (function (e, t, r, n) {
                  var i = oe(),
                    o = ae();
                  return t
                    ? e.generateAndInjectStyles(y, i, o)
                    : e.generateAndInjectStyles(r, i, o);
                })(a, i, m),
                x = r,
                w = g.$as || t.$as || g.as || t.as || d,
                k = ke(w),
                C = g !== t ? f({}, t, {}, g) : t,
                S = {};
              for (var A in C)
                "$" !== A[0] &&
                  "as" !== A &&
                  ("forwardedAs" === A
                    ? (S.as = C[A])
                    : (l ? l(A, u) : !k || u(A)) && (S[A] = C[A]));
              return (
                t.style &&
                  g.style !== t.style &&
                  (S.style = f({}, t.style, {}, g.style)),
                (S.className = Array.prototype
                  .concat(c, p, v !== p ? v : null, t.className, g.className)
                  .filter(Boolean)
                  .join(" ")),
                (S.ref = x),
                (0, n.createElement)(w, S)
              );
            })(C, e, t, A);
          };
        return (
          (E.displayName = h),
          ((C = n.forwardRef(E)).attrs = w),
          (C.componentStyle = S),
          (C.displayName = h),
          (C.shouldForwardProp = k),
          (C.foldedComponentIds = i
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : g),
          (C.styledComponentId = m),
          (C.target = i ? e.target : e),
          (C.withComponent = function (e) {
            var n = t.componentId,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(t, ["componentId"]),
              o = n && n + "-" + (ke(e) ? e : xe(v(e)));
            return Pe(e, f({}, i, { attrs: w, componentId: o }), r);
          }),
          Object.defineProperty(C, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = i ? Ee({}, e.defaultProps, t) : t;
            },
          }),
          (C.toString = function () {
            return "." + C.styledComponentId;
          }),
          o &&
            d()(C, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          C
        );
      }
      var je = function (e) {
        return (function e(t, r, n) {
          if ((void 0 === n && (n = y), !(0, i.isValidElementType)(r)))
            return S(1, String(r));
          var o = function () {
            return t(r, n, ge.apply(void 0, arguments));
          };
          return (
            (o.withConfig = function (i) {
              return e(t, r, f({}, n, {}, i));
            }),
            (o.attrs = function (i) {
              return e(
                t,
                r,
                f({}, n, {
                  attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
                })
              );
            }),
            o
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
            H.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        (t.createStyles = function (e, t, r, n) {
          var i = n(me(this.rules, t, r, n).join(""), ""),
            o = this.componentId + e;
          r.insertRules(o, o, i);
        }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, r, n) {
            e > 2 && H.registerId(this.componentId + e),
              this.removeStyles(e, r),
              this.createStyles(e, t, r, n);
          });
      })();
      !(function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString(),
              r = $();
            return (
              "<style " +
              [
                r && 'nonce="' + r + '"',
                w + '="true"',
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
              return e.sealed ? S(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var t;
              if (e.sealed) return S(2);
              var r =
                  (((t = {})[w] = ""),
                  (t["data-styled-version"] = "5.2.3"),
                  (t.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  t),
                i = $();
              return (
                i && (r.nonce = i),
                [n.createElement("style", f({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new H({ isServer: !0 })),
            (this.sealed = !1);
        }
        var t = e.prototype;
        (t.collectStyles = function (e) {
          return this.sealed
            ? S(2)
            : n.createElement(se, { sheet: this.instance }, e);
        }),
          (t.interleaveWithNodeStream = function (e) {
            return S(3);
          });
      })();
      var Ne = je,
        Te = Ne.div.withConfig({
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
        Re = Ne.img.withConfig({
          displayName: "banner__Mugshot",
          componentId: "sc-1tm8xqf-1",
        })([
          "height:250px;@media only screen and (max-width:480px){height:110px;}@media only screen and (max-width:375px){height:100px;}",
        ]),
        ze = Ne.div.withConfig({
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
        $e = Ne.div.withConfig({
          displayName: "banner__Wrapper",
          componentId: "sc-1tm8xqf-3",
        })([
          "margin:0 auto;max-width:800px;display:grid;grid-template-columns:1fr 2fr;-webkit-box-align:center;align-items:center;gap:40px;@media only screen and (max-width:480px){max-width:95%;gap:20px;margin-bottom:20px;}",
        ]),
        De = function (e) {
          var t = e.theme;
          return n.createElement(
            Te,
            null,
            n.createElement(
              $e,
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
        Me = r(4694),
        Fe = r(5697),
        Le = r.n(Fe);
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
      function Ge(e, t, r) {
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
      function He(e, t) {
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
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(Object(r), !0).forEach(function (t) {
                Ge(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : He(Object(r)).forEach(function (t) {
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
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function Ye(e) {
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
      function qe(e) {
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
              i = qe(t.slice(0, n)),
              o = t.slice(n + 1).trim();
            return (
              i.startsWith("webkit")
                ? (e[((r = i), r.charAt(0).toUpperCase() + r.slice(1))] = o)
                : (e[i] = o),
              e
            );
          }, {});
      }
      var Xe = !1;
      try {
        Xe = !0;
      } catch (wt) {}
      function Ze(e) {
        return Me.parse.icon
          ? Me.parse.icon(e)
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
      function Je(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? Ge({}, e, t)
          : {};
      }
      function Ke(e) {
        var t = e.forwardedRef,
          r = Ue(e, ["forwardedRef"]),
          n = r.icon,
          i = r.mask,
          o = r.symbol,
          a = r.className,
          s = r.title,
          c = r.titleId,
          l = Ze(n),
          u = Je(
            "classes",
            [].concat(
              Ye(
                (function (e) {
                  var t,
                    r = e.spin,
                    n = e.pulse,
                    i = e.fixedWidth,
                    o = e.inverse,
                    a = e.border,
                    s = e.listItem,
                    c = e.flip,
                    l = e.size,
                    u = e.rotation,
                    p = e.pull,
                    d =
                      (Ge(
                        (t = {
                          "fa-spin": r,
                          "fa-pulse": n,
                          "fa-fw": i,
                          "fa-inverse": o,
                          "fa-border": a,
                          "fa-li": s,
                          "fa-flip-horizontal":
                            "horizontal" === c || "both" === c,
                          "fa-flip-vertical": "vertical" === c || "both" === c,
                        }),
                        "fa-".concat(l),
                        null != l
                      ),
                      Ge(t, "fa-rotate-".concat(u), null != u && 0 !== u),
                      Ge(t, "fa-pull-".concat(p), null != p),
                      Ge(t, "fa-swap-opacity", e.swapOpacity),
                      t);
                  return Object.keys(d)
                    .map(function (e) {
                      return d[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(r)
              ),
              Ye(a.split(" "))
            )
          ),
          p = Je(
            "transform",
            "string" == typeof r.transform
              ? Me.parse.transform(r.transform)
              : r.transform
          ),
          d = Je("mask", Ze(i)),
          f = (0, Me.icon)(
            l,
            We({}, u, {}, p, {}, d, { symbol: o, title: s, titleId: c })
          );
        if (!f)
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
        var h = f.abstract,
          m = { ref: t };
        return (
          Object.keys(r).forEach(function (e) {
            Ke.defaultProps.hasOwnProperty(e) || (m[e] = r[e]);
          }),
          Qe(h[0], m)
        );
      }
      (Ke.displayName = "FontAwesomeIcon"),
        (Ke.propTypes = {
          border: Le().bool,
          className: Le().string,
          mask: Le().oneOfType([Le().object, Le().array, Le().string]),
          fixedWidth: Le().bool,
          inverse: Le().bool,
          flip: Le().oneOf(["horizontal", "vertical", "both"]),
          icon: Le().oneOfType([Le().object, Le().array, Le().string]),
          listItem: Le().bool,
          pull: Le().oneOf(["right", "left"]),
          pulse: Le().bool,
          rotation: Le().oneOf([0, 90, 180, 270]),
          size: Le().oneOf([
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
          spin: Le().bool,
          symbol: Le().oneOfType([Le().bool, Le().string]),
          title: Le().string,
          transform: Le().oneOfType([Le().string, Le().object]),
          swapOpacity: Le().bool,
        }),
        (Ke.defaultProps = {
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
      var Qe = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" == typeof r) return r;
          var i = (r.children || []).map(function (r) {
              return e(t, r);
            }),
            o = Object.keys(r.attributes || {}).reduce(
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
                      : (e.attrs[qe(t)] = n);
                }
                return e;
              },
              { attrs: {} }
            ),
            a = n.style,
            s = void 0 === a ? {} : a,
            c = Ue(n, ["style"]);
          return (
            (o.attrs.style = We({}, o.attrs.style, {}, s)),
            t.apply(void 0, [r.tag, We({}, o.attrs, {}, c)].concat(Ye(i)))
          );
        }.bind(null, n.createElement),
        et = {
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
        tt = r(7190),
        rt = r(8014),
        nt = Ne.div.withConfig({
          displayName: "content__Container",
          componentId: "sc-1piyzg0-0",
        })(
          [
            "max-width:900px;min-height:500px;position:relative;display:flex;margin:0 auto;hr{border:1px solid ",
            ";height:1px;width:70px;margin:15px 0;border-radius:20px;}@media only screen and (max-width:480px){max-width:95%;min-height:200px;}",
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        it = Ne.div.withConfig({
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
        ot = Ne.div.withConfig({
          displayName: "content__Heading",
          componentId: "sc-1piyzg0-2",
        })(
          [
            "color:",
            ';font-family:"Bebas Neue";font-size:35px;display:flex;justify-content:space-between;margin:15px 0px;@media only screen and (max-width:480px){font-size:25px;}',
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        at = Ne.div.withConfig({
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
        st = Ne.div.withConfig({
          displayName: "content__Text",
          componentId: "sc-1piyzg0-4",
        })(
          [
            'font-size:16px;line-height:1.5;font-family:"Raleway";svg{margin:0px 5px;color:',
            ";}@media only screen and (max-width:480px){font-size:12px;}",
          ],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        ct = Ne.div.withConfig({
          displayName: "content__Spacer",
          componentId: "sc-1piyzg0-5",
        })(["margin-top:40px;"]),
        lt = Ne.div.withConfig({
          displayName: "content__SubHeading",
          componentId: "sc-1piyzg0-6",
        })(
          ["color:", ';font-family:"Poppins";font-size:20px;margin:10px auto;'],
          function (e) {
            return e.theme.headingColor;
          }
        ),
        ut = function (e) {
          e.theme;
          return n.createElement(
            nt,
            null,
            n.createElement(
              it,
              null,
              n.createElement(
                ot,
                null,
                n.createElement("div", null, "Full Stack Dev."),
                n.createElement(
                  at,
                  null,
                  n.createElement(Ke, { icon: tt.wn1 }),
                  n.createElement(Ke, { icon: tt.DTC }),
                  n.createElement(Ke, { icon: tt.TV_ }),
                  n.createElement(Ke, { icon: tt.GJX }),
                  n.createElement(Ke, { icon: tt.Gu1 }),
                  n.createElement(Ke, { icon: rt.Z__ })
                )
              ),
              n.createElement(
                st,
                null,
                "I have more than 3 Years of experience in Frontend Development with React Ecosystem.",
                n.createElement("br", null),
                "I write Full Stack Applications and sometimes Mobile Apps with React Native.",
                n.createElement("hr", null),
                "I have good expertise working with organisations and early-stage startups varying from Security, Logistics, E-Commerce, and Fantasy Sports."
              ),
              n.createElement(ct, null),
              n.createElement(ot, null, "Timeline"),
              n.createElement(
                st,
                null,
                n.createElement(
                  "div",
                  null,
                  n.createElement(lt, null, "Fantasy"),
                  n.createElement(
                    "div",
                    null,
                    "A Promising Fantasy Sports startup disrupted the space with Advanced Fantasy sports experience.",
                    n.createElement("br", null),
                    "As the fantasy space grew in India we launched multiple sports with exciting features.",
                    n.createElement("br", null),
                    "Unluckily, our startup ran out of funds too soon."
                  )
                ),
                n.createElement(
                  "div",
                  null,
                  n.createElement(lt, null, "Laundry"),
                  n.createElement(
                    "div",
                    null,
                    "Early Laundry startup with pick and drop services for Gurgaon.",
                    n.createElement("br", null),
                    "We suspended operations after few months due to a lack of storage and logistic power."
                  )
                ),
                n.createElement(lt, null, "E Commerce"),
                n.createElement(
                  "div",
                  null,
                  "a midsized e-commerce company, producing and selling health supplements in India.",
                  n.createElement("br", null),
                  "India's biggest online marketplace supplements and health goods."
                )
              ),
              n.createElement(ct, null),
              n.createElement(ot, null, "Four-Four-Two."),
              n.createElement(
                st,
                null,
                n.createElement(Ke, { icon: rt.bgy }),
                "I love to watch football on weekends worsening my sleeping pattern with a pint of wheat beer and a cold slice of pizza in my hand.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Ke, { icon: rt.m6i }),
                " I support Paris Saint Germain.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Ke, { icon: rt.O_4 }),
                " I've played football in the past for Local Clubs in Delhi and 9-aside National Tournament.",
                n.createElement("br", null),
                n.createElement("br", null),
                n.createElement(Ke, { icon: rt.l9D }),
                " I enjoy playing FIFA in my spare time."
              )
            )
          );
        },
        pt = Ne.div.withConfig({
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
        dt = function (e) {
          var t = e.theme,
            r = e.changeTheme;
          return n.createElement(
            pt,
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
        ft = Ne.header.withConfig({
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
        ht = Ne.img.withConfig({
          displayName: "header__Logo",
          componentId: "sc-11yw5o5-1",
        })([
          "position:absolute;overflow:hidden;display:inline-block;width:100px;height:100px;top:10px;z-index:100000;box-shadow:rgb(0 0 0 / 16%) 0px 3px 6px,rgb(0 0 0 / 23%) 0px 3px 6px;@media only screen and (max-width:480px){width:60px;height:60px;}",
        ]),
        mt = Ne.div.withConfig({
          displayName: "header__Links",
          componentId: "sc-11yw5o5-2",
        })([
          "display:grid;grid-auto-flow:column;gap:25px;align-items:center;*{color:#fff;}",
        ]),
        gt = function (e) {
          var t = e.theme,
            r = e.changeTheme;
          return n.createElement(
            ft,
            null,
            n.createElement(
              "div",
              null,
              n.createElement(ht, { src: "/" + t + "-logo.png" })
            ),
            n.createElement(
              mt,
              { className: "navlinks" },
              n.createElement(dt, { theme: t, changeTheme: r })
            )
          );
        },
        yt = Ne.div.withConfig({
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
        bt = function () {
          return n.createElement(yt, null);
        },
        vt = Ne.div.withConfig({
          displayName: "pages__Container",
          componentId: "ifild7-0",
        })(
          ['font-family:"Poppins","Material Icons";background:', ";"],
          function (e) {
            return "light" === e.theme.name ? "#e3e3e3" : "#282c35";
          }
        );
      function xt() {
        var e = (0, n.useState)("light"),
          t = e[0],
          r = e[1];
        return n.createElement(
          Ie,
          { theme: et[t] },
          n.createElement(
            vt,
            null,
            n.createElement(gt, { theme: t, changeTheme: r }),
            n.createElement(De, { theme: t }),
            n.createElement(ut, { theme: t }),
            n.createElement(bt, null)
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-1e593a11ead1bb9a95d5.js.map
