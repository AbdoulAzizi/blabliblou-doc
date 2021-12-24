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

Ci-dessous un exemple de rêquete passer avec succès:

``` JSON
[
    {
        "id": 6,
        "type": "depense",
        "start_at": "2022-01-01",
        "end_at": "2022-12-31",
        "amount": 2400,
        "grand_amount": 2640,
        "vat": 10,
        "vat_amount": 240,
        "initial_treasury": 10000,
        "data_by_categories": {
            "DIRIGEANT ET REMBOURSEMENT": {
                "Achat de matieres prem": {
                    "total": {
                        "amount": 2400,
                        "grand_amount": 2640,
                        "vat": 10,
                        "vat_amount": 240
                    },
                    "monthly": [
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        }
                    ]
                },
                ...
            },
            ...
        }
    },
    {
        "id": 3,
        "type": "recette",
        "start_at": "2022-01-01",
        "end_at": "2022-12-31",
        "amount": 2400,
        "grand_amount": 2640,
        "vat": 10,
        "vat_amount": 240,
        "initial_treasury": 10000,
        "data_by_categories": {
            "DIRIGEANT ET REMBOURSEMENT": {
                "Achat de matieres prem": {
                    "total": {
                        "amount": 2400,
                        "grand_amount": 2640,
                        "vat": 10,
                        "vat_amount": 240
                    },
                    "monthly": [
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        },
                        {
                            "amount": 200,
                            "grand_amount": 220,
                            "vat": 10,
                            "vat_amount": 20
                        }
                    ]
                }
            },
        ...
        },
        ...
    }
]
```

