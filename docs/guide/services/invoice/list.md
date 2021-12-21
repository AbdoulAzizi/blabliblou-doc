# Ressource : Récupération des Factures (Invoices)

## 1. Description de la Resource

Cette ressource permet d'afficher toutes les factures d'un utilisateur.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice
```

::: warning Important
Pour accceder à une seule facture via son id vous ajoutez `/id` après `url: /invoice`. <br>
Par exemple si l'on veut acceder à une facture ayant pour id=4, on procède comme suit:
`url: /invoice/4`
:::

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Les paramètres sont utilisés ici pour filtrer le résultat retourné

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| from_operation_date | datetime | Optionnel | Dont la date d'operation est égale ou plus récente que celle-ci |
| to_operation_date | datetime | Optionnel | Dont la date d'operation est égale ou plus ancienne que celle-ci |
| label | string | Optionnel | Libellé de la pièce donnée par celui qui la fournit |
| from_amount | decimal | Optionnel | Dont le montant d'operation supérieur ou égal à celui-ci |
| to_amount | decimal | Optionnel | Dont le montant d'operation inférieur ou égal à celui-ci |
| vat | decimal | Optionnel | TVA d'operation |
| operation_type | string | Optionnel | Le type d'operation: **frais, vente** |
| id | integer | Optionnel | L'ID d'operation à récupérer pour récupérer une opération precise |
| client_id | integer | Optionnel | L'ID du client pour récupérer ses operations |
| include | array | Optionnel | Les objets relatifs, valeurs supportées: **sub_category** |
| group_by | array | Optionnel | Grouper la réponse(json response), valeurs supportées: **sub_category** |


## 4.1. Requête réussie (cas simple)
Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
        "id": 383,
        "index": 383,
        "label": null,
        "type": null,
        "amount": null,
        "amount_with_vat": null,
        "vat": null,
        "vat_value": null,
        "reference": null,
        "comment": null,
        "operation_date": "2021-12-07 12:28:48",
        "displayable_operation_date": "07/12/2021",
        "created_at": "2021-12-07 12:28:48",
        "affectation_status": false,
        "paid_amount": 0,
        "receipt_path": null,
        "user_id": 25,
    },
    ...
]
```

## 4.2. Requête réussie (avec `sub_category`)

```json
[
    {
        "id": 394,
        "index": 394,
        "label": "SERV BANCAIRES4",
        "type": "vente",
        "amount": "1004.00",
        "amount_with_vat": null,
        "vat": "10.00",
        "vat_value": null,
        "reference": "1",
        "comment": null,
        "operation_date": "2021-02-01 00:00:00",
        "displayable_operation_date": "01/02/2021",
        "created_at": "2021-12-07 13:55:45",
        "affectation_status": false,
        "paid_amount": 0,
        "receipt_path": null,
        "user_id": 25,
        "sub_category": {
            "display_name": "Autre frais d’intérimaire_1",
            "status": "enabled",
            "slug": "Autre-frais-d-interimaire-1",
            "id": 1,
            "category_id": 2,
            "created_at": "2021-08-26 18:41:37"
        }
    },
    {
        "id": 391,
        "index": 391,
        ...
        "sub_category": {
            "display_name": "Autre frais d’intérimaire_1",
            ...
            "created_at": "2021-08-26 18:41:37"
        }
    },
    ...
]
```

## 4.3. Requête réussie (avec `sub_category`, groupée par `sub_category`)
```json
{
    "Frais d’intérimaire": [
        {
            "id": 391,
            "index": 391,
            "label": null,
            "type": null,
            "amount": null,
            "amount_with_vat": null,
            "vat": null,
            "vat_value": null,
            ...
            "sub_category": {
                "display_name": "Frais d’intérimaire",
                ...
                "created_at": "2021-08-26 18:41:37"
            }
        }
    ],
    "Autre frais d’intérimaire": [
        {
            "id": 398,
            ...
            "user_id": 25,
            "sub_category": {
                "display_name": "Autre frais d’intérimaire",
                ...
                "created_at": "2021-08-26 18:42:33"
            }
        }
    ],
    ...
}
```


## 5. Cas d'échec d'une requête

En cas d'échec, par exemple si vous essayez d'acceder à cette ressource par le verbe `PUT` vous aurez un message de type:

```json
{
  "error": "No route found for \"PUT /api/invoice\": Method Not Allowed (Allow: POST, GET)"
}
```

Ou d'acceder à une ressource inexistante

```json
{
    "id": "Cette facture est introuvable."
}
```

Ou si l'utilisateur courant ne possède aucune facture enregistrée, vous aurez le résultat suivant:

```json
{
  []
}
```
