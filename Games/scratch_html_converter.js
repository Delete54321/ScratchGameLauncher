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


const run = async () => {
  const projectPath=globSync('D:/New Games/*.sb3')[0].toString();
  console.log(projectPath);
  console.log(path.basename(projectPath))
  const projectData = fs.readFileSync(projectPath);
  const loadedProject = await Packager.loadProject(projectData);

  const packager = new Packager.Packager();
  packager.options.autoplay = true;
  packager.options.closeWhenStopped= true;
  
  packager.project = loadedProject;

  const result = await packager.package();
  fs.writeFileSync(path.join("D:/New Games/", path.basename(projectPath)+'.html'), result.data); 
}; 

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });