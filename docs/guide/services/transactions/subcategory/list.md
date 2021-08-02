# Ressource : Répération des sous-catégories

---

## 1. Description de la Resource

Cette ressource permet de récupérer une ou l'ensemble des sous-catégories.

## 2. URL et Méthode d'accès

Pour récupérer les sous-catégories, vous faites appel à l'url suivante:

```
url: /sous-category
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Cette ressource ne possède pas de paramètres.

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
  {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "Achat-de-premiere",
    "id": 1,
    "category": {
      "display_name": "Achat de premiere",
      "status": "enabled",
      "slug": "sssd",
      "id": 2,
      "created_at": "2021-07-05 10:22:49"
    },
    "created_at": "2021-07-15 10:15:22"
  },
  {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "Achat-de-premiere",
    "id": 2,
    "category": {
      "display_name": "Some test",
      "status": "enabled",
      "slug": "Some-test",
      "id": 4,
      "created_at": "2021-07-13 11:53:11"
    },
    "created_at": "2021-07-15 10:20:30"
  },
  .
  .
  .
  {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "Achat-de-premiere",
    "id": 3,
    "category": {
      "display_name": "Achat de premiere",
      "status": "enabled",
      "slug": "Achat-de-premiere",
      "id": 6,
      "created_at": "2021-07-13 17:10:36"
    },
    "created_at": "2021-07-15 10:20:37"
  }
]
```

## 5. Cas d'échec d'une requête

En cas d'échec, Si par exemple vous essayez d'acceder à cette ressource via la méthode `PUT`, vous aurez un message de type:

```json
{
  "error": "No route found for \"PUT /api/sub-category\": Method Not Allowed (Allow: POST, GET)"
}
```
