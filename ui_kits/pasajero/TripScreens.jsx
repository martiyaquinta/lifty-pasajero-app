// TripScreens.jsx — Searching, Assigned, InProgress, Reminder, Finished, Cancel, Cancelled

function SearchingScreen({ nav }) {
  const [stage, setStage] = React.useState('connecting'); // connecting → accepted → assigning
  const [seconds, setSeconds] = React.useState(0);
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  React.useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  React.useEffect(() => {
    if (seconds === 3) setStage('accepted');
    if (seconds === 5) nav('assigned');
  }, [seconds]);

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('confirm')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Conectando...</span>
      </div>
      <MapBG>
        {/* Animated car */}
        <div style={{ position:'absolute', top:'43%', left:'38%', fontSize:28, animation:'car-move 2s ease-in-out infinite' }}>🚗</div>
      </MapBG>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', marginTop:-20, padding:'24px 20px', boxShadow:'0 -4px 24px rgba(13,31,45,.10)' }}>
        <Handle />
        <div style={{ padding:'12px 0 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
            <span style={{ fontSize:24 }}>🚗</span>
            <div>
              <div style={{ fontSize:15, fontWeight:600, color:'#0D1F2D' }}>Lifty Standard</div>
              <div style={{ fontSize:13, color:'#888' }}>2-4 min · Tiempo estimado de espera</div>
            </div>
          </div>
          {stage === 'connecting' && (
            <div style={{ display:'flex', alignItems:'center', gap:10, background:'#F4F7FA', borderRadius:12, padding:'14px', marginBottom:14, animation:'fade-in 300ms ease' }}>
              <div style={{ width:22, height:22, borderRadius:'50%', border:'3px solid #00C2B3', borderTopColor:'transparent', animation:'lifty-spin 0.7s linear infinite', flexShrink:0 }}/>
              <span style={{ fontSize:14, color:'#555' }}>Conectando con el conductor más cercano...</span>
            </div>
          )}
          {stage === 'accepted' && (
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:14, animation:'slide-up 400ms ease' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, background:'#E8F8F6', borderRadius:12, padding:'12px 14px' }}>
                <span style={{ fontSize:18 }}>✅</span>
                <span style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>¡Carlos M. aceptó tu viaje!</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 14px', background:'#F4F7FA', borderRadius:12 }}>
                <div style={{ width:44, height:44, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', fontSize:18, flexShrink:0 }}>C</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>Carlos M.</div>
                  <div style={{ fontSize:12, color:'#888' }}>Chevrolet Prisma · ABC 123 · ⭐ 4.8</div>
                </div>
                <div style={{ fontSize:24, fontWeight:800, color:'#00C2B3' }}>3 min</div>
              </div>
            </div>
          )}
          <div style={{ fontSize:13, color:'#888', lineHeight:1.5, marginBottom:16 }}>
            {stage === 'connecting' ? 'Estamos buscando conductores disponibles cerca tuyo.' : 'El conductor está en camino a tu ubicación...'}
          </div>
          <Btn variant="outline" destructive onClick={() => nav('cancel')}>Cancelar viaje</Btn>
          <button onClick={() => nav('nodrivers')} style={{ width:'100%', background:'none', border:'none', color:'#CCCCCC', fontSize:11, cursor:'pointer', padding:'6px 0', marginTop:4 }}>Demo: no hay conductores</button>
          <div style={{ height:8 }}/>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function AssignedScreen({ nav }) {
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('searching')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Tu conductor</span>
      </div>
      <MapBG>
        <div style={{ position:'absolute', bottom:16, right:16, background:'rgba(13,31,45,.85)', borderRadius:12, padding:'8px 14px', display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#00C2B3', animation:'pulse-ring 1.5s infinite' }}/>
          <span style={{ fontSize:12, color:'#fff' }}>Carlos M. en camino</span>
        </div>
      </MapBG>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', marginTop:-20, padding:'0 20px', boxShadow:'0 -4px 24px rgba(13,31,45,.10)' }}>
        <Handle />
        <div style={{ padding:'12px 0 0' }}>
          {/* ETA */}
          <div style={{ textAlign:'center', marginBottom:14 }}>
            <div style={{ fontSize:42, fontWeight:800, color:'#00C2B3', lineHeight:1 }}>3 min</div>
            <div style={{ fontSize:13, color:'#888', marginTop:2 }}>Tu conductor llega en</div>
          </div>
          {/* Driver info */}
          <div style={{ display:'flex', alignItems:'center', gap:14, padding:'14px', background:'#F4F7FA', borderRadius:16, marginBottom:12 }}>
            <div style={{ width:52, height:52, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:700, color:'#fff', flexShrink:0 }}>C</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:700, color:'#0D1F2D' }}>Carlos M.</div>
              <div style={{ fontSize:13, color:'#888' }}>Chevrolet Prisma · ABC 123 · ⭐ 4.8</div>
            </div>
          </div>
          {/* Route */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12, fontSize:13, color:'#555' }}>
            <span style={{ color:'#00C2B3', fontWeight:600 }}>Av. San Martín 450</span>
            <span>→</span>
            <span style={{ color:'#F5A623', fontWeight:600 }}>Terminal de Ómnibus</span>
          </div>
          {/* Wait info */}
          <div style={{ display:'flex', gap:8, background:'#FFF8E8', borderRadius:10, padding:'10px 12px', marginBottom:14, fontSize:12, color:'#92610A', alignItems:'flex-start' }}>
            <span>⏱️</span>
            <span>El conductor te espera hasta 5 min. Pasado ese tiempo se puede aplicar un cargo.</span>
          </div>
          {/* Actions */}
          <div style={{ display:'flex', gap:10, marginBottom:12 }}>
            {[
              { icon:'📞', label:'Llamar' },
              { icon:'💬', label:'Mensaje' },
              { icon:'🔗', label:'Compartir' },
            ].map(a => (
              <div key={a.label} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:6, background:'#F4F7FA', borderRadius:12, padding:'12px 0', cursor:'pointer' }}>
                <span style={{ fontSize:20 }}>{a.icon}</span>
                <span style={{ fontSize:12, fontWeight:500, color:'#0D1F2D' }}>{a.label}</span>
              </div>
            ))}
          </div>
          <Btn onClick={() => nav('inprogress')}>EL AUTO LLEGÓ — ESTOY LISTO</Btn>
          <button onClick={() => nav('cancel')} style={{ width:'100%', background:'none', border:'none', color:'#888', fontSize:13, cursor:'pointer', padding:'12px' }}>Cancelar viaje</button>
          <button onClick={() => nav('drivercancelled')} style={{ width:'100%', background:'none', border:'none', color:'#CCCCCC', fontSize:11, cursor:'pointer', padding:'4px 0' }}>Demo: conductor cancela</button>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function InProgressScreen({ nav }) {
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('assigned')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Viaje en curso</span>
      </div>
      <MapBG>
        <div style={{ position:'absolute', top:12, left:'50%', transform:'translateX(-50%)', background:'rgba(13,31,45,.9)', borderRadius:9999, padding:'6px 14px', display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#00C2B3' }}/>
          <span style={{ fontSize:13, color:'#fff', fontWeight:500 }}>Viaje en curso</span>
        </div>
      </MapBG>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', marginTop:-20, padding:'0 20px', boxShadow:'0 -4px 24px rgba(13,31,45,.10)' }}>
        <Handle />
        <div style={{ padding:'12px 0 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
            <div style={{ width:44, height:44, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', fontSize:18, flexShrink:0 }}>C</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>Carlos M. · Chevrolet Prisma</div>
              <div style={{ fontSize:12, color:'#888' }}>⭐ 4.9 · ABC 123</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontSize:22, fontWeight:800, color:'#0D1F2D', lineHeight:1 }}>5 min</div>
              <div style={{ fontSize:11, color:'#888' }}>3.2 km</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:10, marginBottom:14 }}>
            {[
              { icon:'📞', label:'Llamar' },
              { icon:'💬', label:'Mensaje' },
              { icon:'🔴', label:'SOS', sos:true },
            ].map(a => (
              <div key={a.label} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:6, background: a.sos ? '#FFEEEE' : '#F4F7FA', borderRadius:12, padding:'12px 0', cursor:'pointer' }}>
                <span style={{ fontSize:20 }}>{a.icon}</span>
                <span style={{ fontSize:12, fontWeight:500, color: a.sos ? '#FF4D4D' : '#0D1F2D' }}>{a.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10, background:'#F4F7FA', borderRadius:12, padding:'12px 14px', cursor:'pointer' }} onClick={() => nav('reminder')}>
            <span style={{ fontSize:16 }}>🔗</span>
            <span style={{ fontSize:13, fontWeight:500, color:'#0D1F2D', flex:1 }}>Compartir viaje en vivo</span>
            <span style={{ color:'#00C2B3' }}>›</span>
          </div>
          <div style={{ height:12 }}/>
          <Btn onClick={() => nav('reminder')}>VER DESTINO · Terminal de Ómnibus</Btn>
          <div style={{ height:16 }}/>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function ReminderScreen({ nav }) {
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 16px', gap:12 }}>
        <button onClick={() => nav('inprogress')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Llegando...</span>
      </div>
      <MapBG>
        <div style={{ position:'absolute', top:12, left:'50%', transform:'translateX(-50%)', background:'#F5A623', borderRadius:9999, padding:'8px 16px', display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:14 }}>📍</span>
          <span style={{ fontSize:13, color:'#fff', fontWeight:600 }}>Llegando a tu destino</span>
        </div>
      </MapBG>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', marginTop:-20, padding:'0 20px', boxShadow:'0 -4px 24px rgba(13,31,45,.10)' }}>
        <Handle />
        <div style={{ padding:'12px 0 0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
            <div style={{ width:40, height:40, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', fontSize:16 }}>C</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:600, color:'#0D1F2D' }}>Carlos M.</div>
              <div style={{ fontSize:12, color:'#888' }}>🕐 1 min · llegando</div>
            </div>
          </div>
          <div style={{ background:'#FFF8E8', borderRadius:14, padding:'14px 16px', marginBottom:14 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
              <span style={{ fontSize:20 }}>🎒</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#92610A' }}>¿No olvidaste nada?</div>
                <div style={{ fontSize:12, color:'#B07A20' }}>Revisá antes de bajar</div>
              </div>
            </div>
            {['Bolso o mochila','Celular y auriculares','Documentos y billetera','Llaves'].map(item => (
              <div key={item} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                <div style={{ width:16, height:16, borderRadius:4, border:'1.5px solid #F5A623', flexShrink:0 }}/>
                <span style={{ fontSize:13, color:'#92610A' }}>{item}</span>
              </div>
            ))}
          </div>
          <Btn onClick={() => nav('finished')}>YA LLEGAMOS — CONTINUAR</Btn>
          <button style={{ width:'100%', background:'#FFEEEE', border:'none', color:'#FF4D4D', fontSize:13, fontWeight:700, letterSpacing:'0.08em', borderRadius:9999, height:48, cursor:'pointer', marginTop:10, textTransform:'uppercase' }}>🆘 REPORTAR EMERGENCIA</button>
          <div style={{ height:16 }}/>
        </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function FinishedScreen({ nav }) {
  const [stars, setStars] = React.useState(0);
  const [tab, setTab] = React.useState('inicio');
  const TabBar = window.BottomTabBar;

  const handleTab = (id) => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, overflowY:'auto' }}>
      <div style={{ textAlign:'center', padding:'28px 28px 0' }}>
        <div style={{ fontSize:56, animation:'bounce-in 600ms ease' }}>🎉</div>
        <div style={{ fontSize:32, fontWeight:800, color:'#0D1F2D', marginTop:8, lineHeight:1.2 }}>¡Llegaste!</div>
        <div style={{ fontSize:14, color:'#888', marginTop:4 }}>Terminal de Ómnibus</div>
      </div>
      {/* Trip summary */}
      <div style={{ margin:'20px 20px 0', background:'#F4F7FA', borderRadius:16, padding:'16px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
          <div style={{ width:44, height:44, borderRadius:'50%', background:'#00C2B3', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', fontSize:18 }}>C</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:15, fontWeight:600, color:'#0D1F2D' }}>Carlos M.</div>
            <div style={{ fontSize:12, color:'#888' }}>Chevrolet Prisma</div>
          </div>
          <div style={{ fontSize:26, fontWeight:800, color:'#0D1F2D' }}>$2.500</div>
        </div>
        <div style={{ height:1, background:'#E4E9EE', marginBottom:12 }}/>
        {[
          ['Bajada de bandera','$2.000'],
          ['Distancia (16 cdas)','$500'],
        ].map(([k,v]) => (
          <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize:13, color:'#888', marginBottom:6 }}>
            <span>{k}</span><span>{v}</span>
          </div>
        ))}
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:15, fontWeight:700, color:'#0D1F2D', marginTop:8 }}>
          <span>Total</span><span>$2.500</span>
        </div>
      </div>
      {/* Rating */}
      <div style={{ margin:'16px 20px 0', textAlign:'center' }}>
        <div style={{ fontSize:16, fontWeight:600, color:'#0D1F2D', marginBottom:4 }}>Calificá tu viaje con Carlos</div>
        <div style={{ fontSize:13, color:'#888', marginBottom:14 }}>Tocá para calificar</div>
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginBottom:16 }}>
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => setStars(n)} style={{ width:44, height:44, border:'none', background:'transparent', cursor:'pointer', fontSize:36, color: n<=stars ? '#F5A623' : '#E4E9EE', padding:0, transition:'color 100ms' }}>★</button>
          ))}
        </div>
        {stars > 0 && stars <= 3 && (
          <div style={{ fontSize:13, color:'#FF4D4D', marginBottom:12, animation:'fade-in 300ms ease' }}>¿Querés reportar algún problema?</div>
        )}
      </div>
      <div style={{ padding:'8px 20px 12px' }}>
        <Btn onClick={() => stars > 0 && stars <= 2 ? nav('badrating') : nav('receipt')}>
          {stars > 0 ? 'CONFIRMAR CALIFICACIÓN' : 'CONTINUAR'}
        </Btn>
      </div>
      </div>
      <window.BottomTabBar active={tab} onNavigate={handleTab} />
    </div>
  );
}

function CancelScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'rgba(13,31,45,.6)', justifyContent:'flex-end' }}>
      <div style={{ background:'#fff', borderRadius:'24px 24px 0 0', padding:'0 20px' }}>
        <Handle />
        <div style={{ padding:'20px 0', textAlign:'center' }}>
          <div style={{ fontSize:40 }}>🤔</div>
          <div style={{ fontSize:20, fontWeight:700, color:'#0D1F2D', marginTop:8, marginBottom:6 }}>¿Seguro que querés cancelar?</div>
          <div style={{ display:'flex', gap:10, background:'#F4F7FA', borderRadius:12, padding:'12px 14px', marginBottom:12, marginTop:16, textAlign:'left' }}>
            <div>
              <div style={{ fontSize:13, color:'#555', marginBottom:4 }}>🚗 Lifty Standard · $2.000</div>
              <div style={{ fontSize:13, color:'#555' }}>📍 Terminal de Ómnibus</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, justifyContent:'center', marginBottom:20 }}>
            <span style={{ fontSize:16 }}>✅</span>
            <span style={{ fontSize:13, color:'#2E7D32', fontWeight:500 }}>Cancelación sin costo</span>
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <Btn variant="outline" full={false} style={{ flex:1 }} onClick={() => nav('searching')}>Seguir con el viaje</Btn>
            <Btn destructive full={false} style={{ flex:1 }} onClick={() => nav('cancelled')}>Cancelar viaje</Btn>
          </div>
          <div style={{ height:24 }}/>
        </div>
      </div>
    </div>
  );
}

function CancelledScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff', justifyContent:'center', alignItems:'center', padding:'32px' }}>
      <div style={{ width:80, height:80, borderRadius:'50%', background:'#F4F7FA', display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, marginBottom:20 }}>👋</div>
      <div style={{ fontSize:26, fontWeight:700, color:'#0D1F2D', marginBottom:8, textAlign:'center' }}>Viaje cancelado</div>
      <div style={{ fontSize:15, color:'#888', textAlign:'center', lineHeight:1.6, marginBottom:12 }}>No te preocupes, no se aplicó ningún cargo.</div>
      <div style={{ display:'flex', gap:8, background:'#F4F7FA', borderRadius:12, padding:'12px 16px', marginBottom:32 }}>
        <span style={{ fontSize:16 }}>💡</span>
        <span style={{ fontSize:13, color:'#555' }}>¿Necesitás pedir otro viaje?</span>
      </div>
      <Btn onClick={() => nav('home')}>PEDIR OTRO VIAJE</Btn>
      <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'12px', marginTop:4 }}>Volver al inicio</button>
    </div>
  );
}

Object.assign(window, { SearchingScreen, AssignedScreen, InProgressScreen, ReminderScreen, FinishedScreen, CancelScreen, CancelledScreen });
