(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.sheet-body[data-v-039f4d1e]{padding-bottom:var(--ion-safe-area-bottom,0px)}.content[data-v-039f4d1e]{--padding-bottom:var(--ion-safe-area-bottom,0px)}.form[data-v-374c89c7]{flex-direction:column;justify-content:space-between;height:100%;display:flex}.error[data-v-374c89c7]{text-align:center;min-height:1.25rem;padding:0 1rem;display:block}.actions[data-v-374c89c7]{width:100%;padding:1rem}.row[data-v-4cbbb6fa]{--background:var(--color-background-2,var(--ion-background-color))}.columns[data-v-4cbbb6fa]{grid-template-columns:1fr 1fr;align-items:center;gap:.75rem;width:100%;padding:.25rem 0;display:grid}.name[data-v-4cbbb6fa]{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-weight:600;overflow:hidden}.what[data-v-4cbbb6fa]{opacity:.7;text-align:start;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;min-width:0;display:-webkit-box;overflow:hidden}.add-button[data-v-b6bcd31e]{color:inherit;cursor:pointer;background:0 0;border:none;align-items:center;padding:0;display:flex}.add-button ion-icon[data-v-b6bcd31e]{font-size:1.5rem}.list[data-v-b6bcd31e]{border-radius:8px;overflow:hidden}.empty[data-v-b6bcd31e]{opacity:.7;justify-content:center;align-items:center;min-height:3rem;margin:0;font-size:1.25rem;display:flex}
/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();//#region node_modules/.pnpm/@fate-app+mod-types@3.0.0_vue@3.5.40/node_modules/@fate-app/mod-types/dist/bundle.js
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
l.BaseTransition, l.BaseTransitionPropsValidators, l.Comment, l.DeprecationTypes, l.EffectScope, l.ErrorCodes, l.ErrorTypeStrings;
var u = l.Fragment;
l.KeepAlive, l.ReactiveEffect, l.Static, l.Suspense, l.Teleport, l.Text, l.TrackOpTypes, l.Transition, l.TransitionGroup, l.TriggerOpTypes, l.VueElement, l.assertNumber, l.callWithAsyncErrorHandling, l.callWithErrorHandling, l.camelize, l.capitalize, l.cloneVNode, l.compatUtils, l.compile;
var d = l.computed;
l.createApp;
var f = l.createBlock, p = l.createCommentVNode, m = l.createElementBlock, h = l.createElementVNode;
l.createHydrationRenderer, l.createPropsRestProxy, l.createRenderer, l.createSSRApp, l.createSlots, l.createStaticVNode;
var g = l.createTextVNode, _ = l.createVNode;
l.customRef, l.defineAsyncComponent;
var v = l.defineComponent;
l.defineCustomElement, l.defineEmits, l.defineExpose, l.defineModel, l.defineOptions, l.defineProps, l.defineSSRCustomElement, l.defineSlots, l.devtools, l.effect, l.effectScope, l.getCurrentInstance, l.getCurrentScope, l.getCurrentWatcher, l.getTransitionRawChildren, l.guardReactiveProps, l.h, l.handleError, l.hasInjectionContext, l.hydrate, l.hydrateOnIdle, l.hydrateOnInteraction, l.hydrateOnMediaQuery, l.hydrateOnVisible, l.initCustomFormatter, l.initDirectivesForSSR, l.inject, l.isMemoSame, l.isProxy, l.isReactive, l.isReadonly, l.isRef, l.isRuntimeOnly, l.isShallow, l.isVNode, l.markRaw, l.mergeDefaults;
var ee = l.mergeModels;
l.mergeProps;
var y = l.nextTick;
l.nodeOps, l.normalizeClass, l.normalizeProps;
var te = l.normalizeStyle;
l.onActivated, l.onBeforeMount, l.onBeforeUnmount, l.onBeforeUpdate, l.onDeactivated, l.onErrorCaptured, l.onMounted, l.onRenderTracked, l.onRenderTriggered, l.onScopeDispose, l.onServerPrefetch, l.onUnmounted, l.onUpdated, l.onWatcherCleanup;
var b = l.openBlock;
l.patchProp, l.popScopeId, l.provide, l.proxyRefs, l.pushScopeId, l.queuePostFlushCb, l.reactive, l.readonly;
var x = l.ref;
l.registerRuntimeCompiler, l.render;
var ne = l.renderList, S = l.renderSlot;
l.resolveComponent, l.resolveDirective, l.resolveDynamicComponent, l.resolveFilter, l.resolveTransitionHooks, l.setBlockTracking, l.setDevtoolsHook, l.setTransitionHooks, l.shallowReactive, l.shallowReadonly, l.shallowRef, l.ssrContextKey, l.ssrUtils, l.stop;
var C = l.toDisplayString;
l.toHandlerKey, l.toHandlers, l.toRaw, l.toRef, l.toRefs, l.toValue, l.transformVNodeArgs, l.triggerRef;
var w = l.unref;
l.useAttrs, l.useCssModule, l.useCssVars, l.useHost, l.useId;
var T = l.useModel;
l.useSSRContext, l.useShadowRoot, l.useSlots, l.useTemplateRef, l.useTransitionState, l.vModelCheckbox, l.vModelDynamic, l.vModelRadio, l.vModelSelect, l.vModelText, l.vShow, l.version, l.warn, l.watch, l.watchEffect, l.watchPostEffect, l.watchSyncEffect, l.withAsyncContext;
var E = l.withCtx;
l.withDefaults, l.withDirectives, l.withKeys, l.withMemo, l.withModifiers, l.withScopeId;
//#endregion
//#region \0fate-sdk-shim:@ionic/vue
var D = globalThis.FateSDK.ionicVue;
D.IonAccordion, D.IonAccordionGroup, D.IonActionSheet, D.IonAlert, D.IonApp, D.IonAvatar, D.IonBackButton, D.IonBackdrop, D.IonBadge, D.IonBreadcrumb, D.IonBreadcrumbs;
var O = D.IonButton, k = D.IonButtons;
D.IonCard, D.IonCardContent, D.IonCardHeader, D.IonCardSubtitle, D.IonCardTitle, D.IonCheckbox, D.IonChip, D.IonCol;
var A = D.IonContent;
D.IonDatetime, D.IonDatetimeButton, D.IonFab, D.IonFabButton, D.IonFabList, D.IonFooter, D.IonGrid;
var j = D.IonHeader, M = D.IonIcon;
D.IonImg, D.IonInfiniteScroll, D.IonInfiniteScrollContent;
var re = D.IonInput;
D.IonInputOtp, D.IonInputPasswordToggle;
var N = D.IonItem;
D.IonItemDivider, D.IonItemGroup, D.IonItemOption, D.IonItemOptions, D.IonItemSliding, D.IonLabel;
var P = D.IonList;
D.IonListHeader, D.IonLoading, D.IonMenu, D.IonMenuButton, D.IonMenuToggle;
var F = D.IonModal;
D.IonNav, D.IonNavLink;
var I = D.IonNote;
D.IonPage, D.IonPicker, D.IonPickerColumn, D.IonPickerColumnOption, D.IonPickerLegacy, D.IonPopover, D.IonProgressBar, D.IonRadio, D.IonRadioGroup, D.IonRange, D.IonRefresher, D.IonRefresherContent, D.IonReorder, D.IonReorderGroup, D.IonRippleEffect, D.IonRouterOutlet, D.IonRow, D.IonSearchbar, D.IonSegment, D.IonSegmentButton, D.IonSegmentContent, D.IonSegmentView, D.IonSelect, D.IonSelectModal, D.IonSelectOption, D.IonSkeletonText, D.IonSpinner, D.IonSplitPane, D.IonTab, D.IonTabBar, D.IonTabButton, D.IonTabs, D.IonText;
var L = D.IonTextarea;
D.IonThumbnail;
var R = D.IonTitle;
D.IonToast, D.IonToggle;
var z = D.IonToolbar;
D.IonicSafeString, D.IonicSlides, D.IonicVue, D.actionSheetController, D.alertController, D.createAnimation, D.createGesture, D.getIonPageElement, D.getPlatforms, D.getTimeGivenProgression, D.iosTransitionAnimation, D.isPlatform, D.loadingController, D.mdTransitionAnimation, D.menuController, D.modalController, D.onIonViewDidEnter, D.onIonViewDidLeave, D.onIonViewWillEnter, D.onIonViewWillLeave, D.openURL, D.pickerController, D.popoverController, D.toastController, D.useBackButton, D.useIonRouter, D.useKeyboard;
//#endregion
//#region \0fate-sdk-shim:ionicons/icons
var B = globalThis.FateSDK.ionicons;
B.accessibility, B.accessibilityOutline, B.accessibilitySharp;
var V = B.add;
B.addCircle, B.addCircleOutline, B.addCircleSharp, B.addOutline, B.addSharp, B.airplane, B.airplaneOutline, B.airplaneSharp, B.alarm, B.alarmOutline, B.alarmSharp, B.albums, B.albumsOutline, B.albumsSharp, B.alert, B.alertCircle, B.alertCircleOutline, B.alertCircleSharp, B.alertOutline, B.alertSharp, B.americanFootball, B.americanFootballOutline, B.americanFootballSharp, B.analytics, B.analyticsOutline, B.analyticsSharp, B.aperture, B.apertureOutline, B.apertureSharp, B.apps, B.appsOutline, B.appsSharp, B.archive, B.archiveOutline, B.archiveSharp, B.arrowBack, B.arrowBackCircle, B.arrowBackCircleOutline, B.arrowBackCircleSharp, B.arrowBackOutline, B.arrowBackSharp, B.arrowDown, B.arrowDownCircle, B.arrowDownCircleOutline, B.arrowDownCircleSharp, B.arrowDownLeftBox, B.arrowDownLeftBoxOutline, B.arrowDownLeftBoxSharp, B.arrowDownOutline, B.arrowDownRightBox, B.arrowDownRightBoxOutline, B.arrowDownRightBoxSharp, B.arrowDownSharp, B.arrowForward, B.arrowForwardCircle, B.arrowForwardCircleOutline, B.arrowForwardCircleSharp, B.arrowForwardOutline, B.arrowForwardSharp, B.arrowRedo, B.arrowRedoCircle, B.arrowRedoCircleOutline, B.arrowRedoCircleSharp, B.arrowRedoOutline, B.arrowRedoSharp, B.arrowUndo, B.arrowUndoCircle, B.arrowUndoCircleOutline, B.arrowUndoCircleSharp, B.arrowUndoOutline, B.arrowUndoSharp, B.arrowUp, B.arrowUpCircle, B.arrowUpCircleOutline, B.arrowUpCircleSharp, B.arrowUpLeftBox, B.arrowUpLeftBoxOutline, B.arrowUpLeftBoxSharp, B.arrowUpOutline, B.arrowUpRightBox, B.arrowUpRightBoxOutline, B.arrowUpRightBoxSharp, B.arrowUpSharp, B.at, B.atCircle, B.atCircleOutline, B.atCircleSharp, B.atOutline, B.atSharp, B.attach, B.attachOutline, B.attachSharp, B.backspace, B.backspaceOutline, B.backspaceSharp, B.bag, B.bagAdd, B.bagAddOutline, B.bagAddSharp, B.bagCheck, B.bagCheckOutline, B.bagCheckSharp, B.bagHandle, B.bagHandleOutline, B.bagHandleSharp, B.bagOutline, B.bagRemove, B.bagRemoveOutline, B.bagRemoveSharp, B.bagSharp, B.balloon, B.balloonOutline, B.balloonSharp, B.ban, B.banOutline, B.banSharp, B.bandage, B.bandageOutline, B.bandageSharp, B.barChart, B.barChartOutline, B.barChartSharp, B.barbell, B.barbellOutline, B.barbellSharp, B.barcode, B.barcodeOutline, B.barcodeSharp, B.baseball, B.baseballOutline, B.baseballSharp, B.basket, B.basketOutline, B.basketSharp, B.basketball, B.basketballOutline, B.basketballSharp, B.batteryCharging, B.batteryChargingOutline, B.batteryChargingSharp, B.batteryDead, B.batteryDeadOutline, B.batteryDeadSharp, B.batteryFull, B.batteryFullOutline, B.batteryFullSharp, B.batteryHalf, B.batteryHalfOutline, B.batteryHalfSharp, B.beaker, B.beakerOutline, B.beakerSharp, B.bed, B.bedOutline, B.bedSharp, B.beer, B.beerOutline, B.beerSharp, B.bicycle, B.bicycleOutline, B.bicycleSharp, B.binoculars, B.binocularsOutline, B.binocularsSharp, B.bluetooth, B.bluetoothOutline, B.bluetoothSharp, B.boat, B.boatOutline, B.boatSharp, B.body, B.bodyOutline, B.bodySharp, B.bonfire, B.bonfireOutline, B.bonfireSharp, B.book, B.bookOutline, B.bookSharp, B.bookmark, B.bookmarkOutline, B.bookmarkSharp, B.bookmarks, B.bookmarksOutline, B.bookmarksSharp, B.bowlingBall, B.bowlingBallOutline, B.bowlingBallSharp, B.briefcase, B.briefcaseOutline, B.briefcaseSharp, B.browsers, B.browsersOutline, B.browsersSharp, B.brush, B.brushOutline, B.brushSharp, B.bug, B.bugOutline, B.bugSharp, B.build, B.buildOutline, B.buildSharp, B.bulb, B.bulbOutline, B.bulbSharp, B.bus, B.busOutline, B.busSharp, B.business, B.businessOutline, B.businessSharp, B.cafe, B.cafeOutline, B.cafeSharp, B.calculator, B.calculatorOutline, B.calculatorSharp, B.calendar, B.calendarClear, B.calendarClearOutline, B.calendarClearSharp, B.calendarNumber, B.calendarNumberOutline, B.calendarNumberSharp, B.calendarOutline, B.calendarSharp, B.call, B.callOutline, B.callSharp, B.camera, B.cameraOutline, B.cameraReverse, B.cameraReverseOutline, B.cameraReverseSharp, B.cameraSharp, B.car, B.carOutline, B.carSharp, B.carSport, B.carSportOutline, B.carSportSharp, B.card, B.cardOutline, B.cardSharp, B.caretBack, B.caretBackCircle, B.caretBackCircleOutline, B.caretBackCircleSharp, B.caretBackOutline, B.caretBackSharp, B.caretDown, B.caretDownCircle, B.caretDownCircleOutline, B.caretDownCircleSharp, B.caretDownOutline, B.caretDownSharp, B.caretForward, B.caretForwardCircle, B.caretForwardCircleOutline, B.caretForwardCircleSharp, B.caretForwardOutline, B.caretForwardSharp, B.caretUp, B.caretUpCircle, B.caretUpCircleOutline, B.caretUpCircleSharp, B.caretUpOutline, B.caretUpSharp, B.cart, B.cartOutline, B.cartSharp, B.cash, B.cashOutline, B.cashSharp, B.cellular, B.cellularOutline, B.cellularSharp, B.chatbox, B.chatboxEllipses, B.chatboxEllipsesOutline, B.chatboxEllipsesSharp, B.chatboxOutline, B.chatboxSharp, B.chatbubble, B.chatbubbleEllipses, B.chatbubbleEllipsesOutline, B.chatbubbleEllipsesSharp, B.chatbubbleOutline, B.chatbubbleSharp, B.chatbubbles, B.chatbubblesOutline, B.chatbubblesSharp, B.checkbox, B.checkboxOutline, B.checkboxSharp, B.checkmark, B.checkmarkCircle, B.checkmarkCircleOutline, B.checkmarkCircleSharp, B.checkmarkDone, B.checkmarkDoneCircle, B.checkmarkDoneCircleOutline, B.checkmarkDoneCircleSharp, B.checkmarkDoneOutline, B.checkmarkDoneSharp, B.checkmarkOutline, B.checkmarkSharp, B.chevronBack, B.chevronBackCircle, B.chevronBackCircleOutline, B.chevronBackCircleSharp, B.chevronBackOutline, B.chevronBackSharp, B.chevronCollapse, B.chevronCollapseOutline, B.chevronCollapseSharp, B.chevronDown, B.chevronDownCircle, B.chevronDownCircleOutline, B.chevronDownCircleSharp, B.chevronDownOutline, B.chevronDownSharp, B.chevronExpand, B.chevronExpandOutline, B.chevronExpandSharp, B.chevronForward, B.chevronForwardCircle, B.chevronForwardCircleOutline, B.chevronForwardCircleSharp, B.chevronForwardOutline, B.chevronForwardSharp, B.chevronUp, B.chevronUpCircle, B.chevronUpCircleOutline, B.chevronUpCircleSharp, B.chevronUpOutline, B.chevronUpSharp, B.clipboard, B.clipboardOutline, B.clipboardSharp;
var H = B.close;
B.closeCircle, B.closeCircleOutline, B.closeCircleSharp, B.closeOutline, B.closeSharp, B.cloud, B.cloudCircle, B.cloudCircleOutline, B.cloudCircleSharp, B.cloudDone, B.cloudDoneOutline, B.cloudDoneSharp, B.cloudDownload, B.cloudDownloadOutline, B.cloudDownloadSharp, B.cloudOffline, B.cloudOfflineOutline, B.cloudOfflineSharp, B.cloudOutline, B.cloudSharp, B.cloudUpload, B.cloudUploadOutline, B.cloudUploadSharp, B.cloudy, B.cloudyNight, B.cloudyNightOutline, B.cloudyNightSharp, B.cloudyOutline, B.cloudySharp, B.code, B.codeDownload, B.codeDownloadOutline, B.codeDownloadSharp, B.codeOutline, B.codeSharp, B.codeSlash, B.codeSlashOutline, B.codeSlashSharp, B.codeWorking, B.codeWorkingOutline, B.codeWorkingSharp, B.cog, B.cogOutline, B.cogSharp, B.colorFill, B.colorFillOutline, B.colorFillSharp, B.colorFilter, B.colorFilterOutline, B.colorFilterSharp, B.colorPalette, B.colorPaletteOutline, B.colorPaletteSharp, B.colorWand, B.colorWandOutline, B.colorWandSharp, B.compass, B.compassOutline, B.compassSharp, B.construct, B.constructOutline, B.constructSharp, B.contract, B.contractOutline, B.contractSharp, B.contrast, B.contrastOutline, B.contrastSharp, B.copy, B.copyOutline, B.copySharp, B.create, B.createOutline, B.createSharp, B.crop, B.cropOutline, B.cropSharp, B.cube, B.cubeOutline, B.cubeSharp, B.cut, B.cutOutline, B.cutSharp, B.desktop, B.desktopOutline, B.desktopSharp, B.diamond, B.diamondOutline, B.diamondSharp, B.dice, B.diceOutline, B.diceSharp, B.disc, B.discOutline, B.discSharp, B.document, B.documentAttach, B.documentAttachOutline, B.documentAttachSharp, B.documentLock, B.documentLockOutline, B.documentLockSharp, B.documentOutline, B.documentSharp, B.documentText, B.documentTextOutline, B.documentTextSharp, B.documents, B.documentsOutline, B.documentsSharp, B.download, B.downloadOutline, B.downloadSharp, B.duplicate, B.duplicateOutline, B.duplicateSharp, B.ear, B.earOutline, B.earSharp, B.earth, B.earthOutline, B.earthSharp, B.easel, B.easelOutline, B.easelSharp, B.egg, B.eggOutline, B.eggSharp, B.ellipse, B.ellipseOutline, B.ellipseSharp, B.ellipsisHorizontal, B.ellipsisHorizontalCircle, B.ellipsisHorizontalCircleOutline, B.ellipsisHorizontalCircleSharp, B.ellipsisHorizontalOutline, B.ellipsisHorizontalSharp, B.ellipsisVertical, B.ellipsisVerticalCircle, B.ellipsisVerticalCircleOutline, B.ellipsisVerticalCircleSharp, B.ellipsisVerticalOutline, B.ellipsisVerticalSharp, B.enter, B.enterOutline, B.enterSharp, B.exit, B.exitOutline, B.exitSharp, B.expand, B.expandOutline, B.expandSharp, B.extensionPuzzle, B.extensionPuzzleOutline, B.extensionPuzzleSharp, B.eye, B.eyeOff, B.eyeOffOutline, B.eyeOffSharp, B.eyeOutline, B.eyeSharp, B.eyedrop, B.eyedropOutline, B.eyedropSharp, B.fastFood, B.fastFoodOutline, B.fastFoodSharp, B.female, B.femaleOutline, B.femaleSharp, B.fileTray, B.fileTrayFull, B.fileTrayFullOutline, B.fileTrayFullSharp, B.fileTrayOutline, B.fileTraySharp, B.fileTrayStacked, B.fileTrayStackedOutline, B.fileTrayStackedSharp, B.film, B.filmOutline, B.filmSharp, B.filter, B.filterCircle, B.filterCircleOutline, B.filterCircleSharp, B.filterOutline, B.filterSharp, B.fingerPrint, B.fingerPrintOutline, B.fingerPrintSharp, B.fish, B.fishOutline, B.fishSharp, B.fitness, B.fitnessOutline, B.fitnessSharp, B.flag, B.flagOutline, B.flagSharp, B.flame, B.flameOutline, B.flameSharp, B.flash, B.flashOff, B.flashOffOutline, B.flashOffSharp, B.flashOutline, B.flashSharp, B.flashlight, B.flashlightOutline, B.flashlightSharp, B.flask, B.flaskOutline, B.flaskSharp, B.flower, B.flowerOutline, B.flowerSharp, B.folder, B.folderOpen, B.folderOpenOutline, B.folderOpenSharp, B.folderOutline, B.folderSharp, B.football, B.footballOutline, B.footballSharp, B.footsteps, B.footstepsOutline, B.footstepsSharp, B.funnel, B.funnelOutline, B.funnelSharp, B.gameController, B.gameControllerOutline, B.gameControllerSharp, B.gift, B.giftOutline, B.giftSharp, B.gitBranch, B.gitBranchOutline, B.gitBranchSharp, B.gitCommit, B.gitCommitOutline, B.gitCommitSharp, B.gitCompare, B.gitCompareOutline, B.gitCompareSharp, B.gitMerge, B.gitMergeOutline, B.gitMergeSharp, B.gitNetwork, B.gitNetworkOutline, B.gitNetworkSharp, B.gitPullRequest, B.gitPullRequestOutline, B.gitPullRequestSharp, B.glasses, B.glassesOutline, B.glassesSharp, B.globe, B.globeOutline, B.globeSharp, B.golf, B.golfOutline, B.golfSharp, B.grid, B.gridOutline, B.gridSharp, B.hammer, B.hammerOutline, B.hammerSharp, B.handLeft, B.handLeftOutline, B.handLeftSharp, B.handRight, B.handRightOutline, B.handRightSharp, B.happy, B.happyOutline, B.happySharp, B.hardwareChip, B.hardwareChipOutline, B.hardwareChipSharp, B.headset, B.headsetOutline, B.headsetSharp, B.heart, B.heartCircle, B.heartCircleOutline, B.heartCircleSharp, B.heartDislike, B.heartDislikeCircle, B.heartDislikeCircleOutline, B.heartDislikeCircleSharp, B.heartDislikeOutline, B.heartDislikeSharp, B.heartHalf, B.heartHalfOutline, B.heartHalfSharp, B.heartOutline, B.heartSharp, B.help, B.helpBuoy, B.helpBuoyOutline, B.helpBuoySharp, B.helpCircle, B.helpCircleOutline, B.helpCircleSharp, B.helpOutline, B.helpSharp, B.home, B.homeOutline, B.homeSharp, B.hourglass, B.hourglassOutline, B.hourglassSharp, B.iceCream, B.iceCreamOutline, B.iceCreamSharp, B.idCard, B.idCardOutline, B.idCardSharp, B.image, B.imageOutline, B.imageSharp, B.images, B.imagesOutline, B.imagesSharp, B.infinite, B.infiniteOutline, B.infiniteSharp, B.information, B.informationCircle, B.informationCircleOutline, B.informationCircleSharp, B.informationOutline, B.informationSharp, B.invertMode, B.invertModeOutline, B.invertModeSharp, B.journal, B.journalOutline, B.journalSharp, B.key, B.keyOutline, B.keySharp, B.keypad, B.keypadOutline, B.keypadSharp, B.language, B.languageOutline, B.languageSharp, B.laptop, B.laptopOutline, B.laptopSharp, B.layers, B.layersOutline, B.layersSharp, B.leaf, B.leafOutline, B.leafSharp, B.library, B.libraryOutline, B.librarySharp, B.link, B.linkOutline, B.linkSharp, B.list, B.listCircle, B.listCircleOutline, B.listCircleSharp, B.listOutline, B.listSharp, B.locate, B.locateOutline, B.locateSharp, B.location, B.locationOutline, B.locationSharp, B.lockClosed, B.lockClosedOutline, B.lockClosedSharp, B.lockOpen, B.lockOpenOutline, B.lockOpenSharp, B.logIn, B.logInOutline, B.logInSharp, B.logOut, B.logOutOutline, B.logOutSharp, B.logoAlipay, B.logoAmazon, B.logoAmplify, B.logoAndroid, B.logoAngular, B.logoAppflow, B.logoApple, B.logoAppleAppstore, B.logoAppleAr, B.logoBehance, B.logoBitbucket, B.logoBitcoin, B.logoBuffer, B.logoCapacitor, B.logoChrome, B.logoClosedCaptioning, B.logoCodepen, B.logoCss3, B.logoDesignernews, B.logoDeviantart, B.logoDiscord, B.logoDocker, B.logoDribbble, B.logoDropbox, B.logoEdge, B.logoElectron, B.logoEuro, B.logoFacebook, B.logoFigma, B.logoFirebase, B.logoFirefox, B.logoFlickr, B.logoFoursquare, B.logoGithub, B.logoGitlab, B.logoGoogle, B.logoGooglePlaystore, B.logoHackernews, B.logoHtml5, B.logoInstagram, B.logoIonic, B.logoIonitron, B.logoJavascript, B.logoLaravel, B.logoLinkedin, B.logoMarkdown, B.logoMastodon, B.logoMedium, B.logoMicrosoft, B.logoNoSmoking, B.logoNodejs, B.logoNpm, B.logoOctocat, B.logoPaypal, B.logoPinterest, B.logoPlaystation, B.logoPwa, B.logoPython, B.logoReact, B.logoReddit, B.logoRss, B.logoSass, B.logoSkype, B.logoSlack, B.logoSnapchat, B.logoSoundcloud, B.logoStackoverflow, B.logoSteam, B.logoStencil, B.logoTableau, B.logoThreads, B.logoTiktok, B.logoTrapeze, B.logoTumblr, B.logoTux, B.logoTwitch, B.logoTwitter, B.logoUsd, B.logoVenmo, B.logoVercel, B.logoVimeo, B.logoVk, B.logoVue, B.logoWebComponent, B.logoWechat, B.logoWhatsapp, B.logoWindows, B.logoWordpress, B.logoX, B.logoXbox, B.logoXing, B.logoYahoo, B.logoYen, B.logoYoutube, B.magnet, B.magnetOutline, B.magnetSharp, B.mail, B.mailOpen, B.mailOpenOutline, B.mailOpenSharp, B.mailOutline, B.mailSharp, B.mailUnread, B.mailUnreadOutline, B.mailUnreadSharp, B.male, B.maleFemale, B.maleFemaleOutline, B.maleFemaleSharp, B.maleOutline, B.maleSharp, B.man, B.manOutline, B.manSharp, B.map, B.mapOutline, B.mapSharp, B.medal, B.medalOutline, B.medalSharp, B.medical, B.medicalOutline, B.medicalSharp, B.medkit, B.medkitOutline, B.medkitSharp, B.megaphone, B.megaphoneOutline, B.megaphoneSharp, B.menu, B.menuOutline, B.menuSharp, B.mic, B.micCircle, B.micCircleOutline, B.micCircleSharp, B.micOff, B.micOffCircle, B.micOffCircleOutline, B.micOffCircleSharp, B.micOffOutline, B.micOffSharp, B.micOutline, B.micSharp, B.moon, B.moonOutline, B.moonSharp, B.move, B.moveOutline, B.moveSharp, B.musicalNote, B.musicalNoteOutline, B.musicalNoteSharp, B.musicalNotes, B.musicalNotesOutline, B.musicalNotesSharp, B.navigate, B.navigateCircle, B.navigateCircleOutline, B.navigateCircleSharp, B.navigateOutline, B.navigateSharp, B.newspaper, B.newspaperOutline, B.newspaperSharp, B.notifications, B.notificationsCircle, B.notificationsCircleOutline, B.notificationsCircleSharp, B.notificationsOff, B.notificationsOffCircle, B.notificationsOffCircleOutline, B.notificationsOffCircleSharp, B.notificationsOffOutline, B.notificationsOffSharp, B.notificationsOutline, B.notificationsSharp, B.nuclear, B.nuclearOutline, B.nuclearSharp, B.nutrition, B.nutritionOutline, B.nutritionSharp, B.open, B.openOutline, B.openSharp, B.options, B.optionsOutline, B.optionsSharp, B.paperPlane, B.paperPlaneOutline, B.paperPlaneSharp, B.partlySunny, B.partlySunnyOutline, B.partlySunnySharp, B.pause, B.pauseCircle, B.pauseCircleOutline, B.pauseCircleSharp, B.pauseOutline, B.pauseSharp, B.paw, B.pawOutline, B.pawSharp, B.pencil, B.pencilOutline, B.pencilSharp, B.people, B.peopleCircle, B.peopleCircleOutline, B.peopleCircleSharp, B.peopleOutline, B.peopleSharp, B.person, B.personAdd, B.personAddOutline, B.personAddSharp, B.personCircle, B.personCircleOutline, B.personCircleSharp, B.personOutline, B.personRemove, B.personRemoveOutline, B.personRemoveSharp, B.personSharp, B.phoneLandscape, B.phoneLandscapeOutline, B.phoneLandscapeSharp, B.phonePortrait, B.phonePortraitOutline, B.phonePortraitSharp, B.pieChart, B.pieChartOutline, B.pieChartSharp, B.pin, B.pinOutline, B.pinSharp, B.pint, B.pintOutline, B.pintSharp, B.pizza, B.pizzaOutline, B.pizzaSharp, B.planet, B.planetOutline, B.planetSharp, B.play, B.playBack, B.playBackCircle, B.playBackCircleOutline, B.playBackCircleSharp, B.playBackOutline, B.playBackSharp, B.playCircle, B.playCircleOutline, B.playCircleSharp, B.playForward, B.playForwardCircle, B.playForwardCircleOutline, B.playForwardCircleSharp, B.playForwardOutline, B.playForwardSharp, B.playOutline, B.playSharp, B.playSkipBack, B.playSkipBackCircle, B.playSkipBackCircleOutline, B.playSkipBackCircleSharp, B.playSkipBackOutline, B.playSkipBackSharp, B.playSkipForward, B.playSkipForwardCircle, B.playSkipForwardCircleOutline, B.playSkipForwardCircleSharp, B.playSkipForwardOutline, B.playSkipForwardSharp, B.podium, B.podiumOutline, B.podiumSharp, B.power, B.powerOutline, B.powerSharp, B.pricetag, B.pricetagOutline, B.pricetagSharp, B.pricetags, B.pricetagsOutline, B.pricetagsSharp, B.print, B.printOutline, B.printSharp, B.prism, B.prismOutline, B.prismSharp, B.pulse, B.pulseOutline, B.pulseSharp, B.push, B.pushOutline, B.pushSharp, B.qrCode, B.qrCodeOutline, B.qrCodeSharp, B.radio, B.radioButtonOff, B.radioButtonOffOutline, B.radioButtonOffSharp, B.radioButtonOn, B.radioButtonOnOutline, B.radioButtonOnSharp, B.radioOutline, B.radioSharp, B.rainy, B.rainyOutline, B.rainySharp, B.reader, B.readerOutline, B.readerSharp, B.receipt, B.receiptOutline, B.receiptSharp, B.recording, B.recordingOutline, B.recordingSharp, B.refresh, B.refreshCircle, B.refreshCircleOutline, B.refreshCircleSharp, B.refreshOutline, B.refreshSharp, B.reload, B.reloadCircle, B.reloadCircleOutline, B.reloadCircleSharp, B.reloadOutline, B.reloadSharp, B.remove, B.removeCircle, B.removeCircleOutline, B.removeCircleSharp, B.removeOutline, B.removeSharp, B.reorderFour, B.reorderFourOutline, B.reorderFourSharp, B.reorderThree, B.reorderThreeOutline, B.reorderThreeSharp, B.reorderTwo, B.reorderTwoOutline, B.reorderTwoSharp, B.repeat, B.repeatOutline, B.repeatSharp, B.resize, B.resizeOutline, B.resizeSharp, B.restaurant, B.restaurantOutline, B.restaurantSharp, B.returnDownBack, B.returnDownBackOutline, B.returnDownBackSharp, B.returnDownForward, B.returnDownForwardOutline, B.returnDownForwardSharp, B.returnUpBack, B.returnUpBackOutline, B.returnUpBackSharp, B.returnUpForward, B.returnUpForwardOutline, B.returnUpForwardSharp, B.ribbon, B.ribbonOutline, B.ribbonSharp, B.rocket, B.rocketOutline, B.rocketSharp, B.rose, B.roseOutline, B.roseSharp, B.sad, B.sadOutline, B.sadSharp, B.save, B.saveOutline, B.saveSharp, B.scale, B.scaleOutline, B.scaleSharp, B.scan, B.scanCircle, B.scanCircleOutline, B.scanCircleSharp, B.scanOutline, B.scanSharp, B.school, B.schoolOutline, B.schoolSharp, B.search, B.searchCircle, B.searchCircleOutline, B.searchCircleSharp, B.searchOutline, B.searchSharp, B.send, B.sendOutline, B.sendSharp, B.server, B.serverOutline, B.serverSharp, B.settings, B.settingsOutline, B.settingsSharp, B.shapes, B.shapesOutline, B.shapesSharp, B.share, B.shareOutline, B.shareSharp, B.shareSocial, B.shareSocialOutline, B.shareSocialSharp, B.shield, B.shieldCheckmark, B.shieldCheckmarkOutline, B.shieldCheckmarkSharp, B.shieldHalf, B.shieldHalfOutline, B.shieldHalfSharp, B.shieldOutline, B.shieldSharp, B.shirt, B.shirtOutline, B.shirtSharp, B.shuffle, B.shuffleOutline, B.shuffleSharp, B.skull, B.skullOutline, B.skullSharp, B.snow, B.snowOutline, B.snowSharp, B.sparkles, B.sparklesOutline, B.sparklesSharp, B.speedometer, B.speedometerOutline, B.speedometerSharp, B.square, B.squareOutline, B.squareSharp, B.star, B.starHalf, B.starHalfOutline, B.starHalfSharp, B.starOutline, B.starSharp, B.statsChart, B.statsChartOutline, B.statsChartSharp, B.stop, B.stopCircle, B.stopCircleOutline, B.stopCircleSharp, B.stopOutline, B.stopSharp, B.stopwatch, B.stopwatchOutline, B.stopwatchSharp, B.storefront, B.storefrontOutline, B.storefrontSharp, B.subway, B.subwayOutline, B.subwaySharp, B.sunny, B.sunnyOutline, B.sunnySharp, B.swapHorizontal, B.swapHorizontalOutline, B.swapHorizontalSharp, B.swapVertical, B.swapVerticalOutline, B.swapVerticalSharp, B.sync, B.syncCircle, B.syncCircleOutline, B.syncCircleSharp, B.syncOutline, B.syncSharp, B.tabletLandscape, B.tabletLandscapeOutline, B.tabletLandscapeSharp, B.tabletPortrait, B.tabletPortraitOutline, B.tabletPortraitSharp, B.telescope, B.telescopeOutline, B.telescopeSharp, B.tennisball, B.tennisballOutline, B.tennisballSharp, B.terminal, B.terminalOutline, B.terminalSharp, B.text, B.textOutline, B.textSharp, B.thermometer, B.thermometerOutline, B.thermometerSharp, B.thumbsDown, B.thumbsDownOutline, B.thumbsDownSharp, B.thumbsUp, B.thumbsUpOutline, B.thumbsUpSharp, B.thunderstorm, B.thunderstormOutline, B.thunderstormSharp, B.ticket, B.ticketOutline, B.ticketSharp, B.time, B.timeOutline, B.timeSharp, B.timer, B.timerOutline, B.timerSharp, B.today, B.todayOutline, B.todaySharp, B.toggle, B.toggleOutline, B.toggleSharp, B.trailSign, B.trailSignOutline, B.trailSignSharp, B.train, B.trainOutline, B.trainSharp, B.transgender, B.transgenderOutline, B.transgenderSharp, B.trash, B.trashBin, B.trashBinOutline, B.trashBinSharp, B.trashOutline, B.trashSharp, B.trendingDown, B.trendingDownOutline, B.trendingDownSharp, B.trendingUp, B.trendingUpOutline, B.trendingUpSharp, B.triangle, B.triangleOutline, B.triangleSharp, B.trophy, B.trophyOutline, B.trophySharp, B.tv, B.tvOutline, B.tvSharp, B.umbrella, B.umbrellaOutline, B.umbrellaSharp, B.unlink, B.unlinkOutline, B.unlinkSharp, B.videocam, B.videocamOff, B.videocamOffOutline, B.videocamOffSharp, B.videocamOutline, B.videocamSharp, B.volumeHigh, B.volumeHighOutline, B.volumeHighSharp, B.volumeLow, B.volumeLowOutline, B.volumeLowSharp, B.volumeMedium, B.volumeMediumOutline, B.volumeMediumSharp, B.volumeMute, B.volumeMuteOutline, B.volumeMuteSharp, B.volumeOff, B.volumeOffOutline, B.volumeOffSharp, B.walk, B.walkOutline, B.walkSharp, B.wallet, B.walletOutline, B.walletSharp, B.warning, B.warningOutline, B.warningSharp, B.watch, B.watchOutline, B.watchSharp, B.water, B.waterOutline, B.waterSharp, B.wifi, B.wifiOutline, B.wifiSharp, B.wine, B.wineOutline, B.wineSharp, B.woman, B.womanOutline, B.womanSharp;
//#endregion
//#region src/components/parts/Modal.vue?vue&type=script&setup=true&lang.ts
var U = {
	key: 0,
	class: "sheet-body"
}, W = /*@__PURE__*/ v({
	__name: "Modal",
	props: /*@__PURE__*/ ee({
		title: { default: "" },
		sheet: {
			type: Boolean,
			default: !1
		},
		autoHeight: {
			type: Boolean,
			default: !0
		},
		breakpoints: { default: () => [0, 1] },
		initialBreakpoint: { default: 1 }
	}, {
		modelValue: {
			type: Boolean,
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = x(), n = T(e, "modelValue"), r = d(() => e.sheet && e.autoHeight ? { "--height": "auto" } : {});
		return (i, a) => (b(), f(w(F), {
			ref_key: "modal",
			ref: t,
			style: te(r.value),
			"initial-breakpoint": e.sheet ? e.initialBreakpoint : void 0,
			breakpoints: e.sheet ? e.breakpoints : void 0,
			"is-open": n.value,
			onWillDismiss: a[1] ||= (e) => n.value = !1
		}, {
			default: E(() => [e.sheet ? (b(), m("div", U, [S(i.$slots, "default", {}, void 0, !0)])) : (b(), m(u, { key: 1 }, [_(w(j), null, {
				default: E(() => [_(w(z), null, {
					default: E(() => [_(w(k), { slot: "start" }, {
						default: E(() => [_(w(O), { onClick: a[0] ||= (e) => n.value = !1 }, {
							default: E(() => [_(w(M), { icon: w(H) }, null, 8, ["icon"])]),
							_: 1
						})]),
						_: 1
					}), _(w(R), null, {
						default: E(() => [g(C(e.title), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}), _(w(A), { class: "content" }, {
				default: E(() => [S(i.$slots, "default", {}, void 0, !0)]),
				_: 3
			})], 64))]),
			_: 3
		}, 8, [
			"style",
			"initial-breakpoint",
			"breakpoints",
			"is-open"
		]));
	}
}), G = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, K = /*#__PURE__*/ G(W, [["__scopeId", "data-v-039f4d1e"]]), q = globalThis.FateSDK.vueI18n;
q.DatetimeFormat, q.I18nD, q.I18nInjectionKey, q.I18nN, q.I18nT, q.NumberFormat, q.Translation, q.VERSION, q.createI18n;
var J = q.useI18n;
q.vTDirective;
//#endregion
//#region src/utils/validators.ts
function Y(e) {
	if (!e.name) return "sonder@relationships.errors.nameRequired";
	if (!e.what) return "sonder@relationships.errors.whatRequired";
}
//#endregion
//#region src/components/parts/RelationForm.vue?vue&type=script&setup=true&lang.ts
var ie = { class: "form" }, ae = { class: "actions" }, X = /*#__PURE__*/ G(/* @__PURE__ */ v({
	__name: "RelationForm",
	props: {
		relation: {},
		mode: {}
	},
	emits: ["remove", "save"],
	setup(e, { emit: t }) {
		let n = t, { t: r } = J(), i = x(e.relation ? {
			id: e.relation.id,
			name: e.relation.name,
			what: e.relation.what
		} : {
			id: crypto.randomUUID(),
			name: "",
			what: ""
		}), a = d(() => Y(i.value));
		function o() {
			n("save", i.value);
		}
		function s() {
			window.confirm(r("sonder@relationships.confirmRemove", { value: e.relation?.name ?? "" })) && n("remove");
		}
		return (t, n) => (b(), m("div", ie, [h("div", null, [_(w(P), { inset: "" }, {
			default: E(() => [_(w(N), null, {
				default: E(() => [_(w(re), {
					modelValue: i.value.name,
					"onUpdate:modelValue": n[0] ||= (e) => i.value.name = e,
					"data-testid": "relation-name-input",
					inputmode: "text",
					placeholder: t.$t("sonder@relationships.form.name.placeholder"),
					"label-placement": "fixed",
					enterkeyhint: "next",
					label: t.$t("sonder@relationships.form.name.label"),
					required: ""
				}, null, 8, [
					"modelValue",
					"placeholder",
					"label"
				])]),
				_: 1
			}), _(w(N), null, {
				default: E(() => [_(w(L), {
					modelValue: i.value.what,
					"onUpdate:modelValue": n[1] ||= (e) => i.value.what = e,
					"data-testid": "relation-what-input",
					placeholder: t.$t("sonder@relationships.form.what.placeholder"),
					inputmode: "text",
					"auto-grow": "",
					"label-placement": "fixed",
					label: t.$t("sonder@relationships.form.what.label"),
					rows: 3
				}, null, 8, [
					"modelValue",
					"placeholder",
					"label"
				])]),
				_: 1
			})]),
			_: 1
		}), a.value ? (b(), f(w(I), {
			key: 0,
			"data-testid": "relation-validation-error",
			class: "error",
			color: "danger"
		}, {
			default: E(() => [g(C(t.$t(a.value)), 1)]),
			_: 1
		})) : p("", !0)]), h("div", ae, [e.mode === "edit" ? (b(), f(w(O), {
			key: 0,
			"data-testid": "remove-relation-button",
			color: "danger",
			expand: "full",
			fill: "clear",
			onClick: s
		}, {
			default: E(() => [g(C(t.$t("sonder@relationships.actions.remove")), 1)]),
			_: 1
		})) : p("", !0), _(w(O), {
			"data-testid": "save-relation-button",
			expand: "block",
			disabled: !!a.value,
			onClick: o
		}, {
			default: E(() => [g(C(t.$t(e.mode === "edit" ? "sonder@relationships.actions.save" : "sonder@relationships.actions.add")), 1)]),
			_: 1
		}, 8, ["disabled"])])]));
	}
}), [["__scopeId", "data-v-374c89c7"]]), oe = { class: "columns" }, se = { class: "name" }, ce = { class: "what" }, le = /*#__PURE__*/ G(/* @__PURE__ */ v({
	__name: "Relation",
	props: {
		relation: {},
		isLast: { type: Boolean }
	},
	emits: ["update", "remove"],
	setup(e, { emit: t }) {
		let n = t, r = x(!1);
		function i(e) {
			r.value = !1, y(() => {
				n("update", e);
			});
		}
		function a() {
			r.value = !1, y(() => {
				n("remove");
			});
		}
		return (t, n) => (b(), m(u, null, [_(w(N), {
			button: "",
			detail: !0,
			lines: e.isLast ? "none" : "full",
			class: "row",
			"data-testid": "edit-relation-button",
			"aria-label": `${e.relation.name} ${t.$t("sonder@relationships.relation")}`,
			onClick: n[0] ||= (e) => r.value = !0
		}, {
			default: E(() => [h("div", oe, [h("span", se, C(e.relation.name), 1), h("span", ce, C(e.relation.what), 1)])]),
			_: 1
		}, 8, ["lines", "aria-label"]), _(K, {
			modelValue: r.value,
			"onUpdate:modelValue": n[1] ||= (e) => r.value = e,
			title: t.$t("sonder@relationships.edit"),
			sheet: ""
		}, {
			default: E(() => [_(X, {
				relation: e.relation,
				mode: "edit",
				onSave: i,
				onRemove: a
			}, null, 8, ["relation"])]),
			_: 1
		}, 8, ["modelValue", "title"])], 64));
	}
}), [["__scopeId", "data-v-4cbbb6fa"]]), Z = "sonder@relationships", Q = "relations";
function $(e, t) {
	i(t, Z, Q, r(t, "sonder@relationships", "relations") ?? []);
}
function ue(e, t) {
	a(t, Z);
}
function de(e, t) {}
//#endregion
//#region src/components/Relations.vue?vue&type=script&setup=true&lang.ts
var fe = ["aria-label"], pe = {
	key: 1,
	class: "empty"
}, me = e({
	components: [{
		id: "sonder@relationships-list",
		component: /* @__PURE__ */ G(/* @__PURE__ */ v({
			__name: "Relations",
			props: {
				modelValue: { required: !0 },
				modelModifiers: {}
			},
			emits: ["update:modelValue"],
			setup(e) {
				let t = T(e, "modelValue"), n = d(() => r(t.value, "sonder@relationships", "relations") ?? []), a = x(!1);
				function o(e) {
					i(t.value, Z, Q, [...n.value, e]), a.value = !1;
				}
				function s(e, r) {
					let a = [...n.value];
					a.splice(e, 1, r), i(t.value, Z, Q, a);
				}
				function l(e) {
					let r = [...n.value];
					r.splice(e, 1), i(t.value, Z, Q, r);
				}
				return (e, t) => (b(), m(u, null, [_(w(c), { title: e.$t("sonder@relationships.label") }, {
					header: E(() => [h("button", {
						type: "button",
						class: "add-button",
						"data-testid": "add-relation-button",
						"aria-label": e.$t("sonder@relationships.add"),
						onClick: t[0] ||= (e) => a.value = !0
					}, [_(w(M), { icon: w(V) }, null, 8, ["icon"])], 8, fe)]),
					default: E(() => [n.value.length ? (b(), f(w(P), {
						key: 0,
						"data-testid": "relations-list",
						class: "list"
					}, {
						default: E(() => [(b(!0), m(u, null, ne(n.value, (e, t) => (b(), f(le, {
							key: e.id,
							relation: e,
							"is-last": t === n.value.length - 1,
							onUpdate: (e) => s(t, e),
							onRemove: (e) => l(t)
						}, null, 8, [
							"relation",
							"is-last",
							"onUpdate",
							"onRemove"
						]))), 128))]),
						_: 1
					})) : (b(), m("p", pe, C(e.$t("sonder@relationships.empty")), 1))]),
					_: 1
				}, 8, ["title"]), _(K, {
					modelValue: a.value,
					"onUpdate:modelValue": t[1] ||= (e) => a.value = e,
					title: e.$t("sonder@relationships.add"),
					sheet: ""
				}, {
					default: E(() => [_(X, { onSave: o })]),
					_: 1
				}, 8, ["modelValue", "title"])], 64));
			}
		}), [["__scopeId", "data-v-b6bcd31e"]]),
		order: 1600
	}],
	onInstall: $,
	onUninstall: ue,
	onReconfigure: de
});
//#endregion
export { me as default };
