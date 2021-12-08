# Ressource : Supression d'une sous-catégorie

---

## 1. Description de la Resource

Cette ressource permet de supprimer une sous-catégorie.

## 2. URL et Méthode d'accès

Pour supprimer une sous-catégorie, vous faites appel à l'url suivante:

```
url: /sous-category/id
id = l'identifiant de la sous catégorie.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'enregistrement des catégories qui sont définis sur la section suivante : [Paramètres](/guide/services/common/subcategory/store.md#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "message": "ce(tte) sous catégorie(type) a été supprimé(e) avec succès."
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Si par exemple la sous catégorie n'existe pas, vous aurez un message de type:

```json
{
  "message": "Ce(tte) sous catégorie(type) n'exist(e) pas."
}
```
