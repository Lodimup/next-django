include .env
export

default:
	@echo "Please specify a target to make."
# Export python requirements to requirements.txt
req:
	pip install poetry-plugin-export
	poetry export -f requirements.txt --output requirements.txt --without-hashes
# Migrate database
m:
	cd app &&\
	poetry run python manage.py migrate
# Make migrations
mm:
	cd app &&\
	poetry run python manage.py makemigrations
# Drop local database tables
drop-tables:
	psql "dbname=${DB_NAME} host=${DB_HOST} port=${DB_PORT} user=${DB_USER} password=${DB_PASS}" -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;" ;\
	exit 0; 
# Re-initialize project
init-proj: drop-tables m
# Run hypercorn WSGI
hypercorn:
	cd app &&\
	python manage.py collectstatic --noinput &&\
	hypercorn app.asgi:application --workers 4 -b 0.0.0.0:8000
# Run celery worker
run-worker:
	cd app &&\
	poetry run celery -A app worker -l INFO -E
# Run celery scheduler
run-beat:
	cd app &&\
	poetry run celery -A app beat -l INFO