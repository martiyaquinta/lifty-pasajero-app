// OnboardingScreens.jsx — Login, Verify, Register, Permissions

// Splash Screen — initial screen when app opens
function SplashScreen({ nav }) {
  React.useEffect(() => {
    const t = setTimeout(() => nav('login'), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#0D1F2D', position:'relative', overflow:'hidden' }}>
      {/* Content centered */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, paddingBottom:160 }}>
        {/* Isotipo */}
        <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
          <path d="M 32 20 A 12 12 0 1 0 20 32 L 20 58 Q 20 68 30 68 L 54 68"
            stroke="#00C2B3" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        {/* Wordmark */}
        <div style={{ fontSize:48, fontWeight:700, color:'#FFFFFF', letterSpacing:'-0.5px', lineHeight:1, marginTop:-4 }}>Lifty</div>
        {/* Tagline */}
        <div style={{ textAlign:'center', lineHeight:1.5 }}>
          <span style={{ fontSize:16, color:'#8899AA', fontWeight:400 }}>Movilidad que </span>
          <span style={{ fontSize:16, color:'#00C2B3', fontWeight:600 }}>te eleva.</span>
        </div>
      </div>

      {/* City skyline + road at bottom */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0 }}>
        <svg viewBox="0 0 390 220" width="390" height="220" xmlns="http://www.w3.org/2000/svg">
          {/* Sky gradient overlay */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D1F2D" stopOpacity="1"/>
              <stop offset="40%" stopColor="#0D1F2D" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="roadGrad" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#1A2F45"/>
              <stop offset="100%" stopColor="#0D2B45"/>
            </linearGradient>
          </defs>

          {/* Road surface */}
          <polygon points="155,80 235,80 390,220 0,220" fill="url(#roadGrad)"/>

          {/* Road center lines - perspective */}
          <line x1="195" y1="85" x2="195" y2="105" stroke="#2D5F8F" strokeWidth="2" strokeDasharray="6,8"/>
          <line x1="193" y1="110" x2="192" y2="140" stroke="#2D5F8F" strokeWidth="3" strokeDasharray="8,10"/>
          <line x1="190" y1="150" x2="188" y2="190" stroke="#2D5F8F" strokeWidth="4" strokeDasharray="10,14"/>

          {/* LEFT buildings - silhouette */}
          {/* Tall thin */}
          <rect x="0"   y="30"  width="28" height="100" rx="2" fill="#122436"/>
          <rect x="6"   y="38"  width="16" height="92"  rx="1" fill="#0F1F30"/>
          {/* Windows left building */}
          {[42,54,66,78,90,102].map(y => <rect key={y} x="10" y={y} width="4" height="5" rx="1" fill="#1E3A5F" opacity="0.8"/>)}
          {[42,54,66,78,90,102].map(y => <rect key={y+'b'} x="17" y={y} width="4" height="5" rx="1" fill="#1E3A5F" opacity="0.6"/>)}

          <rect x="28"  y="55"  width="36" height="75" rx="2" fill="#122436"/>
          <rect x="44"  y="45"  width="12" height="85" rx="2" fill="#0F2035"/>
          {[58,70,82,94,106].map(y => [32,38,44,50,56].map(x => <rect key={`${x},${y}`} x={x} y={y} width="4" height="4" rx="1" fill="#1E3A5F" opacity="0.7"/>))}

          <rect x="64"  y="70"  width="30" height="60" rx="2" fill="#132538"/>
          <rect x="94"  y="85"  width="22" height="45" rx="2" fill="#0F2035"/>
          <rect x="116" y="95"  width="18" height="35" rx="1" fill="#122436"/>
          <rect x="134" y="100" width="14" height="30" rx="1" fill="#0F2035"/>

          {/* RIGHT buildings - mirror */}
          <rect x="362" y="30"  width="28" height="100" rx="2" fill="#122436"/>
          <rect x="368" y="38"  width="16" height="92"  rx="1" fill="#0F1F30"/>
          {[42,54,66,78,90,102].map(y => <rect key={y+'r'} x="370" y={y} width="4" height="5" rx="1" fill="#1E3A5F" opacity="0.8"/>)}
          {[42,54,66,78,90,102].map(y => <rect key={y+'r2'} x="377" y={y} width="4" height="5" rx="1" fill="#1E3A5F" opacity="0.6"/>)}

          <rect x="326" y="55"  width="36" height="75" rx="2" fill="#122436"/>
          <rect x="334" y="45"  width="12" height="85" rx="2" fill="#0F2035"/>

          <rect x="296" y="70"  width="30" height="60" rx="2" fill="#132538"/>
          <rect x="274" y="85"  width="22" height="45" rx="2" fill="#0F2035"/>
          <rect x="256" y="95"  width="18" height="35" rx="1" fill="#122436"/>
          <rect x="242" y="100" width="14" height="30" rx="1" fill="#0F2035"/>

          {/* Fade overlay from top */}
          <rect x="0" y="0" width="390" height="100" fill="url(#skyGrad)"/>
        </svg>
      </div>

      {/* Loading dot */}
      <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', display:'flex', gap:6 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ width:6, height:6, borderRadius:'50%', background: i===0 ? '#00C2B3' : '#1A2F45', animation:`fade-in ${0.3+i*0.15}s ease forwards` }}/>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SplashScreen });
function LiftyIsotipo({ size = 44, color = '#00C2B3' }) {
  const w = size * 0.8;
  const h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 32 20 A 12 12 0 1 0 20 32 L 20 58 Q 20 68 30 68 L 54 68"
        stroke={color} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

function LoginScreen({ nav }) {
  const [phone, setPhone] = React.useState('');
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#0D1F2D' }}>
      <SBar dark />
      {/* Hero */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 28px', gap:12 }}>
        {/* Official logo mark */}
        <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:8 }}>
          <img src="../../assets/logo.png" alt="Lifty" style={{ width:56, height:'auto' }} />
          <span style={{ fontSize:46, fontWeight:700, color:'#fff', letterSpacing:'-0.5px', lineHeight:1 }}>Lifty</span>
        </div>
        <div style={{ fontSize:15, color:'#00C2B3', fontWeight:600 }}>
          Movilidad que <span style={{ textDecoration:'none' }}>te eleva.</span>
        </div>
        <div style={{ fontSize:14, color:'#556677', lineHeight:1.65, marginTop:4 }}>
          Pedí tu viaje en minutos.<br/>Conductores de confianza de tu ciudad.
        </div>
      </div>
      {/* Form */}
      <div style={{ padding:'0 24px 28px' }}>
        <div style={{ fontSize:11, fontWeight:600, color:'#8899AA', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:8 }}>Tu número de teléfono</div>
        <div style={{ display:'flex', alignItems:'center', gap:10, background:'#1A2F45', borderRadius:14, padding:'0 16px', height:56, marginBottom:10, border:'1.5px solid #2D5F8F' }}>
          <span style={{ fontSize:18 }}>🇦🇷</span>
          <span style={{ fontSize:15, fontWeight:500, color:'#fff', flexShrink:0 }}>+54</span>
          <div style={{ width:1, height:20, background:'#2D5F8F' }}/>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="3544 123456"
            inputMode="numeric"
            style={{ flex:1, border:'none', background:'transparent', outline:'none', fontSize:16, color:'#fff', fontFamily:'Inter,sans-serif' }}
          />
        </div>
        <div style={{ fontSize:12, color:'#556677', marginBottom:24, lineHeight:1.6 }}>
          Te enviaremos un código por WhatsApp para verificar tu número.
        </div>
        <Btn onClick={() => nav('verify')}>CONTINUAR</Btn>
        <div style={{ textAlign:'center', marginTop:14, fontSize:12, color:'#556677' }}>
          Al continuar aceptás los <span style={{ color:'#00C2B3', cursor:'pointer' }}>Términos y condiciones</span>
        </div>
      </div>
    </div>
  );
}

function VerifyScreen({ nav }) {
  const [code, setCode] = React.useState(['','','','','','']);
  const [error, setError] = React.useState(false);
  const refs = [0,1,2,3,4,5].map(() => React.createRef());

  const handleInput = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    setError(false);
    if (val && i < 5) refs[i+1].current?.focus();
  };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#0D1F2D' }}>
      <SBar dark />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 20px', gap:12 }}>
        <button onClick={() => nav('login')} style={{ background:'none', border:'none', color:'#fff', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#fff' }}>Verificá tu número</span>
      </div>
      <div style={{ flex:1, padding:'32px 28px 0' }}>
        <div style={{ fontSize:14, color:'#8899AA', lineHeight:1.6, marginBottom:36, textAlign:'center' }}>
          Te enviamos un código de 6 dígitos<br/>al <strong style={{ color:'#fff' }}>+54 3544 123456</strong> vía WhatsApp
        </div>
        <div style={{ display:'flex', gap:10, justifyContent:'center', marginBottom:16 }}>
          {code.map((d, i) => (
            <input key={i} ref={refs[i]} value={d} onChange={e => handleInput(i, e.target.value)} maxLength={1}
              style={{ width:46, height:58, textAlign:'center', fontSize:24, fontWeight:700, background:'#1A2F45', border:`2px solid ${error?'#FF4D4D':d?'#00C2B3':'#2D5F8F'}`, borderRadius:12, color:'#fff', fontFamily:'Inter,sans-serif', outline:'none' }}
            />
          ))}
        </div>
        {error && <div style={{ textAlign:'center', color:'#FF4D4D', fontSize:13, marginBottom:12 }}>Código incorrecto. Intentá de nuevo.</div>}
        <div style={{ textAlign:'center', fontSize:13, color:'#556677', marginBottom:8 }}>Reenviar código en <span style={{ color:'#8899AA' }}>0:28</span></div>
        <div style={{ textAlign:'center', fontSize:13, marginBottom:32 }}>
          <span style={{ color:'#00C2B3', cursor:'pointer' }} onClick={() => nav('login')}>¿Otro número?</span>
        </div>
        <div style={{ fontSize:11, textAlign:'center', color:'#556677', marginBottom:20 }}>Ingresá <strong style={{ color:'#8899AA' }}>123456</strong> para continuar</div>
      </div>
      <div style={{ padding:'0 24px 32px' }}>
        <Btn onClick={() => { if(code.join('')==='123456') nav('register'); else setError(true); }}>VERIFICAR</Btn>
      </div>
    </div>
  );
}

function RegisterScreen({ nav }) {
  const [name, setName] = React.useState('');
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ display:'flex', alignItems:'center', padding:'12px 20px', gap:12 }}>
        <button onClick={() => nav('verify')} style={{ background:'none', border:'none', color:'#0D1F2D', fontSize:22, cursor:'pointer', padding:'4px 8px 4px 0' }}>←</button>
        <span style={{ fontSize:16, fontWeight:600, color:'#0D1F2D' }}>Registro</span>
      </div>
      <div style={{ flex:1, padding:'40px 28px 0', display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ fontSize:28, fontWeight:700, color:'#0D1F2D', lineHeight:1.2 }}>¿Cómo te llamás?</div>
        <div style={{ fontSize:14, color:'#888', marginBottom:24 }}>Así te van a ver los conductores</div>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre"
            style={{ height:56, borderRadius:14, border:'1.5px solid #E4E9EE', padding:'0 16px', fontSize:16, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D' }}
          />
          <input placeholder="Apellido (opcional)"
            style={{ height:56, borderRadius:14, border:'1.5px solid #E4E9EE', padding:'0 16px', fontSize:16, fontFamily:'Inter,sans-serif', outline:'none', color:'#0D1F2D' }}
          />
        </div>
      </div>
      <div style={{ padding:'24px' }}>
        <Btn onClick={() => nav('permissions')}>CONTINUAR</Btn>
      </div>
    </div>
  );
}

function PermissionsScreen({ nav }) {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background:'#fff' }}>
      <SBar dark={false} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 32px', gap:20, textAlign:'center' }}>
        <div style={{ width:100, height:100, borderRadius:'50%', background:'#E8F8F6', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00C2B3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
        </div>
        <div style={{ fontSize:26, fontWeight:700, color:'#0D1F2D', lineHeight:1.2 }}>Permití tu ubicación</div>
        <div style={{ fontSize:15, color:'#555', lineHeight:1.7 }}>
          Necesitamos saber dónde estás para enviarte un conductor.<br/><br/>
          Tu ubicación solo se usa durante el viaje y no se comparte.
        </div>
      </div>
      <div style={{ padding:'0 24px 32px', display:'flex', flexDirection:'column', gap:12 }}>
        <Btn onClick={() => nav('home')}>PERMITIR UBICACIÓN</Btn>
        <button onClick={() => nav('home')} style={{ background:'none', border:'none', color:'#888', fontSize:14, cursor:'pointer', padding:'10px' }}>Quizás después</button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, VerifyScreen, RegisterScreen, PermissionsScreen, LiftyIsotipo });
