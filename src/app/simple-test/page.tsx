"use client";

export default function SimpleTestPage() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1>Simple Image Test</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Local Images:</h3>
        <img 
          src="/images/travel1.jpg" 
          alt="Travel 1" 
          style={{ width: '200px', height: '150px', border: '1px solid black', margin: '10px' }}
          onError={(e) => {
            console.error('Failed to load travel1.jpg');
            e.currentTarget.style.border = '2px solid red';
          }}
          onLoad={() => console.log('Successfully loaded travel1.jpg')}
        />
        
        <img 
          src="/images/logo2.png" 
          alt="Logo" 
          style={{ width: '100px', height: '100px', border: '1px solid black', margin: '10px' }}
          onError={(e) => {
            console.error('Failed to load logo2.png');
            e.currentTarget.style.border = '2px solid red';
          }}
          onLoad={() => console.log('Successfully loaded logo2.png')}
        />
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>External Images:</h3>
        <img 
          src="https://via.placeholder.com/200x150/red/white?text=TEST1" 
          alt="Test 1" 
          style={{ width: '200px', height: '150px', border: '1px solid black', margin: '10px' }}
          onError={(e) => {
            console.error('Failed to load external test 1');
            e.currentTarget.style.border = '2px solid red';
          }}
          onLoad={() => console.log('Successfully loaded external test 1')}
        />
        
        <img 
          src="https://picsum.photos/200/150" 
          alt="Test 2" 
          style={{ width: '200px', height: '150px', border: '1px solid black', margin: '10px' }}
          onError={(e) => {
            console.error('Failed to load external test 2');
            e.currentTarget.style.border = '2px solid red';
          }}
          onLoad={() => console.log('Successfully loaded external test 2')}
        />
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Base64 Image:</h3>
        <img 
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA5OWNjIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5CQVNFNjQ8L3RleHQ+Cjwvc3ZnPgo=" 
          alt="Base64 Test" 
          style={{ width: '200px', height: '150px', border: '1px solid black', margin: '10px' }}
          onError={(e) => {
            console.error('Failed to load base64 image');
            e.currentTarget.style.border = '2px solid red';
          }}
          onLoad={() => console.log('Successfully loaded base64 image')}
        />
      </div>
    </div>
  );
} 