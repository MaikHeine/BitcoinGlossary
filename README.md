# BitcoinGlossary

BitcoinGlossary is a web application that provides a glossary of Bitcoin-related terms. It consists of an Angular frontend and a .NET API backend.

## Features
- Browse Bitcoin glossary terms
- View detailed explanations
- User-friendly Angular interface
- Secure .NET API backend

## Technologies Used
### Frontend (Angular)
- Angular
- Angular Material
- TypeScript
- RxJS

### Backend (.NET API)
- .NET 6 or later
- ASP.NET Core Web API
- Entity Framework Core

---

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js** (Latest LTS recommended) - [Download Here](https://nodejs.org/)
- **Angular CLI** - Install via:
  ```sh
  npm install -g @angular/cli
  ```
- **.NET SDK** (6 or later) - [Download Here](https://dotnet.microsoft.com/en-us/download)
- **SQL Server** (or SQLite for local development)

---

## Running the Application

### 1. Clone the Repository
```sh
git clone https://github.com/MaikHeine/BitcoinGlossary.git
cd BitcoinGlossary
```

### 2. Set Up the Backend (.NET API)
```sh
cd BitcoinGlossaryAPI
```
- Restore dependencies:
  ```sh
  dotnet restore
  ```
- Apply database migrations:
  ```sh
  dotnet ef database update
  ```
- Run the API:
  ```sh
  dotnet run
  ```
  The API should now be running at `http://localhost:5128/`.

### 3. Set Up the Frontend (Angular)
```sh
cd ../BitcoinGlossary
```
- Install dependencies:
  ```sh
  npm install
  ```
- Run the Angular app:
  ```sh
  ng serve
  ```
  The application should now be accessible at `http://localhost:4200/`.

---

## Contact
For any inquiries, contact **maik.heine01@gmail.com**.

---
