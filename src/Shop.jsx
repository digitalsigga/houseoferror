import React, { useEffect, useRef } from 'react';
import ShopifyBuy from 'shopify-buy';

function Shop() {
    const productRef = useRef(null);

    useEffect(() => {
        // Function to dynamically load the Shopify SDK script
        function loadScript(src, callback) {
            const script = document.createElement('script');
            script.async = true;
            script.src = src;
            script.onload = () => callback();
            document.head.appendChild(script);
        }

        // Function to initialize and render the Shopify buy button
        function initializeShopifyBuy() {
    

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

        // Ensure ShopifyBuy is defined before using it
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                initializeShopifyBuy();
            } else {
                loadScript('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js', initializeShopifyBuy);
            }
        } else {
            loadScript('https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js', () => {
                if (window.ShopifyBuy) {
                    initializeShopifyBuy();
                }
            });
        }

        // Cleanup
        return () => {
            // Remove the script to clean up and prevent re-initializations
            const scripts = document.querySelectorAll('script[src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"]');
            scripts.forEach(script => script.remove());
        };
    }, []);

    return (
        <div className="maindiv">
            <h1>Shop</h1>
            <div ref={productRef} id="product-component-1712346176849"></div>
        </div>
    );
}

export default Shop;