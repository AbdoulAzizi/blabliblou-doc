# Ressource : Récupération des Transactions

---

## 1. Description de la Resource

Cette ressource permet de lister les transactions enregistrées dans la base de données.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /transaction

```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Cette ressource ne possède pas de paramètres.

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
     {
        "id": 279,
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
        "created_at": "2021-08-02 10:59:24"
    },

    .
    .
    .

     {
        "id": 277,
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
        "created_at": "2021-07-30 11:23:27"
    }

]

```

## 5. Cas d'échec d'une requête

En cas d'échec, Si par exemple vous essayez d'acceder à cette ressource via la méthode `PUT`, vous aurez un message de type:

```json
{
  "error": "No route found for \"PUT /api/transaction\": Method Not Allowed (Allow: POST, GET)"
}
```
