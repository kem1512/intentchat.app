(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5126],
    {
        90490: function (e, t, s) {
            Promise.resolve().then(s.bind(s, 50743));
        },
        50743: function (e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    default: function () {
                        return d;
                    },
                });
            var n = s(57437),
                i = s(96430),
                o = s(2265),
                r = s(88492),
                l = s.n(r);
            function a(e) {
                let { src: t, title: s, videoId: i, onPlay: r, isPlaying: a, paddingBottom: c = "213%" } = e,
                    [d, u] = (0, o.useState)(1),
                    [h, x] = (0, o.useState)(!1),
                    [m, p] = (0, o.useState)(1),
                    [g, f] = (0, o.useState)(0),
                    [v, b] = (0, o.useState)(0),
                    [j, w] = (0, o.useState)(!1),
                    A = (0, o.useRef)(null),
                    y = (0, o.useRef)(),
                    k = (0, o.useCallback)((e) => {
                        b(100 * e.played);
                    }, []),
                    N = (0, o.useCallback)((e) => {
                        f(e);
                    }, []),
                    _ = (0, o.useCallback)((e) => {
                        if (!A.current) return;
                        let t = e.currentTarget.getBoundingClientRect(),
                            s = (e.clientX - t.left) / t.width;
                        A.current.seekTo(s);
                    }, []),
                    B = (e) =>
                        "".concat(Math.floor(e / 60), ":").concat(
                            Math.floor(e % 60)
                                .toString()
                                .padStart(2, "0")
                        );
                return (0, n.jsx)("div", {
                    className: "bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105",
                    children: (0, n.jsxs)("div", {
                        className: "p-4 flex items-center justify-between flex-col",
                        children: [
                            (0, n.jsx)("div", {
                                className: "relative w-full",
                                style: { paddingBottom: c },
                                onMouseMove: () => {
                                    a &&
                                        (w(!0),
                                        y.current && clearTimeout(y.current),
                                        (y.current = setTimeout(() => {
                                            w(!1);
                                        }, 3e3)));
                                },
                                onMouseLeave: () => w(!1),
                                children: (0, n.jsxs)("div", {
                                    className: "absolute inset-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center",
                                    children: [
                                        (0, n.jsx)(l(), {
                                            ref: A,
                                            url: t,
                                            width: "100%",
                                            height: "auto",
                                            playing: a,
                                            volume: d,
                                            muted: h,
                                            playbackRate: m,
                                            onProgress: k,
                                            onDuration: N,
                                            onEnded: () => r(i),
                                            playsinline: !0,
                                            style: { position: "absolute", top: 0, left: 0 },
                                            config: { file: { attributes: { style: { objectFit: "cover" } } } },
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "absolute inset-0 flex flex-col justify-end transition-opacity duration-300 ".concat(j && a ? "opacity-100" : "opacity-0"),
                                            children: [
                                                (0, n.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }),
                                                (0, n.jsxs)("div", {
                                                    className: "relative p-4 space-y-2",
                                                    children: [
                                                        (0, n.jsx)("div", {
                                                            className: "h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer",
                                                            onClick: _,
                                                            children: (0, n.jsx)("div", { className: "h-full bg-white transition-all duration-300", style: { width: "".concat(v, "%") } }),
                                                        }),
                                                        (0, n.jsxs)("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                (0, n.jsxs)("div", { className: "text-[10px] text-white", children: [B((v * g) / 100), " / ", B(g)] }),
                                                                (0, n.jsxs)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        (0, n.jsxs)("div", {
                                                                            className: "flex items-center space-x-1",
                                                                            children: [
                                                                                (0, n.jsx)("button", {
                                                                                    onClick: () => x(!h),
                                                                                    className: "text-white hover:text-gray-200",
                                                                                    children: h
                                                                                        ? (0, n.jsxs)("svg", {
                                                                                              className: "w-4 h-4",
                                                                                              fill: "none",
                                                                                              viewBox: "0 0 24 24",
                                                                                              stroke: "currentColor",
                                                                                              children: [
                                                                                                  (0, n.jsx)("path", {
                                                                                                      strokeLinecap: "round",
                                                                                                      strokeLinejoin: "round",
                                                                                                      strokeWidth: 2,
                                                                                                      d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                                                                                                  }),
                                                                                                  (0, n.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" }),
                                                                                              ],
                                                                                          })
                                                                                        : (0, n.jsx)("svg", {
                                                                                              className: "w-4 h-4",
                                                                                              fill: "none",
                                                                                              viewBox: "0 0 24 24",
                                                                                              stroke: "currentColor",
                                                                                              children: (0, n.jsx)("path", {
                                                                                                  strokeLinecap: "round",
                                                                                                  strokeLinejoin: "round",
                                                                                                  strokeWidth: 2,
                                                                                                  d:
                                                                                                      "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                                                                                              }),
                                                                                          }),
                                                                                }),
                                                                                (0, n.jsx)("input", {
                                                                                    type: "range",
                                                                                    min: "0",
                                                                                    max: "1",
                                                                                    step: "0.1",
                                                                                    value: d,
                                                                                    onChange: (e) => u(parseFloat(e.target.value)),
                                                                                    className: "w-16 accent-white h-1",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, n.jsxs)("select", {
                                                                            value: m,
                                                                            onChange: (e) => p(parseFloat(e.target.value)),
                                                                            className: "text-[10px] text-white bg-transparent border-none focus:ring-0",
                                                                            children: [
                                                                                (0, n.jsx)("option", { value: "0.5", children: "0.5x" }),
                                                                                (0, n.jsx)("option", { value: "1", children: "1x" }),
                                                                                (0, n.jsx)("option", { value: "1.5", children: "1.5x" }),
                                                                                (0, n.jsx)("option", { value: "2", children: "2x" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        !a &&
                                            (0, n.jsx)("button", {
                                                className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300",
                                                onClick: () => r(i),
                                                "aria-label": "播放视频",
                                                children: (0, n.jsx)("div", {
                                                    className: "w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                    children: (0, n.jsx)("svg", { className: "w-6 h-6 text-gray-900", viewBox: "0 0 24 24", fill: "currentColor", children: (0, n.jsx)("path", { d: "M8 5v14l11-7z" }) }),
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)("h3", { className: "text-xl font-semibold text-gray-800 mt-4 text-center", children: s }),
                        ],
                    }),
                });
            }
            let c = [
                {
                    title: "IOS中文版",
                    resources: [
                        { title: "全局翻译", src: "/video-resources/ios_chinese_translate.mp4", paddingBottom: "213%" },
                        { title: "AI search", src: "/video-resources/ios_chinese_search.mp4", paddingBottom: "213%" },
                        { title: "AI Reply", src: "/video-resources/ios_chinese_reply.mp4", paddingBottom: "213%" },
                        { title: "iOS中文总视频", src: "/video-resources/ios_chinese_video.mp4", paddingBottom: "213%" },
                    ],
                },
                {
                    title: "IOS English version",
                    resources: [
                        { title: "AI Reply", src: "/video-resources/ios_english_reply.mp4", paddingBottom: "170%" },
                        { title: "AI search", src: "/video-resources/ios_english_search.mp4", paddingBottom: "170%" },
                        { title: "Global Translation", src: "/video-resources/ios_english_translate.mp4", paddingBottom: "170%" },
                        { title: "IOS English total video", src: "/video-resources/ios_english_video.mp4", paddingBottom: "170%" },
                    ],
                },
                {
                    title: "安卓中文版",
                    resources: [
                        { title: "全局翻译", src: "/video-resources/android_chinese_translate.mp4", paddingBottom: "213%" },
                        { title: "AI Reply", src: "/video-resources/android_chinese_reply.mp4", paddingBottom: "213%" },
                        { title: "AI search", src: "/video-resources/android_chinese_search.mp4", paddingBottom: "213%" },
                        { title: "安卓中文总视频", src: "/video-resources/android_chinese_video.mp4", paddingBottom: "213%" },
                    ],
                },
                {
                    title: "Android English version",
                    resources: [
                        { title: "AI Reply", src: "/video-resources/android_english_reply.mp4", paddingBottom: "213%" },
                        { title: "AI search", src: "/video-resources/android_english_search.mp4", paddingBottom: "213%" },
                        { title: "Global Translation", src: "/video-resources/android_english_translate.mp4", paddingBottom: "213%" },
                        { title: "Android English total video", src: "/video-resources/android_english_video.mp4", paddingBottom: "213%" },
                    ],
                },
            ];
            function d() {
                let [e, t] = (0, o.useState)({}),
                    s = (0, o.useRef)(null),
                    r = (e) => {
                        s.current && s.current !== e && t((e) => ({ ...e, [s.current]: !1 })),
                            t((t) => {
                                let n = { ...t, [e]: !t[e] };
                                return (s.current = n[e] ? e : null), n;
                            });
                    };
                return (0, n.jsxs)("div", {
                    className: "min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8",
                    children: [
                        (0, n.jsx)(i.Z, {}),
                        (0, n.jsx)("div", {
                            className: "max-w-7xl mx-auto pt-24",
                            children: c.map((t) =>
                                (0, n.jsxs)(
                                    "div",
                                    {
                                        className: "mb-12",
                                        children: [
                                            (0, n.jsx)("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: t.title }),
                                            (0, n.jsx)("div", {
                                                className: "grid grid-cols-4 sm:grid-cols-2 gap-8",
                                                children: t.resources.map((s) => {
                                                    let i = "".concat(t.title, "-").concat(s.title);
                                                    return (0, n.jsx)(a, { src: s.src, title: s.title, videoId: i, onPlay: r, isPlaying: e[i] || !1, paddingBottom: s.paddingBottom }, s.title);
                                                }),
                                            }),
                                        ],
                                    },
                                    t.title
                                )
                            ),
                        }),
                    ],
                });
            }
        },
        96430: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return x;
                },
            });
            var n = s(57437),
                i = {
                    src: "/_next/static/media/logo.1a768676.png",
                    height: 80,
                    width: 95,
                    blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAmElEQVR42mOQ5fFgFuey6BTnMn8uzmn+SwyIgewnQLF6BgYgADLmi3GZ/xfjNEPBQEUgPIEBSNwB4v1AfBiIjwDxOSA+AcT7gPgBA9DIC+Jclo1A3As0rVWCy7pagsuqT4LLshmo4CYDVCfMyB9A/AfBt1jBAFQtBeRsBdr7G8nub0C8FCjHywADQNX9QMEFQKuMgGw5mDgArGE3BhN4yg4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 7,
                },
                o = s(49354),
                r = s(55153),
                l = s(66648),
                a = s(87138),
                c = s(2265),
                d = s(877),
                u = s(16463);
            function h() {
                var e;
                let t = (0, u.useRouter)(),
                    s = (0, u.usePathname)(),
                    i = (0, d.bU)(),
                    [o, r] = (0, c.useState)(!1),
                    l = (0, c.useRef)(null),
                    a = [
                        { code: "en", label: "English" },
                        { code: "zh", label: "中文" },
                    ],
                    h = (e) => {
                        if ((r(!1), e === i)) return;
                        let n = s.replace("/".concat(i), "/".concat(e));
                        t.push(n);
                    };
                (0, c.useEffect)(() => {
                    function e(e) {
                        l.current && !l.current.contains(e.target) && r(!1);
                    }
                    return (
                        o ? document.addEventListener("mousedown", e) : document.removeEventListener("mousedown", e),
                        () => {
                            document.removeEventListener("mousedown", e);
                        }
                    );
                }, [o]);
                let x = (0, n.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, n.jsx)("circle", { cx: "10", cy: "10", r: "9", stroke: "#5A6A85", strokeWidth: "1.5", fill: "#F5F6FA" }),
                            (0, n.jsx)("ellipse", { cx: "10", cy: "10", rx: "5", ry: "9", stroke: "#5A6A85", strokeWidth: "1.2" }),
                            (0, n.jsx)("ellipse", { cx: "10", cy: "10", rx: "9", ry: "5", stroke: "#5A6A85", strokeWidth: "1.2" }),
                        ],
                    }),
                    m = (0, n.jsx)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", { d: "M4 6L8 10L12 6", stroke: "#5A6A85", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                    });
                return (0, n.jsxs)("div", {
                    className: "relative",
                    ref: l,
                    children: [
                        (0, n.jsxs)("button", {
                            className: "flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F6FA] text-[#5A6A85] font-medium text-base shadow-sm border border-transparent hover:border-[#E0E3EB] transition-colors min-w-[120px]",
                            onClick: () => r((e) => !e),
                            "aria-haspopup": "listbox",
                            "aria-expanded": o,
                            children: [x, (0, n.jsx)("span", { className: "flex-1 text-left select-none", children: (null === (e = a.find((e) => e.code === i)) || void 0 === e ? void 0 : e.label) || i }), m],
                        }),
                        o &&
                            (0, n.jsx)("div", {
                                className: "absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-[#E0E3EB] z-10",
                                children: a.map((e) =>
                                    (0, n.jsx)(
                                        "button",
                                        {
                                            className: "w-full flex items-center gap-2 px-4 py-2 rounded-xl text-base transition-colors text-left ".concat(
                                                i === e.code ? "bg-[#6D45E3] text-white font-semibold" : "text-[#5A6A85] hover:bg-[#F5F6FA]"
                                            ),
                                            onClick: () => h(e.code),
                                            children: e.label,
                                        },
                                        e.code
                                    )
                                ),
                            }),
                    ],
                });
            }
            function x() {
                let [e, t] = (0, c.useState)(!1),
                    s = (0, r.T_)("header");
                return (0, n.jsxs)("header", {
                    className: "w-full container py-4 md:py-5",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                                (0, n.jsx)(a.default, { href: "/", children: (0, n.jsx)(l.default, { src: i, alt: s("logoAlt"), width: 47, height: 40, className: "w-10 md:w-[47px]" }) }),
                                (0, n.jsx)("button", {
                                    onClick: () => t(!e),
                                    className: "hidden sm:block p-2",
                                    "aria-label": s("menuButton"),
                                    children: (0, n.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: e
                                            ? (0, n.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
                                            : (0, n.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }),
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: "sm:hidden flex justify-end items-center gap-4",
                                    children: [
                                        (0, n.jsx)("button", {
                                            onClick: () => window.open(o.W8, "_blank"),
                                            className: "h-14 px-4 rounded-xl text-[#6d45e3] text-base font-semibold hover:bg-[#6d45e3]/10 transition-colors",
                                            children: s("joinChannel"),
                                        }),
                                        (0, n.jsx)("button", {
                                            // onClick: () => window.open(o.fJ, "_blank"),
                                            className: "h-14 px-8 bg-[#6d45e3] text-white rounded-xl text-base font-semibold hover:bg-[#6d45e3]/90 transition-colors",
                                            children: s("downloadIOS"),
                                        }),
                                        (0, n.jsx)(h, {}),
                                    ],
                                }),
                            ],
                        }),
                        e &&
                            (0, n.jsxs)("div", {
                                className: "hidden sm:block mt-4 space-y-4 pb-4",
                                children: [
                                    (0, n.jsx)("button", {
                                        onClick: () => window.open(o.W8, "_blank"),
                                        className: "w-full px-4 h-12 rounded-xl text-[#6d45e3] text-base font-semibold hover:bg-[#6d45e3]/10 transition-colors",
                                        children: s("joinChannel"),
                                    }),
                                    (0, n.jsx)("button", {
                                        // onClick: () => window.open(o.fJ, "_blank"),
                                        className: "w-full h-12 bg-[#6d45e3] text-white rounded-xl text-base font-semibold hover:bg-[#6d45e3]/90 transition-colors",
                                        children: s("downloadIOS"),
                                    }),
                                    (0, n.jsx)("div", { className: "flex justify-center", children: (0, n.jsx)(h, {}) }),
                                ],
                            }),
                    ],
                });
            }
        },
        49354: function (e, t, s) {
            "use strict";
            s.d(t, {
                VE: function () {
                    return l;
                },
                W8: function () {
                    return a;
                },
                cn: function () {
                    return o;
                },
                fJ: function () {
                    return r;
                },
            });
            var n = s(44839),
                i = s(96164);
            function o() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, i.m6)((0, n.W)(t));
            }
            let r = "https://apps.apple.com/us/app/intent-ai-messenger/id6742133443?mt=8",
                l = "https://play.google.com/store/apps/details?id=app.intentchat&hl=en_US",
                a = "https://x.com/intentapp_ai";
        },
    },
    function (e) {
        e.O(0, [4868, 877, 231, 2008, 8492, 2971, 7023, 1744], function () {
            return e((e.s = 90490));
        }),
            (_N_E = e.O());
    },
]);
