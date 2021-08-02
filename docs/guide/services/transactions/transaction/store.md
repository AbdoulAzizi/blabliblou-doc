# Ressource : Ajout d'une transaction

---

## 1. Description de la Resource

Cette ressource permet d'enregistrer une transaction.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /transaction
```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| createdAt | datetime | Optionnel | Date de création |
| label | string | Obligatoire, min=3, max=200 | C’est le libellé de l’affectation à choisir |
| reference | string | Obligatoire, min=2, max=100 | La réference |
| subLabel | string | Optionnel | Sous-libellé |
| type | string | Obligatoire, Valeurs admises:<br> **depense, recette** | Dépense ou recette |
| categoryId | integer | A condition que: la table **category** et la colonne **id** existent. | Catégorie de l’affectation |
| vatBlocked | boolean | Valeurs à choisir : **true, false** | Indique si le taux de TVA peut être modifiable ou pas |
| amount | decimal | Obligatoire | Le montant |
| amountWithVat | decimal | Obligatoire | Le montant avec la TVA |
| vat | decimal | Obligatoire | C’est le taux de TVA associée à cette affectation |
| vatValue | decimal | Obligatoire | la valeur de la TVA |
| codeFiscal | string | Obligatoire, <br> Valeurs possibles d'affectation: **["206000", "211000", "213000", "215400", "218000", "218200", "218300", "218400", "271000", "275000", "421000", 'A terminer']** | C’est le code fiscal correspondant |
| bank | BankAccount | Obligatoire | Référence le id du compte bancaire |
|user | User| Obligatoire| Référence le id de l'utilisateur|
|subCategory | SubCategory| Optionnel| Référence le id de la sous catégorie|

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
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
    "vat": "20",
    "vat_value": 200,
    "code_fiscal": "206000",
    "bank_id": 22,
    "created_at": "2021-08-02 10:59:24"
}
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple lorsque le paramètre **`reference`** n'est pas fournit, vous aurez un message de type:

```json
{
  "reference": "Cette valeur ne doit pas être vide."
}
```
