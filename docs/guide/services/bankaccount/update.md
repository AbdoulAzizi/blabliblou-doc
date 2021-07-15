# Ressource : Mis àjour d'un Compte Bancaire

---

## 1. Description de la Resource

Cette ressource permet de mettre à jour un compte bancaire existant pour un utilisateur donné.

## 2. URL et Méthode d'accès

Pour mettre à jour un compte bancaire pour un utilisateur quelconque, vous faites appel à l'url suivante:

```
url: /bank_account/id
id= l'identifiant du compte bancaire.
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`PATCH`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'ajout d'un compte bancaire qui sont définis dans la section suivante : [Paramètres](/guide/services/bankaccount/store#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 61,
  "name": "Banque almaghreb",
  "status": "enabled",
  "created_at": "2021-07-12 14:53:22",
  "code": "111",
  "address": "Boulevard Abdelkrim el khattabi, rabat agdal",
  "iban": null,
  "bic": null,
  "user_id": 1
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Quand vous fournissez un id qui n'existe pas dans la base de donnée, vous aurez un message de type:

```json
{
  "id": "Ce compte bancaire n'exist pas."
}
```
