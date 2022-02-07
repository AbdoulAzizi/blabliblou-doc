# Ressource : Récupération des Affectaions d'une opération ou facture donnée

---

#### 1. Description de la resource

Récupérer les affectations d'une opération bancaire ou facture donné

#### 2. La route
```
url: /affectation?transaction_id=&include[]=
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
        "id": 7,
        "label": "Test7",
        "sub_category": {
            "display_name": "Autre frais d’intérimaire_2 category 1",
            ...
        },
        "vat_blocked": true,
        ...
        "has_parent": false,
        "has_children": false
    },
    "affectations": [
        {
            "id": 14,
            "created_at": "2021-12-28 18:48:55",
            "display_created_at": "28/12/2021",
            "comment": "Comment.. TEST",
            "invoice": {
                "id": 383,
                ...
            }
        },
        {
            "id": 15,
            "created_at": "2021-12-28 18:49:23",
            "display_created_at": "28/12/2021",
            "comment": "Comment.. TEST",
            "invoice": {
                "id": 385,
                ...
            }
        },
        ...
    ]
}
```

__1. Avec invoice_id__

``` JSON
{
    "affectation": {
        "id": 6,
        "created_at": "2021-12-08 13:33:05",
        "display_created_at": "08/12/2021",
        "comment": "Comment.."
    },
    "invoice": {
        "id": 399,
        "index": 399,
        "label": null,
        ...
    },
    "transaction": {
        "id": 9,
        "label": "Test7",
        ...
        "sub_category": {
            "display_name": "Autre frais d’intérimaire_2 category 1",
            ...
        },
        "vat_blocked": true,
        ...
        "is_not_editable": null
    }
}
```



#### 5. Requête échouée (Code: 4xx)

```json
{
    "transaction_id": "Ce champ est obligatoire quand invoice_id est absent."
}
```