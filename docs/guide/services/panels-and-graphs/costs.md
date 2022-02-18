# Ressource : Détails des Frais

## 1. Description de la Resource

Frais HT par période


### 1 Endpoint

```
url: /stats/dashboard/frais-periods?{start_at}&{end_at}&{client_id}&{bank_id}
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
    "frais_ht_payes": {
        "2021-01": 0,
        "2021-02": 8300,
        "2021-03": 0,
        "2021-04": 0,
        "2021-05": 0,
        "2021-06": 7000,
        "2021-07": 0,
        "2021-08": 0,
        "2021-09": 0,
        "2021-10": 0,
        "2021-11": 0
    },
    "frais_ht_prevu": {
        "2021-01": 440,
        "2021-02": 440,
        "2021-03": 440,
        "2021-04": 440,
        "2021-05": 440,
        "2021-06": 440,
        "2021-07": 440,
        "2021-08": 440,
        "2021-09": 440,
        "2021-10": 440,
        "2021-11": 440
    },
    "frais_ht_estime": {
        "2021-01": 1000,
        "2021-02": 0,
        "2021-03": 0,
        "2021-04": 1300,
        "2021-05": 1400,
        "2021-06": 0,
        "2021-07": 1600,
        "2021-08": 4000,
        "2021-09": 0,
        "2021-10": 2000,
        "2021-11": 0
    },
    "frais_ht_encaisse": {
        "2021-01": 1100,
        "2021-02": 0,
        "2021-03": 0,
        "2021-04": 0,
        "2021-05": 0,
        "2021-06": 0,
        "2021-07": 1760,
        "2021-08": 4400,
        "2021-09": 0,
        "2021-10": 0,
        "2021-11": 0
    },
    "previous_frais_ht": {
        "2020-01": 0,
        "2020-02": 8000,
        "2020-03": 0,
        "2020-04": 0,
        "2020-05": 0,
        "2020-06": 0,
        "2020-07": 0,
        "2020-08": 0,
        "2020-09": 0,
        "2020-10": 0,
        "2020-11": 1000,
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
