# Ressource : Suppression d'une ou plusieurs affectations

---

## 1. Description de la Resource

Cette ressource permet de supprimer les affectations d'une pièce comptable donnée.
La suppression des affectations implique la suppression de la pièce et la réinitialisation des champs de la facture concernée
## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /affectations/{invoice_id}
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`DELETE`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ------------------------------- | :--------- |
| invoice_id| Invoice (Facture)| obligatoire| l'identifiant de la facture |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "message": "Votre opération a été traitée avec succès."
}
```

## 5. Exemple de cas d'échec d'une requête


```json
{
    "id": "Ce(tte) facture n'existe pas."
}
```
