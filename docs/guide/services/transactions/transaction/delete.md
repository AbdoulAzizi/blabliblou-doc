# Ressource : Suppression d'une transaction

---

## 1. Description de la Resource

Cette ressource permet la suppression d'une transaction existante.

## 2. URL et Méthode d'accès

Pour supprimer une catégorie quelconque, vous faites appel à l'url suivante:

```
url: /transaction/id
id= l'identifiant de la transaction.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`DELETE`**
:::

## 3. Paramètres

Cette ressource ne possède pas de paramètres.

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "message": "Votre opération a été traité avec succès."
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Quand vous fournissez un id qui n'existe pas dans la base de donnée, vous aurez un message de type:

```json
{
  "id": "Ce(tte) transaction n'existe pas."
}
```
