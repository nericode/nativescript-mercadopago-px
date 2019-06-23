
declare class AddCardFlow extends NSObject {

	static alloc(): AddCardFlow; // inherited from NSObject

	static new(): AddCardFlow; // inherited from NSObject

	delegate: AddCardFlowProtocol;

	constructor(o: { accessToken: string; locale: string; navigationController: UINavigationController; });

	initWithAccessTokenLocaleNavigationController(accessToken: string, locale: string, navigationController: UINavigationController): this;

	setThemeWithTheme(theme: PXTheme): void;

	start(): void;
}

interface AddCardFlowProtocol {

	addCardFlowFailedWithShouldRestart(shouldRestart: boolean): void;

	addCardFlowSuccededWithResult(result: NSDictionary<string, any>): void;
}
declare var AddCardFlowProtocol: {

	prototype: AddCardFlowProtocol;
};

declare const enum DisplayOrder {

	TOP = 0,

	BOTTOM = 1
}

declare class ErrorTypes extends NSObject {

	static alloc(): ErrorTypes; // inherited from NSObject

	static new(): ErrorTypes; // inherited from NSObject
}

declare class FSPagerView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): FSPagerView; // inherited from NSObject

	static appearance(): FSPagerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSPagerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSPagerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSPagerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSPagerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSPagerView; // inherited from UIAppearance

	static new(): FSPagerView; // inherited from NSObject

	alwaysBounceHorizontal: boolean;

	alwaysBounceVertical: boolean;

	automaticSlidingInterval: number;

	backgroundView: UIView;

	bounces: boolean;

	readonly currentIndex: number;

	dataSource: FSPagerViewDataSource;

	decelerationDistance: number;

	delegate: FSPagerViewDelegate;

	interitemSpacing: number;

	isInfinite: boolean;

	isScrollEnabled: boolean;

	readonly isTracking: boolean;

	itemSize: CGSize;

	readonly panGestureRecognizer: UIPanGestureRecognizer;

	removesInfiniteLoopForSingleItem: boolean;

	scrollDirection: ScrollDirection;

	readonly scrollOffset: number;

	transformer: FSPagerViewTransformer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cellForItemAtIndex(index: number): FSPagerViewCell;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dequeueReusableCellWithReuseIdentifierAtIndex(identifier: string, index: number): FSPagerViewCell;

	deselectItemAtIndexAnimated(index: number, animated: boolean): void;

	indexForCell(cell: FSPagerViewCell): number;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerClassForCellWithReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	registerNibForCellWithReuseIdentifier(nib: UINib, identifier: string): void;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToItemAtIndexAnimated(index: number, animated: boolean): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	selectItemAtIndexAnimated(index: number, animated: boolean): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare var FSPagerViewAutomaticDistance: number;

declare var FSPagerViewAutomaticSize: CGSize;

declare class FSPagerViewCell extends UICollectionViewCell {

	static alloc(): FSPagerViewCell; // inherited from NSObject

	static appearance(): FSPagerViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FSPagerViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FSPagerViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSPagerViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FSPagerViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FSPagerViewCell; // inherited from UIAppearance

	static new(): FSPagerViewCell; // inherited from NSObject

	readonly imageView: UIImageView;

	readonly textLabel: UILabel;
}

interface FSPagerViewDataSource extends NSObjectProtocol {

	numberOfItemsInPagerView(pagerView: FSPagerView): number;

	pagerViewCellForItemAtIndex(pagerView: FSPagerView, index: number): FSPagerViewCell;
}
declare var FSPagerViewDataSource: {

	prototype: FSPagerViewDataSource;
};

interface FSPagerViewDelegate extends NSObjectProtocol {

	pagerViewDidEndDecelerating?(pagerView: FSPagerView): void;

	pagerViewDidEndDisplayingCellForItemAtIndex?(pagerView: FSPagerView, cell: FSPagerViewCell, index: number): void;

	pagerViewDidEndScrollAnimation?(pagerView: FSPagerView): void;

	pagerViewDidHighlightItemAtIndex?(pagerView: FSPagerView, index: number): void;

	pagerViewDidScroll?(pagerView: FSPagerView): void;

	pagerViewDidSelectItemAtIndex?(pagerView: FSPagerView, index: number): void;

	pagerViewShouldHighlightItemAtIndex?(pagerView: FSPagerView, index: number): boolean;

	pagerViewShouldSelectItemAtIndex?(pagerView: FSPagerView, index: number): boolean;

	pagerViewWillBeginDragging?(pagerView: FSPagerView): void;

	pagerViewWillDisplayCellForItemAtIndex?(pagerView: FSPagerView, cell: FSPagerViewCell, index: number): void;

	pagerViewWillEndDraggingTargetIndex?(pagerView: FSPagerView, targetIndex: number): void;
}
declare var FSPagerViewDelegate: {

	prototype: FSPagerViewDelegate;
};

declare class FSPagerViewLayoutAttributes extends UICollectionViewLayoutAttributes {

	static alloc(): FSPagerViewLayoutAttributes; // inherited from NSObject

	static layoutAttributesForCellWithIndexPath(indexPath: NSIndexPath): FSPagerViewLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForDecorationViewOfKindWithIndexPath(decorationViewKind: string, indexPath: NSIndexPath): FSPagerViewLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForSupplementaryViewOfKindWithIndexPath(elementKind: string, indexPath: NSIndexPath): FSPagerViewLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static new(): FSPagerViewLayoutAttributes; // inherited from NSObject
}

declare class FSPagerViewTransformer extends NSObject {

	static alloc(): FSPagerViewTransformer; // inherited from NSObject

	static new(): FSPagerViewTransformer; // inherited from NSObject

	constructor(o: { type: FSPagerViewTransformerType; });

	initWithType(type: FSPagerViewTransformerType): this;
}

declare const enum FSPagerViewTransformerType {

	CrossFading = 0,

	ZoomOut = 1,

	Depth = 2,

	Overlap = 3,

	Linear = 4,

	CoverFlow = 5,

	FerrisWheel = 6,

	InvertedFerrisWheel = 7,

	Cubic = 8
}

declare class IdentificationType extends NSObject {

	static alloc(): IdentificationType; // inherited from NSObject

	static new(): IdentificationType; // inherited from NSObject

	identificationTypeId: string;

	maxLength: number;

	minLength: number;

	name: string;

	type: string;
}

declare class MercadoPagoCheckout extends NSObject {

	static alloc(): MercadoPagoCheckout; // inherited from NSObject

	static new(): MercadoPagoCheckout; // inherited from NSObject

	constructor(o: { builder: MercadoPagoCheckoutBuilder; });

	initWithBuilder(builder: MercadoPagoCheckoutBuilder): this;

	startWithLazyInitProtocol(lazyInitProtocol: PXLazyInitProtocol): void;

	startWithNavigationControllerLifeCycleProtocol(navigationController: UINavigationController, lifeCycleProtocol: PXLifeCycleProtocol): void;
}

declare class MercadoPagoCheckoutBuilder extends NSObject {

	static alloc(): MercadoPagoCheckoutBuilder; // inherited from NSObject

	static new(): MercadoPagoCheckoutBuilder; // inherited from NSObject

	constructor(o: { publicKey: string; checkoutPreference: PXCheckoutPreference; paymentConfiguration: PXPaymentConfiguration; });

	constructor(o: { publicKey: string; preferenceId: string; });

	constructor(o: { publicKey: string; preferenceId: string; paymentConfiguration: PXPaymentConfiguration; });

	initWithPublicKeyCheckoutPreferencePaymentConfiguration(publicKey: string, checkoutPreference: PXCheckoutPreference, paymentConfiguration: PXPaymentConfiguration): this;

	initWithPublicKeyPreferenceId(publicKey: string, preferenceId: string): this;

	initWithPublicKeyPreferenceIdPaymentConfiguration(publicKey: string, preferenceId: string, paymentConfiguration: PXPaymentConfiguration): this;

	setAdvancedConfigurationWithConfig(config: PXAdvancedConfiguration): MercadoPagoCheckoutBuilder;

	setColorWithCheckoutColor(checkoutColor: UIColor): MercadoPagoCheckoutBuilder;

	setLanguage(string: string): MercadoPagoCheckoutBuilder;

	setPrivateKeyWithKey(key: string): MercadoPagoCheckoutBuilder;
}

declare var MercadoPagoSDKVersionNumber: number;

declare var MercadoPagoSDKVersionNumberVar: number;

declare var MercadoPagoSDKVersionString: interop.Reference<number>;

declare var MercadoPagoSDKVersionStringVar: interop.Reference<number>;

declare class PXAccountMoneyDto extends NSObject {

	static alloc(): PXAccountMoneyDto; // inherited from NSObject

	static new(): PXAccountMoneyDto; // inherited from NSObject
}

declare class PXAction extends NSObject {

	static alloc(): PXAction; // inherited from NSObject

	static new(): PXAction; // inherited from NSObject

	constructor(o: { label: string; action: () => void; });

	initWithLabelAction(label: string, action: () => void): this;
}

declare class PXAddress extends NSObject {

	static alloc(): PXAddress; // inherited from NSObject

	static new(): PXAddress; // inherited from NSObject
}

declare class PXAdvancedConfiguration extends NSObject {

	static alloc(): PXAdvancedConfiguration; // inherited from NSObject

	static new(): PXAdvancedConfiguration; // inherited from NSObject

	amountRowEnabled: boolean;

	bankDealsEnabled: boolean;

	discountParamsConfiguration: PXDiscountParamsConfiguration;

	dynamicViewControllersConfiguration: NSArray<PXDynamicViewControllerProtocol>;

	escEnabled: boolean;

	expressEnabled: boolean;

	paymentResultConfiguration: PXPaymentResultConfiguration;

	reviewConfirmConfiguration: PXReviewConfirmConfiguration;

	reviewConfirmDynamicViewsConfiguration: PXReviewConfirmDynamicViewsConfiguration;

	theme: PXTheme;
}

declare class PXAmountConfiguration extends NSObject {

	static alloc(): PXAmountConfiguration; // inherited from NSObject

	static new(): PXAmountConfiguration; // inherited from NSObject
}

declare class PXAmountInfo extends NSObject {

	static alloc(): PXAmountInfo; // inherited from NSObject

	static new(): PXAmountInfo; // inherited from NSObject
}

declare class PXApiException extends NSObject {

	static alloc(): PXApiException; // inherited from NSObject

	static new(): PXApiException; // inherited from NSObject
}

declare class PXBankDeal extends NSObject {

	static alloc(): PXBankDeal; // inherited from NSObject

	static new(): PXBankDeal; // inherited from NSObject
}

interface PXBasePayment extends PXResult {

	getPaymentMethodId(): string;

	getPaymentMethodTypeId(): string;
}
declare var PXBasePayment: {

	prototype: PXBasePayment;
};

declare class PXBin extends NSObject {

	static alloc(): PXBin; // inherited from NSObject

	static new(): PXBin; // inherited from NSObject
}

declare class PXBusinessResult extends NSObject implements PXBasePayment {

	static alloc(): PXBusinessResult; // inherited from NSObject

	static new(): PXBusinessResult; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { receiptId: string; status: PXBusinessResultStatus; title: string; subtitle: string; icon: UIImage; mainAction: PXAction; secondaryAction: PXAction; helpMessage: string; showPaymentMethod: boolean; statementDescription: string; imageUrl: string; topCustomView: UIView; bottomCustomView: UIView; paymentStatus: string; paymentStatusDetail: string; });

	constructor(o: { receiptId: string; status: PXBusinessResultStatus; title: string; subtitle: string; icon: UIImage; mainAction: PXAction; secondaryAction: PXAction; helpMessage: string; showPaymentMethod: boolean; statementDescription: string; imageUrl: string; topCustomView: UIView; bottomCustomView: UIView; paymentStatus: string; paymentStatusDetail: string; paymentMethodId: string; paymentTypeId: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getPaymentId(): string;

	getPaymentMethodId(): string;

	getPaymentMethodTypeId(): string;

	getStatus(): string;

	getStatusDetail(): string;

	initWithReceiptIdStatusTitleSubtitleIconMainActionSecondaryActionHelpMessageShowPaymentMethodStatementDescriptionImageUrlTopCustomViewBottomCustomViewPaymentStatusPaymentStatusDetail(receiptId: string, status: PXBusinessResultStatus, title: string, subtitle: string, icon: UIImage, mainAction: PXAction, secondaryAction: PXAction, helpMessage: string, showPaymentMethod: boolean, statementDescription: string, imageUrl: string, topCustomView: UIView, bottomCustomView: UIView, paymentStatus: string, paymentStatusDetail: string): this;

	initWithReceiptIdStatusTitleSubtitleIconMainActionSecondaryActionHelpMessageShowPaymentMethodStatementDescriptionImageUrlTopCustomViewBottomCustomViewPaymentStatusPaymentStatusDetailPaymentMethodIdPaymentTypeId(receiptId: string, status: PXBusinessResultStatus, title: string, subtitle: string, icon: UIImage, mainAction: PXAction, secondaryAction: PXAction, helpMessage: string, showPaymentMethod: boolean, statementDescription: string, imageUrl: string, topCustomView: UIView, bottomCustomView: UIView, paymentStatus: string, paymentStatusDetail: string, paymentMethodId: string, paymentTypeId: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum PXBusinessResultStatus {

	APPROVED = 0,

	REJECTED = 1,

	PENDING = 2,

	IN_PROGRESS = 3
}

declare class PXCampaign extends NSObject {

	static alloc(): PXCampaign; // inherited from NSObject

	static new(): PXCampaign; // inherited from NSObject

	constructor(o: { id: number; code: string; maxRedeemPerUser: number; name: string; maxCouponAmount: number; endDate: Date; });

	constructor(o: { id: number; code: string; name: string; maxCouponAmount: number; });

	getId(): number;

	initWithIdCodeMaxRedeemPerUserNameMaxCouponAmountEndDate(id: number, code: string, maxRedeemPerUser: number, name: string, maxCouponAmount: number, endDate: Date): this;

	initWithIdCodeNameMaxCouponAmount(id: number, code: string, name: string, maxCouponAmount: number): this;
}

declare class PXCard extends NSObject {

	static alloc(): PXCard; // inherited from NSObject

	static new(): PXCard; // inherited from NSObject
}

declare class PXCardDisplayInfoDto extends NSObject {

	static alloc(): PXCardDisplayInfoDto; // inherited from NSObject

	static new(): PXCardDisplayInfoDto; // inherited from NSObject
}

declare class PXCardHolder extends NSObject {

	static alloc(): PXCardHolder; // inherited from NSObject

	static new(): PXCardHolder; // inherited from NSObject
}

declare class PXCardNumber extends NSObject {

	static alloc(): PXCardNumber; // inherited from NSObject

	static new(): PXCardNumber; // inherited from NSObject
}

declare class PXCardToken extends NSObject {

	static alloc(): PXCardToken; // inherited from NSObject

	static new(): PXCardToken; // inherited from NSObject
}

declare class PXCause extends NSObject {

	static alloc(): PXCause; // inherited from NSObject

	static new(): PXCause; // inherited from NSObject
}

declare class PXCheckoutPreference extends NSObject {

	static alloc(): PXCheckoutPreference; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXCheckoutPreference;

	static new(): PXCheckoutPreference; // inherited from NSObject

	differentialPricing: PXDifferentialPricing;

	expirationDateFrom: Date;

	expirationDateTo: Date;

	id: string;

	items: NSArray<PXItem>;

	marketplace: string;

	payer: PXPayer;

	paymentPreference: PXPaymentPreference;

	site: PXSite;

	siteId: string;

	constructor(o: { preferenceId: string; });

	constructor(o: { siteId: string; payerEmail: string; items: NSArray<PXItem> | PXItem[]; });

	addExcludedPaymentMethod(paymentMethodId: string): void;

	addExcludedPaymentType(paymentTypeId: string): void;

	getActiveFromDate(): Date;

	getDefaultPaymentMethodId(): string;

	getExcludedPaymentMethodsIds(): NSArray<string>;

	getExcludedPaymentTypesIds(): NSArray<string>;

	getExpirationDate(): Date;

	getId(): string;

	getItems(): NSArray<PXItem>;

	getMaxAcceptedInstallments(): number;

	getSiteId(): string;

	getTotalAmount(): number;

	initWithPreferenceId(preferenceId: string): this;

	initWithSiteIdPayerEmailItems(siteId: string, payerEmail: string, items: NSArray<PXItem> | PXItem[]): this;

	isBinaryMode(): boolean;

	setActiveFromDate(date: Date): void;

	setBinaryModeWithIsBinaryMode(isBinaryMode: boolean): PXCheckoutPreference;

	setCardIdWithCardId(cardId: string): void;

	setDefaultInstallments(defaultInstallments: number): void;

	setDefaultPaymentMethodId(paymetMethodId: string): void;

	setDifferentialPricingWithDifferentialPricing(differentialPricing: PXDifferentialPricing): void;

	setExcludedPaymentMethods(paymentMethodIds: NSArray<string> | string[]): void;

	setExcludedPaymentTypes(paymentTypeIds: NSArray<string> | string[]): void;

	setExpirationDate(expirationDate: Date): void;

	setMaxInstallments(maxInstallments: number): void;

	setPayerWithPayer(payer: PXPayer): void;

	toJSONAndReturnError(): NSData;
}

declare class PXCheckoutStore extends NSObject {

	static alloc(): PXCheckoutStore; // inherited from NSObject

	static new(): PXCheckoutStore; // inherited from NSObject

	addDataForKeyValue(forKey: string, value: any): void;

	getCheckoutPreference(): PXCheckoutPreference;

	getDataForKey(forKey: string): any;

	getPaymentData(): PXPaymentData;

	getPaymentDatas(): NSArray<PXPaymentData>;

	removeAll(): void;

	removeWithKey(key: string): void;
}

declare class PXCurrencies extends NSObject {

	static alloc(): PXCurrencies; // inherited from NSObject

	static new(): PXCurrencies; // inherited from NSObject
}

declare class PXCurrency extends NSObject {

	static alloc(): PXCurrency; // inherited from NSObject

	static new(): PXCurrency; // inherited from NSObject
}

declare class PXCustomOptionSearchItem extends NSObject {

	static alloc(): PXCustomOptionSearchItem; // inherited from NSObject

	static new(): PXCustomOptionSearchItem; // inherited from NSObject
}

declare class PXCustomer extends NSObject {

	static alloc(): PXCustomer; // inherited from NSObject

	static new(): PXCustomer; // inherited from NSObject
}

declare class PXDevice extends NSObject {

	static alloc(): PXDevice; // inherited from NSObject

	static new(): PXDevice; // inherited from NSObject
}

declare class PXDeviceId extends NSObject {

	static alloc(): PXDeviceId; // inherited from NSObject

	static new(): PXDeviceId; // inherited from NSObject
}

declare class PXDifferentialPricing extends NSObject {

	static alloc(): PXDifferentialPricing; // inherited from NSObject

	static new(): PXDifferentialPricing; // inherited from NSObject
}

declare class PXDiscount extends NSObject {

	static alloc(): PXDiscount; // inherited from NSObject

	static new(): PXDiscount; // inherited from NSObject

	constructor(o: { id: string; name: string; percentOff: number; amountOff: number; couponAmount: number; currencyId: string; });

	getCouponAmount(): NSDecimalNumber;

	getId(): string;

	initWithIdNamePercentOffAmountOffCouponAmountCurrencyId(id: string, name: string, percentOff: number, amountOff: number, couponAmount: number, currencyId: string): this;
}

declare class PXDiscountConfiguration extends NSObject {

	static alloc(): PXDiscountConfiguration; // inherited from NSObject

	static initForNotAvailableDiscount(): PXDiscountConfiguration;

	static new(): PXDiscountConfiguration; // inherited from NSObject

	constructor(o: { discount: PXDiscount; campaign: PXCampaign; });

	initWithDiscountCampaign(discount: PXDiscount, campaign: PXCampaign): this;
}

declare class PXDiscountParamsConfiguration extends NSObject {

	static alloc(): PXDiscountParamsConfiguration; // inherited from NSObject

	static new(): PXDiscountParamsConfiguration; // inherited from NSObject

	constructor(o: { labels: NSArray<string> | string[]; productId: string; });

	initWithLabelsProductId(labels: NSArray<string> | string[], productId: string): this;
}

declare const enum PXDynamicViewControllerPosition {

	DID_ENTER_REVIEW_AND_CONFIRM = 0
}

interface PXDynamicViewControllerProtocol extends NSObjectProtocol {

	navigationHandlerWithNavigationHandler?(navigationHandler: PXPluginNavigationHandler): void;

	positionWithStore(store: PXCheckoutStore): PXDynamicViewControllerPosition;

	viewControllerWithStore(store: PXCheckoutStore): UIViewController;
}
declare var PXDynamicViewControllerProtocol: {

	prototype: PXDynamicViewControllerProtocol;
};

declare class PXError extends NSError {

	static alloc(): PXError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): PXError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): PXError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): PXError; // inherited from NSError

	static new(): PXError; // inherited from NSObject
}

declare class PXFeeDetail extends NSObject {

	static alloc(): PXFeeDetail; // inherited from NSObject

	static new(): PXFeeDetail; // inherited from NSObject
}

declare class PXFinancialInstitution extends NSObject {

	static alloc(): PXFinancialInstitution; // inherited from NSObject

	static new(): PXFinancialInstitution; // inherited from NSObject
}

declare class PXFingerprint extends NSObject {

	static alloc(): PXFingerprint; // inherited from NSObject

	static new(): PXFingerprint; // inherited from NSObject
}

declare class PXGenericPayment extends NSObject implements PXBasePayment {

	static alloc(): PXGenericPayment; // inherited from NSObject

	static new(): PXGenericPayment; // inherited from NSObject

	readonly paymentId: string;

	readonly paymentMethodId: string;

	readonly paymentMethodTypeId: string;

	readonly status: string;

	readonly statusDetail: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { paymentStatus: RemotePaymentStatus; statusDetail: string; receiptId: string; });

	constructor(o: { status: string; statusDetail: string; paymentId: string; });

	constructor(o: { status: string; statusDetail: string; paymentId: string; paymentMethodId: string; paymentMethodTypeId: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getPaymentId(): string;

	getPaymentMethodId(): string;

	getPaymentMethodTypeId(): string;

	getStatus(): string;

	getStatusDetail(): string;

	initWithPaymentStatusStatusDetailReceiptId(paymentStatus: RemotePaymentStatus, statusDetail: string, receiptId: string): this;

	initWithStatusStatusDetailPaymentId(status: string, statusDetail: string, paymentId: string): this;

	initWithStatusStatusDetailPaymentIdPaymentMethodIdPaymentMethodTypeId(status: string, statusDetail: string, paymentId: string, paymentMethodId: string, paymentMethodTypeId: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PXIdentification extends NSObject {

	static alloc(): PXIdentification; // inherited from NSObject

	static new(): PXIdentification; // inherited from NSObject
}

declare class PXIdentificationType extends NSObject {

	static alloc(): PXIdentificationType; // inherited from NSObject

	static new(): PXIdentificationType; // inherited from NSObject
}

declare class PXInstallment extends NSObject {

	static alloc(): PXInstallment; // inherited from NSObject

	static new(): PXInstallment; // inherited from NSObject
}

declare class PXInstruction extends NSObject {

	static alloc(): PXInstruction; // inherited from NSObject

	static new(): PXInstruction; // inherited from NSObject
}

declare class PXInstructionAction extends NSObject {

	static alloc(): PXInstructionAction; // inherited from NSObject

	static new(): PXInstructionAction; // inherited from NSObject
}

declare class PXInstructionInteraction extends NSObject {

	static alloc(): PXInstructionInteraction; // inherited from NSObject

	static new(): PXInstructionInteraction; // inherited from NSObject
}

declare class PXInstructionReference extends NSObject {

	static alloc(): PXInstructionReference; // inherited from NSObject

	static new(): PXInstructionReference; // inherited from NSObject
}

declare class PXInstructions extends NSObject {

	static alloc(): PXInstructions; // inherited from NSObject

	static new(): PXInstructions; // inherited from NSObject
}

declare class PXIssuer extends NSObject {

	static alloc(): PXIssuer; // inherited from NSObject

	static fromJSONToPXIssuerWithDataError(data: NSData): PXIssuer;

	static fromJSONWithDataError(data: NSData): NSArray<PXIssuer>;

	static new(): PXIssuer; // inherited from NSObject

	id: string;

	name: string;

	constructor(o: { id: string; name: string; });

	getId(): string;

	initWithIdName(id: string, name: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXItem extends NSObject {

	static alloc(): PXItem; // inherited from NSObject

	static fromJSONToPXItemWithDataError(data: NSData): PXItem;

	static fromJSONWithDataError(data: NSData): NSArray<PXItem>;

	static new(): PXItem; // inherited from NSObject

	_description: string;

	categoryId: string;

	currencyId: string;

	id: string;

	pictureUrl: string;

	quantity: number;

	title: string;

	unitPrice: number;

	constructor(o: { title: string; quantity: number; unitPrice: number; });

	getCategoryId(): string;

	getDescription(): string;

	getId(): string;

	getPictureURL(): string;

	getQuantity(): number;

	getTitle(): string;

	getUnitPrice(): number;

	initWithTitleQuantityUnitPrice(title: string, quantity: number, unitPrice: number): this;

	setCategoryIdWithCategoryId(categoryId: string): void;

	setDescriptionWithDescription(description: string): void;

	setIdWithId(id: string): void;

	setPictureURLWithUrl(url: string): void;

	toJSONAndReturnError(): NSData;
}

interface PXLazyInitProtocol extends NSObjectProtocol {

	didFinishWithCheckout(checkout: MercadoPagoCheckout): void;

	failureWithCheckout(checkout: MercadoPagoCheckout): void;
}
declare var PXLazyInitProtocol: {

	prototype: PXLazyInitProtocol;
};

interface PXLifeCycleProtocol extends NSObjectProtocol {

	cancelCheckout(): () => void;

	changePaymentMethodTapped?(): () => void;

	finishCheckout(): (p1: PXResult) => void;
}
declare var PXLifeCycleProtocol: {

	prototype: PXLifeCycleProtocol;
};

declare class PXOneTapCard extends NSObject {

	static alloc(): PXOneTapCard; // inherited from NSObject

	static new(): PXOneTapCard; // inherited from NSObject
}

declare class PXOneTapCardDto extends NSObject {

	static alloc(): PXOneTapCardDto; // inherited from NSObject

	static new(): PXOneTapCardDto; // inherited from NSObject
}

declare class PXOneTapDto extends NSObject {

	static alloc(): PXOneTapDto; // inherited from NSObject

	static new(): PXOneTapDto; // inherited from NSObject
}

declare class PXOneTapItem extends NSObject {

	static alloc(): PXOneTapItem; // inherited from NSObject

	static new(): PXOneTapItem; // inherited from NSObject
}

declare class PXOrder extends NSObject {

	static alloc(): PXOrder; // inherited from NSObject

	static new(): PXOrder; // inherited from NSObject
}

declare class PXPayer extends NSObject implements NSCopying {

	static alloc(): PXPayer; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPayer;

	static new(): PXPayer; // inherited from NSObject

	accessToken: string;

	email: string;

	entityType: string;

	firstName: string;

	id: string;

	identification: PXIdentification;

	lastName: string;

	type: string;

	constructor(o: { email: string; });

	constructor(o: { id: string; accessToken: string; identification: PXIdentification; type: string; entityType: string; email: string; firstName: string; lastName: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getEmail(): string;

	getEntityType(): string;

	getFirstName(): string;

	getId(): string;

	getIdentification(): PXIdentification;

	getLastName(): string;

	initWithEmail(email: string): this;

	initWithIdAccessTokenIdentificationTypeEntityTypeEmailFirstNameLastName(id: string, accessToken: string, identification: PXIdentification, type: string, entityType: string, email: string, firstName: string, lastName: string): this;

	setEntityTypeWithEntityType(entityType: string): void;

	setFirstNameWithName(name: string): void;

	setIdWithPayerId(payerId: string): void;

	setIdentificationWithIdentification(identification: PXIdentification): void;

	setLastNameWithLastName(lastName: string): void;

	toJSONAndReturnError(): NSData;
}

declare class PXPayerCost extends NSObject {

	static alloc(): PXPayerCost; // inherited from NSObject

	static fromJSONToPXPayerCostWithDataError(data: NSData): PXPayerCost;

	static fromJSONWithDataError(data: NSData): NSArray<PXPayerCost>;

	static new(): PXPayerCost; // inherited from NSObject

	installmentAmount: number;

	installmentRate: number;

	installments: number;

	labels: NSArray<string>;

	maxAllowedAmount: number;

	minAllowedAmount: number;

	recommendedMessage: string;

	totalAmount: number;

	constructor(o: { installmentRate: number; labels: NSArray<string> | string[]; minAllowedAmount: number; maxAllowedAmount: number; recommendedMessage: string; installmentAmount: number; totalAmount: number; installments: number; });

	initWithInstallmentRateLabelsMinAllowedAmountMaxAllowedAmountRecommendedMessageInstallmentAmountTotalAmountInstallments(installmentRate: number, labels: NSArray<string> | string[], minAllowedAmount: number, maxAllowedAmount: number, recommendedMessage: string, installmentAmount: number, totalAmount: number, installments: number): this;

	toJSONAndReturnError(): NSData;
}

declare class PXPayment extends NSObject implements PXBasePayment {

	static alloc(): PXPayment; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPayment;

	static new(): PXPayment; // inherited from NSObject

	_description: string;

	callForAuthorizeId: string;

	card: PXCard;

	currencyId: string;

	dateApproved: Date;

	dateCreated: Date;

	dateLastUpdated: Date;

	externalReference: string;

	feeDetails: NSArray<PXFeeDetail>;

	id: number;

	issuerId: string;

	metadata: NSDictionary<string, string>;

	moneyReleaseDate: Date;

	notificationUrl: string;

	operationType: string;

	order: PXOrder;

	payer: PXPayer;

	paymentMethodId: string;

	paymentTypeId: string;

	refunds: NSArray<PXRefund>;

	statementDescriptor: string;

	status: string;

	statusDetail: string;

	tokenId: string;

	transactionDetails: PXTransactionDetails;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getDateFromString(string: string): Date;

	getPaymentId(): string;

	getPaymentMethodId(): string;

	getPaymentMethodTypeId(): string;

	getStatus(): string;

	getStatusDetail(): string;

	isCardPaymentType(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentConfiguration extends NSObject {

	static alloc(): PXPaymentConfiguration; // inherited from NSObject

	static new(): PXPaymentConfiguration; // inherited from NSObject

	constructor(o: { paymentProcessor: PXPaymentProcessor; });

	constructor(o: { splitPaymentProcessor: PXSplitPaymentProcessor; });

	addChargeRulesWithCharges(charges: NSArray<PXPaymentTypeChargeRule> | PXPaymentTypeChargeRule[]): PXPaymentConfiguration;

	addPaymentMethodPluginWithPlugin(plugin: PXPaymentMethodPlugin): PXPaymentConfiguration;

	initWithPaymentProcessor(paymentProcessor: PXPaymentProcessor): this;

	initWithSplitPaymentProcessor(splitPaymentProcessor: PXSplitPaymentProcessor): this;

	setDiscountConfigurationWithConfig(config: PXDiscountConfiguration): PXPaymentConfiguration;
}

declare class PXPaymentData extends NSObject implements NSCopying {

	static alloc(): PXPaymentData; // inherited from NSObject

	static new(): PXPaymentData; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getDiscount(): PXDiscount;

	getIssuer(): PXIssuer;

	getNumberOfInstallments(): number;

	getPayer(): PXPayer;

	getPayerCost(): PXPayerCost;

	getPaymentMethod(): PXPaymentMethod;

	getRawAmount(): NSDecimalNumber;

	getToken(): PXToken;
}

declare class PXPaymentMethod extends NSObject {

	static alloc(): PXPaymentMethod; // inherited from NSObject

	static fromJSONToPXPaymentMethodWithDataError(data: NSData): PXPaymentMethod;

	static fromJSONWithDataError(data: NSData): NSArray<PXPaymentMethod>;

	static new(): PXPaymentMethod; // inherited from NSObject

	additionalInfoNeeded: NSArray<string>;

	deferredCapture: string;

	externalPaymentPluginImageData: NSData;

	financialInstitutions: NSArray<PXFinancialInstitution>;

	id: string;

	readonly isOnlinePaymentMethod: boolean;

	merchantAccountId: string;

	name: string;

	paymentMethodDescription: string;

	paymentTypeId: string;

	secureThumbnail: string;

	settings: NSArray<PXSetting>;

	status: string;

	thumbnail: string;

	cardNumberLenght(): number;

	getId(): string;

	secCodeInBack(): boolean;

	toJSONAndReturnError(): NSData;
}

interface PXPaymentMethodConfigProtocol {

	configViewController(): UIViewController;

	didReceiveWithCheckoutStoreTheme?(checkoutStore: PXCheckoutStore, theme: PXTheme): void;

	navigationHandlerWithNavigationHandler?(navigationHandler: PXPluginNavigationHandler): void;

	shouldSkipWithStore(store: PXCheckoutStore): boolean;
}
declare var PXPaymentMethodConfigProtocol: {

	prototype: PXPaymentMethodConfigProtocol;
};

declare class PXPaymentMethodPlugin extends NSObject {

	static alloc(): PXPaymentMethodPlugin; // inherited from NSObject

	static new(): PXPaymentMethodPlugin; // inherited from NSObject

	initPaymentMethodPlugin: (p1: PXCheckoutStore, p2: (p1: boolean) => void) => void;

	mustShowPaymentMethodPlugin: (p1: PXCheckoutStore) => boolean;

	constructor(o: { paymentMethodPluginId: string; name: string; image: UIImage; description: string; });

	getComment(): string;

	getDescription(): string;

	getId(): string;

	getImage(): UIImage;

	getSubtitle(): string;

	getTitle(): string;

	hasChildren(): boolean;

	initWithPaymentMethodPluginIdNameImageDescription(paymentMethodPluginId: string, name: string, image: UIImage, description: string): this;

	isCard(): boolean;

	isCustomerPaymentMethod(): boolean;

	setDescription(text: string): void;

	setDisplayOrderWithOrder(order: DisplayOrder): void;

	setPaymentMethodConfigWithConfig(config: PXPaymentMethodConfigProtocol): void;
}

declare class PXPaymentMethodSearch extends NSObject {

	static alloc(): PXPaymentMethodSearch; // inherited from NSObject

	static new(): PXPaymentMethodSearch; // inherited from NSObject
}

declare class PXPaymentMethodSearchItem extends NSObject {

	static alloc(): PXPaymentMethodSearchItem; // inherited from NSObject

	static new(): PXPaymentMethodSearchItem; // inherited from NSObject
}

declare class PXPaymentMethodSearchItemTypes extends NSObject {

	static alloc(): PXPaymentMethodSearchItemTypes; // inherited from NSObject

	static new(): PXPaymentMethodSearchItemTypes; // inherited from NSObject
}

declare class PXPaymentPreference extends NSObject {

	static alloc(): PXPaymentPreference; // inherited from NSObject

	static new(): PXPaymentPreference; // inherited from NSObject
}

interface PXPaymentProcessor extends NSObjectProtocol {

	didReceiveWithCheckoutStore?(checkoutStore: PXCheckoutStore): void;

	didReceiveWithNavigationHandler?(navigationHandler: PXPaymentProcessorNavigationHandler): void;

	paymentProcessorViewController(): UIViewController;

	paymentTimeOut?(): number;

	startPaymentWithCheckoutStoreErrorHandlerSuccessWithBusinessResultSuccessWithPaymentResult?(checkoutStore: PXCheckoutStore, errorHandler: PXPaymentProcessorErrorHandler, successWithBusinessResult: (p1: PXBusinessResult) => void, successWithPaymentResult: (p1: PXGenericPayment) => void): void;

	support(): boolean;
}
declare var PXPaymentProcessor: {

	prototype: PXPaymentProcessor;
};

interface PXPaymentProcessorErrorHandler extends NSObjectProtocol {

	showError(): void;
}
declare var PXPaymentProcessorErrorHandler: {

	prototype: PXPaymentProcessorErrorHandler;
};

declare class PXPaymentProcessorNavigationHandler extends NSObject {

	static alloc(): PXPaymentProcessorNavigationHandler; // inherited from NSObject

	static new(): PXPaymentProcessorNavigationHandler; // inherited from NSObject

	didFinishPaymentWithBusinessResult(businessResult: PXBusinessResult): void;

	didFinishPaymentWithPaymentStatusStatusDetailsPaymentId(paymentStatus: RemotePaymentStatus, statusDetails: string, paymentId: string): void;

	didFinishPaymentWithStatusStatusDetailPaymentId(status: string, statusDetail: string, paymentId: string): void;

	hideLoading(): void;

	next(): void;

	nextAndRemoveCurrentScreenFromStack(): void;

	showLoading(): void;
}

declare class PXPaymentResultConfiguration extends NSObject {

	static alloc(): PXPaymentResultConfiguration; // inherited from NSObject

	static new(): PXPaymentResultConfiguration; // inherited from NSObject

	constructor(o: { topView: UIView; bottomView: UIView; });

	disableApprovedAmount(): void;

	disableApprovedBodyCell(): void;

	disableApprovedLabelText(): void;

	disableApprovedPaymentMethodInfo(): void;

	disableApprovedReceipt(): void;

	disableContentCell(): void;

	disablePendingContentText(): void;

	disablePendingContentTitle(): void;

	disablePendingLabelText(): void;

	disablePendingSecondaryExitButton(): void;

	disableRejectdSecondaryExitButton(): void;

	disableRejectedContentText(): void;

	disableRejectedContentTitle(): void;

	disableRejectedLabel(): void;

	enableAmount(): void;

	enableApprovedPaymentBodyCell(): void;

	enableApprovedPaymentMethodInfo(): void;

	enableApprovedReceipt(): void;

	enableContnentCell(): void;

	enablePaymentContentText(): void;

	enablePaymentContentTitle(): void;

	getApprovedBadgeImage(): UIImage;

	getApprovedLabelText(): string;

	getApprovedSecondaryButtonText(): string;

	getApprovedSubtitle(): string;

	getApprovedTitle(): string;

	getExitButtonTitle(): string;

	getHeaderApprovedIcon(): UIImage;

	getHeaderImageFor(paymentMethod: PXPaymentMethod): UIImage;

	getHeaderPendingIcon(): UIImage;

	getHeaderRejectedIcon(paymentMethod: PXPaymentMethod): UIImage;

	getPendingContentText(): string;

	getPendingContetTitle(): string;

	getPendingLabelText(): string;

	getPendingSecondaryButtonText(): string;

	getPendingSubtitle(): string;

	getPendingTitle(): string;

	getRejectedContentText(): string;

	getRejectedContetTitle(): string;

	getRejectedIconSubtext(): string;

	getRejectedSecondaryButtonText(): string;

	getRejectedSubtitle(): string;

	getRejectedTitle(): string;

	getStatusBackgroundColor(): UIColor;

	hideBadgeImage(): void;

	hideLabelText(): void;

	initWithTopViewBottomView(topView: UIView, bottomView: UIView): this;

	isAmountDisable(): boolean;

	isApprovedPaymentBodyDisableCell(): boolean;

	isContentCellDisable(): boolean;

	isPaymentIdDisable(): boolean;

	isPaymentMethodDisable(): boolean;

	isPendingContentTextDisable(): boolean;

	isPendingContentTitleDisable(): boolean;

	isPendingSecondaryExitButtonDisable(): boolean;

	isRejectedContentTextDisable(): boolean;

	isRejectedContentTitleDisable(): boolean;

	isRejectedSecondaryExitButtonDisable(): boolean;

	setApprovedHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setApprovedHeaderIconWithStringURL(stringURL: string): void;

	setApprovedSubtitleWithSubtitle(subtitle: string): void;

	setApprovedWithLabelText(labelText: string): void;

	setApprovedWithTitle(title: string): void;

	setExitButtonTitleWithTitle(title: string): void;

	setHeaderRejectedIconWithNameBundle(name: string, bundle: NSBundle): void;

	setPendingContentTextWithText(text: string): void;

	setPendingContentTitleWithTitle(title: string): void;

	setPendingHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setPendingHeaderIconWithStringURL(stringURL: string): void;

	setPendingSubtitleWithSubtitle(subtitle: string): void;

	setPendingWithLabelText(labelText: string): void;

	setPendingWithTitle(title: string): void;

	setRejectedContentTextWithText(text: string): void;

	setRejectedContentTitleWithTitle(title: string): void;

	setRejectedHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setRejectedHeaderIconWithStringURL(stringURL: string): void;

	setRejectedIconSubtextWithText(text: string): void;

	setRejectedSubtitleWithSubtitle(subtitle: string): void;

	setRejectedWithTitle(title: string): void;

	setStatusBackgroundColorWithColor(color: UIColor): void;

	shouldShowBadgeImage(): void;

	shouldShowLabelText(): void;
}

declare class PXPaymentType extends NSObject {

	static alloc(): PXPaymentType; // inherited from NSObject

	static new(): PXPaymentType; // inherited from NSObject
}

declare class PXPaymentTypeChargeRule extends NSObject {

	static alloc(): PXPaymentTypeChargeRule; // inherited from NSObject

	static new(): PXPaymentTypeChargeRule; // inherited from NSObject

	constructor(o: { paymentMethdodId: string; amountCharge: number; });

	initWithPaymentMethdodIdAmountCharge(paymentMethdodId: string, amountCharge: number): this;
}

declare class PXPhone extends NSObject {

	static alloc(): PXPhone; // inherited from NSObject

	static new(): PXPhone; // inherited from NSObject
}

declare class PXPicture extends NSObject {

	static alloc(): PXPicture; // inherited from NSObject

	static new(): PXPicture; // inherited from NSObject
}

declare class PXPluginNavigationHandler extends NSObject {

	static alloc(): PXPluginNavigationHandler; // inherited from NSObject

	static new(): PXPluginNavigationHandler; // inherited from NSObject

	constructor(o: { checkout: MercadoPagoCheckout; });

	cancel(): void;

	hideLoading(): void;

	initWithCheckout(withCheckout: MercadoPagoCheckout): this;

	next(): void;

	nextAndRemoveCurrentScreenFromStack(): void;

	showFailureWithMessageErrorDetailsRetryButtonCallback(message: string, errorDetails: string, retryButtonCallback: () => void): void;

	showLoading(): void;
}

declare class PXRefund extends NSObject {

	static alloc(): PXRefund; // inherited from NSObject

	static new(): PXRefund; // inherited from NSObject
}

interface PXResult extends NSObjectProtocol {

	getPaymentId(): string;

	getStatus(): string;

	getStatusDetail(): string;
}
declare var PXResult: {

	prototype: PXResult;
};

declare class PXReviewConfirmConfiguration extends NSObject {

	static alloc(): PXReviewConfirmConfiguration; // inherited from NSObject

	static new(): PXReviewConfirmConfiguration; // inherited from NSObject

	constructor(o: { itemsEnabled: boolean; topView: UIView; bottomView: UIView; });

	initWithItemsEnabledTopViewBottomView(itemsEnabled: boolean, topView: UIView, bottomView: UIView): this;
}

interface PXReviewConfirmDynamicViewsConfiguration extends NSObjectProtocol {

	bottomCustomViewsWithStore(store: PXCheckoutStore): NSArray<UIView>;

	topCustomViewsWithStore(store: PXCheckoutStore): NSArray<UIView>;
}
declare var PXReviewConfirmDynamicViewsConfiguration: {

	prototype: PXReviewConfirmDynamicViewsConfiguration;
};

declare class PXSavedCardToken extends PXCardToken {

	static alloc(): PXSavedCardToken; // inherited from NSObject

	static new(): PXSavedCardToken; // inherited from NSObject

	isCustomerPaymentMethod(): boolean;

	validate(): boolean;
}

declare class PXSavedESCCardToken extends PXSavedCardToken {

	static alloc(): PXSavedESCCardToken; // inherited from NSObject

	static new(): PXSavedESCCardToken; // inherited from NSObject
}

declare class PXSecurityCode extends NSObject {

	static alloc(): PXSecurityCode; // inherited from NSObject

	static new(): PXSecurityCode; // inherited from NSObject
}

declare class PXSetting extends NSObject {

	static alloc(): PXSetting; // inherited from NSObject

	static new(): PXSetting; // inherited from NSObject
}

declare class PXSite extends NSObject {

	static alloc(): PXSite; // inherited from NSObject

	static new(): PXSite; // inherited from NSObject
}

declare class PXSplitConfiguration extends NSObject {

	static alloc(): PXSplitConfiguration; // inherited from NSObject

	static new(): PXSplitConfiguration; // inherited from NSObject
}

declare class PXSplitPaymentMethod extends NSObject {

	static alloc(): PXSplitPaymentMethod; // inherited from NSObject

	static new(): PXSplitPaymentMethod; // inherited from NSObject
}

interface PXSplitPaymentProcessor extends NSObjectProtocol {

	didReceiveWithCheckoutStore?(checkoutStore: PXCheckoutStore): void;

	didReceiveWithNavigationHandler?(navigationHandler: PXPaymentProcessorNavigationHandler): void;

	paymentProcessorViewController(): UIViewController;

	paymentTimeOut?(): number;

	shouldSkipUserConfirmation?(): boolean;

	startPaymentWithCheckoutStoreErrorHandlerSuccessWithBasePayment?(checkoutStore: PXCheckoutStore, errorHandler: PXPaymentProcessorErrorHandler, successWithBasePayment: (p1: PXBasePayment) => void): void;

	support(): boolean;

	supportSplitPaymentMethodPaymentWithCheckoutStore(checkoutStore: PXCheckoutStore): boolean;
}
declare var PXSplitPaymentProcessor: {

	prototype: PXSplitPaymentProcessor;
};

interface PXTheme {

	detailedBackgroundColor(): UIColor;

	fontName?(): string;

	highlightBackgroundColor(): UIColor;

	highlightNavigationTintColor?(): UIColor;

	lightFontName?(): string;

	loadingComponent(): PXThemeProperty;

	navigationBar(): PXThemeProperty;

	semiBoldFontName?(): string;

	statusBarStyle(): UIStatusBarStyle;
}
declare var PXTheme: {

	prototype: PXTheme;
};

declare class PXThemeProperty extends NSObject {

	static alloc(): PXThemeProperty; // inherited from NSObject

	static new(): PXThemeProperty; // inherited from NSObject

	constructor(o: { backgroundColor: UIColor; tintColor: UIColor; });

	getBackgroundColor(): UIColor;

	getTintColor(): UIColor;

	initWithBackgroundColorTintColor(backgroundColor: UIColor, tintColor: UIColor): this;
}

declare class PXToken extends NSObject {

	static alloc(): PXToken; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXToken;

	static new(): PXToken; // inherited from NSObject

	cardId: string;

	cardNumberLength: number;

	cardholder: PXCardHolder;

	dateCreated: Date;

	dateLastUpdated: Date;

	dueDate: Date;

	esc: string;

	expirationMonth: number;

	expirationYear: number;

	firstSixDigits: string;

	id: string;

	lastFourDigits: string;

	publicKey: string;

	securityCodeLength: number;

	status: string;

	usedDate: Date;

	canBeClone(): boolean;

	getCardBin(): string;

	getCardLastForDigits(): string;

	getId(): string;

	isIssuerRequired(): boolean;

	toJSONAndReturnError(): NSData;
}

declare class PXTracker extends NSObject {

	static alloc(): PXTracker; // inherited from NSObject

	static new(): PXTracker; // inherited from NSObject

	static setListener(listener: PXTrackerListener): void;

	static setListenerFlowNameFlowDetails(listener: PXTrackerListener, flowName: string, flowDetails: NSDictionary<string, any>): void;
}

interface PXTrackerListener extends NSObjectProtocol {

	trackEventWithScreenNameActionResultExtraParams(screenName: string, action: string, result: string, extraParams: NSDictionary<string, any>): void;

	trackScreenWithScreenNameExtraParams(screenName: string, extraParams: NSDictionary<string, any>): void;
}
declare var PXTrackerListener: {

	prototype: PXTrackerListener;
};

declare class PXTransactionDetails extends NSObject {

	static alloc(): PXTransactionDetails; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXTransactionDetails;

	static new(): PXTransactionDetails; // inherited from NSObject

	externalResourceUrl: string;

	financialInstitution: string;

	paymentMethodReferenceId: string;

	toJSONAndReturnError(): NSData;
}

declare class PXVendorSpecificAttributes extends NSObject {

	static alloc(): PXVendorSpecificAttributes; // inherited from NSObject

	static new(): PXVendorSpecificAttributes; // inherited from NSObject
}

declare const enum RemotePaymentStatus {

	APPROVED = 0,

	REJECTED = 1
}

declare const enum ScrollDirection {

	Horizontal = 0,

	Vertical = 1
}
