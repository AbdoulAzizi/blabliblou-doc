# Ressource : Mis à jour d'une transaction

---

### 1.1. Description de la Resource

Cette ressource permet de mettre à jour une transaction.

### 1.2. URL et Méthode d'accès

Pour mettre à jour une transaction, vous faites appel à l'url suivante:

```
url: /transaction/id
id = l'identifiant de la transaction.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

### 1.3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'enregistrement d'une transaction qui sont définis dans la section suivante : [Paramètres](/guide/services/common/subcategory/store.md#_3-parametres)

### 1.4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 6719,
  "label": "Some test5",
  "reference": "Gdte35B",
  "type": "recette",
  "sub_category_id": null,
  "vat_blocked": true,
  "amount": 1000,
  "amount_with_vat": 1200,
  "vat": "20",
  "vat_value": 2002,
  "code_fiscal": "206000",
  "bank_id": 27,
  "created_at": "2021-08-03 17:38:00",
  "operation_date": "2021-01-20 00:00:00",
  "debit": "0.00000",
  "credit": "4.10000"
}
```

### 1.5. Cas d'échec d'une requête

En cas d'échec, Si par exemple la transaction n'existe pas, vous aurez un message de type:

```json
{
  "error": "Ce(tte) transaction n'existe pas."
}
```


<!--  -->


## 2. Bloquer la modification des transactions (opérations bancaires)
### 2.1. Description de la Resource

Le blockage de modification, ne bloque que l'utilisateur client de les modifier

### 2.2. URL et Méthode d'accès


```
url: /transactions/block
```

::: danger Rappel
Méthode **`POST`**
:::

### 2.3. Paramètres

| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| transactions_id | array | Obligatoire | Les IDs des transactions à supperimer |

#### exemple
```json
{
    "transactions_id": [
        7, 16
    ]
}
```

### 2.4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "message": "Votre opération a été traité avec succès."
}
```

### 2.5. Cas d'échec d'une requête

```json
{
    "message": "Aucun resultat n'est trouvé."
}
```
