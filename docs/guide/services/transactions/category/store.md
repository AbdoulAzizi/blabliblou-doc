# Ressource : Ajout d'une catégorie

---

## 1. Description de la Resource

Cette ressource permet d'enregistrer une catégorie.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /category
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre    |   Type   | Règle de validation                                         |                     Description                      |
| ------------ | :------: | ----------------------------------------------------------- | :--------------------------------------------------: |
| created_at   | datetime | Obligatoire                                                 |                   Date de création                   |
| slug         |  string  | Optionnel                                                   | créé/généré à partir du nom à afficher (displayname) |
| display_name |  string  | Obligatoire, min=3, max=200                                 |                    Nom à afficher                    |
| status       |  string  | Obligatoire, <br> Valeurs à choisir : **enabled, disabled** |              le status de la catégorie               |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "display_name": "Vente-de produit --",
  "status": "enabled",
  "slug": "vente-dun-produit1",
  "id": 4,
  "created_at": "2021-06-28 14:47:51"
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, quand vous renseignez un **slug** dejà utilisé, vous aurez un message de type:

```json
{
  "slug": "Cette valeur est déjà utilisée."
}
```
