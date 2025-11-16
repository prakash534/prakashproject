# 🚢 Ships REST API

## 🧰 Setup Instructions

```bash
npm install
npm start
```

## 📡 Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | /ships | List all ships |
| POST | /ships | Add a new ship |
| GET | /ships/:id | Get a ship by ID |
| PUT | /ships/:id | Update ship info |
| DELETE | /ships/:id | Delete a ship |

## 🧪 Example Request (POST /ships)

```json
{
  "name": "Titanic",
  "email": "captain@titanic.com"
}
```

## 🧪 Example Response

```json
{
  "id": "generated-uuid",
  "name": "Titanic",
  "email": "captain@titanic.com",
  "createdAt": "2025-11-13T00:00:00.000Z"
}
```

## 🧠 Notes
- Uses in-memory storage (data resets when server restarts).
- Includes validation for name and email.
