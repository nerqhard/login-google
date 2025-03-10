import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Gửi access token đến backend để xác thực
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
          credential: tokenResponse.access_token,
        });

        // Lưu JWT token từ backend
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Chuyển hướng đến trang profile
        navigate('/profile');
      } catch (error) {
        console.error('Lỗi đăng nhập:', error);
      }
    },
    onError: () => {
      console.log('Đăng nhập thất bại');
    }
  });

  return (
    <div className="login-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <div style={{
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        color: 'black',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Đăng nhập</h1>
        <button
          onClick={() => login()}
          style={{
            backgroundColor: '#4285f4',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px'
          }}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            style={{ width: '20px', height: '20px' }}
          />
          Đăng nhập với Google
        </button>
      </div>
    </div>
  );
};

export default Login; 