<meta charset="utf-8"/>

### Recupération des factures client

<br />

#### 1. Description de la resource

Cette ressource permet de récupérer les factures d'un client donné

#### 2. La route
```
url: /api/client/bbb-invoice?client_id={client_id}
```

::: danger Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres

Aucun paramètre n'est demandé

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

``` JSON
[
    {
        "id": 5,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "unpaid",
        "amount": "4000.00",
        "paid_amount": "0.00"
    },
    {
        "id": 6,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "unpaid",
        "amount": "1001.00",
        "paid_amount": "0.00"
    },
    {
        "id": 7,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "unpaid",
        "amount": "1001.00",
        "paid_amount": "0.00"
    },
    {
        "id": 8,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "partially_paid",
        "amount": "1000.00",
        "paid_amount": "1.00"
    },
    {
        "id": 9,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "unpaid",
        "amount": "2000.00",
        "paid_amount": "0.00"
    },
    {
        "id": 10,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "partially_paid",
        "amount": "1000.00",
        "paid_amount": "1.00"
    },
    {
        "id": 11,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "partially_paid",
        "amount": "1000.00",
        "paid_amount": "3.00"
    },
    {
        "id": 12,
        "pay_before": "2021-10-14",
        "readable_pay_before": "Thursday 14th October 2021",
        "status": "partially_paid",
        "amount": "1000.00",
        "paid_amount": "1.00"
    },
    {
        "id": 13,
        "pay_before": "2021-10-19",
        "readable_pay_before": "Tuesday 19th October 2021",
        "status": "partially_paid",
        "amount": "1000.00",
        "paid_amount": "2.00"
    }
]
```

