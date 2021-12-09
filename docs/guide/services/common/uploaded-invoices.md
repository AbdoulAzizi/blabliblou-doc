# Ressource : Pièces comptables (Factures et courriers)

## 1. Description de la Resource

La liste des pièces comptables chargées sur l'espace client mais pas encore affectées à une opération bancaire.

## 2. URL et Méthode d'accès

```
url: /local-documents?type=courrier&client_id=25
```

::: danger Rappel
Méthode: **`GET`**
:::

## 3. Paramètres

Les paramètres sont utilisés ici pour filtrer le résultat retourné

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| client_id | integer | Optionnel | L'ID du client proprietaire des pieces. Valeur par defaut: l'ID de l'utilisateur connecté |
| type | string | Optionnel | Type de la pièce (__`frais`__, __`vente`__, __`courrier`__) |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
        "id": 391,
        "label": "SERV BANCAIRES1",
        "type": "courrier",
        "amount": "1001.00",
        "amount_with_vat": null,
        "vat": "15.00",
        "vat_value": null,
        "reference": "1",
        "comment": null,
        "operation_date": "2021-02-01 00:00:00",
        "displayable_operation_date": "01/02/2021",
        "created_at": "2021-12-07 13:55:45",
        "file_status": false,
        "affectation_status": false,
        "paid_amount": 0,
        "receipt_path": null,
        "user_id": 25
    },
    ...
]
```

