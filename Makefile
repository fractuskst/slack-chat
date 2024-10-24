install:
	npm ci --prefix frontend

build:
	rm -rf frontend/dist
	npm --prefix frontend run build
	
start:
	npx start-server -p 5000 -s ./frontend/dist

start-backend:
	npx start-server -p 5000