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
Utiliser les paramètres ci-dessous pour filtrer le resultat renvoyé

| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| label | string | Optionnel, min=3 | C’est le libellé de l’opération bancaire |
| reference | string | Optionnel, min=2, max=100 | La réference |
| type | string | Optionnel, Valeurs admises:<br> **depense, recette** | Dépense ou recette |
| amount | decimal | Optionnel | Le montant |
| amount_with_vat | decimal | Optionnel | Le montant avec la TVA |
| vat | decimal | Optionnel | C’est le taux de TVA associée à cet opération bancaire |
| vat_value | decimal | Optionnel | la valeur de la TVA |
| vat_blocked | boolean | Valeurs à choisir : **true, false** | Indique si le taux de TVA peut être modifiable ou pas |
| code_fiscal | string | Optionnel, <br> Valeurs possibles d'affectation: **["206000", "211000", "213000", "215400", "218000", "218200", "218300", "218400", "271000", "275000", "421000", 'A terminer']** | C’est le code fiscal correspondant |
| bank_id | BankAccount | Optionnel | L'ID du compte bancaire |
| parent_id | BankAccount | Optionnel | L'ID d'opération mère s'il en a (cas des opérationn déroulée) |
| sub_category_id | SubCategory| Optionnel| L'ID de la sous catégorie|
| client_id | User| Optionnel| L'ID de l'utilisateur client|
| id | User| Optionnel| Si ce champ est fourni, il va écraser les autres, et la methode va chercher l'opération qui correspond à cet ID|
| include | User| Optionnel| Les objects relatifs, valeurs possibles: **children**"|


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
