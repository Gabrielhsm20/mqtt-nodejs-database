# MQTT NodeJS Database  
- Project to monitor MQTT Topics and save to the database

# Installation  
**Main dependencies**  
- [MQTT](https://github.com/mqttjs/MQTT.js/)  
- [Sequelize](https://sequelize.org/)  

For more details `package.json`  

**After clone the project run the command:**  
- `npm install`  

**To define `.env` utilize command:**   
- `cp env.example .env`

**Start server:**
- `npm run serve`

# Settings
**MQTT Server Connection**
- **MQTT_CLIENTID:** Client ID
- **MQTT_SERVER:** MQTT Server Address
- **MQTT_USER:** MQTT Connection User
- **MQTT_PASS:** MQTT Connection Password

**Database Connection**
- **DB_HOST:** Database Host
- **DB_NAME:** Database Name
- **DB_USER:** Database User
- **DB_PASS:** Database Pass
- **DB_DIALECT:** SGBD