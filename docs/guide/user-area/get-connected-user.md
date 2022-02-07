<meta charset="utf-8"/>

### Récupération de l'utilisateur connecté:

<br />

#### 1. Resource description

Cette ressource permet de récupérer les données de l'utilisateur connecté,

#### 2. La route
```
url: /user
```

::: warning Rappel
Methode:  `GET`
:::

<br />

#### 3. Requête réussie (Code: 200)


``` JSON
{
    "id": 25,
    "reference": "C.211013.25",
    "created_at": "2021-10-13",
    "creation_date": "2020-11-16",
    "readable_created_at": "Mercredi 13/10/2021 10H02",
    "phone": "9126690412",
    "email": "abdelilah.dev@wobyweb.com",
    "display_name": "ABDELILAH Devi.",
    "username": "abdelilah.dev@wobyweb.com",
    "status": "OFFRE",
    "role": "admin_p",
    "profile": {
        "id": 33,
        "entry_date": "2021-09-01",
        "exercice_entry_date": "2021-10-01",
        "exercice_date": "2021-10-01",
        "mail_address": "abdelilah.dev@wobyweb.com",
        "name": "test",
        "business_name": "test",
        "phone": "2126690412",
        "client_status": "SARL",
        "siret": "6GDERST",
        "address": {
            "num": "4",
            "street": "Laadir, Ikram",
            "comp": "Nouakchoute",
            "code": "16200",
            "ville": "Ouazzane"
        },
        "website": "https://bbb-link.com",
        "comment": "test",
        "capital": "9.00",
        "tax_regime": "100",
        "tax_periode": "testt",
        "tax_system": "M",
        "income_tax": "IR",
        "last_balance_sheet_entry": "testtt",
        "user_id": 25
    }
}
```
