const Packager = require('@turbowarp/packager');
const {
  glob,
  globSync,
  globStream,
  globStreamSync,
  Glob,
} = require('glob')
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const run = async () => {
  const projectPath=globSync(config.input_path+"*.sb3")[0].toString();
  console.log(projectPath);
  console.log(path.basename(projectPath))
  const projectData = fs.readFileSync(projectPath);
  const loadedProject = await Packager.loadProject(projectData);

  const packager = new Packager.Packager();
  packager.options.autoplay = true;
  packager.options.closeWhenStopped= true;
  
  packager.project = loadedProject;

  const result = await packager.package();
  fs.writeFileSync(path.join(config.output_path, path.basename(projectPath,".sb3")+'.html'), result.data); 
}; 

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });