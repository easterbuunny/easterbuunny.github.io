# ==========================================
# Makefile POC Java 11 / Angular (Node 23)
# ==========================================

# Variables
# Remplacer *.jar par le nom exact si Maven génère plusieurs JARs (ex: *-sources.jar)
BACKEND_JAR = backend/target/*.jar

.PHONY: build run run-backend run-frontend clean-docker

# Cible principale pour la conteneurisation
build:
	@echo "=== 1. Compilation du Backend (Maven) ==="
	cd backend && mvn clean package -DskipTests
	@echo "=== 2. Compilation du Frontend (Angular) ==="
	cd frontend && ng build
	@echo "=== 3. Déploiement Docker Compose ==="
	docker-compose up --build -d

# Cible locale (exécution combinée)
run:
	@echo "=== Lancement Local ==="
	@echo "Démarrage du Backend (en arrière-plan)..."
	java -jar $(BACKEND_JAR) --server.port=8080 &
	@echo "Démarrage du Frontend..."
	cd frontend && ng serve

# ==========================================
# Cibles utilitaires recommandées (DevOps)
# ==========================================

# Pratique recommandée : Lancer ces deux cibles dans deux terminaux séparés
run-backend:
	@echo "Démarrage du Backend seul..."
	java -jar $(BACKEND_JAR)

run-frontend:
	@echo "Démarrage du Frontend seul..."
	cd frontend && ng serve

# Arrêter et nettoyer les conteneurs du POC
clean-docker:
	docker-compose down -v


build-clean:
	@echo "=== Arrêt et suppression des anciens conteneurs ==="
	docker-compose down
	@echo "=== Compilation et Déploiement ==="
	cd backend && mvn clean package -DskipTests
	cd frontend && ng build
	docker-compose up --build -d
	docker image prune -f
