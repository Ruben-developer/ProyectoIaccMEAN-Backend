function respaldar(){
    const execSync = require('child_process').execSync;    
    const output = execSync('mongodump --db sistemadb --out /home/nbk/workspace/sistema-ventas-stack-mean-master/back/backups/backup-`date +"%d-%m-%Y_%H:%M:%S"`', { encoding: 'utf-8' });  
    console.log('Respaldar: '+ output);
    
}

function listar(req,res){
    const execSync = require('child_process').execSync;
    const output = execSync('ls /home/nbk/workspace/sistema-ventas-stack-mean-master/back/backups/', { encoding: 'utf-8' });  
    var files_data = output.split('\n');
    files_data = cleanArray(files_data);
    console.log('comando:\n', output);
    console.log('archivos:\n', files_data);
    if(files_data){
        res.status(200).send({files: files_data});
    }else{
        res.status(403).send({message: 'No hay archivos de respaldo'});
    }
}

function cleanArray( actual ){
    var newArray = new Array();
    for( var i = 0, j = actual.length; i < j; i++ ){
        if ( actual[ i ] ){
          newArray.push( actual[ i ] );
      }
    }
    return newArray;
  }

function restaurar(req, res){
    
    let backup = req.params['backup'];

    const execSync = require('child_process').execSync;    
    const output = execSync('mongorestore --db sistemadb --drop /home/nbk/workspace/sistema-ventas-stack-mean-master/back/backups/'+backup+'/sistemadb', { encoding: 'utf-8' });  
    console.log('Restaurado con exito: ' + output);

    if(output){
        res.status(200).send({respaldo: output});
    }else{
        res.status(500).send({message: 'error al actualizar'});
    }

    
}

function eliminar(req, res){
    let backup = req.params['backup'];
    console.log('backup: '+backup);
    const execSync = require('child_process').execSync;
    const output = execSync('sudo rm -fr /home/nbk/workspace/sistema-ventas-stack-mean-master/back/backups/'+backup,{ encoding: 'utf-8' });  
    if(output){
        res.status(200).send({respaldo:output});
    }else{
        res.status(500).send({message: 'error al borrar'});
    }

}

module.exports ={
    respaldar,
    listar,
    restaurar,
    eliminar  
}