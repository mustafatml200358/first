import { useState } from 'react'

function App() {
  const [notlar, setNotlar] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const ekle = () => {
    if (input.trim() === "") return;

    if (isEditing) {
      // GÜNCELLEME: Seçili sıradaki ismi yeni input ile değiştir
      const yeniNotlar = notlar.map((not, index) => 
        index === currentId ? input : not
      );
      setNotlar(yeniNotlar);
      setIsEditing(false);
      setCurrentId(null);
    } else {
      // EKLEME: Listeye yeni isim ekle
      setNotlar([...notlar, input]);
    }
    
    setInput(""); 
  };

  const sil = (index) => {
    setNotlar(notlar.filter((_, i) => i !== index));
  };

  const düzenle = (index) => {
    setIsEditing(true);
    setCurrentId(index);
    setInput(notlar[index]);
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
          {isEditing ? "Güncelle" : "Ekle"}
        </button>
      </div>

      <ul style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
        {notlar.map((not, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
            {not}
            <div>
              <button 
                onClick={() => düzenle(index)} 
                style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer', marginRight: '10px' }}
              >
                Düzenle
              </button>
              <button 
                onClick={() => sil(index)} 
                style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App