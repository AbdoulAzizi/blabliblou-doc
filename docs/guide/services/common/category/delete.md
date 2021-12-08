# Ressource : Suppression d'une catégorie

---

## 1. Description de la Resource

Cette ressource permet la suppression d'une catégorie existante.

## 2. URL et Méthode d'accès

Pour supprimer une catégorie quelconque, vous faites appel à l'url suivante:

```
url: /category/id
id= l'identifiant de la catégorie.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`DELETE`**
:::

## 3. Paramètres

Cette ressource n'admet pas de paramètres.

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "message": "ce(tte) categorie a été supprimé(e) avec succès."
}
```

## 5. Cas d'échec de requête

Quand vous fournissez un **`id`** qui n'existe pas dans la base de donnée, vous aurez un message de type:

```json
{
  "id": "Ce(tte) categorie n'exist(e) pas."
}
```
