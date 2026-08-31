# BlogPoint — Frontend Application

### 📝 Project Overview
**BlogPoint** is a modern web application designed for self-expression, providing users with a convenient and user-friendly space to publish and showcase their creative work. 

**Core Features & Roles:**
* **Guest:** Can browse registration/login pages and view public channels.
* **User:** Can manage their account (edit profile info, change password, delete account) and interact with content.
* **Author:** Features a dedicated workspace to create personal channels, publish posts, write comments, and manage content.

> This repository contains the Frontend application. You can find the corresponding backend repository here: [BlogPoint Backend](https://github.com/BlogPoint-Network/blogpoint-backend).

### Tech Stack
* **Runtime:** Node.js 18
* **Build Tool:** Vite
* **Containerization:** Docker & Docker Compose

### Deployment

#### Prerequisites
Make sure you have the following tools installed on your local machine:
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

#### Step-by-Step Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd BlogPointFrontend
   ```

2. **Build and launch the application containers:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   Open your browser and navigate to: [http://localhost:5173](http://localhost:5173)

4. **API Documentation:**
   The Swagger API documentation can be accessed locally at: [http://localhost:8000/swagger](http://localhost:8000/swagger)

#### Operational Commands
* **Stop containers safely:**
  ```bash
  docker-compose down
  ```
* **Stop containers and completely wipe out the `node_modules` volume:**
  ```bash
  docker-compose down -v
  ```

---

### 📝 Аннотация проекта (Overview)
**BlogPoint** — это современное веб-приложение для самовыражения, представляющее собой удобное и доступное пространство для размещения и демонстрации своего творчества.

**Ключевой функционал и роли системы:**
* **Гость:** Может проходить регистрацию/авторизацию и просматривать доступные каналы.
* **Пользователь:** Обладает возможностью управлять своим аккаунтом (изменять информацию профиля, менять пароль, удалять аккаунт) и просматривать посты.
* **Автор:** Имеет расширенный функционал для создания собственного канала, публикации постов, управления комментариями и редактирования контента.

>  Данный репозиторий содержит фронтенд-часть приложения. Исходный код бэкенда расположен в отдельном репозитории: [BlogPoint Backend](https://github.com/BlogPoint-Network/blogpoint-backend).

### Технологический стек
* **Среда выполнения:** Node.js 18
* **Инструмент сборки:** Vite
* **Контейнеризация:** Docker & Docker Compose

### Развёртывание

#### Требования
Убедитесь, что на вашем компьютере установлены:
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com
   cd BlogPointFrontend
   ```

2. **Запустите сборку и само приложение:**
   ```bash
   docker-compose up --build
   ```

3. **Откройте в браузере:**
   Приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173)

4. **Документация API:**
   Интерфейс Swagger доступен по адресу: [http://localhost:8000/swagger](http://localhost:8000/swagger)

#### Другие команды
* **Остановить контейнеры:**
  ```bash
  docker-compose down
  ```
* **Остановить контейнеры и полностью удалить том `node_modules`:**
  ```bash
  docker-compose down -v
  ```
