### Ressource : Affectation d'une facture à une opération bancaire

---

## 1. Description de la Resource

Associer une facture (pièce) existante sur mon stockage ou upload une nnouvelle pièce à une opération donnée

## 2. URL et Méthode d'accès

Pour achever cette association, appelez l'url suivante:

```
url: /api/transaction/{transaction_id}/assign
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ------------------------------- | :--------- |
| comment | string | Optionnel | Un commentaire ou une note sur l'affectation |
| label | string | Optionnel, min=3, max=200 | C’est le libellé de l’opération bancaire si l'utilisateur veut le modifier |
| reference | string | Optionnel, min=1, max=100 | La réference de l’opération bancaire si l'utilisateur veut le modifier |
| amount | decimal | Optionnel | Le montant de l’opération bancaire si l'utilisateur veut le modifier |
| amount_with_vat | decimal | Optionnel | Le montant avec la TVA de l’opération bancaire si l'utilisateur veut le modifier |
| vat | decimal | Optionnel | C’est le taux de TVA de l’opération bancaire si l'utilisateur veut le modifier |
| vat_value | decimal | Optionnel | la valeur de TVA de l’opération bancaire si l'utilisateur veut le modifier |
| vat_blocked | boolean | Optionnel | Indique si le taux de TVA de l'opération bancaire peut être modifiable ou pas |
| parent_id | integer | | Optionnel | Pour dérouler une opération bancaire |
|sub_category_id | SubCategory| Optionnel| L'id de la sous catégorie de l'opération bancaire|
| invoice_id| integer | Obligatoire si la pièce n'est pas fournie | l'ID de la facture |
| invoice_file | file (image) | La pièce à associer | Obligatoire si l'ID d'une pièce existante n'est pas fournie | La facture |


## 4. Requête réussie

Exemple d'une requête validée et executée avec succès:

```json
{
    "affectation": {
        "id": 10,
        "created_at": "2021-12-08 18:32:01",
        "display_created_at": "08/12/2021",
        "comment": "Comment.."
    },
    "transaction": {
        "id": 3,
        "sub_category": {
            "display_name": "Autre frais d’intérimaire_1",
            ...
            "category_id": 2,
        },
        "vat_blocked": true,
        ...
        "has_children": false
    },
    "invoice": {
        "id": 392,
        "label": "SERV BANCAIRES2",
        "type": "vente",
        ...
        "receipt_path": null,
        "user_id": 3
    }
}
```

## 5. Cas d'échec d'une requête

En cas d'échec

```json
{
    "sub_category_id": "Cette valeur est incorrecte, veulliez choisir une valeur correcte!",
    "invoice_file": "Ce champ est obligatoire."
}
```
