import { useEffect, useRef } from 'react';
import ShopifyBuy from 'shopify-buy';

function Shop() {
    const productRef = useRef(null);
    const isShopifyBuyInitialized = useRef(false);

    useEffect(() => {
        async function loadScript(src) {
            return new Promise((resolve, reject) => {
                let script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    if (script.getAttribute('data-loaded') === 'true') {
                        resolve();
                    } else {
                        script.addEventListener('load', () => resolve(), { once: true });
                        script.addEventListener('error', () => reject(new Error('Script load error')), { once: true });
                    }
                } else {
                    script = document.createElement('script');
                    script.async = true;
                    script.src = src;
                    script.addEventListener('load', () => {
                        script.setAttribute('data-loaded', 'true');
                        resolve();
                    }, { once: true });
                    script.addEventListener('error', () => reject(new Error('Script load error')), { once: true });
                    document.head.appendChild(script);
                }
            });
        }

        async function initializeShopifyBuy() {
            if (!window.ShopifyBuy) {
                console.error('ShopifyBuy is not defined.');
                return;
            }
            if (!isShopifyBuyInitialized.current && window.ShopifyBuy) {
                isShopifyBuyInitialized.current = true;


                const client = ShopifyBuy.buildClient({
                    domain: 'your-shopify-shop-domain.myshopify.com',
                    storefrontAccessToken: 'your-storefront-access-token',
                });

                ShopifyBuy.UI.onReady(client).then((ui) => {
                    ui.createComponent('product', {
                        id: 'your-product-id',
                        node: productRef.current,
                        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
                        options: {
                            // Your options here
                        },
                    });
                }).catch(error => {
                    console.error("Error initializing Shopify Buy Button:", error);
                });
            }
        }

        async function setupShopifyBuy() {
            try {
                await loadScript('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js');
                initializeShopifyBuy();
            } catch (error) {
                console.error('Error loading Shopify SDK', error);
            }
        }

        setupShopifyBuy();

        // Cleanup logic can be placed here if necessary
        return () => {
            // Optional cleanup logic here
        };
    }, []);

    return (
        <div className="maindiv">
            <div ref={productRef} id="product-component-1712346176849"></div>
        </div>
    );
}

export default Shop;
