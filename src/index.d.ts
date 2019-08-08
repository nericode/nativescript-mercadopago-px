export declare class MercadopagoPx {
    public start(options: Options): Promise<any>;
}

export class Options {
    /**
     * Only set language in iOS
     * */
    language?: string;

    /**
     *set publicKey
     * */
    publicKey: string;

    /**
     * set preferenceId
     * */
    preferenceId: string;
}
