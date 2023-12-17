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
	psql "dbname=postgres host=db port=5432 user=postgres password=postgres" -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;" ;\
	exit 0;
# Re-initialize project
init-proj: drop-tables m
# Run hypercorn WSGI
hypercorn:
	cd app &&\
	python manage.py collectstatic --noinput &&\
	hypercorn app.asgi:application --workers 4 -b 0.0.0.0:8000