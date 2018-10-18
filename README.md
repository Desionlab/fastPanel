# fastPanel.
The system organization of business processes.

## Requirements
 - NodeJS 8.10+
 - MongoDB 3.6+
 - Redis 3.2+
 - PM2 3.0+

---

## Development

### Global
``` bash
# Install Nodemon globally.
npm install -g nodemon
```

### Starting
``` bash
# Install dependencies.
npm install

# Run develop server.
nodemon
```

---
## Staging \ Production

### Deployment
``` bash
# Install dependencies.
npm install --only=production

# Add workers to process manager or update the environment data.

# Staging.
pm2 startOrReload ecosystem.config.js --env staging

# Production.
pm2 startOrReload ecosystem.config.js --env production
```

### Update
``` bash
# Restart app.
npm install --only=production
pm2 restart fastpanel-worker
```

---

## License
The MIT License (MIT)

---

## Copyright
(c) 2018 Desionlab
