// OtherScreens.jsx — Profile, Payment, Addresses, NoConnection

function ProfileScreen({ nav }) {
  const [tab, setTab] = React.useState('perfil');
  const handleTab = (id) => { setTab(id); if(id==='inicio') nav('home'); if(id==='viajes') nav('trips'); };
  const items = [
    { icon:'💳', label:'Métodos de pago', sub:'Efectivo · Mercado Pago', dest:'payment' },
    { icon:'⭐', label:'Calificaciones', sub:'Tus conductores calificados', dest:null },
    { icon:'📍', label:'Lugares guardados', sub:'Casa, trabajo y favoritos', dest:'addresses' },
    { icon:'🔔', label:'Configuración', sub:'Notificaciones y preferencias', dest:null },
    { icon:'🔒', label:'Privacidad y seguridad', sub:'Datos y acceso a la cuenta', dest:null },
    { icon:'❓', label:'Ayuda', sub:'Centro de soporte Lifty', dest:'support' },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#F4F7FA' }}>
      <SBar dark={false} />
      {/* Profile card */}
      <div style={{ background:'#0D1F2D', padding:'24px 20px 32px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <div style={{ width:64, height:64, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, fontWeight:700, color:'#fff', flexShrink:0 }}>M</div>
          <div>
            <div style={{ fontSize:22, fontWeight:700, color:'#fff' }}>Martina</div>
            <div style={{ fontSize:14, color:'#8899AA' }}>+54 3544 123456</div>
          </div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', marginTop:-16, borderRadius:'16px 16px 0 0', background:'#F4F7FA', padding:'8px 0' }}>
        {items.map((item, i) => (
          <div key={i} onClick={() => item.dest && nav(item.dest)} style={{ display:'flex', alignItems:'center', gap:14, background:'#fff', padding:'16px 20px', borderBottom:'1px solid #F4F7FA', cursor: item.dest ? 'pointer' : 'default' }}>
            <div style={{ width:40, height:40, borderRadius:12, background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>{item.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:15, fontWeight:500, color:'#0D1F2D' }}>{item.label}</div>
              <div style={{ fontSize:12, color:'#888', marginTop:2 }}>{item.sub}</div>
            </div>
            {item.dest && <span style={{ color:'#BBBBBB', fontSize:18 }}>›</span>}
          </div>
        ))}
        <div style={{ padding:'20px', textAlign:'center' }}>
          <button onClick={() => nav('login')} style={{ background:'none', border:'none', color:'#FF4D4D', fontSize:14, fontWeight:600, cursor:'pointer' }}>Cerrar sesión</button>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function PaymentScreen({ nav }) {
  const [selected, setSelected] = React.useState(window.activePayment || 'cash');
  const methods = [
    { id:'cash', icon:'💵', label:'Efectivo', sub:'Pagás al finalizar el viaje' },
    { id:'mp',   icon:'💳', label:'Mercado Pago', sub:'Cuenta de Mercado Pago' },
  ];
  const handleSave = () => {
    window.activePayment = selected;
    nav('vehicle');
  };
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('vehicle')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Método de pago</span>
      </div>
      <div style={{ flex:1, padding:'8px 20px' }}>
        {methods.map(m => (
          <div key={m.id} onClick={() => setSelected(m.id)} style={{ display:'flex', alignItems:'center', gap:14, padding:'16px', borderRadius:14, marginBottom:10, border:`2px solid ${selected===m.id ? '#00C2B3' : '#EEEEEE'}`, background: selected===m.id ? '#E8F8F6' : '#fff', cursor:'pointer' }}>
            <div style={{ width:44, height:44, borderRadius:12, background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>{m.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:15, fontWeight:600, color:'#0D1F2D' }}>{m.label}</div>
              <div style={{ fontSize:12, color:'#888', marginTop:2 }}>{m.sub}</div>
            </div>
            <div style={{ width:22, height:22, borderRadius:'50%', border:`2px solid ${selected===m.id?'#00C2B3':'#DDD'}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
              {selected===m.id && <div style={{ width:10, height:10, borderRadius:'50%', background:'#00C2B3' }}/>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding:'12px 20px 32px' }}>
        <Btn onClick={handleSave}>GUARDAR</Btn>
      </div>
    </div>
  );
}

function AddressesScreen({ nav }) {
  const [casa, setCasa] = React.useState('Av. San Martín 450');
  const [trabajo, setTrabajo] = React.useState('Shopping Centro, Local 8');
  const places = [
    { icon:'🏠', label:'Tu casa', val:casa, set:setCasa, ph:'Ingresá tu dirección' },
    { icon:'💼', label:'Tu trabajo', val:trabajo, set:setTrabajo, ph:'Ingresá tu lugar de trabajo' },
    { icon:'🏛️', label:'Un lugar frecuente', val:'', set:()=>{}, ph:'Agregar dirección' },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('profile')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Configurá tus direcciones</span>
      </div>
      <div style={{ textAlign:'center', padding:'20px 28px 16px' }}>
        <div style={{ fontSize:48, marginBottom:8 }}>📍</div>
        <div style={{ fontSize:14, color:'#888' }}>Para viajes más rápidos</div>
      </div>
      <div style={{ flex:1, padding:'0 20px' }}>
        {places.map((p,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:12, background:'#F4F7FA', borderRadius:14, padding:'14px 16px', marginBottom:10 }}>
            <span style={{ fontSize:22, flexShrink:0 }}>{p.icon}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, color:'#888', marginBottom:4 }}>{p.label}</div>
              <input value={p.val} onChange={e => p.set(e.target.value)} placeholder={p.ph} style={{ width:'100%', border:'none', background:'transparent', outline:'none', fontSize:14, fontWeight: p.val ? 500 : 400, color: p.val ? '#0D1F2D' : '#AAAAAA', fontFamily:'Inter,sans-serif' }}/>
            </div>
            <span style={{ color:'#00C2B3', fontSize:16 }}>›</span>
          </div>
        ))}
      </div>
      <div style={{ padding:'16px 20px 8px' }}>
        <Btn onClick={() => nav('profile')}>GUARDAR DIRECCIONES</Btn>
        <button onClick={() => nav('profile')} style={{ width:'100%', background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'12px' }}>Omitir</button>
      </div>
    </div>
  );
}

function NoConnectionScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#0D1F2D', alignItems:'center', justifyContent:'center', padding:'40px' }}>
      <SBar dark />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:16 }}>
        <div style={{ fontSize:72 }}>📵</div>
        <div style={{ fontSize:26, fontWeight:700, color:'#fff', lineHeight:1.2 }}>Sin conexión</div>
        <div style={{ fontSize:14, color:'#8899AA', lineHeight:1.7 }}>Parece que no tenés internet.<br/>Revisá tu conexión e intentá de nuevo.</div>
        <div style={{ marginTop:16, width:'100%' }}>
          <Btn onClick={() => nav('home')}>REINTENTAR</Btn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProfileScreen, PaymentScreen, AddressesScreen, NoConnectionScreen });
