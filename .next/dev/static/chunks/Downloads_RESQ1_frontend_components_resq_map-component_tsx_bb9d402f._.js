(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapComponent",
    ()=>MapComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/RESQ1/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/RESQ1/frontend/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/RESQ1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/RESQ1/frontend/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const statusColors = {
    critical: "#D72638",
    urgent: "#F5A623",
    stable: "#22C55E"
};
function MapComponent({ markers, rescuerPath, newRescuerPosition, fullHeight = false, showHeatmap = false, heatmapZones = [] }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rescuerMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponent.useEffect": ()=>{
            setMounted(true);
        }
    }["MapComponent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponent.useEffect": ()=>{
            if (!mounted || !mapRef.current || mapInstanceRef.current) return;
            // Initialize map
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                center: [
                    19.0760,
                    72.8777
                ],
                zoom: 12,
                zoomControl: false,
                attributionControl: false
            });
            // Dark tile layer
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", {
                maxZoom: 19
            }).addTo(map);
            // Add zoom control to bottom right
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.zoom({
                position: "bottomright"
            }).addTo(map);
            mapInstanceRef.current = map;
            // Add heatmap zones if enabled
            if (showHeatmap && heatmapZones.length > 0) {
                heatmapZones.forEach({
                    "MapComponent.useEffect": (zone)=>{
                        const color = zone.risk === "high" ? "#D72638" : zone.risk === "moderate" ? "#F5A623" : "#22C55E";
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon(zone.coords, {
                            color: color,
                            fillColor: color,
                            fillOpacity: 0.2,
                            weight: 2
                        }).addTo(map);
                    }
                }["MapComponent.useEffect"]);
            }
            // Add markers with pulse effect
            markers.forEach({
                "MapComponent.useEffect": (marker, index)=>{
                    const color = statusColors[marker.status];
                    // Create custom pulse icon
                    const pulseIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: "custom-pulse-marker",
                        html: `
          <div class="marker-container" style="position: relative; width: 24px; height: 24px;">
            <div class="pulse-ring" style="
              position: absolute;
              inset: -8px;
              border: 2px solid ${color};
              border-radius: 50%;
              opacity: 0.6;
              animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              animation-delay: ${index * 200}ms;
            "></div>
            <div class="pulse-ring" style="
              position: absolute;
              inset: -8px;
              border: 2px solid ${color};
              border-radius: 50%;
              opacity: 0.4;
              animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              animation-delay: ${index * 200 + 400}ms;
            "></div>
            <div class="pulse-ring" style="
              position: absolute;
              inset: -8px;
              border: 2px solid ${color};
              border-radius: 50%;
              opacity: 0.2;
              animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              animation-delay: ${index * 200 + 800}ms;
            "></div>
            <div class="marker-dot" style="
              width: 24px;
              height: 24px;
              background: ${color};
              border-radius: 50%;
              border: 3px solid rgba(255,255,255,0.3);
              box-shadow: 0 0 20px ${color}80;
            "></div>
          </div>
        `,
                        iconSize: [
                            24,
                            24
                        ],
                        iconAnchor: [
                            12,
                            12
                        ]
                    });
                    const m = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        marker.lat,
                        marker.lng
                    ], {
                        icon: pulseIcon
                    }).addTo(map);
                    // Add popup
                    m.bindPopup(`
        <div style="
          background: #12121A;
          color: #F0F4F8;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #2A2A3A;
          font-family: 'DM Sans', sans-serif;
          min-width: 180px;
        ">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span style="
              display: inline-block;
              padding: 2px 8px;
              background: ${color}20;
              color: ${color};
              border-radius: 4px;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            ">${marker.status}</span>
          </div>
          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">
            ${marker.species}
          </div>
          <div style="color: #6B7280; font-size: 12px;">
            ${marker.location}
          </div>
        </div>
      `, {
                        className: "custom-popup",
                        closeButton: false
                    });
                }
            }["MapComponent.useEffect"]);
            // Add moving rescuer if path exists
            if (rescuerPath && rescuerPath.length > 0) {
                // Draw path trail
                const pathCoords = rescuerPath.map({
                    "MapComponent.useEffect.pathCoords": (p)=>[
                            p.lat,
                            p.lng
                        ]
                }["MapComponent.useEffect.pathCoords"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polyline(pathCoords, {
                    color: "#3B82F6",
                    weight: 2,
                    dashArray: "5, 10",
                    opacity: 0.5
                }).addTo(map);
                // Create rescuer marker
                const rescuerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                    className: "rescuer-marker",
                    html: `
          <div style="
            width: 16px;
            height: 16px;
            background: #3B82F6;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 15px #3B82F680;
          "></div>
        `,
                    iconSize: [
                        16,
                        16
                    ],
                    iconAnchor: [
                        8,
                        8
                    ]
                });
                const rescuer = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                    rescuerPath[0].lat,
                    rescuerPath[0].lng
                ], {
                    icon: rescuerIcon
                }).addTo(map);
                rescuerMarkerRef.current = rescuer;
                // Animate rescuer along path
                let pathIndex = 0;
                const moveRescuer = {
                    "MapComponent.useEffect.moveRescuer": ()=>{
                        if (pathIndex < rescuerPath.length - 1) {
                            pathIndex++;
                            rescuer.setLatLng([
                                rescuerPath[pathIndex].lat,
                                rescuerPath[pathIndex].lng
                            ]);
                        } else {
                            pathIndex = 0;
                        }
                    }
                }["MapComponent.useEffect.moveRescuer"];
                const interval = setInterval(moveRescuer, 2000);
                return ({
                    "MapComponent.useEffect": ()=>clearInterval(interval)
                })["MapComponent.useEffect"];
            }
            return ({
                "MapComponent.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["MapComponent.useEffect"];
        }
    }["MapComponent.useEffect"], [
        mounted,
        markers,
        rescuerPath,
        showHeatmap,
        heatmapZones
    ]);
    // Add new rescuer when report is submitted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponent.useEffect": ()=>{
            if (!newRescuerPosition || !mapInstanceRef.current) return;
            const newRescuerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                className: "new-rescuer-marker",
                html: `
        <div style="
          width: 16px;
          height: 16px;
          background: #3B82F6;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 15px #3B82F680;
          animation: scale-pop 0.3s ease-out;
        "></div>
      `,
                iconSize: [
                    16,
                    16
                ],
                iconAnchor: [
                    8,
                    8
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                newRescuerPosition.lat,
                newRescuerPosition.lng
            ], {
                icon: newRescuerIcon
            }).addTo(mapInstanceRef.current);
        }
    }["MapComponent.useEffect"], [
        newRescuerPosition
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full ${fullHeight ? 'h-full' : 'h-full'} bg-[#12121A] flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#6B7280] font-mono text-sm",
                children: "Loading map..."
            }, void 0, false, {
                fileName: "[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx",
            lineNumber: 251,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d49add1401e40e19",
                children: ".leaflet-popup-content-wrapper{box-shadow:none!important;background:0 0!important;padding:0!important}.leaflet-popup-content{margin:0!important}.leaflet-popup-tip{display:none!important}@keyframes pulse-ring{0%{opacity:.8;transform:scale(.8)}to{opacity:0;transform:scale(2.5)}}@keyframes scale-pop{0%{transform:scale(0)}70%{transform:scale(1.2)}to{transform:scale(1)}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$RESQ1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                style: {
                    background: '#12121A'
                },
                className: "jsx-d49add1401e40e19" + " " + `w-full ${fullHeight ? 'h-full' : 'h-full'}`
            }, void 0, false, {
                fileName: "[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MapComponent, "U6H6Okh//DNbZ8yPMnW6s+jylsM=");
_c = MapComponent;
var _c;
__turbopack_context__.k.register(_c, "MapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/RESQ1/frontend/components/resq/map-component.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Downloads_RESQ1_frontend_components_resq_map-component_tsx_bb9d402f._.js.map