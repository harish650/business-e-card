import React, { Component } from 'react'
import GooglePayButton from "@google-pay/button-react"
export class gpay extends Component {
  render() {
    return (
      <div display={{marginTop:"300px"}}>
        <GooglePayButton
  environment="PRODUCTION"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA',],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway:'datatrans',
            gatewayMerchantId: 'BCR2DN4TVTBYDEB3',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4TVTBYDEB3',
      merchantName: 'DHANA SREE R',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.0',
      currencyCode: 'INR',
      countryCode: 'IN',
    },
   
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
  // existingPaymentMethodRequired="true"
  // enabled="true"
/>
      </div>
    )
  }
}

export default gpay