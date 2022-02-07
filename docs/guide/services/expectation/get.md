<meta charset="utf-8"/>

### Recupération des factures client

<br />

#### 1. Description de la resource

Cette ressource permet de récupérer les factures d'un client donné

#### 2. La route
```
url: /expectation?{end_at}=&{start_at}=&{client_id}=
```

::: warning Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres
Les paramètres sont utilisés ici pour filtrer le résultat retourné

| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| start_at | datetime | Obligatoire | Le prévisionnel supérieur ou égal à cette date |
| end_at | datetime | Obligatoire | Le prévisionnel inférieur ou égal à cette date |
| client_id | integer | Optionnel | L'ID du client pour récupérer son prévisionnel |

### Exemple de requête sous format de
```json
{
    "end_at":"2022-12-31",
    "start_at":"2022-01-01",
    "client_id": 25
}
```

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

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

