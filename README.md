# mercadopago-px ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

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

## License

Apache License Version 2.0, January 2004
