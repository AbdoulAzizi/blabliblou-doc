# Ressource : Les 4 indicateurs globaux

## 1. Description de la Resource

Cette ressource permette la récupération des calculs succints des indicateurs numériques


### 1 Endpoint

```
url: /stats/dashboard?{start_at}&{end_at}&{client_id}&{bank_id}
```

::: warning Rappel
Méthode: **`GET`**
:::

### 2 Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| start_at | datetime | Obligatoire | Début de period d'exercice |
| end_at | datetime | Obligatoire | Fin de period d'exercice |
| client_id | integer | Optionnel | L'ID du client propriétaire |
| bank_id | integer | Obligatoire | L'ID du compte bancaire concerné |

### 3 Requête réussie

```json
{
    "filters": {
        "start_at": "2021-01-01",
        "end_at": "2021-12-31",
        "user": "3"
    },
    "treasury": {
        "current": 113940,
        "expected": 152460,
        "today_balance": 13200
    },
    "frais": 15300,
    "frais_estimee": 13600,
    "frais_prevu": 2640,
    "previous_frais": 8000,
    "ca_encaissee": 3000,
    "ca_estimee": 11700,
    "ca_prevu": 155100,
    "previous_ca": 2000
}
```

### 4.1 Requête échouée

* Compte du client incomplet

```json
{
    "message": "Les données complémentaires de ce compte ne sont pas encore définies."
}
```

### 4.2 Requête échouée

* Erreurs de validatio

```json
{
    "start_at": "Ce champ est obligatoire.",
    "end_at": "Ce champ est obligatoire.",
    "bank_id": "Ce champ est obligatoire."
}
```
