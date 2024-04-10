import { useEffect, useRef } from 'react';

const Shop = () => {
  const shopifyUIInitialized = useRef(false); // Ref to track UI initialization

  useEffect(() => {
    const loadScript = () => {
      if (shopifyUIInitialized.current) return; // Check if script is already loaded

      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    };

    const ShopifyBuyInit = () => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        if (!shopifyUIInitialized.current) { // Check if Shopify UI has been initialized
          buildShopifyUI();
          shopifyUIInitialized.current = true; // Mark as initialized
        }
      } else {
        loadScript();
      }
    };

    const buildShopifyUI = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: 'e9ab56-44.myshopify.com',
        storefrontAccessToken: '540908f02802d8a22bb8fc39db254ecf',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        const container = document.getElementById('product-component-1712754041405');
        // Clear the container to prevent duplicates
        if (container) {
          container.innerHTML = '';
        }

        ui.createComponent('product', {
          id: '9099748147514',
          node: container,
          moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
          options: {
            "product": {
              "styles": {
                "button": {
                  "background-color": "#002fa7", // Button color
                  ":hover": {
                    "background-color": "#0050ff" // Lighter blue on hover
                  },
                  ":focus": {
                    "background-color": "#0050ff" // Lighter blue on focus
                  },
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "cart": {
              "styles": {
                "button": {
                  "background-color": "#002fa7",
                  ":hover": {
                    "background-color": "#0050ff"
                  },
                  ":focus": {
                    "background-color": "#0050ff"
                  }
                }
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#002fa7",
                  ":hover": {
                    "background-color": "#0050ff"
                  },
                  ":focus": {
                    "background-color": "#0050ff"
                  }
                }
              }
            }
          }
        });
      });
    };

    ShopifyBuyInit();
  }, []);

  return <div id='product-component-1712754041405'></div>;
};

export default Shop;
