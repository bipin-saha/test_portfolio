module.exports = {

"[project]/src/app/(pages)/admin/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/userAuth.ts [app-ssr] (ecmascript)");
"use client";
;
;
const AdminLayout = ({ children })=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserAuth"])();
    if (!user?.$id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-5xl my-10 text-center font-bold",
            children: "Unauthorized"
        }, void 0, false, {
            fileName: "[project]/src/app/(pages)/admin/layout.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this);
    }
    return children;
};
const __TURBOPACK__default__export__ = AdminLayout;
}}),

};

//# sourceMappingURL=src_app_%28pages%29_admin_layout_tsx_edfe6ea9._.js.map