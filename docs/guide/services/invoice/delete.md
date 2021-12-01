# Ressource : Suppression d'une facture

## 1. Description de la Resource

Cette ressource permet de supprimer une facture existante pour un utilisateur quelconque .

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice/id
id = l'identifiant de la facture.
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
  "message": "ce(tte) facture a été supprimé avec succès."
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, lorsque par exemple la facture que vous voulez supprimer n'existe pas , vous aurez un message de type:

```json
{
  "id": "Ce(tte) facture n'exist(e) pas."
}
```

Ou lorsque vous n'avez pas les droits nécessaires pour supprimer une facture, un message s'affiche vous déclarant :

```json
{
  "error": "Vous n'avez pas la permission de supprimer cette facture"
}
```
