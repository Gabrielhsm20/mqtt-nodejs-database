const mqtt = require("mqtt");
const { StateHistories } = require("../models");

module.exports = class StoreStates {
  constructor() {
    this.client = "";
    this.connected = false;
  }

  async start() {
    console.log(`Started`);
    try {
      await this.config();
      await this.connect();

      if (this.connected) await this.store();
    } catch (e) {
      console.log(`Error: ${e}`);
      process.exit(1);
    }
  }

  async config() {
    console.log(`Setting...`);
    this.client = await mqtt.connect(`mqtt://${process.env.MQTT_SERVER}`, {
      clientId: process.env.MQTT_CLIENTID,
      username: process.env.MQTT_USER,
      password: process.env.MQTT_PASS,
    });
  }

  async connect() {
    console.log(`Connecting...`);
    this.connected = await new Promise((resolve) => {
      this.client.on("connect", () => resolve(true));
      this.client.on("error", (error) => {
        resolve(error.message);
      });
    });

    if (this.connected !== true) throw this.connected;

    this.client.subscribe('#')
  }

  async store() {
    console.log(`Observing topics and storing states...`);
    await this.client.on("message", (topic, state) => {
      if (!topic.toString().match(/test/) && !state.toString().match(/test/)) {
        console.log(`Topic: ${topic} - State: ${state}`);
        StateHistories.create({ topic, state });
      }
    });
  }
};
