### Saisie des données prévisionnelles

<br />

#### 1. Description de la resource

Cette ressource vous permet de créer/modifier les données prévisionnelles pour un client donné.
___Même que mettre à jour___


#### 2. La route
```
url: /api/expectation
```

::: danger Rappel
Methode:  `POST`
:::


#### 3. Paramètres

Le type de formulaire à soumettre doit être `form-data` afin qu'il puisse envoyer des fichiers!

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| start_at | Datetime | Obligatoire | La date de débbut de l'exercice |
| initial_treasury | float | Obligatoire | La trésorerie initiale, __cette valeur concerne une année d'exercice mais pas le type, alors nous aurons toujours la même valeur dans les enregistrements d'une même période peut importe s'il s'agit d'un dépense ou une recette!|
| client_id | integer | Optionnel | ID du client pour lequel nous sommes en train de saisir le prévisionnel |
| type | string | Obligatoire | Type de prévisionnel ***depense*** ou ***recette*** |
| data_by_categories | array | Obligatoire | Données prévisionnelles comme détaillées dans les exemples ci-après |


___Règles de validation du champ `data_by_categories`___
```json
{
    "Nom de catégorie: `string`": {
        "Nom de sous catégorie: `string`" : {
            "total" : {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
            "monthly" : [
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0},
                {"amount: `float`" : 0, "grand_amount: `float`" : 0, "vat: `float`" : 0, "vat_amount: `float`" : 0}
            ]
        },
        ...
    },
    ...
}
```

Exemple des données du champ `data_by_categories`___
```json
{
        "DIRIGEANT ET REMBOURSEMENT": {
            "Achat de matieres prem" : {
                "total" : {"amount" : 2400, "grand_amount" : 2640, "vat" : 10, "vat_amount" : 240},
                "monthly" : [
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20},
                    {"amount" : 200, "grand_amount" : 220, "vat" : 10, "vat_amount" : 20}
                ]
            }
        }
    }
```


<br />
#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
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
            },
            ...
        },
        ...
    }
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "type": "Choix invalid. Veuillez choisir une valeur parmis les choix proposés.",
    "data_by_categories": "Cette valeur doit être de type iterable."
}
```


