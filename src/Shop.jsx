import { useEffect, useRef } from 'react';
import ShopifyBuy from 'shopify-buy';

function Shop() {
    const productRef = useRef(null);
    // Singleton flag to ensure ShopifyBuyInit is only called once
    const isShopifyBuyInitialized = useRef(false);

    useEffect(() => {
        // Function to dynamically load the Shopify SDK script
        function loadScript(src, callback) {
            if (document.querySelector(`script[src="${src}"]`)) {
                // Script already loaded
                callback();
                return;
            }
            const script = document.createElement('script');
            script.async = true;
            script.src = src;
            script.onload = () => callback();
            document.head.appendChild(script);
        }

        // Function to initialize and render the Shopify buy button
        function initializeShopifyBuy() {
            if (!isShopifyBuyInitialized.current && window.ShopifyBuy) {
                isShopifyBuyInitialized.current = true; // Set flag to true
                

                const client = ShopifyBuy.buildClient({
                    domain: 'e9ab56-44.myshopify.com',
                    storefrontAccessToken: '540908f02802d8a22bb8fc39db254ecf',
                });

                ShopifyBuy.UI.onReady(client).then(function (ui) {
                    ui.createComponent('product', {
                        id: '9099748147514',
                        node: productRef.current,
                        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
                        options: {
                            // Your options here
                        },
                    });
                });
            }
        }

        if (window.ShopifyBuy?.UI && !isShopifyBuyInitialized.current) {
            initializeShopifyBuy();
        } else {
            loadScript('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js', initializeShopifyBuy);
        }

        // Cleanup
        return () => {
            // Consider cleaning up Shopify UI components if necessary
        };
    }, []); // Make sure this effect has no dependencies or only necessary ones

    return (
        <div className="maindiv">
            <h1>Shop</h1>
            <div ref={productRef} id="product-component-1712346176849"></div>
        </div>
    );
}

export default Shop;