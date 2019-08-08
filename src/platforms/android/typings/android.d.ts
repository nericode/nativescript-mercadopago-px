/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export class BuildConfig {
					public static class: java.lang.Class<com.mercadopago.android.px.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module configuration {
					export class AdvancedConfiguration {
						public static class: java.lang.Class<com.mercadopago.android.px.configuration.AdvancedConfiguration>;
						public isEscEnabled(): boolean;
						public getPaymentResultScreenConfiguration(): com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
						public isBankDealsEnabled(): boolean;
						public getReviewAndConfirmConfiguration(): com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration;
					}
					export module AdvancedConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.configuration.AdvancedConfiguration.Builder>;
							public constructor();
							public setPaymentResultScreenConfiguration(param0: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration): com.mercadopago.android.px.configuration.AdvancedConfiguration.Builder;
							public setBankDealsEnabled(param0: boolean): com.mercadopago.android.px.configuration.AdvancedConfiguration.Builder;
							public build(): com.mercadopago.android.px.configuration.AdvancedConfiguration;
							public setEscEnabled(param0: boolean): com.mercadopago.android.px.configuration.AdvancedConfiguration.Builder;
							public setReviewAndConfirmConfiguration(param0: com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration): com.mercadopago.android.px.configuration.AdvancedConfiguration.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module configuration {
					export class DiscountConfiguration {
						public static class: java.lang.Class<com.mercadopago.android.px.configuration.DiscountConfiguration>;
						public static withDiscount(param0: com.mercadopago.android.px.model.Discount, param1: com.mercadopago.android.px.model.Campaign): com.mercadopago.android.px.configuration.DiscountConfiguration;
						public isNotAvailable(): boolean;
						public getDiscount(): com.mercadopago.android.px.model.Discount;
						public getCampaign(): com.mercadopago.android.px.model.Campaign;
						public static forNotAvailableDiscount(): com.mercadopago.android.px.configuration.DiscountConfiguration;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module configuration {
					export class PaymentConfiguration {
						public static class: java.lang.Class<com.mercadopago.android.px.configuration.PaymentConfiguration>;
						public getPaymentProcessor(): com.mercadopago.android.px.core.PaymentProcessor;
						public getCharges(): java.util.ArrayList<com.mercadopago.android.px.model.commission.ChargeRule>;
						public getDiscountConfiguration(): com.mercadopago.android.px.configuration.DiscountConfiguration;
						public getPaymentMethodPluginList(): java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>;
						public constructor(param0: com.mercadopago.android.px.core.PaymentProcessor);
					}
					export module PaymentConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.configuration.PaymentConfiguration.Builder>;
							public addChargeRules(param0: java.util.Collection<com.mercadopago.android.px.model.commission.ChargeRule>): com.mercadopago.android.px.configuration.PaymentConfiguration.Builder;
							public constructor(param0: com.mercadopago.android.px.core.PaymentProcessor);
							public setDiscountConfiguration(param0: com.mercadopago.android.px.configuration.DiscountConfiguration): com.mercadopago.android.px.configuration.PaymentConfiguration.Builder;
							public addPaymentMethodPlugin(param0: com.mercadopago.android.px.core.PaymentMethodPlugin): com.mercadopago.android.px.configuration.PaymentConfiguration.Builder;
							public build(): com.mercadopago.android.px.configuration.PaymentConfiguration;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module configuration {
					export class PaymentResultScreenConfiguration {
						public static class: java.lang.Class<com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration>;
						/** @deprecated */
						public getRejectedIcon(): java.lang.Integer;
						/** @deprecated */
						public getPendingSubtitle(): string;
						public hasBottomFragment(): boolean;
						/** @deprecated */
						public getRejectedSubtitle(): string;
						/** @deprecated */
						public isCongratsSecondaryExitButtonEnabled(): boolean;
						/** @deprecated */
						public isRejectedLabelTextEnabled(): boolean;
						/** @deprecated */
						public getRejectedIconSubtext(): string;
						/** @deprecated */
						public isRejectedContentTextEnabled(): boolean;
						/** @deprecated */
						public getSecondaryPendingExitButtonTitle(): string;
						/** @deprecated */
						public getApprovedBadge(): string;
						/** @deprecated */
						public isPendingContentTextEnabled(): boolean;
						/** @deprecated */
						public getSecondaryRejectedExitButtonTitle(): string;
						/** @deprecated */
						public getApprovedUrlIcon(): string;
						/** @deprecated */
						public isRejectionRetryEnabled(): boolean;
						/** @deprecated */
						public getPendingContentTitle(): string;
						/** @deprecated */
						public getRejectedContentText(): string;
						/** @deprecated */
						public isApprovedAmountEnabled(): boolean;
						/** @deprecated */
						public isRejectedSecondaryExitButtonEnabled(): boolean;
						/** @deprecated */
						public isPendingSecondaryExitButtonEnabled(): boolean;
						/** @deprecated */
						public isPendingContentTitleEnabled(): boolean;
						/** @deprecated */
						public isRejectedContentTitleEnabled(): boolean;
						public hasTopFragment(): boolean;
						/** @deprecated */
						public getApprovedTitle(): string;
						public getBottomFragment(): com.mercadopago.android.px.model.ExternalFragment;
						/** @deprecated */
						public getPreferenceIcon(param0: string, param1: string): number;
						/** @deprecated */
						public getSecondaryPendingExitResultCode(): java.lang.Integer;
						/** @deprecated */
						public getRejectedContentTitle(): string;
						/** @deprecated */
						public getApprovedLabelText(): string;
						/** @deprecated */
						public isApprovedPaymentMethodInfoEnabled(): boolean;
						/** @deprecated */
						public getPendingUrlIcon(): string;
						/** @deprecated */
						public isApprovedReceiptEnabled(): boolean;
						/** @deprecated */
						public getPreferenceUrlIcon(param0: string, param1: string): string;
						/** @deprecated */
						public hasCustomizedImageIcon(param0: string, param1: string): boolean;
						/** @deprecated */
						public getApprovedIcon(): java.lang.Integer;
						/** @deprecated */
						public getPendingContentText(): string;
						/** @deprecated */
						public isRejectedIconSubtextEnabled(): boolean;
						/** @deprecated */
						public getSecondaryRejectedExitResultCode(): java.lang.Integer;
						/** @deprecated */
						public hasTitleBackgroundColor(): boolean;
						/** @deprecated */
						public getSecondaryCongratsExitResultCode(): java.lang.Integer;
						/** @deprecated */
						public getTitleBackgroundColor(): java.lang.Integer;
						/** @deprecated */
						public getExitButtonTitle(): string;
						/** @deprecated */
						public getRejectedTitle(): string;
						/** @deprecated */
						public getPendingTitle(): string;
						/** @deprecated */
						public getPendingIcon(): java.lang.Integer;
						public getTopFragment(): com.mercadopago.android.px.model.ExternalFragment;
						/** @deprecated */
						public getApprovedSubtitle(): string;
						/** @deprecated */
						public getSecondaryCongratsExitButtonTitle(): string;
						/** @deprecated */
						public getRejectedUrlIcon(): string;
					}
					export module PaymentResultScreenConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration.Builder>;
							public constructor();
							public build(): com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
							public setTopFragment(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration.Builder;
							public setBottomFragment(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module configuration {
					export class ReviewAndConfirmConfiguration {
						public static class: java.lang.Class<com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration>;
						/** @deprecated */
						public getUnitPriceLabel(): string;
						/** @deprecated */
						public getDisclaimerTextColor(): string;
						/** @deprecated */
						public hasExtrasAmount(): boolean;
						/** @deprecated */
						public getShippingAmount(): java.math.BigDecimal;
						public hasCustomTopView(): boolean;
						/** @deprecated */
						public getDisclaimerText(): string;
						/** @deprecated */
						public getDiscountAmount(): java.math.BigDecimal;
						/** @deprecated */
						public getCollectorIcon(): java.lang.Integer;
						/** @deprecated */
						public getTaxesAmount(): java.math.BigDecimal;
						/** @deprecated */
						public getTotalAmount(): java.math.BigDecimal;
						public hasItemsEnabled(): boolean;
						/** @deprecated */
						public getQuantityLabel(): string;
						/** @deprecated */
						public getArrearsAmount(): java.math.BigDecimal;
						/** @deprecated */
						public hasProductAmount(): boolean;
						public getTopFragment(): com.mercadopago.android.px.model.ExternalFragment;
						/** @deprecated */
						public getProductAmount(): java.math.BigDecimal;
						public hasCustomBottomView(): boolean;
						/** @deprecated */
						public getProductTitle(): string;
						public getBottomFragment(): com.mercadopago.android.px.model.ExternalFragment;
					}
					export module ReviewAndConfirmConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration.Builder>;
							public constructor();
							public setTopFragment(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration.Builder;
							public setItemsVisibility(param0: boolean): com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration.Builder;
							public setBottomFragment(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle): com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration.Builder;
							public build(): com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module core {
					export abstract class CheckoutLazyInit {
						public static class: java.lang.Class<com.mercadopago.android.px.core.CheckoutLazyInit>;
						public fail(param0: com.mercadopago.android.px.core.MercadoPagoCheckout): void;
						public cancel(): void;
						public fail(): void;
						public fetch(param0: globalAndroid.content.Context): void;
						public constructor(param0: com.mercadopago.android.px.core.MercadoPagoCheckout.Builder);
						public success(param0: com.mercadopago.android.px.core.MercadoPagoCheckout): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module core {
					export class MercadoPagoCheckout {
						public static class: java.lang.Class<com.mercadopago.android.px.core.MercadoPagoCheckout>;
						public static PAYMENT_RESULT_CODE: number;
						public static EXTRA_PAYMENT_RESULT: string;
						public static EXTRA_ERROR: string;
						public getPaymentConfiguration(): com.mercadopago.android.px.configuration.PaymentConfiguration;
						public getPublicKey(): string;
						public startPayment(param0: globalAndroid.content.Context, param1: number): void;
						public getPreferenceId(): string;
						public getCheckoutPreference(): com.mercadopago.android.px.preferences.CheckoutPreference;
						public getPrivateKey(): string;
						public getAdvancedConfiguration(): com.mercadopago.android.px.configuration.AdvancedConfiguration;
					}
					export module MercadoPagoCheckout {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.core.MercadoPagoCheckout.Builder>;
							public build(): com.mercadopago.android.px.core.MercadoPagoCheckout;
							public constructor(param0: string, param1: string, param2: com.mercadopago.android.px.configuration.PaymentConfiguration);
							public constructor(param0: string, param1: string);
							public constructor(param0: string, param1: com.mercadopago.android.px.preferences.CheckoutPreference, param2: com.mercadopago.android.px.configuration.PaymentConfiguration);
							public setPrivateKey(param0: string): com.mercadopago.android.px.core.MercadoPagoCheckout.Builder;
							public setAdvancedConfiguration(param0: com.mercadopago.android.px.configuration.AdvancedConfiguration): com.mercadopago.android.px.core.MercadoPagoCheckout.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module core {
					export class PaymentMethodPlugin {
						public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentMethodPlugin>;
						/**
						 * Constructs a new instance of the com.mercadopago.android.px.core.PaymentMethodPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							init(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData): void;
							getPluginPosition(): com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition;
							getId(): string;
							shouldShowFragmentOnSelection(): boolean;
							getPaymentMethodInfo(param0: globalAndroid.content.Context): com.mercadopago.android.px.model.PaymentMethodInfo;
							getFragmentBundle(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.os.Bundle;
							getFragment(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.support.v4.app.Fragment;
							isEnabled(): boolean;
						});
						public constructor();
						public getPluginPosition(): com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition;
						public init(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData): void;
						public getId(): string;
						public getPaymentMethodInfo(param0: globalAndroid.content.Context): com.mercadopago.android.px.model.PaymentMethodInfo;
						public getFragment(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.support.v4.app.Fragment;
						public isEnabled(): boolean;
						public shouldShowFragmentOnSelection(): boolean;
						public getFragmentBundle(param0: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.os.Bundle;
					}
					export module PaymentMethodPlugin {
						export class CheckoutData {
							public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData>;
							public checkoutPreference: com.mercadopago.android.px.preferences.CheckoutPreference;
							public discount: com.mercadopago.android.px.model.Discount;
							public privateKey: string;
							public constructor(param0: com.mercadopago.android.px.preferences.CheckoutPreference, param1: com.mercadopago.android.px.model.Discount, param2: string);
						}
						export class OnPaymentMethodListener {
							public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentMethodPlugin.OnPaymentMethodListener>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.core.PaymentMethodPlugin$OnPaymentMethodListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								next(): void;
								back(): void;
							});
							public constructor();
							public back(): void;
							public next(): void;
						}
						export class PluginPosition {
							public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition>;
							public static TOP: com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition;
							public static BOTTOM: com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition;
							public static values(): native.Array<com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition>;
							public static valueOf(param0: string): com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module core {
					export class PaymentProcessor {
						public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentProcessor>;
						/**
						 * Constructs a new instance of the com.mercadopago.android.px.core.PaymentProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startPayment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context, param2: com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener): void;
							getPaymentTimeout(): number;
							shouldShowFragmentOnPayment(): boolean;
							getFragmentBundle(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.os.Bundle;
							getFragment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.support.v4.app.Fragment;
						});
						public constructor();
						public startPayment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context, param2: com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener): void;
						public getFragment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.support.v4.app.Fragment;
						public getPaymentTimeout(): number;
						public getFragmentBundle(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.os.Bundle;
						public shouldShowFragmentOnPayment(): boolean;
					}
					export module PaymentProcessor {
						export class CheckoutData {
							public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentProcessor.CheckoutData>;
							public paymentData: com.mercadopago.android.px.model.PaymentData;
							public checkoutPreference: com.mercadopago.android.px.preferences.CheckoutPreference;
							public constructor(param0: com.mercadopago.android.px.model.PaymentData, param1: com.mercadopago.android.px.preferences.CheckoutPreference);
						}
						export class OnPaymentListener {
							public static class: java.lang.Class<com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.core.PaymentProcessor$OnPaymentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
								onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
								onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
								onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							});
							public constructor();
							public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
							public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module core {
					export class PrefetchService {
						public static class: java.lang.Class<com.mercadopago.android.px.core.PrefetchService>;
						public prefetch(): void;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class BankDealsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.BankDealsAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.BankDealsAdapter>;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.BankDealsAdapter.ViewHolder, param1: number): void;
							public constructor(param0: java.util.List<com.mercadopago.android.px.model.BankDeal>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.BankDeal>);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.BankDealsAdapter.ViewHolder;
							public getItemCount(): number;
						}
						export module BankDealsAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.BankDealsAdapter.ViewHolder>;
								public constructor(param0: com.mercadopago.android.px.internal.adapters.BankDealsAdapter, param1: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class IdentificationTypesAdapter {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.IdentificationTypesAdapter>;
							public getItemId(param0: number): number;
							public getItem(param0: number): any;
							public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class IssuersAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.IssuersAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.IssuersAdapter>;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.IssuersAdapter.ViewHolder, param1: number): void;
							public getItemCount(): number;
							public clear(): void;
							public constructor(param0: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>);
							public addResults(param0: java.util.List<com.mercadopago.android.px.model.Issuer>): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.IssuersAdapter.ViewHolder;
						}
						export module IssuersAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.IssuersAdapter.ViewHolder>;
								public constructor(param0: com.mercadopago.android.px.internal.adapters.IssuersAdapter, param1: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class PayerCostsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.PayerCostsAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PayerCostsAdapter>;
							public addResults(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.PayerCostsAdapter.ViewHolder, param1: number): void;
							public getItemCount(): number;
							public clear(): void;
							public constructor(param0: com.mercadopago.android.px.model.Site, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.PayerCostsAdapter.ViewHolder;
						}
						export module PayerCostsAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PayerCostsAdapter.ViewHolder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class PaymentMethodSearchItemAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter>;
							public constructor();
							public getItemViewType(param0: number): number;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter.ViewHolder, param1: number): void;
							public addItems(param0: java.util.List<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController>): void;
							public clear(): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter.ViewHolder;
							public notifyItemInserted(): void;
						}
						export module PaymentMethodSearchItemAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter.ViewHolder>;
								public constructor(param0: com.mercadopago.android.px.internal.adapters.PaymentMethodSearchItemAdapter, param1: com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class PaymentMethodsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.PaymentMethodsAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentMethodsAdapter>;
							public getItemCount(): number;
							public constructor(param0: globalAndroid.app.Activity, param1: java.util.List<com.mercadopago.android.px.model.PaymentMethod>, param2: globalAndroid.view.View.OnClickListener);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.PaymentMethodsAdapter.ViewHolder;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.PaymentMethodsAdapter.ViewHolder, param1: number): void;
							public getListener(): globalAndroid.view.View.OnClickListener;
						}
						export module PaymentMethodsAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentMethodsAdapter.ViewHolder>;
								public mPaymentMethodImage: globalAndroid.widget.ImageView;
								public mPaymentMethodName: globalAndroid.widget.TextView;
								public constructor(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnClickListener);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class PaymentTypesAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.PaymentTypesAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentTypesAdapter>;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.PaymentTypesAdapter.ViewHolder, param1: number): void;
							public paymentTypeName(param0: com.mercadopago.android.px.model.PaymentType, param1: globalAndroid.content.Context): string;
							public addResults(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
							public getItemCount(): number;
							public clear(): void;
							public constructor(param0: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.PaymentTypesAdapter.ViewHolder;
						}
						export module PaymentTypesAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.PaymentTypesAdapter.ViewHolder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module adapters {
						export class ReviewPaymentMethodsAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter.ViewHolder> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter>;
							public constructor(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter.ViewHolder;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter.ViewHolder, param1: number): void;
						}
						export module ReviewPaymentMethodsAdapter {
							export class ViewHolder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter.ViewHolder>;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module base {
						export class DefaultProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.base.DefaultProvider>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module base {
						export abstract class MvpPresenter<V, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.base.MvpPresenter<any,any>>;
							public constructor();
							public attachResourcesProvider(param0: R): void;
							public detachView(): void;
							public isViewAttached(): boolean;
							public getView(): V;
							public detachResourceProvider(): void;
							public getResourcesProvider(): R;
							public attachView(param0: V): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module base {
						export class MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.base.MvpView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.base.MvpView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module base {
						export class ResourcesProvider {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.base.ResourcesProvider>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.base.ResourcesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class CallbackHolder {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.CallbackHolder>;
							public static CONGRATS_PAYMENT_RESULT_CALLBACK: string;
							public static PENDING_PAYMENT_RESULT_CALLBACK: string;
							public static REJECTED_PAYMENT_RESULT_CALLBACK: string;
							public static callbackHolder: com.mercadopago.android.px.internal.callbacks.CallbackHolder;
							public constructor();
							public setPaymentDataCallback(param0: com.mercadopago.android.px.internal.callbacks.PaymentDataCallback): void;
							public getPaymentResultCallback(param0: string): com.mercadopago.android.px.internal.callbacks.PaymentResultCallback;
							public static getInstance(): com.mercadopago.android.px.internal.callbacks.CallbackHolder;
							public clean(): void;
							public getPaymentDataCallback(): com.mercadopago.android.px.internal.callbacks.PaymentDataCallback;
							public hasPaymentResultCallback(param0: string): boolean;
							public setPaymentCallback(param0: com.mercadopago.android.px.internal.callbacks.PaymentCallback): void;
							public getPaymentCallback(): com.mercadopago.android.px.internal.callbacks.PaymentCallback;
							public hasPaymentDataCallback(): boolean;
							public addPaymentResultCallback(param0: string, param1: com.mercadopago.android.px.internal.callbacks.PaymentResultCallback): void;
							public hasPaymentCallback(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class FailureRecovery {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.FailureRecovery>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.FailureRecovery interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								recover(): void;
							});
							public constructor();
							public recover(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class OnCodeDiscountCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: com.mercadopago.android.px.model.Discount): void;
								onFailure(): void;
							});
							public constructor();
							public onSuccess(param0: com.mercadopago.android.px.model.Discount): void;
							public onFailure(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class OnSelectedCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<any>>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSelected(param0: T): void;
							});
							public constructor();
							public onSelected(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentCallback extends com.mercadopago.android.px.internal.callbacks.ReturnCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: com.mercadopago.android.px.model.Payment): void;
								onCancel(): void;
								onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							});
							public constructor();
							public onSuccess(param0: com.mercadopago.android.px.model.Payment): void;
							public onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onCancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentDataCallback extends com.mercadopago.android.px.internal.callbacks.ReturnCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentDataCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentDataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: com.mercadopago.android.px.model.PaymentData, param1: boolean): void;
								onCancel(): void;
								onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							});
							public constructor();
							public onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onSuccess(param0: com.mercadopago.android.px.model.PaymentData, param1: boolean): void;
							public onCancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentMethodSelectionCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentMethodSelectionCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentMethodSelectionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPaymentMethodListSet(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>, param1: string): void;
								onPaymentMethodCleared(): void;
							});
							public constructor();
							public onPaymentMethodListSet(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>, param1: string): void;
							public onPaymentMethodCleared(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentResultCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentResultCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
							});
							public constructor();
							public onResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentServiceHandler extends com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
								onVisualPayment(): void;
								onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
								onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
								onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
								onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							});
							public constructor();
							public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
							public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
							public onVisualPayment(): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
							public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class PaymentServiceHandlerWrapper extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper>;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
							public processMessages(): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
							public setHandler(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
							public onVisualPayment(): void;
							public detach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.PaymentRepository, param1: com.mercadopago.android.px.internal.repository.EscManager);
							public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
						}
						export module PaymentServiceHandlerWrapper {
							export class BusinessPaymentMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.BusinessPaymentMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class CVVRequiredMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.CVVRequiredMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class ErrorMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.ErrorMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class GenericPaymentMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.GenericPaymentMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper$Message interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
								});
								public constructor();
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class PaymentMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.PaymentMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class RecoverPaymentEscInvalidMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.RecoverPaymentEscInvalidMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
							export class VisualPaymentMessage extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.Message {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.PaymentServiceHandlerWrapper.VisualPaymentMessage>;
								public processMessage(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class RecyclerItemClickListener {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.RecyclerItemClickListener>;
							public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.callbacks.RecyclerItemClickListener.OnItemClickListener);
							public onTouchEvent(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
							public onInterceptTouchEvent(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
							public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
						}
						export module RecyclerItemClickListener {
							export class OnItemClickListener {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.RecyclerItemClickListener.OnItemClickListener>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.RecyclerItemClickListener$OnItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onItemClick(param0: globalAndroid.view.View, param1: number): void;
								});
								public constructor();
								public onItemClick(param0: globalAndroid.view.View, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class ReturnCallback {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.ReturnCallback>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.ReturnCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCancel(): void;
								onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							});
							public constructor();
							public onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onCancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export abstract class TaggedCallback<T>  extends com.mercadopago.android.px.services.Callback<any> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.TaggedCallback<any>>;
							public onFailure(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public constructor(param0: string);
							public failure(param0: com.mercadopago.android.px.model.exceptions.ApiException): void;
							public onSuccess(param0: any): void;
							public success(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export class TimerObserver {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.TimerObserver>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.TimerObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTimeChanged(param0: string): void;
								onFinish(): void;
							});
							public constructor();
							public onTimeChanged(param0: string): void;
							public onFinish(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class CardExpiryDateEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.CardExpiryDateEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.CardExpiryDateEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveExpiryMonth(param0: string): void;
									saveExpiryYear(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
									appendDivider(): void;
									deleteChar(param0: string): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public deleteChar(param0: string): void;
								public saveExpiryMonth(param0: string): void;
								public appendDivider(): void;
								public saveExpiryYear(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class CardIdentificationNumberEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.CardIdentificationNumberEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.CardIdentificationNumberEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveIdentificationNumber(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public saveIdentificationNumber(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class CardNumberEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.CardNumberEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.CardNumberEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									appendSpace(param0: string): void;
									deleteChar(param0: string): void;
									saveCardNumber(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public saveCardNumber(param0: string): void;
								public checkOpenKeyboard(): void;
								public deleteChar(param0: string): void;
								public appendSpace(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class CardSecurityCodeEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.CardSecurityCodeEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.CardSecurityCodeEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveSecurityCode(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public saveSecurityCode(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class CardholderNameEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.CardholderNameEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.CardholderNameEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveCardholderName(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public saveCardholderName(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class TicketIdentificationNameEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNameEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNameEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveIdentificationName(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public saveIdentificationName(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module callbacks {
						export module card {
							export class TicketIdentificationNumberEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNumberEditTextCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNumberEditTextCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									checkOpenKeyboard(): void;
									saveIdentificationNumber(param0: string): void;
									changeErrorView(): void;
									toggleLineColorOnError(param0: boolean): void;
								});
								public constructor();
								public toggleLineColorOnError(param0: boolean): void;
								public checkOpenKeyboard(): void;
								public saveIdentificationNumber(param0: string): void;
								public changeErrorView(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module configuration {
						export class InternalConfiguration {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.configuration.InternalConfiguration>;
							public constructor(param0: boolean);
							public shouldExitOnPaymentMethodChange(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module controllers {
						export class CheckoutErrorHandler {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.controllers.CheckoutErrorHandler>;
							public constructor();
							public static getInstance(): com.mercadopago.android.px.internal.controllers.CheckoutErrorHandler;
							public getCustomErrorLayout(): java.lang.Integer;
							public hasCustomErrorLayout(): boolean;
							public setCustomErrorLayout(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module controllers {
						export class CheckoutTimer extends com.mercadopago.android.px.internal.controllers.Timer {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.controllers.CheckoutTimer>;
							public getCurrentTime(): string;
							public stop(): void;
							public finishCheckout(): void;
							public setOnFinishListener(param0: com.mercadopago.android.px.internal.controllers.Timer.FinishListener): void;
							public start(param0: number): void;
							public addObserver(param0: com.mercadopago.android.px.internal.callbacks.TimerObserver): void;
							public isTimerEnabled(): java.lang.Boolean;
							public static getInstance(): com.mercadopago.android.px.internal.controllers.CheckoutTimer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module controllers {
						export class PaymentMethodGuessingController {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController>;
							public getGuessedPaymentMethods(): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
							public getSavedBin(): string;
							public constructor(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>, param1: string, param2: java.util.List<string>);
							public filterByPaymentType(param0: java.util.List<string>, param1: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
							public getPaymentTypeId(): string;
							public static getSettingByPaymentMethodAndBin(param0: com.mercadopago.android.px.model.PaymentMethod, param1: string): com.mercadopago.android.px.model.Setting;
							public guessPaymentMethodsByBin(param0: string): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
							public saveBin(param0: string): void;
							public static getCardNumberLength(param0: com.mercadopago.android.px.model.PaymentMethod, param1: string): java.lang.Integer;
							public getAllSupportedPaymentMethods(): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module controllers {
						export class Timer {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.controllers.Timer>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.controllers.Timer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								start(param0: number): void;
								stop(): void;
								isTimerEnabled(): java.lang.Boolean;
								setOnFinishListener(param0: com.mercadopago.android.px.internal.controllers.Timer.FinishListener): void;
								finishCheckout(): void;
							});
							public constructor();
							public stop(): void;
							public setOnFinishListener(param0: com.mercadopago.android.px.internal.controllers.Timer.FinishListener): void;
							public finishCheckout(): void;
							public start(param0: number): void;
							public isTimerEnabled(): java.lang.Boolean;
						}
						export module Timer {
							export class FinishListener {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.controllers.Timer.FinishListener>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.controllers.Timer$FinishListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFinish(): void;
								});
								public constructor();
								public onFinish(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class AmountService extends com.mercadopago.android.px.internal.repository.AmountRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.AmountService>;
							public constructor(param0: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param1: com.mercadopago.android.px.internal.repository.ChargeRepository, param2: com.mercadopago.android.px.internal.repository.InstallmentRepository, param3: com.mercadopago.android.px.internal.repository.DiscountRepository);
							public getAppliedCharges(): java.math.BigDecimal;
							public getAmountToPay(): java.math.BigDecimal;
							public getItemsAmount(): java.math.BigDecimal;
							public getItemsPlusCharges(): java.math.BigDecimal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class ChargeService extends com.mercadopago.android.px.internal.repository.ChargeRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.ChargeService>;
							public getChargeAmount(): java.math.BigDecimal;
							public shouldApply(param0: com.mercadopago.android.px.model.commission.PaymentMethodRule): boolean;
							public constructor(param0: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class CheckoutStore {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.CheckoutStore>;
							public getCheckoutHooks(): com.mercadopago.android.px.internal.features.hooks.CheckoutHooks;
							public getData(): java.util.Map<string,any>;
							public static getInstance(): com.mercadopago.android.px.internal.datasource.CheckoutStore;
							public getHook(): com.mercadopago.android.px.internal.features.hooks.Hook;
							public setHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class CustomService {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.CustomService>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.datasource.CustomService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createPreference(param0: string, param1: java.util.Map<string,any>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.preferences.CheckoutPreference>;
								createPayment(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,string>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Payment>;
								getCustomer(param0: string, param1: java.util.Map<string,string>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Customer>;
							});
							public constructor();
							public createPayment(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,string>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Payment>;
							public createPreference(param0: string, param1: java.util.Map<string,any>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.preferences.CheckoutPreference>;
							public getCustomer(param0: string, param1: java.util.Map<string,string>): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Customer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class DiscountApiService {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.DiscountApiService>;
							public getDiscount(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Discount>;
							public constructor(param0: retrofit2.Retrofit, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
							public getCampaigns(): com.mercadopago.android.px.internal.callbacks.MPCall<java.util.List<com.mercadopago.android.px.model.Campaign>>;
							public getCodeDiscount(param0: java.math.BigDecimal, param1: string): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Discount>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class DiscountServiceImp extends com.mercadopago.android.px.internal.repository.DiscountRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.DiscountServiceImp>;
							public getDiscount(): com.mercadopago.android.px.model.Discount;
							public constructor(param0: com.mercadopago.android.px.internal.datasource.DiscountStorageService, param1: com.mercadopago.android.px.internal.datasource.DiscountApiService, param2: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
							public configureDiscountAutomatically(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.callbacks.MPCall<java.lang.Boolean>;
							public getCampaign(): com.mercadopago.android.px.model.Campaign;
							public hasCodeCampaign(): boolean;
							public configureMerchantDiscountManually(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
							public isNotAvailableDiscount(): boolean;
							public configureDiscountManually(param0: com.mercadopago.android.px.model.Discount, param1: com.mercadopago.android.px.model.Campaign): void;
							public getCodeDiscount(param0: java.math.BigDecimal, param1: string): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Discount>;
							public reset(): void;
							public getCampaign(param0: string): com.mercadopago.android.px.model.Campaign;
							public getDiscountCode(): string;
							public saveDiscountCode(param0: string): void;
							public hasValidDiscount(): boolean;
						}
						export module DiscountServiceImp {
							export class AutomaticDiscountCall extends com.mercadopago.android.px.internal.callbacks.MPCall<java.lang.Boolean> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.DiscountServiceImp.AutomaticDiscountCall>;
								public execute(param0: com.mercadopago.android.px.services.Callback<java.lang.Boolean>): void;
								public enqueue(param0: com.mercadopago.android.px.services.Callback<java.lang.Boolean>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class DiscountStorageService {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.DiscountStorageService>;
							public getDiscount(): com.mercadopago.android.px.model.Discount;
							public getDiscountCode(): string;
							public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.mercadopago.android.px.internal.util.JsonUtil);
							public saveDiscountCode(param0: string): void;
							public saveCampaigns(param0: java.util.List<com.mercadopago.android.px.model.Campaign>): void;
							public getCampaign(): com.mercadopago.android.px.model.Campaign;
							public hasCodeCampaign(): boolean;
							public getCampaigns(): java.util.List<com.mercadopago.android.px.model.Campaign>;
							public isNotAvailableDiscount(): boolean;
							public configureDiscountManually(param0: com.mercadopago.android.px.model.Discount, param1: com.mercadopago.android.px.model.Campaign, param2: boolean): void;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class EscManagerImp extends com.mercadopago.android.px.internal.repository.EscManager {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.EscManagerImp>;
							public hasEsc(param0: com.mercadopago.android.px.model.Card): boolean;
							public manageEscForPayment(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
							public constructor(param0: com.mercadopago.android.px.internal.datasource.MercadoPagoESC);
							public manageEscForError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: com.mercadopago.android.px.model.PaymentData): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class GroupsService extends com.mercadopago.android.px.internal.repository.GroupsRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.GroupsService>;
							public getGroups(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
							public constructor(param0: com.mercadopago.android.px.internal.repository.AmountRepository, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.datasource.MercadoPagoESC, param3: com.mercadopago.android.px.internal.services.CheckoutService, param4: string, param5: com.mercadopago.android.px.internal.datasource.cache.GroupsCache);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class InstallmentService extends com.mercadopago.android.px.internal.repository.InstallmentRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.InstallmentService>;
							public constructor(param0: com.mercadopago.android.px.internal.repository.UserSelectionRepository);
							public getInstallmentTotalAmount(): java.math.BigDecimal;
							public getInstallments(): com.mercadopago.android.px.internal.callbacks.MPCall<java.util.List<com.mercadopago.android.px.model.Installment>>;
							public getInstallmentAmount(): java.math.BigDecimal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class MercadoPagoESC {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.MercadoPagoESC>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.datasource.MercadoPagoESC interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getESC(param0: string): string;
								saveESC(param0: string, param1: string): boolean;
								deleteESC(param0: string): void;
								deleteAllESC(): void;
								getESCCardIds(): java.util.Set<string>;
								isESCEnabled(): boolean;
							});
							public constructor();
							public saveESC(param0: string, param1: string): boolean;
							public deleteESC(param0: string): void;
							public deleteAllESC(): void;
							public getESC(param0: string): string;
							public getESCCardIds(): java.util.Set<string>;
							public isESCEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class MercadoPagoESCImpl extends com.mercadopago.android.px.internal.datasource.MercadoPagoESC {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.MercadoPagoESCImpl>;
							public saveESC(param0: string, param1: string): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: boolean);
							public deleteESC(param0: string): void;
							public deleteAllESC(): void;
							public getESC(param0: string): string;
							public getESCCardIds(): java.util.Set<string>;
							public isESCEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class MercadoPagoPaymentConfiguration extends com.mercadopago.android.px.configuration.PaymentConfiguration {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.MercadoPagoPaymentConfiguration>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.core.PaymentProcessor);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class MercadoPagoPaymentProcessor extends com.mercadopago.android.px.core.PaymentProcessor {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.MercadoPagoPaymentProcessor>;
							public constructor();
							public getFragment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.support.v4.app.Fragment;
							public startPayment(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context, param2: com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener): void;
							public shouldShowFragmentOnPayment(): boolean;
							public getPaymentTimeout(): number;
							public getFragmentBundle(param0: com.mercadopago.android.px.core.PaymentProcessor.CheckoutData, param1: globalAndroid.content.Context): globalAndroid.os.Bundle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class MercadoPagoServicesAdapter {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.MercadoPagoServicesAdapter>;
							public createPayment(param0: com.mercadopago.android.px.model.PaymentBody, param1: com.mercadopago.android.px.services.Callback<com.mercadopago.android.px.model.Payment>): void;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class PaymentService extends com.mercadopago.android.px.internal.repository.PaymentRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.PaymentService>;
							public createPaymentResult(param0: com.mercadopago.android.px.model.IPayment): com.mercadopago.android.px.model.PaymentResult;
							public createPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
							public startPayment(): void;
							public attach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.repository.PluginRepository, param3: com.mercadopago.android.px.internal.repository.DiscountRepository, param4: com.mercadopago.android.px.internal.repository.AmountRepository, param5: com.mercadopago.android.px.core.PaymentProcessor, param6: globalAndroid.content.Context, param7: com.mercadopago.android.px.internal.repository.EscManager, param8: com.mercadopago.android.px.internal.repository.TokenRepository);
							public startOneTapPayment(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public getError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
							public hasPayment(): boolean;
							public isExplodingAnimationCompatible(): boolean;
							public getPayment(): com.mercadopago.android.px.model.IPayment;
							public createRecoveryForInvalidESC(): com.mercadopago.android.px.model.PaymentRecovery;
							public getPaymentData(): com.mercadopago.android.px.model.PaymentData;
							public detach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public storePayment(param0: com.mercadopago.android.px.model.IPayment): void;
							public getPaymentTimeout(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class PaymentSettingService extends com.mercadopago.android.px.internal.repository.PaymentSettingRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.PaymentSettingService>;
							public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.mercadopago.android.px.internal.util.JsonUtil);
							public getCheckoutPreferenceId(): string;
							public getCheckoutPreference(): com.mercadopago.android.px.preferences.CheckoutPreference;
							public getPrivateKey(): string;
							public getAdvancedConfiguration(): com.mercadopago.android.px.configuration.AdvancedConfiguration;
							public configure(param0: string): void;
							public reset(): void;
							public configure(param0: com.mercadopago.android.px.configuration.AdvancedConfiguration): void;
							public hasToken(): boolean;
							public getToken(): com.mercadopago.android.px.model.Token;
							public configure(param0: com.mercadopago.android.px.model.Token): void;
							public getPaymentConfiguration(): com.mercadopago.android.px.configuration.PaymentConfiguration;
							public configurePrivateKey(param0: string): void;
							public chargeRules(): java.util.List<com.mercadopago.android.px.model.commission.ChargeRule>;
							public configure(param0: com.mercadopago.android.px.preferences.CheckoutPreference): void;
							public getPublicKey(): string;
							public getTransactionId(): string;
							public configurePreferenceId(param0: string): void;
							public configure(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class PluginInitSync extends com.mercadopago.android.px.internal.repository.PluginInitTask {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.PluginInitSync>;
							public cancel(): void;
							public init(param0: com.mercadopago.android.px.internal.repository.PluginInitTask.DataInitializationCallbacks): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class PluginInitializationAsync extends com.mercadopago.android.px.internal.datasource.PluginInitSync {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.PluginInitializationAsync>;
							public cancel(): void;
							public constructor(param0: java.lang.Iterable<com.mercadopago.android.px.core.PaymentMethodPlugin>, param1: com.mercadopago.android.px.core.PaymentMethodPlugin.CheckoutData);
							public init(param0: com.mercadopago.android.px.internal.repository.PluginInitTask.DataInitializationCallbacks): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class PluginService extends com.mercadopago.android.px.internal.repository.PluginRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.PluginService>;
							public getPluginAsPaymentMethod(param0: string, param1: string): com.mercadopago.android.px.model.PaymentMethod;
							public getEnabledPlugins(): java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>;
							public getPlugin(param0: string): com.mercadopago.android.px.core.PaymentMethodPlugin;
							public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.repository.DiscountRepository);
							public getInitTask(param0: boolean): com.mercadopago.android.px.internal.repository.PluginInitTask;
							public getPaymentMethodInfo(param0: com.mercadopago.android.px.core.PaymentMethodPlugin): com.mercadopago.android.px.model.PaymentMethodInfo;
							public getPaymentMethodPluginCount(): number;
							public hasEnabledPaymentMethodPlugin(): boolean;
							public getFirstEnabledPlugin(): com.mercadopago.android.px.core.PaymentMethodPlugin;
							public getPaymentMethodInfo(param0: string): com.mercadopago.android.px.model.PaymentMethodInfo;
							public initialized(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class TokenizeService extends com.mercadopago.android.px.internal.repository.TokenRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.TokenizeService>;
							public constructor(param0: com.mercadopago.android.px.internal.services.GatewayService, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.datasource.MercadoPagoESC, param3: com.mercadopago.android.px.model.Device);
							public createToken(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Token>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export class UserSelectionService extends com.mercadopago.android.px.internal.repository.UserSelectionRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.UserSelectionService>;
							public getCard(): com.mercadopago.android.px.model.Card;
							public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.mercadopago.android.px.internal.util.JsonUtil);
							public select(param0: com.mercadopago.android.px.model.Issuer): void;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public hasSelectedPaymentMethod(): boolean;
							public getPayerCost(): com.mercadopago.android.px.model.PayerCost;
							public hasPayerCostSelected(): boolean;
							public select(param0: com.mercadopago.android.px.model.Card): void;
							public reset(): void;
							public getPaymentType(): string;
							public removePaymentMethodSelection(): void;
							public select(param0: com.mercadopago.android.px.model.PayerCost): void;
							public hasCardSelected(): boolean;
							public select(param0: com.mercadopago.android.px.model.PaymentMethod): void;
							public select(param0: string): void;
							public getIssuer(): com.mercadopago.android.px.model.Issuer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class CacheEvict {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.CacheEvict>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class CacheWriter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.CacheWriter>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class FileManager {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.FileManager>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class GroupsCache {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.GroupsCache>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.datasource.cache.GroupsCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									get(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
									put(param0: com.mercadopago.android.px.model.PaymentMethodSearch): void;
									evict(): void;
									isCached(): boolean;
								});
								public constructor();
								public get(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
								public put(param0: com.mercadopago.android.px.model.PaymentMethodSearch): void;
								public evict(): void;
								public isCached(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class GroupsCacheCoordinator extends com.mercadopago.android.px.internal.datasource.cache.GroupsCache {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.GroupsCacheCoordinator>;
								public get(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
								public put(param0: com.mercadopago.android.px.model.PaymentMethodSearch): void;
								public evict(): void;
								public constructor(param0: com.mercadopago.android.px.internal.datasource.cache.GroupsDiskCache, param1: com.mercadopago.android.px.internal.datasource.cache.GroupsMemCache);
								public isCached(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class GroupsDiskCache extends com.mercadopago.android.px.internal.datasource.cache.GroupsCache {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.GroupsDiskCache>;
								public constructor(param0: com.mercadopago.android.px.internal.datasource.cache.FileManager, param1: com.mercadopago.android.px.internal.util.JsonUtil, param2: java.io.File);
								public get(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
								public put(param0: com.mercadopago.android.px.model.PaymentMethodSearch): void;
								public evict(): void;
								public isCached(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module datasource {
						export module cache {
							export class GroupsMemCache extends com.mercadopago.android.px.internal.datasource.cache.GroupsCache {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.datasource.cache.GroupsMemCache>;
								public get(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
								public put(param0: com.mercadopago.android.px.model.PaymentMethodSearch): void;
								public constructor();
								public evict(): void;
								public isCached(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class AmountComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.AmountComponent>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.di.AmountComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAmountRepository(): com.mercadopago.android.px.internal.repository.AmountRepository;
							});
							public constructor();
							public getAmountRepository(): com.mercadopago.android.px.internal.repository.AmountRepository;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class ApplicationModule extends com.mercadopago.android.px.internal.di.PreferenceComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.ApplicationModule>;
							public getContext(): globalAndroid.content.Context;
							public getSharedPreferences(): globalAndroid.content.SharedPreferences;
							public getRetrofitClient(): retrofit2.Retrofit;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class ChargeSolverComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.ChargeSolverComponent>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.di.ChargeSolverComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getChargeSolver(): com.mercadopago.android.px.internal.repository.ChargeRepository;
							});
							public constructor();
							public getChargeSolver(): com.mercadopago.android.px.internal.repository.ChargeRepository;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class ConfigurationComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.ConfigurationComponent>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.di.ConfigurationComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPaymentSettings(): com.mercadopago.android.px.internal.repository.PaymentSettingRepository;
							});
							public constructor();
							public getPaymentSettings(): com.mercadopago.android.px.internal.repository.PaymentSettingRepository;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class ConfigurationModule extends com.mercadopago.android.px.internal.di.ApplicationModule implements com.mercadopago.android.px.internal.di.ConfigurationComponent, com.mercadopago.android.px.internal.di.UserSelectionComponent, com.mercadopago.android.px.internal.di.ChargeSolverComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.ConfigurationModule>;
							public getSharedPreferences(): globalAndroid.content.SharedPreferences;
							public getPaymentSettings(): com.mercadopago.android.px.internal.repository.PaymentSettingRepository;
							public getUserSelectionRepository(): com.mercadopago.android.px.internal.repository.UserSelectionRepository;
							public getChargeSolver(): com.mercadopago.android.px.internal.repository.ChargeRepository;
							public constructor(param0: globalAndroid.content.Context);
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class PreferenceComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.PreferenceComponent>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.di.PreferenceComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSharedPreferences(): globalAndroid.content.SharedPreferences;
							});
							public constructor();
							public getSharedPreferences(): globalAndroid.content.SharedPreferences;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class Session extends com.mercadopago.android.px.internal.di.ApplicationModule implements com.mercadopago.android.px.internal.di.AmountComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.Session>;
							public getPluginRepository(): com.mercadopago.android.px.internal.repository.PluginRepository;
							public setInternalConfiguration(param0: com.mercadopago.android.px.internal.configuration.InternalConfiguration): void;
							public getDevice(): com.mercadopago.android.px.model.Device;
							public getMercadoPagoESC(): com.mercadopago.android.px.internal.datasource.MercadoPagoESC;
							public getGroupsRepository(): com.mercadopago.android.px.internal.repository.GroupsRepository;
							public getBusinessModelMapper(): com.mercadopago.android.px.viewmodel.mappers.BusinessModelMapper;
							public static getSession(param0: globalAndroid.content.Context): com.mercadopago.android.px.internal.di.Session;
							public getMercadoPagoServiceAdapter(): com.mercadopago.android.px.internal.datasource.MercadoPagoServicesAdapter;
							public getDiscountRepository(): com.mercadopago.android.px.internal.repository.DiscountRepository;
							public getInternalConfiguration(): com.mercadopago.android.px.internal.configuration.InternalConfiguration;
							public init(param0: com.mercadopago.android.px.core.MercadoPagoCheckout): void;
							public getSharedPreferences(): globalAndroid.content.SharedPreferences;
							public getConfigurationModule(): com.mercadopago.android.px.internal.di.ConfigurationModule;
							public getAmountRepository(): com.mercadopago.android.px.internal.repository.AmountRepository;
							public getPaymentRepository(): com.mercadopago.android.px.internal.repository.PaymentRepository;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module di {
						export class UserSelectionComponent {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.di.UserSelectionComponent>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.di.UserSelectionComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getUserSelectionRepository(): com.mercadopago.android.px.internal.repository.UserSelectionRepository;
							});
							public constructor();
							public getUserSelectionRepository(): com.mercadopago.android.px.internal.repository.UserSelectionRepository;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class BankDealDetailActivity {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.BankDealDetailActivity>;
							public constructor();
							public static startWithBankDealLegals(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.BankDeal): void;
							public onError(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onSuccess(): void;
						}
						export module BankDealDetailActivity {
							export class BankDealDetailModel {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.BankDealDetailActivity.BankDealDetailModel>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.BankDealDetailActivity.BankDealDetailModel>;
								public describeContents(): number;
								public constructor(param0: globalAndroid.os.Parcel);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class BankDealsActivity extends com.mercadopago.android.px.internal.features.MercadoPagoActivity implements com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.BankDeal>  {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.BankDealsActivity>;
							public mMercadoPago: com.mercadopago.android.px.internal.datasource.MercadoPagoServicesAdapter;
							public mRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
							public mToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mBankDeals: java.util.List<com.mercadopago.android.px.model.BankDeal>;
							public constructor();
							public validateActivityParameters(): void;
							public setContentView(): void;
							public onInvalidStart(param0: string): void;
							public getActivityParameters(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public trackInitialScreen(param0: string): void;
							public onSelected(param0: any): void;
							public onSelected(param0: com.mercadopago.android.px.model.BankDeal): void;
							public onValidStart(): void;
							public solveBankDeals(param0: java.util.List<com.mercadopago.android.px.model.BankDeal>): void;
							public initializeControls(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class CheckoutActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.CheckoutView, com.mercadopago.android.px.internal.features.onetap.OneTapFragment.CallBack {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.CheckoutActivity>;
							public presenter: com.mercadopago.android.px.internal.features.CheckoutPresenter;
							public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public showOneTap(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public showPaymentProcessor(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public resolveCardVaultRequest(param0: number, param1: globalAndroid.content.Intent): void;
							public finishWithPaymentResult(): void;
							public cancelCheckout(): void;
							public showReviewAndConfirm(param0: boolean): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public resolveCodes(param0: number, param1: globalAndroid.content.Intent): void;
							public cancelCheckout(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public finishWithPaymentResult(param0: java.lang.Integer): void;
							public showReviewAndConfirmAndRecoverPayment(param0: boolean, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
							public trackScreen(): void;
							public static getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
							public constructor();
							public showPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
							public startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
							public isActive(): boolean;
							public finishWithPaymentResult(param0: java.lang.Integer, param1: com.mercadopago.android.px.model.Payment): void;
							public startPayment(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public showNewCardFlow(): void;
							public showProgress(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public showBusinessResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
							public onOneTapCanceled(): void;
							public getActivityParameters(): com.mercadopago.android.px.internal.features.CheckoutPresenter;
							public showSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
							public onChangePaymentMethod(): void;
							public cancelCheckout(param0: java.lang.Integer, param1: java.lang.Boolean): void;
							public exitCheckout(param0: number): void;
							public initializeMPTracker(): void;
							public showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
							public backToReviewAndConfirm(): void;
							public finishWithPaymentResult(param0: com.mercadopago.android.px.model.Payment): void;
							public showPaymentMethodSelection(): void;
							public transitionOut(): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class CheckoutPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.CheckoutView,com.mercadopago.android.px.internal.features.providers.CheckoutProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.CheckoutPresenter>;
							public onPaymentMethodSelectionError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public recoverFromReviewAndConfirm(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
							public retrievePaymentMethodSearch(): void;
							public getState(): com.mercadopago.android.px.internal.viewmodel.CheckoutStateModel;
							public detachView(): void;
							public onPaymentMethodSelectionResponse(): void;
							public getCampaign(): com.mercadopago.android.px.model.Campaign;
							public onVisualPayment(): void;
							public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
							public exitWithCode(param0: number): void;
							public recoverFromFailure(): void;
							public onCustomPaymentResultResponse(param0: java.lang.Integer): void;
							public cancelCheckout(): void;
							public onChangePaymentMethodFromReviewAndConfirm(): void;
							public onReviewAndConfirmError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public isESCEnabled(): boolean;
							public onPaymentResultResponse(): void;
							public constructor();
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public attachView(param0: any): void;
							public hook2Continue(): void;
							public initialize(): void;
							public onTerminalError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public recoverFromOneTap(): void;
							public onPaymentMethodSelectionCancel(): void;
							public getCheckoutPreference(): com.mercadopago.android.px.preferences.CheckoutPreference;
							public onReviewAndConfirmCancel(): void;
							public cancelInitialization(): void;
							public onCardFlowResponse(): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
							public onCustomReviewAndConfirmResponse(param0: java.lang.Integer): void;
							public onChangePaymentMethod(): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
							public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.CheckoutStateModel, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.repository.AmountRepository, param3: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param4: com.mercadopago.android.px.internal.repository.DiscountRepository, param5: com.mercadopago.android.px.internal.repository.GroupsRepository, param6: com.mercadopago.android.px.internal.repository.PluginRepository, param7: com.mercadopago.android.px.internal.repository.PaymentRepository, param8: com.mercadopago.android.px.internal.configuration.InternalConfiguration, param9: com.mercadopago.android.px.viewmodel.mappers.BusinessModelMapper);
							public attachView(param0: com.mercadopago.android.px.internal.features.CheckoutView): void;
							public onErrorCancel(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
							public changePaymentMethod(): void;
							public isUniquePaymentMethod(): boolean;
							public onCardFlowCancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class CheckoutView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.CheckoutView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.CheckoutView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								showProgress(): void;
								showReviewAndConfirm(param0: boolean): void;
								showPaymentMethodSelection(): void;
								showPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
								backToReviewAndConfirm(): void;
								finishWithPaymentResult(): void;
								finishWithPaymentResult(param0: java.lang.Integer): void;
								finishWithPaymentResult(param0: com.mercadopago.android.px.model.Payment): void;
								finishWithPaymentResult(param0: java.lang.Integer, param1: com.mercadopago.android.px.model.Payment): void;
								cancelCheckout(): void;
								cancelCheckout(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								cancelCheckout(param0: java.lang.Integer, param1: java.lang.Boolean): void;
								startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								initializeMPTracker(): void;
								trackScreen(): void;
								showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
								showPaymentProcessor(): void;
								isActive(): boolean;
								showBusinessResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
								showOneTap(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								hideProgress(): void;
								exitCheckout(param0: number): void;
								transitionOut(): void;
								showSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
								showNewCardFlow(): void;
								showReviewAndConfirmAndRecoverPayment(param0: boolean, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
								startPayment(): void;
							});
							public constructor();
							public showPaymentProcessor(): void;
							public showOneTap(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public finishWithPaymentResult(): void;
							public cancelCheckout(): void;
							public showReviewAndConfirm(param0: boolean): void;
							public cancelCheckout(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public finishWithPaymentResult(param0: java.lang.Integer): void;
							public showReviewAndConfirmAndRecoverPayment(param0: boolean, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
							public trackScreen(): void;
							public showPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
							public finishWithPaymentResult(param0: java.lang.Integer, param1: com.mercadopago.android.px.model.Payment): void;
							public startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
							public isActive(): boolean;
							public startPayment(): void;
							public showNewCardFlow(): void;
							public showProgress(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public showBusinessResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
							public showSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
							public cancelCheckout(param0: java.lang.Integer, param1: java.lang.Boolean): void;
							public exitCheckout(param0: number): void;
							public initializeMPTracker(): void;
							public showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
							public backToReviewAndConfirm(): void;
							public finishWithPaymentResult(param0: com.mercadopago.android.px.model.Payment): void;
							public showPaymentMethodSelection(): void;
							public transitionOut(): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class Constants {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants>;
							public static RESULT_PAYMENT: number;
							public static RESULT_ACTION: number;
							public static RESULT_CUSTOM_EXIT: number;
							public static RESULT_CANCELED_RYC: number;
							public static RESULT_CHANGE_PAYMENT_METHOD: number;
							public static RESULT_CANCEL_PAYMENT: number;
							public static RESULT_FAIL_ESC: number;
							public static RESULT_ERROR: number;
						}
						export module Constants {
							export class Activities {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities>;
								public static PAYMENT_METHODS_REQUEST_CODE: number;
								public static INSTALLMENTS_REQUEST_CODE: number;
								public static ISSUERS_REQUEST_CODE: number;
								public static CALL_FOR_AUTHORIZE_REQUEST_CODE: number;
								public static PENDING_REQUEST_CODE: number;
								public static REJECTION_REQUEST_CODE: number;
								public static PAYMENT_VAULT_REQUEST_CODE: number;
								public static BANK_DEALS_REQUEST_CODE: number;
								public static GUESSING_CARD_REQUEST_CODE: number;
								public static INSTRUCTIONS_REQUEST_CODE: number;
								public static CONGRATS_REQUEST_CODE: number;
								public static PAYMENT_TYPES_REQUEST_CODE: number;
								public static SECURITY_CODE_REQUEST_CODE: number;
								public static REVIEW_PAYMENT_METHODS_REQUEST_CODE: number;
								public static HOOK_1: number;
								public static HOOK_1_PLUGIN: number;
								public static HOOK_2: number;
								public static HOOK_3: number;
								public static PLUGIN_PAYMENT_METHOD_REQUEST_CODE: number;
							}
							export module Activities {
								export class BankDealsActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.BankDealsActivityBuilder>;
									public constructor();
									public setBankDeals(param0: java.util.List<com.mercadopago.android.px.model.BankDeal>): com.mercadopago.android.px.internal.features.Constants.Activities.BankDealsActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.BankDealsActivityBuilder;
								}
								export class CardVaultActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.CardVaultActivityBuilder>;
									public constructor();
									public setAutomaticSelection(param0: java.lang.Boolean): com.mercadopago.android.px.internal.features.Constants.Activities.CardVaultActivityBuilder;
									public startActivity(param0: globalAndroid.app.Activity, param1: number): void;
									public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): com.mercadopago.android.px.internal.features.Constants.Activities.CardVaultActivityBuilder;
									public setCard(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.features.Constants.Activities.CardVaultActivityBuilder;
									public startActivity(param0: globalAndroid.support.v4.app.Fragment, param1: number): void;
								}
								export class GuessingCardActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.GuessingCardActivityBuilder>;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.GuessingCardActivityBuilder;
									public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): com.mercadopago.android.px.internal.features.Constants.Activities.GuessingCardActivityBuilder;
									public constructor();
									public startActivity(): void;
									public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): com.mercadopago.android.px.internal.features.Constants.Activities.GuessingCardActivityBuilder;
									public setCard(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.features.Constants.Activities.GuessingCardActivityBuilder;
								}
								export class InstallmentsActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.InstallmentsActivityBuilder>;
									public constructor();
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.InstallmentsActivityBuilder;
									public setPayerCosts(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>): com.mercadopago.android.px.internal.features.Constants.Activities.InstallmentsActivityBuilder;
									public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): com.mercadopago.android.px.internal.features.Constants.Activities.InstallmentsActivityBuilder;
									public startActivity(): void;
									public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): com.mercadopago.android.px.internal.features.Constants.Activities.InstallmentsActivityBuilder;
								}
								export class IssuersActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.IssuersActivityBuilder>;
									public constructor();
									public setIssuers(param0: java.util.List<com.mercadopago.android.px.model.Issuer>): com.mercadopago.android.px.internal.features.Constants.Activities.IssuersActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.IssuersActivityBuilder;
									public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): com.mercadopago.android.px.internal.features.Constants.Activities.IssuersActivityBuilder;
								}
								export class PaymentMethodsActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.PaymentMethodsActivityBuilder>;
									public constructor();
									public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentMethodsActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentMethodsActivityBuilder;
								}
								export class PaymentTypesActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.PaymentTypesActivityBuilder>;
									public constructor();
									public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentTypesActivityBuilder;
									public setPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentTypesActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentTypesActivityBuilder;
									public setPaymentTypes(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentTypesActivityBuilder;
								}
								export class PaymentVaultActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.PaymentVaultActivityBuilder>;
									public constructor();
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.PaymentVaultActivityBuilder;
									public startActivity(): void;
								}
								export class ReviewPaymentMethodsActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.ReviewPaymentMethodsActivityBuilder>;
									public constructor();
									public setPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): com.mercadopago.android.px.internal.features.Constants.Activities.ReviewPaymentMethodsActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.ReviewPaymentMethodsActivityBuilder;
								}
								export class SecurityCodeActivityBuilder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder>;
									public constructor();
									public setTrackingReason(param0: string): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public startActivity(): void;
									public setActivity(param0: globalAndroid.app.Activity): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public setToken(param0: com.mercadopago.android.px.model.Token): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public setCard(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
									public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): com.mercadopago.android.px.internal.features.Constants.Activities.SecurityCodeActivityBuilder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class CustomerCardsView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.CustomerCardsView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.CustomerCardsView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showCards(param0: java.util.List<com.mercadopago.android.px.model.Card>, param1: string, param2: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.Card>): void;
								showConfirmPrompt(param0: com.mercadopago.android.px.model.Card): void;
								showProgress(): void;
								hideProgress(): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								finishWithCardResult(param0: com.mercadopago.android.px.model.Card): void;
								finishWithOkResult(): void;
							});
							public constructor();
							public showCards(param0: java.util.List<com.mercadopago.android.px.model.Card>, param1: string, param2: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.Card>): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showProgress(): void;
							public finishWithCardResult(param0: com.mercadopago.android.px.model.Card): void;
							public finishWithOkResult(): void;
							public showConfirmPrompt(param0: com.mercadopago.android.px.model.Card): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class DiscountsActivityView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.DiscountsActivityView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.DiscountsActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								drawSummary(): void;
								requestDiscountCode(): void;
								finishWithResult(): void;
								finishWithCancelResult(): void;
								showCodeInputError(param0: string): void;
								clearErrorView(): void;
								showProgressBar(): void;
								hideProgressBar(): void;
								showEmptyDiscountCodeError(): void;
								hideKeyboard(): void;
								setSoftInputModeSummary(): void;
								hideDiscountSummary(): void;
							});
							public constructor();
							public setSoftInputModeSummary(): void;
							public showProgressBar(): void;
							public finishWithResult(): void;
							public showCodeInputError(param0: string): void;
							public hideKeyboard(): void;
							public clearErrorView(): void;
							public showEmptyDiscountCodeError(): void;
							public hideDiscountSummary(): void;
							public requestDiscountCode(): void;
							public finishWithCancelResult(): void;
							public hideProgressBar(): void;
							public drawSummary(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class DiscountsPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.DiscountsActivityView,com.mercadopago.android.px.internal.features.providers.DiscountsProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.DiscountsPresenter>;
							public constructor();
							public getDiscount(): com.mercadopago.android.px.model.Discount;
							public attachView(param0: com.mercadopago.android.px.internal.features.DiscountsActivityView): void;
							public attachView(param0: any): void;
							public setTransactionAmount(param0: java.math.BigDecimal): void;
							public initialize(): void;
							public setMerchantPublicKey(param0: string): void;
							public getTransactionAmount(): java.math.BigDecimal;
							public getCouponAmount(): java.math.BigDecimal;
							public getCurrencyId(): string;
							public getPublicKey(): string;
							public setDiscount(param0: com.mercadopago.android.px.model.Discount): void;
							public validateDiscountCodeInput(param0: string): void;
							public setPayerEmail(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class ErrorActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.ErrorActivity>;
							public constructor();
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onBackPressed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class InstallmentsActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.InstallmentsActivityView, com.mercadopago.android.px.internal.features.codediscount.CodeDiscountDialog.DiscountListener {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.InstallmentsActivity>;
							public presenter: com.mercadopago.android.px.internal.features.InstallmentsPresenter;
							public mActivityActive: boolean;
							public mPayerCostsAdapter: com.mercadopago.android.px.internal.adapters.PayerCostsAdapter;
							public mInstallmentsRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
							public mLowResActive: boolean;
							public mLowResToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mLowResTitleToolbar: com.mercadopago.android.px.internal.view.MPTextView;
							public mCollapsingToolbar: globalAndroid.support.design.widget.CollapsingToolbarLayout;
							public mAppBar: globalAndroid.support.design.widget.AppBarLayout;
							public mCardContainer: globalAndroid.widget.FrameLayout;
							public mNormalToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mFrontCardView: com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView;
							public mTimerTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public loadViews(): void;
							public loadLowResViews(): void;
							public showInstallments(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
							public onFailureCodeDiscountCallback(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
							public showLoadingView(): void;
							public animateTransitionSlideInSlideOut(): void;
							public showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
							public showDetailDialog(): void;
							public trackScreen(): void;
							public onBackPressed(): void;
							public constructor();
							public setContentViewNormal(): void;
							public showApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onDiscountRetrieved(param0: com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public loadNormalViews(): void;
							public showDiscountInputDialog(): void;
							public showInstallmentsRecyclerView(): void;
							public warnAboutBankInterests(): void;
							public setContentView(): void;
							public setContentViewLowRes(): void;
							public finishWithResult(param0: com.mercadopago.android.px.model.PayerCost): void;
							public showHeader(): void;
							public analyzeLowRes(): void;
							public hideLoadingView(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class InstallmentsActivityView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.InstallmentsActivityView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.InstallmentsActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showInstallments(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
								finishWithResult(param0: com.mercadopago.android.px.model.PayerCost): void;
								showLoadingView(): void;
								hideLoadingView(): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								showHeader(): void;
								showInstallmentsRecyclerView(): void;
								warnAboutBankInterests(): void;
								showDetailDialog(): void;
								showDiscountInputDialog(): void;
								showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
								onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
								onFailureCodeDiscountCallback(): void;
							});
							public constructor();
							public showInstallments(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showDiscountInputDialog(): void;
							public showInstallmentsRecyclerView(): void;
							public warnAboutBankInterests(): void;
							public onFailureCodeDiscountCallback(): void;
							public finishWithResult(param0: com.mercadopago.android.px.model.PayerCost): void;
							public showHeader(): void;
							public onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
							public showLoadingView(): void;
							public hideLoadingView(): void;
							public showDetailDialog(): void;
							public showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class InstallmentsPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.InstallmentsActivityView,com.mercadopago.android.px.internal.features.providers.InstallmentsProvider> implements com.mercadopago.android.px.internal.view.AmountView.OnClick  {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.InstallmentsPresenter>;
							public constructor();
							public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): void;
							public getCardNumberLength(): java.lang.Integer;
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
							public initialize(): void;
							public getCardInfo(): com.mercadopago.android.px.model.CardInfo;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public getFailureRecovery(): com.mercadopago.android.px.internal.callbacks.FailureRecovery;
							public initializeAmountRow(): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.AmountRepository, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param3: com.mercadopago.android.px.internal.repository.DiscountRepository);
							public onItemSelected(param0: number): void;
							public recoverFromFailure(): void;
							public onDiscountRetrieved(): void;
							public onInputRequestClicked(): void;
							public setPayerCosts(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
							public onDetailClicked(): void;
							public isRequiredCardDrawn(): boolean;
							public getBin(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class IssuersActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.IssuersActivityView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.IssuersActivity>;
							public mPresenter: com.mercadopago.android.px.internal.features.IssuersPresenter;
							public mActivityActive: boolean;
							public mIssuersAdapter: com.mercadopago.android.px.internal.adapters.IssuersAdapter;
							public mIssuersRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
							public mLowResActive: boolean;
							public mLowResToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mLowResTitleToolbar: com.mercadopago.android.px.internal.view.MPTextView;
							public mTimerTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public mCollapsingToolbar: globalAndroid.support.design.widget.CollapsingToolbarLayout;
							public mAppBar: globalAndroid.support.design.widget.AppBarLayout;
							public mCardContainer: globalAndroid.widget.FrameLayout;
							public mNormalToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mFrontCardView: com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView;
							public mProgressLayout: globalAndroid.view.ViewGroup;
							public constructor();
							public showApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public finishWithResult(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public setContentView(): void;
							public showHeader(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public stopLoadingView(): void;
							public showIssuers(param0: java.util.List<com.mercadopago.android.px.model.Issuer>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
							public showLoadingView(): void;
							public animateTransitionSlideInSlideOut(): void;
							public analyzeLowRes(): void;
							public trackScreen(): void;
							public onBackPressed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class IssuersActivityView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.IssuersActivityView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.IssuersActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showIssuers(param0: java.util.List<com.mercadopago.android.px.model.Issuer>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
								showHeader(): void;
								showLoadingView(): void;
								stopLoadingView(): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								finishWithResult(): void;
							});
							public constructor();
							public finishWithResult(): void;
							public showHeader(): void;
							public stopLoadingView(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showIssuers(param0: java.util.List<com.mercadopago.android.px.model.Issuer>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>): void;
							public showLoadingView(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class IssuersPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.IssuersActivityView,com.mercadopago.android.px.internal.features.providers.IssuersProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.IssuersPresenter>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.internal.repository.UserSelectionRepository);
							public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): void;
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public initialize(): void;
							public setIssuers(param0: java.util.List<com.mercadopago.android.px.model.Issuer>): void;
							public getCardInfo(): com.mercadopago.android.px.model.CardInfo;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public getFailureRecovery(): com.mercadopago.android.px.internal.callbacks.FailureRecovery;
							public onItemSelected(param0: number): void;
							public recoverFromFailure(): void;
							public getBin(): string;
							public isRequiredCardDrawn(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export abstract class MercadoPagoActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.MercadoPagoActivity>;
							public constructor();
							public onBeforeCreation(): void;
							public isActivityActive(): boolean;
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public onStop(): void;
							public getActivityParameters(): void;
							public onDestroy(): void;
							public getActivity(): globalAndroid.app.Activity;
							public initializeControls(): void;
							public onResume(): void;
							public validateActivityParameters(): void;
							public setContentView(): void;
							public recoverFromFailure(): void;
							public onInvalidStart(param0: string): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public initializeFragments(param0: globalAndroid.os.Bundle): void;
							public onValidStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export abstract class MercadoPagoBaseActivity {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity>;
							public constructor();
							public overrideTransitionIn(): void;
							public overrideTransitionOut(): void;
							public overrideTransitionWithNoAnimation(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public overrideTransitionFadeInFadeOut(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PayerInformationActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.PayerInformationView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PayerInformationActivity>;
							public static IDENTIFICATION_NUMBER_BUNDLE: string;
							public static IDENTIFICATION_NAME_BUNDLE: string;
							public static IDENTIFICATION_LAST_NAME_BUNDLE: string;
							public static IDENTIFICATION_BUNDLE: string;
							public static IDENTIFICATION_TYPE_BUNDLE: string;
							public static IDENTIFICATION_TYPES_LIST_BUNDLE: string;
							public static IDENTIFICATION_NUMBER_INPUT: string;
							public static IDENTIFICATION_NAME_INPUT: string;
							public static IDENTIFICATION_LAST_NAME_INPUT: string;
							public static IDENTIFICATION_BUSINESS_NAME_INPUT: string;
							public static IDENTIFICATION_TYPE_CNPJ: string;
							public static ERROR_STATE: string;
							public static NORMAL_STATE: string;
							public mPresenter: com.mercadopago.android.px.internal.features.PayerInformationPresenter;
							public constructor();
							public showApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public showProgressBar(): void;
							public static start(param0: globalAndroid.app.Activity, param1: number): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public setNextButtonListeners(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public setErrorView(param0: string): void;
							public clearErrorIdentificationNumber(): void;
							public clearErrorName(): void;
							public hideProgressBar(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public setErrorLastName(): void;
							public initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
							public setIdentificationTypeListeners(): void;
							public setIdentificationNumberRestrictions(param0: string): void;
							public setErrorIdentificationNumber(): void;
							public setBackButtonListeners(): void;
							public setErrorName(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public clearErrorView(): void;
							public showInputContainer(): void;
							public onBackPressed(): void;
							public clearErrorLastName(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PayerInformationPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.PayerInformationView,com.mercadopago.android.px.internal.features.providers.PayerInformationProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PayerInformationPresenter>;
							public checkIsEmptyOrValidLastName(): boolean;
							public getFailureRecovery(): com.mercadopago.android.px.internal.callbacks.FailureRecovery;
							public getIdentification(): com.mercadopago.android.px.model.Identification;
							public setIdentification(param0: com.mercadopago.android.px.model.Identification): void;
							public saveIdentificationType(param0: com.mercadopago.android.px.model.IdentificationType): void;
							public validateLastName(): boolean;
							public getIdentificationTypes(): java.util.List<com.mercadopago.android.px.model.IdentificationType>;
							public getIdentificationType(): com.mercadopago.android.px.model.IdentificationType;
							public recoverFromFailure(): void;
							public validateIdentificationNumber(): boolean;
							public getIdentificationName(): string;
							public validateName(): boolean;
							public createPayer(): void;
							public constructor();
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
							public initialize(): void;
							public setIdentificationName(param0: string): void;
							public saveIdentificationNumber(param0: string): void;
							public validateBusinessName(): boolean;
							public setIdentificationNumber(param0: string): void;
							public setIdentificationType(param0: com.mercadopago.android.px.model.IdentificationType): void;
							public saveIdentificationName(param0: string): void;
							public setIdentificationTypesList(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
							public checkIsEmptyOrValidName(): boolean;
							public getIdentificationNumberMaxLength(): number;
							public getIdentificationLastName(): string;
							public getIdentificationNumber(): string;
							public saveIdentificationLastName(param0: string): void;
							public setIdentificationLastName(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PayerInformationView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PayerInformationView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.PayerInformationView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
								setIdentificationNumberRestrictions(param0: string): void;
								clearErrorIdentificationNumber(): void;
								clearErrorName(): void;
								clearErrorLastName(): void;
								setErrorIdentificationNumber(): void;
								setErrorName(): void;
								setErrorLastName(): void;
								setErrorView(param0: string): void;
								clearErrorView(): void;
								showInputContainer(): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								showProgressBar(): void;
								hideProgressBar(): void;
							});
							public constructor();
							public showProgressBar(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public setErrorView(param0: string): void;
							public clearErrorIdentificationNumber(): void;
							public clearErrorName(): void;
							public hideProgressBar(): void;
							public setErrorLastName(): void;
							public initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
							public setIdentificationNumberRestrictions(param0: string): void;
							public setErrorIdentificationNumber(): void;
							public setErrorName(): void;
							public clearErrorView(): void;
							public showInputContainer(): void;
							public clearErrorLastName(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentMethodsActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.PaymentMethodsView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentMethodsActivity>;
							public mRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
							public mToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mBankDealsTextView: globalAndroid.widget.TextView;
							public mTitle: globalAndroid.widget.TextView;
							public constructor();
							public getActivityParameters(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public showProgress(): void;
							public showPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public initializeControls(): void;
							public setContentView(): void;
							public recoverFromFailure(): void;
							public onInvalidStart(param0: string): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onValidStart(): void;
							public onBackPressed(): void;
							public showBankDeals(): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentMethodsPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.PaymentMethodsView,com.mercadopago.android.px.internal.features.providers.PaymentMethodsProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentMethodsPresenter>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.internal.repository.UserSelectionRepository);
							public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
							public recoverFromFailure(): void;
							public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
							public start(): void;
							public setSupportedPaymentTypes(param0: java.util.List<string>): void;
							public setShowBankDeals(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentMethodsView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentMethodsView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.PaymentMethodsView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
								showProgress(): void;
								hideProgress(): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								showBankDeals(): void;
							});
							public constructor();
							public showProgress(): void;
							public showPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public showBankDeals(): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentTypesActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.PaymentTypesActivityView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentTypesActivity>;
							public mPresenter: com.mercadopago.android.px.internal.features.PaymentTypesPresenter;
							public mLowResActive: boolean;
							public mLowResToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mTimerTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public mCollapsingToolbar: globalAndroid.support.design.widget.CollapsingToolbarLayout;
							public mAppBar: globalAndroid.support.design.widget.AppBarLayout;
							public mCardContainer: globalAndroid.widget.FrameLayout;
							public mNormalToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mFrontCardView: com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView;
							public constructor();
							public getDpadSelectionCallback(): com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<java.lang.Integer>;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public initializePaymentTypes(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
							public analizeLowRes(): void;
							public trackScreen(param0: string): void;
							public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public setContentView(): void;
							public onInvalidStart(param0: string): void;
							public startErrorView(param0: string, param1: string): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public stopLoadingView(): void;
							public showLoadingView(): void;
							public onValidStart(): void;
							public onBackPressed(): void;
							public finishWithResult(param0: com.mercadopago.android.px.model.PaymentType): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentTypesActivityView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentTypesActivityView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.PaymentTypesActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								startErrorView(param0: string, param1: string): void;
								onValidStart(): void;
								onInvalidStart(param0: string): void;
								initializePaymentTypes(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
								showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								showLoadingView(): void;
								stopLoadingView(): void;
								finishWithResult(param0: com.mercadopago.android.px.model.PaymentType): void;
							});
							public constructor();
							public onInvalidStart(param0: string): void;
							public startErrorView(param0: string, param1: string): void;
							public stopLoadingView(): void;
							public initializePaymentTypes(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
							public showLoadingView(): void;
							public onValidStart(): void;
							public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public finishWithResult(param0: com.mercadopago.android.px.model.PaymentType): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentTypesPresenter {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentTypesPresenter>;
							public constructor();
							public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): void;
							public initializePaymentMethod(): void;
							public getPaymentMethodList(): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
							public setView(param0: com.mercadopago.android.px.internal.features.PaymentTypesActivityView): void;
							public getCardInfo(): com.mercadopago.android.px.model.CardInfo;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public setPaymentMethodList(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public isCardInfoAvailable(): boolean;
							public validateActivityParameters(): void;
							public onItemSelected(param0: number): void;
							public recoverFromFailure(): void;
							public setPaymentTypesList(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
							public getPaymentTypeList(): java.util.List<com.mercadopago.android.px.model.PaymentType>;
							public loadPaymentTypes(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentVaultActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.PaymentVaultView, com.mercadopago.android.px.internal.features.codediscount.CodeDiscountDialog.DiscountListener {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentVaultActivity>;
							public static COLUMN_SPACING_DP_VALUE: number;
							public static COLUMNS: number;
							public mActivityActive: boolean;
							public mToken: com.mercadopago.android.px.model.Token;
							public mSelectedIssuer: com.mercadopago.android.px.model.Issuer;
							public mSelectedPayerCost: com.mercadopago.android.px.model.PayerCost;
							public mSelectedCard: com.mercadopago.android.px.model.Card;
							public mContext: globalAndroid.content.Context;
							public mSearchItemsRecyclerView: globalAndroid.support.v7.widget.RecyclerView;
							public mAppBar: globalAndroid.support.design.widget.AppBarLayout;
							public presenter: com.mercadopago.android.px.internal.features.PaymentVaultPresenter;
							public mAppBarLayout: globalAndroid.support.design.widget.CollapsingToolbarLayout;
							public mTimerTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public mProgressLayout: globalAndroid.view.View;
							public showPluginOptions(param0: java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>, param1: com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition): void;
							public getActivityParameters(): void;
							/** @deprecated */
							public showCustomOptions(param0: java.util.List<com.mercadopago.android.px.model.CustomSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.CustomSearchItem>): void;
							public onDestroy(): void;
							public onResume(): void;
							public finishPaymentMethodSelection(param0: com.mercadopago.android.px.model.PaymentMethod): void;
							public onFailureCodeDiscountCallback(): void;
							public cleanPaymentMethodOptions(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
							public showDetailDialog(): void;
							public showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
							public onBackPressed(): void;
							public resolveCardRequest(param0: number, param1: globalAndroid.content.Intent): void;
							public constructor();
							public showSearchItems(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethodSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.PaymentMethodSearchItem>): void;
							public showCustomOptions(param0: java.util.List<com.mercadopago.android.px.model.CustomSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.CustomSearchItem>): void;
							public showApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public startPaymentMethodsSelection(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
							public onStop(): void;
							public initialize(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onDiscountRetrieved(param0: com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showProgress(): void;
							public initializeControls(): void;
							public resolveHook1Request(param0: number): void;
							public showDiscountInputDialog(): void;
							public setTitle(param0: string): void;
							public startSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
							public setContentView(): void;
							public collectPayerInformation(): void;
							public finishWithCardResult(): void;
							public startCardFlow(param0: java.lang.Boolean): void;
							public onPause(): void;
							public populateSearchList(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethodSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.PaymentMethodSearchItem>): void;
							public showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
							public initializePaymentOptionsRecyclerView(): void;
							public showPaymentMethodPluginActivity(): void;
							public showSelectedItem(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentVaultPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.PaymentVaultView,com.mercadopago.android.px.internal.features.providers.PaymentVaultProvider> implements com.mercadopago.android.px.internal.view.AmountView.OnClick  {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentVaultPresenter>;
							public constructor();
							public initPaymentVaultFlow(): void;
							public trackInitialScreen(): void;
							public setSelectedSearchItem(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem): void;
							public onPayerInformationReceived(): void;
							public initialize(): void;
							public isItemSelected(): boolean;
							public showHook1(param0: string, param1: number): boolean;
							public initializeAmountRow(): void;
							public trackChildrenScreen(): void;
							public onHookContinue(): void;
							public getSelectedSearchItem(): com.mercadopago.android.px.model.PaymentMethodSearchItem;
							public recoverFromFailure(): void;
							public isOnlyOneItemAvailable(): boolean;
							public onInputRequestClicked(): void;
							public onHookReset(): void;
							public showHook1(param0: string): boolean;
							public selectPluginPaymentMethod(param0: com.mercadopago.android.px.core.PaymentMethodPlugin): void;
							public onPluginHookOneResult(): void;
							public onPaymentMethodReturned(): void;
							public onPluginAfterHookOne(): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param1: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param2: com.mercadopago.android.px.internal.repository.PluginRepository, param3: com.mercadopago.android.px.internal.repository.DiscountRepository, param4: com.mercadopago.android.px.internal.repository.GroupsRepository);
							public onDetailClicked(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class PaymentVaultView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.PaymentVaultView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.PaymentVaultView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								startSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
								showPaymentMethodPluginActivity(): void;
								showSelectedItem(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem): void;
								showProgress(): void;
								hideProgress(): void;
								showCustomOptions(param0: java.util.List<com.mercadopago.android.px.model.CustomSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.CustomSearchItem>): void;
								showPluginOptions(param0: java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>, param1: com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition): void;
								showSearchItems(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethodSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.PaymentMethodSearchItem>): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								setTitle(param0: string): void;
								startCardFlow(param0: java.lang.Boolean): void;
								startPaymentMethodsSelection(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
								finishPaymentMethodSelection(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
								collectPayerInformation(): void;
								cleanPaymentMethodOptions(): void;
								showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
								showDetailDialog(): void;
								showDiscountInputDialog(): void;
								onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
								onFailureCodeDiscountCallback(): void;
							});
							public constructor();
							public showSearchItems(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethodSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.PaymentMethodSearchItem>): void;
							public showCustomOptions(param0: java.util.List<com.mercadopago.android.px.model.CustomSearchItem>, param1: com.mercadopago.android.px.internal.callbacks.OnSelectedCallback<com.mercadopago.android.px.model.CustomSearchItem>): void;
							public showPluginOptions(param0: java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>, param1: com.mercadopago.android.px.core.PaymentMethodPlugin.PluginPosition): void;
							public startPaymentMethodsSelection(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showProgress(): void;
							public showDiscountInputDialog(): void;
							public setTitle(param0: string): void;
							public startSavedCardFlow(param0: com.mercadopago.android.px.model.Card): void;
							public finishPaymentMethodSelection(param0: com.mercadopago.android.px.model.PaymentMethod): void;
							public onFailureCodeDiscountCallback(): void;
							public collectPayerInformation(): void;
							public cleanPaymentMethodOptions(): void;
							public startCardFlow(param0: java.lang.Boolean): void;
							public showHook(param0: com.mercadopago.android.px.internal.features.hooks.Hook, param1: number): void;
							public onSuccessCodeDiscountCallback(param0: com.mercadopago.android.px.model.Discount): void;
							public showAmount(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
							public showDetailDialog(): void;
							public showPaymentMethodPluginActivity(): void;
							public showSelectedItem(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class ReviewPaymentMethodsActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.ReviewPaymentMethodsView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.ReviewPaymentMethodsActivity>;
							public mPresenter: com.mercadopago.android.px.internal.features.ReviewPaymentMethodsPresenter;
							public mPaymentMethodsView: globalAndroid.support.v7.widget.RecyclerView;
							public mAdapter: com.mercadopago.android.px.internal.adapters.ReviewPaymentMethodsAdapter;
							public mTryOtherCardButton: globalAndroid.widget.FrameLayout;
							public constructor();
							public setListeners(): void;
							public setContentView(): void;
							public getActivityParameters(): void;
							public initializeSupportedPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public createPresenter(): void;
							public initializeControls(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class ReviewPaymentMethodsPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.ReviewPaymentMethodsView,com.mercadopago.android.px.internal.features.providers.ReviewPaymentMethodsProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.ReviewPaymentMethodsPresenter>;
							public constructor();
							public setSupportedPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public initialize(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class ReviewPaymentMethodsView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.ReviewPaymentMethodsView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.ReviewPaymentMethodsView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								initializeSupportedPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							});
							public constructor();
							public initializeSupportedPaymentMethods(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class SecurityCodeActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.SecurityCodeActivityView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.SecurityCodeActivity>;
							public mSecurityCodePresenter: com.mercadopago.android.px.internal.features.SecurityCodePresenter;
							public static ERROR_STATE: string;
							public static NORMAL_STATE: string;
							public mReason: string;
							public mProgressLayout: globalAndroid.view.ViewGroup;
							public mSecurityCodeEditText: com.mercadopago.android.px.internal.view.MPEditText;
							public mNextButton: globalAndroid.widget.FrameLayout;
							public mBackButton: globalAndroid.widget.FrameLayout;
							public mNextButtonText: com.mercadopago.android.px.internal.view.MPTextView;
							public mBackButtonText: com.mercadopago.android.px.internal.view.MPTextView;
							public mButtonContainer: globalAndroid.widget.LinearLayout;
							public mErrorContainer: globalAndroid.widget.FrameLayout;
							public mErrorTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public mErrorState: string;
							public mBackground: globalAndroid.widget.FrameLayout;
							public mSecurityCodeCardIcon: globalAndroid.widget.ImageView;
							public mToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mCardContainer: globalAndroid.widget.FrameLayout;
							public mCardView: com.mercadopago.android.px.internal.features.uicontrollers.card.CardView;
							public mTimerTextView: com.mercadopago.android.px.internal.view.MPTextView;
							public constructor();
							public finishWithResult(): void;
							public initialize(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public showTimer(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public showBackSecurityCodeCardView(): void;
							public setContentView(): void;
							public showFrontSecurityCodeCardView(): void;
							public setBackButtonListeners(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public setSecurityCodeInputMaxLength(param0: number): void;
							public stopLoadingView(): void;
							public clearErrorView(): void;
							public showLoadingView(): void;
							public setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
							public onBackPressed(): void;
							public trackScreen(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class SecurityCodeActivityView extends com.mercadopago.android.px.internal.base.MvpView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.SecurityCodeActivityView>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.features.SecurityCodeActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setSecurityCodeInputMaxLength(param0: number): void;
								showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
								clearErrorView(): void;
								showLoadingView(): void;
								stopLoadingView(): void;
								showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								finishWithResult(): void;
								initialize(): void;
								showTimer(): void;
								trackScreen(): void;
								showBackSecurityCodeCardView(): void;
								showFrontSecurityCodeCardView(): void;
							});
							public constructor();
							public finishWithResult(): void;
							public initialize(): void;
							public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
							public showTimer(): void;
							public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
							public showBackSecurityCodeCardView(): void;
							public showFrontSecurityCodeCardView(): void;
							public setSecurityCodeInputMaxLength(param0: number): void;
							public clearErrorView(): void;
							public stopLoadingView(): void;
							public showLoadingView(): void;
							public setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
							public trackScreen(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class SecurityCodePresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.SecurityCodeActivityView,com.mercadopago.android.px.internal.features.providers.SecurityCodeProvider> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.SecurityCodePresenter>;
							public mCardInfo: com.mercadopago.android.px.model.CardInfo;
							public mCard: com.mercadopago.android.px.model.Card;
							public mToken: com.mercadopago.android.px.model.Token;
							public mPaymentRecovery: com.mercadopago.android.px.model.PaymentRecovery;
							public constructor();
							public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): void;
							public getCard(): com.mercadopago.android.px.model.Card;
							public getSecurityCodeLength(): number;
							public validate(): void;
							public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
							public constructor(param0: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
							public getCardInfo(): com.mercadopago.android.px.model.CardInfo;
							public initialize(): void;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
							public getCardNumberLength(): number;
							public getSecurityCodeLocation(): string;
							public saveSecurityCode(param0: string): void;
							public validateSecurityCodeInput(): void;
							public setToken(param0: com.mercadopago.android.px.model.Token): void;
							public getToken(): com.mercadopago.android.px.model.Token;
							public recoverFromFailure(): void;
							public setCard(param0: com.mercadopago.android.px.model.Card): void;
							public initializeSettings(): void;
							public getPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
							public setSecurityCodeCardType(): void;
							public putSecurityCode(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export class TermsAndConditionsActivity extends com.mercadopago.android.px.internal.features.MercadoPagoActivity {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.features.TermsAndConditionsActivity>;
							public static EXTRA_URL: string;
							public mMPTermsAndConditionsView: globalAndroid.view.View;
							public mTermsAndConditionsWebView: globalAndroid.webkit.WebView;
							public mProgressLayout: globalAndroid.view.ViewGroup;
							public mToolbar: globalAndroid.support.v7.widget.Toolbar;
							public mTitle: globalAndroid.widget.TextView;
							public constructor();
							public validateActivityParameters(): void;
							public setContentView(): void;
							public onInvalidStart(param0: string): void;
							public getActivityParameters(): void;
							public static start(param0: globalAndroid.content.Context, param1: string): void;
							public onValidStart(): void;
							public initializeControls(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module business_result {
							export class BusinessPaymentResultActivity implements com.mercadopago.android.px.internal.view.ActionDispatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.business_result.BusinessPaymentResultActivity>;
								public dispatch(param0: com.mercadopago.android.px.model.Action): void;
								public constructor();
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onBackPressed(): void;
								public static getIntent(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): globalAndroid.content.Intent;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module business_result {
							export module components {
								export class BusinessPaymentContainer extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
								export module BusinessPaymentContainer {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer.Props>;
										public constructor(param0: com.mercadopago.android.px.model.BusinessPayment, param1: com.mercadopago.android.px.internal.view.PaymentMethodComponent.PaymentMethodProps);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module business_result {
							export module components {
								export class BusinessPaymentRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.business_result.components.BusinessPaymentContainer, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class CardExpiryDateTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.CardExpiryDateTextWatcher>;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.CardExpiryDateEditTextCallback);
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class CardIdentificationNumberTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.CardIdentificationNumberTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.CardIdentificationNumberEditTextCallback);
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class CardNumberTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.CardNumberTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public constructor(param0: com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController, param1: com.mercadopago.android.px.internal.callbacks.PaymentMethodSelectionCallback, param2: com.mercadopago.android.px.internal.callbacks.card.CardNumberEditTextCallback);
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class CardSecurityCodeTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.CardSecurityCodeTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.CardSecurityCodeEditTextCallback);
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class CardholderNameTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.CardholderNameTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.CardholderNameEditTextCallback);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class TicketIdentificationNameTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.TicketIdentificationNameTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNameEditTextCallback);
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module card {
							export class TicketIdentificationNumberTextWatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.card.TicketIdentificationNumberTextWatcher>;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
								public constructor(param0: com.mercadopago.android.px.internal.callbacks.card.TicketIdentificationNumberEditTextCallback);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module cardvault {
							export class CardVaultActivity implements com.mercadopago.android.px.internal.features.cardvault.CardVaultView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.cardvault.CardVaultActivity>;
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public showProgressLayout(): void;
								public askForInstallmentsFromIssuers(): void;
								public resolveSecurityCodeRequest(param0: number, param1: globalAndroid.content.Intent): void;
								public startSecurityCodeActivity(param0: string): void;
								public constructor();
								public onDestroy(): void;
								public resolveGuessingCardRequest(param0: number, param1: globalAndroid.content.Intent): void;
								public askForInstallmentsFromNewCard(): void;
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public resolveIssuersRequest(param0: number, param1: globalAndroid.content.Intent): void;
								public resolveInstallmentsRequest(param0: number, param1: globalAndroid.content.Intent): void;
								public startIssuersActivity(): void;
								public askForSecurityCodeFromTokenRecovery(): void;
								public transitionWithNoAnimation(): void;
								public finishWithResult(): void;
								public askForCardInformation(): void;
								public animateTransitionSlideInSlideOut(): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public restoreInstanceState(param0: globalAndroid.os.Bundle): void;
								public cancelCardVault(): void;
								public askForInstallments(): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module cardvault {
							export class CardVaultPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.cardvault.CardVaultView,com.mercadopago.android.px.internal.features.providers.CardVaultProvider> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.cardvault.CardVaultPresenter>;
								public paymentMethod: com.mercadopago.android.px.model.PaymentMethod;
								public setPayerCost(param0: com.mercadopago.android.px.model.PayerCost): void;
								public onResultCancel(): void;
								public resolveInstallmentsRequest(param0: com.mercadopago.android.px.model.PayerCost): void;
								public resolveNewCardRequest(param0: com.mercadopago.android.px.model.PayerCost, param1: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
								public isInstallmentsListShown(): boolean;
								public setInstallmentsListShown(param0: boolean): void;
								public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public getCardNumberLength(): java.lang.Integer;
								public setPayerCostsList(param0: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
								public setESC(param0: string): void;
								public resolveIssuersRequest(): void;
								public initialize(): void;
								public constructor(param0: com.mercadopago.android.px.internal.repository.AmountRepository, param1: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param2: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param3: com.mercadopago.android.px.internal.datasource.MercadoPagoESC);
								public getToken(): com.mercadopago.android.px.model.Token;
								public setIssuersListShown(param0: boolean): void;
								public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
								public getPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
								public getPayerCostList(): java.util.List<com.mercadopago.android.px.model.PayerCost>;
								public setCardInfo(param0: com.mercadopago.android.px.model.CardInfo): void;
								public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public setAutomaticSelection(param0: boolean): void;
								public resolveSecurityCodeRequest(): void;
								public constructor();
								public setToken(param0: com.mercadopago.android.px.model.Token): void;
								public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
								public isSecurityCodeFlowNeeded(): boolean;
								public getCardInfo(): com.mercadopago.android.px.model.CardInfo;
								public startSecurityCodeFlowIfNeeded(): void;
								public setCard(param0: com.mercadopago.android.px.model.Card): void;
								public getCard(): com.mercadopago.android.px.model.Card;
								public isIssuersListShown(): boolean;
								public getPayerCost(): com.mercadopago.android.px.model.PayerCost;
								public recoverFromFailure(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module cardvault {
							export class CardVaultView extends com.mercadopago.android.px.internal.base.MvpView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.cardvault.CardVaultView>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.cardvault.CardVaultView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									finishWithResult(): void;
									showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
									showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
									askForInstallments(): void;
									startIssuersActivity(): void;
									startSecurityCodeActivity(param0: string): void;
									showProgressLayout(): void;
									askForCardInformation(): void;
									askForSecurityCodeFromTokenRecovery(): void;
									askForInstallmentsFromIssuers(): void;
									askForInstallmentsFromNewCard(): void;
									cancelCardVault(): void;
									animateTransitionSlideInSlideOut(): void;
									transitionWithNoAnimation(): void;
								});
								public constructor();
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public showProgressLayout(): void;
								public askForInstallmentsFromIssuers(): void;
								public startSecurityCodeActivity(param0: string): void;
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public askForInstallmentsFromNewCard(): void;
								public startIssuersActivity(): void;
								public askForSecurityCodeFromTokenRecovery(): void;
								public finishWithResult(): void;
								public transitionWithNoAnimation(): void;
								public askForCardInformation(): void;
								public animateTransitionSlideInSlideOut(): void;
								public askForInstallments(): void;
								public cancelCardVault(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module codediscount {
							export class CodeDiscountDialog implements com.mercadopago.android.px.internal.features.codediscount.CodeDiscountView, com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback, com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount.Action {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CodeDiscountDialog>;
								public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager): void;
								public onAttach(param0: globalAndroid.content.Context): void;
								public onSuccess(param0: com.mercadopago.android.px.model.Discount): void;
								public onFailure(): void;
								public constructor();
								public onClick(param0: globalAndroid.view.View): void;
								public onDestroy(): void;
								public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
								public processCodeError(): void;
								public processSuccess(param0: com.mercadopago.android.px.model.Discount): void;
								public processError(param0: string): void;
								public onButtonClicked(): void;
								public onDetach(): void;
								public getContentView(): number;
							}
							export module CodeDiscountDialog {
								export class DiscountListener {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CodeDiscountDialog.DiscountListener>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.codediscount.CodeDiscountDialog$DiscountListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onDiscountRetrieved(param0: com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback): void;
									});
									public constructor();
									public onDiscountRetrieved(param0: com.mercadopago.android.px.internal.callbacks.OnCodeDiscountCallback): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module codediscount {
							export class CodeDiscountPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.codediscount.CodeDiscountView,com.mercadopago.android.px.internal.repository.DiscountRepository> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CodeDiscountPresenter>;
								public amountRepository: com.mercadopago.android.px.internal.repository.AmountRepository;
								public getDiscountForCode(param0: string): void;
								public constructor();
								public constructor(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: com.mercadopago.android.px.internal.repository.AmountRepository);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module codediscount {
							export class CodeDiscountView extends com.mercadopago.android.px.internal.base.MvpView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CodeDiscountView>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.codediscount.CodeDiscountView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									processSuccess(param0: com.mercadopago.android.px.model.Discount): void;
									processCodeError(): void;
								});
								public constructor();
								public processSuccess(param0: com.mercadopago.android.px.model.Discount): void;
								public processCodeError(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module codediscount {
							export class CongratsCodeDiscount extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount.Props,java.lang.Void> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount>;
								public action: com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount.Action;
								public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							}
							export module CongratsCodeDiscount {
								export class Action {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount.Action>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onButtonClicked(): void;
									});
									public constructor();
									public onButtonClicked(): void;
								}
								export class Props {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.codediscount.CongratsCodeDiscount.Props>;
									public constructor(param0: com.mercadopago.android.px.model.Discount);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module explode {
							export class ExplodeDecorator {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.explode.ExplodeDecorator>;
								public getDarkPrimaryColor(): number;
								public constructor(param0: number, param1: number, param2: number);
								public getPrimaryColor(): number;
								public getStatusIcon(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module explode {
							export class ExplodeDecoratorMapper extends com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<com.mercadopago.android.px.model.IPayment,com.mercadopago.android.px.internal.features.explode.ExplodeDecorator> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.explode.ExplodeDecoratorMapper>;
								public map(param0: any): any;
								public constructor();
								public map(param0: com.mercadopago.android.px.model.IPayment): com.mercadopago.android.px.internal.features.explode.ExplodeDecorator;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module explode {
							export class ExplodeParams {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.explode.ExplodeParams>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.explode.ExplodeParams>;
								public describeContents(): number;
								public getPaymentTimeout(): number;
								public getButtonLeftRightMarginInPixels(): number;
								public constructor(param0: number, param1: number, param2: number, param3: string, param4: number);
								public getyButtonPositionInPixels(): number;
								public constructor(param0: globalAndroid.os.Parcel);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getButtonText(): string;
								public getButtonHeightInPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module explode {
							export class ExplodingFragment {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.explode.ExplodingFragment>;
								public static ICON_SCALE: number;
								public static newInstance(param0: com.mercadopago.android.px.internal.features.explode.ExplodeParams): com.mercadopago.android.px.internal.features.explode.ExplodingFragment;
								public onAttach(param0: globalAndroid.content.Context): void;
								public finishLoading(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
								public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
								public constructor();
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onDetach(): void;
							}
							export module ExplodingFragment {
								export class ExplodingAnimationListener {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.explode.ExplodingFragment$ExplodingAnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onAnimationFinished(): void;
									});
									public constructor();
									public onAnimationFinished(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module guessing_card {
							export class GuessingCardActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.guessing_card.GuessingCardActivityView, com.mercadopago.android.px.internal.callbacks.card.CardExpiryDateEditTextCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.guessing_card.GuessingCardActivity>;
								public static CARD_NUMBER_INPUT: string;
								public static CARDHOLDER_NAME_INPUT: string;
								public static CARD_EXPIRYDATE_INPUT: string;
								public static CARD_SECURITYCODE_INPUT: string;
								public static CARD_IDENTIFICATION_INPUT: string;
								public static CARD_IDENTIFICATION: string;
								public static ERROR_STATE: string;
								public static NORMAL_STATE: string;
								public static CARD_SIDE_STATE_BUNDLE: string;
								public static PAYMENT_METHOD_BUNDLE: string;
								public static ID_REQUIRED_BUNDLE: string;
								public static SEC_CODE_REQUIRED_BUNDLE: string;
								public static SEC_CODE_LENGTH_BUNDLE: string;
								public static CARD_NUMBER_LENGTH_BUNDLE: string;
								public static SEC_CODE_LOCATION_BUNDLE: string;
								public static CARD_TOKEN_BUNDLE: string;
								public static CARD_INFO_BIN_BUNDLE: string;
								public static EXPIRY_MONTH_BUNDLE: string;
								public static EXPIRY_YEAR_BUNDLE: string;
								public static CARD_NUMBER_BUNDLE: string;
								public static CARD_NAME_BUNDLE: string;
								public static IDENTIFICATION_BUNDLE: string;
								public static IDENTIFICATION_NUMBER_BUNDLE: string;
								public static IDENTIFICATION_TYPE_BUNDLE: string;
								public static PAYMENT_TYPES_LIST_BUNDLE: string;
								public static BANK_DEALS_LIST_BUNDLE: string;
								public static IDENTIFICATION_TYPES_LIST_BUNDLE: string;
								public static PAYMENT_RECOVERY_BUNDLE: string;
								public static LOW_RES_BUNDLE: string;
								public mLowResActive: boolean;
								public mPresenter: com.mercadopago.android.px.internal.features.guessing_card.GuessingCardPresenter;
								public toggleLineColorOnError(param0: boolean): void;
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public showInputContainer(): void;
								public deleteChar(param0: string): void;
								public hideIdentificationInput(): void;
								public setErrorContainerListener(): void;
								public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
								public setCardholderNameListeners(): void;
								public clearCardNumberEditTextMask(): void;
								public showIdentificationInput(): void;
								public trackCardNumber(): void;
								public setSecurityCodeListeners(): void;
								public trackCardHolderName(): void;
								public showBankDeals(): void;
								public setExpiryDateListeners(): void;
								public setErrorCardholderName(): void;
								public trackCardExpiryDate(): void;
								public initializeTimer(): void;
								public clearErrorView(): void;
								public saveExpiryYear(param0: string): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public setExclusionWithOneElementInfoView(param0: com.mercadopago.android.px.model.PaymentMethod, param1: boolean): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onResume(): void;
								public hideRedErrorContainerView(param0: boolean): void;
								public setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
								public hideExclusionWithOneElementInfoView(): void;
								public setErrorIdentificationNumber(): void;
								public setInvalidCardMultipleErrorView(): void;
								public constructor();
								public setErrorSecurityCode(): void;
								public onClick(param0: globalAndroid.view.View): void;
								public onDestroy(): void;
								public onStop(): void;
								public onValidStart(): void;
								public setSecurityCodeInputMaxLength(param0: number): void;
								public setInvalidCardOnePaymentMethodErrorView(): void;
								public changeErrorView(): void;
								public hideProgress(): void;
								public hideSecurityCodeInput(): void;
								public initializeTitle(): void;
								public setNextButtonListeners(): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public setSecurityCodeViewLocation(param0: string): void;
								public setErrorExpiryDate(): void;
								public restoreBlackInfoContainerView(): void;
								public setSoftInputMode(): void;
								public showFinishCardFlow(): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
								public trackCardIdentification(): void;
								public trackScreen(): void;
								public setBackButtonListeners(): void;
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public setIdentificationNumber(param0: string): void;
								public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
								public clearCardNumberInputLength(): void;
								public setIdentificationNumberRestrictions(param0: string): void;
								public clearErrorIdentificationNumber(): void;
								public setIdentificationTypeListeners(): void;
								public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
								public setContainerAnimationListeners(): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: java.util.List<com.mercadopago.android.px.model.Issuer>): void;
								public setCardholderName(param0: string): void;
								public hideBankDeals(): void;
								public initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
								public setIdentificationNumberListeners(): void;
								public showSecurityCodeInput(): void;
								public saveExpiryMonth(param0: string): void;
								public checkClearCardView(): void;
								public appendDivider(): void;
								public setErrorView(param0: string): void;
								public resolvePaymentMethodSet(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: com.mercadopago.android.px.model.PayerCost): void;
								public clearSecurityCodeEditText(): void;
								public askForPaymentType(): void;
								public setCardNumberInputMaxLength(param0: number): void;
								public onBackPressed(): void;
								public setCardNumberListeners(param0: com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController): void;
								public onPause(): void;
								public checkOpenKeyboard(): void;
								public showApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public trackCardSecurityCode(): void;
								public setErrorCardNumber(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module guessing_card {
							export class GuessingCardActivityView extends com.mercadopago.android.px.internal.base.MvpView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.guessing_card.GuessingCardActivityView>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.guessing_card.GuessingCardActivityView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onValidStart(): void;
									initializeTimer(): void;
									showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
									setCardNumberListeners(param0: com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController): void;
									showInputContainer(): void;
									showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
									setCardNumberInputMaxLength(param0: number): void;
									setSecurityCodeInputMaxLength(param0: number): void;
									setSecurityCodeViewLocation(param0: string): void;
									initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
									setNextButtonListeners(): void;
									setBackButtonListeners(): void;
									setErrorContainerListener(): void;
									setContainerAnimationListeners(): void;
									setIdentificationTypeListeners(): void;
									setIdentificationNumberListeners(): void;
									hideSecurityCodeInput(): void;
									hideIdentificationInput(): void;
									showIdentificationInput(): void;
									showSecurityCodeInput(): void;
									setCardholderNameListeners(): void;
									setExpiryDateListeners(): void;
									setSecurityCodeListeners(): void;
									setIdentificationNumberRestrictions(param0: string): void;
									hideBankDeals(): void;
									showBankDeals(): void;
									clearErrorView(): void;
									setErrorView(param0: string): void;
									setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
									setErrorCardNumber(): void;
									setErrorCardholderName(): void;
									setErrorExpiryDate(): void;
									setErrorSecurityCode(): void;
									setErrorIdentificationNumber(): void;
									clearErrorIdentificationNumber(): void;
									initializeTitle(): void;
									setCardholderName(param0: string): void;
									setIdentificationNumber(param0: string): void;
									setSoftInputMode(): void;
									finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: java.util.List<com.mercadopago.android.px.model.Issuer>): void;
									finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
									finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: com.mercadopago.android.px.model.PayerCost): void;
									hideProgress(): void;
									setExclusionWithOneElementInfoView(param0: com.mercadopago.android.px.model.PaymentMethod, param1: boolean): void;
									hideExclusionWithOneElementInfoView(): void;
									setInvalidCardOnePaymentMethodErrorView(): void;
									setInvalidCardMultipleErrorView(): void;
									resolvePaymentMethodSet(param0: com.mercadopago.android.px.model.PaymentMethod): void;
									clearSecurityCodeEditText(): void;
									checkClearCardView(): void;
									hideRedErrorContainerView(param0: boolean): void;
									restoreBlackInfoContainerView(): void;
									clearCardNumberInputLength(): void;
									clearCardNumberEditTextMask(): void;
									askForPaymentType(): void;
									showFinishCardFlow(): void;
									setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								});
								public constructor();
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public showInputContainer(): void;
								public hideIdentificationInput(): void;
								public setErrorContainerListener(): void;
								public setCardholderNameListeners(): void;
								public showIdentificationInput(): void;
								public clearCardNumberEditTextMask(): void;
								public setSecurityCodeListeners(): void;
								public showBankDeals(): void;
								public setExpiryDateListeners(): void;
								public setErrorCardholderName(): void;
								public initializeTimer(): void;
								public clearErrorView(): void;
								public setExclusionWithOneElementInfoView(param0: com.mercadopago.android.px.model.PaymentMethod, param1: boolean): void;
								public hideRedErrorContainerView(param0: boolean): void;
								public setErrorView(param0: com.mercadopago.android.px.model.exceptions.CardTokenException): void;
								public setErrorIdentificationNumber(): void;
								public hideExclusionWithOneElementInfoView(): void;
								public setInvalidCardMultipleErrorView(): void;
								public setErrorSecurityCode(): void;
								public onValidStart(): void;
								public setSecurityCodeInputMaxLength(param0: number): void;
								public setInvalidCardOnePaymentMethodErrorView(): void;
								public hideProgress(): void;
								public hideSecurityCodeInput(): void;
								public setNextButtonListeners(): void;
								public initializeTitle(): void;
								public setSecurityCodeViewLocation(param0: string): void;
								public setErrorExpiryDate(): void;
								public setSoftInputMode(): void;
								public restoreBlackInfoContainerView(): void;
								public showFinishCardFlow(): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: java.util.List<com.mercadopago.android.px.model.PayerCost>): void;
								public setBackButtonListeners(): void;
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public setIdentificationNumber(param0: string): void;
								public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public clearCardNumberInputLength(): void;
								public setIdentificationNumberRestrictions(param0: string): void;
								public clearErrorIdentificationNumber(): void;
								public setIdentificationTypeListeners(): void;
								public setContainerAnimationListeners(): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: java.util.List<com.mercadopago.android.px.model.Issuer>): void;
								public setCardholderName(param0: string): void;
								public hideBankDeals(): void;
								public initializeIdentificationTypes(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
								public setIdentificationNumberListeners(): void;
								public showSecurityCodeInput(): void;
								public setErrorView(param0: string): void;
								public checkClearCardView(): void;
								public resolvePaymentMethodSet(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public finishCardFlow(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: com.mercadopago.android.px.model.PayerCost): void;
								public clearSecurityCodeEditText(): void;
								public askForPaymentType(): void;
								public setCardNumberInputMaxLength(param0: number): void;
								public setCardNumberListeners(param0: com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController): void;
								public setErrorCardNumber(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module guessing_card {
							export class GuessingCardPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.guessing_card.GuessingCardActivityView,com.mercadopago.android.px.internal.features.providers.GuessingCardProvider> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.guessing_card.GuessingCardPresenter>;
								public static CARD_DEFAULT_SECURITY_CODE_LENGTH: number;
								public static CARD_DEFAULT_IDENTIFICATION_NUMBER_LENGTH: number;
								public setSecurityCodeLocation(param0: string): void;
								public checkIsEmptyOrValidExpiryDate(): boolean;
								public getPaymentTypes(): java.util.List<com.mercadopago.android.px.model.PaymentType>;
								public checkFinishWithCardToken(): void;
								public setPaymentPreference(param0: com.mercadopago.android.px.preferences.PaymentPreference): void;
								public resolveTokenRequest(param0: com.mercadopago.android.px.model.Token): void;
								public onPaymentMethodRestored(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public getCardNumberLength(): java.lang.Integer;
								public getIdentificationNumberMaxLength(): number;
								public setExpiryMonth(param0: string): void;
								public isSecurityCodeRequired(): boolean;
								public checkIsEmptyOrValidCardholderName(): boolean;
								public setSecurityCodeRequired(param0: boolean): void;
								public getFailureRecovery(): com.mercadopago.android.px.internal.callbacks.FailureRecovery;
								public validateIdentificationNumber(): boolean;
								public initialize(): void;
								public saveExpiryYear(param0: string): void;
								public saveIdentificationNumber(param0: string): void;
								public finishCardFlow(): void;
								public getCardToken(): com.mercadopago.android.px.model.CardToken;
								public getSecurityCodeFront(): string;
								public onPaymentMethodSet(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public getAllSupportedPaymentMethods(): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
								public getIdentification(): com.mercadopago.android.px.model.Identification;
								public getPaymentTypeId(): string;
								public resolvePaymentMethodCleared(): void;
								public getSecurityCodeLength(): number;
								public validateCardNumber(): boolean;
								public constructor();
								public getSecurityCodeLocation(): string;
								public setCardNumber(param0: string): void;
								public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
								public setToken(param0: com.mercadopago.android.px.model.Token): void;
								public initializeGuessingCardNumberController(): void;
								public checkIsEmptyOrValidIdentificationNumber(): boolean;
								public setSelectedPaymentType(param0: com.mercadopago.android.px.model.PaymentType): void;
								public getTrackingContext(): com.mercadopago.android.px.internal.tracker.MPTrackingContext;
								public constructor(param0: com.mercadopago.android.px.internal.repository.AmountRepository, param1: com.mercadopago.android.px.internal.repository.UserSelectionRepository, param2: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param3: com.mercadopago.android.px.internal.repository.GroupsRepository, param4: com.mercadopago.android.px.configuration.AdvancedConfiguration);
								public setBankDealsList(param0: java.util.List<com.mercadopago.android.px.model.BankDeal>): void;
								public setIdentification(param0: com.mercadopago.android.px.model.Identification): void;
								public validateExpiryDate(): boolean;
								public getBankDealsList(): java.util.List<com.mercadopago.android.px.model.BankDeal>;
								public setIdentificationNumberRequired(param0: boolean): void;
								public getSecurityCode(): string;
								public isDefaultSpaceErasable(): boolean;
								public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								public setIdentificationNumber(param0: string): void;
								public getExpiryMonth(): string;
								public getIdentificationType(): com.mercadopago.android.px.model.IdentificationType;
								public setCardToken(param0: com.mercadopago.android.px.model.CardToken): void;
								public setPaymentTypesList(param0: java.util.List<com.mercadopago.android.px.model.PaymentType>): void;
								public resolveBankDeals(): void;
								public saveSecurityCode(param0: string): void;
								public getExpiryYear(): string;
								public setExpiryYear(param0: string): void;
								public setBin(param0: string): void;
								public getIdentificationTypes(): java.util.List<com.mercadopago.android.px.model.IdentificationType>;
								public getPaymentPreference(): com.mercadopago.android.px.preferences.PaymentPreference;
								public getToken(): com.mercadopago.android.px.model.Token;
								public setCardholderName(param0: string): void;
								public validateCardName(): boolean;
								public validateSecurityCode(): boolean;
								public getIdentificationNumber(): string;
								public setFailureRecovery(param0: com.mercadopago.android.px.internal.callbacks.FailureRecovery): void;
								public getPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
								public saveIdentificationType(param0: com.mercadopago.android.px.model.IdentificationType): void;
								public hasToShowPaymentTypes(): boolean;
								public resolvePaymentMethodListSet(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>, param1: string): void;
								public checkIsEmptyOrValidSecurityCode(): boolean;
								public getGuessingController(): com.mercadopago.android.px.internal.controllers.PaymentMethodGuessingController;
								public setPaymentRecovery(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public getSavedBin(): string;
								public saveExpiryMonth(param0: string): void;
								public setSecurityCodeLength(param0: number): void;
								public setIdentificationTypesList(param0: java.util.List<com.mercadopago.android.px.model.IdentificationType>): void;
								public enablePaymentTypeSelection(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): void;
								public saveCardholderName(param0: string): void;
								public saveCardNumber(param0: string): void;
								public getCardNumber(): string;
								public isIdentificationNumberRequired(): boolean;
								public clearSpaceErasableSettings(): void;
								public setCurrentNumberLength(param0: number): void;
								public shouldAskPaymentType(param0: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): boolean;
								public getCardholderName(): string;
								public saveBin(param0: string): void;
								public getGuessedPaymentMethods(): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
								public disablePaymentTypeSelection(): void;
								public recoverFromFailure(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export class CheckoutHooks {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.CheckoutHooks>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.hooks.CheckoutHooks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									beforePaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
									afterPaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
									beforePayment(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
								});
								public constructor();
								public beforePaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
								public beforePayment(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
								public afterPaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export class DefaultCheckoutHooks extends com.mercadopago.android.px.internal.features.hooks.CheckoutHooks {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.DefaultCheckoutHooks>;
								public beforePaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
								public beforePayment(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
								public constructor();
								public afterPaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props): com.mercadopago.android.px.internal.features.hooks.Hook;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export abstract class Hook {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.Hook>;
								public isEnabled(): boolean;
								public createComponent(): com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.hooks.HookComponent.Props,java.lang.Void>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export class HookActivity implements com.mercadopago.android.px.internal.view.ActionDispatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookActivity>;
								public dispatch(param0: com.mercadopago.android.px.model.Action): void;
								public constructor();
								public static getIntent(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.hooks.Hook): globalAndroid.content.Intent;
								public onCreate(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export abstract class HookComponent<T>  extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.hooks.HookComponent.Props,any> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookComponent<any>>;
								public constructor(param0: any);
								public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								public onContinue(): void;
								public constructor(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props);
								public getToolbarComponent(): com.mercadopago.android.px.internal.view.ToolbarComponent;
							}
							export module HookComponent {
								export class Props {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookComponent.Props>;
									public data: java.util.Map<string,any>;
									public paymentTypeId: string;
									public paymentData: com.mercadopago.android.px.model.PaymentData;
									public toolbarTitle: string;
									public toolbarVisible: boolean;
									public constructor(param0: com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder);
									public toBuilder(): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
								}
								export module Props {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder>;
										public data: java.util.Map<string,any>;
										public paymentTypeId: string;
										public paymentData: com.mercadopago.android.px.model.PaymentData;
										public toolbarTitle: string;
										public toolbarVisible: boolean;
										public setPaymentData(param0: com.mercadopago.android.px.model.PaymentData): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
										public setToolbarVisible(param0: boolean): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
										public constructor();
										public build(): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props;
										public setPaymentTypeId(param0: string): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
										public setToolbarTitle(param0: string): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
										public setData(param0: java.util.Map<string,any>): com.mercadopago.android.px.internal.features.hooks.HookComponent.Props.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export class HookHelper {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookHelper>;
								public static activateAfterPaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.CheckoutHooks, param1: com.mercadopago.android.px.model.PaymentData, param2: java.util.Map<string,any>): com.mercadopago.android.px.internal.features.hooks.Hook;
								public static activateBeforePayment(param0: com.mercadopago.android.px.internal.features.hooks.CheckoutHooks, param1: com.mercadopago.android.px.model.PaymentData, param2: java.util.Map<string,any>): com.mercadopago.android.px.internal.features.hooks.Hook;
								public constructor();
								public static activateBeforePaymentMethodConfig(param0: com.mercadopago.android.px.internal.features.hooks.CheckoutHooks, param1: string, param2: java.util.Map<string,any>): com.mercadopago.android.px.internal.features.hooks.Hook;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export class HookProps {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookProps>;
								public paymentData: com.mercadopago.android.px.model.PaymentData;
								public paymentResult: com.mercadopago.android.px.model.PaymentResult;
								public constructor(param0: com.mercadopago.android.px.model.PaymentData, param1: com.mercadopago.android.px.model.PaymentResult);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module hooks {
							export abstract class HookRenderer<T>  extends com.mercadopago.android.px.internal.view.Renderer<any> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.hooks.HookRenderer<any>>;
								public renderContents(param0: any, param1: globalAndroid.content.Context): globalAndroid.view.View;
								public constructor();
								public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								public render(): globalAndroid.view.View;
								public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export class OneTap {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTap>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.onetap.OneTap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module OneTap {
								export class Actions extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTap.Actions>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.onetap.OneTap$Actions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										confirmPayment(param0: number, param1: number): void;
										onTokenResolved(): void;
										changePaymentMethod(): void;
										onAmountShowMore(): void;
										onViewResumed(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
										onViewPaused(): void;
										onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
										onVisualPayment(): void;
										onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
										onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									});
									public constructor();
									public onAmountShowMore(): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
									public confirmPayment(param0: number, param1: number): void;
									public onTokenResolved(): void;
									public onViewResumed(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
									public onVisualPayment(): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
									public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
									public changePaymentMethod(): void;
									public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
									public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public onViewPaused(): void;
								}
								export class View extends com.mercadopago.android.px.internal.base.MvpView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTap.View>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.onetap.OneTap$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										cancel(): void;
										changePaymentMethod(): void;
										showCardFlow(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel, param1: com.mercadopago.android.px.model.Card): void;
										showDetailModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
										trackConfirm(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
										trackCancel(): void;
										trackModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
										showPaymentProcessor(): void;
										showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
										cancelLoading(): void;
										startLoadingButton(param0: number, param1: number, param2: number): void;
										showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
										showPaymentResult(param0: com.mercadopago.android.px.model.IPayment): void;
										onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
										startPayment(): void;
										hideToolbar(): void;
										hideConfirmButton(): void;
										updateViews(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
										showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									});
									public constructor();
									public trackConfirm(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
									public cancel(): void;
									public trackCancel(): void;
									public showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public startPayment(): void;
									public showPaymentResult(param0: com.mercadopago.android.px.model.IPayment): void;
									public showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
									public showCardFlow(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel, param1: com.mercadopago.android.px.model.Card): void;
									public trackModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
									public showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public showPaymentProcessor(): void;
									public showDetailModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
									public cancelLoading(): void;
									public startLoadingButton(param0: number, param1: number, param2: number): void;
									public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
									public hideConfirmButton(): void;
									public hideToolbar(): void;
									public changePaymentMethod(): void;
									public updateViews(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export class OneTapFragment implements com.mercadopago.android.px.internal.features.onetap.OneTap.View {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTapFragment>;
								public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public startPayment(): void;
								public cancelLoading(): void;
								public onAttach(param0: globalAndroid.content.Context): void;
								public hideToolbar(): void;
								public updateViews(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								public showCardFlow(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel, param1: com.mercadopago.android.px.model.Card): void;
								public showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public trackConfirm(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
								public changePaymentMethod(): void;
								public showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public cancel(): void;
								public onResume(): void;
								public trackCancel(): void;
								public constructor();
								public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
								public onPause(): void;
								public showPaymentResult(param0: com.mercadopago.android.px.model.IPayment): void;
								public hideConfirmButton(): void;
								public showPaymentProcessor(): void;
								public showDetailModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								public trackModal(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								public startLoadingButton(param0: number, param1: number, param2: number): void;
								public showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public static getInstance(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): com.mercadopago.android.px.internal.features.onetap.OneTapFragment;
								public onDetach(): void;
							}
							export module OneTapFragment {
								export class CallBack {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTapFragment.CallBack>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.onetap.OneTapFragment$CallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onOneTapCanceled(): void;
										onChangePaymentMethod(): void;
									});
									public constructor();
									public onChangePaymentMethod(): void;
									public onOneTapCanceled(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export class OneTapPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.onetap.OneTap.View,com.mercadopago.android.px.internal.base.ResourcesProvider> implements com.mercadopago.android.px.internal.features.onetap.OneTap.Actions  {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.OneTapPresenter>;
								public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
								public cancel(): void;
								public onAmountShowMore(): void;
								public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public onViewResumed(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								public detachView(): void;
								public onTokenResolved(): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
								public onViewPaused(): void;
								public confirmPayment(param0: number, param1: number): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
								public onVisualPayment(): void;
								public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
								public changePaymentMethod(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export class PaymentDetailInfoDialog {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.PaymentDetailInfoDialog>;
								public getTitle(): string;
								public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager): void;
								public constructor();
								public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
								public getContentView(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class Amount extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.Amount.Props,com.mercadopago.android.px.internal.features.onetap.OneTap.Actions> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.Amount>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module Amount {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.Amount.Props>;
										public isNotAvailableDiscount(): boolean;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class CollapsedItem extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.CollapsedItem.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.CollapsedItem>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module CollapsedItem {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.CollapsedItem.Props>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class DetailItem extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.DetailItem.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.DetailItem>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module DetailItem {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.DetailItem.Props>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class MethodCard extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.MethodCard.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.MethodCard>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module MethodCard {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.MethodCard.Props>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class MethodPlugin extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.MethodPlugin.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.MethodPlugin>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module MethodPlugin {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.MethodPlugin.Props>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class OneTapView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.OneTapView>;
									public oneTapModel: com.mercadopago.android.px.internal.viewmodel.OneTapModel;
									public actions: com.mercadopago.android.px.internal.features.onetap.OneTap.Actions;
									public setOneTapModel(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel, param1: com.mercadopago.android.px.internal.features.onetap.OneTap.Actions): void;
									public showButton(): void;
									public constructor(param0: globalAndroid.content.Context);
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
									public hideConfirmButton(): void;
									public update(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
									public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class PaymentDetailContainer extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.PaymentDetailContainer.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.PaymentDetailContainer>;
									public constructor();
									public constructor(param0: com.mercadopago.android.px.internal.features.onetap.components.PaymentDetailContainer.Props);
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public constructor(param0: any);
									public constructor(param0: any, param1: any);
								}
								export module PaymentDetailContainer {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.PaymentDetailContainer.Props>;
										public constructor(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.util.List<com.mercadopago.android.px.model.Item>, param2: string);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module onetap {
							export module components {
								export class PaymentMethod extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.onetap.components.PaymentMethod.Props,com.mercadopago.android.px.internal.features.onetap.OneTap.Actions> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.PaymentMethod>;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
								export module PaymentMethod {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.onetap.components.PaymentMethod.Props>;
										public getPaymentMethodId(): string;
										public getCard(): com.mercadopago.android.px.model.CardPaymentMetadata;
										public getPaymentMethodSearch(): com.mercadopago.android.px.model.PaymentMethodSearch;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultActivity implements com.mercadopago.android.px.internal.features.paymentresult.PaymentResultNavigator {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultActivity>;
								public static CONGRATS_DISPLAY_BUNDLE: string;
								public static PAYMENT_RESULT_BUNDLE: string;
								public static AMOUNT_BUNDLE: string;
								public static EXTRA_RESULT_CODE: string;
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public static getIntent(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentResult, param2: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction): globalAndroid.content.Intent;
								public onResume(): void;
								public getActivityParameters(): void;
								public trackScreen(param0: com.mercadopago.android.px.model.ScreenViewEvent): void;
								public constructor();
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public openLink(param0: string): void;
								public finishWithResult(param0: number): void;
								public onBackPressed(): void;
								public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public changePaymentMethod(): void;
								public recoverPayment(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultDecorator {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultDecorator>;
								public static isCheckBagde(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isPendingOrErrorRecoverableBackground(param0: string, param1: string): boolean;
								public static isPendingSuccessBadge(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isErrorNonRecoverableBackground(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isErrorRecoverableBadge(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isSuccessBackground(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isSuccessBackground(param0: string, param1: string): boolean;
								public static isPendingOrErrorRecoverableBackground(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isErrorRecoverableBadge(param0: string, param1: string): boolean;
								public static isPendingWarningBadge(param0: string, param1: string): boolean;
								public static isCheckBagde(param0: string): boolean;
								public static isErrorNonRecoverableBadge(param0: string, param1: string): boolean;
								public static isErrorNonRecoverableBackground(param0: string, param1: string): boolean;
								public static isPendingWarningBadge(param0: com.mercadopago.android.px.model.IPayment): boolean;
								public static isPendingSuccessBadge(param0: string, param1: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultNavigator {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultNavigator>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.paymentresult.PaymentResultNavigator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
									showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
									openLink(param0: string): void;
									finishWithResult(param0: number): void;
									changePaymentMethod(): void;
									recoverPayment(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction): void;
									trackScreen(param0: com.mercadopago.android.px.model.ScreenViewEvent): void;
								});
								public constructor();
								public showError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: string): void;
								public trackScreen(param0: com.mercadopago.android.px.model.ScreenViewEvent): void;
								public changePaymentMethod(): void;
								public showApiExceptionError(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string): void;
								public openLink(param0: string): void;
								public finishWithResult(param0: number): void;
								public recoverPayment(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPropsView,com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider> implements com.mercadopago.android.px.internal.view.ActionsListener  {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPresenter>;
								public setPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
								public setOriginAction(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction): void;
								public isInitialized(): boolean;
								public getPaymentResult(): com.mercadopago.android.px.model.PaymentResult;
								public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultNavigator, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository);
								public constructor();
								public initialize(): void;
								public onAction(param0: com.mercadopago.android.px.model.Action): void;
								public getAmount(): java.math.BigDecimal;
								public onValidStart(): void;
								public setAmount(param0: java.math.BigDecimal): void;
								public recoverFromFailure(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultPropsMutator implements com.mercadopago.android.px.internal.view.Mutator, com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPropsView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPropsMutator>;
								public setPropInstruction(param0: com.mercadopago.android.px.model.Instruction, param1: string, param2: boolean): void;
								public setPropPaymentResult(param0: string, param1: com.mercadopago.android.px.model.PaymentResult, param2: boolean): void;
								/** @deprecated */
								public notifyPropsChanged(): void;
								public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps);
								public setPropsListener(param0: com.mercadopago.android.px.internal.view.MutatorPropsListener<any>): void;
								/** @deprecated */
								public renderDefaultProps(): void;
								public notifyPropsChanged(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultPropsView extends com.mercadopago.android.px.internal.base.MvpView {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPropsView>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.paymentresult.PaymentResultPropsView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setPropPaymentResult(param0: string, param1: com.mercadopago.android.px.model.PaymentResult, param2: boolean): void;
									setPropInstruction(param0: com.mercadopago.android.px.model.Instruction, param1: string, param2: boolean): void;
									notifyPropsChanged(): void;
								});
								public constructor();
								public setPropInstruction(param0: com.mercadopago.android.px.model.Instruction, param1: string, param2: boolean): void;
								public setPropPaymentResult(param0: string, param1: com.mercadopago.android.px.model.PaymentResult, param2: boolean): void;
								public notifyPropsChanged(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getInstructionsAsync(param0: java.lang.Long, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Instructions>): void;
									getStandardErrorMessage(): string;
									getApprovedTitle(): string;
									getPendingTitle(): string;
									getRejectedOtherReasonTitle(param0: string): string;
									getRejectedInsufficientAmountTitle(param0: string): string;
									getRejectedDuplicatedPaymentTitle(param0: string): string;
									getRejectedCardDisabledTitle(param0: string): string;
									getRejectedBadFilledCardTitle(param0: string): string;
									getRejectedBadFilledCardTitle(): string;
									getRejectedHighRiskTitle(): string;
									getRejectedMaxAttemptsTitle(): string;
									getRejectedInsufficientDataTitle(): string;
									getRejectedBadFilledOther(): string;
									getRejectedCallForAuthorizeTitle(): string;
									getEmptyText(): string;
									getPendingLabel(): string;
									getRejectionLabel(): string;
									getCancelPayment(): string;
									getContinueShopping(): string;
									getExitButtonDefaultText(): string;
									getChangePaymentMethodLabel(): string;
									getRecoverPayment(): string;
									getCardEnabled(): string;
									getErrorTitle(): string;
									getPendingContingencyBodyErrorDescription(): string;
									getPendingReviewManualBodyErrorDescription(): string;
									getRejectedCallForAuthBodyErrorDescription(): string;
									getRejectedCardDisabledBodyErrorDescription(param0: string): string;
									getRejectedInsufficientAmountBodyErrorDescription(): string;
									getRejectedInsufficientAmountBodyErrorSecondDescription(): string;
									getRejectedOtherReasonBodyErrorDescription(): string;
									getRejectedByBankBodyErrorDescription(): string;
									getRejectedInsufficientDataBodyErrorDescription(): string;
									getRejectedDuplicatedPaymentBodyErrorDescription(): string;
									getRejectedMaxAttemptsBodyErrorDescription(): string;
									getRejectedHighRiskBodyErrorDescription(): string;
									getRejectedCallForAuthBodyActionText(param0: string): string;
									getRejectedCallForAuthBodySecondaryTitle(): string;
									getReceiptDescription(param0: java.lang.Long): string;
								});
								public constructor();
								public getReceiptDescription(param0: java.lang.Long): string;
								public getPendingLabel(): string;
								public getCancelPayment(): string;
								public getRejectedMaxAttemptsTitle(): string;
								public getRejectedInsufficientDataBodyErrorDescription(): string;
								public getRejectedCallForAuthBodyActionText(param0: string): string;
								public getRejectedCardDisabledTitle(param0: string): string;
								public getRejectedCallForAuthBodyErrorDescription(): string;
								public getRejectedInsufficientAmountTitle(param0: string): string;
								public getErrorTitle(): string;
								public getStandardErrorMessage(): string;
								public getRejectedOtherReasonTitle(param0: string): string;
								public getContinueShopping(): string;
								public getRejectedBadFilledOther(): string;
								public getRejectedCallForAuthorizeTitle(): string;
								public getRejectedCardDisabledBodyErrorDescription(param0: string): string;
								public getCardEnabled(): string;
								public getRejectedCallForAuthBodySecondaryTitle(): string;
								public getRejectedHighRiskTitle(): string;
								public getExitButtonDefaultText(): string;
								public getPendingContingencyBodyErrorDescription(): string;
								public getRejectedHighRiskBodyErrorDescription(): string;
								public getPendingTitle(): string;
								public getInstructionsAsync(param0: java.lang.Long, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Instructions>): void;
								public getRejectedInsufficientDataTitle(): string;
								public getRecoverPayment(): string;
								public getRejectedOtherReasonBodyErrorDescription(): string;
								public getRejectedBadFilledCardTitle(): string;
								public getRejectedInsufficientAmountBodyErrorDescription(): string;
								public getChangePaymentMethodLabel(): string;
								public getRejectedMaxAttemptsBodyErrorDescription(): string;
								public getRejectedBadFilledCardTitle(param0: string): string;
								public getPendingReviewManualBodyErrorDescription(): string;
								public getRejectedDuplicatedPaymentBodyErrorDescription(): string;
								public getApprovedTitle(): string;
								public getRejectedDuplicatedPaymentTitle(param0: string): string;
								public getRejectedInsufficientAmountBodyErrorSecondDescription(): string;
								public getRejectedByBankBodyErrorDescription(): string;
								public getEmptyText(): string;
								public getRejectionLabel(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export class PaymentResultProviderImpl extends com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProviderImpl>;
								public getReceiptDescription(param0: java.lang.Long): string;
								public getPendingLabel(): string;
								public getCancelPayment(): string;
								public getRejectedMaxAttemptsTitle(): string;
								public getRejectedInsufficientDataBodyErrorDescription(): string;
								public getRejectedCallForAuthBodyActionText(param0: string): string;
								public getRejectedCardDisabledTitle(param0: string): string;
								public getRejectedCallForAuthBodyErrorDescription(): string;
								public getRejectedInsufficientAmountTitle(param0: string): string;
								public getErrorTitle(): string;
								public getStandardErrorMessage(): string;
								public getRejectedOtherReasonTitle(param0: string): string;
								public getContinueShopping(): string;
								public getRejectedBadFilledOther(): string;
								public getRejectedCallForAuthorizeTitle(): string;
								public getRejectedCardDisabledBodyErrorDescription(param0: string): string;
								public getCardEnabled(): string;
								public getRejectedCallForAuthBodySecondaryTitle(): string;
								public getRejectedHighRiskTitle(): string;
								public getExitButtonDefaultText(): string;
								public getPendingContingencyBodyErrorDescription(): string;
								public getRejectedHighRiskBodyErrorDescription(): string;
								public getPendingTitle(): string;
								public getInstructionsAsync(param0: java.lang.Long, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Instructions>): void;
								public getRejectedInsufficientDataTitle(): string;
								public getRecoverPayment(): string;
								public getRejectedOtherReasonBodyErrorDescription(): string;
								public getRejectedBadFilledCardTitle(): string;
								public getRejectedInsufficientAmountBodyErrorDescription(): string;
								public getChangePaymentMethodLabel(): string;
								public getRejectedMaxAttemptsBodyErrorDescription(): string;
								public getRejectedBadFilledCardTitle(param0: string): string;
								public getPendingReviewManualBodyErrorDescription(): string;
								public getRejectedDuplicatedPaymentBodyErrorDescription(): string;
								public getApprovedTitle(): string;
								public constructor(param0: globalAndroid.content.Context);
								public getRejectedDuplicatedPaymentTitle(param0: string): string;
								public getRejectedInsufficientAmountBodyErrorSecondDescription(): string;
								public getRejectedByBankBodyErrorDescription(): string;
								public getEmptyText(): string;
								public getRejectionLabel(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class AccreditationComment extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment>;
									public constructor(param0: any);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
								export module AccreditationComment {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props>;
										public comment: string;
										public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props.Builder);
										public constructor(param0: string);
										public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props.Builder;
									}
									export module Props {
										export class Builder {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props.Builder>;
											public comment: string;
											public build(): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props;
											public setComment(param0: string): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment.Props.Builder;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class AccreditationCommentRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationCommentRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class AccreditationTime extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime>;
									public hasAccreditationComments(): boolean;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getAccreditationCommentComponents(): java.util.List<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationComment>;
								}
								export module AccreditationTime {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props>;
										public accreditationMessage: string;
										public accreditationComments: java.util.List<string>;
										public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props.Builder;
										public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props.Builder);
										public constructor(param0: string, param1: java.util.List<string>);
									}
									export module Props {
										export class Builder {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props.Builder>;
											public accreditationMessage: string;
											public accreditationComments: java.util.List<string>;
											public setAccreditationComments(param0: java.util.List<string>): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props.Builder;
											public setAccreditationMessage(param0: string): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props.Builder;
											public build(): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime.Props;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class AccreditationTimeRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTimeRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class Body extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.Body>;
									public paymentResultProvider: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider;
									public getInstructionsComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.Instructions;
									public getPaymentMethodComponent(): com.mercadopago.android.px.internal.view.PaymentMethodComponent;
									public hasBodyError(): boolean;
									public hasReceipt(): boolean;
									public hasPaymentMethodDescription(): boolean;
									public topFragment(): com.mercadopago.android.px.model.ExternalFragment;
									public getReceiptComponent(): com.mercadopago.android.px.internal.view.Receipt;
									public getBodyErrorComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.BodyError;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public bottomFragment(): com.mercadopago.android.px.model.ExternalFragment;
									public hasInstructions(): boolean;
									public hasTopCustomComponent(): boolean;
									public hasBottomCustomComponent(): boolean;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher, param2: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class BodyError extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.BodyError>;
									public resourcesProvider: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider;
									public getActionText(): string;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher, param2: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider);
									public getTitle(): string;
									public getSecondDescription(): string;
									public getSecondaryTitleForCallForAuth(): string;
									public recoverPayment(): void;
									public hasActionForCallForAuth(): boolean;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getDescription(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class BodyErrorRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.BodyError> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.BodyErrorRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.BodyError, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class BodyRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.Body> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.BodyRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.Body, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class FooterContainer extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer>;
									public resourcesProvider: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher, param2: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider);
								}
								export module FooterContainer {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer.Props>;
										public paymentResult: com.mercadopago.android.px.model.PaymentResult;
										public paymentResultScreenConfiguration: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
										public constructor(param0: com.mercadopago.android.px.model.PaymentResult, param1: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class FooterContainerRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainerRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class Header extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.Header>;
									public getIconComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.Icon;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class HeaderRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.Header> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.HeaderRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.Header, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class Icon extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.IconProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.Icon>;
									public hasIconFromUrl(): boolean;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.IconProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class IconRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.Icon> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.IconRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.Icon, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionReferenceComponent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
								export module InstructionReferenceComponent {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props>;
										public reference: com.mercadopago.android.px.model.InstructionReference;
										public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props.Builder);
										public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props.Builder;
									}
									export module Props {
										export class Builder {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props.Builder>;
											public reference: com.mercadopago.android.px.model.InstructionReference;
											public setReference(param0: com.mercadopago.android.px.model.InstructionReference): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props.Builder;
											public build(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent.Props;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionReferenceRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class Instructions extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.Instructions>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getContentComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsContent;
									public hasSecondaryInfo(): boolean;
									public constructor(param0: any);
									public shouldShowEmailInSecondaryInfo(): boolean;
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getSecondaryInfoComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSecondaryInfo;
									public hasSubtitle(): boolean;
									public getSubtitleComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSubtitle;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsAction extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
								export module InstructionsAction {
									export class Prop {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop>;
										public instructionAction: com.mercadopago.android.px.model.InstructionAction;
										public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop.Builder;
										public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop.Builder);
										public constructor(param0: com.mercadopago.android.px.model.InstructionAction);
									}
									export module Prop {
										export class Builder {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop.Builder>;
											public instructionAction: com.mercadopago.android.px.model.InstructionAction;
											public build(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop;
											public setInstructionAction(param0: com.mercadopago.android.px.model.InstructionAction): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction.Prop.Builder;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsActionRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActionRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsActions extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActions>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getActionComponents(): java.util.List<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsAction>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsActionsRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActions> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActionsRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActions, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsContent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsContent>;
									public getActionsComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsActions;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public hasInfo(): boolean;
									public constructor(param0: any);
									public hasReferences(): boolean;
									public hasTertiaryInfo(): boolean;
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public getInfoComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsInfo;
									public hasActions(): boolean;
									public needsBottomMargin(): boolean;
									public hasAccreditationTime(): boolean;
									public getReferencesComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsReferences;
									public getTertiaryInfoComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsTertiaryInfo;
									public getAccreditationTimeComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.AccreditationTime;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsContentRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsContent> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsContentRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsContent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsInfo extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsInfo>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsInfoRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsInfo> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsInfoRenderer>;
									public constructor();
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsInfo, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsReferences extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsReferences>;
									public getReferenceComponents(): java.util.List<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionReferenceComponent>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsReferencesRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsReferences> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsReferencesRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsReferences, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.Instructions> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.Instructions, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsSecondaryInfo extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSecondaryInfo>;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsSecondaryInfoRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSecondaryInfo> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSecondaryInfoRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSecondaryInfo, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsSubtitle extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSubtitle>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsSubtitleRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSubtitle> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSubtitleRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsSubtitle, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsTertiaryInfo extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsTertiaryInfo>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class InstructionsTertiaryInfoRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsTertiaryInfo> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsTertiaryInfoRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.InstructionsTertiaryInfo, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class LineSeparator extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.paymentresult.components.LineSeparator.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.LineSeparator>;
									public constructor();
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public constructor(param0: any);
									public constructor(param0: any, param1: any);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.components.LineSeparator.Props);
								}
								export module LineSeparator {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.LineSeparator.Props>;
										public constructor(param0: number);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class PaymentResultContainer extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.PaymentResultContainer>;
									public static DEFAULT_ICON_IMAGE: number;
									public static ITEM_ICON_IMAGE: number;
									public static CARD_ICON_IMAGE: number;
									public static BOLETO_ICON_IMAGE: number;
									public static DEFAULT_BADGE_IMAGE: number;
									public static CHECK_BADGE_IMAGE: number;
									public static PENDING_BADGE_GREEN_IMAGE: number;
									public static PENDING_BADGE_ORANGE_IMAGE: number;
									public static ERROR_BADGE_IMAGE: number;
									public static WARNING_BADGE_IMAGE: number;
									public paymentResultProvider: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider;
									public isLoading(): boolean;
									public getBodyComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.Body;
									public getLoadingComponent(): com.mercadopago.android.px.internal.view.LoadingComponent;
									public constructor(param0: any);
									public hasBodyComponent(): boolean;
									public getFooterContainer(): com.mercadopago.android.px.internal.features.paymentresult.components.FooterContainer;
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.view.ActionDispatcher, param1: com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps, param2: com.mercadopago.android.px.internal.features.paymentresult.PaymentResultProvider);
									public getHeaderComponent(): com.mercadopago.android.px.internal.features.paymentresult.components.Header;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module components {
								export class PaymentResultRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.paymentresult.components.PaymentResultContainer> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.components.PaymentResultRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.paymentresult.components.PaymentResultContainer, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module formatter {
								export class AmountFormat {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.formatter.AmountFormat>;
									public currencyId: string;
									public amount: java.math.BigDecimal;
									public constructor(param0: string, param1: java.math.BigDecimal);
									public getAmount(): java.math.BigDecimal;
									public insertSpannedAmountInText(param0: string, param1: globalAndroid.text.SpannableStringBuilder): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module formatter {
								export class HeaderTitleFormatter extends com.mercadopago.android.px.internal.features.paymentresult.formatter.AmountFormat {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.formatter.HeaderTitleFormatter>;
									public constructor(param0: string, param1: java.math.BigDecimal, param2: string);
									public constructor(param0: string, param1: java.math.BigDecimal);
									public formatTextWithAmount(param0: string): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module model {
								export class Badge {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.model.Badge>;
									public static DEFAULT_BADGE_IMAGE: string;
									public static ERROR_BADGE_IMAGE: string;
									public static WARNING_BADGE_IMAGE: string;
									public static CHECK_BADGE_IMAGE: string;
									public static PENDING_BADGE_IMAGE: string;
									public constructor(param0: string);
								}
								export module Badge {
									export class ApprovedBadges {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.model.Badge.ApprovedBadges>;
										/**
										 * Constructs a new instance of the com.mercadopago.android.px.internal.features.paymentresult.model.Badge$ApprovedBadges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
										});
										public constructor();
									}
									export class Badges {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.model.Badge.Badges>;
										/**
										 * Constructs a new instance of the com.mercadopago.android.px.internal.features.paymentresult.model.Badge$Badges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
										});
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class BodyErrorProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps>;
									public status: string;
									public statusDetail: string;
									public paymentMethodName: string;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder);
								}
								export module BodyErrorProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder>;
										public status: string;
										public statusDetail: string;
										public paymentMethodName: string;
										public constructor();
										public setStatus(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder;
										public setPaymentMethodName(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder;
										public setStatusDetail(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps.Builder;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.BodyErrorProps;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class HeaderProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps>;
									public static HEADER_MODE_WRAP: string;
									public static HEADER_MODE_STRETCH: string;
									public height: string;
									public background: number;
									public statusBarColor: number;
									public iconImage: number;
									public badgeImage: number;
									public iconUrl: string;
									public title: string;
									public label: string;
									public static from(param0: com.mercadopago.android.px.model.BusinessPayment, param1: globalAndroid.content.Context): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
								}
								export module HeaderProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder>;
										public height: string;
										public background: number;
										public statusBarColor: number;
										public iconImage: number;
										public badgeImage: number;
										public iconUrl: string;
										public title: string;
										public label: string;
										public setIconUrl(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setHeight(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setBackground(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setIconImage(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setLabel(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public constructor();
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps;
										public setStatusBarColor(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setBadgeImage(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
										public setTitle(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.HeaderProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class IconProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.IconProps>;
									public iconImage: number;
									public iconUrl: string;
									public badgeImage: number;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder;
									public constructor(param0: number, param1: string, param2: number);
								}
								export module IconProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder>;
										public iconImage: number;
										public iconUrl: string;
										public badgeImage: number;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.IconProps;
										public setIconImage(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder;
										public setIconUrl(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder;
										public constructor();
										public setBadgeImage(param0: number): com.mercadopago.android.px.internal.features.paymentresult.props.IconProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsActionsProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps>;
									public instructionActions: java.util.List<com.mercadopago.android.px.model.InstructionAction>;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps.Builder;
									public constructor(param0: java.util.List<com.mercadopago.android.px.model.InstructionAction>);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps.Builder);
								}
								export module InstructionsActionsProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps.Builder>;
										public instructionsActions: java.util.List<com.mercadopago.android.px.model.InstructionAction>;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps;
										public constructor();
										public setInstructionsActions(param0: java.util.List<com.mercadopago.android.px.model.InstructionAction>): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsActionsProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsContentProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps>;
									public instruction: com.mercadopago.android.px.model.Instruction;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps.Builder);
									public constructor(param0: com.mercadopago.android.px.model.Instruction);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps.Builder;
								}
								export module InstructionsContentProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps.Builder>;
										public instruction: com.mercadopago.android.px.model.Instruction;
										public setInstruction(param0: com.mercadopago.android.px.model.Instruction): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps.Builder;
										public constructor();
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsContentProps;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsInfoProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps>;
									public infoTitle: string;
									public infoContent: java.util.List<string>;
									public bottomDivider: boolean;
									public constructor(param0: string, param1: java.util.List<string>, param2: boolean);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder);
								}
								export module InstructionsInfoProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder>;
										public infoTitle: string;
										public infoContent: java.util.List<string>;
										public bottomDivider: boolean;
										public setInfoTitle(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder;
										public constructor();
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps;
										public setBottomDivider(param0: boolean): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder;
										public setInfoContent(param0: java.util.List<string>): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsInfoProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps>;
									public instruction: com.mercadopago.android.px.model.Instruction;
									public processingMode: string;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps.Builder;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps.Builder);
									public constructor(param0: com.mercadopago.android.px.model.Instruction, param1: string);
								}
								export module InstructionsProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps.Builder>;
										public instruction: com.mercadopago.android.px.model.Instruction;
										public processingMode: string;
										public constructor();
										public setInstruction(param0: com.mercadopago.android.px.model.Instruction): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps.Builder;
										public setProcessingMode(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps.Builder;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsProps;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsReferencesProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps>;
									public title: string;
									public references: java.util.List<com.mercadopago.android.px.model.InstructionReference>;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps.Builder;
									public constructor(param0: string, param1: java.util.List<com.mercadopago.android.px.model.InstructionReference>);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps.Builder);
								}
								export module InstructionsReferencesProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps.Builder>;
										public title: string;
										public references: java.util.List<com.mercadopago.android.px.model.InstructionReference>;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps;
										public constructor();
										public setReferences(param0: java.util.List<com.mercadopago.android.px.model.InstructionReference>): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps.Builder;
										public setTitle(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsReferencesProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsSecondaryInfoProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps>;
									public secondaryInfo: java.util.List<string>;
									public constructor(param0: java.util.List<string>);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps.Builder);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps.Builder;
								}
								export module InstructionsSecondaryInfoProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps.Builder>;
										public secondaryInfo: java.util.List<string>;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps;
										public constructor();
										public setSecondaryInfo(param0: java.util.List<string>): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSecondaryInfoProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsSubtitleProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps>;
									public subtitle: string;
									public constructor(param0: string);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps.Builder);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps.Builder;
								}
								export module InstructionsSubtitleProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps.Builder>;
										public subtitle: string;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps;
										public constructor();
										public setSubtitle(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsSubtitleProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class InstructionsTertiaryInfoProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps>;
									public tertiaryInfo: java.util.List<string>;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps.Builder;
									public constructor(param0: java.util.List<string>);
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps.Builder);
								}
								export module InstructionsTertiaryInfoProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps.Builder>;
										public tertiaryInfo: java.util.List<string>;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps;
										public constructor();
										public setTertiaryInfo(param0: java.util.List<string>): com.mercadopago.android.px.internal.features.paymentresult.props.InstructionsTertiaryInfoProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class PaymentResultBodyProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps>;
									public status: string;
									public statusDetail: string;
									public instruction: com.mercadopago.android.px.model.Instruction;
									public paymentData: com.mercadopago.android.px.model.PaymentData;
									public processingMode: string;
									public disclaimer: string;
									public paymentId: java.lang.Long;
									public currencyId: string;
									public amount: java.math.BigDecimal;
									public paymentResultScreenConfiguration: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
									public constructor(param0: com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder);
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
								}
								export module PaymentResultBodyProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder>;
										public status: string;
										public statusDetail: string;
										public instruction: com.mercadopago.android.px.model.Instruction;
										public paymentData: com.mercadopago.android.px.model.PaymentData;
										public disclaimer: string;
										public processingMode: string;
										public paymentId: java.lang.Long;
										public currencyId: string;
										public amount: java.math.BigDecimal;
										public paymentResultScreenConfiguration: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
										public setCurrencyId(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps;
										public setStatus(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public constructor(param0: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration);
										public setInstruction(param0: com.mercadopago.android.px.model.Instruction): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setStatusDetail(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setAmount(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setDisclaimer(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setPaymentData(param0: com.mercadopago.android.px.model.PaymentData): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setProcessingMode(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
										public setPaymentId(param0: java.lang.Long): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultBodyProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module paymentresult {
							export module props {
								export class PaymentResultProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps>;
									public paymentResult: com.mercadopago.android.px.model.PaymentResult;
									public instruction: com.mercadopago.android.px.model.Instruction;
									public headerMode: string;
									public loading: boolean;
									public processingMode: string;
									public currencyId: string;
									public getInstructionsTitle(): string;
									public getPaymentResultScreenPreference(): com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration;
									public getPreferenceBadge(): string;
									public hasCustomizedTitle(): boolean;
									public hasCustomizedBadge(): boolean;
									public getPreferenceTitle(): string;
									public hasInstructions(): boolean;
									public isPluginPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): boolean;
									public hasCustomizedLabel(): boolean;
									public toBuilder(): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
									public getPreferenceLabel(): string;
								}
								export module PaymentResultProps {
									export class Builder {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder>;
										public setHeaderMode(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
										public setCurrencyId(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
										public constructor(param0: com.mercadopago.android.px.configuration.PaymentResultScreenConfiguration);
										public setLoading(param0: boolean): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
										public setProcessingMode(param0: string): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
										public build(): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps;
										public setInstruction(param0: com.mercadopago.android.px.model.Instruction): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
										public setPaymentResult(param0: com.mercadopago.android.px.model.PaymentResult): com.mercadopago.android.px.internal.features.paymentresult.props.PaymentResultProps.Builder;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module plugins {
							export class PaymentMethodPluginActivity implements com.mercadopago.android.px.core.PaymentMethodPlugin.OnPaymentMethodListener {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.plugins.PaymentMethodPluginActivity>;
								public static getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
								public next(): void;
								public back(): void;
								public constructor();
								public onCreate(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module plugins {
							export class PaymentProcessorActivity implements com.mercadopago.android.px.core.PaymentProcessor.OnPaymentListener {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.plugins.PaymentProcessorActivity>;
								public static getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
								public static isBusiness(param0: globalAndroid.content.Intent): boolean;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
								public static getGenericPayment(param0: globalAndroid.content.Intent): com.mercadopago.android.px.model.GenericPayment;
								public onResume(): void;
								public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public constructor();
								public static getPaymentRecovery(param0: globalAndroid.content.Intent): com.mercadopago.android.px.model.PaymentRecovery;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
								public onBackPressed(): void;
								public onPause(): void;
								public static isGeneric(param0: globalAndroid.content.Intent): boolean;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
								public static getBusinessPayment(param0: globalAndroid.content.Intent): com.mercadopago.android.px.model.BusinessPayment;
								public static getPayment(param0: globalAndroid.content.Intent): com.mercadopago.android.px.model.Payment;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class CardVaultProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.CardVaultProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.CardVaultProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMissingPublicKeyErrorMessage(): string;
									getMissingSiteErrorMessage(): string;
									getMissingAmountErrorMessage(): string;
									getMissingPayerCostsErrorMessage(): string;
									getMissingInstallmentsForIssuerErrorMessage(): string;
									getMultipleInstallmentsForIssuerErrorMessage(): string;
									getInstallmentsAsync(param0: string, param1: java.lang.Long, param2: string, param3: java.math.BigDecimal, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
									createESCTokenAsync(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									findESCSaved(param0: string): string;
									deleteESC(param0: string): void;
								});
								public constructor();
								public deleteESC(param0: string): void;
								public getMissingPublicKeyErrorMessage(): string;
								public getMultipleInstallmentsForIssuerErrorMessage(): string;
								public getMissingSiteErrorMessage(): string;
								public createESCTokenAsync(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public findESCSaved(param0: string): string;
								public getInstallmentsAsync(param0: string, param1: java.lang.Long, param2: string, param3: java.math.BigDecimal, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getMissingAmountErrorMessage(): string;
								public getMissingInstallmentsForIssuerErrorMessage(): string;
								public getMissingPayerCostsErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class CardVaultProviderImpl extends com.mercadopago.android.px.internal.features.providers.CardVaultProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.CardVaultProviderImpl>;
								public deleteESC(param0: string): void;
								public getMissingPublicKeyErrorMessage(): string;
								public getMultipleInstallmentsForIssuerErrorMessage(): string;
								public constructor(param0: globalAndroid.content.Context);
								public getMissingSiteErrorMessage(): string;
								public createESCTokenAsync(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public findESCSaved(param0: string): string;
								public getInstallmentsAsync(param0: string, param1: java.lang.Long, param2: string, param3: java.math.BigDecimal, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getMissingInstallmentsForIssuerErrorMessage(): string;
								public getMissingAmountErrorMessage(): string;
								public getMissingPayerCostsErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class CheckoutProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.CheckoutProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.CheckoutProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCheckoutPreference(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.preferences.CheckoutPreference>): void;
									getCheckoutExceptionMessage(param0: com.mercadopago.android.px.model.exceptions.CheckoutPreferenceException): string;
									getCheckoutExceptionMessage(param0: java.lang.Exception): string;
									fetchFonts(): void;
								});
								public constructor();
								public getCheckoutExceptionMessage(param0: com.mercadopago.android.px.model.exceptions.CheckoutPreferenceException): string;
								public fetchFonts(): void;
								public getCheckoutExceptionMessage(param0: java.lang.Exception): string;
								public getCheckoutPreference(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.preferences.CheckoutPreference>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class CheckoutProviderImpl extends com.mercadopago.android.px.internal.features.providers.CheckoutProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.CheckoutProviderImpl>;
								public getCheckoutExceptionMessage(param0: com.mercadopago.android.px.model.exceptions.CheckoutPreferenceException): string;
								public fetchFonts(): void;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mercadopago.android.px.internal.datasource.MercadoPagoESC);
								public getCheckoutExceptionMessage(param0: java.lang.Exception): string;
								public getCheckoutPreference(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.preferences.CheckoutPreference>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class DiscountProviderImpl extends com.mercadopago.android.px.internal.features.providers.DiscountsProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.DiscountProviderImpl>;
								public getStandardErrorMessage(): string;
								public constructor(param0: globalAndroid.content.Context, param1: string);
								public getApiErrorMessage(param0: string): string;
								public getCodeDiscount(param0: string, param1: string, param2: string, param3: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
								public getDirectDiscount(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class DiscountsProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.DiscountsProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.DiscountsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getDirectDiscount(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
									getCodeDiscount(param0: string, param1: string, param2: string, param3: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
									getApiErrorMessage(param0: string): string;
									getStandardErrorMessage(): string;
								});
								public constructor();
								public getStandardErrorMessage(): string;
								public getApiErrorMessage(param0: string): string;
								public getCodeDiscount(param0: string, param1: string, param2: string, param3: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
								public getDirectDiscount(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Discount>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class GuessingCardProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.GuessingCardProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.GuessingCardProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTrackingContext(): com.mercadopago.android.px.internal.tracker.MPTrackingContext;
									getPaymentMethodsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
									createTokenAsync(param0: com.mercadopago.android.px.model.CardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									getIssuersAsync(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
									getInstallmentsAsync(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
									getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
									getBankDealsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.BankDeal>>): void;
									getMissingInstallmentsForIssuerErrorMessage(): string;
									getMultipleInstallmentsForIssuerErrorMessage(): string;
									getMissingPayerCostsErrorMessage(): string;
									getMissingIdentificationTypesErrorMessage(): string;
									getMissingPublicKeyErrorMessage(): string;
									getInvalidIdentificationNumberErrorMessage(): string;
									getInvalidExpiryDateErrorMessage(): string;
									getInvalidEmptyNameErrorMessage(): string;
									getSettingNotFoundForBinErrorMessage(): string;
									getInvalidFieldErrorMessage(): string;
								});
								public constructor();
								public getBankDealsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.BankDeal>>): void;
								public getPaymentMethodsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
								public getInvalidExpiryDateErrorMessage(): string;
								public getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
								public getInstallmentsAsync(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getMissingInstallmentsForIssuerErrorMessage(): string;
								public getInvalidFieldErrorMessage(): string;
								public getMissingPayerCostsErrorMessage(): string;
								public getSettingNotFoundForBinErrorMessage(): string;
								public getInvalidEmptyNameErrorMessage(): string;
								public createTokenAsync(param0: com.mercadopago.android.px.model.CardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public getIssuersAsync(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
								public getMissingIdentificationTypesErrorMessage(): string;
								public getMissingPublicKeyErrorMessage(): string;
								public getMultipleInstallmentsForIssuerErrorMessage(): string;
								public getTrackingContext(): com.mercadopago.android.px.internal.tracker.MPTrackingContext;
								public getInvalidIdentificationNumberErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class GuessingCardProviderImpl extends com.mercadopago.android.px.internal.features.providers.GuessingCardProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.GuessingCardProviderImpl>;
								public getBankDealsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.BankDeal>>): void;
								public getPaymentMethodsAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
								public getInvalidExpiryDateErrorMessage(): string;
								public getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
								public getInstallmentsAsync(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getMissingInstallmentsForIssuerErrorMessage(): string;
								public getInvalidFieldErrorMessage(): string;
								public getMissingPayerCostsErrorMessage(): string;
								public getSettingNotFoundForBinErrorMessage(): string;
								public getInvalidEmptyNameErrorMessage(): string;
								public createTokenAsync(param0: com.mercadopago.android.px.model.CardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public getIssuersAsync(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
								public getMissingIdentificationTypesErrorMessage(): string;
								public getMissingPublicKeyErrorMessage(): string;
								public getMultipleInstallmentsForIssuerErrorMessage(): string;
								public constructor(param0: globalAndroid.content.Context);
								public getTrackingContext(): com.mercadopago.android.px.internal.tracker.MPTrackingContext;
								public getInvalidIdentificationNumberErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class InstallmentsProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.InstallmentsProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.InstallmentsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getInstallments(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
									getNoInstallmentsFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
									getMultipleInstallmentsFoundForAnIssuerError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
									getNoPayerCostFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								});
								public constructor();
								public getInstallments(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getNoPayerCostFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public getNoInstallmentsFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public getMultipleInstallmentsFoundForAnIssuerError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class InstallmentsProviderImpl extends com.mercadopago.android.px.internal.features.providers.InstallmentsProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.InstallmentsProviderImpl>;
								public getInstallments(param0: string, param1: java.math.BigDecimal, param2: java.lang.Long, param3: string, param4: java.lang.Integer, param5: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Installment>>): void;
								public getStandardErrorMessage(): string;
								public getNoPayerCostFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public constructor(param0: globalAndroid.content.Context);
								public getNoInstallmentsFoundError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public getMultipleInstallmentsFoundForAnIssuerError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class IssuersProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.IssuersProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.IssuersProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getIssuers(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
									getEmptyIssuersError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
									getCardIssuersTitle(): string;
								});
								public constructor();
								public getEmptyIssuersError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public getIssuers(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
								public getCardIssuersTitle(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class IssuersProviderImpl extends com.mercadopago.android.px.internal.features.providers.IssuersProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.IssuersProviderImpl>;
								public getEmptyIssuersError(): com.mercadopago.android.px.model.exceptions.MercadoPagoError;
								public getIssuers(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.Issuer>>): void;
								public constructor(param0: globalAndroid.content.Context);
								public getCardIssuersTitle(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PayerInformationProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PayerInformationProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.PayerInformationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
									getInvalidIdentificationNumberErrorMessage(): string;
									getInvalidIdentificationNameErrorMessage(): string;
									getInvalidIdentificationLastNameErrorMessage(): string;
									getInvalidIdentificationBusinessNameErrorMessage(): string;
									getMissingPublicKeyErrorMessage(): string;
									getMissingIdentificationTypesErrorMessage(): string;
								});
								public constructor();
								public getInvalidIdentificationBusinessNameErrorMessage(): string;
								public getMissingPublicKeyErrorMessage(): string;
								public getMissingIdentificationTypesErrorMessage(): string;
								public getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
								public getInvalidIdentificationNameErrorMessage(): string;
								public getInvalidIdentificationNumberErrorMessage(): string;
								public getInvalidIdentificationLastNameErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PayerInformationProviderImpl extends com.mercadopago.android.px.internal.features.providers.PayerInformationProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PayerInformationProviderImpl>;
								public getInvalidIdentificationBusinessNameErrorMessage(): string;
								public getMissingPublicKeyErrorMessage(): string;
								public getMissingIdentificationTypesErrorMessage(): string;
								public getIdentificationTypesAsync(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.IdentificationType>>): void;
								public constructor(param0: globalAndroid.content.Context);
								public getInvalidIdentificationNameErrorMessage(): string;
								public getInvalidIdentificationNumberErrorMessage(): string;
								public getInvalidIdentificationLastNameErrorMessage(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PaymentMethodsProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PaymentMethodsProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.PaymentMethodsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getPaymentMethods(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
								});
								public constructor();
								public getPaymentMethods(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PaymentMethodsProviderImpl extends com.mercadopago.android.px.internal.features.providers.PaymentMethodsProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PaymentMethodsProviderImpl>;
								public getPaymentMethods(param0: com.mercadopago.android.px.internal.callbacks.TaggedCallback<java.util.List<com.mercadopago.android.px.model.PaymentMethod>>): void;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PaymentVaultProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PaymentVaultProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.PaymentVaultProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTitle(): string;
									getAllPaymentTypesExcludedErrorMessage(): string;
									getInvalidDefaultInstallmentsErrorMessage(): string;
									getInvalidMaxInstallmentsErrorMessage(): string;
									getStandardErrorMessage(): string;
									getEmptyPaymentMethodsErrorMessage(): string;
									trackInitialScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: string): void;
									trackChildrenScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem, param1: string): void;
								});
								public constructor();
								public getStandardErrorMessage(): string;
								public getTitle(): string;
								public getInvalidMaxInstallmentsErrorMessage(): string;
								public getAllPaymentTypesExcludedErrorMessage(): string;
								public getInvalidDefaultInstallmentsErrorMessage(): string;
								public trackChildrenScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem, param1: string): void;
								public getEmptyPaymentMethodsErrorMessage(): string;
								public trackInitialScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class PaymentVaultProviderImpl extends com.mercadopago.android.px.internal.features.providers.PaymentVaultProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.PaymentVaultProviderImpl>;
								public getStandardErrorMessage(): string;
								public getTitle(): string;
								public getInvalidMaxInstallmentsErrorMessage(): string;
								public initializeMPTracker(param0: string): void;
								public getAllPaymentTypesExcludedErrorMessage(): string;
								public constructor(param0: globalAndroid.content.Context);
								public getInvalidDefaultInstallmentsErrorMessage(): string;
								public trackChildrenScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearchItem, param1: string): void;
								public getEmptyPaymentMethodsErrorMessage(): string;
								public trackInitialScreen(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class ReviewPaymentMethodsProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.ReviewPaymentMethodsProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.ReviewPaymentMethodsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getEmptyPaymentMethodsListError(): string;
									getStandardErrorMessage(): string;
								});
								public constructor();
								public getStandardErrorMessage(): string;
								public getEmptyPaymentMethodsListError(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class ReviewPaymentMethodsProviderImpl extends com.mercadopago.android.px.internal.features.providers.ReviewPaymentMethodsProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.ReviewPaymentMethodsProviderImpl>;
								public getStandardErrorMessage(): string;
								public getEmptyPaymentMethodsListError(): string;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class SecurityCodeProvider extends com.mercadopago.android.px.internal.base.ResourcesProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.SecurityCodeProvider>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.providers.SecurityCodeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getStandardErrorMessageGotten(): string;
									getTokenAndCardNotSetMessage(): string;
									getPaymentMethodNotSetMessage(): string;
									getCardInfoNotSetMessage(): string;
									getTokenAndCardWithoutRecoveryCantBeBothSetMessage(): string;
									cloneToken(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									putSecurityCode(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									createToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									createToken(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
									validateSecurityCodeFromToken(param0: string, param1: com.mercadopago.android.px.model.PaymentMethod, param2: string): void;
									validateSecurityCodeFromToken(param0: string): void;
									validateSecurityCodeFromToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.model.Card): void;
									isESCEnabled(): boolean;
								});
								public constructor();
								public getCardInfoNotSetMessage(): string;
								public validateSecurityCodeFromToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.model.Card): void;
								public getTokenAndCardWithoutRecoveryCantBeBothSetMessage(): string;
								public getPaymentMethodNotSetMessage(): string;
								public isESCEnabled(): boolean;
								public getTokenAndCardNotSetMessage(): string;
								public putSecurityCode(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public validateSecurityCodeFromToken(param0: string, param1: com.mercadopago.android.px.model.PaymentMethod, param2: string): void;
								public createToken(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public getStandardErrorMessageGotten(): string;
								public validateSecurityCodeFromToken(param0: string): void;
								public createToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public cloneToken(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module providers {
							export class SecurityCodeProviderImpl extends com.mercadopago.android.px.internal.features.providers.SecurityCodeProvider {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.providers.SecurityCodeProviderImpl>;
								public getCardInfoNotSetMessage(): string;
								public validateSecurityCodeFromToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.model.Card): void;
								public getTokenAndCardWithoutRecoveryCantBeBothSetMessage(): string;
								public getPaymentMethodNotSetMessage(): string;
								public isESCEnabled(): boolean;
								public getTokenAndCardNotSetMessage(): string;
								public putSecurityCode(param0: string, param1: string, param2: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public validateSecurityCodeFromToken(param0: string, param1: com.mercadopago.android.px.model.PaymentMethod, param2: string): void;
								public createToken(param0: com.mercadopago.android.px.model.SavedESCCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public getStandardErrorMessageGotten(): string;
								public validateSecurityCodeFromToken(param0: string): void;
								public constructor(param0: globalAndroid.content.Context);
								public createToken(param0: com.mercadopago.android.px.model.SavedCardToken, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
								public cloneToken(param0: string, param1: com.mercadopago.android.px.internal.callbacks.TaggedCallback<com.mercadopago.android.px.model.Token>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export class ReviewAndConfirm {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module ReviewAndConfirm {
								export class Action extends com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.Action>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onPaymentConfirm(): void;
										onCardFlowResponse(): void;
										onCardFlowCancel(): void;
										onError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
										recoverFromFailure(): void;
										executePostPaymentAction(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
										onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
										onVisualPayment(): void;
										onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
										onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
										onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									});
									public constructor();
									public onPaymentConfirm(): void;
									public onCardFlowCancel(): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
									public recoverFromFailure(): void;
									public onVisualPayment(): void;
									public onError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
									public onCardFlowResponse(): void;
									public executePostPaymentAction(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
									public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
									public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
									public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
									public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								}
								export class View extends com.mercadopago.android.px.internal.base.MvpView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.View>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										trackPaymentConfirmation(): void;
										showCardCVVRequired(param0: com.mercadopago.android.px.model.Card): void;
										cancelCheckoutAndInformError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
										showPaymentProcessor(): void;
										showResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
										showResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
										startLoadingButton(param0: number): void;
										cancelLoadingButton(): void;
										showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
										hideConfirmButton(): void;
										startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
										showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
										showConfirmButton(): void;
										showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									});
									public constructor();
									public showConfirmButton(): void;
									public showResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
									public cancelLoadingButton(): void;
									public showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
									public showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
									public showPaymentProcessor(): void;
									public showResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
									public startLoadingButton(param0: number): void;
									public showCardCVVRequired(param0: com.mercadopago.android.px.model.Card): void;
									public cancelCheckoutAndInformError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
									public hideConfirmButton(): void;
									public trackPaymentConfirmation(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export class ReviewAndConfirmActivity extends com.mercadopago.android.px.internal.features.MercadoPagoBaseActivity implements com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.View, com.mercadopago.android.px.internal.view.ActionDispatcher {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirmActivity>;
								public showResult(param0: com.mercadopago.android.px.model.PaymentResult): void;
								public onResume(): void;
								public static getIntent(param0: globalAndroid.content.Context, param1: string, param2: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel, param3: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel, param4: com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel, param5: com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel, param6: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel): globalAndroid.content.Intent;
								public showConfirmButton(): void;
								public constructor();
								public cancelLoadingButton(): void;
								public onBackPressed(): void;
								public showCardCVVRequired(param0: com.mercadopago.android.px.model.Card): void;
								public cancelCheckoutAndInformError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public onPause(): void;
								public startPaymentRecoveryFlow(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public hideConfirmButton(): void;
								public showPaymentProcessor(): void;
								public showErrorSnackBar(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public dispatch(param0: com.mercadopago.android.px.model.Action): void;
								public showResult(param0: com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel): void;
								public showErrorScreen(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public startLoadingButton(param0: number): void;
								public onCreate(param0: globalAndroid.os.Bundle): void;
								public showLoadingFor(param0: com.mercadopago.android.px.internal.features.explode.ExplodeDecorator, param1: com.mercadopago.android.px.internal.features.explode.ExplodingFragment.ExplodingAnimationListener): void;
								public static getIntentForAction(param0: globalAndroid.content.Context, param1: string, param2: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel, param3: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel, param4: com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel, param5: com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel, param6: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel, param7: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): globalAndroid.content.Intent;
								public trackPaymentConfirmation(): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export class ReviewAndConfirmBuilder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirmBuilder>;
								public setPostPaymentAction(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirmBuilder;
								public constructor();
								public getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
								public setHasExtraPaymentMethods(param0: boolean): com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirmBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export class ReviewAndConfirmPresenter extends com.mercadopago.android.px.internal.base.MvpPresenter<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.View,com.mercadopago.android.px.internal.base.DefaultProvider> implements com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.Action  {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirmPresenter>;
								public onCardFlowCancel(): void;
								public onRecoverPaymentEscInvalid(param0: com.mercadopago.android.px.model.PaymentRecovery): void;
								public attachView(param0: any): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.GenericPayment): void;
								public onPaymentError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public detachView(): void;
								public onPaymentConfirm(): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.Payment): void;
								public executePostPaymentAction(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
								public onError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
								public onPaymentFinished(param0: com.mercadopago.android.px.model.BusinessPayment): void;
								public onCardFlowResponse(): void;
								public onCvvRequired(param0: com.mercadopago.android.px.model.Card): void;
								public onVisualPayment(): void;
								public attachView(param0: com.mercadopago.android.px.internal.features.review_and_confirm.ReviewAndConfirm.View): void;
								public recoverFromFailure(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class AmountDescription extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.props.AmountDescriptionProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.AmountDescription>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.props.AmountDescriptionProps);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class AmountDescriptionRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.AmountDescription> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.AmountDescriptionRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.AmountDescription, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class CompactSummary extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.CompactSummary>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class CompactSummaryRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.CompactSummary> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.CompactSummaryRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.CompactSummary, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class DisclaimerComponent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent>;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent.Props);
								}
								export module DisclaimerComponent {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent.Props>;
										public constructor(param0: string);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class DisclaimerRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class FullSummary extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent.SummaryProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.FullSummary>;
									public getDisclaimerComponent(param0: string): com.mercadopago.android.px.internal.features.review_and_confirm.components.DisclaimerComponent;
									public getAmountDescriptionComponents(param0: globalAndroid.content.Context): java.util.List<com.mercadopago.android.px.internal.features.review_and_confirm.components.AmountDescription>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class FullSummaryRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.FullSummary> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.FullSummaryRenderer>;
									public getDisclaimer(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.FullSummary, param1: globalAndroid.content.Context): string;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.FullSummary, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class ReviewAndConfirmContainer extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer.Props,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer>;
									public hasDiscountTermsAndConditions(): boolean;
									public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public hasItemsEnabled(): boolean;
									public constructor(param0: any);
									public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									public hasMercadoPagoTermsAndConditions(): boolean;
								}
								export module ReviewAndConfirmContainer {
									export class Props {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer.Props>;
										public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel, param1: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel, param2: com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel, param3: com.mercadopago.android.px.configuration.ReviewAndConfirmConfiguration, param4: com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel, param5: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel);
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class ReviewAndConfirmRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.ReviewAndConfirmContainer, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class SummaryComponent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent.SummaryProps,java.lang.Void> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent>;
								}
								export module SummaryComponent {
									export class SummaryProps {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent.SummaryProps>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export class SummaryRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent> {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryRenderer>;
									public constructor();
									public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(): globalAndroid.view.View;
									public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.SummaryComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module actions {
									export class CancelPaymentAction {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.actions.CancelPaymentAction>;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module actions {
									export class ChangePaymentMethodAction {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.actions.ChangePaymentMethodAction>;
										public constructor();
										public toString(): string;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module actions {
									export class ConfirmPaymentAction {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.actions.ConfirmPaymentAction>;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module items {
									export class ReviewItem extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem.Props,java.lang.Void> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem>;
										public constructor(param0: any);
										public hasIcon(): boolean;
										public hasItemImage(): boolean;
										public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem.Props);
										public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
										public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
									}
									export module ReviewItem {
										export class Props {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem.Props>;
											public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemModel, param1: java.lang.Integer, param2: string, param3: string);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module items {
									export class ReviewItemRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItemRenderer>;
										public render(): globalAndroid.view.View;
										public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
										public render(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItem, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
										public constructor();
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module items {
									export class ReviewItems extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItems.Props,java.lang.Void> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItems>;
										public constructor(param0: any);
										public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItems.Props);
										public constructor();
										public constructor(param0: any, param1: any);
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
									export module ReviewItems {
										export class Props {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.items.ReviewItems.Props>;
											public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel, param1: java.lang.Integer, param2: string, param3: string);
											public getCollectorIcon(): java.lang.Integer;
											public getItemsModel(): com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module payment_method {
									export class MethodCard extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodCard.Props,java.lang.Void> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodCard>;
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
									export module MethodCard {
										export class Props {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodCard.Props>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module payment_method {
									export class MethodOff extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodOff.Props,java.lang.Void> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodOff>;
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
									export module MethodOff {
										export class Props {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodOff.Props>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module payment_method {
									export class MethodPlugin extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodPlugin.Props,java.lang.Void> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodPlugin>;
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
									export module MethodPlugin {
										export class Props {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.MethodPlugin.Props>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module components {
								export module payment_method {
									export class PaymentMethodComponent extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel,com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.PaymentMethodComponent.Actions> {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.PaymentMethodComponent>;
										public constructor(param0: any);
										public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel, param1: com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.PaymentMethodComponent.Actions);
										public constructor();
										public constructor(param0: any, param1: any);
										public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
									}
									export module PaymentMethodComponent {
										export class Actions {
											public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.PaymentMethodComponent.Actions>;
											/**
											 * Constructs a new instance of the com.mercadopago.android.px.internal.features.review_and_confirm.components.payment_method.PaymentMethodComponent$Actions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
											 */
											public constructor(implementation: {
												onPaymentMethodChangeClicked(): void;
											});
											public constructor();
											public onPaymentMethodChangeClicked(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class ItemModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemModel>;
									public imageUrl: string;
									public title: string;
									public subtitle: string;
									public quantity: java.lang.Integer;
									public currencyId: string;
									public unitPrice: string;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemModel>;
									public constructor(param0: globalAndroid.os.Parcel);
									public describeContents(): number;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getPrice(): string;
									public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: string, param5: java.math.BigDecimal);
									public hasToShowPrice(): boolean;
									public hasToShowQuantity(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class ItemsModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel>;
									public itemsModelList: java.util.List<com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemModel>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.review_and_confirm.models.ItemsModel>;
									public constructor(param0: globalAndroid.os.Parcel);
									public describeContents(): number;
									public hasUniqueItem(): boolean;
									public hasMultipleItems(): boolean;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public constructor(param0: string, param1: java.util.List<com.mercadopago.android.px.model.Item>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class LineSeparatorType {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType>;
									public static TOP_LINE_SEPARATOR: com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType;
									public static BOTTOM_LINE_SEPARATOR: com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType;
									public static NONE: com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType;
									public static valueOf(param0: string): com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType;
									public static values(): native.Array<com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class PaymentModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel>;
									public paymentMethodId: string;
									public lastFourDigits: string;
									public accreditationTime: java.lang.Integer;
									public issuerName: string;
									public moreThanOnePaymentMethod: boolean;
									public paymentMethodName: string;
									public issuerId: number;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel>;
									public constructor(param0: globalAndroid.os.Parcel);
									public getPaymentType(): string;
									public describeContents(): number;
									public constructor(param0: com.mercadopago.android.px.model.PaymentMethod, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.Issuer, param3: boolean);
									public getCardId(): string;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public hasMoreThanOnePaymentMethod(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class SummaryModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel>;
									public currencyId: string;
									public siteId: string;
									public title: string;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel>;
									public getAmountToPay(): java.math.BigDecimal;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getCharges(): java.math.BigDecimal;
									public hasCoupon(): boolean;
									public getCouponAmount(): java.math.BigDecimal;
									public constructor(param0: globalAndroid.os.Parcel);
									public describeContents(): number;
									public static resolveTitle(param0: java.util.List<com.mercadopago.android.px.model.Item>, param1: string, param2: string): string;
									public getCftPercent(): string;
									public getItemsAmount(): java.math.BigDecimal;
									public constructor(param0: java.math.BigDecimal, param1: com.mercadopago.android.px.model.PaymentMethod, param2: com.mercadopago.android.px.model.Site, param3: com.mercadopago.android.px.model.PayerCost, param4: com.mercadopago.android.px.model.Discount, param5: string, param6: java.math.BigDecimal, param7: java.math.BigDecimal);
									public getPayerCostTotalAmount(): java.math.BigDecimal;
									public getInstallmentAmount(): java.math.BigDecimal;
									public hasMultipleInstallments(): boolean;
									public hasCharges(): boolean;
									public getPaymentTypeId(): string;
									public getInstallmentsRate(): java.math.BigDecimal;
									public getInstallments(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module models {
								export class TermsAndConditionsModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel>;
									public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel>;
									public constructor(param0: globalAndroid.os.Parcel);
									public getMessageLinked(): string;
									public getPublicKey(): string;
									public getLineSeparatorType(): com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType;
									public describeContents(): number;
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.mercadopago.android.px.internal.features.review_and_confirm.models.LineSeparatorType);
									public getMessage(): string;
									public getUrl(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module review_and_confirm {
							export module props {
								export class AmountDescriptionProps {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.review_and_confirm.props.AmountDescriptionProps>;
									public amount: java.math.BigDecimal;
									public description: string;
									public currencyId: string;
									public textColor: java.lang.Integer;
									public descriptionType: string;
									public constructor(param0: java.math.BigDecimal, param1: string, param2: string, param3: java.lang.Integer, param4: string);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export class CustomViewController {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									initializeControls(): void;
									inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									getView(): globalAndroid.view.View;
								});
								public constructor();
								public initializeControls(): void;
								public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								public getView(): globalAndroid.view.View;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export class FontCache {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.FontCache>;
								public static CUSTOM_REGULAR_FONT: string;
								public static CUSTOM_LIGHT_FONT: string;
								public static CUSTOM_MONO_FONT: string;
								public static FONT_ROBOTO: string;
								public static FONT_ROBOTO_MONO: string;
								public constructor();
								public static hasTypeface(param0: string): boolean;
								public static setTypeface(param0: string, param1: globalAndroid.graphics.Typeface): void;
								public static getTypeface(param0: string): globalAndroid.graphics.Typeface;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export class GridSpacingItemDecoration {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.GridSpacingItemDecoration>;
								public constructor(param0: number, param1: number, param2: boolean);
								public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export class ViewControllerFactory {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.ViewControllerFactory>;
								public static getPaymentMethodOnEditionViewController(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethod, param2: com.mercadopago.android.px.model.Token): com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController;
								public static getPaymentMethodOffEditionViewController(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethodSearchItem): com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController;
								public static getPaymentMethodOffEditionViewController(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethod): com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module card {
								export class BackCardView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.card.BackCardView>;
									public static CARD_SECURITY_CODE_DEFAULT_LENGTH: number;
									public static BASE_BACK_SECURITY_CODE: string;
									public static NEUTRAL_CARD_COLOR: number;
									public decorateCardBorder(param0: number): void;
									public show(): void;
									public setSecurityCodeLength(param0: number): void;
									public drawEditingSecurityCode(param0: string): void;
									public initializeControls(): void;
									public draw(): void;
									public clearPaymentMethod(): void;
									public constructor(param0: globalAndroid.content.Context);
									public getView(): globalAndroid.view.View;
									public setSize(param0: string): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public hide(): void;
									public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module card {
								export class CardRepresentationModes {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.card.CardRepresentationModes>;
									public static SHOW_FULL_FRONT_ONLY: string;
									public static SHOW_EMPTY_FRONT_ONLY: string;
									public static EDIT_FRONT: string;
									public static MEDIUM_SIZE: string;
									public static BIG_SIZE: string;
									public static EXTRA_BIG_SIZE: string;
									public static CARD_NUMBER_SIZE_MEDIUM: number;
									public static CARD_NUMBER_SIZE_BIG: number;
									public static CARD_NUMBER_SIZE_EXTRA_BIG: number;
									public static CARD_HOLDER_NAME_SIZE_MEDIUM: number;
									public static CARD_HOLDER_NAME_SIZE_BIG: number;
									public static CARD_HOLDER_NAME_SIZE_EXTRA_BIG: number;
									public static CARD_EXPIRY_DATE_SIZE_MEDIUM: number;
									public static CARD_EXPIRY_DATE_SIZE_BIG: number;
									public static CARD_EXPIRY_DATE_SIZE_EXTRA_BIG: number;
									public static CARD_SECURITY_CODE_FRONT_SIZE_MEDIUM: number;
									public static CARD_SECURITY_CODE_FRONT_SIZE_BIG: number;
									public static CARD_SECURITY_CODE_FRONT_SIZE_EXTRA_BIG: number;
									public static CARD_SECURITY_CODE_BACK_SIZE_MEDIUM: number;
									public static CARD_SECURITY_CODE_BACK_SIZE_BIG: number;
									public static CARD_SECURITY_CODE_BACK_SIZE_EXTRA_BIG: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module card {
								export class CardView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.card.CardView>;
									public static CARD_SIDE_FRONT: string;
									public static CARD_SIDE_BACK: string;
									public updateCardNumberMask(param0: string): void;
									public show(): void;
									public setSecurityCodeLength(param0: number): void;
									public drawEditingCardNumber(param0: string): void;
									public fillCardholderName(param0: string): void;
									public drawEditingCardHolderName(param0: string): void;
									public drawEditingSecurityCode(param0: string): void;
									public initializeControls(): void;
									public constructor(param0: globalAndroid.content.Context);
									public getView(): globalAndroid.view.View;
									public setSize(param0: string): void;
									public setSecurityCodeLocation(param0: string): void;
									public hide(): void;
									public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
									public flipCardToFrontFromBack(param0: globalAndroid.view.Window, param1: globalAndroid.widget.FrameLayout, param2: string, param3: string, param4: string, param5: string, param6: string): void;
									public drawEditingExpiryMonth(param0: string): void;
									public decorateCardBorder(param0: number): void;
									public transitionPaymentMethodSet(): void;
									public hasToShowSecurityCodeInFront(param0: boolean): void;
									public draw(param0: string): void;
									public setLastFourDigits(param0: string): void;
									public clearPaymentMethod(): void;
									public drawFullCard(): void;
									public flipCardToBack(param0: com.mercadopago.android.px.model.PaymentMethod, param1: number, param2: globalAndroid.view.Window, param3: globalAndroid.widget.FrameLayout, param4: string): void;
									public drawEditingExpiryYear(param0: string): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setCardNumberLength(param0: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module card {
								export class FrontCardView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView>;
									public static BASE_NUMBER_CARDHOLDER: string;
									public static BASE_FRONT_SECURITY_CODE: string;
									public static CARD_NUMBER_MAX_LENGTH: number;
									public static CARD_SECURITY_CODE_DEFAULT_LENGTH: number;
									public static CARD_DEFAULT_AMOUNT_SPACES: number;
									public static CARD_AMEX_DINERS_AMOUNT_SPACES: number;
									public static CARD_NUMBER_MAESTRO_SETTING_2_AMOUNT_SPACES: number;
									public static CARD_NUMBER_AMEX_LENGTH: number;
									public static CARD_NUMBER_DINERS_LENGTH: number;
									public static CARD_NUMBER_MAESTRO_SETTING_1_LENGTH: number;
									public static CARD_NUMBER_MAESTRO_SETTING_2_LENGTH: number;
									public static EDITING_TEXT_VIEW_ALPHA: number;
									public drawEditingCard(param0: string, param1: string, param2: string, param3: string, param4: string): void;
									public transitionClearPaymentMethod(): void;
									public updateCardNumberMask(param0: string): void;
									public show(): void;
									public setSecurityCodeLength(param0: number): void;
									public drawEditingCardNumber(param0: string): void;
									public drawEditingCardHolderName(param0: string): void;
									public drawEditingSecurityCode(param0: string): void;
									public initializeControls(): void;
									public hasToShowSecurityCode(param0: boolean): void;
									public getView(): globalAndroid.view.View;
									public setSize(param0: string): void;
									public hide(): void;
									public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
									public enableEditingCardNumber(): void;
									public drawEditingExpiryMonth(param0: string): void;
									public decorateCardBorder(param0: number): void;
									public transitionPaymentMethodSet(): void;
									public setLastFourDigits(param0: string): void;
									public draw(): void;
									public constructor(param0: globalAndroid.content.Context, param1: string);
									public drawFullCard(): void;
									public fillCardHolderName(param0: string): void;
									public drawEditingExpiryYear(param0: string): void;
									public setCardNumberLength(param0: number): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module card {
								export class IdentificationCardView extends com.mercadopago.android.px.internal.features.uicontrollers.identification.IdentificationView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.card.IdentificationCardView>;
									public draw(): void;
									public constructor(param0: globalAndroid.content.Context);
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module identification {
								export class IdentificationTicketView extends com.mercadopago.android.px.internal.features.uicontrollers.identification.IdentificationView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.identification.IdentificationTicketView>;
									public initializeControls(): void;
									public drawIdentificationTypeName(): void;
									public setNormalColorLastNameText(): void;
									public draw(): void;
									public constructor(param0: globalAndroid.content.Context);
									public setNormalColorNameText(): void;
									public setIdentificationLastName(param0: string): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setIdentificationName(param0: string): void;
									public setAlphaColorNameText(): void;
									public setAlphaColorLastNameText(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module identification {
								export abstract class IdentificationView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.identification.IdentificationView>;
									public static NORMAL_TEXT_VIEW_COLOR: number;
									public static ALPHA_TEXT_VIEW_COLOR: number;
									public mContext: globalAndroid.content.Context;
									public mView: globalAndroid.view.View;
									public mCardContainer: globalAndroid.widget.FrameLayout;
									public mCardBorder: globalAndroid.widget.ImageView;
									public mIdentificationNumberTextView: com.mercadopago.android.px.internal.view.MPTextView;
									public mBaseIdNumberView: com.mercadopago.android.px.internal.view.MPTextView;
									public mIdentificationNumber: string;
									public mIdentificationType: com.mercadopago.android.px.model.IdentificationType;
									public initializeControls(): void;
									public draw(): void;
									public setIdentificationType(param0: com.mercadopago.android.px.model.IdentificationType): void;
									public setIdentificationNumber(param0: string): void;
									public constructor(param0: globalAndroid.content.Context);
									public decorateCardBorder(param0: number): void;
									public getView(): globalAndroid.view.View;
									public show(): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public hide(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module issuers {
								export class IssuersView extends com.mercadopago.android.px.internal.features.uicontrollers.issuers.IssuersViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.issuers.IssuersView>;
									public static CARD_IMAGE_PREFIX: string;
									public initializeControls(): void;
									public drawIssuer(param0: com.mercadopago.android.px.model.Issuer): void;
									public constructor(param0: globalAndroid.content.Context);
									public getView(): globalAndroid.view.View;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module issuers {
								export class IssuersViewController extends com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.issuers.IssuersViewController>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.issuers.IssuersViewController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										drawIssuer(param0: com.mercadopago.android.px.model.Issuer): void;
										setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										initializeControls(): void;
										inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										getView(): globalAndroid.view.View;
									});
									public constructor();
									public drawIssuer(param0: com.mercadopago.android.px.model.Issuer): void;
									public initializeControls(): void;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module payercosts {
								export class PayerCostColumn {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.payercosts.PayerCostColumn>;
									public initializeControls(): void;
									public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.math.BigDecimal, param4: java.lang.Integer, param5: java.math.BigDecimal, param6: java.math.BigDecimal);
									public drawPayerCostWithoutTotal(): void;
									public drawPayerCost(): void;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module payercosts {
								export class PayerCostRow {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.payercosts.PayerCostRow>;
									public initializeControls(): void;
									public setSmallTextSize(): void;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.Site);
									public getView(): globalAndroid.view.View;
									public drawPayerCost(param0: java.math.BigDecimal, param1: java.lang.Integer, param2: java.math.BigDecimal, param3: java.math.BigDecimal): void;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethods {
								export class PaymentMethodOffEditableRow extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodOffEditableRow>;
									public initializeControls(): void;
									public showSeparator(): void;
									public draw(): void;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethod);
									public getView(): globalAndroid.view.View;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethodSearchItem);
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethods {
								export class PaymentMethodViewController extends com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										draw(): void;
										showSeparator(): void;
										setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										initializeControls(): void;
										inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										getView(): globalAndroid.view.View;
									});
									public constructor();
									public showSeparator(): void;
									public initializeControls(): void;
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethods {
								export module card {
									export class PaymentMethodOnEditableRow extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.card.PaymentMethodOnView {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.card.PaymentMethodOnEditableRow>;
										public mToken: com.mercadopago.android.px.model.Token;
										public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										public getLastFourDigits(): string;
										public constructor();
										public draw(): void;
										public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethod, param2: com.mercadopago.android.px.model.Token);
										public showSeparator(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethods {
								export module card {
									export abstract class PaymentMethodOnView extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.PaymentMethodViewController {
										public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethods.card.PaymentMethodOnView>;
										public mPaymentMethod: com.mercadopago.android.px.model.PaymentMethod;
										public mContext: globalAndroid.content.Context;
										public mSeparator: globalAndroid.view.View;
										public mView: globalAndroid.view.View;
										public mDescription: com.mercadopago.android.px.internal.view.MPTextView;
										public mIcon: globalAndroid.widget.ImageView;
										public mEditHint: globalAndroid.widget.ImageView;
										public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										public getLastFourDigits(): string;
										public getView(): globalAndroid.view.View;
										public constructor();
										public draw(): void;
										public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										public initializeControls(): void;
										public showSeparator(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PaymentMethodInfoController extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoController>;
									public item: com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel;
									public context: globalAndroid.content.Context;
									public view: globalAndroid.view.View;
									public name: com.mercadopago.android.px.internal.view.MPTextView;
									public description: com.mercadopago.android.px.internal.view.MPTextView;
									public icon: globalAndroid.widget.ImageView;
									public listener: globalAndroid.view.View.OnClickListener;
									public initializeControls(): void;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel);
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PaymentMethodInfoModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getId(): string;
										getName(): string;
										getDescription(): string;
										getIcon(): number;
									});
									public constructor();
									public getId(): string;
									public getIcon(): number;
									public getName(): string;
									public getDescription(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PaymentMethodSearchCustomOption extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchCustomOption>;
									public mItem: com.mercadopago.android.px.model.CustomSearchItem;
									public mContext: globalAndroid.content.Context;
									public mView: globalAndroid.view.View;
									public mDescription: com.mercadopago.android.px.internal.view.MPTextView;
									public mComment: com.mercadopago.android.px.internal.view.MPTextView;
									public mIcon: globalAndroid.widget.ImageView;
									public mListener: globalAndroid.view.View.OnClickListener;
									public initializeControls(): void;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.CustomSearchItem);
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PaymentMethodSearchOption extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchOption>;
									public mItem: com.mercadopago.android.px.model.PaymentMethodSearchItem;
									public mContext: globalAndroid.content.Context;
									public mView: globalAndroid.view.View;
									public mDescription: com.mercadopago.android.px.internal.view.MPTextView;
									public mComment: com.mercadopago.android.px.internal.view.MPTextView;
									public mIcon: globalAndroid.widget.ImageView;
									public mListener: globalAndroid.view.View.OnClickListener;
									public initializeControls(): void;
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethodSearchItem);
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PaymentMethodSearchViewController extends com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodSearchViewController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										draw(): void;
										setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										initializeControls(): void;
										inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										getView(): globalAndroid.view.View;
									});
									public constructor();
									public initializeControls(): void;
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module paymentmethodsearch {
								export class PluginPaymentMethodInfo extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PluginPaymentMethodInfo>;
									public getId(): string;
									public getIcon(): number;
									public getName(): string;
									public getDescription(): string;
									public constructor(param0: com.mercadopago.android.px.model.PaymentMethodInfo);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module savedcards {
								export class SavedCardRowView extends com.mercadopago.android.px.internal.features.uicontrollers.savedcards.SavedCardView {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.savedcards.SavedCardRowView>;
									public constructor(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.Card, param2: number);
									public initializeControls(): void;
									public showSeparator(): void;
									public draw(): void;
									public getLastFourDigits(): string;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module features {
						export module uicontrollers {
							export module savedcards {
								export class SavedCardView extends com.mercadopago.android.px.internal.features.uicontrollers.CustomViewController {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.features.uicontrollers.savedcards.SavedCardView>;
									/**
									 * Constructs a new instance of the com.mercadopago.android.px.internal.features.uicontrollers.savedcards.SavedCardView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										draw(): void;
										showSeparator(): void;
										setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
										initializeControls(): void;
										inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
										getView(): globalAndroid.view.View;
									});
									public constructor();
									public showSeparator(): void;
									public initializeControls(): void;
									public draw(): void;
									public getView(): globalAndroid.view.View;
									public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
									public inflateInParent(param0: globalAndroid.view.ViewGroup, param1: boolean): globalAndroid.view.View;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module navigation {
						export class DefaultPaymentMethodDriver {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.navigation.DefaultPaymentMethodDriver>;
							public constructor(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: com.mercadopago.android.px.preferences.PaymentPreference);
							public drive(param0: com.mercadopago.android.px.internal.navigation.DefaultPaymentMethodDriver.PaymentMethodDriverCallback): void;
						}
						export module DefaultPaymentMethodDriver {
							export class PaymentMethodDriverCallback {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.navigation.DefaultPaymentMethodDriver.PaymentMethodDriverCallback>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.navigation.DefaultPaymentMethodDriver$PaymentMethodDriverCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									driveToCardVault(param0: com.mercadopago.android.px.model.Card): void;
									doNothing(): void;
									driveToNewDebitCardFlow(param0: string): void;
								});
								public constructor();
								public doNothing(): void;
								public driveToCardVault(param0: com.mercadopago.android.px.model.Card): void;
								public driveToNewDebitCardFlow(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class AmountRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.AmountRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.AmountRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAmountToPay(): java.math.BigDecimal;
								getItemsAmount(): java.math.BigDecimal;
								getItemsPlusCharges(): java.math.BigDecimal;
								getAppliedCharges(): java.math.BigDecimal;
							});
							public constructor();
							public getAppliedCharges(): java.math.BigDecimal;
							public getAmountToPay(): java.math.BigDecimal;
							public getItemsAmount(): java.math.BigDecimal;
							public getItemsPlusCharges(): java.math.BigDecimal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class ChargeRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.ChargeRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.ChargeRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getChargeAmount(): java.math.BigDecimal;
								shouldApply(param0: com.mercadopago.android.px.model.commission.PaymentMethodRule): boolean;
							});
							public constructor();
							public getChargeAmount(): java.math.BigDecimal;
							public shouldApply(param0: com.mercadopago.android.px.model.commission.PaymentMethodRule): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class DiscountRepository extends com.mercadopago.android.px.internal.base.ResourcesProvider {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.DiscountRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.DiscountRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								configureMerchantDiscountManually(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
								configureDiscountManually(param0: com.mercadopago.android.px.model.Discount, param1: com.mercadopago.android.px.model.Campaign): void;
								configureDiscountAutomatically(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.callbacks.MPCall<java.lang.Boolean>;
								getCodeDiscount(param0: java.math.BigDecimal, param1: string): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Discount>;
								getDiscount(): com.mercadopago.android.px.model.Discount;
								getDiscountCode(): string;
								getCampaign(): com.mercadopago.android.px.model.Campaign;
								getCampaign(param0: string): com.mercadopago.android.px.model.Campaign;
								isNotAvailableDiscount(): boolean;
								hasCodeCampaign(): boolean;
								hasValidDiscount(): boolean;
								saveDiscountCode(param0: string): void;
								reset(): void;
							});
							public constructor();
							public getDiscount(): com.mercadopago.android.px.model.Discount;
							public configureDiscountAutomatically(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.callbacks.MPCall<java.lang.Boolean>;
							public getCampaign(): com.mercadopago.android.px.model.Campaign;
							public hasCodeCampaign(): boolean;
							public configureMerchantDiscountManually(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
							public isNotAvailableDiscount(): boolean;
							public configureDiscountManually(param0: com.mercadopago.android.px.model.Discount, param1: com.mercadopago.android.px.model.Campaign): void;
							public getCodeDiscount(param0: java.math.BigDecimal, param1: string): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Discount>;
							public reset(): void;
							public getCampaign(param0: string): com.mercadopago.android.px.model.Campaign;
							public getDiscountCode(): string;
							public saveDiscountCode(param0: string): void;
							public hasValidDiscount(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class EscManager {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.EscManager>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.EscManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasEsc(param0: com.mercadopago.android.px.model.Card): boolean;
								manageEscForPayment(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
								manageEscForError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: com.mercadopago.android.px.model.PaymentData): boolean;
							});
							public constructor();
							public hasEsc(param0: com.mercadopago.android.px.model.Card): boolean;
							public manageEscForPayment(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
							public manageEscForError(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: com.mercadopago.android.px.model.PaymentData): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class GroupsRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.GroupsRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.GroupsRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getGroups(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
							});
							public constructor();
							public getGroups(): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.PaymentMethodSearch>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class InstallmentRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.InstallmentRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.InstallmentRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInstallmentAmount(): java.math.BigDecimal;
								getInstallmentTotalAmount(): java.math.BigDecimal;
								getInstallments(): com.mercadopago.android.px.internal.callbacks.MPCall<java.util.List<com.mercadopago.android.px.model.Installment>>;
							});
							public constructor();
							public getInstallmentTotalAmount(): java.math.BigDecimal;
							public getInstallments(): com.mercadopago.android.px.internal.callbacks.MPCall<java.util.List<com.mercadopago.android.px.model.Installment>>;
							public getInstallmentAmount(): java.math.BigDecimal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class PaymentRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.PaymentRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.PaymentRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								startPayment(): void;
								startOneTapPayment(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
								isExplodingAnimationCompatible(): boolean;
								getPaymentData(): com.mercadopago.android.px.model.PaymentData;
								createPaymentResult(param0: com.mercadopago.android.px.model.IPayment): com.mercadopago.android.px.model.PaymentResult;
								getPaymentTimeout(): number;
								attach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
								detach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
								storePayment(param0: com.mercadopago.android.px.model.IPayment): void;
								getPayment(): com.mercadopago.android.px.model.IPayment;
								hasPayment(): boolean;
								createRecoveryForInvalidESC(): com.mercadopago.android.px.model.PaymentRecovery;
								createPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
							});
							public constructor();
							public createPaymentResult(param0: com.mercadopago.android.px.model.IPayment): com.mercadopago.android.px.model.PaymentResult;
							public createPaymentRecovery(): com.mercadopago.android.px.model.PaymentRecovery;
							public startPayment(): void;
							public attach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public startOneTapPayment(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public isExplodingAnimationCompatible(): boolean;
							public hasPayment(): boolean;
							public getPayment(): com.mercadopago.android.px.model.IPayment;
							public createRecoveryForInvalidESC(): com.mercadopago.android.px.model.PaymentRecovery;
							public getPaymentData(): com.mercadopago.android.px.model.PaymentData;
							public detach(param0: com.mercadopago.android.px.internal.callbacks.PaymentServiceHandler): void;
							public getPaymentTimeout(): number;
							public storePayment(param0: com.mercadopago.android.px.model.IPayment): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class PaymentSettingRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.PaymentSettingRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.PaymentSettingRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								reset(): void;
								configure(param0: com.mercadopago.android.px.configuration.AdvancedConfiguration): void;
								configure(param0: string): void;
								configure(param0: com.mercadopago.android.px.preferences.CheckoutPreference): void;
								configure(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
								configure(param0: com.mercadopago.android.px.model.Token): void;
								configurePreferenceId(param0: string): void;
								configurePrivateKey(param0: string): void;
								chargeRules(): java.util.List<com.mercadopago.android.px.model.commission.ChargeRule>;
								getPaymentConfiguration(): com.mercadopago.android.px.configuration.PaymentConfiguration;
								getCheckoutPreference(): com.mercadopago.android.px.preferences.CheckoutPreference;
								getCheckoutPreferenceId(): string;
								getPublicKey(): string;
								getTransactionId(): string;
								getAdvancedConfiguration(): com.mercadopago.android.px.configuration.AdvancedConfiguration;
								getPrivateKey(): string;
								getToken(): com.mercadopago.android.px.model.Token;
								hasToken(): boolean;
							});
							public constructor();
							public getCheckoutPreferenceId(): string;
							public getCheckoutPreference(): com.mercadopago.android.px.preferences.CheckoutPreference;
							public getPrivateKey(): string;
							public getAdvancedConfiguration(): com.mercadopago.android.px.configuration.AdvancedConfiguration;
							public configure(param0: string): void;
							public reset(): void;
							public configure(param0: com.mercadopago.android.px.configuration.AdvancedConfiguration): void;
							public hasToken(): boolean;
							public getToken(): com.mercadopago.android.px.model.Token;
							public configure(param0: com.mercadopago.android.px.model.Token): void;
							public getPaymentConfiguration(): com.mercadopago.android.px.configuration.PaymentConfiguration;
							public configurePrivateKey(param0: string): void;
							public chargeRules(): java.util.List<com.mercadopago.android.px.model.commission.ChargeRule>;
							public configure(param0: com.mercadopago.android.px.preferences.CheckoutPreference): void;
							public getPublicKey(): string;
							public getTransactionId(): string;
							public configurePreferenceId(param0: string): void;
							public configure(param0: com.mercadopago.android.px.configuration.PaymentConfiguration): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class PluginInitTask {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.PluginInitTask>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.PluginInitTask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(param0: com.mercadopago.android.px.internal.repository.PluginInitTask.DataInitializationCallbacks): void;
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
							public init(param0: com.mercadopago.android.px.internal.repository.PluginInitTask.DataInitializationCallbacks): void;
						}
						export module PluginInitTask {
							export class DataInitializationCallbacks {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.PluginInitTask.DataInitializationCallbacks>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.PluginInitTask$DataInitializationCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onDataInitialized(): void;
									onFailure(param0: java.lang.Exception): void;
								});
								public constructor();
								public onDataInitialized(): void;
								public onFailure(param0: java.lang.Exception): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class PluginRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.PluginRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.PluginRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPlugin(param0: string): com.mercadopago.android.px.core.PaymentMethodPlugin;
								getPluginAsPaymentMethod(param0: string, param1: string): com.mercadopago.android.px.model.PaymentMethod;
								getPaymentMethodInfo(param0: com.mercadopago.android.px.core.PaymentMethodPlugin): com.mercadopago.android.px.model.PaymentMethodInfo;
								getPaymentMethodInfo(param0: string): com.mercadopago.android.px.model.PaymentMethodInfo;
								getEnabledPlugins(): java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>;
								hasEnabledPaymentMethodPlugin(): boolean;
								getPaymentMethodPluginCount(): number;
								getFirstEnabledPlugin(): com.mercadopago.android.px.core.PaymentMethodPlugin;
								getInitTask(param0: boolean): com.mercadopago.android.px.internal.repository.PluginInitTask;
								initialized(): void;
							});
							public constructor();
							public getPluginAsPaymentMethod(param0: string, param1: string): com.mercadopago.android.px.model.PaymentMethod;
							public getEnabledPlugins(): java.util.Collection<com.mercadopago.android.px.core.PaymentMethodPlugin>;
							public getPlugin(param0: string): com.mercadopago.android.px.core.PaymentMethodPlugin;
							public getInitTask(param0: boolean): com.mercadopago.android.px.internal.repository.PluginInitTask;
							public getPaymentMethodInfo(param0: com.mercadopago.android.px.core.PaymentMethodPlugin): com.mercadopago.android.px.model.PaymentMethodInfo;
							public hasEnabledPaymentMethodPlugin(): boolean;
							public getPaymentMethodPluginCount(): number;
							public getFirstEnabledPlugin(): com.mercadopago.android.px.core.PaymentMethodPlugin;
							public getPaymentMethodInfo(param0: string): com.mercadopago.android.px.model.PaymentMethodInfo;
							public initialized(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class TokenRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.TokenRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.TokenRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createToken(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Token>;
							});
							public constructor();
							public createToken(param0: com.mercadopago.android.px.model.Card): com.mercadopago.android.px.internal.callbacks.MPCall<com.mercadopago.android.px.model.Token>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module repository {
						export class UserSelectionRepository {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.repository.UserSelectionRepository>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.repository.UserSelectionRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								select(param0: com.mercadopago.android.px.model.PaymentMethod): void;
								select(param0: com.mercadopago.android.px.model.PayerCost): void;
								select(param0: com.mercadopago.android.px.model.Issuer): void;
								select(param0: com.mercadopago.android.px.model.Card): void;
								getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
								removePaymentMethodSelection(): void;
								hasSelectedPaymentMethod(): boolean;
								hasPayerCostSelected(): boolean;
								hasCardSelected(): boolean;
								getPayerCost(): com.mercadopago.android.px.model.PayerCost;
								getIssuer(): com.mercadopago.android.px.model.Issuer;
								getCard(): com.mercadopago.android.px.model.Card;
								reset(): void;
								select(param0: string): void;
								getPaymentType(): string;
							});
							public constructor();
							public getCard(): com.mercadopago.android.px.model.Card;
							public select(param0: com.mercadopago.android.px.model.Issuer): void;
							public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
							public hasSelectedPaymentMethod(): boolean;
							public getPayerCost(): com.mercadopago.android.px.model.PayerCost;
							public hasPayerCostSelected(): boolean;
							public select(param0: com.mercadopago.android.px.model.Card): void;
							public reset(): void;
							public getPaymentType(): string;
							public select(param0: com.mercadopago.android.px.model.PayerCost): void;
							public removePaymentMethodSelection(): void;
							public hasCardSelected(): boolean;
							public select(param0: com.mercadopago.android.px.model.PaymentMethod): void;
							public select(param0: string): void;
							public getIssuer(): com.mercadopago.android.px.model.Issuer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module tracker {
						export class FlowHandler {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.tracker.FlowHandler>;
							public constructor();
							public generateFlowId(): void;
							public getFlowId(): string;
							public static getInstance(): com.mercadopago.android.px.internal.tracker.FlowHandler;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module tracker {
						export class MPTrackingContext {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.tracker.MPTrackingContext>;
							public clearExpiredTracks(): void;
							public trackEvent(param0: com.mercadopago.android.px.model.Event): void;
						}
						export module MPTrackingContext {
							export class Builder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.tracker.MPTrackingContext.Builder>;
								public build(): com.mercadopago.android.px.internal.tracker.MPTrackingContext;
								public constructor(param0: globalAndroid.content.Context, param1: string);
								public setVersion(param0: string): com.mercadopago.android.px.internal.tracker.MPTrackingContext.Builder;
								public setPublicKey(param0: string): com.mercadopago.android.px.internal.tracker.MPTrackingContext.Builder;
								public setTrackingStrategy(param0: string): com.mercadopago.android.px.internal.tracker.MPTrackingContext.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module tracker {
						export class Tracker {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.tracker.Tracker>;
							public static trackOneTapScreen(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public static trackOneTapCancel(param0: globalAndroid.content.Context): void;
							public static trackOneTapConfirm(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public static trackCheckoutConfirm(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel, param2: com.mercadopago.android.px.internal.features.review_and_confirm.models.SummaryModel): void;
							public static trackPaymentVaultChildrenScreen(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethodSearchItem): void;
							public static trackError(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
							public static trackScreen(param0: string, param1: string, param2: globalAndroid.content.Context, param3: java.lang.Iterable<globalAndroid.support.v4.util.Pair<string,string>>): void;
							public static trackScreen(param0: string, param1: string, param2: globalAndroid.content.Context): void;
							public static trackDiscountTermsAndConditions(param0: globalAndroid.content.Context): void;
							public static trackReviewAndConfirmScreen(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.review_and_confirm.models.PaymentModel): void;
							public static trackOneTapSummaryDetail(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.viewmodel.OneTapModel): void;
							public static trackScreen(param0: string, param1: string, param2: globalAndroid.content.Context, param3: java.lang.Iterable<globalAndroid.support.v4.util.Pair<string,string>>, param4: string): void;
							public static trackPaymentVaultScreen(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.PaymentMethodSearch, param2: java.util.Set<string>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module tracker {
						export class TrackingFormatter {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.tracker.TrackingFormatter>;
							public static getFormattedPaymentMethodsForTracking(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: java.lang.Iterable<com.mercadopago.android.px.core.PaymentMethodPlugin>, param2: java.util.Set<string>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class BitmapUtils {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.BitmapUtils>;
							public constructor();
							public static scaleDown(param0: globalAndroid.graphics.Bitmap, param1: number, param2: boolean): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class CircleTransform {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.CircleTransform>;
							public constructor();
							public key(): string;
							public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class ErrorUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.ErrorUtil>;
							public static ERROR_REQUEST_CODE: number;
							public static PUBLIC_KEY_EXTRA: string;
							public static startErrorActivity(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: boolean): void;
							public static startErrorActivity(param0: globalAndroid.app.Activity, param1: string, param2: boolean): void;
							public static showApiExceptionError(param0: globalAndroid.app.Activity, param1: com.mercadopago.android.px.model.exceptions.ApiException, param2: string): void;
							public static startErrorActivity(param0: globalAndroid.app.Activity, param1: com.mercadopago.android.px.model.exceptions.MercadoPagoError): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class EscUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.EscUtil>;
							public static isErrorInvalidPaymentWithEsc(param0: com.mercadopago.android.px.model.exceptions.MercadoPagoError, param1: com.mercadopago.android.px.model.PaymentData): boolean;
							public static shouldDeleteEsc(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
							public static isInvalidEscPayment(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
							public static shouldStoreESC(param0: com.mercadopago.android.px.model.PaymentData, param1: string, param2: string): boolean;
							public static isInvalidEscForApiException(param0: com.mercadopago.android.px.model.exceptions.ApiException): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class FlipModalAnimationUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.FlipModalAnimationUtil>;
							public static flipView(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class FragmentUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.FragmentUtil>;
							public static addFragmentInside(param0: globalAndroid.view.ViewGroup, param1: number, param2: com.mercadopago.android.px.model.ExternalFragment): void;
							public static addFragmentInside(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.support.v7.app.AppCompatActivity, param2: number, param3: string, param4: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class InstallmentsUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.InstallmentsUtil>;
							public constructor();
							public static shouldWarnAboutBankInterests(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class MPAnimationUtils {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.MPAnimationUtils>;
							public static ANIMATION_EXTRA_FACTOR: number;
							public constructor();
							public static fadeOutLollipop(param0: number, param1: globalAndroid.widget.ImageView, param2: globalAndroid.content.Context): void;
							public static transitionCardAppear(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.uicontrollers.card.CardView, param2: com.mercadopago.android.px.internal.features.uicontrollers.card.IdentificationCardView): void;
							public static flipToBack(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: com.mercadopago.android.px.internal.features.uicontrollers.card.BackCardView): void;
							public static flipToFront(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.view.View, param3: globalAndroid.view.View): void;
							public static fadeIn(param0: number, param1: globalAndroid.widget.ImageView, param2: globalAndroid.content.Context): void;
							public static flipToBack(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView, param2: com.mercadopago.android.px.internal.features.uicontrollers.card.BackCardView): void;
							public static setImageViewColor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context, param2: number): void;
							public static flipToFront(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.uicontrollers.card.FrontCardView, param2: com.mercadopago.android.px.internal.features.uicontrollers.card.BackCardView): void;
							public static fadeOut(param0: number, param1: globalAndroid.widget.ImageView, param2: globalAndroid.content.Context): void;
							public static setImageViewColorLollipop(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context, param2: number): void;
							public static transitionCardDisappear(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.features.uicontrollers.card.CardView, param2: com.mercadopago.android.px.internal.features.uicontrollers.card.IdentificationCardView): void;
							public static fadeInLollipop(param0: number, param1: globalAndroid.widget.ImageView, param2: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class MPCardMaskUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.MPCardMaskUtil>;
							public static BASE_FRONT_SECURITY_CODE: string;
							public static CPF_SEPARATOR_AMOUNT: number;
							public static CNPJ_SEPARATOR_AMOUNT: number;
							public static LAST_DIGITS_LENGTH: number;
							public static HIDDEN_NUMBER_CHAR: string;
							public static ORIGINAL_SPACE_DIGIT: number;
							public static CARD_NUMBER_MAX_LENGTH: number;
							public static CARD_NUMBER_AMEX_LENGTH: number;
							public static CARD_NUMBER_DINERS_LENGTH: number;
							public constructor();
							public static buildNumberWithMask(param0: number, param1: string): string;
							public static buildIdentificationNumberOfTypeCNPJ(param0: string, param1: number): string;
							public static getCardNumberHidden(param0: number, param1: string): string;
							public static isDefaultSpaceErasable(param0: number): boolean;
							public static buildIdentificationNumberWithMask(param0: string, param1: com.mercadopago.android.px.model.IdentificationType): string;
							public static buildIdentificationNumberWithDecimalSeparator(param0: string): string;
							public static getCardNumberReset(param0: string): java.lang.StringBuilder;
							public static buildIdentificationNumberOfTypeCPF(param0: string, param1: number): string;
							public static getCharOfCard(param0: string, param1: number): string;
							public static buildSecurityCode(param0: number, param1: string): string;
							public static needsMask(param0: string, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class MPCardUIUtils {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.MPCardUIUtils>;
							public static NEUTRAL_CARD_COLOR: number;
							public static FULL_TEXT_VIEW_COLOR: number;
							public static NEUTRAL_CARD_COLOR_NAME: string;
							public static FULL_TEXT_VIEW_COLOR_NAME: string;
							public constructor();
							public static getCardColor(param0: com.mercadopago.android.px.model.PaymentMethod, param1: globalAndroid.content.Context): number;
							public static getCardFontColor(param0: com.mercadopago.android.px.model.PaymentMethod, param1: globalAndroid.content.Context): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class MercadoPagoUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.MercadoPagoUtil>;
							public constructor();
							public static getPaymentMethodSearchItemIcon(param0: globalAndroid.content.Context, param1: string): number;
							public static isCard(param0: string): boolean;
							public static getValidPaymentMethodsForBin(param0: string, param1: java.util.List<com.mercadopago.android.px.model.PaymentMethod>): java.util.List<com.mercadopago.android.px.model.PaymentMethod>;
							public static getPaymentMethodIcon(param0: globalAndroid.content.Context, param1: string): number;
							public static getAccreditationTimeMessage(param0: globalAndroid.content.Context, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class QueryBuilder {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.QueryBuilder>;
							public static WIDTH_DEFAULT: number;
							public static WEIGHT_DEFAULT: number;
							public static WEIGHT_LIGHT: number;
							public static ITALIC_DEFAULT: number;
							public withItalic(param0: number): com.mercadopago.android.px.internal.util.QueryBuilder;
							public constructor(param0: string);
							public withWidth(param0: number): com.mercadopago.android.px.internal.util.QueryBuilder;
							public withWeight(param0: number): com.mercadopago.android.px.internal.util.QueryBuilder;
							public build(): string;
							public withFamilyName(param0: string): com.mercadopago.android.px.internal.util.QueryBuilder;
							public withBestEffort(param0: boolean): com.mercadopago.android.px.internal.util.QueryBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class ResourceUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.ResourceUtil>;
							public static BANK_SUFFIX: string;
							public static TINT_PREFIX: string;
							public constructor();
							public static getIconResource(param0: globalAndroid.content.Context, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class ReviewUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.ReviewUtil>;
							public static getPaymentInstructionTemplate(param0: com.mercadopago.android.px.model.PaymentMethod): number;
							public static getPaymentMethodDescription(param0: com.mercadopago.android.px.model.PaymentMethod, param1: string, param2: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class ScaleUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.ScaleUtil>;
							public constructor();
							public static isLowRes(param0: globalAndroid.content.Context): boolean;
							public static getPxFromDp(param0: number, param1: globalAndroid.content.Context): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class StatusBarDecorator {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.StatusBarDecorator>;
							public setupStatusBarColor(param0: number): void;
							public setupStatusBarColor(param0: globalAndroid.content.Context, param1: number): void;
							public constructor(param0: globalAndroid.view.Window);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class UnlockCardUtil {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.UnlockCardUtil>;
							public constructor();
							public static hasSite(param0: string): boolean;
							public static getCardUnlockingLink(param0: string, param1: java.lang.Long): string;
							public static hasUnlockingLinkParameters(param0: string, param1: java.lang.Long): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export class ViewUtils {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.util.ViewUtils>;
							public static showRegularLayout(param0: globalAndroid.app.Activity): void;
							public static loadOrCallError(param0: string, param1: globalAndroid.widget.ImageView, param2: com.squareup.picasso.Callback): void;
							public static hideKeyboard(param0: globalAndroid.app.Activity): void;
							public static loadOrGone(param0: string, param1: globalAndroid.widget.TextView): void;
							public static setMarginBottomInView(param0: globalAndroid.view.View, param1: number): void;
							public static resizeViewGroupLayoutParams(param0: globalAndroid.view.ViewGroup, param1: number, param2: number, param3: globalAndroid.content.Context): void;
							public static loadOrGone(param0: string, param1: globalAndroid.widget.ImageView): void;
							public static setMarginInView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
							public static setMarginTopInView(param0: globalAndroid.view.View, param1: number): void;
							public static openKeyboard(param0: globalAndroid.view.View): void;
							public static showProgressLayout(param0: globalAndroid.app.Activity): void;
							public static showOrGone(param0: globalAndroid.view.View, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export class AmountFormatter extends com.mercadopago.android.px.internal.util.textformatter.ChainFormatter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.AmountFormatter>;
								public add(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.util.textformatter.AmountFormatter;
								public normalDecimals(): com.mercadopago.android.px.internal.util.textformatter.Style;
								public smallDecimals(): com.mercadopago.android.px.internal.util.textformatter.Style;
								public apply(param0: string): globalAndroid.text.Spannable;
								public substract(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.util.textformatter.AmountFormatter;
								public add(param0: com.mercadopago.android.px.model.Discount): com.mercadopago.android.px.internal.util.textformatter.AmountFormatter;
								public substract(param0: com.mercadopago.android.px.model.Discount): com.mercadopago.android.px.internal.util.textformatter.AmountFormatter;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export abstract class ChainFormatter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.ChainFormatter>;
								public apply(param0: string): globalAndroid.text.Spannable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export class CurrencyFormatter extends com.mercadopago.android.px.internal.util.textformatter.ChainFormatter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.CurrencyFormatter>;
								public amount(param0: java.math.BigDecimal): com.mercadopago.android.px.internal.util.textformatter.AmountFormatter;
								public noSpace(): com.mercadopago.android.px.internal.util.textformatter.CurrencyFormatter;
								public withSpace(): com.mercadopago.android.px.internal.util.textformatter.CurrencyFormatter;
								public apply(param0: string): globalAndroid.text.Spannable;
								public noSymbol(): com.mercadopago.android.px.internal.util.textformatter.CurrencyFormatter;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export abstract class Style extends com.mercadopago.android.px.internal.util.textformatter.ChainFormatter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.Style>;
								public into(param0: globalAndroid.widget.TextView): com.mercadopago.android.px.internal.util.textformatter.TextFormatter;
								public apply(param0: number, param1: globalAndroid.content.Context): globalAndroid.text.Spannable;
								public apply(param0: string): globalAndroid.text.Spannable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export class StyleNormalDecimal extends com.mercadopago.android.px.internal.util.textformatter.Style {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.StyleNormalDecimal>;
								public apply(param0: number, param1: globalAndroid.content.Context): globalAndroid.text.Spannable;
								public apply(param0: string): globalAndroid.text.Spannable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export class StyleSmallDecimal extends com.mercadopago.android.px.internal.util.textformatter.Style {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.StyleSmallDecimal>;
								public apply(param0: number, param1: globalAndroid.content.Context): globalAndroid.text.Spannable;
								public apply(param0: string): globalAndroid.text.Spannable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module util {
						export module textformatter {
							export class TextFormatter {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.util.textformatter.TextFormatter>;
								public visible(param0: boolean): com.mercadopago.android.px.internal.util.textformatter.TextFormatter;
								public static withCurrencyId(param0: string): com.mercadopago.android.px.internal.util.textformatter.CurrencyFormatter;
								public toSpannable(): globalAndroid.text.Spannable;
								public normal(): com.mercadopago.android.px.internal.util.textformatter.TextFormatter;
								public strike(): com.mercadopago.android.px.internal.util.textformatter.TextFormatter;
								public holder(param0: number): com.mercadopago.android.px.internal.util.textformatter.TextFormatter;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ActionDispatcher {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ActionDispatcher>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.view.ActionDispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								dispatch(param0: com.mercadopago.android.px.model.Action): void;
							});
							public constructor();
							public dispatch(param0: com.mercadopago.android.px.model.Action): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ActionsListener {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ActionsListener>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.view.ActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAction(param0: com.mercadopago.android.px.model.Action): void;
							});
							public constructor();
							public onAction(param0: com.mercadopago.android.px.model.Action): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class AmountView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.AmountView>;
							public show(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.Site): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setOnClickListener(param0: com.mercadopago.android.px.internal.view.AmountView.OnClick): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module AmountView {
							export class OnClick {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.AmountView.OnClick>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.view.AmountView$OnClick interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onDetailClicked(): void;
									onInputRequestClicked(): void;
								});
								public constructor();
								public onDetailClicked(): void;
								public onInputRequestClicked(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class BackAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.BackAction>;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export abstract class Button extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.view.Button.Props,com.mercadopago.android.px.internal.view.Button.Actions> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Button>;
							public constructor();
							public getButtonView(param0: globalAndroid.content.Context): com.mercadolibre.android.ui.widgets.MeliButton;
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: com.mercadopago.android.px.internal.view.Button.Props, param1: com.mercadopago.android.px.internal.view.Button.Actions);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
						export module Button {
							export class Actions {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Button.Actions>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.view.Button$Actions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onClick(param0: com.mercadopago.android.px.model.Action): void;
									onClick(param0: number, param1: number): void;
								});
								public constructor();
								public onClick(param0: number, param1: number): void;
								public onClick(param0: com.mercadopago.android.px.model.Action): void;
							}
							export class Props {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Button.Props>;
								public action: com.mercadopago.android.px.model.Action;
								public label: string;
								public constructor(param0: string, param1: com.mercadopago.android.px.model.Action);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ButtonLink extends com.mercadopago.android.px.internal.view.Button {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ButtonLink>;
							public constructor();
							public getButtonView(param0: globalAndroid.content.Context): com.mercadolibre.android.ui.widgets.MeliButton;
							public constructor(param0: com.mercadopago.android.px.internal.view.Button.Props, param1: com.mercadopago.android.px.internal.view.Button.Actions);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ButtonPrimary extends com.mercadopago.android.px.internal.view.Button {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ButtonPrimary>;
							public constructor();
							public getButtonView(param0: globalAndroid.content.Context): com.mercadolibre.android.ui.widgets.MeliButton;
							public constructor(param0: com.mercadopago.android.px.internal.view.Button.Props, param1: com.mercadopago.android.px.internal.view.Button.Actions);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export abstract class CompactComponent<Props, Actions>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.CompactComponent<any,any>>;
							public props: Props;
							public constructor();
							public setProps(param0: Props, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public static compose(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.view.View;
							public constructor(param0: Props);
							public getActions(): Actions;
							public static createLinearContainer(param0: globalAndroid.content.Context): globalAndroid.widget.LinearLayout;
							public static createScrollContainer(param0: globalAndroid.content.Context): globalAndroid.widget.ScrollView;
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: Props, param1: Actions);
							public static compose(param0: globalAndroid.view.ViewGroup, param1: native.Array<globalAndroid.view.View>): globalAndroid.view.View;
							public static inflate(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class Component<T, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Component<any,any>>;
							public props: T;
							public state: S;
							public constructor(param0: T, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public onViewDetachedFromWindow(): void;
							public onViewAttachedToWindow(): void;
							public viewDetachedFromWindow(): void;
							public isViewAttached(): boolean;
							public constructor(param0: T);
							public getDispatcher(): com.mercadopago.android.px.internal.view.ActionDispatcher;
							public setState(param0: S): void;
							public setDispatcher(param0: com.mercadopago.android.px.internal.view.ActionDispatcher): void;
							public viewAttachedToWindow(): void;
							public setProps(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ComponentManager<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ComponentManager<any>>;
							public setActionsListener(param0: com.mercadopago.android.px.internal.view.ActionsListener): void;
							public onProps(param0: T): void;
							public constructor(param0: globalAndroid.app.Activity);
							public render(param0: com.mercadopago.android.px.internal.view.Component<any,any>, param1: globalAndroid.view.ViewGroup): void;
							public dispatch(param0: com.mercadopago.android.px.model.Action): void;
							public setComponent(param0: com.mercadopago.android.px.internal.view.Component<any,any>): void;
							public render(param0: com.mercadopago.android.px.internal.view.Component<any,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class CustomScrollView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.CustomScrollView>;
							public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class DiscountDetail extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.view.DiscountDetail.Props,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetail>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: com.mercadopago.android.px.internal.view.DiscountDetail.Props);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
						export module DiscountDetail {
							export class Props {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetail.Props>;
								public constructor(param0: com.mercadopago.android.px.internal.repository.DiscountRepository);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class DiscountDetailContainer extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetailContainer>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props);
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
						export module DiscountDetailContainer {
							export class Props {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props>;
								public constructor(param0: com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType, param1: com.mercadopago.android.px.internal.repository.DiscountRepository);
							}
							export module Props {
								export class DialogTitleType {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType>;
									public static BIG: com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType;
									public static SMALL: com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType;
									public static valueOf(param0: string): com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType;
									public static values(): native.Array<com.mercadopago.android.px.internal.view.DiscountDetailContainer.Props.DialogTitleType>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class DiscountDetailDialog {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.DiscountDetailDialog>;
							public constructor();
							public getContentView(): number;
							public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public getSecondaryExitString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class FixAppBarLayoutBehavior {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.FixAppBarLayoutBehavior>;
							public constructor();
							public onNestedPreScroll(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.support.design.widget.AppBarLayout, param2: globalAndroid.view.View, param3: number, param4: number, param5: native.Array<number>, param6: number): void;
							public onNestedScroll(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.support.design.widget.AppBarLayout, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class Footer extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.view.Footer.Props,com.mercadopago.android.px.internal.view.ActionDispatcher> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Footer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: com.mercadopago.android.px.internal.view.Footer.Props, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
						export module Footer {
							export class Props {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Footer.Props>;
								public buttonAction: com.mercadopago.android.px.internal.view.Button.Props;
								public linkAction: com.mercadopago.android.px.internal.view.Button.Props;
								public constructor(param0: com.mercadopago.android.px.internal.view.Button.Props, param1: com.mercadopago.android.px.internal.view.Button.Props);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class GridSpacingItemDecoration {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.GridSpacingItemDecoration>;
							public constructor(param0: number, param1: number, param2: boolean);
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class HelpComponent extends com.mercadopago.android.px.internal.view.CompactComponent<string,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.HelpComponent>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: string);
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class LinkAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.LinkAction>;
							public url: string;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class LoadingComponent extends com.mercadopago.android.px.internal.view.Component<any,any> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.LoadingComponent>;
							public constructor();
							public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class LoadingRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.view.LoadingComponent> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.LoadingRenderer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(param0: com.mercadopago.android.px.internal.view.LoadingComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(): globalAndroid.view.View;
							public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class MPButton {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.MPButton>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class MPEditText {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.MPEditText>;
							public getAutofillType(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public toggleLineColorOnError(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class MPTextView {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.MPTextView>;
							public static LIGHT: string;
							public static REGULAR: string;
							public static MONO_REGULAR: string;
							public static BOLD: string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setFontStyle(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class Mutator {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Mutator>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.view.Mutator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setPropsListener(param0: com.mercadopago.android.px.internal.view.MutatorPropsListener<any>): void;
							});
							public constructor();
							public setPropsListener(param0: com.mercadopago.android.px.internal.view.MutatorPropsListener<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class MutatorPropsListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.MutatorPropsListener<any>>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.internal.view.MutatorPropsListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProps(param0: T): void;
							});
							public constructor();
							public onProps(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class NextAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.NextAction>;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class PaymentMethodComponent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.view.PaymentMethodComponent.PaymentMethodProps,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.PaymentMethodComponent>;
							public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public constructor(param0: com.mercadopago.android.px.internal.view.PaymentMethodComponent.PaymentMethodProps);
							public constructor(param0: any);
						}
						export module PaymentMethodComponent {
							export class PaymentMethodProps {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.PaymentMethodComponent.PaymentMethodProps>;
								public constructor(param0: com.mercadopago.android.px.model.PaymentMethod, param1: string, param2: string, param3: com.mercadopago.android.px.internal.view.TotalAmount.TotalAmountProps);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class PaymentMethodRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.view.PaymentMethodComponent> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.PaymentMethodRenderer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(param0: com.mercadopago.android.px.internal.view.PaymentMethodComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(): globalAndroid.view.View;
							public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class PropsUpdatedAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.PropsUpdatedAction>;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class Receipt extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.view.Receipt.ReceiptProps,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Receipt>;
							public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public constructor(param0: com.mercadopago.android.px.internal.view.Receipt.ReceiptProps);
							public constructor(param0: any);
						}
						export module Receipt {
							export class ReceiptProps {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Receipt.ReceiptProps>;
								public receiptId: string;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ReceiptRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.view.Receipt> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ReceiptRenderer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(): globalAndroid.view.View;
							public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(param0: com.mercadopago.android.px.internal.view.Receipt, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class RecoverPaymentAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.RecoverPaymentAction>;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export abstract class Renderer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.Renderer<any>>;
							public constructor();
							public stretchHeight(param0: globalAndroid.view.ViewGroup): void;
							public setContext(param0: globalAndroid.content.Context): void;
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public inflate(param0: number, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public setText(param0: globalAndroid.widget.TextView, param1: string): void;
							public render(): globalAndroid.view.View;
							public setText(param0: globalAndroid.widget.TextView, param1: globalAndroid.text.Spanned): void;
							public wrapHeight(param0: globalAndroid.view.ViewGroup): void;
							public render(param0: T, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public setComponent(param0: T): void;
							public setText(param0: globalAndroid.widget.TextView, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class RendererFactory {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.RendererFactory>;
							public static create(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.internal.view.Component<any,any>): com.mercadopago.android.px.internal.view.Renderer<any>;
							public static register(param0: java.lang.Class, param1: java.lang.Class): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ResultCodeAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ResultCodeAction>;
							public resultCode: number;
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class TermsAndConditionsComponent extends com.mercadopago.android.px.internal.view.CompactComponent<com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.TermsAndConditionsComponent>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.internal.features.review_and_confirm.models.TermsAndConditionsModel);
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public constructor(param0: any, param1: any);
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ToolbarComponent extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.view.ToolbarComponent.Props,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ToolbarComponent>;
							public constructor(param0: com.mercadopago.android.px.internal.view.ToolbarComponent.Props);
							public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public constructor(param0: any);
						}
						export module ToolbarComponent {
							export class Props {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ToolbarComponent.Props>;
								public toolbarTitle: string;
								public toolbarVisible: boolean;
								public toBuilder(): com.mercadopago.android.px.internal.view.ToolbarComponent.Props.Builder;
								public constructor(param0: com.mercadopago.android.px.internal.view.ToolbarComponent.Props.Builder);
							}
							export module Props {
								export class Builder {
									public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ToolbarComponent.Props.Builder>;
									public toolbarTitle: string;
									public toolbarVisible: boolean;
									public constructor();
									public setToolbarTitle(param0: string): com.mercadopago.android.px.internal.view.ToolbarComponent.Props.Builder;
									public setToolbarVisible(param0: boolean): com.mercadopago.android.px.internal.view.ToolbarComponent.Props.Builder;
									public build(): com.mercadopago.android.px.internal.view.ToolbarComponent.Props;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class ToolbarRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.view.ToolbarComponent> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.ToolbarRenderer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(): globalAndroid.view.View;
							public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(param0: com.mercadopago.android.px.internal.view.ToolbarComponent, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class TotalAmount extends com.mercadopago.android.px.internal.view.Component<com.mercadopago.android.px.internal.view.TotalAmount.TotalAmountProps,java.lang.Void> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.TotalAmount>;
							public constructor(param0: com.mercadopago.android.px.internal.view.TotalAmount.TotalAmountProps);
							public constructor(param0: any, param1: com.mercadopago.android.px.internal.view.ActionDispatcher);
							public getAmountTitle(): string;
							public constructor(param0: any);
							public hasPayerCostWithMultipleInstallments(): boolean;
							public getAmountDetail(): string;
						}
						export module TotalAmount {
							export class TotalAmountProps {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.view.TotalAmount.TotalAmountProps>;
								public payerCost: com.mercadopago.android.px.model.PayerCost;
								public discount: com.mercadopago.android.px.model.Discount;
								public currencyId: string;
								public amount: java.math.BigDecimal;
								public constructor(param0: string, param1: java.math.BigDecimal, param2: com.mercadopago.android.px.model.PayerCost, param3: com.mercadopago.android.px.model.Discount);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module view {
						export class TotalAmountRenderer extends com.mercadopago.android.px.internal.view.Renderer<com.mercadopago.android.px.internal.view.TotalAmount> {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.view.TotalAmountRenderer>;
							public constructor();
							public render(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(): globalAndroid.view.View;
							public render(param0: any, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
							public render(param0: com.mercadopago.android.px.internal.view.TotalAmount, param1: globalAndroid.content.Context, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class BusinessPaymentModel {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel>;
							public payment: com.mercadopago.android.px.model.BusinessPayment;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public getPaymentMethodProps(): com.mercadopago.android.px.internal.view.PaymentMethodComponent.PaymentMethodProps;
							public constructor(param0: com.mercadopago.android.px.model.BusinessPayment, param1: com.mercadopago.android.px.model.Discount, param2: com.mercadopago.android.px.model.PaymentMethod, param3: com.mercadopago.android.px.model.PayerCost, param4: string, param5: java.math.BigDecimal, param6: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class CardPaymentModel {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.CardPaymentModel>;
							public card: com.mercadopago.android.px.model.Card;
							public token: com.mercadopago.android.px.model.Token;
							public payerCost: com.mercadopago.android.px.model.PayerCost;
							public issuer: com.mercadopago.android.px.model.Issuer;
							public constructor(param0: com.mercadopago.android.px.model.Card, param1: com.mercadopago.android.px.model.Token, param2: com.mercadopago.android.px.model.PayerCost, param3: com.mercadopago.android.px.model.Issuer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class ChangePaymentMethodPostPaymentAction extends com.mercadopago.android.px.internal.viewmodel.PostPaymentAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.ChangePaymentMethodPostPaymentAction>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.viewmodel.ChangePaymentMethodPostPaymentAction>;
							public constructor();
							public constructor(param0: globalAndroid.os.Parcel);
							public execute(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.ActionController): void;
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class CheckoutStateModel {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.CheckoutStateModel>;
							public paymentMethodEdited: boolean;
							public editPaymentMethodFromReviewAndConfirm: boolean;
							public isUniquePaymentMethod: boolean;
							public isOneTap: boolean;
							public constructor();
							public toBundle(param0: globalAndroid.os.Bundle): void;
							public static fromBundle(param0: globalAndroid.os.Bundle): com.mercadopago.android.px.internal.viewmodel.CheckoutStateModel;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class DecoratorModel {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.DecoratorModel>;
							public static APPROVED: com.mercadopago.android.px.internal.viewmodel.DecoratorModel;
							public static REJECTED: com.mercadopago.android.px.internal.viewmodel.DecoratorModel;
							public static PENDING: com.mercadopago.android.px.internal.viewmodel.DecoratorModel;
							public name: string;
							public resColor: number;
							public badge: number;
							public message: number;
							public static from(param0: com.mercadopago.android.px.model.BusinessPayment.Decorator): com.mercadopago.android.px.internal.viewmodel.DecoratorModel;
							public static valueOf(param0: string): com.mercadopago.android.px.internal.viewmodel.DecoratorModel;
							public static values(): native.Array<com.mercadopago.android.px.internal.viewmodel.DecoratorModel>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class OneTapModel {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.OneTapModel>;
							public static from(param0: com.mercadopago.android.px.model.PaymentMethodSearch, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository): com.mercadopago.android.px.internal.viewmodel.OneTapModel;
							public getPublicKey(): string;
							public getPaymentMethods(): com.mercadopago.android.px.model.PaymentMethodSearch;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export abstract class PostPaymentAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction>;
							public requiredAction: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction;
							public originAction: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public static hasPostPaymentAction(param0: globalAndroid.content.Intent): boolean;
							public constructor(param0: globalAndroid.os.Parcel);
							public static fromBundle(param0: globalAndroid.os.Bundle): com.mercadopago.android.px.internal.viewmodel.PostPaymentAction;
							public execute(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.ActionController): void;
							public addToIntent(param0: globalAndroid.content.Intent): globalAndroid.content.Intent;
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction);
						}
						export module PostPaymentAction {
							export class ActionController {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.ActionController>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.internal.viewmodel.PostPaymentAction$ActionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									recoverFromReviewAndConfirm(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
									recoverFromOneTap(): void;
									changePaymentMethod(): void;
								});
								public constructor();
								public recoverFromOneTap(): void;
								public recoverFromReviewAndConfirm(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction): void;
								public changePaymentMethod(): void;
							}
							export class OriginAction {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction>;
								public static REVIEW_AND_CONFIRM: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction;
								public static ONE_TAP: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction;
								public static UNKNOWN: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction;
								public static values(): native.Array<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction>;
								public static valueOf(param0: string): com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction;
							}
							export class RequiredAction {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction>;
								public static SELECT_OTHER_PAYMENT_METHOD: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction;
								public static RECOVER_PAYMENT: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction;
								public static valueOf(param0: string): com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction;
								public static values(): native.Array<com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class RecoverPaymentPostPaymentAction extends com.mercadopago.android.px.internal.viewmodel.PostPaymentAction {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.RecoverPaymentPostPaymentAction>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.mercadopago.android.px.internal.viewmodel.RecoverPaymentPostPaymentAction>;
							public constructor(param0: globalAndroid.os.Parcel);
							public execute(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.ActionController): void;
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction);
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.RequiredAction, param1: com.mercadopago.android.px.internal.viewmodel.PostPaymentAction.OriginAction);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class Summary {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.Summary>;
							public getSummaryDetails(): java.util.List<com.mercadopago.android.px.internal.viewmodel.SummaryDetail>;
							public getDisclaimerText(): string;
							public constructor(param0: com.mercadopago.android.px.internal.viewmodel.Summary.Builder);
							public getDisclaimerColor(): number;
							public showSubtotal(): boolean;
							public equals(param0: any): boolean;
						}
						export module Summary {
							export class Builder {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.Summary.Builder>;
								public setDisclaimerText(param0: string): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public addSummaryShippingDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public build(): com.mercadopago.android.px.internal.viewmodel.Summary;
								public setDisclaimerColor(param0: number): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public addSummaryChargeDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public setSummaryDetailsOrder(param0: java.util.List<string>): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public constructor();
								public addSummaryArrearsDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public addSummaryProductDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public addSummaryDiscountDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
								public addSummaryTaxesDetail(param0: java.math.BigDecimal, param1: string, param2: java.lang.Integer): com.mercadopago.android.px.internal.viewmodel.Summary.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class SummaryDetail {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.SummaryDetail>;
							public setTitle(param0: string): void;
							public setSummaryItemDetails(param0: java.util.List<com.mercadopago.android.px.internal.viewmodel.SummaryItemDetail>): void;
							public getTotalAmount(): java.math.BigDecimal;
							public getTextColor(): java.lang.Integer;
							public getTitle(): string;
							public addAmountDetail(param0: com.mercadopago.android.px.internal.viewmodel.SummaryItemDetail): void;
							public setTextColor(param0: java.lang.Integer): void;
							public getSummaryItemType(): string;
							public getSummaryItemDetails(): java.util.List<com.mercadopago.android.px.internal.viewmodel.SummaryItemDetail>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class SummaryItemDetail {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.SummaryItemDetail>;
							public getAmount(): java.math.BigDecimal;
							public setAmount(param0: java.math.BigDecimal): void;
							public getName(): string;
							public setName(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export class SummaryItemType {
							public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.SummaryItemType>;
							public static PRODUCT: string;
							public static CHARGE: string;
							public static TAXES: string;
							public static SHIPPING: string;
							public static ARREARS: string;
							public static DISCOUNT: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export module mappers {
							export class CardMapper extends com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<com.mercadopago.android.px.internal.viewmodel.OneTapModel,com.mercadopago.android.px.model.Card> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.mappers.CardMapper>;
								public map(param0: any): any;
								public map(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): com.mercadopago.android.px.model.Card;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export module mappers {
							export class CardPaymentMapper extends com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<com.mercadopago.android.px.internal.viewmodel.OneTapModel,com.mercadopago.android.px.internal.viewmodel.CardPaymentModel> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.mappers.CardPaymentMapper>;
								public constructor(param0: com.mercadopago.android.px.model.Token);
								public map(param0: com.mercadopago.android.px.internal.viewmodel.OneTapModel): com.mercadopago.android.px.internal.viewmodel.CardPaymentModel;
								public map(param0: any): any;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export module mappers {
							export abstract class Mapper<T, V>  extends java.lang.Object {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<any,any>>;
								public map(param0: T): V;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module internal {
					export module viewmodel {
						export module mappers {
							export class PaymentMethodMapper extends com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<com.mercadopago.android.px.model.PaymentMethodSearch,com.mercadopago.android.px.model.PaymentMethod> {
								public static class: java.lang.Class<com.mercadopago.android.px.internal.viewmodel.mappers.PaymentMethodMapper>;
								public map(param0: com.mercadopago.android.px.model.PaymentMethodSearch): com.mercadopago.android.px.model.PaymentMethod;
								public map(param0: any): any;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class ActionEvent extends com.mercadopago.android.px.model.Event {
						public static class: java.lang.Class<com.mercadopago.android.px.model.ActionEvent>;
						public getAction(): string;
						public getCategory(): string;
						public getLabel(): string;
						public getScreenId(): string;
						public getScreenName(): string;
						public getValue(): string;
					}
					export module ActionEvent {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.ActionEvent.Builder>;
							public constructor();
							public setScreenName(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public setFlowId(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public setCategory(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public setScreenId(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public setValue(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public setAction(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public addProperty(param0: string, param1: string): com.mercadopago.android.px.model.ActionEvent.Builder;
							public build(): com.mercadopago.android.px.model.ActionEvent;
							public setLabel(param0: string): com.mercadopago.android.px.model.ActionEvent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class AppInformation {
						public static class: java.lang.Class<com.mercadopago.android.px.model.AppInformation>;
						public getPlatform(): string;
						public setFlowId(param0: string): void;
						public constructor();
						public getVersion(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public copy(): com.mercadopago.android.px.model.AppInformation;
						public getFlowId(): string;
					}
					export module AppInformation {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.AppInformation.Builder>;
							public constructor();
							public setPlatform(param0: string): com.mercadopago.android.px.model.AppInformation.Builder;
							public setFlowId(param0: string): com.mercadopago.android.px.model.AppInformation.Builder;
							public build(): com.mercadopago.android.px.model.AppInformation;
							public setEnvironment(param0: string): com.mercadopago.android.px.model.AppInformation.Builder;
							public setVersion(param0: string): com.mercadopago.android.px.model.AppInformation.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class CardInfo {
						public static class: java.lang.Class<com.mercadopago.android.px.model.CardInfo>;
						public getCardNumberLength(): java.lang.Integer;
						public getLastFourDigits(): string;
						public getSecurityCodeLocation(): string;
						public constructor(param0: com.mercadopago.android.px.model.CardToken);
						public constructor(param0: com.mercadopago.android.px.model.Card);
						public getFirstSixDigits(): string;
						public getSecurityCodeLength(): java.lang.Integer;
						public constructor(param0: com.mercadopago.android.px.model.Token);
						public static canCreateCardInfo(param0: com.mercadopago.android.px.model.Token): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class DeviceInfo {
						public static class: java.lang.Class<com.mercadopago.android.px.model.DeviceInfo>;
						public constructor();
						public getScreenSize(): string;
						public getSystemVersion(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOs(): string;
						public getResolution(): string;
						public getModel(): string;
					}
					export module DeviceInfo {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.DeviceInfo.Builder>;
							public constructor();
							public setResolution(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
							public setUuid(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
							public setModel(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
							public setOS(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
							public setSystemVersion(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
							public build(): com.mercadopago.android.px.model.DeviceInfo;
							public setScreenSize(param0: string): com.mercadopago.android.px.model.DeviceInfo.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class ErrorEvent extends com.mercadopago.android.px.model.Event {
						public static class: java.lang.Class<com.mercadopago.android.px.model.ErrorEvent>;
						public getErrorMessage(): string;
						public getErrorClass(): string;
						public getStackTraceList(): java.util.List<com.mercadopago.android.px.model.StackTraceInfo>;
					}
					export module ErrorEvent {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.ErrorEvent.Builder>;
							public constructor();
							public setErrorClass(param0: string): com.mercadopago.android.px.model.ErrorEvent.Builder;
							public setStackTraceList(param0: java.util.List<com.mercadopago.android.px.model.StackTraceInfo>): com.mercadopago.android.px.model.ErrorEvent.Builder;
							public addStackTrace(param0: com.mercadopago.android.px.model.StackTraceInfo): com.mercadopago.android.px.model.ErrorEvent.Builder;
							public build(): com.mercadopago.android.px.model.ErrorEvent;
							public setErrorMessage(param0: string): com.mercadopago.android.px.model.ErrorEvent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export abstract class Event {
						public static class: java.lang.Class<com.mercadopago.android.px.model.Event>;
						public static TYPE_SCREEN_VIEW: string;
						public static TYPE_ACTION: string;
						public static TYPE_ERROR: string;
						public setFlowId(param0: string): void;
						public constructor();
						public getType(): string;
						public setProperties(param0: java.util.Map<string,string>): void;
						public setTimestamp(param0: java.lang.Long): void;
						public getTimestamp(): java.lang.Long;
						public setType(param0: string): void;
						public getFlowId(): string;
						public getProperties(): java.util.Map<string,string>;
					}
					export module Event {
						export class EventType {
							public static class: java.lang.Class<com.mercadopago.android.px.model.Event.EventType>;
							/**
							 * Constructs a new instance of the com.mercadopago.android.px.model.Event$EventType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class EventTrackIntent {
						public static class: java.lang.Class<com.mercadopago.android.px.model.EventTrackIntent>;
						public getDevice(): com.mercadopago.android.px.model.DeviceInfo;
						public getEvents(): java.util.List<com.mercadopago.android.px.model.Event>;
						public constructor(param0: com.mercadopago.android.px.model.AppInformation, param1: com.mercadopago.android.px.model.DeviceInfo, param2: java.util.List<com.mercadopago.android.px.model.Event>);
						public getApplication(): com.mercadopago.android.px.model.AppInformation;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentBody {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentBody>;
						public setCouponAmount(param0: java.lang.Float): void;
						public getPaymentMethodId(): string;
						public getTransactionId(): string;
						public getPayer(): com.mercadopago.android.px.model.Payer;
						public getInstallments(): java.lang.Integer;
						public getPrefId(): string;
						public setBinaryMode(param0: java.lang.Boolean): void;
						public getPublicKey(): string;
						public constructor(param0: string, param1: com.mercadopago.android.px.model.PaymentData, param2: com.mercadopago.android.px.preferences.CheckoutPreference);
						public setEmail(param0: string): void;
						public setCouponCode(param0: string): void;
						public getBinaryMode(): java.lang.Boolean;
						public setPayer(param0: com.mercadopago.android.px.model.Payer): void;
						public setCampaignId(param0: string): void;
						public setIssuerId(param0: java.lang.Long): void;
						public getCampaignId(): string;
						public setPrefId(param0: string): void;
						public getEmail(): string;
						public getTokenId(): string;
						public getCouponCode(): string;
						public setInstallments(param0: java.lang.Integer): void;
						public setTokenId(param0: string): void;
						public getCouponAmount(): java.lang.Float;
						public setPaymentMethodId(param0: string): void;
						public setPublicKey(param0: string): void;
						public setTransactionId(param0: string): void;
						public getIssuerId(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentData {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentData>;
						public getIssuer(): com.mercadopago.android.px.model.Issuer;
						public getPayerCost(): com.mercadopago.android.px.model.PayerCost;
						public constructor();
						public getToken(): com.mercadopago.android.px.model.Token;
						public setTransactionAmount(param0: java.math.BigDecimal): void;
						public getDiscount(): com.mercadopago.android.px.model.Discount;
						public setPaymentMethod(param0: com.mercadopago.android.px.model.PaymentMethod): void;
						public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
						public getPayer(): com.mercadopago.android.px.model.Payer;
						public setPayerCost(param0: com.mercadopago.android.px.model.PayerCost): void;
						public getCouponCode(): string;
						public setIssuer(param0: com.mercadopago.android.px.model.Issuer): void;
						public setDiscount(param0: com.mercadopago.android.px.model.Discount): void;
						public setCouponCode(param0: string): void;
						public setToken(param0: com.mercadopago.android.px.model.Token): void;
						public setPayer(param0: com.mercadopago.android.px.model.Payer): void;
						public getCampaign(): com.mercadopago.android.px.model.Campaign;
						public getTransactionAmount(): java.math.BigDecimal;
						public containsCardInfo(): boolean;
						public setCampaign(param0: com.mercadopago.android.px.model.Campaign): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentIntent {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentIntent>;
						public mPublicKey: string;
						public mPaymentId: string;
						public mFlavor: string;
						public mPlatform: string;
						public mType: string;
						public mSdkVersion: string;
						public mSite: string;
						public setPaymentId(param0: string): void;
						public setFlavor(param0: string): void;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
						public setPublicKey(param0: string): void;
						public setSite(param0: string): void;
						public setType(param0: string): void;
						public setPlatform(param0: string): void;
						public setSdkVersion(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentMethodInfo extends com.mercadopago.android.px.internal.features.uicontrollers.paymentmethodsearch.PaymentMethodInfoModel {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentMethodInfo>;
						public icon: number;
						public getIcon(): number;
						public constructor(param0: string, param1: string, param2: number, param3: string);
						public getId(): string;
						public getDescription(): string;
						public constructor(param0: string, param1: string, param2: number);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentRecovery {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentRecovery>;
						public getPayerCost(): com.mercadopago.android.px.model.PayerCost;
						public getIssuer(): com.mercadopago.android.px.model.Issuer;
						public getToken(): com.mercadopago.android.px.model.Token;
						public isStatusDetailInvalidESC(): boolean;
						public isStatusDetailCardDisabled(): boolean;
						public getPaymentMethod(): com.mercadopago.android.px.model.PaymentMethod;
						public isStatusDetailCallForAuthorize(): boolean;
						public isTokenRecoverable(): boolean;
						public constructor(param0: com.mercadopago.android.px.model.Token, param1: com.mercadopago.android.px.model.PaymentMethod, param2: com.mercadopago.android.px.model.PayerCost, param3: com.mercadopago.android.px.model.Issuer, param4: string, param5: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class PaymentResult {
						public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentResult>;
						public isStatusRejected(): boolean;
						public getPaymentStatusDetail(): string;
						public isRejected(): boolean;
						public isStatusPending(): boolean;
						public getPaymentStatus(): string;
						public getPaymentId(): java.lang.Long;
						public isCallForAuthorize(): boolean;
						public getPaymentData(): com.mercadopago.android.px.model.PaymentData;
						public isStatusInProcess(): boolean;
						public isStatusApproved(): boolean;
						public isPending(): boolean;
						public getStatementDescription(): string;
						public isInstructions(): boolean;
					}
					export module PaymentResult {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.PaymentResult.Builder>;
							public constructor();
							public setPaymentData(param0: com.mercadopago.android.px.model.PaymentData): com.mercadopago.android.px.model.PaymentResult.Builder;
							public setStatementDescription(param0: string): com.mercadopago.android.px.model.PaymentResult.Builder;
							public setPaymentStatusDetail(param0: string): com.mercadopago.android.px.model.PaymentResult.Builder;
							public setPaymentId(param0: java.lang.Long): com.mercadopago.android.px.model.PaymentResult.Builder;
							public setPaymentStatus(param0: string): com.mercadopago.android.px.model.PaymentResult.Builder;
							public build(): com.mercadopago.android.px.model.PaymentResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class ScreenViewEvent extends com.mercadopago.android.px.model.Event {
						public static class: java.lang.Class<com.mercadopago.android.px.model.ScreenViewEvent>;
						public constructor();
						public getScreenName(): string;
						public getScreenId(): string;
					}
					export module ScreenViewEvent {
						export class Builder {
							public static class: java.lang.Class<com.mercadopago.android.px.model.ScreenViewEvent.Builder>;
							public constructor();
							public setScreenId(param0: string): com.mercadopago.android.px.model.ScreenViewEvent.Builder;
							public setScreenName(param0: string): com.mercadopago.android.px.model.ScreenViewEvent.Builder;
							public addProperty(param0: string, param1: string): com.mercadopago.android.px.model.ScreenViewEvent.Builder;
							public build(): com.mercadopago.android.px.model.ScreenViewEvent;
							public setFlowId(param0: string): com.mercadopago.android.px.model.ScreenViewEvent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class StackTraceInfo {
						public static class: java.lang.Class<com.mercadopago.android.px.model.StackTraceInfo>;
						public setFile(param0: string): void;
						public getLineNumber(): java.lang.Integer;
						public getMethod(): string;
						public setMethod(param0: string): void;
						public getColumnNumber(): java.lang.Integer;
						public getFile(): string;
						public setLineNumber(param0: java.lang.Integer): void;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
						public setColumnNumber(param0: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export class TrackingIntent {
						public static class: java.lang.Class<com.mercadopago.android.px.model.TrackingIntent>;
						public mPublicKey: string;
						public mCardToken: string;
						public mFlavor: string;
						public mPlatform: string;
						public mType: string;
						public mSdkVersion: string;
						public mSite: string;
						public setFlavor(param0: string): void;
						public setCardToken(param0: string): void;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
						public setPublicKey(param0: string): void;
						public setSite(param0: string): void;
						public setType(param0: string): void;
						public setPlatform(param0: string): void;
						public setSdkVersion(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module commission {
						export abstract class ChargeRule {
							public static class: java.lang.Class<com.mercadopago.android.px.model.commission.ChargeRule>;
							public charge(): java.math.BigDecimal;
							public shouldBeTriggered(param0: com.mercadopago.android.px.internal.repository.ChargeRepository): boolean;
							public constructor(param0: java.math.BigDecimal);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module commission {
						export class PaymentMethodChargeRule extends com.mercadopago.android.px.model.commission.PaymentMethodRule {
							public static class: java.lang.Class<com.mercadopago.android.px.model.commission.PaymentMethodChargeRule>;
							public constructor(param0: string, param1: java.math.BigDecimal);
							public shouldBeTriggered(param0: com.mercadopago.android.px.internal.repository.ChargeRepository): boolean;
							public constructor(param0: java.math.BigDecimal);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module commission {
						export class PaymentMethodRule extends com.mercadopago.android.px.model.commission.ChargeRule {
							public static class: java.lang.Class<com.mercadopago.android.px.model.commission.PaymentMethodRule>;
							public shouldBeTriggered(param0: com.mercadopago.android.px.internal.repository.ChargeRepository): boolean;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module commission {
						export class PaymentTypeChargeRule extends com.mercadopago.android.px.model.commission.PaymentMethodRule {
							public static class: java.lang.Class<com.mercadopago.android.px.model.commission.PaymentTypeChargeRule>;
							public constructor(param0: string, param1: java.math.BigDecimal);
							public shouldBeTriggered(param0: com.mercadopago.android.px.internal.repository.ChargeRepository): boolean;
							public constructor(param0: java.math.BigDecimal);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module exceptions {
						export class BinException {
							public static class: java.lang.Class<com.mercadopago.android.px.model.exceptions.BinException>;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module exceptions {
						export class ExceptionHandler {
							public static class: java.lang.Class<com.mercadopago.android.px.model.exceptions.ExceptionHandler>;
							public constructor();
							public static getErrorMessage(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.exceptions.CardTokenException): string;
							public static getErrorMessage(param0: globalAndroid.content.Context, param1: com.mercadopago.android.px.model.exceptions.CheckoutPreferenceException): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module model {
					export module exceptions {
						export class MercadoPagoError {
							public static class: java.lang.Class<com.mercadopago.android.px.model.exceptions.MercadoPagoError>;
							public constructor(param0: com.mercadopago.android.px.model.exceptions.ApiException, param1: string);
							public getErrorDetail(): string;
							public isNoConnectivityError(): boolean;
							public toString(): string;
							public getApiException(): com.mercadopago.android.px.model.exceptions.ApiException;
							public isBadRequestError(): boolean;
							public constructor(param0: string, param1: boolean);
							public isPaymentProcessing(): boolean;
							public isRecoverable(): boolean;
							public constructor(param0: string, param1: string, param2: boolean);
							public isApiException(): boolean;
							public getErrorEvent(param0: com.mercadopago.android.px.model.ScreenViewEvent.Builder): com.mercadopago.android.px.model.ScreenViewEvent.Builder;
							public getMessage(): string;
							public isInternalServerError(): boolean;
							public getRequestOrigin(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export class PXEventListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.mercadopago.android.px.tracking.PXEventListener<any>>;
						/**
						 * Constructs a new instance of the com.mercadopago.android.px.tracking.PXEventListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onScreenLaunched(param0: string, param1: java.util.Map<string,string>): void;
							onEvent(param0: T): void;
						});
						public constructor();
						public onScreenLaunched(param0: string, param1: java.util.Map<string,string>): void;
						public onEvent(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export class PXTracker {
						public static class: java.lang.Class<com.mercadopago.android.px.tracking.PXTracker>;
						public static setListener(param0: com.mercadopago.android.px.tracking.PXEventListener<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export class MPTracker {
							public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.MPTracker>;
							public clearExpiredTracks(): void;
							public trackEvent(param0: string, param1: com.mercadopago.android.px.model.AppInformation, param2: com.mercadopago.android.px.model.DeviceInfo, param3: com.mercadopago.android.px.model.Event, param4: globalAndroid.content.Context): void;
							public static getInstance(): com.mercadopago.android.px.tracking.internal.MPTracker;
							public trackEvent(param0: string, param1: com.mercadopago.android.px.model.AppInformation, param2: com.mercadopago.android.px.model.DeviceInfo, param3: com.mercadopago.android.px.model.Event, param4: globalAndroid.content.Context, param5: string): void;
							public trackToken(param0: string): com.mercadopago.android.px.model.TrackingIntent;
							public trackPayment(param0: java.lang.Long, param1: string): com.mercadopago.android.px.model.PaymentIntent;
							public initTracker(param0: string, param1: string, param2: string, param3: globalAndroid.content.Context): void;
							public setTracksListener(param0: com.mercadopago.android.px.tracking.PXEventListener<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export class MPTrackingContext {
							public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.MPTrackingContext>;
						}
						export module MPTrackingContext {
							export class Builder {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.MPTrackingContext.Builder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export class Settings {
							public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.Settings>;
							public static eventsTrackingVersion: string;
							public static servicesVersion: string;
							public static setTrackingEnvironment(param0: string): void;
							public static getTrackingEnvironment(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export class StrategyMode {
							public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.StrategyMode>;
							public static NOOP_STRATEGY: string;
							public static BATCH_STRATEGY: string;
							public static REALTIME_STRATEGY: string;
							public static FORCED_STRATEGY: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export class TrackingEnvironments {
							public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.TrackingEnvironments>;
							public static PRODUCTION: string;
							public static STAGING: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module services {
							export class MPTrackingService {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.services.MPTrackingService>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.tracking.internal.services.MPTrackingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									trackToken(param0: com.mercadopago.android.px.model.TrackingIntent): void;
									trackPaymentId(param0: com.mercadopago.android.px.model.PaymentIntent): void;
									trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent): void;
									trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent, param2: retrofit2.Callback<java.lang.Void>): void;
								});
								public constructor();
								public trackPaymentId(param0: com.mercadopago.android.px.model.PaymentIntent): void;
								public trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent): void;
								public trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent, param2: retrofit2.Callback<java.lang.Void>): void;
								public trackToken(param0: com.mercadopago.android.px.model.TrackingIntent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module services {
							export class MPTrackingServiceImpl extends com.mercadopago.android.px.tracking.internal.services.MPTrackingService {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.services.MPTrackingServiceImpl>;
								public trackPaymentId(param0: com.mercadopago.android.px.model.PaymentIntent): void;
								public constructor();
								public trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent): void;
								public trackEvents(param0: string, param1: com.mercadopago.android.px.model.EventTrackIntent, param2: retrofit2.Callback<java.lang.Void>): void;
								public trackToken(param0: com.mercadopago.android.px.model.TrackingIntent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module services {
							export class TrackingAPI {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.services.TrackingAPI>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.tracking.internal.services.TrackingAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									trackToken(param0: string, param1: com.mercadopago.android.px.model.TrackingIntent): retrofit2.Call<java.lang.Void>;
									trackPaymentId(param0: string, param1: com.mercadopago.android.px.model.PaymentIntent): retrofit2.Call<java.lang.Void>;
									trackEvents(param0: string, param1: string, param2: string, param3: com.mercadopago.android.px.model.EventTrackIntent): retrofit2.Call<java.lang.Void>;
								});
								public constructor();
								public trackPaymentId(param0: string, param1: com.mercadopago.android.px.model.PaymentIntent): retrofit2.Call<java.lang.Void>;
								public trackToken(param0: string, param1: com.mercadopago.android.px.model.TrackingIntent): retrofit2.Call<java.lang.Void>;
								public trackEvents(param0: string, param1: string, param2: string, param3: com.mercadopago.android.px.model.EventTrackIntent): retrofit2.Call<java.lang.Void>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class BatchTrackingStrategy extends com.mercadopago.android.px.tracking.internal.strategies.TrackingStrategy {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.BatchTrackingStrategy>;
								public trackEvent(param0: com.mercadopago.android.px.model.Event, param1: globalAndroid.content.Context): void;
								public constructor(param0: com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase, param1: com.mercadopago.android.px.tracking.internal.strategies.ConnectivityChecker, param2: com.mercadopago.android.px.tracking.internal.services.MPTrackingService);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class ConnectivityChecker {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.ConnectivityChecker>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.tracking.internal.strategies.ConnectivityChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasConnection(): boolean;
									hasWifiConnection(): boolean;
								});
								public constructor();
								public hasWifiConnection(): boolean;
								public hasConnection(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class ConnectivityCheckerImpl extends com.mercadopago.android.px.tracking.internal.strategies.ConnectivityChecker {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.ConnectivityCheckerImpl>;
								public hasWifiConnection(): boolean;
								public constructor(param0: globalAndroid.content.Context);
								public hasConnection(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class EventsDatabase {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase>;
								/**
								 * Constructs a new instance of the com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									persist(param0: com.mercadopago.android.px.model.Event): void;
									returnEvents(param0: java.util.List<com.mercadopago.android.px.model.Event>): void;
									getBatchSize(): java.lang.Integer;
									retrieveBatch(): java.util.List<com.mercadopago.android.px.model.Event>;
									clearExpiredTracks(): void;
									getNextTrackTimestamp(): java.lang.Long;
									clearDatabase(): void;
								});
								public constructor();
								public getBatchSize(): java.lang.Integer;
								public persist(param0: com.mercadopago.android.px.model.Event): void;
								public getNextTrackTimestamp(): java.lang.Long;
								public clearExpiredTracks(): void;
								public retrieveBatch(): java.util.List<com.mercadopago.android.px.model.Event>;
								public returnEvents(param0: java.util.List<com.mercadopago.android.px.model.Event>): void;
								public clearDatabase(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class EventsDatabaseImpl implements com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.EventsDatabaseImpl>;
								public getBatchSize(): java.lang.Integer;
								public persist(param0: com.mercadopago.android.px.model.Event): void;
								public getNextTrackTimestamp(): java.lang.Long;
								public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
								public clearExpiredTracks(): void;
								public retrieveBatch(): java.util.List<com.mercadopago.android.px.model.Event>;
								public constructor(param0: globalAndroid.content.Context);
								public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
								public returnEvents(param0: java.util.List<com.mercadopago.android.px.model.Event>): void;
								public clearDatabase(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class ForcedStrategy extends com.mercadopago.android.px.tracking.internal.strategies.TrackingStrategy {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.ForcedStrategy>;
								public trackEvent(param0: com.mercadopago.android.px.model.Event, param1: globalAndroid.content.Context): void;
								public constructor(param0: com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase, param1: com.mercadopago.android.px.tracking.internal.strategies.ConnectivityChecker, param2: com.mercadopago.android.px.tracking.internal.services.MPTrackingService);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class NoOpStrategy extends com.mercadopago.android.px.tracking.internal.strategies.TrackingStrategy {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.NoOpStrategy>;
								public trackEvent(param0: com.mercadopago.android.px.model.Event, param1: globalAndroid.content.Context): void;
								public readsEventFromDB(): boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export class RealTimeTrackingStrategy extends com.mercadopago.android.px.tracking.internal.strategies.TrackingStrategy {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.RealTimeTrackingStrategy>;
								public trackEvent(param0: com.mercadopago.android.px.model.Event, param1: globalAndroid.content.Context): void;
								public readsEventFromDB(): boolean;
								public constructor();
								public constructor(param0: com.mercadopago.android.px.tracking.internal.services.MPTrackingService);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module strategies {
							export abstract class TrackingStrategy {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.strategies.TrackingStrategy>;
								public setDeviceInfo(param0: com.mercadopago.android.px.model.DeviceInfo): void;
								public getPublicKey(): string;
								public setAppInformation(param0: com.mercadopago.android.px.model.AppInformation): void;
								public constructor();
								public getDatabase(): com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase;
								public groupEventsByFlow(param0: java.util.List<com.mercadopago.android.px.model.Event>): java.util.List<com.mercadopago.android.px.model.EventTrackIntent>;
								public setPublicKey(param0: string): void;
								public getDeviceInfo(): com.mercadopago.android.px.model.DeviceInfo;
								public isDataAvailable(): boolean;
								public trackEvent(param0: com.mercadopago.android.px.model.Event, param1: globalAndroid.content.Context): void;
								public readsEventFromDB(): boolean;
								public getAppInformation(): com.mercadopago.android.px.model.AppInformation;
								public setDatabase(param0: com.mercadopago.android.px.tracking.internal.strategies.EventsDatabase): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module utils {
							export class EventFactory {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.utils.EventFactory>;
								public constructor();
								public static getEvent(param0: string): com.mercadopago.android.px.model.Event;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module utils {
							export class JsonConverter {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.utils.JsonConverter>;
								public toJson(param0: any): string;
								public static getInstance(): com.mercadopago.android.px.tracking.internal.utils.JsonConverter;
								public fromJson(param0: string, param1: java.lang.Class): any;
								public getGson(): com.google.gson.Gson;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module tracking {
					export module internal {
						export module utils {
							export class TrackingUtil {
								public static class: java.lang.Class<com.mercadopago.android.px.tracking.internal.utils.TrackingUtil>;
								public static ACTION_CHECKOUT_CONFIRMED: string;
								public static ACTION_OPEN_SUMMARY_ONE_TAP: string;
								public static ACTION_CANCEL_ONE_TAP: string;
								public static SCREEN_ID_CHECKOUT: string;
								public static SCREEN_ID_PAYMENT_VAULT: string;
								public static SCREEN_ID_PAYMENT_VAULT_TICKET: string;
								public static SCREEN_ID_PAYMENT_VAULT_BANK_TRANSFER: string;
								public static SCREEN_ID_PAYMENT_VAULT_CARDS: string;
								public static SCREEN_ID_REVIEW_AND_CONFIRM: string;
								public static SCREEN_ID_PAYMENT_RESULT_APPROVED: string;
								public static SCREEN_ID_PAYMENT_RESULT_PENDING: string;
								public static SCREEN_ID_PAYMENT_RESULT_REJECTED: string;
								public static SCREEN_ID_PAYMENT_RESULT_INSTRUCTIONS: string;
								public static SCREEN_ID_PAYMENT_RESULT_BUSINESS: string;
								public static SCREEN_ID_BANK_DEALS: string;
								public static SCREEN_ID_CARD_FORM: string;
								public static SCREEN_ID_ERROR: string;
								public static SCREEN_ID_PAYMENT_TYPES: string;
								public static SCREEN_ID_IDENTIFICATION: string;
								public static SCREEN_ID_ISSUERS: string;
								public static SCREEN_ID_INSTALLMENTS: string;
								public static SCREEN_ID_ONE_TAP: string;
								public static SCREEN_ID_DISCOUNT_TERMS: string;
								public static SCREEN_NAME_PAYMENT_VAULT: string;
								public static SCREEN_NAME_PAYMENT_VAULT_TICKET: string;
								public static SCREEN_NAME_PAYMENT_VAULT_BANK_TRANSFER: string;
								public static SCREEN_NAME_PAYMENT_VAULT_CARDS: string;
								public static SCREEN_NAME_REVIEW_AND_CONFIRM: string;
								public static SCREEN_NAME_PAYMENT_RESULT: string;
								public static SCREEN_NAME_PAYMENT_RESULT_CALL_FOR_AUTH: string;
								public static SCREEN_NAME_PAYMENT_RESULT_INSTRUCTIONS: string;
								public static SCREEN_NAME_BANK_DEALS: string;
								public static SCREEN_NAME_CARD_FORM: string;
								public static SCREEN_NAME_CARD_FORM_NUMBER: string;
								public static SCREEN_NAME_CARD_FORM_NAME: string;
								public static SCREEN_NAME_CARD_FORM_EXPIRY: string;
								public static SCREEN_NAME_CARD_FORM_CVV: string;
								public static SCREEN_NAME_CARD_FORM_IDENTIFICATION_NUMBER: string;
								public static SCREEN_NAME_CARD_FORM_ISSUERS: string;
								public static SCREEN_NAME_CARD_FORM_INSTALLMENTS: string;
								public static SCREEN_NAME_ERROR: string;
								public static SCREEN_NAME_PAYMENT_TYPES: string;
								public static SCREEN_NAME_SECURITY_CODE: string;
								public static GROUP_TICKET: string;
								public static GROUP_BANK_TRANSFER: string;
								public static GROUP_CARDS: string;
								public static SECURITY_CODE_REASON_CALL: string;
								public static SECURITY_CODE_REASON_SAVED_CARD: string;
								public static SECURITY_CODE_REASON_ESC: string;
								public static CARD_NUMBER: string;
								public static CARD_HOLDER_NAME: string;
								public static CARD_EXPIRATION_DATE: string;
								public static CARD_SECURITY_CODE: string;
								public static CARD_SECURITY_CODE_VIEW: string;
								public static PROPERTY_PAYMENT_METHOD_ID: string;
								public static PROPERTY_PAYMENT_TYPE_ID: string;
								public static PROPERTY_ISSUER_ID: string;
								public static PROPERTY_SHIPPING_INFO: string;
								public static PROPERTY_PAYMENT_STATUS: string;
								public static PROPERTY_PAYMENT_ID: string;
								public static PROPERTY_PAYMENT_STATUS_DETAIL: string;
								public static PROPERTY_PAYMENT_IS_EXPRESS: string;
								public static PROPERTY_SECURITY_CODE_REASON: string;
								public static PROPERTY_ERROR_STATUS: string;
								public static PROPERTY_ERROR_CODE: string;
								public static PROPERTY_ERROR_REQUEST: string;
								public static PROPERTY_ERROR_MESSAGE: string;
								public static PROPERTY_OPTIONS: string;
								public static PROPERTY_CARD_ID: string;
								public static PROPERTY_INSTALLMENTS: string;
								public static PROPERTY_PURCHASE_AMOUNT: string;
								public static PROPERTY_HAS_DISCOUNT: string;
								public static HAS_SHIPPING_DEFAULT_VALUE: string;
								public static IS_EXPRESS_DEFAULT_VALUE: string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mercadopago {
		export module android {
			export module px {
				export module viewmodel {
					export module mappers {
						export class BusinessModelMapper extends com.mercadopago.android.px.internal.viewmodel.mappers.Mapper<com.mercadopago.android.px.model.BusinessPayment,com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel> {
							public static class: java.lang.Class<com.mercadopago.android.px.viewmodel.mappers.BusinessModelMapper>;
							public constructor();
							public constructor(param0: com.mercadopago.android.px.internal.repository.DiscountRepository, param1: com.mercadopago.android.px.internal.repository.PaymentSettingRepository, param2: com.mercadopago.android.px.internal.repository.AmountRepository, param3: com.mercadopago.android.px.internal.repository.PaymentRepository);
							public map(param0: any): any;
							public map(param0: com.mercadopago.android.px.model.BusinessPayment): com.mercadopago.android.px.internal.viewmodel.BusinessPaymentModel;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.mercadopago.android.px.internal.base.MvpPresenter:2
//com.mercadopago.android.px.internal.callbacks.OnSelectedCallback:1
//com.mercadopago.android.px.internal.callbacks.TaggedCallback:1
//com.mercadopago.android.px.internal.features.hooks.HookComponent:1
//com.mercadopago.android.px.internal.features.hooks.HookRenderer:1
//com.mercadopago.android.px.internal.view.CompactComponent:2
//com.mercadopago.android.px.internal.view.Component:2
//com.mercadopago.android.px.internal.view.ComponentManager:1
//com.mercadopago.android.px.internal.view.MutatorPropsListener:1
//com.mercadopago.android.px.internal.view.Renderer:1
//com.mercadopago.android.px.internal.viewmodel.mappers.Mapper:2
//com.mercadopago.android.px.tracking.PXEventListener:1

