//This module is used for create a '*' filled rectangle
module.exports.triangle = ()=>{
  for(let i = 0;i<parseInt(process.argv[2]);i++){
    for(let j = 0;j<=i;j++){
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
