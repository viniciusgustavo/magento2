/**
 * {license_notice}
 *
 * @copyright   {copyright}
 * @license     {license_link}
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'Magento_Ui/js/form/component',
        'Magento_Checkout/js/action/select-shipping-address',
        'Magento_Customer/js/model/customer',
        '../model/quote',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function(Component, selectShippingAddress, customer, quote, navigator) {
        return Component.extend({
            defaults: {
                template: 'Magento_Checkout/shipping-address',
                addresses: customer.getShippingAddressList(),
                selectedAddressId: null,
                sameAsBilling: null,
                isLoggedIn: customer.isLoggedIn(),
                isVisible: navigator.isShippingAddressVisible(),
                quoteHasBillingAddress: quote.hasBillingAddress(),
                selectShippingAddress: function() {
                    selectShippingAddress(this.selectedAddressId, this.sameAsBilling);
                },
                // Checkout step navigation
                backToBilling: function() {
                    navigator.toStep('billingAddress');
                }
            }
        });
    }
);
