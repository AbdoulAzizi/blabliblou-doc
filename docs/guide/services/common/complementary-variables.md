# Ressource : Variables complémetaire d'un client

## 1. Description de la Resource

RENSEIGNEMENT DES VARIABLES COMPLEMENTAIRES:
Les variables complémentaires nécessaires à la mise à jour des indicateurs ESTIMES du bandeau des pages PAGE_MA_GESTION et PAGE_MES_SIMUS


## 1 Renseignemet des variables

### 1.1 Endpoint

```
url: /user/{cliennt_id}}/set-complementary-variable
```

::: danger Rappel
Méthode: **`POST`**
:::

### 1.2 Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| client_id | integer | Obligatoire | L'ID du client dont lequel nous renseignons la variable |
| name | string | Obligatoire | Nom de la variable, valeurs permises (__`stock`__, __`vente_non_facturee`__, __`remuneration_actuelle`__, __`dette_sociale_actuelle`__, __`remuneration_estimee`__, __`dette_sociale_estimee`__) |
| value | string | Obligatoire | Valeur de la variable |
| period_from | datetime | Obligatoire | Début de period d'utilisation de la variable |
| period_to | datetime | Obligatoire | Fin de period d'utilisation de la variable |

### 1.3 Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "id": 16,
    "name": "stock",
    "value": "25",
    "period_from": "01/01/2025",
    "period_to": "12/31/2025",
    "created_at": "12/17/2021 16:59:58",
    "updated_at": null
}
```

### 1.4 Requête échouée

```json
{
    "name": "Ce champ est obligatoire.",
    "value": "Ce champ est obligatoire.",
    "period_from": "Ce champ est obligatoire.",
    "period_to": "Ce champ est obligatoire."
}
```

## 2 Suppression des variables

### 2.1 Endpoint

```
url: /user/delete-complementary-variable/{variable_id}
```

::: danger Rappel
Méthode: **`DELETE`**
:::

### 2.2 Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| variable_id | integer | Obligatoire | L'ID de la variable à supprimer |

### 2.3 Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "message": "Votre opération a été traitée avec succès."
}
```

### 1.4 Requête échouée

```json
{
    "message": "Ce(tte) variable complémentaire n'existe pas."
}
```