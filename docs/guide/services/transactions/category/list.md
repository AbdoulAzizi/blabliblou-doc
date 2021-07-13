# Ressource : Récupération des catégories

---

## 1. Description de la Resource

Cette ressource permet de lister les catégories enregistrées dans la base de données.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /category

```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'enregistrement des catégories qui sont définis sur la section suivante : [Paramètres](/guide/services/transactions/category/store.md#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "Achat-de-premiere",
    "id": 1,
    "created_at": "2021-07-05 10:21:53"
    },
    {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "sssd",
    "id": 2,
    "created_at": "2021-07-05 10:22:49"
    },

    .
    .
    .

    {
        "display_name": "Some test",
        "status": "enabled",
        "slug": "Some-test",
        "id": 5,
        "created_at": "2021-07-13 12:05:24"
    }

]

```

## 5. Cas d'échec d'une requête

En cas d'échec, quand vous renseignez un **slug** dejà utilisé, vous aurez un message de type:

```json
{
  "slug": "Cette valeur est déjà utilisée."
}
```
