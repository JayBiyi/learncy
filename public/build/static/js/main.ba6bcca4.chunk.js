(this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || []).push([
  [0],
  {
    25: function (t, e, n) {},
    26: function (t, e, n) {},
    37: function (t, e) {},
    38: function (t, e) {},
    39: function (t, e) {},
    40: function (t, e, n) {
      "use strict";
      n.r(e);
      var c,
        o,
        s,
        i,
        a,
        r = n(15),
        l = n.n(r),
        d = (n(25), n(1)),
        j = (n(26), n(6)),
        b = n(5),
        x = n(3),
        u = n(19),
        h = n(4),
        g = n(0),
        O = b.a.div(
          c ||
            (c = Object(j.a)([
              "\n  display: flex;\nbox-sizing: border-box;\n  flex-direction: column;\n  justify-content:center;\n  align-items: center;\n  width:100%:\n  height: 100%;\n",
            ]))
        ),
        m = function () {
          return Object(g.jsxs)(O, {
            children: [
              Object(g.jsx)(x.a, { icon: h.b, className: "tool tool-glide" }),
              Object(g.jsx)("div", {
                className: "container",
                children: Object(g.jsx)("div", {
                  className: "bar-container",
                  children: Object(g.jsx)("div", {
                    className: "bar",
                    id: "bar",
                  }),
                }),
              }),
            ],
          });
        },
        f = b.a.div(
          o ||
            (o = Object(j.a)([
              "\n  box-sizing: border-box;\n  background-color: rgb(20, 20, 20);\n  border-radius: 10px;\n  display: flex;\n  flex-style: space-between;\n  z-index: 3;\n",
            ]))
        ),
        w = function (t) {
          return (
            console.log(t),
            Object(g.jsxs)("ul", {
              className: "more",
              children: [
                Object(g.jsx)("li", {
                  children: Object(g.jsx)(p, {
                    children: Object(g.jsx)(x.a, { icon: h.f, className: "" }),
                  }),
                }),
                Object(g.jsx)("li", {
                  children: Object(g.jsx)(p, {
                    children: Object(g.jsx)(x.a, { icon: h.f, className: "" }),
                  }),
                }),
              ],
            })
          );
        },
        p = b.a.div(
          s ||
            (s = Object(j.a)([
              "\n  color: white;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n",
            ]))
        ),
        v = function () {
          return (
            Object(d.useEffect)(function () {
              console.log("cusro is " + document.body.style),
                (document.body.style.cursor = 'url("./box.svg")'),
                console.log(document.body.style.cursor);
            }),
            Object(g.jsxs)(f, {
              className: "panel",
              children: [
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.e,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsxs)(p, {
                  children: [
                    Object(g.jsx)(x.a, {
                      icon: u.a,
                      className: "tool tool-glide",
                    }),
                    Object(g.jsxs)("div", {
                      className: "drop-down-wrapper",
                      children: [
                        Object(g.jsx)("div", {
                          className: "drop-down-icon",
                          onClick: function () {
                            return alert("Please");
                          },
                          children: Object(g.jsx)("span", {
                            className: "drop-down-marker",
                          }),
                        }),
                        Object(g.jsx)(w, {}),
                      ],
                    }),
                  ],
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.a,
                    className: "tool tool-glide tool-selected",
                  }),
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.h,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.f,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.d,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.g,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsx)(p, {
                  children: Object(g.jsx)(x.a, {
                    icon: h.c,
                    className: "tool tool-glide",
                  }),
                }),
                Object(g.jsx)(p, { children: Object(g.jsx)(m, {}) }),
              ],
            })
          );
        },
        N =
          (b.a.div(
            i ||
              (i = Object(j.a)([
                "\n  width: 250px;\n  height: 300px;\n  border-radius: 5px;\n  background-color: green;\n",
              ]))
          ),
          n(20)),
        y = n(10),
        k = 30,
        C = function () {
          '\n\t\t<svg\n\t\t\theight="'
            .concat(k, '"\n\t\t\tfill="')
            .concat("hotpink", '"\n\t\t\tviewBox="0 0 ')
            .concat(60, " ")
            .concat(60, '"\n\t\t\twidth="')
            .concat(
              k,
              '"\n\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t>\n\t\t\t<circle\n\t\t\t\tcx="50%"\n\t\t\t\tcy="50%"\n\t\t\t\tr="'
            )
            .concat(k, '" \n\t\t\t/>\n\t\t</svg>\n  ');
          var t = '<svg width="'
            .concat(k, '" height="')
            .concat(
              k,
              '" xmlns="http://www.w3.org/2000/svg">\n\n  <g>\n   <title>Layer 1</title>\n   <path id="imagebot_2" fill="none" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" stroke="#000000" d="M 5 5 L 5 '
            )
            .concat(k, " L ")
            .concat(k, " ")
            .concat(k, " L ")
            .concat(k, ' 5 L 5 5 z"/>\n  </g>\n </svg>');
          return "data:image/svg+xml;base64,".concat(window.btoa(t));
        },
        z = function (t) {
          console.log("state chnage");
          var e = Object(d.useState)(null),
            n = Object(N.a)(e, 2),
            c = n[0],
            o = n[1],
            s = {
              backgroundColor: "white",
              defaultCursor: "url("
                .concat(C(), ") ")
                .concat(15, " ")
                .concat(15, ", crosshair"),
              isDrawingMode: !0,
              selection: !1,
            };
          return (
            Object(d.useEffect)(
              function () {
                var e = document.getElementById(t),
                  n = new y.fabric.Canvas(e, s);
                n.setDimensions({
                  width: window.innerWidth,
                  height: window.innerHeight,
                }),
                  (n.freeDrawingBrush.color = "blue"),
                  n.on("mouse:down", function (t) {});
              },
              [c]
            ),
            o
          );
        },
        L = function () {
          var t = ["red", "blue", "orange", "yellow", "green", "violet"];
          var e = z("canvas");
          return Object(g.jsxs)(g.Fragment, {
            children: [
              Object(g.jsx)(v, {}),
              Object(g.jsx)(B, {
                onClick: function () {
                  return e(
                    (function () {
                      var e = Math.round(Math.random() * t.length - 1);
                      return t[e];
                    })()
                  );
                },
                children: "ChangeColor",
              }),
              Object(g.jsx)("canvas", {
                id: "canvas",
                className: "canvas",
                children: Object(g.jsx)("h1", {
                  children: "Canvas is not supported in this browser",
                }),
              }),
            ],
          });
        },
        B = b.a.button(
          a ||
            (a = Object(j.a)([
              "\nposition:absolute;\ntop:40%;\nz-index: 3;\nleft:500px;",
            ]))
        ),
        E = function (t) {
          return Object(g.jsx)(g.Fragment, { children: Object(g.jsx)(L, {}) });
        };
      l.a.render(Object(g.jsx)(E, {}), document.getElementById("root"));
    },
  },
  [[40, 1, 2]],
]);
//# sourceMappingURL=main.ba6bcca4.chunk.js.map
