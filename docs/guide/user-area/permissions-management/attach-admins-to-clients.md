<meta charset="utf-8"/>

### Description

- Un Admin N peut gérér 1 ou plusieurs client(s), comme 1 clients peut être géré par 1 ou plusieurs Admin(s) N
- Un Admin P peut gérer tous les Admins N ainsi que les clients enreistrés sur la plateforme

<br />

#### 1. Resource description

Attacher un tableau d'admins n à un tableau des clients

#### 2. La route
```
url: /api/user/set-client-admin
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| admins[] | array | Optionnel | Tableau des ID des Admins N |
| clients[] | array | Optionnel | Tableau des ID des clients |


<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

``` JSON
{
    "message": "Votre opération a été traitée avec succès."
}
```

::: warning Note
Les anciens admins N de(s) client(s) envoyé(s) seront ecrasés par les nouveaux admins N envoyés!
:::

Le clients

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "clients0": "Ce(tte) client n'existe pas."
}
```
