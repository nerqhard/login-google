# Ứng dụng Đăng nhập Google OAuth

Ứng dụng web sử dụng React và Node.js với tính năng đăng nhập qua Google OAuth 2.0.

## Cấu trúc dự án

```
.
├── frontend/         # React frontend
└── backend/         # Node.js backend
```

## Yêu cầu hệ thống

- Node.js (v14 trở lên)
- npm hoặc yarn

## Cài đặt và Cấu hình

### 1. Cấu hình Google OAuth

1. Truy cập [Google Cloud Console](https://console.cloud.google.com)
2. Tạo một dự án mới hoặc chọn dự án có sẵn
3. Vào mục "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Chọn "Web application"
6. Thêm các Authorized redirect URIs:
   - http://localhost:3000
7. Lưu lại Client ID và Client Secret

### 2. Cài đặt Frontend

```bash
cd frontend
npm install
```

Tạo file `.env` trong thư mục `frontend`:
```
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:5000
```

### 3. Cài đặt Backend

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục `backend`:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
PORT=5001
```

## Chạy ứng dụng

1. Khởi động Backend:
```bash
cd backend
npm start
```

2. Khởi động Frontend (mở terminal mới):
```bash
cd frontend
npm run dev
```

Truy cập ứng dụng tại http://localhost:3000

## Lưu ý

- Đảm bảo đã cấu hình đúng Google OAuth credentials
- Điền đầy đủ thông tin trong các file .env
- Backend API chạy ở cổng 5001
- Frontend dev server chạy ở cổng 3000 