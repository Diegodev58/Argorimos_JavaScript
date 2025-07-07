User: como abterner la ip de el lugar de la peticion y hacer un boqueo de las ip nodeJS  dame ejemplo en codigo tipo guia, dame un codigo de uso universal tipo guia para uso de dev
Kimi: Aquí tienes un ejemplo completo para obtener la IP del cliente y bloquer IPs en Node.js usando Express:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Lista de IPs bloqueadas (ejemplo)
const blockedIps = [
    '192.168.1.100',
    '10.0.0.1'
];

// Middleware para obtener IP del cliente
function getClientIp(req) {
    // Obtener IP real detrás de proxies
    let ip = req.header('x-forwarded-for') || 
             req.socket.remoteAddress ||
             req.connection.remoteAddress ||
             req.headers['x-real-ip'] ||
             req.ip;

    // Formatear IP (quitar ::ffff: para IPv4)
    return ip
        .replace('::ffff:', '')
        .split(',')[0]
        .trim();
}

// Middleware para bloquear IPs
function blockIps(req, res, next) {
    const clientIp = getClientIp(req);
    
    if (blockedIps.includes(clientIp)) {
        console.log(`IP bloqueada (${clientIp}) intentó acceder`);
        return res.status(403).json({
            error: 'Acceso denegado',
            message: 'Tu dirección IP está bloqueada'
        });
    }
    
    next(); // Continuar si IP no está bloqueada
}

// Aplicar middleware de bloqueo a todas las rutas
app.use(blockIps);

// Ejemplo de endpoint que muestra la IP del cliente
app.get('/ip', (req, res) => {
    res.json({
        success: true,
        ip: getClientIp(req)
    });
});

// Endpoint para administración (requiere autenticación en producción)
app.post('/admin/block', (req, res) => {
    const { ip } = req.body;
    
    if (ip && !blockedIps.includes(ip)) {
        blockedIps.push(ip);
        res.json({
            success: true,
            message: `IP ${ip} bloqueada`
        });
    } else {
        res.status(400).json({
            error: 'IP no válida o ya bloqueada'
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('IPs bloqueadas:', blockedIps);
});
```

**Funciones principales:**

1. **Obtener IP del cliente:**
```javascript
function getClientIp(req) {
    // Maneja varios headers para proxies/load balancers
    // Prioriza x-forwarded-for para servidores detrás de proxies
}
```

2. **Middleware de bloqueo:**
```javascript
function blockIps(req, res, next) {
    // Compara la IP del cliente con la lista negra
    // Responde con 403 si está bloqueada
}
```

**Uso universal:**

1. **Instalación:**
```bash
npm install express
```

2. **Estructura de directorios:**
```
src/
├── app.js
└── .env (opcional para configuración)
```

3. **Ejemplos de uso:**

- Bloquear IP manualmente:
```javascript
blockedIps.push('192.168.1.50');
```

- Usar variables de entorno (más seguro):
```javascript
const blockedIps = process.env.BLOCKED_IPS?.split(',') || [];
```

**Mejoras recomendadas para producción:**

1. Usar una base de datos para almacenar IPs bloqueadas:
```javascript
// Con SQLite ejemplo
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blocked_ips.db');

function isIpBlocked(ip) {
    return new Promise((resolve) => {
        db.get('SELECT * FROM blocked_ips WHERE ip = ?', [ip], (err, row) => {
            resolve(row !== undefined);
        });
    });
}
```

2. Agregar autenticación al endpoint admin:
```javascript
const admin = (req, res, next) => {
    if (req.headers.authorization !== process.env.ADMIN_TOKEN) {
        return res.status(401).send('Acceso no autorizado');
    }
    next();
};

app.post('/admin/block', admin, (req, res) => { /* ... */ });
```

3. Agregar limitación de intentos:
```javascript
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de peticiones
});

app.use(apiLimiter);
```

**Notas importantes:**

1. Siempre verifica las IPs usando headers X-Forwarded-For si estás detrás de un proxy.

2. Considera usar librerías especializadas como:
- `express-ipfilter`
- `express-rate-limit`
- `geoip-lite` (para obtener ubicación por IP)

3. Implementa logs adecuados para monitorizar intentos de acceso bloqueados.

4. Para aplicaciones críticas, considera usar una CDN con filtrado de IP como Cloudflare.

Este código proporciona una base funcional que puedes adaptar a tus necesidades específicas.
