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

L'accès aux données de cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre    |    Type     | Règle de validation                       |                     Description                      |
| ------------ | :---------: | ----------------------------------------- | :--------------------------------------------------: |
| category_id  |     int     | Obligatoire                               |             L'id de la Catégorie parente             |
| created_at   |  datetime   | Optionnel                                 |                   Date de création                   |
| slug         |   string    | Optionnel                                 | créé/généré à partir du nom à afficher (displayname) |
| display_name |   string    | Obligatoire                               |                    Nom à afficher                    |
| status       |   string    | Valeurs à choisir : **enabled, disabled** |                      le statut                       |
| transactions | Transaction | Obligatoire                               |                    La transaction                    |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "display_name": "Achat de premiere",
  "status": "enabled",
  "slug": "Achat-de-premiere",
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

## 5. En cas d'échec de la requête

En cas d'échec, Si par exemple la catégorie parente n'existe pas, vous aurez un message de type:

```json
{
  "category_id": "La valeur est incorrecte."
}
```
