(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9886],
    {
        63410: function (e, s, t) {
            Promise.resolve().then(t.bind(t, 12976));
        },
        12976: function (e, s, t) {
            "use strict";
            t.r(s),
                t.d(s, {
                    default: function () {
                        return g;
                    },
                });
            var n = t(57437),
                l = {
                    src: "/_next/static/media/logo-white.8c39a6c2.png",
                    height: 60,
                    width: 71,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAeElEQVR42mM4zvSn9e/jf9//ffv78Hf1fwaGP/P+I4E/vQx/bv3d++fInyN/z/098fvAn7sMf8//aPw48WvL19pvkz62/7nK8Ofwv/9A+OPfHxD9ZynDT6m/m//9/g8S/Pp30Q9uhq8M/xl+9f6Z81Pvs8x/hp8MADtGXAajbL5TAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 7,
                },
                a = t(40918),
                i = t(5933),
                r = t(98319),
                c = t(88996);
            let d = (e) => {
                    let { className: s } = e;
                    return (0, n.jsx)(c.E.div, { className: "bg-gray-200 rounded-lg ".concat(s), animate: { opacity: [0.5, 0.8, 0.5] }, transition: { duration: 1.5, repeat: 1 / 0, ease: "easeInOut" } });
                },
                o = () => (0, n.jsxs)("div", { className: "w-[600px] sm:w-[400px] max-w-3xl", children: [(0, n.jsx)(d, { className: "h-24 w-full mb-2" }), (0, n.jsx)(d, { className: "h-20 w-full mb-2" })] }),
                h = () => (0, n.jsxs)("div", { className: "w-full", children: [(0, n.jsx)(d, { className: "h-4 w-full mb-2" }), (0, n.jsx)(d, { className: "h-6 w-full mb-2" }), (0, n.jsx)(d, { className: "h-4 w-full" })] }),
                x = () => (0, n.jsx)("div", { className: "w-full", children: (0, n.jsx)("div", { className: "flex flex-wrap gap-2 pt-2", children: [1, 2, 3, 4].map((e) => (0, n.jsx)(d, { className: "h-6 w-20 rounded-2xl" }, e)) }) });
            var m = t(49354),
                u = t(55153),
                f = t(66648),
                p = t(2265);
            let j = { hidden: { opacity: 0 }, visible: { opacity: 1 } },
                w = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
            function g() {
                var e, s;
                let t = (0, u.T_)(),
                    d = (0, u.T_)("channelAnalyzerTool"),
                    [g, v] = (0, p.useState)("intentofficial"),
                    [y, N] = (0, p.useState)(""),
                    [b, C] = (0, p.useState)({ messages: ["Please enter the channel name to query"] }),
                    [k, A] = (0, p.useState)({ summary: "Please enter the channel name to query", keywords: ["channel name"] }),
                    [E, Z] = (0, p.useState)(!1);
                return (
                    (0, p.useEffect)(() => {
                        if (!g) {
                            N(""), C({ messages: [] }), A({ summary: "", keywords: [] });
                            return;
                        }
                        let e = setTimeout(() => {
                            N(g.trim());
                        }, 500);
                        return () => clearTimeout(e);
                    }, [g]),
                    (0, p.useEffect)(() => {
                        y &&
                            (Z(!0),
                            Promise.all([
                                fetch("/api/proxy?type=fetch&channel=".concat(encodeURIComponent(y), "&limit=5&reverse=True")).then((e) => e.json()),
                                fetch("/api/proxy?type=summarize&channel=".concat(encodeURIComponent(y), "&limit=5&reverse=True")).then((e) => e.json()),
                            ])
                                .then((e) => {
                                    let [s, t] = e;
                                    s.error ? C({ messages: ["Error: " + s.error] }) : C(s), t.error ? A({ summary: "Error: " + t.error, keywords: ["error"] }) : A(t);
                                })
                                .catch((e) => {
                                    C({ messages: ["Error: " + e] }), A({ summary: "Error: " + e, keywords: [] });
                                })
                                .finally(() => Z(!1)));
                    }, [y]),
                    (0, n.jsx)(p.Suspense, {
                        fallback: (0, n.jsx)(a.Z, {}),
                        children: (0, n.jsxs)(c.E.div, {
                            className: "flex flex-col min-h-screen bg-[#fffef8]",
                            initial: "hidden",
                            animate: "visible",
                            variants: j,
                            children: [
                                (0, n.jsxs)("header", {
                                    className: "bg-gradient-to-br from-[#544646] via-[#10042a] to-[#1a0624]",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "flex justify-between items-center py-5 container",
                                            children: [
                                                (0, n.jsx)(r.Z, { href: "/", children: (0, n.jsx)(f.default, { src: l, alt: "logo", width: 46, height: 39 }) }),
                                                (0, n.jsx)("div", {
                                                    children: (0, n.jsx)("button", {
                                                        // onClick: () => window.open(m.fJ, "_blank"),
                                                        className: "h-14 px-8 bg-[#6d45e3] text-white rounded-xl text-base font-semibold hover:bg-[#6d45e3]/90 transition-colors",
                                                        children: t("header.downloadIOS"),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "py-32 flex flex-col items-center justify-center text-white container gap-5",
                                            children: [
                                                (0, n.jsx)("h1", { className: "text-[38px] font-bold leading-tight", children: d("hero.title") }),
                                                (0, n.jsxs)("h2", { className: "text-[24px] font-normal leading-tight", children: [" ", d("hero.subTitle")] }),
                                                (0, n.jsxs)("div", {
                                                    className: "flex items-center gap-2 bg-white rounded-full px-5 py-3 min-w-[400px] max-w-3xl mt-10",
                                                    children: [
                                                        (0, n.jsx)("span", {
                                                            children: (0, n.jsxs)("svg", {
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 20 20",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    (0, n.jsx)("path", {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        d:
                                                                            "M9.54158 1.52084C5.1118 1.52084 1.52075 5.11189 1.52075 9.54168C1.52075 13.9715 5.1118 17.5625 9.54158 17.5625C13.9714 17.5625 17.5624 13.9715 17.5624 9.54168C17.5624 5.11189 13.9714 1.52084 9.54158 1.52084ZM0.145752 9.54168C0.145752 4.3525 4.35241 0.145844 9.54158 0.145844C14.7308 0.145844 18.9374 4.3525 18.9374 9.54168C18.9374 14.7309 14.7308 18.9375 9.54158 18.9375C4.35241 18.9375 0.145752 14.7309 0.145752 9.54168Z",
                                                                        fill: "#6D45E3",
                                                                    }),
                                                                    (0, n.jsx)("path", {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        d:
                                                                            "M16.8471 16.8472C17.1156 16.5787 17.5509 16.5787 17.8194 16.8472L19.6527 18.6805C19.9212 18.949 19.9212 19.3843 19.6527 19.6528C19.3842 19.9213 18.9489 19.9213 18.6804 19.6528L16.8471 17.8195C16.5786 17.551 16.5786 17.1157 16.8471 16.8472Z",
                                                                        fill: "#6D45E3",
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsx)("input", { type: "text", className: "outline-none flex-1 text-base text-black", placeholder: d("hero.inputText"), value: g, onChange: (e) => v(e.target.value) }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("main", {
                                    className: "flex-1",
                                    children: [
                                        (0, n.jsx)(c.E.div, {
                                            variants: w,
                                            transition: { duration: 0.5 },
                                            children: (0, n.jsxs)("section", {
                                                className: "flex flex-col items-center justify-center py-32 container gap-4",
                                                children: [
                                                    (0, n.jsxs)("h2", {
                                                        className: "flex text-[#2d2d2d] text-4xl font-bold",
                                                        children: [
                                                            (0, n.jsx)("span", {
                                                                children: (0, n.jsxs)("svg", {
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        (0, n.jsxs)("mask", {
                                                                            id: "mask0_231_1378",
                                                                            style: { maskType: "luminance" },
                                                                            maskUnits: "userSpaceOnUse",
                                                                            x: "1",
                                                                            y: "1",
                                                                            width: "22",
                                                                            height: "22",
                                                                            children: [
                                                                                (0, n.jsx)("path", {
                                                                                    d: "M22 11.9999C22 17.5229 17.523 21.9999 12 21.9999H2V11.9999C2 6.47694 6.477 1.99994 12 1.99994C17.523 1.99994 22 6.47694 22 11.9999Z",
                                                                                    fill: "#555555",
                                                                                    stroke: "white",
                                                                                    strokeWidth: "2",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                }),
                                                                                (0, n.jsx)("path", {
                                                                                    d: "M7.00024 8.99994H16.0002M7.00024 12.9999H16.0002M7.00024 16.9999H12.0002",
                                                                                    stroke: "white",
                                                                                    strokeWidth: "2",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, n.jsx)("g", { mask: "url(#mask0_231_1378)", children: (0, n.jsx)("path", { d: "M0 -6.10352e-05H24V23.9999H0V-6.10352e-05Z", fill: "#2D2D2D" }) }),
                                                                    ],
                                                                }),
                                                            }),
                                                            d("summary.title"),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: "p-6 w-[600px] sm:w-[400px] max-w-3xl bg-[#C9BBFF] text-[#2d2d2d] mt-4 rounded-2xl text-sm font-bold",
                                                        children: E ? (0, n.jsx)(h, {}) : null == k ? void 0 : k.summary,
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            (0, n.jsx)("div", { className: "w-1 h-1 bg-[#C9BBFF] rounded-full" }),
                                                            (0, n.jsx)("div", { className: "w-1 h-1 bg-[#C9BBFF] rounded-full" }),
                                                            (0, n.jsx)("div", { className: "w-1 h-1 bg-[#C9BBFF] rounded-full" }),
                                                        ],
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: "p-6 w-[600px] sm:w-[400px] max-w-3xl bg-[#C9BBFF] text-[#2d2d2d] rounded-2xl",
                                                        children: [
                                                            (0, n.jsx)("h3", { children: d("summary.keywords") }),
                                                            E
                                                                ? (0, n.jsx)(x, {})
                                                                : (0, n.jsx)("div", {
                                                                      className: "flex flex-wrap gap-2 pt-2",
                                                                      children:
                                                                          null == k
                                                                              ? void 0
                                                                              : null === (e = k.keywords) || void 0 === e
                                                                              ? void 0
                                                                              : e.map((e, s) => (0, n.jsx)("span", { className: "px-2 py-1 bg-[#00134d]/10 rounded-2xl text-[#2d2d2d] text-sm font-bold", children: e }, s)),
                                                                  }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)(c.E.div, {
                                            variants: w,
                                            transition: { duration: 0.5 },
                                            children: (0, n.jsx)("section", {
                                                className: "py-32 bg-[#6D45E3]",
                                                children: (0, n.jsxs)("div", {
                                                    className: "container flex flex-col items-center justify-center ",
                                                    children: [
                                                        (0, n.jsxs)("h2", {
                                                            className: "flex text-white text-4xl font-bold",
                                                            children: [
                                                                (0, n.jsx)("span", {
                                                                    children: (0, n.jsx)("svg", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, n.jsx)("path", {
                                                                            d:
                                                                                "M5.6249 16.4985H12.3749C12.6599 16.4986 12.9343 16.6069 13.1426 16.8015C13.3509 16.9961 13.4775 17.2624 13.4969 17.5468C13.5164 17.8312 13.4271 18.1123 13.2473 18.3334C13.0674 18.5546 12.8103 18.6991 12.5279 18.738L12.3749 18.7485H5.6249C5.33987 18.7484 5.06549 18.6401 4.85721 18.4455C4.64894 18.2509 4.52229 17.9846 4.50286 17.7002C4.48343 17.4158 4.57267 17.1347 4.75255 16.9136C4.93243 16.6924 5.18953 16.5479 5.4719 16.509L5.6249 16.4985ZM7.8299 7.8285C8.02057 7.6382 8.2732 7.52263 8.54186 7.50281C8.81052 7.48299 9.07737 7.56024 9.2939 7.7205L9.4199 7.83L14.6699 13.08C14.8693 13.281 14.9856 13.5498 14.9956 13.8328C15.0056 14.1158 14.9085 14.3921 14.7237 14.6066C14.5389 14.8212 14.28 14.9581 13.9986 14.9902C13.7173 15.0222 13.4342 14.947 13.2059 14.7795L13.0799 14.67L7.8299 9.42C7.61923 9.20906 7.50089 8.92313 7.50089 8.625C7.50089 8.32687 7.61923 8.03944 7.8299 7.8285ZM17.6249 4.5C17.8968 4.50001 18.1594 4.59846 18.3643 4.77715C18.5692 4.95584 18.7024 5.20267 18.7394 5.472L18.7499 5.625V12.375C18.7498 12.66 18.6415 12.9344 18.4469 13.1427C18.2523 13.351 17.986 13.4776 17.7016 13.497C17.4172 13.5165 17.1361 13.4272 16.915 13.2474C16.6938 13.0675 16.5493 12.8104 16.5104 12.528L16.4999 12.375V5.625C16.4999 5.32663 16.6184 5.04048 16.8294 4.8295C17.0404 4.61853 17.3265 4.5 17.6249 4.5Z",
                                                                            fill: "white",
                                                                        }),
                                                                    }),
                                                                }),
                                                                d("summary.latestMessages"),
                                                            ],
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: "flex flex-col gap-4 pt-8",
                                                            children: E
                                                                ? (0, n.jsx)(o, {})
                                                                : null == b
                                                                ? void 0
                                                                : null === (s = b.messages) || void 0 === s
                                                                ? void 0
                                                                : s.map((e, s) => (0, n.jsx)("div", { className: "p-6 w-[600px] sm:w-[400px] max-w-3xl bg-[#c8bbff]/10 text-white text-sm font-bold rounded-2xl", children: e }, s)),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(i.Z, { type: "channelAnalyzerTool" }),
                            ],
                        }),
                    })
                );
            }
        },
        40918: function (e, s, t) {
            "use strict";
            t.d(s, {
                Z: function () {
                    return l;
                },
            });
            var n = t(57437);
            function l() {
                return (0, n.jsx)("main", { className: "flex items-center justify-center h-screen", children: "Loading..." });
            }
        },
        98319: function (e, s, t) {
            "use strict";
            var n = t(57437),
                l = t(87138),
                a = t(16463);
            t(2265),
                (s.Z = (e) => {
                    let { href: s, children: t, className: i, ...r } = e,
                        c = (0, a.useParams)(),
                        d = "string" == typeof c.locale ? c.locale : "",
                        o = s;
                    return (
                        "string" != typeof s ||
                            s.startsWith("http") ||
                            (o = "/"
                                .concat(d)
                                .concat(s.startsWith("/") ? "" : "/")
                                .concat(s)),
                        (0, n.jsx)(l.default, { href: o, className: i, ...r, children: t })
                    );
                });
        },
        5933: function (e, s, t) {
            "use strict";
            t.d(s, {
                Z: function () {
                    return h;
                },
            });
            var n = t(57437),
                l = t(49354),
                a = t(59799),
                i = t(13953),
                r = t(87055),
                c = t(27218),
                d = t(55153),
                o = t(87138);
            function h(e) {
                let { type: s } = e,
                    t = (0, d.T_)("footer");
                return (0, n.jsx)("footer", {
                    className: "w-full px-4 py-6 bg-[#2d2d2d] gap-4",
                    children: (0, n.jsxs)("div", {
                        className: "container flex justify-between items-center lg:flex-col",
                        children: [
                            (0, n.jsxs)("div", {
                                className: "w-full flex flex-col justify-start items-start gap-3",
                                children: [
                                    "channelAnalyzerTool" !== s &&
                                        (0, n.jsxs)("div", {
                                            className: "text-white text-sm font-semibold heading-xs leading-snug",
                                            children: [
                                                (0, n.jsx)(o.default, { href: l.W8, target: "_blank", className: "hover:text-white/90", children: t("joinChannel") }),
                                                " ",
                                                "|",
                                                " ",
                                                (0, n.jsx)(o.default, { href: "/privacy", target: "_blank", className: "hover:text-white/90", children: t("privacyPolicy") }),
                                                " ",
                                                "|",
                                                " ",
                                                (0, n.jsx)(o.default, { href: "/tos", target: "_blank", className: "hover:text-white/90", children: t("termsOfService") }),
                                                (0, n.jsx)(o.default, { href: "/resources", className: "hover:text-white/90 ml-4", children: t("resources") }),
                                            ],
                                        }),
                                    (0, n.jsx)("div", { className: "text-white text-sm font-normal heading-xs leading-snug", children: t("copyright") }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: "hidden justify-start items-center gap-4",
                                children: [(0, n.jsx)(x, { type: "twitter" }), (0, n.jsx)(x, { type: "instagram" }), (0, n.jsx)(x, { type: "github" }), (0, n.jsx)(x, { type: "linkedin" })],
                            }),
                        ],
                    }),
                });
            }
            function x(e) {
                let { type: s } = e;
                return (0, n.jsxs)("div", {
                    className: "w-8 h-8 relative bg-[#4d4d4d] rounded-full flex justify-center items-center cursor-pointer",
                    children: [
                        "twitter" === s && (0, n.jsx)(a.Z, { fill: "white", stroke: "transparent", className: "w-4 h-4" }),
                        "instagram" === s && (0, n.jsx)(i.Z, { stroke: "white", className: "w-4 h-4" }),
                        "github" === s && (0, n.jsx)(r.Z, { stroke: "white", className: "w-4 h-4" }),
                        "linkedin" === s && (0, n.jsx)(c.Z, { stroke: "transparent", fill: "white", className: "w-4 h-4" }),
                    ],
                });
            }
        },
        49354: function (e, s, t) {
            "use strict";
            t.d(s, {
                VE: function () {
                    return r;
                },
                W8: function () {
                    return c;
                },
                cn: function () {
                    return a;
                },
                fJ: function () {
                    return i;
                },
            });
            var n = t(44839),
                l = t(96164);
            function a() {
                for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
                return (0, l.m6)((0, n.W)(s));
            }
            let i = "https://apps.apple.com/us/app/intent-ai-messenger/id6742133443?mt=8",
                r = "https://play.google.com/store/apps/details?id=app.intentchat&hl=en_US",
                c = "https://x.com/intentapp_ai";
        },
    },
    function (e) {
        e.O(0, [4868, 877, 231, 2008, 7381, 2971, 7023, 1744], function () {
            return e((e.s = 63410));
        }),
            (_N_E = e.O());
    },
]);
