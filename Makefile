install:
	npm ci --prefix frontend

build: install
	rm -rf frontend/dist
	npm --prefix frontend run build
	
start:
	npx start-server -s ./frontend/dist

start-backend:
	npx start-server