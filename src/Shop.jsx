import { useEffect, useRef } from 'react';

function Shop() {
    const productRef = useRef(null);
    const isShopifyBuyInitialized = useRef(false);

    useEffect(() => {
        function loadScript(src, callback, onError) {
            let script = document.querySelector(`script[src="${src}"]`);
            if (script) {
                if (script.getAttribute('data-loaded') === 'true') {
                    callback();
                } else {
                    script.addEventListener('load', callback);
                    script.addEventListener('error', onError);
                }
                return;
            }
            script = document.createElement('script');
            script.async = true;
            script.src = src;
            script.addEventListener('load', () => {
                script.setAttribute('data-loaded', 'true');
                callback();
            });
            script.addEventListener('error', onError);
            document.head.appendChild(script);
        }

        function initializeShopifyBuy() {
            if (!isShopifyBuyInitialized.current && window.ShopifyBuy) {
                isShopifyBuyInitialized.current = true;
                const client = ShopifyBuy.buildClient({
                    domain: 'e9ab56-44.myshopify.com',
                    storefrontAccessToken: '540908f02802d8a22bb8fc39db254ecf',
                });

                ShopifyBuy.UI.onReady(client).then((ui) => {
                    ui.createComponent('product', {
                        id: '9099748147514',
                        node: productRef.current,
                        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
                        options: {
                            product: {
                                iframe: false,
                                buttonDestination: 'modal',
                                text: {
                                    button: 'Add to cart',
                                },
                                styles: {
                                    button: {
                                        'background-color': '#FF0000',
                                        ':hover': {
                                            'background-color': '#000000',
                                        },
                                        'border-radius': '10px',
                                        'font-size': '16px',
                                        'padding': '15px 20px',
                                    },
                                    title: {
                                        'font-size': '20px',
                                    },
                                    price: {
                                        'font-size': '16px',
                                    },
                                    compareAt: {
                                        'font-size': '14px',
                                    },
                                },
                            },
                        }
                    });
                }).catch(error => {
                    console.error("Error initializing Shopify Buy Button:", error);
                });
            }
        }

        const onErrorLoadingScript = () => {
            console.error('Error loading Shopify SDK');
        };

        if (window.ShopifyBuy?.UI && !isShopifyBuyInitialized.current) {
            initializeShopifyBuy();
        } else {
            loadScript('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js', initializeShopifyBuy, onErrorLoadingScript);
        }

        // Cleanup logic could be placed here if necessary
        return () => {
            // Cleanup logic here
        };
    }, []); // Dependency array remains empty as this effect does not depend on props or state

    return (
        <div className="maindiv">
            <div ref={productRef} id="product-component-1712346176849"></div>
        </div>
    );
}

export default Shop;
