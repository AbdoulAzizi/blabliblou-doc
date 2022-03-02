# Ressource : Ajout d'une Affectation

---

## 1. Description de la Resource

Cette ressource permet de créer une nouvelle Affectation.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /affectation
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ------------------------------- | :--------- |
| comment| string | Optionnel| Une description ou un commentaire |
| label| string | Optionnel| Intitulé de l'opération bancaire |
| reference| string | Optionnel| Ref de l'opération bancaire |
| amount| float| Optionnel | Montant HT d'opération bancaire|
| amount_with_vat| float| Optionnel | Montant TTC d'opération bancaire|
| vat| float| Optionnel | TVA d'opération bancaire|
| vat_value| float| Optionnel | Valeur TVA d'opération bancaire|
| vat_blocked| boolean| Optionnel | Si l'opération bancaire est modifiable par le client ou non |
| parent_id| int | Optionnel | ID d'opération bancaire parente si c'est déroulée |
| sub_category_id| integer | Opeionnel | l'identifiant de la sou catégorie |
| transaction_id| Transaction (opération bancaire)|obligatoire | l'identifiant de la transaction|
| invoice_id| Invoice (Facture)| obligatoire| l'identifiant de la facture |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 88,
  "created_at": "2021-08-03 15:34:41",
  "status": "disabled",
  "transaction": {
    "id": 6360,
    "label": "Some test5",
    "reference": "GHE",
    "type": "recette",
    "sub_category_id": {
      "display_name": "Achat de premiere",
      "status": "enabled",
      "slug": "Achat-de-premiere",
      "id": 5,
      "category": {
        "display_name": "Achat de premiere",
        "status": "enabled",
        "slug": "Achat-de-premiere",
        "id": 6,
        "created_at": "2021-07-13 17:10:36"
      },
      "created_at": "2021-07-19 17:53:50"
    },
    "vat_blocked": true,
    "amount": 1000,
    "amount_with_vat": 1200,
    "vat": "20.0",
    "vat_value": 200,
    "code_fiscal": "206000",
    "bank_id": 22,
    "created_at": "2021-08-03 12:28:47",
    "operation_date": "2013-03-02 00:00:00",
    "debit": "2.30000",
    "credit": "23.30000"
  },
  "invoice": {
    "id": 69,
    "label": "Achat de matiere premiere",
    "type": "frais",
    "amount": "1000.00",
    "amount_with_vat": "1200.50",
    "vat": "0.00",
    "vat_value": "0.00",
    "reference": "5EFDRE63x",
    "comment": "Ceci est un joli commentaire",
    "operation_date": "2021-06-18 20:21:00",
    "created_at": "2021-07-12 13:52:02",
    "status": false,
    "receipt_path": null,
    "user_id": 1
  }
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple lorsque le paramètre **`transaction_id`** n'est pas fournit, vous aurez un message de type:

```json
{
  "transaction_id": "Cette valeur est incorrecte, veulliez choisir une valeur correcte!"
}
```
