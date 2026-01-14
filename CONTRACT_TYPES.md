# Types de Contrats - Guide d'utilisation

## 📋 Vue d'ensemble

Le système de contrats Taller propose **3 types de contrats différents** accessibles via des paramètres d'URL.

## 🔗 URLs des contrats

### 1. Standard (Default)
**URL:** `https://tallerapp.xyz/agreement`

**Caractéristiques :**
- Retainer : **$12.5 par vidéo**
- Cap mensuel : **60 posts** (retainer max : **$750**)
- CPM TikTok : **$0.60** (cap : **$200/vidéo**)
- Seuil : Premières 10k vues non éligibles
- Cross-post Instagram : **$0.60 CPM** (cap : **$200/vidéo**)
- Total uploads/mois : **120** (60 TikTok + 60 Instagram)
- Instagram : Toutes les vues comptent

---

### 2. Lite
**URL:** `https://tallerapp.xyz/agreement?type=lite`

**Caractéristiques :**
- Retainer : **$5 par vidéo**
- Cap mensuel : **60 posts** (retainer max : **$300**)
- CPM TikTok : **$0.70** (cap : **$200/vidéo**)
- Seuil : Premières 10k vues non éligibles
- Cross-post Instagram : **$0.70 CPM** (cap : **$200/vidéo**)
- Total uploads/mois : **120** (60 TikTok + 60 Instagram)
- Instagram : Toutes les vues comptent

**Différences vs Standard :**
- ⬇️ Retainer plus bas ($5 vs $12.5)
- ⬆️ CPM plus élevé ($0.70 vs $0.60)
- Meilleur pour les créateurs qui génèrent beaucoup de vues

---

### 3. Pro (CPM Only)
**URL:** `https://tallerapp.xyz/agreement?type=pro`

**Caractéristiques :**
- Retainer : **$0 (pas de retainer)**
- Cap mensuel : **Aucun** (uploads illimités)
- CPM TikTok : **$1.00** (cap : **$150/vidéo**)
- Seuil : **Toutes les vues comptent dès la première**
- Cross-post Instagram : **$1.00 CPM** (cap : **$150/vidéo**)
- Total uploads/mois : **Illimité**
- Instagram : Toutes les vues comptent

**Différences vs Standard :**
- ❌ Pas de retainer garanti
- ⬆️⬆️ CPM beaucoup plus élevé ($1.00 vs $0.60)
- ✅ Toutes les vues comptent (pas de seuil de 10k)
- ⬇️ Cap par vidéo plus bas ($150 vs $200)
- ♾️ Uploads illimités
- Meilleur pour les créateurs avec audience établie

---

## 📊 Tableau comparatif

| Caractéristique | Standard | Lite | Pro |
|----------------|----------|------|-----|
| **Retainer/vidéo** | $12.5 | $5 | $0 |
| **Retainer max/mois** | $750 | $300 | $0 |
| **CPM TikTok** | $0.60 | $0.70 | $1.00 |
| **CPM Instagram** | $0.60 | $0.70 | $1.00 |
| **Cap par vidéo** | $200 | $200 | $150 |
| **Seuil de vues** | 10k | 10k | 0 |
| **Uploads TikTok/mois** | 60 | 60 | ∞ |
| **Uploads total/mois** | 120 | 120 | ∞ |

---

## 💻 Utilisation technique

### Pour les créateurs
Envoyez simplement le bon lien URL selon le type de contrat négocié :
- Standard : `https://tallerapp.xyz/agreement`
- Lite : `https://tallerapp.xyz/agreement?type=lite`
- Pro : `https://tallerapp.xyz/agreement?type=pro`

### Comment ça marche
1. Le créateur ouvre l'URL
2. Le formulaire affiche les termes du contrat correspondant
3. Après signature, le type de contrat est enregistré dans Google Sheets
4. Le PDF généré contient les termes exacts du contrat signé

### Données enregistrées
Chaque soumission enregistre dans Google Sheets (colonne T) :
- `default` pour Standard
- `lite` pour Lite
- `pro` pour Pro

---

## 🔧 Modification des contrats

Les configurations sont dans : `/src/lib/contractConfig.js`

Pour modifier un contrat, éditez les valeurs dans `CONTRACT_TYPES` :
```javascript
lite: {
  name: 'Lite',
  retainer: 5,
  cpm: 0.70,
  // ...
}
```

---

## ✅ Checklist pour ajouter un nouveau type

1. Ajouter la config dans `contractConfig.js`
2. Le système génère automatiquement :
   - Le formulaire web
   - Le PDF client
   - Le PDF admin
   - L'entrée Google Sheets

Aucune modification supplémentaire nécessaire !
