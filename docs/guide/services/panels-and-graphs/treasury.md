# Ressource : Détails trésorerie

## 1. Description de la Resource

Evolution de trésorerie par période


### 1 Endpoint

```
url: /stats/dashboard/treasury?{start_at}&{end_at}&{client_id}&{bank_id}
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
    "treasury": {
        "2021-01": 120210,
        "2021-02": 12121,
        "2021-03": 12310,
        "2021-04": 121120,
        "2021-05": 151120,
        "2021-06": 14120,
        "2021-07": 11220,
        "2021-08": 4120,
        "2021-09": 11310,
        "2021-10": 10610,
        "2021-11": 94610
    },
    "previous_treasury": {
        "2021-01": 125210,
        "2021-02": 121610,
        "2021-03": 132610,
        "2021-04": 121610,
        "2021-05": 121610,
        "2021-06": 114610,
        "2021-07": 164610,
        "2021-08": 115610,
        "2021-09": 114410,
        "2021-10": 114630,
        "2021-11": 114620
    },
    "expected_treasury": {
        "2021-01": 35210,
        "2021-02": 24610,
        "2021-03": 21510,
        "2021-04": 21660,
        "2021-05": 21617,
        "2021-06": 14690,
        "2021-07": 14010,
        "2021-08": 11610,
        "2021-09": 15610,
        "2021-10": 19610,
        "2021-11": 14430
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
