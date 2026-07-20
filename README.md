# Esports Community Platform & Headless CMS

> **Dossier de cadrage technique, spécifications d'architecture et modélisation full-stack pour une plateforme communautaire e-sport.**

---

## 📌 Présentation & Contexte

Ce dépôt rassemble l'**architecture technique** et les **spécifications fonctionnelles** conçues pour une plateforme web sur-mesure destinée à une structure e-sportive. 

L'objectif du projet était de centraliser l'expérience des supporters (matchs en direct, actualités, fiches joueurs) tout en offrant un backoffice autonome et type-safe pour la gestion éditoriale et la gestion des équipes.

> ⚠️ **Note sur le statut du projet :**  
> Ce projet a été mené lors de la phase d'étude d'architecture et de conception fonctionnelle. Suite à la cessation d'activité et la fermeture de la structure partenaire, la phase de développement applicatif a été suspendue. Ce document sert de **référence d'architecture réutilisable** pour tout projet combinant **Next.js** et **Payload CMS**.

---

## 🌟 Spécifications Fonctionnelles

L'application a été modélisée autour de 5 piliers majeurs :

1. 📺 **Live & Event Streaming** :
   * Détection du statut en direct via l'**API Twitch**.
   * Calendrier interactif des matchs (à venir, en cours, terminés) avec scores en temps réel.
2. 📰 **Portail d'Actualités & Médias** :
   * Système de publication d'articles optimisé pour le SEO.
   * Rendu hybride (**SSR / ISR**) pour une rapidité d'affichage optimale.
3. 🎴 **Fiches & Rosters Joueurs** :
   * Cartes de joueurs interactives (statistiques, rôle, palmarès, équipements/gear, réseaux).
   * Modélisation par équipes/jeux (ex: League of Legends, Valorant, Rocket League).
4. ⚙️ **Backoffice Sur-Mesure (Payload CMS)** :
   * Administration sans code pour les managers d'équipes et rédacteurs.
   * Gestion fine des rôles et des permissions (RBAC).
5. 🔗 **Hub Communautaire & Réseau** :
   * Agglomération des réseaux sociaux officiels et lien direct avec le serveur Discord.

---

## 🏗️ Architecture & Choix Techniques

| Couche / Domaine | Technologie | Justification Technique |
| :--- | :--- | :--- |
| **Framework Web** | **Next.js** (App Router) | Rendu dynamique hybride (ISR/SSR), performances et SEO. |
| **Langage** | **TypeScript** | Typage strict de bout en bout (front-end à la BDD). |
| **CMS Headless** | **Payload CMS** | Intégration native dans Next.js (Monorepo), 100% Type-Safe. |
| **Base de Données** | **PostgreSQL** | Base relationnelle robuste pour la gestion des relations (Joueurs $\leftrightarrow$ Équipes $\leftrightarrow$ Matchs). |
| **Styling & UI** | **Tailwind CSS + Radix UI** | Sur-mesure, accessible et thématisé selon l'identité graphique gaming. |
| **Intégration Externe** | **API Twitch / Webhooks** | Récupération en temps réel des flux de streaming. |

---

## 🗄️ Modélisation des Données (Payload Collections)

La structure des données a été pensée de manière relationnelle pour garantir une cohérence maximale :

```text
  ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
  │   Players   │───────>│    Teams    │<──────│   Matches   │
  └─────────────┘       └─────────────┘       └─────────────┘
         │                                           │
         └───────────── Réseaux / Stats ─────────────┘
