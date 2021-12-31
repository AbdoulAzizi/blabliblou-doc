# Ressource : Suppression d'une ou plusieurs transactions

---

## 1. Une seule transaction (opération bancaire)
### 1.1. Description de la Resource

Cette ressource permet la suppression d'une transaction existante.

### 1.2. URL et Méthode d'accès

Pour supprimer une transaction quelconque, vous faites appel à l'url suivante:

```
url: /transaction/id
id= l'identifiant de la transaction.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`DELETE`**
:::

### 1.3. Paramètres

Cette ressource ne possède pas de paramètres.

### 1.4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "message": "Votre opération a été traité avec succès."
}
```

### 1.5. Cas d'échec d'une requête

En cas d'échec, Quand vous fournissez un id qui n'existe pas dans la base de donnée, vous aurez un message de type:

```json
{
  "id": "Ce(tte) transaction n'existe pas."
}
```



## 2. Plusieurs transactions (opérations bancaires)
### 2.1. Description de la Resource

Même que celle ci-dessus avec possibilité de plusieurs lignes dans une même requête.

::: danger Attention
La suppression des opérations bancaires, entraine la suppression de toutes leurs affectations!
:::


### 2.2. URL et Méthode d'accès


```
url: /transaction
```

::: danger Rappel
Méthode **`DELETE`**
:::

### 2.3. Paramètres

| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| transactions_id | array | Obligatoire | Les IDs des transactions à supperimer |

#### exemple
```json
{
    "transactions_id": [
        7, 15
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
