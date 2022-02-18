# Ressource : Détails Chiffre d'Affaire

## 1. Description de la Resource

Détails des chiffres d'affaires


### 1 Endpoint

```
url: /stats/dashboard/ca-operations?{start_at}&{end_at}&{client_id}&{bank_id}
```

::: warning Rappel
Méthode: **`GET`**
:::

### 2 Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| start_at | datetime | Obligatoire | Début de period d'exercice |
| end_at | datetime | Obligatoire | Fin de period d'exercice |
| client_id | integer | Optionnel | L'ID du client propriétaire |
| bank_id | integer | Obligatoire | L'ID du compte bancaire concerné |

### 3 Requête réussie

```json
[
    {
        "id": 41,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "vente",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 3000,
        "amount_with_vat": 3300,
        "vat": "10.0",
        "vat_value": 300,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2022-01-24 19:17:30",
        "operation_date": "2021-02-01 00:00:00",
        "displayable_operation_date": "01/02/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    {
        "id": 10,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "vente",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 1700,
        "amount_with_vat": 1870,
        "vat": "10.0",
        "vat_value": 170,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2021-12-30 11:48:11",
        "operation_date": "2021-02-01 00:00:00",
        "displayable_operation_date": "01/02/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    }
]
```

### 4.1 Requête échouée

* Compte du client incomplet

```json
{
    "message": "Les données complémentaires de ce compte ne sont pas encore définies."
}
```

### 4.2 Requête échouée

* Erreurs de validatio

```json
{
    "start_at": "Ce champ est obligatoire.",
    "end_at": "Ce champ est obligatoire.",
    "bank_id": "Ce champ est obligatoire."
}
```
