# ☠ One Piece Timeline — Chronologie Universelle

Frise chronologique interactive du monde de One Piece, couvrant de la Préhistoire à l'arc Egghead.

**[→ Voir le site en ligne](#)** · **[→ Soutenir le projet sur Ko-fi](https://ko-fi.com/joeydjr)**

---

## Fonctionnalités

| Vue | Description |
|-----|-------------|
| **≡ Liste** | Tous les événements filtrables par type et ère, avec recherche plein texte |
| **◉ Frise** | Timeline interactive avec zoom jusqu'au jour, axe Kaienreki, minimap |
| **☽ Personnages** | 58 fiches personnages avec biographies, affiliations, fruits du démon et événements liés |
| **🗺 Carte** | Carte du monde de One Piece avec marqueurs d'événements par lieu |

## Données

- **204 événements** couvrant ~5 000 ans d'histoire (Préhistoire → Egghead)
- **58 personnages** avec dates de naissance, biographies et primes
- **60 lieux** géolocalisés sur la carte du monde
- Sources : *Library of Ohara v5.0*, SBS, Vivre Cards, One Piece Wiki

## Utilisation locale

Le projet est constitué de deux fichiers :

```
index.html   ← Interface (UI, CSS, moteur graphique)
data.js      ← Base de données (événements, personnages)
```

> ⚠️ Les navigateurs bloquent le chargement de fichiers locaux en `file://`.
> Pour tester en local, utilise un serveur :

```bash
# Python (recommandé)
python -m http.server 8000
# puis ouvrir http://localhost:8000

# Node.js
npx serve .
```

## Contribuer

Les données sont dans `data.js` — format JavaScript lisible, commenté par ère.

Pour ajouter un événement, copie ce template dans le tableau `events` :

```javascript
{ id:"xxx", era:"histoire", type:"aventure", year_k:1524, years_before:0.5, approx:false,
  date_label:"An 1524 — Juin", month_k:6,
  title:"Titre de l'événement",
  description:"Description détaillée.",
  characters:["Luffy","Zoro"], locations:["Wano"], source:"Chapitre XXX",
  tags:["wano","combat"] }
```

**Valeurs possibles :**

| Champ | Valeurs |
|-------|---------|
| `era` | `prehistoric` · `antiquite` · `vide` · `post_vide` · `rocks` · `roger` · `pre_histoire` · `histoire` |
| `type` | `ere` · `naissance` · `mort` · `guerre` · `politique` · `mystere` · `aventure` · `piraterie` |

## Crédits

- **[The Library of Ohara](https://thelibraryofohara.com/)** — source principale des dates et de la chronologie (v5.0, chap. 1103)
- **[One Piece Fandom Wiki](https://onepiece.fandom.com/)** — données complémentaires
- **SBS & Vivre Cards** — dates de naissance officielles
- One Piece est la propriété de **Eiichiro Oda / Shueisha / Toei Animation**

---

*Projet fan non officiel — aucune affiliation avec Shueisha ou Toei*
