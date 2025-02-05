(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    3: function (e) {
      e.exports = [
        {
          when: "2 minutes ago",
          who: "Ariel Plasencia Diaz",
          description: "Created new account",
        },
        {
          when: "3 minutes ago",
          who: "Adriana Plasencia Diaz",
          description: "Created new account",
        },
        {
          when: "4 minutes ago",
          who: "Lisette Diaz Alvarez",
          description: "Created new account",
        },
      ];
    },
    4: function (e, t, a) {
      e.exports = a(9);
    },
    9: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(2),
        o = a.n(s);
      var i = class extends n.Component {
        render() {
          return r.a.createElement(
            "tr",
            null,
            r.a.createElement("td", null, this.props.change.when),
            r.a.createElement("td", null, this.props.change.who),
            r.a.createElement("td", null, this.props.change.description)
          );
        }
      };
      var c = class extends n.Component {
        render() {
          return r.a.createElement(
            "tbody",
            null,
            this.props.data.map((e, t) =>
              r.a.createElement(i, { key: t, change: e })
            )
          );
        }
      };
      var l = class extends n.Component {
        render() {
          return r.a.createElement("th", null, this.props.heading);
        }
      };
      var d = class extends n.Component {
        render() {
          return r.a.createElement(
            "thead",
            { className: "table-success" },
            r.a.createElement(
              "tr",
              null,
              this.props.headings.map((e, t) =>
                r.a.createElement(l, { key: t, heading: e })
              )
            )
          );
        }
      };
      var h = class extends n.Component {
        constructor() {
          super(...arguments), (this.state = { data: [] });
        }
        componentDidMount() {
          setInterval(async () => {
            const e = "http://openlibrary.org/recentchanges.json?limit=".concat(
                "15"
              ),
              t = await fetch(e),
              a = await t.json(),
              n = this.formatData(a);
            this.setState({ data: n });
          }, 1e3);
        }
        getFormatDate(e) {
          var t = new Date(),
            a = e.substring(0, 4),
            n = e.substring(5, 7),
            r = e.substring(8, 10),
            s = e.substring(11, 13),
            o = e.substring(14, 16),
            i = e.substring(17, 19),
            c = new Date(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds()
            ),
            l = new Date(a, n, r, s, o, i);
          return Math.abs(c - l) / 1e3 + " seconds ago";
        }
        formatData(e) {
          return e.map((e, t) => ({
            when: this.getFormatDate(e.timestamp),
            who: e.author.key.substring(8),
            description: e.comment.toUpperCase(),
          }));
        }
        render() {
          return r.a.createElement(
            "div",
            { className: "container p-4" },
            r.a.createElement("h1", null, this.props.title),
            r.a.createElement(
              "table",
              { className: "table table-bordered" },
              r.a.createElement(d, { headings: this.props.headings }),
              r.a.createElement(c, { data: this.state.data })
            )
          );
        }
      };
      var p = (e) => {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 10))
              .then((t) => {
                let {
                  getCLS: a,
                  getFID: n,
                  getFCP: r,
                  getLCP: s,
                  getTTFB: o,
                } = t;
                a(e), n(e), r(e), s(e), o(e);
              });
        },
        u = a(3);
      o.a.render(
        r.a.createElement(
          r.a.StrictMode,
          null,
          r.a.createElement(h, {
            data: u,
            title: "OpenLibrary API",
            headings: ["When", "Who", "Description"],
            users: 10,
          })
        ),
        document.getElementById("root")
      ),
        p();
    },
  },
  [[4, 1, 2]],
]);
//# sourceMappingURL=main.403bd330.chunk.js.map
