<meta charset="utf-8"/>

### Créer un nouveau client y compris les 

<br />

#### 1. Resource description

Cette ressource permet de creer un nouveau client avec tous ses données (y compris les gérants, salaries, compte bancaires).
Il faut noter que l'accès à cette ressource est limité aux Admins P!

#### 2. S'enregsitrer

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /client/create
```

::: danger Rappel
En utilisant la methode `POST`
:::

<br />

#### 3. Paramètres

Les diiferents parametres liées à cette ressource sont les suivants:
| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| entry_date | datetime | Obligatoire | Date d’entrée en tant que client Bla Bli Blou (donnée liée à celle du Num client) |
| exercise_entry_date | datetime | Obligatoire | Date de début du 1er exercice traité en mission comptable par Blabliblou |
| exercise_date | datetime | Optionnel | Date de clôture d’exercice comptable |
| client_status | string | Optionnel | Soit STATUT_MORAL ou STATUT_PHYSIQUE en gros, voilà les valeurs permises (SAS, SASU, EURL, SARL, SELARL, Micro, EI, EIRL)|
| password | string | Obligatoire | mot de passe client |
| client_name | string | Optionnel | Nom commercial de l’entreprise client |
| status | string | Optionnel | Son statut en interne qui doit etre l'une de ces valeurs (OFFRE, EN_COURS, RESILIE, RESILIE_BBB) |
| siret | string | Optionnel | Siret de l’entreprise |
| address.num | integer | Optionnel | Numéro de la rue |
| address.street | integer | Optionnel | Nom de rue |
| address.comp | string | Optionnel | Complément |
| address.code | c | Optionnel | Code postal  |
| address.ville | datetime | Optionnel | Ville de l’adresse |
| phone | datetime | Obligatoire, Unique | Numéro du tel |
| email | string | Obligatoire, Unique | Adresse e-mail |
| website | string | Optionnel | Siteweb |
| comment | string | Optionnel | Un commentaire ou description |
| creation_date | datetime | Optionnel | Date de création de la structure juridique |
| exercice_date | datetime | Optionnel | Date de clôture d’exercice comptable |
| capital | string | float | Capital social ou rien |
| tax_regime | string | Optionnel | Si franchise TVA, simplifié, Mini réel, Normal (FRANCHISE, SIMPLIFIE, MINI-REEL, NORMAL) |
| tax_periode | string | Optionnel | Si assujetti à la TVA, quelle fréquence paiement (Année, trim, mois) |
| tax_system | string | Optionnel | Régime fiscal (M = MICRO, RS = REEL SIMPLIFIE ou RN = REEL NORMAL) |
| income_tax | string | Optionnel | Impôts sur revenus ou Société |
| contract | string | Optionnel | Le contrat de l’offre souscrite, valeurs permises (BIC, BNC, SCI, MICRO) |
| client_email | email | Optionnel | Mail société |
| last_balance_sheet_entry | json | Obligatoire | Il s’agit d’une table de données des données du dernier Bilan du client servant à récupérer les infos n-1  |
| last_balance_sheet_entry.initial_treasury | float | Obligatoire | Trésorerie à la sortie du bilan (récupérée par dernier extrait de compte s’il s’agit du bilan de récup du client de son ancien cabinet) |
| last_balance_sheet_entry.delta_treasury | float | Obligatoire | C’est une donnée d’ajustement accessible uniquement par l’administrateur N ou P |
| employees | json | Optionnel | Les salaries du client  |
| employees.first_name | string | Optionnel | Prénom du salarie |
| employees.last_name | string | Optionnel | Nom du salarie |
| employees.address | string | Optionnel | Adresse |
| employees.reference | string | Optionnel | Reference |
| employees.email | email | Optionnel | Email |
| employees.phone | Numéro de tel | Optionnel | Numéro de tel |
| employees.status | string | Optionnel | Status du salarie |
| employees.birthdate | string | Optionnel | date de naissance |
| managers | json | Optionnel | Les gérant du client  |
| managers.first_name | string | Optionnel | Prénom du gérant |
| managers.last_name | string | Optionnel | Nom du gérant |
| managers.address | string | Optionnel | Adresse |
| managers.reference | string | Optionnel | Reference |
| managers.email | email | Optionnel | Email |
| managers.phone | Numéro de tel | Optionnel | Numéro de tel |
| managers.status | string | Optionnel | Status du gérant |
| managers.birthdate | string | Optionnel | date de naissance |
| bank_account | json | Optionnel | Les comptes bancaires du client  |
| bank_account.name | string | Optionnel | Libellé de la banque |
| bank_account.address | string | Optionnel | Adresse de la banque |
| bank_account.code | string | Optionnel | Code, numéro ou référence de la banque |
| bank_account.iban | string | Optionnel | IBAN de la banque |
| bank_account.bic | email | Optionnel | BIC de la banque |
| bank_account.balance | Numéro de tel | Optionnel | Solde actuel dans le compte bancaire |
<br />

----

##### Pour un test rapide, copiez et collez ce JSON dans le `BODY` sur Postman en choisissant `RAW` > `JSON`


``` JSON
{
    "entry_date": "2021-09-01",
    "exercise_entry_date": "2021-10-01",
    "exercise_date": "2021-10-01",
    "client_status": "SARL",
    "password": "sPassword",
    "client_name": "test",
    "status": "OFFRE",
    "siret": "6GDERST",
    "address": {
        "num": 4,
        "street": "Laadir, Ikram",
        "comp": "Nouakchoute",
        "code": 16200,
        "ville": "Ouazzane"
    },
    "phone": "212669081322",
    "email": "abdelilah.e@wobyweb.ma",
    "website": "https://bbb-link.com",
    "comment": "test",
    "creation_date": "2021-10-10",
    "exercice_date": "2021-10-01",
    "capital": "9.0",
    "tax_regime": "100",
    "tax_periode": "test",
    "tax_system": "M",
    "income_tax": "IR",
    "last_balance_sheet_entry": {
        "initial_treasury": 120000,
        "delta_treasury": 12000
    },
    "contract": "BIC",
    "client_email": "abdelilah.e@wobyweb.co.ma",
    
    "managers": [
        {
            "first_name": "Muhammad",
            "last_name": "Abdallah",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "email": "muhammad@gmail.com",
            "phone": "063905342",
            "status": "TNS",
            "birthdate": "1982-07-12"
        },
        {
            "first_name": "Muhammed",
            "last_name": "El",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "email": "muhammad@gmail.com",
            "phone": "063905342",
            "status": "TNS",
            "birthdate": "1982-07-12"
        }
    ],
    "employees": [
        {
            "first_name": "Muhammad",
            "last_name": "Abdallah",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "email": "muhammad@gmail.com",
            "phone": "063905342",
            "status": "TNS",
            "birthdate": "1982-07-12"
        }
    ],
    "bank_accounts": [
        {
            "name":"BMCE",
            "address":"Boulevard KADI AYAD",
            "code":"5353425d",
            "iban":"1200.50",
            "bic":"eddee",
            "balance":"1000"
        },
        {
            "name":"BMCE",
            "address":"Boulevard KADI AYAD",
            "code":"5353425d",
            "iban":"1200.50",
            "bic":"eddee",
            "balance":"1000"
        }
    ]
}
```

----

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "user": {
        "id": 165,
        "reference": "C.220207.165",
        "created_at": "2022-02-07",
        "creation_date": "2021-10-10",
        "readable_created_at": "Lundi 07/02/2022 03H11",
        "phone": "212669081322",
        "email": "abdelilah.e@wobyweb.ma",
        "display_name": "test",
        "username": "abdelilah.e@wobyweb.ma",
        "status": "OFFRE",
        "role": "client",
        "exercise": null
    },
    "profile": {
        "id": 110,
        "entry_date": "2021-09-01",
        "exercise_entry_date": "2021-10-01",
        "exercise_date": "2021-10-01",
        "mail_address": "abdelilah.e@wobyweb.co.ma",
        "name": null,
        "business_name": null,
        "phone": "212669081322",
        "client_status": "SARL",
        "siret": "6GDERST",
        "address": {
            "num": 4,
            "street": "Laadir, Ikram",
            "comp": "Nouakchoute",
            "code": 16200,
            "ville": "Ouazzane"
        },
        "website": "https://bbb-link.com",
        "comment": "test",
        "capital": "9.0",
        "tax_regime": "100",
        "tax_periode": "test",
        "tax_system": "M",
        "income_tax": "IR",
        "last_balance_sheet_entry": {
            "initial_treasury": 120000,
            "delta_treasury": 12000
        },
        "user_id": 165
    },
    "managers": [
        {
            "id": 190,
            "first_name": "Muhammad",
            "last_name": "Abdallah",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "phones": [
                "063905342"
            ],
            "mails": [
                "muhammad@gmail.com"
            ],
            "status": "TNS",
            "relationship": "manager",
            "created_at": "2022-02-07 03:11:21",
            "birthdate": "1982-07-12"
        },
        {
            "id": 191,
            "first_name": "Muhammed",
            "last_name": "El",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "phones": [
                "063905342"
            ],
            "mails": [
                "muhammad@gmail.com"
            ],
            "status": "TNS",
            "relationship": "manager",
            "created_at": "2022-02-07 03:11:21",
            "birthdate": "1982-07-12"
        }
    ],
    "employees": [
        {
            "id": 192,
            "first_name": "Muhammad",
            "last_name": "Abdallah",
            "address": "Medine Mounawara",
            "reference": "12312111",
            "phones": [
                "063905342"
            ],
            "mails": [
                "muhammad@gmail.com"
            ],
            "status": "TNS",
            "relationship": null,
            "created_at": "2022-02-07 03:11:21",
            "birthdate": "1982-07-12"
        }
    ],
    "bank_accounts": [
        {
            "id": 71,
            "name": "BMCE",
            "status": "enabled",
            "created_at": "2022-02-07 03:11:21",
            "code": "5353425d",
            "address": "Boulevard KADI AYAD",
            "iban": "1200.50",
            "bic": "eddee",
            "balance": 1000,
            "user_id": 165
        },
        {
            "id": 72,
            "name": "BMCE",
            "status": "enabled",
            "created_at": "2022-02-07 03:11:21",
            "code": "5353425d",
            "address": "Boulevard KADI AYAD",
            "iban": "1200.50",
            "bic": "eddee",
            "balance": 1000,
            "user_id": 165
        }
    ]
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple d'un échec de rêquete dans le cas d'un email déjà existant:

-  Error code: 417
```json
{
    "email": "Cette valeur est déjà utilisée.",
    ...
}

```

-  Error code: 401
```json
{
    "code": 401,
    "message": "Expired JWT Token"
}
```
