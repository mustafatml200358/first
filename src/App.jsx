import { useState } from 'react'

function App() {
  const [notlar, setNotlar] = useState([]);
  const [input, setInput] = useState("");

  const ekle = () => {
    if (input.trim() !== "") {
      setNotlar([...notlar, input]);
      setInput("");
    }
  };

  const sil = (index) => {
    setNotlar(notlar.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ color: '#2563eb' }}>Öğrenci Kayıt Sistemi</h1>
      <p>React CRUD Uygulaması</p>
      
      <div style={{ marginTop: '20px' }}>
        <input 
          style={{ padding: '10px', width: '70%', borderRadius: '5px', border: '1px solid #ccc' }}
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="İsim soyisim yaz..."
        />
        <button 
          onClick={ekle}
          style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Ekle
        </button>
      </div>

      <ul style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
        {notlar.map((not, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            {not}
            <button onClick={() => sil(index)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App