# mercadopago-px ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

Integration with [Mercado Pago checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/)

## Support

Support Android & iOS.

## Installation

```javascript
tns plugin add nativescript-mercadopago-px
```

## Usage

```javascript
this.mercadopagoPx
    .start({
        language: "es",
        publicKey: "PUBLIC_KEY",
        preferenceId: "PREFERENCE_ID" // Get custom preference_if of side server.
    })
    .then(result => {
        // Success payment
    })
    .catch(error => {
        // Cancel payment or Error payment
    });
```

### Vue

```vue
<template>
  <Page class="page">
    <ActionBar class="action-bar">
        <Label class="action-bar-title" text="Mercado Pago"></Label>
    </ActionBar>
    <StackLayout class="page">
      <Button text="Generate preference" @tap="generatePreference" />
      <Button text="Checkout" @tap="checkout" />
    </StackLayout>
  </Page>
</template>
```

```javascript
import { MercadopagoPx } from "nativescript-mercadopago-px";
export default {
    data() {
      return {
        accessToken: "TEST-8479223465824183-062120-902fb3cb694af3cff10eb7271dbea60f-588489468",
        preferenceId: "",
      }
    },
    methods: {
      generatePreference(){
        fetch("https://api.mercadolibre.com/checkout/preferences?access_token="+this.accessToken, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
          },
          body: JSON.stringify({
            "items": [
              {
                "id": "12345",
                "title": "My product",
                "currency_id": "ARS", // Required field
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "description": "Description of my product",
                "category_id": "art",
                "quantity": 1,
                "unit_price": 100
              }
            ],
            "payer": {
              "email": "test_user_6523408@testuser.com", // Required field
            },
          })
        })
        .then(response => {
          response.json()
          .then(resp => this.preferenceId = resp.id) // Save the preference to use it at checkout
        })
        .catch(error => console.log("Failed to generate preference",error))
      },
      checkout() {
        var mercadopagoPx = new MercadopagoPx();
        mercadopagoPx.checkout({
          language: "es",
          publicKey: "TEST-ebe497d7-3b86-4728-8f87-e5010231c8a0",
          preferenceId: this.preferenceId
        })
        .then(paymentInfo => console.log("Success payment =>", paymentInfo))
        .catch(error => console.log("Cancel payment or Error payment =>", error));
      },
    }
}
```

#### iOS

If you want to use the plugin with Vue + Javascript in iOS, you must add the following in your `app.js` or `main.js`

```javascript
const application = require("tns-core-modules/application");
if (application.ios) {
  const MyDelegate = (function (_super) {
      __extends(MyDelegate, _super);
      function MyDelegate() {
          _super.apply(this, arguments);
      }
      MyDelegate = UIResponder.extend(
        {
            get window() {
                return this._window;
            },
            set window(aWindow) {
                this._window = aWindow;
            },
        },
        {
            protocols: [UIApplicationDelegate],
        }
      );

      MyDelegate.ObjCProtocols = [UIApplicationDelegate];
      return MyDelegate;
  })(UIResponder);

  application.ios.delegate = MyDelegate;
}
```

## License

Apache License Version 2.0, January 2004
