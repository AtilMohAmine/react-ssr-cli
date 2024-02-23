import fs from "fs";
import path from "path";

export const readConfig = () => {
  const configFilePath = path.resolve(process.cwd(), 'ssr-config.json');
  let config = {
    port: 3000, // Default port if not provided
    appPath: path.resolve(process.cwd(), "./src/App.js"), // Default app path if not provided
    routes: ["^/$"] // Default routes if not provided
  };

  try {
    const data = fs.readFileSync(configFilePath, 'utf-8');
    const customConfig = JSON.parse(data);
    config = { ...config, ...customConfig };
  } catch (error) {
    if (error.code !== 'ENOENT') {
      // Error other than file not found
      console.error('Error reading configuration file:', error);
    } else {
      console.log('Using default configuration as ssr-config.json is not found');
    }
  }

  return config;
};