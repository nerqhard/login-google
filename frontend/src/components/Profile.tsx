import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  picture?: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        color: 'black',
        width: '100%'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Thông tin người dùng</h1>
        
        {user.picture && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img
              src={user.picture}
              alt="Profile"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <strong>Tên:</strong> {user.name}
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <strong>Email:</strong> {user.email}
        </div>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px'
          }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Profile; 