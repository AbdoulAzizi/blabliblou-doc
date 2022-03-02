# Ressource : Récupération des Affectaions d'une opération ou facture donnée

---

# I. Plusieurs affectations

#### 1. Description de la resource

Récupérer les affectations d'une opération bancaire ou facture donné

#### 2. La route
```
url: /affectations?transaction_id=&include[]=
```

::: danger Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres
Les paramètres sont utilisés ici pour filtrer le résultat renvoyé

| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| transaction_id | integer | Obligatoire si `invoice_id` n'est pas fourni | L'ID de l'operation bancaire |
| invoice_id | integer | Optionnel | L'ID de l'operation bancaire |
| include | array | Optionnel | Les objets relatifs, valeurs supportées: **invoice**, **transaction** |


<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

__1. Avec transaction_id__

``` JSON
{
    "transaction": {
        "id": 23,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "achat",
        "sub_category": {
            "display_name": "Sub category 1-2",
            "status": "enabled",
            "slug": "Sub-category-1-2",
            "id": 4,
            "category_id": 1,
            "created_at": "2021-08-26 18:44:02"
        },
        "vat_blocked": null,
        "amount": 4400,
        "amount_with_vat": 9900,
        "vat": "10.0",
        "vat_value": 900,
        "code_fiscal": null,
        "bank_id": null,
        "created_at": "2022-01-20 20:59:07",
        "operation_date": "2021-09-23 00:00:00",
        "displayable_operation_date": "23/09/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    "affectations": [
        {
            "id": 30,
            "created_at": "2022-03-02 11:13:02",
            "display_created_at": "02/03/2022",
            "comment": "Comment.. TEST",
            "invoice": {
                "id": 416,
                "index": 416,
                "label": null,
                "type": "achat",
                "amount": null,
                "amount_with_vat": null,
                "vat": null,
                "vat_value": null,
                "reference": "416",
                "comment": null,
                "operation_date": "2022-03-02 11:13:02",
                "displayable_operation_date": "02/03/2022",
                "created_at": "2022-03-02 11:13:02",
                "affectation_status": true,
                "paid_amount": 0,
                "receipt_path": "/storage/invoices/Debit-621f513e8982a.png",
                "user_id": 3
            }
        }
    ]
}
```

__1. Avec invoice_id__

``` JSON
{
    "affectations": [
        {
            "id": 30,
            "created_at": "2022-03-02 11:13:02",
            "display_created_at": "02/03/2022",
            "comment": "Comment.. TEST",
            "transaction": {
                "id": 23,
                "label": "SERV BANCAIRES ASSI",
                "reference": null,
                "type": "achat",
                "sub_category": {
                    "display_name": "Sub category 1-2",
                    "status": "enabled",
                    "slug": "Sub-category-1-2",
                    "id": 4,
                    "category_id": 1,
                    "created_at": "2021-08-26 18:44:02"
                },
                "vat_blocked": null,
                "amount": 4400,
                "amount_with_vat": 9900,
                "vat": "10.0",
                "vat_value": 900,
                "code_fiscal": null,
                "bank_id": null,
                "created_at": "2022-01-20 20:59:07",
                "operation_date": "2021-09-23 00:00:00",
                "displayable_operation_date": "23/09/21",
                "user_id": 3,
                "has_parent": false,
                "has_children": false,
                "is_not_editable": null,
                "is_affected": true
            },
            "invoice": {
                "id": 416,
                "index": 416,
                "label": null,
                "type": "achat",
                "amount": null,
                "amount_with_vat": null,
                "vat": null,
                "vat_value": null,
                "reference": "416",
                "comment": null,
                "operation_date": "2022-03-02 11:13:02",
                "displayable_operation_date": "02/03/2022",
                "created_at": "2022-03-02 11:13:02",
                "affectation_status": true,
                "paid_amount": 0,
                "receipt_path": "Debit-621f513e8982a.png",
                "user_id": 3
            }
        },
        {
            "id": 32,
            "created_at": "2022-03-02 12:09:46",
            "display_created_at": "02/03/2022",
            "comment": "Mois novembre, achat de matiere prem.",
            "transaction": {
                "id": 3,
                "label": "Test7",
                "reference": "EE23.CB99",
                "type": "vente",
                "sub_category": {
                    "display_name": "Sub category 1-2",
                    "status": "enabled",
                    "slug": "Sub-category-1-2",
                    "id": 4,
                    "category_id": 1,
                    "created_at": "2021-08-26 18:44:02"
                },
                "vat_blocked": true,
                "amount": 4400,
                "amount_with_vat": 1200,
                "vat": "20.0",
                "vat_value": 200,
                "code_fiscal": "206000",
                "bank_id": 3,
                "created_at": "2021-11-29 19:31:59",
                "operation_date": "2020-10-10 00:00:00",
                "displayable_operation_date": "10/10/20",
                "user_id": 3,
                "has_parent": false,
                "has_children": false,
                "is_not_editable": null,
                "is_affected": true
            },
            "invoice": {
                "id": 416,
                "index": 416,
                "label": null,
                "type": "achat",
                "amount": null,
                "amount_with_vat": null,
                "vat": null,
                "vat_value": null,
                "reference": "416",
                "comment": null,
                "operation_date": "2022-03-02 11:13:02",
                "displayable_operation_date": "02/03/2022",
                "created_at": "2022-03-02 11:13:02",
                "affectation_status": true,
                "paid_amount": 0,
                "receipt_path": "Debit-621f513e8982a.png",
                "user_id": 3
            }
        }
    ],
    "invoice": {
        "id": 416,
        "index": 416,
        "label": null,
        "type": "achat",
        "amount": null,
        "amount_with_vat": null,
        "vat": null,
        "vat_value": null,
        "reference": "416",
        "comment": null,
        "operation_date": "2022-03-02 11:13:02",
        "displayable_operation_date": "02/03/2022",
        "created_at": "2022-03-02 11:13:02",
        "affectation_status": true,
        "paid_amount": 0,
        "receipt_path": "/storage/invoicesDebit-621f513e8982a.png",
        "user_id": 3
    }
}
```


#### 5. Requête échouée (Code: 4xx)

```json
{
    "transaction_id": "Ce champ est obligatoire quand invoice_id est absent."
}
```



## II. Une seule affectation

#### 1. Description de la resource

Récupérer les données et objets acssociés à une opération bancaire donnée

#### 2. La route
```
url: /affectation/{id}
```

::: danger Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres
Les paramètres sont utilisés ici pour filtrer le résultat renvoyé

| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| id | integer | Obligatoire | L'ID d'une affectation |


<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

```json
{
    "transaction": {
        "id": 23,
        "label": "SERV BANCAIRES ASSI",
        "reference": null,
        "type": "achat",
        "sub_category": {
            "display_name": "Sub category 1-2",
            "status": "enabled",
            "slug": "Sub-category-1-2",
            "id": 4,
            "category_id": 1,
            "created_at": "2021-08-26 18:44:02"
        },
        "vat_blocked": null,
        "amount": 4400,
        "amount_with_vat": 9900,
        "vat": "10.0",
        "vat_value": 900,
        "code_fiscal": null,
        "bank_id": null,
        "created_at": "2022-01-20 20:59:07",
        "operation_date": "2021-09-23 00:00:00",
        "displayable_operation_date": "23/09/21",
        "user_id": 3,
        "has_parent": false,
        "has_children": false,
        "is_not_editable": null,
        "is_affected": true
    },
    "invoice": {
        "id": 416,
        "index": 416,
        "label": null,
        "type": "achat",
        "amount": null,
        "amount_with_vat": null,
        "vat": null,
        "vat_value": null,
        "reference": "416",
        "comment": null,
        "operation_date": "2022-03-02 11:13:02",
        "displayable_operation_date": "02/03/2022",
        "created_at": "2022-03-02 11:13:02",
        "affectation_status": true,
        "paid_amount": 0,
        "receipt_path": "/storage/invoices/Debit-621f513e8982a.png",
        "user_id": 3
    },
    "affectation": {
        "id": 30,
        "created_at": "2022-03-02 11:13:02",
        "display_created_at": "02/03/2022",
        "comment": "Comment.. TEST"
    }
}
```

#### 5. Requête échouée (Code: 4xx)

```json
{
    "message": "Ce(tte) affectation n'existe pas."
}
```