# Installation

To install the Scratch Game Launcher on the raspberry pi, you will need a valid install of node.js(version 20 or greater), and two libraries; glob and turbowarp as well as a valid installation of python3

## Node.js install
##### Using Debian, as root (Node.js 20)

Before you begin, ensure that `curl` is installed on your system. If `curl` is not installed, you can install it using the following command:

```sh
apt-get install -y curl
```

1. **Download the setup script:**

   ```sh
   curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
   ```

2. **Run the setup script with sudo:**

   ```sh
   bash nodesource_setup.sh
   ```
3. **Install node.js:**
    
    ```sh 
    apt-get install -y nodejs
    ```
Verify the installation:
```bash
node -v
```
## Glob

```sh
npm install glob
```
## Turbowarp
```sh
npm install --save-exact @turbowarp/packager
```

# Setup
### Config.json
In the config.json located in the Games folder set your input and output paths

The default is: 
```
{
    "input_path": "D:/New Games/",
    "output_path": "D:/New Games/"
}
```
**It is recommended to keep the input and output paths the same.**

### Be sure to include the forward slash at the end of the path. 
**It will not work without it.**

Example for raspberry pi:
```
{
    "input_path": "/media/NewGames/",
    "output_path": "/media/NewGames/"
}
```
## Launching

For easy access, I recommend making a .desktop file.

To create one simply make a new file and save it with file extension ```.desktop```
  
A sample one is provided below:

```
[Desktop Entry]
Type=Application
Name=ScratchGameLauncher
Path=(path to the scratchgamelauncher root folder) Example: /home/pi/Desktop/ScratchGameLauncher/
Exec=python3 game_importer.py
```
