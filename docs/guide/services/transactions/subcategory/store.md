# Ressource : Ajout d'une sous-catégorie

---

## 1. Description de la Resource

Cette ressource permet d'ajouter une sous-catégorie.

## 2. URL et Méthode d'accès

Pour ajouter une sous-catégorie, vous faites appel à l'url suivante:

```
url: /sous-category
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre    |    Type     | Règle de validation                       |                     Description                      |
| ------------ | :---------: | ----------------------------------------- | :--------------------------------------------------: |
| category     |  Category   | Obligatoire                               |                 La Catégorie parente                 |
| createdAt    |  datetime   | Optionnel                                 |                   Date de création                   |
| slug         |   string    | Optionnel                                 | créé/généré à partir du nom à afficher (displayname) |
| displayName  |   string    | Obligatoire                               |                    Nom à afficher                    |
| status       |   string    | Valeurs à choisir : **enabled, disabled** |                      le statut                       |
| transactions | Transaction | Obligatoire                               |                    La transaction                    |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json

```

## 5. Cas d'échec d'une requête

En cas d'échec, vous aurez un message de type:

```json

```
