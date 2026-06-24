// HomeScreens.jsx — Home, Search, Vehicle, Confirm

function HomeScreen({ nav }) {
  const [tab, setTab] = React.useState('inicio');
  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };
  const TabBar = window.BottomTabBar;
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark />
      <MapBG>
        {/* Search bar overlay */}
        <div style={{ position:'absolute', top:12, left:16, right:16, height:52, background:'#fff', borderRadius:14, display:'flex', alignItems:'center', padding:'0 14px', gap:10, boxShadow:'0 4px 20px rgba(13,31,45,.18)', cursor:'pointer' }} onClick={() => nav('search')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          <span style={{ fontSize:15, color:'#999' }}>¿A dónde vas?</span>
        </div>
      </MapBG>
      {/* Bottom sheet */}
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', padding:'0 20px 0', boxShadow:'0 -4px 24px rgba(13,31,45,.10)', marginTop:-20 }}>
        <Handle />
        <div style={{ padding:'16px 0 0' }}>
          <div style={{ fontSize:20, fontWeight:700, color:'#0D1F2D', marginBottom:2 }}>¡Hola, Martina! 👋</div>
          <div style={{ fontSize:12, color:'#888', marginBottom:14, fontWeight:500 }}>Destinos frecuentes</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:14 }}>
            {[
              { icon:'🏠', label:'Casa', addr:'Av. San Martín 450' },
              { icon:'💼', label:'Trabajo', addr:'Shopping Centro, Local 8' },
              { icon:'🏛️', label:'Centro', addr:'Plaza Mitre' },
            ].map(d => (
              <div key={d.label} onClick={() => nav('vehicle')} style={{ display:'flex', alignItems:'center', gap:12, background:'#F4F7FA', borderRadius:12, padding:'12px 14px', cursor:'pointer' }}>
                <span style={{ fontSize:20 }}>{d.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>{d.label}</div>
                  <div style={{ fontSize:12, color:'#888' }}>{d.addr}</div>
                </div>
                <span style={{ color:'#00C2B3', fontSize:16 }}>›</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
            <div style={{ width:8, height:8, borderRadius:'50%', background:'#00C2B3' }}/>
            <span style={{ fontSize:13, color:'#555' }}>3 conductores disponibles · 2 min aprox</span>
          </div>
          <Btn onClick={() => nav('search')}>PEDIR VIAJE</Btn>
          <div style={{ display:'flex', alignItems:'center', gap:10, background:'#F4F7FA', borderRadius:12, padding:'11px 14px', cursor:'pointer', marginTop:8 }} onClick={() => nav('tripforother')}>
            <span style={{ fontSize:18 }}>👥</span>
            <span style={{ fontSize:13, fontWeight:500, color:'#0D1F2D', flex:1 }}>Pedir para otra persona</span>
            <span style={{ color:'#00C2B3', fontSize:14 }}>›</span>
          </div>
          <div style={{ height:16 }}/>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function SearchScreen({ nav }) {
  const [query, setQuery] = React.useState('Terminal');
  const results = [
    { name:'Terminal de Ómnibus', addr:'Av. Circunvalación 1200 · 1.2 km' },
    { name:'Terminal de Ómnibus - Plataforma 3', addr:'Av. Circunvalación 1200 · 1.2 km' },
    { name:'Parada Terminal Sur', addr:'Av. Circunvalación 1150 · 1.4 km' },
  ];
  const recents = [
    { name:'Hospital Regional', addr:'Av. Sarmiento 840' },
    { name:'Costanera', addr:'Costanera Norte s/n' },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      {/* Search bar */}
      <div style={{ padding:'8px 16px 0', display:'flex', alignItems:'center', gap:10 }}>
        <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'6px 4px' }}>←</button>
        <div style={{ flex:1, display:'flex', alignItems:'center', background:'#F4F7FA', borderRadius:12, padding:'0 14px', height:48, border:'1.5px solid #00C2B3', gap:8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{ flex:1, border:'none', background:'transparent', outline:'none', fontSize:15, fontFamily:'Inter,sans-serif', color:'#0D1F2D' }}
          />
          {query && <button onClick={() => setQuery('')} style={{ background:'none', border:'none', color:'#888', cursor:'pointer', fontSize:16, padding:0 }}>✕</button>}
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'8px 0' }}>
        {/* Origen */}
        <div style={{ padding:'10px 20px 6px', display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:32, height:32, borderRadius:'50%', background:'#E8F8F6', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#00C2B3' }}/>
          </div>
          <div>
            <div style={{ fontSize:13, color:'#888' }}>Tu ubicación actual</div>
            <div style={{ fontSize:14, fontWeight:500, color:'#0D1F2D' }}>Av. San Martín 450</div>
          </div>
        </div>
        <div style={{ height:1, background:'#EEEEEE', margin:'8px 0' }}/>
        {/* Results */}
        <div style={{ padding:'0 20px', fontSize:11, fontWeight:600, color:'#888', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:8 }}>
          {query ? 'Resultados' : 'Recientes'}
        </div>
        {(query ? results : recents).map((r,i) => (
          <div key={i} onClick={() => nav('vehicle')} style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 20px', cursor:'pointer', borderBottom:'1px solid #F4F7FA' }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:14, fontWeight:500, color:'#0D1F2D', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{r.name}</div>
              <div style={{ fontSize:12, color:'#888', marginTop:1 }}>{r.addr}</div>
            </div>
            <span style={{ color:'#00C2B3', fontSize:16, flexShrink:0 }}>›</span>
          </div>
        ))}
        {/* Elegir en el mapa */}
        <div style={{ padding:'13px 20px', cursor:'pointer', display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C2B3" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>
          </div>
          <span style={{ fontSize:14, fontWeight:500, color:'#00C2B3' }}>Elegir en el mapa</span>
        </div>
      </div>
    </div>
  );
}

function VehicleScreen({ nav }) {
  const [selected, setSelected] = React.useState('standard');
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  const options = [
    { id:'standard', icon:'🚗', label:'Lifty Standard', sub:'4 pasajeros · 3 min', price:'$2.000', badge:null },
    { id:'moto',     icon:'🏍️', label:'Lifty Moto',     sub:'1 pasajero · 5 min',  price:'$1.500', badge:'Más barato' },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('search')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Opciones de viaje</span>
      </div>
      <MapBG>
        {/* ETA float */}
        <div style={{ position:'absolute', top:12, left:12, background:'rgba(13,31,45,.85)', borderRadius:12, padding:'8px 14px', display:'flex', alignItems:'center', gap:8, backdropFilter:'blur(8px)' }}>
          <span style={{ fontSize:16 }}>🕐</span>
          <span style={{ fontSize:13, color:'#fff', fontWeight:500 }}>Llegada est. · 8 min</span>
        </div>
      </MapBG>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', marginTop:-20, padding:'0 20px', boxShadow:'0 -4px 24px rgba(13,31,45,.10)' }}>
        <Handle />
        <div style={{ padding:'12px 0 8px', fontSize:12, fontWeight:600, color:'#888', letterSpacing:'0.06em', textTransform:'uppercase' }}>Opciones de viaje</div>
        {/* Demand banner */}
        <div style={{ display:'flex', gap:10, background:'#FFF3E0', borderRadius:10, padding:'10px 12px', marginBottom:12, alignItems:'flex-start' }}>
          <span style={{ fontSize:16 }}>📈</span>
          <div>
            <div style={{ fontSize:13, fontWeight:600, color:'#92610A' }}>Alta demanda en este momento</div>
            <div style={{ fontSize:12, color:'#B07A20', marginTop:2 }}>Los precios pueden variar según la cantidad de solicitudes.</div>
          </div>
        </div>
        {options.map(opt => (
          <div key={opt.id} onClick={() => !opt.disabled && setSelected(opt.id)} style={{
            display:'flex', alignItems:'center', gap:12, padding:'14px 14px',
            borderRadius:14, marginBottom:8, cursor: opt.disabled ? 'default' : 'pointer',
            border:`2px solid ${selected===opt.id ? '#00C2B3' : '#EEEEEE'}`,
            background: selected===opt.id ? '#E8F8F6' : '#fff',
            opacity: opt.disabled ? 0.5 : 1,
          }}>
            <div style={{ width:44, height:44, borderRadius:12, background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>{opt.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ fontSize:15, fontWeight:600, color:'#0D1F2D' }}>{opt.label}</span>
                {opt.badge && <span style={{ fontSize:10, fontWeight:700, background: opt.disabled?'#E4E9EE':'#00C2B3', color: opt.disabled?'#888':'#fff', borderRadius:6, padding:'2px 7px' }}>{opt.badge}</span>}
              </div>
              <div style={{ fontSize:12, color:'#888', marginTop:2 }}>{opt.sub}</div>
            </div>
            <div style={{ fontSize:16, fontWeight:700, color:'#0D1F2D' }}>{opt.price}</div>
          </div>
        ))}
        {/* Payment */}
        <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', background:'#F4F7FA', borderRadius:12, marginBottom:14, cursor:'pointer' }} onClick={() => nav('payment')}>
          <span style={{ fontSize:20 }}>{window.activePayment === 'mp' ? '💳' : '💵'}</span>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:14, fontWeight:500, color:'#0D1F2D' }}>{window.activePayment === 'mp' ? 'Mercado Pago' : 'Efectivo'}</div>
            <div style={{ fontSize:12, color:'#888' }}>Tocá para cambiar</div>
          </div>
          <span style={{ color:'#00C2B3' }}>→</span>
        </div>
        <Btn onClick={() => nav('confirm')}>Solicitar Lifty Standard</Btn>
        <div style={{ height:16 }}/>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function ConfirmScreen({ nav }) {
  const [note, setNote] = React.useState('');
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('vehicle')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Confirmar y pagar</span>
      </div>
      {/* Mini map */}
      <div style={{ height:140, background:'linear-gradient(135deg,#1B3D6F,#2D6A9F)', position:'relative', flexShrink:0, overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'45%', left:0, right:0, height:4, background:'#3A7AC4', opacity:.5 }}/>
        <div style={{ position:'absolute', top:'30%', left:'15%', right:'20%', height:3, background:'#00C2B3', opacity:.9, borderRadius:2 }}/>
        <div style={{ position:'absolute', top:'26%', left:'14%', width:10, height:10, borderRadius:'50%', background:'#00C2B3' }}/>
        <div style={{ position:'absolute', top:'23%', right:'19%', width:12, height:12, borderRadius:'50%', background:'#F5A623', boxShadow:'0 2px 8px rgba(245,166,35,.5)' }}/>
      </div>
      {/* Trip info */}
      <div style={{ flex:1, overflowY:'auto', padding:'20px 20px 0' }}>
        {/* Route */}
        <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:16 }}>
          {[
            { color:'#00C2B3', label:'Av. San Martín 450' },
            { color:'#F5A623', label:'Terminal de Ómnibus' },
          ].map((r,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:12, height:12, borderRadius:'50%', background:r.color, flexShrink:0 }}/>
              <span style={{ fontSize:15, fontWeight:500, color:'#0D1F2D' }}>{r.label}</span>
            </div>
          ))}
        </div>
        <div style={{ height:1, background:'#EEEEEE', marginBottom:16 }}/>
        {/* Price card */}
        <div style={{ background:'#F4F7FA', borderRadius:14, padding:'16px 18px', marginBottom:16 }}>
          <div style={{ fontSize:28, fontWeight:700, color:'#00C2B3', lineHeight:1 }}>$2.000</div>
          <div style={{ fontSize:13, color:'#888', marginTop:4 }}>Lifty Standard · 3 min</div>
          <div style={{ fontSize:12, color:'#AAAAAA', marginTop:4 }}>Se te asignará el conductor más cercano</div>
        </div>
        {/* Payment */}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
          <span style={{ fontSize:13, color:'#888' }}>Pago con:</span>
          <div style={{ display:'flex', alignItems:'center', gap:6, background:'#F4F7FA', borderRadius:20, padding:'6px 12px' }}>
            <span style={{ fontSize:14 }}>{window.activePayment === 'mp' ? '💳' : '💵'}</span>
            <span style={{ fontSize:13, fontWeight:600, color:'#0D1F2D' }}>{window.activePayment === 'mp' ? 'Mercado Pago' : 'Efectivo'}</span>
          </div>
          <span style={{ fontSize:13, color:'#00C2B3', cursor:'pointer' }} onClick={() => nav('payment')}>Cambiar →</span>
        </div>
        {/* Note to driver */}
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:13, color:'#888', marginBottom:8 }}>Nota al conductor (opcional)</div>
          <input value={note} onChange={e => setNote(e.target.value)} placeholder="Ej.: puerta negra, frente a la plaza" style={{ width:'100%', height:48, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'0 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D', boxSizing:'border-box' }}/>
        </div>
        <div style={{ fontSize:12, color:'#888', marginBottom:20, lineHeight:1.5 }}>
          ℹ️ El precio final puede variar según espera o cambios en el recorrido.
        </div>
      </div>
      <div style={{ padding:'12px 20px 24px', boxShadow:'0 -1px 0 #EEEEEE' }}>
        <Btn onClick={() => nav('searching')}>CONFIRMAR VIAJE · $2.000</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, SearchScreen, VehicleScreen, ConfirmScreen });
