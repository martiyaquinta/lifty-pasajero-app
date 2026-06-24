// ErrorScreens.jsx — No drivers, Driver cancelled, GPS off, Out of coverage, Pending payment

function ErrorLayout({ icon, title, desc, btnLabel, btnAction, btnVariant='primary', secondLabel, secondAction }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 32px', textAlign:'center', gap:16 }}>
        <div style={{ fontSize:68 }}>{icon}</div>
        <div style={{ fontSize:24, fontWeight:700, color:'#0D1F2D', lineHeight:1.25 }}>{title}</div>
        <div style={{ fontSize:15, color:'#666', lineHeight:1.7, maxWidth:300 }}>{desc}</div>
        <div style={{ marginTop:8, width:'100%' }}>
          <Btn variant={btnVariant} onClick={btnAction}>{btnLabel}</Btn>
          {secondLabel && (
            <button onClick={secondAction} style={{ background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'12px', width:'100%', marginTop:4 }}>{secondLabel}</button>
          )}
        </div>
      </div>
    </div>
  );
}

function NoDriversScreen({ nav }) {
  return (
    <ErrorLayout
      icon="🚗"
      title="No hay conductores disponibles"
      desc="En este momento no hay conductores cerca tuyo. Suele pasar en horarios de mucha demanda. Esperá unos minutos e intentá de nuevo."
      btnLabel="REINTENTAR"
      btnAction={() => nav('searching')}
      secondLabel="Volver al inicio"
      secondAction={() => nav('home')}
    />
  );
}

function DriverCancelledScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 32px', textAlign:'center', gap:16 }}>
        <div style={{ fontSize:68 }}>😔</div>
        <div style={{ fontSize:24, fontWeight:700, color:'#0D1F2D', lineHeight:1.25 }}>Tu conductor canceló</div>
        <div style={{ fontSize:15, color:'#666', lineHeight:1.7, maxWidth:300 }}>
          Carlos M. tuvo que cancelar el viaje. No se aplicó ningún cargo.
        </div>
        <div style={{ background:'#E8F8F6', borderRadius:12, padding:'12px 16px', width:'100%', fontSize:13, color:'#0D1F2D', lineHeight:1.5 }}>
          💡 Podemos buscarte otro conductor de inmediato.
        </div>
        <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:10 }}>
          <Btn onClick={() => nav('searching')}>BUSCAR OTRO CONDUCTOR</Btn>
          <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'10px' }}>Volver al inicio</button>
        </div>
      </div>
    </div>
  );
}

function GPSOffScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 32px', textAlign:'center', gap:16 }}>
        <div style={{ width:90, height:90, borderRadius:'50%', background:'#FFF3E0', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <line x1="3" y1="3" x2="21" y2="21"/>
          </svg>
        </div>
        <div style={{ fontSize:24, fontWeight:700, color:'#0D1F2D', lineHeight:1.25 }}>GPS desactivado</div>
        <div style={{ fontSize:15, color:'#666', lineHeight:1.7 }}>
          Necesitamos acceder a tu ubicación para encontrar conductores cerca tuyo.<br/><br/>
          Activá el GPS en la configuración de tu teléfono.
        </div>
        <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:10 }}>
          <Btn onClick={() => nav('home')}>ACTIVAR UBICACIÓN</Btn>
          <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'10px' }}>Ingresar dirección manualmente</button>
        </div>
      </div>
    </div>
  );
}

function OutOfCoverageScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#0D1F2D' }}>
      <SBar dark />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 32px', textAlign:'center', gap:16 }}>
        <div style={{ fontSize:68 }}>📍</div>
        <div style={{ fontSize:24, fontWeight:700, color:'#fff', lineHeight:1.25 }}>Fuera del área de cobertura</div>
        <div style={{ fontSize:15, color:'#8899AA', lineHeight:1.7 }}>
          Lifty todavía no opera en esta zona.<br/><br/>
          Por ahora cubrimos Villa Dolores y alrededores. Pronto expandiremos a más ciudades.
        </div>
        <div style={{ background:'#1A2F45', borderRadius:12, padding:'14px 16px', width:'100%', fontSize:13, color:'#8899AA', lineHeight:1.5 }}>
          📍 Zona activa: Villa Dolores, Córdoba
        </div>
        <div style={{ width:'100%' }}>
          <Btn onClick={() => nav('home')}>VOLVER AL INICIO</Btn>
        </div>
      </div>
    </div>
  );
}

function PendingPaymentScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 32px', textAlign:'center', gap:16 }}>
        <div style={{ width:90, height:90, borderRadius:'50%', background:'#FFF3E0', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        </div>
        <div style={{ fontSize:24, fontWeight:700, color:'#0D1F2D', lineHeight:1.25 }}>Pago pendiente</div>
        <div style={{ fontSize:15, color:'#666', lineHeight:1.7 }}>
          Tenés un pago pendiente de tu último viaje. Para pedir un nuevo viaje, primero resolvé el pago.
        </div>
        <div style={{ background:'#F4F7FA', borderRadius:14, padding:'16px', width:'100%' }}>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:14, color:'#0D1F2D', marginBottom:6 }}><span>Viaje VJ-2041</span><span style={{ fontWeight:700 }}>$2.500</span></div>
          <div style={{ fontSize:12, color:'#888' }}>Hoy 9:41 · Efectivo sin confirmar</div>
        </div>
        <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:10 }}>
          <Btn onClick={() => nav('home')}>RESOLVER PAGO</Btn>
          <button onClick={() => nav('support')} style={{ background:'none', border:'none', color:'#00C2B3', fontSize:14, cursor:'pointer', padding:'10px' }}>Necesito ayuda con el pago</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NoDriversScreen, DriverCancelledScreen, GPSOffScreen, OutOfCoverageScreen, PendingPaymentScreen });
