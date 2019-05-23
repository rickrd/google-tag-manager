import { ProductImpressionData } from '../typings/events'

const productImpression: ProductImpressionData = {
  currency: 'USD',
  eventName: 'vtex:productImpression',
  event: 'productImpression',
  list: 'Shelf',
  position: 3,
  product: {
    cacheId: 'long-sleeve-shirt',
    productId: '2000005',
    productName: 'Long Sleeve Shirt - Regular',
    description:
      'Everything looks good on this trendy color. Even long sleeve shirts.',
    categories: ['/Clothing/Shirts/', '/Clothing/'],
    categoryTree: [
      {
        name: 'Clothing',
        href: '/clothing/d',
        __typename: 'vtex_storegraphql_2_76_0_Category',
      },
      {
        name: 'Shirts',
        href: '/clothing/shirts',
        __typename: 'vtex_storegraphql_2_76_0_Category',
      },
    ],
    link: 'https://portal.vtexcommercestable.com.br/long-sleeve-shirt/p',
    linkText: 'long-sleeve-shirt',
    brand: 'Apple',
    items: [
      {
        name: 'Regular',
        itemId: '2000539',
        referenceId: [
          {
            Value: '98123719',
            __typename: 'vtex_storegraphql_2_76_0_Reference',
          },
        ],
        images: [
          {
            imageUrl:
              'https://storecomponents.vteximg.com.br/arquivos/ids/155487/Frame-7.jpg?v=636793837686400000',
            imageTag:
              '<img src="~/arquivos/ids/155487-#width#-#height#/Frame-7.jpg?v=636793837686400000" width="#width#" height="#height#" alt="Frame-7" id="" />',
            __typename: 'vtex_storegraphql_2_76_0_Image',
          },
        ],
        sellers: [
          {
            sellerId: '1',
            commertialOffer: {
              Installments: [
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'American Express à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Visa à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 4725,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 2,
                  Name: 'Visa 2 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 3150,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 3,
                  Name: 'Visa 3 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 2362.5,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 4,
                  Name: 'Visa 4 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1890,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 5,
                  Name: 'Visa 5 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1575,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 6,
                  Name: 'Visa 6 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Mastercard à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 4725,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 2,
                  Name: 'Mastercard 2 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 3150,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 3,
                  Name: 'Mastercard 3 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 2362.5,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 4,
                  Name: 'Mastercard 4 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1890,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 5,
                  Name: 'Mastercard 5 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1575,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 6,
                  Name: 'Mastercard 6 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Boleto Bancário à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Promissory à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Customer Credit à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 4725,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 2,
                  Name: 'Customer Credit 2 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 3150,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 3,
                  Name: 'Customer Credit 3 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 2362.5,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 4,
                  Name: 'Customer Credit 4 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1890,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 5,
                  Name: 'Customer Credit 5 vezes sem juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1861.9,
                  InterestRate: 5,
                  TotalValuePlusInterestRate: 11171.4,
                  NumberOfInstallments: 6,
                  Name: 'Customer Credit 6 vezes com juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 1771.4,
                  InterestRate: 10,
                  TotalValuePlusInterestRate: 14171.2,
                  NumberOfInstallments: 8,
                  Name: 'Customer Credit 8 vezes com juros',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
                {
                  Value: 9450,
                  InterestRate: 0,
                  TotalValuePlusInterestRate: 9450,
                  NumberOfInstallments: 1,
                  Name: 'Free à vista',
                  __typename: 'vtex_storegraphql_2_76_0_Installment',
                },
              ],
              AvailableQuantity: 2000000,
              Price: 9450,
              ListPrice: 9450,
              __typename: 'vtex_storegraphql_2_76_0_Offer',
            },
            __typename: 'vtex_storegraphql_2_76_0_Seller',
          },
        ],
        __typename: 'vtex_storegraphql_2_76_0_SKU',
      },
    ],
    productClusters: [],
    __typename: 'vtex_storegraphql_2_76_0_Product',
    sku: {
      name: 'Regular',
      itemId: '2000539',
      referenceId: {
        Value: '98123719',
        __typename: 'vtex_storegraphql_2_76_0_Reference',
      },
      images: [
        {
          imageUrl:
            'https://storecomponents.vteximg.com.br/arquivos/ids/155487/Frame-7.jpg?v=636793837686400000',
          imageTag:
            '<img src="~/arquivos/ids/155487-#width#-#height#/Frame-7.jpg?v=636793837686400000" width="#width#" height="#height#" alt="Frame-7" id="" />',
          __typename: 'vtex_storegraphql_2_76_0_Image',
        },
      ],
      sellers: [
        {
          sellerId: '1',
          commertialOffer: {
            Installments: [
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'American Express à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Visa à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 4725,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 2,
                Name: 'Visa 2 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 3150,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 3,
                Name: 'Visa 3 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 2362.5,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 4,
                Name: 'Visa 4 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1890,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 5,
                Name: 'Visa 5 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1575,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 6,
                Name: 'Visa 6 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Mastercard à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 4725,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 2,
                Name: 'Mastercard 2 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 3150,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 3,
                Name: 'Mastercard 3 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 2362.5,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 4,
                Name: 'Mastercard 4 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1890,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 5,
                Name: 'Mastercard 5 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1575,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 6,
                Name: 'Mastercard 6 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Boleto Bancário à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Promissory à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Customer Credit à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 4725,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 2,
                Name: 'Customer Credit 2 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 3150,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 3,
                Name: 'Customer Credit 3 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 2362.5,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 4,
                Name: 'Customer Credit 4 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1890,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 5,
                Name: 'Customer Credit 5 vezes sem juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1861.9,
                InterestRate: 5,
                TotalValuePlusInterestRate: 11171.4,
                NumberOfInstallments: 6,
                Name: 'Customer Credit 6 vezes com juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 1771.4,
                InterestRate: 10,
                TotalValuePlusInterestRate: 14171.2,
                NumberOfInstallments: 8,
                Name: 'Customer Credit 8 vezes com juros',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
              {
                Value: 9450,
                InterestRate: 0,
                TotalValuePlusInterestRate: 9450,
                NumberOfInstallments: 1,
                Name: 'Free à vista',
                __typename: 'vtex_storegraphql_2_76_0_Installment',
              },
            ],
            AvailableQuantity: 2000000,
            Price: 9450,
            ListPrice: 9450,
            __typename: 'vtex_storegraphql_2_76_0_Offer',
          },
          __typename: 'vtex_storegraphql_2_76_0_Seller',
        },
      ],
      __typename: 'vtex_storegraphql_2_76_0_SKU',
      seller: {
        sellerId: '1',
        commertialOffer: {
          Installments: [
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'American Express à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Visa à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 4725,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 2,
              Name: 'Visa 2 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 3150,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 3,
              Name: 'Visa 3 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 2362.5,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 4,
              Name: 'Visa 4 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1890,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 5,
              Name: 'Visa 5 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1575,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 6,
              Name: 'Visa 6 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Mastercard à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 4725,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 2,
              Name: 'Mastercard 2 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 3150,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 3,
              Name: 'Mastercard 3 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 2362.5,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 4,
              Name: 'Mastercard 4 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1890,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 5,
              Name: 'Mastercard 5 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1575,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 6,
              Name: 'Mastercard 6 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Boleto Bancário à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Promissory à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Customer Credit à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 4725,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 2,
              Name: 'Customer Credit 2 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 3150,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 3,
              Name: 'Customer Credit 3 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 2362.5,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 4,
              Name: 'Customer Credit 4 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1890,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 5,
              Name: 'Customer Credit 5 vezes sem juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1861.9,
              InterestRate: 5,
              TotalValuePlusInterestRate: 11171.4,
              NumberOfInstallments: 6,
              Name: 'Customer Credit 6 vezes com juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 1771.4,
              InterestRate: 10,
              TotalValuePlusInterestRate: 14171.2,
              NumberOfInstallments: 8,
              Name: 'Customer Credit 8 vezes com juros',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
            {
              Value: 9450,
              InterestRate: 0,
              TotalValuePlusInterestRate: 9450,
              NumberOfInstallments: 1,
              Name: 'Free à vista',
              __typename: 'vtex_storegraphql_2_76_0_Installment',
            },
          ],
          AvailableQuantity: 2000000,
          Price: 9450,
          ListPrice: 9450,
          __typename: 'vtex_storegraphql_2_76_0_Offer',
        },
        __typename: 'vtex_storegraphql_2_76_0_Seller',
      },
      image: {
        imageUrl:
          'https://storecomponents.vteximg.com.br/arquivos/ids/155487-500-auto?width=500&height=auto&aspect=true',
        imageTag:
          '<img src="~/arquivos/ids/155487-#width#-#height#/Frame-7.jpg?v=636793837686400000" width="#width#" height="#height#" alt="Frame-7" id="" />',
        __typename: 'vtex_storegraphql_2_76_0_Image',
      },
    },
  },
}

export default productImpression