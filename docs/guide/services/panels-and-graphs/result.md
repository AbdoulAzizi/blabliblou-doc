# Ressource : Détails resultat

## 1. Description de la Resource

Résultat HT par période


### 1 Endpoint

```
url: /stats/dashboard/resultat?{start_at}&{end_at}&{client_id}&{bank_id}
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
    "resultat": {
        "ht_encaisse": {
            "2021-01": -1100,
            "2021-02": 1210,
            "2021-03": 0,
            "2021-04": 0,
            "2021-05": 0,
            "2021-06": 0,
            "2021-07": -1760,
            "2021-08": 8470,
            "2021-09": 1980,
            "2021-10": 0,
            "2021-11": 0
        },
        "ht_prevu": {
            "2021-01": 43560,
            "2021-02": 43560,
            "2021-03": 43560,
            "2021-04": 43560,
            "2021-05": 43560,
            "2021-06": 43560,
            "2021-07": 43560,
            "2021-08": 0,
            "2021-09": 0,
            "2021-10": 0,
            "2021-11": 0
        },
        "ht_estime": {
            "2021-01": -1000,
            "2021-02": 1100,
            "2021-03": 1200,
            "2021-04": -1300,
            "2021-05": -1400,
            "2021-06": 1500,
            "2021-07": -1600,
            "2021-08": 7700,
            "2021-09": 1800,
            "2021-10": -2000,
            "2021-11": 3000
        },
        "previous_ht": {
            "2020-01": 1000,
            "2020-02": -8000,
            "2020-03": 0,
            "2020-04": 0,
            "2020-05": 0,
            "2020-06": 0,
            "2020-07": 0,
            "2020-08": 0,
            "2020-09": 0,
            "2020-10": 1210,
            "2020-11": -1000,
            "2020-12": 0
        }
    }
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
