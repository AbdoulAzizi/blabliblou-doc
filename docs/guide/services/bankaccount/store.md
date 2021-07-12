# Ressource : Ajout d'un Compte Bancaire

---

## 1. Description de la Resource

Cette ressource permet d'ajouter un compte bancaire pour un utilisateur.

## 2. URL et Méthode d'accès

Pour ajouter un compte bancaire pour un utilisateur quelconque, vous faites appel à l'url suivante:

```
url: /bank_account
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de la récupération des comptes bancaires qui sont définis sur la section suivante : [Paramètres](/guide/services/bankaccount/retrieve#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 64,
  "name": "Banque Populaire",
  "status": "enabled",
  "created_at": "2021-07-12 16:14:15",
  "code": "53534234",
  "address": "Boulevard Abdelkrim el khattabi, apt. 5",
  "iban": null,
  "bic": null,
  "user_id": 1
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Quand vous ne fournissez pas le nom de la banque par exemple, vous aurez un message de type:

```json
{
  "name": "Cette valeur ne doit pas être vide."
}
```
