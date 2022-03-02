# Ressource : Chiffre d'Affaire (Opérations)

## 1. Description de la Resource

Détails de tous les frais


### 1 Endpoint

```
url: /stats/dashboard/frais-operations?{start_at}&{end_at}&{client_id}&{bank_id}
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
        "id": 46,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "achat",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 7000,
        "amount_with_vat": 7700,
        "vat": "10.0",
        "vat_value": 700,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2022-01-24 19:17:30",
        "operation_date": "2021-06-23 00:00:00",
        "displayable_operation_date": "23/06/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    {
        "id": 45,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "achat",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 1400,
        "amount_with_vat": 1540,
        "vat": "10.0",
        "vat_value": 140,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2022-01-24 19:17:30",
        "operation_date": "2021-02-23 00:00:00",
        "displayable_operation_date": "23/02/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": true,
        "is_not_editable": null,
        "is_affected": true
    },
    {
        "id": 44,
        "label": "CAPITAL",
        "reference": null,
        "type": "achat",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 1600,
        "amount_with_vat": 1760,
        "vat": "10.0",
        "vat_value": 160,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2022-01-24 19:17:30",
        "operation_date": "2021-02-04 00:00:00",
        "displayable_operation_date": "04/02/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    {
        "id": 43,
        "label": "CAPITAL",
        "reference": null,
        "type": "achat",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 1300,
        "amount_with_vat": 1430,
        "vat": "10.0",
        "vat_value": 130,
        "code_fiscal": null,
        "bank_id": 3,
        "created_at": "2022-01-24 19:17:30",
        "operation_date": "2021-02-04 00:00:00",
        "displayable_operation_date": "04/02/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    {
        "id": 42,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "achat",
        "sub_category": null,
        "vat_blocked": null,
        "amount": 4000,
        "amount_with_vat": 4400,
        "vat": "10.0",
        "vat_value": 400,
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
