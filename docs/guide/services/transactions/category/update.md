# Ressource : Mis à jour des catégories

---

## 1. Description de la Resource

Cette ressource permet d'enregistrer une catégorie.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /category/id
id = l'identifiant de la catégorie
```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'enregistrement d'une catégorie qui sont définis dans la section suivante : [Paramètres](/guide/services/transactions/category/store.md#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "display_name": "Achat de matiere premieress",
  "status": "disabled",
  "slug": "Achat-de-matiere-premieress",
  "id": 1,
  "created_at": "2021-07-05 10:21:53"
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, quand vous renseignez un **slug** dejà utilisé, vous aurez un message de type:

```json
{
  "slug": "Cette valeur est déjà utilisée."
}
```

Ou quand vous cherchez une catégorie qui n'existe pas, vous un message ce genre:

```json
{
  "id": "Ce(tte) categorie n'exist(e) pas."
}
```
