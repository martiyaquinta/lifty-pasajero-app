// ExtraScreens.jsx — Support, Chat, Trips History, Trip Detail, Receipt, Lost Item, Trip For Other, Bad Rating

// ── Trips History (populated) ──────────────────────────────────────────────
function TripsHistoryScreen({ nav }) {
  const [filter, setFilter] = React.useState('todos');
  const [tab, setTab] = React.useState('viajes');
  const handleTab = (id) => { setTab(id); if(id==='inicio') nav('home'); if(id==='perfil') nav('profile'); };

  const trips = [
    { id:'VJ-2041', date:'Hoy, 9:41', from:'Av. San Martín 450', to:'Terminal de Ómnibus', driver:'Carlos M.', price:'$2.500', status:'completado' },
    { id:'VJ-2038', date:'Ayer, 18:22', from:'Hospital Regional', to:'Av. San Martín 450', driver:'Diego P.', price:'$1.800', status:'completado' },
    { id:'VJ-2031', date:'Lun 23, 14:05', from:'Plaza Mitre', to:'Costanera Norte', driver:'Roberto G.', price:'$1.500', status:'cancelado' },
    { id:'VJ-2028', date:'Sáb 21, 10:30', from:'Av. San Martín 450', to:'Shopping Centro', driver:'Ana R.', price:'$2.200', status:'completado' },
    { id:'VJ-2020', date:'Vie 20, 20:15', from:'Costanera Norte', to:'Av. San Martín 450', driver:'Carlos M.', price:'$1.900', status:'completado' },
  ];

  const filtered = filter === 'todos' ? trips : trips.filter(t => t.status === filter);
  const statusColor = { completado:'#2E7D32', cancelado:'#FF4D4D' };
  const statusBg = { completado:'#E8F5E9', cancelado:'#FFEEEE' };
  const statusLabel = { completado:'Completado', cancelado:'Cancelado' };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#F4F7FA' }}>
      <SBar dark={false} />
      <div style={{ background:'#fff', padding:'16px 20px 0' }}>
        <div style={{ fontSize:22, fontWeight:700, color:'#0D1F2D', marginBottom:14 }}>Mis Viajes</div>
        <div style={{ display:'flex', gap:8, marginBottom:0 }}>
          {['todos','completado','cancelado'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ height:34, padding:'0 16px', borderRadius:9999, border:'none', background: filter===f ? '#0D1F2D' : '#F4F7FA', color: filter===f ? '#fff' : '#555', fontSize:13, fontWeight:600, cursor:'pointer', textTransform:'capitalize' }}>
              {f === 'todos' ? 'Todos' : f === 'completado' ? 'Completados' : 'Cancelados'}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'8px 0' }}>
        {filtered.map(trip => (
          <div key={trip.id} onClick={() => nav('tripdetail')} style={{ background:'#fff', margin:'6px 16px', borderRadius:14, padding:'14px 16px', cursor:'pointer', boxShadow:'0 2px 8px rgba(13,31,45,.06)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
              <div style={{ fontSize:12, color:'#888' }}>{trip.date}</div>
              <span style={{ fontSize:11, fontWeight:600, color:statusColor[trip.status], background:statusBg[trip.status], borderRadius:9999, padding:'2px 8px' }}>{statusLabel[trip.status]}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:10 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'#00C2B3', flexShrink:0 }}/>
                <span style={{ fontSize:13, color:'#0D1F2D', fontWeight:500 }}>{trip.from}</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'#F5A623', flexShrink:0 }}/>
                <span style={{ fontSize:13, color:'#0D1F2D', fontWeight:500 }}>{trip.to}</span>
              </div>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span style={{ fontSize:12, color:'#888' }}>🚗 {trip.driver}</span>
              <span style={{ fontSize:15, fontWeight:700, color:'#0D1F2D' }}>{trip.price}</span>
            </div>
          </div>
        ))}
        <div style={{ height:8 }}/>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

// ── Trip Detail ────────────────────────────────────────────────────────────
function TripDetailScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('trips')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Detalle del viaje</span>
      </div>
      {/* Mini map */}
      <div style={{ height:120, background:'linear-gradient(135deg,#1B3D6F,#2D6A9F)', position:'relative', flexShrink:0, overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'45%', left:0, right:0, height:3, background:'#3A7AC4', opacity:.5 }}/>
        <div style={{ position:'absolute', top:'30%', left:'15%', right:'20%', height:2, background:'#00C2B3', opacity:.9, borderRadius:2 }}/>
        <div style={{ position:'absolute', top:'27%', left:'14%', width:9, height:9, borderRadius:'50%', background:'#00C2B3' }}/>
        <div style={{ position:'absolute', top:'24%', right:'19%', width:10, height:10, borderRadius:'50%', background:'#F5A623' }}/>
        <div style={{ position:'absolute', bottom:8, right:12, background:'rgba(13,31,45,.8)', borderRadius:8, padding:'4px 10px', fontSize:11, color:'#fff' }}>VJ-2041 · Hoy 9:41</div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'20px' }}>
        {/* Route */}
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
          {[{ color:'#00C2B3', label:'Av. San Martín 450', sub:'Origen' }, { color:'#F5A623', label:'Terminal de Ómnibus', sub:'Destino' }].map((r,i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:12, height:12, borderRadius:'50%', background:r.color, flexShrink:0 }}/>
              <div><div style={{ fontSize:14, fontWeight:500, color:'#0D1F2D' }}>{r.label}</div><div style={{ fontSize:11, color:'#888' }}>{r.sub}</div></div>
            </div>
          ))}
        </div>
        <div style={{ height:1, background:'#EEEEEE', margin:'0 0 16px' }}/>
        {/* Driver */}
        <div style={{ display:'flex', alignItems:'center', gap:12, background:'#F4F7FA', borderRadius:14, padding:'14px', marginBottom:16 }}>
          <div style={{ width:44, height:44, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', fontSize:18 }}>C</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:15, fontWeight:600, color:'#0D1F2D' }}>Carlos M.</div>
            <div style={{ fontSize:12, color:'#888' }}>Chevrolet Prisma · ABC 123 · ⭐ 4.8</div>
          </div>
          <span style={{ fontSize:11, color:'#00C2B3', fontWeight:600, background:'#E8F8F6', borderRadius:8, padding:'4px 8px' }}>Tu calificación: ⭐ 5</span>
        </div>
        {/* Price */}
        <div style={{ background:'#F4F7FA', borderRadius:14, padding:'16px', marginBottom:16 }}>
          {[['Bajada de bandera','$2.000'],['Distancia (16 cdas)','$500']].map(([k,v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize:13, color:'#888', marginBottom:6 }}><span>{k}</span><span>{v}</span></div>
          ))}
          <div style={{ height:1, background:'#E4E9EE', margin:'8px 0' }}/>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:16, fontWeight:700, color:'#0D1F2D' }}><span>Total</span><span>$2.500</span></div>
          <div style={{ fontSize:12, color:'#888', marginTop:6 }}>{window.activePayment === 'mp' ? '💳 Mercado Pago' : '💵 Efectivo'}</div>
        </div>
        <div style={{ display:'flex', gap:10, marginBottom:8 }}>
          <Btn variant="primary" full={false} style={{ flex:1, fontSize:13 }} onClick={() => nav('vehicle')}>Pedir viaje similar</Btn>
          <Btn variant="primary" full={false} style={{ flex:1, fontSize:13 }} onClick={() => nav('receipt')}>Ver recibo</Btn>
        </div>
        <Btn variant="primary" full onClick={() => nav('support')}>Necesito ayuda con este viaje</Btn>
        <div style={{ height:16 }}/>
      </div>
    </div>
  );
}

// ── Receipt ────────────────────────────────────────────────────────────────
function ReceiptScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#F4F7FA' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('tripdetail')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Comprobante de viaje</span>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'12px 16px' }}>
        <div style={{ background:'#fff', borderRadius:16, padding:'20px', boxShadow:'0 2px 12px rgba(13,31,45,.08)' }}>
          {/* Header */}
          <div style={{ textAlign:'center', marginBottom:20, paddingBottom:16, borderBottom:'1px dashed #E4E9EE' }}>
            <img src="../../assets/logo.png" alt="Lifty" style={{ width:120, height:'auto' }} />
            <div style={{ fontSize:12, color:'#888', marginTop:4 }}>Comprobante de viaje</div>
          </div>
          {[
            ['N° de viaje', 'VJ-2041'],
            ['Fecha y hora', 'Martes 24/06 · 9:41 hs'],
            ['Conductor', 'Carlos M.'],
            ['Vehículo', 'Chevrolet Prisma · ABC 123'],
            ['Origen', 'Av. San Martín 450'],
            ['Destino', 'Terminal de Ómnibus'],
            ['Duración', '12 min · 3.2 km'],
            ['Método de pago', window.activePayment === 'mp' ? '💳 Mercado Pago' : '💵 Efectivo'],
          ].map(([k,v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'9px 0', borderBottom:'1px solid #F4F7FA' }}>
              <span style={{ fontSize:13, color:'#888' }}>{k}</span>
              <span style={{ fontSize:13, fontWeight:500, color:'#0D1F2D', textAlign:'right', maxWidth:'55%' }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop:12, paddingTop:12, borderTop:'1px dashed #E4E9EE', display:'flex', justifyContent:'space-between' }}>
            <span style={{ fontSize:16, fontWeight:700, color:'#0D1F2D' }}>Total</span>
            <span style={{ fontSize:20, fontWeight:800, color:'#00C2B3' }}>$2.500</span>
          </div>
        </div>
        <div style={{ display:'flex', gap:10, margin:'16px 0' }}>
          <Btn variant="secondary" full={false} style={{ flex:1 }}>Compartir</Btn>
          <Btn variant="outline" full={false} style={{ flex:1 }} onClick={() => nav('support')}>Soporte</Btn>
        </div>
      </div>
    </div>
  );
}

// ── Support / Centro de Ayuda ──────────────────────────────────────────────
function SupportScreen({ nav }) {
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  const cats = [
    { icon:'🚗', label:'Problema con un viaje', dest:'support' },
    { icon:'🎒', label:'Objeto olvidado', dest:'lostitem' },
    { icon:'💳', label:'Problema de pago', dest:'chat' },
    { icon:'🔒', label:'Seguridad', dest:'chat' },
    { icon:'👤', label:'Cuenta y perfil', dest:'chat' },
    { icon:'❓', label:'Otro problema', dest:'chat' },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#F4F7FA' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12, background:'#fff' }}>
        <button onClick={() => nav('profile')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Soporte</span>
      </div>
        <div style={{ display:'flex', alignItems:'center', gap:10, background:'#F4F7FA', borderRadius:12, padding:'0 14px', height:46 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
          <input placeholder="Buscar ayuda..." style={{ flex:1, border:'none', background:'transparent', outline:'none', fontSize:14, fontFamily:'Inter,sans-serif', color:'#0D1F2D' }}/>
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'12px 16px' }}>
        {/* Active trip support shortcut */}
        <div style={{ background:'#E8F8F6', borderRadius:14, padding:'14px 16px', marginBottom:14, display:'flex', alignItems:'center', gap:12 }} onClick={() => nav('chat')}>
          <div style={{ width:40, height:40, borderRadius:12, background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>Chat con soporte Lifty</div>
            <div style={{ fontSize:12, color:'#00C2B3' }}>Respuesta rápida · Atención local</div>
          </div>
          <span style={{ color:'#00C2B3', fontSize:18 }}>›</span>
        </div>
        <div style={{ fontSize:11, fontWeight:600, color:'#888', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Categorías</div>
        <div style={{ background:'#fff', borderRadius:14, overflow:'hidden', boxShadow:'0 2px 8px rgba(13,31,45,.06)' }}>
          {cats.map((c,i) => (
            <div key={i} onClick={() => nav(c.dest)} style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', borderBottom: i<cats.length-1 ? '1px solid #F4F7FA' : 'none', cursor:'pointer' }}>
              <span style={{ fontSize:22, width:28 }}>{c.icon}</span>
              <span style={{ flex:1, fontSize:14, fontWeight:500, color:'#0D1F2D' }}>{c.label}</span>
              <span style={{ color:'#BBBBBB', fontSize:18 }}>›</span>
            </div>
          ))}
        </div>
        <div style={{ height:16 }}/>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

// ── Chat ───────────────────────────────────────────────────────────────────
function ChatScreen({ nav }) {
  const [msg, setMsg] = React.useState('');
  const [msgs, setMsgs] = React.useState([
    { from:'agent', text:'¡Hola! Soy el equipo de soporte de Lifty 👋 ¿En qué puedo ayudarte hoy?', time:'9:42' },
  ]);
  const send = () => {
    if (!msg.trim()) return;
    const newMsgs = [...msgs, { from:'user', text:msg, time:'9:43' }];
    setMsgs(newMsgs);
    setMsg('');
    setTimeout(() => setMsgs(m => [...m, { from:'agent', text:'Gracias por tu mensaje. Un agente local de Villa Dolores te responderá en breve.', time:'9:43' }]), 1200);
  };
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#F4F7FA' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12, background:'#fff', borderBottom:'1px solid #F4F7FA' }}>
        <button onClick={() => nav('support')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <div style={{ width:36, height:36, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <div>
          <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>Soporte Lifty</div>
          <div style={{ fontSize:11, color:'#00C2B3' }}>● En línea · Atención local</div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:10 }}>
        {msgs.map((m,i) => (
          <div key={i} style={{ display:'flex', justifyContent: m.from==='user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth:'78%', background: m.from==='user' ? '#00C2B3' : '#fff', color: m.from==='user' ? '#fff' : '#0D1F2D', borderRadius: m.from==='user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', padding:'10px 14px', fontSize:14, lineHeight:1.5, boxShadow:'0 1px 4px rgba(13,31,45,.08)' }}>
              {m.text}
              <div style={{ fontSize:10, color: m.from==='user' ? 'rgba(255,255,255,.7)' : '#888', marginTop:4, textAlign:'right' }}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background:'#fff', padding:'12px 16px', display:'flex', gap:10, borderTop:'1px solid #F4F7FA' }}>
        <input value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} placeholder="Escribí tu mensaje..." style={{ flex:1, height:44, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'0 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D' }}/>
        <button onClick={send} style={{ width:44, height:44, borderRadius:12, background:'#00C2B3', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── Lost Item Report ───────────────────────────────────────────────────────
function LostItemScreen({ nav }) {
  const [step, setStep] = React.useState(1);
  const [item, setItem] = React.useState('');
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => step===1 ? nav('support') : setStep(1)} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Objeto olvidado</span>
      </div>
      {step === 1 ? (
        <div style={{ flex:1, padding:'16px 20px' }}>
          <div style={{ fontSize:14, color:'#555', marginBottom:16 }}>¿En qué viaje olvidaste el objeto?</div>
          {[
            { id:'VJ-2041', date:'Hoy 9:41', route:'San Martín → Terminal' },
            { id:'VJ-2038', date:'Ayer 18:22', route:'Hospital → San Martín' },
          ].map(t => (
            <div key={t.id} onClick={() => setStep(2)} style={{ background:'#F4F7FA', borderRadius:14, padding:'14px 16px', marginBottom:10, cursor:'pointer', border:'1.5px solid transparent' }}>
              <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D', marginBottom:4 }}>{t.route}</div>
              <div style={{ fontSize:12, color:'#888' }}>{t.date} · {t.id}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex:1, padding:'16px 20px', display:'flex', flexDirection:'column', gap:14 }}>
          <div style={{ background:'#FFF8E8', borderRadius:12, padding:'12px 14px', fontSize:13, color:'#92610A', lineHeight:1.5 }}>
            ℹ️ Vamos a contactar al conductor del viaje seleccionado para ayudarte a recuperar el objeto.
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:600, color:'#0D1F2D', marginBottom:6 }}>Describí el objeto</div>
            <textarea value={item} onChange={e => setItem(e.target.value)} placeholder="Ej.: Mochila negra, marca Nike, con una billetera adentro..." style={{ width:'100%', height:96, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'12px 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', resize:'none', color:'#0D1F2D', boxSizing:'border-box' }}/>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:600, color:'#0D1F2D', marginBottom:6 }}>Tu número de contacto</div>
            <input defaultValue="+54 3544 123456" style={{ width:'100%', height:52, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'0 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D', boxSizing:'border-box' }}/>
          </div>
          <div style={{ flex:1 }}/>
          <Btn onClick={() => nav('support')}>ENVIAR REPORTE</Btn>
        </div>
      )}
    </div>
  );
}

// ── Trip For Someone Else ──────────────────────────────────────────────────
function TripForOtherScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Pedir para otra persona</span>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'16px 20px' }}>
        <div style={{ background:'#E8F8F6', borderRadius:12, padding:'12px 14px', fontSize:13, color:'#0D1F2D', lineHeight:1.5, marginBottom:20, display:'flex', gap:10 }}>
          <span>ℹ️</span>
          <span>Esa persona recibirá los datos del conductor por SMS al número que indiques.</span>
        </div>
        {[
          { label:'Nombre de la persona', ph:'Ej.: Ana García' },
          { label:'Teléfono de la persona', ph:'3544 000000' },
        ].map(f => (
          <div key={f.label} style={{ marginBottom:14 }}>
            <div style={{ fontSize:12, fontWeight:600, color:'#888', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:6 }}>{f.label}</div>
            <input placeholder={f.ph} style={{ width:'100%', height:52, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'0 14px', fontSize:15, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D', boxSizing:'border-box' }}/>
          </div>
        ))}
        <div style={{ height:1, background:'#EEEEEE', margin:'8px 0 16px' }}/>
        {[
          { icon:'🟢', label:'Punto de partida', val:'Av. San Martín 450' },
          { icon:'🟠', label:'Destino', val:'Terminal de Ómnibus' },
        ].map((r,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:12, background:'#F4F7FA', borderRadius:12, padding:'12px 14px', marginBottom:10, cursor:'pointer' }}>
            <span style={{ fontSize:16 }}>{r.icon}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:11, color:'#888' }}>{r.label}</div>
              <div style={{ fontSize:14, fontWeight:500, color:'#0D1F2D' }}>{r.val}</div>
            </div>
            <span style={{ color:'#00C2B3' }}>›</span>
          </div>
        ))}
        <div style={{ marginBottom:14 }}>
          <div style={{ fontSize:12, fontWeight:600, color:'#888', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:6 }}>Referencia para el conductor</div>
          <input placeholder="Ej.: frente al kiosco verde" style={{ width:'100%', height:52, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'0 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D', boxSizing:'border-box' }}/>
        </div>
      </div>
      <div style={{ padding:'12px 20px 24px', borderTop:'1px solid #EEEEEE' }}>
        <Btn onClick={() => nav('confirm')}>CONFIRMAR Y PEDIR</Btn>
      </div>
    </div>
  );
}

// ── Bad Rating / Report ────────────────────────────────────────────────────
function BadRatingScreen({ nav }) {
  const [selected, setSelected] = React.useState([]);
  const options = ['Llegó tarde','Manejo inseguro','Mala actitud','Ruta incorrecta','Auto sucio','Me cobró de más'];
  const toggle = (o) => setSelected(s => s.includes(o) ? s.filter(x=>x!==o) : [...s, o]);
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('finished')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Reportar problema</span>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'24px 20px' }}>
        <div style={{ fontSize:22, fontWeight:700, color:'#0D1F2D', marginBottom:6 }}>Contanos qué pasó</div>
        <div style={{ fontSize:14, color:'#888', marginBottom:20 }}>Tu reporte es confidencial y nos ayuda a mejorar.</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:24 }}>
          {options.map(o => (
            <button key={o} onClick={() => toggle(o)} style={{ height:38, padding:'0 16px', borderRadius:9999, border:`1.5px solid ${selected.includes(o)?'#FF4D4D':'#DDDDDD'}`, background: selected.includes(o)?'#FFEEEE':'#fff', color: selected.includes(o)?'#FF4D4D':'#555', fontSize:13, fontWeight:600, cursor:'pointer' }}>{o}</button>
          ))}
        </div>
        <div style={{ fontSize:13, fontWeight:600, color:'#0D1F2D', marginBottom:8 }}>Contá más detalles (opcional)</div>
        <textarea placeholder="¿Qué ocurrió durante el viaje?" style={{ width:'100%', height:90, borderRadius:12, border:'1.5px solid #E4E9EE', padding:'12px 14px', fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', resize:'none', color:'#0D1F2D', boxSizing:'border-box', marginBottom:20 }}/>
        <div style={{ background:'#FFEEEE', borderRadius:12, padding:'12px 14px', fontSize:13, color:'#FF4D4D', lineHeight:1.5, marginBottom:20 }}>
          Si viviste una situación de riesgo o emergencia, contactá a soporte directo.
        </div>
      </div>
      <div style={{ padding:'12px 20px 24px', display:'flex', gap:10, borderTop:'1px solid #EEEEEE' }}>
        <Btn variant="outline" full={false} style={{ flex:1 }} onClick={() => nav('home')}>Omitir</Btn>
        <Btn destructive full={false} style={{ flex:1 }} onClick={() => nav('home')}>ENVIAR REPORTE</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { TripsHistoryScreen, TripDetailScreen, ReceiptScreen, SupportScreen, ChatScreen, LostItemScreen, TripForOtherScreen, BadRatingScreen });
