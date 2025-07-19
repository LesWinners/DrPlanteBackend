# Backend - Docteur Plante

Backend API pour l'application Docteur Plante, une application mobile de diagnostic des plantes et maladies végétales.

## 🚀 Technologies utilisées

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Gestion des variables d'environnement

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- MongoDB installé et en cours d'exécution
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet** (si ce n'est pas déjà fait)
```bash
git clone <url-du-repo>
cd "DOCTEUR PLANTE/Backend"
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
Créer un fichier `.env` à la racine du dossier Backend :
```env
MONGO_URI=mongodb://localhost:27017/docteur-plante
PORT=5000
```

4. **Démarrer le serveur**
```bash
# Mode développement (avec nodemon)
npm run dev

# Mode production
npm start
```

Le serveur sera accessible sur `http://localhost:5000`