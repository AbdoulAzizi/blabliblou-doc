# Ressource : Chiffres d'affaires

## 1. Description de la Resource

Recupération des Chiffres d'affaires

### 1 Endpoint

```
url: /api/stats/turnover?{client_id}
```

::: danger Rappel
Méthode: **`GET`**
:::

### 2 Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| client_id | integer | Optionnel | L'ID du client (Valeur par défaut: utilisateur connecté) |
| start_at | datetime | Obligatoire | Date d'opération >= cette valeur |
| end_at | datetime | Obligatoire | Date d'opération <= cette valeur |

### 3 Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "ca_facturee": 15040,
    "ca_encaissee": 13000
}
```

### 4 Requête échouée

```json
{
    "start_at": "Ce champ est obligatoire.",
    "end_at": "Ce champ est obligatoire."
}
```