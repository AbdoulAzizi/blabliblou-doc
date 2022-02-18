# Ressource : Détails Chiffre d'Affaire

## 1. Description de la Resource

Détails des chiffres d'affaires


### 1 Endpoint

```
url: /stats/dashboard/ca-periods?{start_at}&{end_at}&{client_id}&{bank_id}
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
    "ca_ht_encaisse": {
        "2021-01": 0,
        "2021-02": 1210,
        "2021-03": 0,
        "2021-04": 0,
        "2021-05": 0,
        "2021-06": 0,
        "2021-07": 0,
        "2021-08": 12870,
        "2021-09": 1980,
        "2021-10": 0,
        "2021-11": 0
    },
    "ca_ht_prevu": {
        "2021-01": 44000,
        "2021-02": 44000,
        "2021-03": 44000,
        "2021-04": 44000,
        "2021-05": 44000,
        "2021-06": 44000,
        "2021-07": 44000,
        "2021-08": 440,
        "2021-09": 440,
        "2021-10": 440,
        "2021-11": 440
    },
    "ca_ht_estime": {
        "2021-01": 0,
        "2021-02": 1100,
        "2021-03": 1200,
        "2021-04": 0,
        "2021-05": 0,
        "2021-06": 1500,
        "2021-07": 0,
        "2021-08": 11700,
        "2021-09": 1800,
        "2021-10": 0,
        "2021-11": 3000
    },
    "previous_ca_ht": {
        "2020-01": 1000,
        "2020-02": 0,
        "2020-03": 0,
        "2020-04": 0,
        "2020-05": 0,
        "2020-06": 0,
        "2020-07": 0,
        "2020-08": 0,
        "2020-09": 0,
        "2020-10": 1210,
        "2020-11": 0,
        "2020-12": 1000
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
