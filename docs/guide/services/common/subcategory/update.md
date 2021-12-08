# Ressource : Mis à jour d'une sous-catégorie

---

## 1. Description de la Resource

Cette ressource permet de mettre à jour une sous-catégorie.

## 2. URL et Méthode d'accès

Pour mettre à jour une sous-catégorie, vous faites appel à l'url suivante:

```
url: /sous-category/id
id = l'identifiant de la sous catégorie.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'enregistrement d'une sous catégorie qui sont définis dans la section suivante : [Paramètres](/guide/services/transactions/subcategory/store.md#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "display_name": "Achat de matiere premiere",
  "status": "disabled",
  "slug": "Achat-de-matiere-premiere",
  "id": 1,
  "category": {
    "display_name": "Achat de premiere",
    "status": "enabled",
    "slug": "sssd",
    "id": 2,
    "created_at": "2021-07-05 10:22:49"
  },
  "created_at": "2021-07-15 10:15:22"
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Si par exemple la sous catégorie n'existe pas, vous aurez un message de type:

```json
{
  "message": "Ce(tte) sous catégorie(type) n'exist(e) pas."
}
```
