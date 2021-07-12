# Ressource : Suppression d'un Compte Bancaire

---

## 1. Description de la Resource

Cette ressource permet de supprimer un compte bancaire existant pour un utilisateur donné.

## 2. URL et Méthode d'accès

Pour supprimer un compte bancaire pour un utilisateur quelconque, vous faites appel à l'url suivante:

```
url: /bank_account/id
id= l'identifiant du compte bancaire.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`DELETE`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de la récupération des comptes bancaires qui sont définis sur la section suivante : [Paramètres](/guide/services/bankaccount/retrieve#_3-parametres)

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
  "id": "Ce(tte) compte bancaire n'exist(e) pas."
}
```
