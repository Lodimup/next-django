FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir

COPY app .

EXPOSE 8000

ENTRYPOINT ["sh", "./start.sh"]