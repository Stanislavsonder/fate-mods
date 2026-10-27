//#region node_modules/.pnpm/@fate-app+mod-types@3.0.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
function e(e) {
	return e;
}
var t = /^[a-z0-9-]+@[a-z0-9-]+$/;
function n(e, n) {
	if (!t.test(e)) throw Error(`"${String(e)}" is not a valid mod id — expected "author@name"`);
	if (typeof n != "string" || n.length === 0) throw Error("mod data key must be a non-empty string");
	return `${e}.${n}`;
}
function r(e, t, r) {
	return e[n(t, r)];
}
function i(e, t, r, i) {
	e[n(t, r)] = i;
}
function a(e, t, r) {
	let i = e;
	if (r !== void 0) {
		delete i[n(t, r)];
		return;
	}
	let a = n(t, "_").slice(0, -1);
	for (let e of Object.keys(i)) e.startsWith(a) && delete i[e];
}
//#endregion
//#region node_modules/.pnpm/@fate-app+mod-types@3.0.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/components.js
function o(e) {
	let t = globalThis.FateSDK?.components?.[e];
	if (!t) throw Error(`@fate-app/mod-types: FateSDK.components.${e} is unavailable - this mod needs host SDK ^3.0.0 or newer, and "sheetComponents" in its own manifest.json "capabilities" (that's what triggers the host to load it).`);
	return t;
}
function s(e) {
	return new Proxy({}, { get(t, n, r) {
		return Reflect.get(o(e), n, r);
	} });
}
var c = /* @__PURE__ */ s("SheetSection"), l = globalThis.FateSDK.vue;
l.BaseTransition, l.BaseTransitionPropsValidators, l.Comment, l.DeprecationTypes, l.EffectScope, l.ErrorCodes, l.ErrorTypeStrings, l.Fragment, l.KeepAlive, l.ReactiveEffect, l.Static, l.Suspense, l.Teleport, l.Text, l.TrackOpTypes, l.Transition, l.TransitionGroup, l.TriggerOpTypes, l.VueElement, l.assertNumber, l.callWithAsyncErrorHandling, l.callWithErrorHandling, l.camelize, l.capitalize, l.cloneVNode, l.compatUtils, l.compile, l.computed, l.createApp;
var u = l.createBlock;
l.createCommentVNode, l.createElementBlock, l.createElementVNode, l.createHydrationRenderer, l.createPropsRestProxy, l.createRenderer, l.createSSRApp, l.createSlots, l.createStaticVNode;
var d = l.createTextVNode, f = l.createVNode;
l.customRef, l.defineAsyncComponent;
var p = l.defineComponent;
l.defineCustomElement, l.defineEmits, l.defineExpose, l.defineModel, l.defineOptions, l.defineProps, l.defineSSRCustomElement, l.defineSlots, l.devtools, l.effect, l.effectScope, l.getCurrentInstance, l.getCurrentScope, l.getCurrentWatcher, l.getTransitionRawChildren, l.guardReactiveProps, l.h, l.handleError, l.hasInjectionContext, l.hydrate, l.hydrateOnIdle, l.hydrateOnInteraction, l.hydrateOnMediaQuery, l.hydrateOnVisible, l.initCustomFormatter, l.initDirectivesForSSR;
var m = l.inject;
l.isMemoSame, l.isProxy, l.isReactive, l.isReadonly, l.isRef, l.isRuntimeOnly, l.isShallow, l.isVNode, l.markRaw, l.mergeDefaults, l.mergeModels, l.mergeProps, l.nextTick, l.nodeOps, l.normalizeClass, l.normalizeProps, l.normalizeStyle, l.onActivated, l.onBeforeMount, l.onBeforeUnmount, l.onBeforeUpdate, l.onDeactivated, l.onErrorCaptured, l.onMounted, l.onRenderTracked, l.onRenderTriggered, l.onScopeDispose, l.onServerPrefetch, l.onUnmounted, l.onUpdated, l.onWatcherCleanup;
var h = l.openBlock;
l.patchProp, l.popScopeId, l.provide, l.proxyRefs, l.pushScopeId, l.queuePostFlushCb, l.reactive, l.readonly, l.ref, l.registerRuntimeCompiler, l.render, l.renderList, l.renderSlot, l.resolveComponent, l.resolveDirective, l.resolveDynamicComponent, l.resolveFilter, l.resolveTransitionHooks, l.setBlockTracking, l.setDevtoolsHook, l.setTransitionHooks, l.shallowReactive, l.shallowReadonly, l.shallowRef, l.ssrContextKey, l.ssrUtils, l.stop;
var g = l.toDisplayString;
l.toHandlerKey, l.toHandlers, l.toRaw, l.toRef, l.toRefs, l.toValue, l.transformVNodeArgs, l.triggerRef;
var _ = l.unref;
l.useAttrs, l.useCssModule, l.useCssVars, l.useHost, l.useId;
var v = l.useModel;
l.useSSRContext, l.useShadowRoot, l.useSlots, l.useTemplateRef, l.useTransitionState, l.vModelCheckbox, l.vModelDynamic, l.vModelRadio, l.vModelSelect, l.vModelText, l.vShow, l.version, l.warn, l.watch, l.watchEffect, l.watchPostEffect, l.watchSyncEffect, l.withAsyncContext;
var y = l.withCtx;
l.withDefaults, l.withDirectives, l.withKeys, l.withMemo, l.withModifiers, l.withScopeId;
//#endregion
//#region \0fate-sdk-shim:@ionic/vue
var b = globalThis.FateSDK.ionicVue;
b.IonAccordion, b.IonAccordionGroup, b.IonActionSheet, b.IonAlert, b.IonApp, b.IonAvatar, b.IonBackButton, b.IonBackdrop, b.IonBadge, b.IonBreadcrumb, b.IonBreadcrumbs, b.IonButton, b.IonButtons, b.IonCard, b.IonCardContent, b.IonCardHeader, b.IonCardSubtitle, b.IonCardTitle, b.IonCheckbox, b.IonChip, b.IonCol, b.IonContent, b.IonDatetime, b.IonDatetimeButton, b.IonFab, b.IonFabButton, b.IonFabList, b.IonFooter, b.IonGrid, b.IonHeader, b.IonIcon, b.IonImg, b.IonInfiniteScroll, b.IonInfiniteScrollContent;
var x = b.IonInput;
b.IonInputOtp, b.IonInputPasswordToggle;
var S = b.IonItem;
b.IonItemDivider, b.IonItemGroup, b.IonItemOption, b.IonItemOptions, b.IonItemSliding, b.IonLabel, b.IonList, b.IonListHeader, b.IonLoading, b.IonMenu, b.IonMenuButton, b.IonMenuToggle, b.IonModal, b.IonNav, b.IonNavLink;
var C = b.IonNote;
b.IonPage, b.IonPicker, b.IonPickerColumn, b.IonPickerColumnOption, b.IonPickerLegacy, b.IonPopover, b.IonProgressBar, b.IonRadio, b.IonRadioGroup, b.IonRange, b.IonRefresher, b.IonRefresherContent, b.IonReorder, b.IonReorderGroup, b.IonRippleEffect, b.IonRouterOutlet, b.IonRow, b.IonSearchbar, b.IonSegment, b.IonSegmentButton, b.IonSegmentContent, b.IonSegmentView, b.IonSelect, b.IonSelectModal, b.IonSelectOption, b.IonSkeletonText, b.IonSpinner, b.IonSplitPane, b.IonTab, b.IonTabBar, b.IonTabButton, b.IonTabs, b.IonText, b.IonTextarea, b.IonThumbnail, b.IonTitle, b.IonToast, b.IonToggle, b.IonToolbar, b.IonicSafeString, b.IonicSlides, b.IonicVue, b.actionSheetController, b.alertController, b.createAnimation, b.createGesture, b.getIonPageElement, b.getPlatforms, b.getTimeGivenProgression, b.iosTransitionAnimation, b.isPlatform, b.loadingController, b.mdTransitionAnimation, b.menuController, b.modalController, b.onIonViewDidEnter, b.onIonViewDidLeave, b.onIonViewWillEnter, b.onIonViewWillLeave, b.openURL, b.pickerController, b.popoverController, b.toastController, b.useBackButton, b.useIonRouter, b.useKeyboard;
var w = {
	appVersion: ">=2.0.0",
	author: {
		email: "stanislavsonder@gmail.com",
		github: "Stanislavsonder",
		name: "Stanislav Sonder"
	},
	capabilities: ["sheetComponents"],
	config: {
		groups: [],
		options: [{
			default: 200,
			id: "max-note-length",
			limits: {
				max: 1e3,
				min: 10,
				step: 10
			},
			name: "t.config.maxNoteLength.name",
			tooltip: "t.config.maxNoteLength.tooltip",
			type: "number"
		}]
	},
	description: {
		full: "t.description.full",
		short: "t.description.short"
	},
	image: "cover.png",
	entry: "bundle.mjs",
	id: "sonder@example",
	languages: /* @__PURE__ */ "en.fr.es.pt.it.de.nl.sv.no.da.fi.ru.be.uk.pl.cs.ro.el.tr.he.ar.fa.sw.zh.hi.bn.ja.ko.id.th".split("."),
	loadPriority: 100,
	name: "t.name",
	published: !1,
	sdk: "^3.0.0",
	tags: ["example"],
	version: "1.3.0"
}, T = "note", E = "sonder@example.maxNoteLength", D = [{
	id: "sonder@example-section",
	component: /* @__PURE__ */ p({
		__name: "ExampleSection",
		props: {
			modelValue: { required: !0 },
			modelModifiers: {}
		},
		emits: ["update:modelValue"],
		setup(e) {
			let t = v(e, "modelValue"), n = m("context");
			function a(e) {
				let r = String(e.target.value ?? ""), a = Number(n.value.constants[E] ?? 200);
				i(t.value, w.id, T, r.slice(0, a));
			}
			return (e, i) => (h(), u(_(c), { title: e.$t("sonder@example.title") }, {
				default: y(() => [f(_(S), null, {
					default: y(() => [f(_(x), {
						label: e.$t("sonder@example.noteLabel"),
						"label-placement": "stacked",
						"model-value": _(r)(t.value, _(w).id, T) ?? "",
						onIonInput: a
					}, null, 8, ["label", "model-value"])]),
					_: 1
				}), f(_(C), null, {
					default: y(() => [d(g(e.$t("sonder@example.maxLengthNote", { value: _(n).constants[E] ?? 200 })), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["title"]));
		}
	}),
	order: 900
}], O = "note", k = "max-note-length", A = "sonder@example.maxNoteLength", j = 200;
function M(e, t) {
	let n = t._modules[w.id]?.config, r = n && Object.hasOwn(n, k) ? Number(n[k]) : NaN;
	e.constants[A] = Number.isFinite(r) ? r : j;
}
function N(e, t) {
	M(e, t), i(t, w.id, O, r(t, w.id, O) ?? "");
}
function P(e, t) {
	a(t, w.id);
}
function F(e, t) {
	M(e, t);
}
//#endregion
//#region bundle.ts
var I = e({
	components: D,
	onInstall: N,
	onUninstall: P,
	onReconfigure: F
});
//#endregion
export { I as default };
